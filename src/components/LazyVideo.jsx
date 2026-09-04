import { useEffect, useRef, useState } from "react";

// Defers mounting a background/decorative <video>'s real source until its
// section scrolls near the viewport. The homepage alone stacks six
// autoplay videos (hero, approach, spotlight, treatments, wellness, and
// the embedded booking section) -- without this they'd all start
// downloading and decoding at once on load. Renders a zero-footprint
// marker in place of the video until then, so layout never shifts and
// nothing before it needs to know the video isn't mounted yet.
export default function LazyVideo({ className, rootMargin = "600px 0px", children, ...videoProps }) {
  const anchorRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return undefined;
    const target = anchorRef.current?.parentElement;
    if (!target) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [shouldLoad, rootMargin]);

  if (!shouldLoad) {
    return <span ref={anchorRef} aria-hidden="true" style={{ display: "none" }} />;
  }

  return (
    <video className={className} {...videoProps}>
      {children}
    </video>
  );
}
