import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Target } from "lucide-react";
import { ChevronDownIcon, CloseIcon, MenuIcon } from "./icons";
import { LaurelMark } from "./motifs";

const navLinks = [
  { label: "Home", href: "#home", current: true },
  { label: "Our Approach", href: "#approach" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services", dropdown: true },
  { label: "Wellness", href: "#wellness", dropdown: true },
  { label: "Contact", to: "/book-appointment" },
];

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(() =>
    Math.max(navLinks.findIndex((link) => link.current), 0)
  );
  const linkRefs = useRef([]);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const anchorHref = (hash) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    if (!isHome) {
      setIndicator({ left: 0, width: 0 });
      return;
    }
    const measure = () => {
      const el = linkRefs.current[activeIndex];
      if (el) {
        const inset = 14;
        setIndicator({
          left: el.offsetLeft + inset,
          width: Math.max(el.offsetWidth - inset * 2, 0),
        });
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [activeIndex, isHome]);

  useEffect(() => {
    if (!isHome) return;

    const ids = navLinks.map((link) => link.href?.replace("#", "") ?? null);
    const sections = ids
      .map((id) => (id ? document.getElementById(id) : null))
      .filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = ids.indexOf(entry.target.id);
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { rootMargin: "0px 0px -60% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-cream-50/10 bg-eucalyptus-950/90 shadow-sm shadow-black/20 backdrop-blur-md">
      <nav className="flex items-center justify-between px-4 py-4 sm:px-6 sm:py-5 xl:px-16">
        <a href={isHome ? "#home" : "/"} className="flex min-w-0 items-center gap-2 sm:gap-3">
          <LaurelMark className="h-9 w-9 flex-none text-[#CDEFEA] sm:h-11 sm:w-11" />
          <span className="flex min-w-0 flex-col items-center leading-none sm:items-start">
            <span className="font-script text-2xl font-semibold text-cream-50 sm:text-3xl">
              Asukavi
            </span>
            <span className="mt-1 whitespace-nowrap font-display text-[8px] font-semibold tracking-[0.1em] text-[#A8D5BA] sm:text-xs sm:tracking-[0.3em]">
              ACUPUNCTURE CENTRE
            </span>
          </span>
        </a>

        <ul className="relative hidden items-center gap-3 xl:flex">
          {navLinks.map((link, index) => {
            const linkClassName = `flex items-center gap-1 rounded-full px-4 py-2.5 font-display text-base font-medium tracking-wide transition-colors duration-300 ease-in-out hover:bg-cream-50/5 ${
              isHome && index === activeIndex
                ? "text-cream-50"
                : "text-[#F5F2EB]/95 hover:text-cream-50"
            }`;
            const content = (
              <>
                {link.label}
                {link.dropdown && (
                  <ChevronDownIcon className="h-3.5 w-3.5 opacity-70" />
                )}
                {isHome && index === activeIndex && (
                  <span className="sr-only">(current page)</span>
                )}
              </>
            );
            return (
              <li key={link.label}>
                {link.to ? (
                  <Link
                    ref={(el) => (linkRefs.current[index] = el)}
                    to={link.to}
                    className={linkClassName}
                  >
                    {content}
                  </Link>
                ) : (
                  <a
                    ref={(el) => (linkRefs.current[index] = el)}
                    href={anchorHref(link.href)}
                    onClick={() => isHome && setActiveIndex(index)}
                    className={linkClassName}
                  >
                    {content}
                  </a>
                )}
              </li>
            );
          })}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-1 h-[2px] rounded-full bg-gradient-to-r from-[#A8D5BA]/0 via-[#A8D5BA] to-[#A8D5BA]/0 shadow-[0_0_4px_rgba(168,213,186,0.4)] transition-all duration-300 ease-in-out"
            style={{ left: indicator.left, width: indicator.width }}
          />
        </ul>

        <Link
          to="/book-appointment"
          className="group hidden h-11 items-center gap-2 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-sm border border-white/25 bg-transparent pl-4 pr-6 font-display text-sm font-semibold tracking-wide text-white transition-all duration-300 ease-in-out hover:border-[#A3B899]/70 hover:text-[#A3B899] xl:inline-flex"
        >
          <Target className="h-4 w-4 flex-none opacity-70" />
          <span>Book an Appointment</span>
          <ArrowRight className="h-4 w-4 flex-none transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
        </Link>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-50/15 text-cream-50 transition-colors duration-300 ease-in-out hover:border-[#7ED9A8] xl:hidden"
        >
          {isMenuOpen ? (
            <CloseIcon className="h-5 w-5" />
          ) : (
            <MenuIcon className="h-5 w-5" />
          )}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-cream-50/10 bg-eucalyptus-950/95 px-6 pb-6 pt-2 xl:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, index) => {
              const mobileLinkClassName = `flex items-center gap-1.5 py-2.5 font-display text-base font-medium tracking-wide transition-colors duration-300 ease-in-out ${
                isHome && index === activeIndex
                  ? "text-cream-50"
                  : "text-[#F8F6F2] hover:text-cream-50"
              }`;
              const content = (
                <>
                  {link.label}
                  {link.dropdown && (
                    <ChevronDownIcon className="h-3.5 w-3.5 opacity-70" />
                  )}
                </>
              );
              return (
                <li key={link.label}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      onClick={() => setIsMenuOpen(false)}
                      className={mobileLinkClassName}
                    >
                      {content}
                    </Link>
                  ) : (
                    <a
                      href={anchorHref(link.href)}
                      onClick={() => {
                        if (isHome) setActiveIndex(index);
                        setIsMenuOpen(false);
                      }}
                      className={mobileLinkClassName}
                    >
                      {content}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
          <Link
            to="/book-appointment"
            onClick={() => setIsMenuOpen(false)}
            className="group mt-4 flex h-11 items-center justify-center gap-2.5 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-sm border border-eucalyptus-950/10 bg-[#A3B899] pl-3 pr-6 text-center font-display text-sm font-semibold tracking-wide text-eucalyptus-950 transition-all duration-300 ease-in-out hover:bg-[#8FA588]"
          >
            <Target className="h-4 w-4 flex-none opacity-80" />
            <span>Book an Appointment</span>
            <ArrowRight className="h-4 w-4 flex-none transition-transform duration-300 ease-in-out group-hover:translate-x-1.5" />
          </Link>
        </div>
      )}
    </header>
  );
}
