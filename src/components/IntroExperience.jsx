import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

// Plays once per browser tab session, before the site is "entered" — a
// three-second cinematic reveal of the mark, not a loading screen. See
// index.css (search "Intro Experience") for the choreography itself; this
// component only decides *whether* to play it and cleans up after itself.
const SESSION_KEY = "asukavi-intro-seen";
const TOTAL_MS = 4000;
const UNMOUNT_BUFFER_MS = 150;

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
  const [mounted, setMounted] = useState(shouldPlay);

  useEffect(() => {
    if (!shouldPlay) return undefined;

    // Preload the logo asset so Scene 2's reveal never waits on a decode.
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.as = "image";
    preloadLink.href = logo;
    document.head.appendChild(preloadLink);
    const warm = new Image();
    warm.src = logo;

    const removeTimer = window.setTimeout(() => {
      setMounted(false);
    }, TOTAL_MS + UNMOUNT_BUFFER_MS);

    return () => {
      window.clearTimeout(removeTimer);
      preloadLink.remove();
    };
  }, [shouldPlay]);

  if (!mounted) return null;

  return (
    <div
      aria-hidden="true"
      className="intro-overlay pointer-events-none fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#050f0c]"
    >
      {/* The energy line: sweeps in brightly, recedes as the mark is
          discovered, then dissolves outward as the site is revealed. */}
      <span className="intro-line absolute left-1/2 top-1/2 h-px w-[min(70vw,260px)] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative flex flex-col items-center px-6 text-center">
        <div className="intro-logo-glow pointer-events-none absolute left-1/2 top-9 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full sm:h-48 sm:w-48" />

        <img
          src={logo}
          alt="Asukavi Acupuncture Centre"
          className="intro-logo relative h-20 w-20 rounded-full object-cover shadow-[0_0_38px_rgba(245,242,233,0.32)] sm:h-24 sm:w-24"
        />

        <span className="intro-word-1 mt-5 font-script text-4xl font-semibold tracking-wide text-cream-50 sm:text-5xl">
          Asukavi
        </span>
        <span className="intro-word-2 mt-2 font-display text-[10px] font-medium tracking-[0.34em] text-[#A8D5BA] sm:text-xs sm:tracking-[0.4em]">
          ACUPUNCTURE CENTRE
        </span>

        <span className="intro-rule mt-7 h-px w-10 bg-cream-50/70" />

        <p className="intro-word-3 mt-5 font-display text-[11px] font-medium uppercase tracking-[0.26em] text-cream-100/75 sm:text-xs">
          Tradition of Healing, <span className="text-cream-50">Since 1998</span>
        </p>
      </div>
    </div>
  );
}
