import { useEffect, useRef, useState } from "react";

export default function RiseIn({ children, delay = 0, className = "" }) {
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

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-4 scale-95 opacity-0"
      } ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      }}
    >
      {children}
    </div>
  );
}
