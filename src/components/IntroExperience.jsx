import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

// A quiet opening moment, not a designed animated sequence: the mark,
// wordmark, and "SINCE 1998" fade in together, hold for a short beat, then
// fade out into the homepage. Fixed and short on purpose (900ms hold + a
// 300ms fade either side) rather than tied to page-load speed, so it never
// grows on a slow connection -- real asset loading (hero video, images)
// proceeds underneath in parallel the whole time. Shows once per browser
// tab session.
const SESSION_KEY = "asukavi-intro-seen";
const HOLD_MS = 900;
const FADE_MS = 300;

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
    // rather than let a decorative intro block anyone from the site.
    return false;
  }
}

export default function IntroExperience() {
  const [shouldPlay] = useState(decideShouldPlay);
  const [visible, setVisible] = useState(shouldPlay);
  const [contentIn, setContentIn] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    if (!shouldPlay) return undefined;

    // One rAF tick so the initial opacity-0 state actually paints before
    // switching to opacity-100 -- otherwise the browser can coalesce both
    // and the fade-in never visibly happens.
    const raf = requestAnimationFrame(() => setContentIn(true));

    const holdTimer = window.setTimeout(() => {
      setFadingOut(true);
      window.setTimeout(() => setVisible(false), FADE_MS);
    }, HOLD_MS);

    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(holdTimer);
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
      <div
        className={`flex flex-col items-center px-6 text-center transition-opacity duration-500 ease-out ${
          contentIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <img
          src={logo}
          alt="Asukavi Acupuncture Centre"
          className="h-16 w-16 rounded-full object-cover sm:h-20 sm:w-20"
        />
        <span className="mt-5 font-script text-4xl font-semibold tracking-wide text-cream-50 sm:mt-6 sm:text-5xl">
          Asukavi
        </span>
        <span className="mt-1.5 font-display text-[11px] font-medium tracking-[0.32em] text-[#A8D5BA] sm:text-xs sm:tracking-[0.4em]">
          ACUPUNCTURE CENTRE
        </span>
        <span className="mt-7 font-display text-[10px] font-medium tracking-[0.3em] text-cream-100/55 sm:mt-8 sm:text-[11px]">
          SINCE 1998
        </span>
      </div>
    </div>
  );
}
