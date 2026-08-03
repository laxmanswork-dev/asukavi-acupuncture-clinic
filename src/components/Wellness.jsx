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
import RiseIn from "./RiseIn";
import relaxImg from "../assets/add.png";
import wellnessVideo from "../assets/well.mp4";

const wellnessItems = [
  { icon: BreathRipplesIcon, label: "Stress Relief" },
  { icon: SleepCrescentIcon, label: "Better Sleep" },
  { icon: AcuPointIcon, label: "Pain Relief" },
  { icon: BalanceScaleIcon, label: "Emotional Balance" },
  { icon: ShieldCheckIcon, label: "Immune Support" },
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

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center gap-8 px-6 py-12 lg:h-full lg:px-10 lg:py-0">
        <div className="grid items-center gap-10 lg:grid-cols-[2fr_3fr] lg:gap-16">
          <FadeUp>
            <div>
              <p className="font-display text-sm font-semibold tracking-[0.3em] text-[#A8D5BA]">
                WHOLE-PERSON WELLNESS
              </p>
              <h2
                className="mt-3 text-4xl font-bold leading-tight tracking-tight text-cream-50 sm:text-5xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Natural Healing.
                <br />
                Balanced Living.
              </h2>
              <p className="mt-5 max-w-sm font-body text-base leading-relaxed text-[#E8ECEF] lg:text-lg">
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
            <div className="relative mx-auto aspect-[16/10] w-full max-w-[460px]">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-8 -z-10 rounded-full bg-[#7ED9A8]/16 blur-3xl"
              />
              <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-[#C0C6CC]/25 shadow-2xl shadow-black/50">
                <img
                  src={relaxImg}
                  alt="Relaxed patient after an acupuncture treatment at Asukavi Acupuncture Clinic"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-eucalyptus-950/45 via-transparent to-transparent" />
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-cream-50/10 pt-7 sm:grid-cols-5 lg:gap-x-4">
          {wellnessItems.map(({ icon: Icon, label }, index) => (
            <RiseIn key={label} delay={index * 100}>
              <div className="flex flex-col items-center gap-2.5 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#7ED9A8]/35 bg-white/[0.03]">
                  <Icon className="h-5 w-5 text-[#CDEFEA]" strokeWidth={1.25} />
                </span>
                <p className="font-display text-xs font-medium leading-snug tracking-wide text-cream-100">
                  {label}
                </p>
              </div>
            </RiseIn>
          ))}
        </div>
      </div>
    </section>
  );
}
