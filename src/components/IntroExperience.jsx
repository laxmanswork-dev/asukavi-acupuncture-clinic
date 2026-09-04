import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo.png";

// A brief loading mask, not a brand-reveal animation -- it exists only to
// bridge the moment between first paint and the homepage actually being
// ready, then it's gone. No fixed multi-second timeline: it races the
// page's "load" event against a small hard cap, so a slow connection is
// bridged smoothly but never made to wait artificially, and a fast one
// barely sees it at all. Shows once per browser tab session.
const SESSION_KEY = "asukavi-intro-seen";
const MAX_WAIT_MS = 500;
const FADE_MS = 200;

function decideShouldPlay() {
  if (typeof window === "undefined") return false;
  try {
    const alreadySeen = window.sessionStorage.getItem(SESSION_KEY);
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (alreadySeen || prefersReducedMotion) {
      if (!alreadySeen) window.sessionStorage.setItem(SESSION_KEY, "1");
      return false;
    }
    window.sessionStorage.setItem(SESSION_KEY, "1");
    return true;
  } catch {
    // Storage unavailable (e.g. locked-down private browsing) — fail open
    // rather than let a decorative mask block anyone from the site.
    return false;
  }
}

export default function IntroExperience() {
  const [shouldPlay] = useState(decideShouldPlay);
  const [visible, setVisible] = useState(shouldPlay);
  const [fadingOut, setFadingOut] = useState(false);
  const doneRef = useRef(false);

  useEffect(() => {
    if (!shouldPlay) return undefined;

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      setFadingOut(true);
      window.setTimeout(() => setVisible(false), FADE_MS);
    };

    // If everything is already loaded by the time this effect runs (fast
    // connection, warm cache), there's nothing to bridge — end instantly.
    if (document.readyState === "complete") {
      finish();
      return undefined;
    }

    window.addEventListener("load", finish);
    const capTimer = window.setTimeout(finish, MAX_WAIT_MS);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(capTimer);
    };
  }, [shouldPlay]);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[999] flex items-center justify-center bg-eucalyptus-950 transition-opacity ease-out ${
        fadingOut ? "opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: `${FADE_MS}ms` }}
    >
      <img
        src={logo}
        alt=""
        className="h-12 w-12 rounded-full object-cover sm:h-14 sm:w-14"
      />
    </div>
  );
}
