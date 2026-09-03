import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "./icons";
import traditionalImg from "../assets/services/acu.png";
import earImg from "../assets/services/ear.png";
import cuppingImg from "../assets/services/cup.png";
import moxibustionImg from "../assets/services/moxi.png";
import wellnessImg from "../assets/services/well.png";
import servicesVideo from "../assets/ser.mp4";

const EASE = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.08 },
  },
};

const wordFadeUp = {
  hidden: { opacity: 0, y: 6 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: EASE } },
};

const wordStagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035, delayChildren: 0.05 } },
};

function RevealWords({ text, as = "span", className, style }) {
  const MotionTag = motion[as];
  const words = text.split(" ");
  return (
    <MotionTag variants={wordStagger} className={className} style={style}>
      {words.map((word, i) => (
        <motion.span key={i} variants={wordFadeUp} style={{ display: "inline-block" }}>
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}

// Signature Asukavi silhouette: three softly rounded corners with one
// deliberate sharp "cut" -- the same family used on the site's buttons.
// Each composition below rotates which corner is cut and how generously
// the rest are rounded, so the shape reads as one design language without
// any two blocks sharing an identical outline.
const CARD_STYLE = {
  backgroundColor: "#0F1C18",
  border: "1.5px solid rgba(192,198,204,0.35)",
};

const CARD_CLASS =
  "relative flex h-full min-h-0 flex-col overflow-hidden transition-shadow duration-500 group-hover:shadow-[0_24px_48px_-18px_rgba(0,0,0,0.6)]";

const IMG_CLASS =
  "absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]";

const BOTTOM_SCRIM = (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%]"
    style={{ background: "linear-gradient(to top, rgba(10,22,20,0.9), transparent)" }}
  />
);

const TOP_HIGHLIGHT = (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
  />
);

const LIFT_STYLE = { transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" };

// Existing content preserved verbatim -- only the layout structure changes.
const services = [
  {
    image: earImg,
    title: "Auricular (Ear) Acupuncture",
    description:
      "Targeted ear-point therapy that supports stress relief, emotional balance, and overall wellbeing.",
  },
  {
    image: cuppingImg,
    title: "Cupping Therapy",
    description:
      "Helps relieve muscle tension, improve circulation, and support natural recovery.",
  },
  {
    image: moxibustionImg,
    title: "Moxibustion",
    description:
      "Gentle heat therapy that stimulates circulation and strengthens the body's natural defenses.",
  },
  {
    image: wellnessImg,
    title: "Naturopathy",
    description:
      "A natural approach to wellness that supports the body's ability to heal, restore balance, and promote lasting wellbeing.",
  },
];

const [earService, cuppingService, moxibustionService, naturopathyService] = services;

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-cream-50/12"
    >
      <video
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover blur-[3px]"
        autoPlay
        muted
        loop
        playsInline
        src={servicesVideo}
      />
      <div aria-hidden="true" className="absolute inset-0 bg-eucalyptus-950/75" />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 15%, transparent 30%, rgba(10,22,20,0.7) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-[760px] flex-none text-center"
        >
          <p
            className="font-display font-medium text-[#B8C9BE]"
            style={{ fontSize: "15px", letterSpacing: "0.22em" }}
          >
            OUR SERVICES
          </p>
          <h2
            className="mt-4 text-cream-50"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: "clamp(1.9rem, 3vw, 2.75rem)",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Traditional Healing. Thoughtfully Personalized.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="mx-auto mt-12 flex w-full max-w-[1320px] flex-col gap-6 lg:mt-16 lg:gap-8"
        >
          {/* I. Traditional Acupuncture — the featured, full-width composition */}
          <motion.div variants={fadeUp} className="relative min-h-0">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-2 -z-10 rounded-tl-[40px] rounded-tr-[14px] rounded-br-[40px] rounded-bl-[40px] bg-[#C0C6CC]/8 blur-xl"
            />
            <div
              className="group relative h-[380px] overflow-hidden rounded-tl-[40px] rounded-tr-[14px] rounded-br-[40px] rounded-bl-[40px] border border-[#C0C6CC]/60 transition-[transform,border-color] duration-500 hover:-translate-y-1.5 sm:h-[440px]"
              style={LIFT_STYLE}
            >
              <div className={CARD_CLASS} style={{ ...CARD_STYLE, border: "none" }}>
                <img
                  src={traditionalImg}
                  alt=""
                  aria-hidden="true"
                  className={IMG_CLASS}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1614]/92 via-[#0a1614]/40 to-[#0a1614]/5 sm:bg-gradient-to-r sm:from-[#0a1614]/92 sm:via-[#0a1614]/55 sm:to-transparent"
                />
                {TOP_HIGHLIGHT}
                <div className="relative z-10 flex h-full min-h-0 flex-col justify-end gap-3 p-7 sm:max-w-lg sm:justify-center sm:p-10">
                  <RevealWords
                    as="h3"
                    text="Traditional Acupuncture"
                    className="text-[26px] text-cream-50 transition-colors duration-500 group-hover:text-[#CFF3DD] sm:text-[34px]"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 700,
                      lineHeight: 1.12,
                    }}
                  />
                  <RevealWords
                    as="p"
                    text="Fine-needle therapy designed to restore energy flow, relieve pain, and support your body’s natural healing."
                    className="max-w-md font-body text-[16px] leading-relaxed text-[#E8ECEF]/90"
                  />
                  <Link
                    to="/treatments/traditional-acupuncture"
                    className="group/btn mt-1 inline-flex h-11 w-fit items-center gap-2 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-sm bg-[#A3B899] px-6 font-display text-[15px] font-semibold text-eucalyptus-950 shadow-md shadow-[#A3B899]/25 transition-all duration-300 hover:scale-[1.02] hover:bg-[#8FA588]"
                  >
                    Explore Treatment
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-2" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* II. Auricular (Ear) Acupuncture — an alternate relationship:
              the image sits as its own object beside plain-set text on the
              dark ground, rather than text overlaid on the photograph. */}
          <motion.div
            variants={fadeUp}
            className="grid items-center gap-6 lg:grid-cols-[0.55fr_0.45fr] lg:gap-12"
          >
            <div className="relative order-2 h-[260px] overflow-hidden rounded-tl-[24px] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[8px] border border-[#C0C6CC]/35 sm:h-[320px] lg:order-1 lg:h-[300px]">
              <img src={earImg} alt="" aria-hidden="true" className={IMG_CLASS} />
              {TOP_HIGHLIGHT}
            </div>
            <div className="order-1 lg:order-2">
              <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-[#A8D5BA]">
                II
              </span>
              <h3
                className="mt-3 text-[26px] text-cream-50 sm:text-[30px]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  lineHeight: 1.15,
                }}
              >
                {earService.title}
              </h3>
              <p className="mt-3 max-w-md font-body text-[15px] leading-relaxed text-[#E8ECEF]/90">
                {earService.description}
              </p>
            </div>
          </motion.div>

          {/* III. Cupping Therapy — a wide, cinematic strip */}
          <motion.div variants={fadeUp} className="relative min-h-0">
            <div className="group relative h-[220px] overflow-hidden rounded-tl-[10px] rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px] border border-[#C0C6CC]/35 transition-[transform,border-color] duration-500 hover:-translate-y-1 sm:h-[260px]">
              <div className={CARD_CLASS} style={{ ...CARD_STYLE, border: "none" }}>
                <img
                  src={cuppingImg}
                  alt=""
                  aria-hidden="true"
                  className={`${IMG_CLASS} object-[50%_35%]`}
                />
                {BOTTOM_SCRIM}
                <div className="relative z-10 flex h-full min-h-0 flex-col justify-end gap-1.5 p-6 sm:p-8">
                  <RevealWords
                    as="h3"
                    text={cuppingService.title}
                    className="font-display text-[22px] font-bold leading-snug text-cream-50 transition-colors duration-500 group-hover:text-[#CFF3DD] sm:text-[26px]"
                  />
                  <RevealWords
                    as="p"
                    text={cuppingService.description}
                    className="max-w-md font-body text-[15px] leading-snug text-[#E8ECEF]/90"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* IV. Moxibustion & Naturopathy — an asymmetric closing pair */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-5 sm:items-start sm:gap-6">
            <motion.div variants={fadeUp} className="min-h-0 sm:col-span-3">
              <div
                className="group relative h-[240px] overflow-hidden rounded-tl-[20px] rounded-tr-[20px] rounded-br-[6px] rounded-bl-[20px] border border-transparent transition-[transform,border-color] duration-500 hover:-translate-y-1.5 hover:border-[#C0C6CC]/55 sm:h-[300px]"
                style={LIFT_STYLE}
              >
                <div className={CARD_CLASS} style={CARD_STYLE}>
                  <img
                    src={moxibustionImg}
                    alt=""
                    aria-hidden="true"
                    className={IMG_CLASS}
                  />
                  {BOTTOM_SCRIM}
                  {TOP_HIGHLIGHT}
                  <div className="relative z-10 flex h-full min-h-0 flex-col justify-end gap-1.5 p-6">
                    <RevealWords
                      as="h3"
                      text={moxibustionService.title}
                      className="font-display text-[21px] font-bold leading-snug text-cream-50 transition-colors duration-500 group-hover:text-[#CFF3DD]"
                    />
                    <RevealWords
                      as="p"
                      text={moxibustionService.description}
                      className="line-clamp-2 font-body text-[15px] leading-snug text-[#E8ECEF]/90"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="min-h-0 sm:col-span-2 sm:mt-10">
              <div
                className="group relative h-[240px] overflow-hidden rounded-tl-[6px] rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] border border-transparent transition-[transform,border-color] duration-500 hover:-translate-y-1.5 hover:border-[#C0C6CC]/55 sm:h-[300px]"
                style={LIFT_STYLE}
              >
                <div className={CARD_CLASS} style={CARD_STYLE}>
                  <img
                    src={wellnessImg}
                    alt=""
                    aria-hidden="true"
                    className={IMG_CLASS}
                  />
                  {BOTTOM_SCRIM}
                  {TOP_HIGHLIGHT}
                  <div className="relative z-10 flex h-full min-h-0 flex-col justify-end gap-1.5 p-6">
                    <RevealWords
                      as="h3"
                      text={naturopathyService.title}
                      className="font-display text-[21px] font-bold leading-snug text-cream-50 transition-colors duration-500 group-hover:text-[#CFF3DD]"
                    />
                    <RevealWords
                      as="p"
                      text={naturopathyService.description}
                      className="line-clamp-3 font-body text-[15px] leading-snug text-[#E8ECEF]/90"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
