import { useEffect, useRef, useState } from "react";

export default function SlideIn({
  children,
  delay = 0,
  direction = "left",
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const hidden = direction === "left" ? "-translate-x-5" : "translate-x-5";

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-out ${
        visible ? "translate-x-0 opacity-100" : `${hidden} opacity-0`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
