import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target } from "lucide-react";
import {
  AcuPointIcon,
  BalanceScaleIcon,
  BreathRipplesIcon,
  ShieldCheckIcon,
  SleepCrescentIcon,
} from "./icons";
import FadeUp from "./FadeUp";
import relaxImg from "../assets/add.png";
import wellnessVideo from "../assets/well.mp4";

const wellnessItems = [
  {
    icon: BreathRipplesIcon,
    label: "Stress Relief",
    description: "Reduces everyday stress and promotes relaxation.",
  },
  {
    icon: SleepCrescentIcon,
    label: "Better Sleep",
    description: "Supports deeper, more restorative sleep.",
  },
  {
    icon: AcuPointIcon,
    label: "Pain Relief",
    description: "Helps relieve discomfort and improve mobility.",
  },
  {
    icon: BalanceScaleIcon,
    label: "Emotional Balance",
    description: "Encourages calmness and emotional wellbeing.",
  },
  {
    icon: ShieldCheckIcon,
    label: "Immune Support",
    description: "Supports the body's natural healing response.",
  },
];

export default function Wellness() {
  const [activeIndex, setActiveIndex] = useState(null);
  const active = activeIndex === null ? null : wellnessItems[activeIndex];
  const displayCaption = active
    ? { label: active.label, description: active.description }
    : null;

  return (
    <section
      id="wellness"
      className="relative overflow-hidden border-t border-cream-50/12 lg:h-[calc(100svh-5.5rem)]"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-eucalyptus-950" />
      <video
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={wellnessVideo}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-eucalyptus-950/75" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 78% 50%, rgba(126,217,168,0.14), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 100%, transparent 40%, rgba(10,22,20,0.6) 100%)",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center gap-8 px-6 py-12 lg:h-full lg:px-10 lg:py-0">
        <div className="grid items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <FadeUp>
            <div>
              <p className="font-display text-sm font-semibold tracking-[0.3em] text-[#A8D5BA]">
                WHOLE-PERSON WELLNESS
              </p>
              <h2
                className="mt-3 text-4xl font-bold leading-tight tracking-tight text-cream-50 transition-all duration-300 ease-out sm:text-5xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Natural Healing.
                <br />
                Balanced Living.
              </h2>
              <p className="mt-5 max-w-sm font-body text-base leading-relaxed text-[#E8ECEF] transition-all duration-300 ease-out lg:text-lg">
                Acupuncture supports your body&rsquo;s natural balance,
                helping improve physical comfort, emotional wellbeing, and
                everyday quality of life.
              </p>
              <div className="mt-7">
                <Link
                  to="/book-appointment"
                  className="group inline-flex h-[52px] items-center gap-2 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-sm border border-eucalyptus-950/10 bg-[#A3B899] px-7 font-display text-base font-semibold tracking-wide text-eucalyptus-950 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#8FA588] active:scale-[0.98]"
                >
                  <Target size={18} strokeWidth={2} className="flex-none opacity-80" />
                  <span>Book an Appointment</span>
                  <ArrowRight
                    size={18}
                    strokeWidth={2}
                    className="flex-none transition-transform duration-300 ease-in-out group-hover:translate-x-1.5"
                  />
                </Link>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={150}>
            <div className="relative mx-auto aspect-[16/10] w-full max-w-[485px] min-[1920px]:max-w-[620px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[#7ED9A8]/16 blur-3xl motion-reduce:transition-none"
                style={{
                  transition: "opacity 400ms ease-out",
                  opacity: active ? 0.9 : 0.6,
                }}
              />
              <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-[#C0C6CC]/25 shadow-2xl shadow-black/50 transition-[border-color] duration-300 hover:border-[#7ED9A8]/40">
                <img
                  src={relaxImg}
                  alt="Relaxed patient after an acupuncture treatment at Asukavi Acupuncture Clinic"
                  className="absolute inset-0 h-full w-full object-cover motion-reduce:transition-none"
                  style={{
                    transform: active ? "scale(1.03)" : "scale(1)",
                    filter: active ? "brightness(1.03)" : "brightness(1)",
                    transition:
                      "transform 400ms cubic-bezier(0.22,1,0.36,1), filter 300ms ease-out",
                  }}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-eucalyptus-950/55 via-transparent to-transparent" />

                {displayCaption && (
                  <div
                    className="absolute inset-x-0 bottom-0 p-5 motion-reduce:transition-none"
                    style={{
                      transition: "opacity 300ms ease-out, transform 300ms ease-out",
                    }}
                    key={displayCaption.label}
                  >
                    <p className="font-display text-base font-semibold text-cream-50">
                      {displayCaption.label}
                    </p>
                    <p className="mt-1 font-body text-[13px] leading-snug text-[#E8ECEF]/90">
                      {displayCaption.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </FadeUp>
        </div>

        <div
          className="grid grid-cols-2 gap-x-4 gap-y-5 border-t border-cream-50/10 pt-7 sm:grid-cols-5 sm:gap-x-4"
          role="tablist"
          aria-label="Wellness benefits"
        >
          {wellnessItems.map(({ icon: Icon, label }, index) => {
            const isActive = activeIndex === index;
            return (
              <button
                key={label}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() =>
                  setActiveIndex((current) => (current === index ? null : index))
                }
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onFocus={() => setActiveIndex(index)}
                onBlur={() => setActiveIndex(null)}
                className="group flex min-h-[48px] flex-col items-center gap-2.5 rounded-2xl p-1.5 text-center transition-transform duration-300 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7ED9A8]/70"
              >
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ease-out"
                  style={{
                    borderColor: isActive
                      ? "rgba(126,217,168,0.85)"
                      : "rgba(126,217,168,0.3)",
                    backgroundColor: isActive
                      ? "rgba(126,217,168,0.12)"
                      : "rgba(255,255,255,0.03)",
                    boxShadow: isActive
                      ? "0 0 18px rgba(126,217,168,0.45)"
                      : "none",
                    transform: isActive ? "scale(1.1)" : "scale(1)",
                  }}
                >
                  <Icon
                    className="h-5 w-5 transition-colors duration-300 ease-out"
                    style={{ color: isActive ? "#CDEFEA" : "rgba(205,239,234,0.65)" }}
                    strokeWidth={1.25}
                  />
                </span>
                <span className="flex flex-col items-center gap-1">
                  <p
                    className="font-display text-xs leading-snug tracking-wide transition-all duration-300 ease-out"
                    style={{
                      color: isActive ? "#F5F2E9" : "rgba(245,242,233,0.65)",
                      fontWeight: isActive ? 700 : 500,
                    }}
                  >
                    {label}
                  </p>
                  <span
                    aria-hidden="true"
                    className="h-[2px] rounded-full bg-[#7ED9A8] transition-all duration-300 ease-out"
                    style={{ width: isActive ? "20px" : "0px", opacity: isActive ? 1 : 0 }}
                  />
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
