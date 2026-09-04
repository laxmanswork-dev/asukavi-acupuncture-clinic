import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router doesn't reset scroll position on navigation by default --
// without this, clicking a cross-page link (e.g. "Explore Treatment" on
// the homepage) swaps in the new page but leaves the viewport wherever
// it was scrolled to on the old one, which reads as a broken/no-op link.
// Pages that need to land on a specific in-page anchor (e.g.
// /book-appointment#visit-clinic) already scroll themselves via their own
// location.hash effect, so this skips whenever a hash is present and
// lets that take over instead.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
