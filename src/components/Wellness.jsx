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
import HealReveal from "./HealReveal";
import { NeedleUnderline } from "./motifs";
import relaxImg from "../assets/add.png";
import wellnessVideo from "../assets/well.mp4";

const GLASS_CARD_STYLE = {
  backgroundColor: "rgba(16,26,22,0.6)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(126,217,168,0.28)",
};

const CARD_TRANSITION = { transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" };

const CARD_CLASS =
  "group hidden lg:absolute lg:flex w-[212px] items-start gap-3 rounded-[20px] p-4 shadow-[0_12px_24px_-10px_rgba(0,0,0,0.5)] transition-[transform,border-color,backdrop-filter] duration-500 hover:-translate-y-1.5 hover:scale-[1.02] hover:border-[#7ED9A8]/60 hover:backdrop-blur-[20px]";

const MOBILE_CARD_CLASS =
  "flex items-start gap-3 rounded-[18px] p-4 lg:hidden";

const wellnessItems = [
  {
    icon: BreathRipplesIcon,
    label: "Stress Relief",
    description: "Reduces everyday stress and promotes relaxation.",
    position: "left-0 top-2 -translate-x-1/4",
  },
  {
    icon: SleepCrescentIcon,
    label: "Better Sleep",
    description: "Supports deeper, more restorative sleep.",
    position: "right-0 top-10 translate-x-1/4",
  },
  {
    icon: AcuPointIcon,
    label: "Pain Relief",
    description: "Helps relieve discomfort and improve mobility.",
    position: "left-0 top-1/2 -translate-x-[30%] -translate-y-1/2",
  },
  {
    icon: BalanceScaleIcon,
    label: "Emotional Balance",
    description: "Encourages calmness and emotional wellbeing.",
    position: "right-0 bottom-16 translate-x-[30%]",
  },
  {
    icon: ShieldCheckIcon,
    label: "Immune Support",
    description: "Supports the body's natural healing response.",
    position: "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/3",
  },
];

export default function Wellness() {
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

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 py-16 lg:h-full lg:px-10 lg:py-0">
        <div className="grid items-center gap-14 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <FadeUp>
            <div>
              <p className="font-display text-sm font-semibold tracking-[0.3em] text-[#A8D5BA]">
                WHOLE-PERSON WELLNESS
              </p>
              <h2
                className="mt-5 text-4xl font-bold leading-tight tracking-tight text-cream-50 sm:text-5xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Feel Better.
                <br />
                Live Better.
              </h2>
              <NeedleUnderline
                aria-hidden="true"
                className="mt-4 h-4 w-32 text-gold-400/80"
              />
              <p className="mt-6 max-w-sm font-body text-base leading-relaxed text-[#E8ECEF] lg:text-lg">
                Acupuncture supports your body&rsquo;s natural balance,
                helping improve physical comfort, emotional wellbeing, and
                everyday quality of life.
              </p>
              <div className="mt-8">
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
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[380px] lg:max-w-[420px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[#7ED9A8]/16 blur-3xl"
              />
              <div className="relative h-full w-full overflow-hidden rounded-[32px] border border-[#C0C6CC]/25 shadow-2xl shadow-black/50">
                <img
                  src={relaxImg}
                  alt="Relaxed patient after an acupuncture treatment at Asukavi Acupuncture Clinic"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eucalyptus-950/50 via-transparent to-transparent" />
              </div>

              {wellnessItems.map(({ icon: Icon, label, description, position }, index) => (
                <div
                  key={label}
                  className={`${CARD_CLASS} ${position}`}
                  style={{ ...GLASS_CARD_STYLE, ...CARD_TRANSITION }}
                >
                  <span className="relative flex h-10 w-10 flex-none items-center justify-center rounded-full border border-[#7ED9A8]/40 bg-white/5">
                    <span
                      aria-hidden="true"
                      className="heal-pulse-ring absolute inset-0 rounded-full border border-[#7ED9A8]/50"
                      style={{ animationDelay: `${index * 300}ms` }}
                    />
                    <Icon className="relative h-5 w-5 text-[#CDEFEA]" />
                  </span>
                  <HealReveal delay={index * 120} className="min-w-0">
                    <p className="font-display text-[15px] font-semibold leading-snug text-cream-50">
                      {label}
                    </p>
                    <p className="mt-1 font-body text-[12.5px] leading-snug text-[#E8ECEF]/75">
                      {description}
                    </p>
                  </HealReveal>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
              {wellnessItems.map(({ icon: Icon, label, description }, index) => (
                <div
                  key={label}
                  className={MOBILE_CARD_CLASS}
                  style={{ ...GLASS_CARD_STYLE, ...CARD_TRANSITION }}
                >
                  <span className="relative flex h-9 w-9 flex-none items-center justify-center rounded-full border border-[#7ED9A8]/40 bg-white/5">
                    <span
                      aria-hidden="true"
                      className="heal-pulse-ring absolute inset-0 rounded-full border border-[#7ED9A8]/50"
                      style={{ animationDelay: `${index * 300}ms` }}
                    />
                    <Icon className="relative h-4 w-4 text-[#CDEFEA]" />
                  </span>
                  <HealReveal delay={index * 120} className="min-w-0">
                    <p className="font-display text-sm font-semibold leading-snug text-cream-50">
                      {label}
                    </p>
                    <p className="mt-0.5 font-body text-xs leading-snug text-[#E8ECEF]/75">
                      {description}
                    </p>
                  </HealReveal>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
