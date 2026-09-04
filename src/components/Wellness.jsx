import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Leaf, Moon, ShieldCheck, Target } from "lucide-react";
import FadeUp from "./FadeUp";
import LazyVideo from "./LazyVideo";
import { NeedleHealingSparkIcon } from "./icons";
import wellnessVideo from "../assets/well.mp4";
import stressImg from "../assets/services/stress.png";
import sleepImg from "../assets/services/sleep.png";
import painImg from "../assets/services/pain.png";
import balanceImg from "../assets/services/balance.png";
import immuneImg from "../assets/services/immune.png";

const wellnessItems = [
  {
    icon: Heart,
    label: "Emotional Balance",
    description: "Encourages calmness and emotional wellbeing.",
    image: balanceImg,
  },
  {
    icon: Leaf,
    label: "Stress Relief",
    description: "Reduces everyday stress and promotes relaxation.",
    image: stressImg,
  },
  {
    icon: Moon,
    label: "Better Sleep",
    description: "Supports deeper, more restorative sleep.",
    image: sleepImg,
  },
  {
    icon: NeedleHealingSparkIcon,
    label: "Pain Relief",
    description: "Helps relieve discomfort and improve mobility.",
    image: painImg,
  },
  {
    icon: ShieldCheck,
    label: "Immune Support",
    description: "Supports the body's natural healing response.",
    image: immuneImg,
  },
];

const REDUCE_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function RevealCaption({ label, description }) {
  if (REDUCE_MOTION) {
    return (
      <>
        <p className="font-display text-base font-semibold text-cream-50">
          {label}
        </p>
        <p className="mt-1 font-body text-[13px] leading-snug text-[#E8ECEF]/90">
          {description}
        </p>
      </>
    );
  }

  const labelWords = label.split(" ");
  const descWords = description.split(" ");
  const wordStagger = 100;
  const descStart = labelWords.length * wordStagger + 180;

  return (
    <>
      <p className="font-display text-base font-semibold text-cream-50">
        {labelWords.map((word, i) => (
          <span
            key={i}
            className="word-reveal mr-[0.3em]"
            style={{ animationDelay: `${i * wordStagger}ms` }}
          >
            {word}
          </span>
        ))}
      </p>
      <p className="mt-1 font-body text-[13px] leading-snug text-[#E8ECEF]/90">
        {descWords.map((word, i) => (
          <span
            key={i}
            className="word-reveal mr-[0.25em]"
            style={{ animationDelay: `${descStart + i * 55}ms` }}
          >
            {word}
          </span>
        ))}
      </p>
    </>
  );
}

export default function Wellness() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = wellnessItems[activeIndex];
  const displayCaption = { label: active.label, description: active.description };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % wellnessItems.length);
    }, 5000);
    return () => clearInterval(id);
  }, [activeIndex]);

  return (
    <section
      id="wellness"
      className="relative overflow-hidden border-t border-cream-50/12 lg:h-[calc(100svh-5.5rem)]"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-eucalyptus-950" />
      <LazyVideo
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
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

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center gap-7 px-6 py-12 lg:h-full lg:px-10 lg:py-0">
        <div className="grid items-center gap-10 lg:grid-cols-[2fr_3fr] lg:items-start lg:gap-12">
          <FadeUp>
            <div>
              <p className="font-display text-sm font-medium tracking-[0.22em] text-[#B8C9BE]">
                WHOLE-PERSON WELLNESS
              </p>
              <h2
                className="mt-4 text-4xl text-cream-50 transition-all duration-300 ease-out sm:text-5xl"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                }}
              >
                Natural Healing.
                <br />
                Balanced Living.
              </h2>
              <p className="mt-6 max-w-sm font-body text-base leading-relaxed text-[#E8ECEF] transition-all duration-300 ease-out lg:text-lg">
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
            <div className="relative mx-auto aspect-[16/10] w-full max-w-[620px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[#7ED9A8]/16 blur-3xl motion-reduce:transition-none"
                style={{
                  transition: "opacity 400ms ease-out",
                  opacity: 0.75,
                }}
              />
              <div className="relative h-full w-full overflow-hidden rounded-tl-[28px] rounded-tr-[10px] rounded-br-[28px] rounded-bl-[28px] border border-[#C0C6CC]/25 shadow-2xl shadow-black/50 transition-[border-color] duration-300 hover:border-[#7ED9A8]/40">
                {wellnessItems.map((item, i) => {
                  const isVisible = activeIndex === i;
                  return (
                    <img
                      key={item.label}
                      src={item.image}
                      alt={isVisible ? item.label : ""}
                      aria-hidden={isVisible ? undefined : true}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover motion-reduce:transition-none"
                      style={{
                        objectPosition: "50% 30%",
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible ? "scale(1)" : "scale(1.03)",
                        transition:
                          "opacity 400ms cubic-bezier(0.22,1,0.36,1), transform 400ms cubic-bezier(0.22,1,0.36,1), filter 300ms ease-out",
                        filter: isVisible ? "brightness(1.03)" : "brightness(1)",
                      }}
                    />
                  );
                })}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 50%)",
                  }}
                />

                {displayCaption && (
                  <div
                    className="absolute inset-x-0 bottom-0 p-5 motion-reduce:transition-none"
                    style={{
                      transition: "opacity 300ms ease-out, transform 300ms ease-out",
                    }}
                    key={displayCaption.label}
                  >
                    <RevealCaption
                      label={displayCaption.label}
                      description={displayCaption.description}
                    />
                  </div>
                )}
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
