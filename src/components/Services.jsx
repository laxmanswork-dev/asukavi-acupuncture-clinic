import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "./icons";
import { SilverNeedleAccent } from "./motifs";
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
      {words.map((word, i) => [
        <motion.span key={`w${i}`} variants={wordFadeUp} style={{ display: "inline-block" }}>
          {word}
        </motion.span>,
        i < words.length - 1 ? " " : null,
      ])}
    </MotionTag>
  );
}

const threeLineDesc = { maxHeight: "66px", overflow: "hidden", flexShrink: 0 };

// Signature Asukavi card silhouette: three softly rounded corners with one
// deliberate sharp "cut" -- the same notch used on the site's buttons.
// Each card below rotates which corner is cut, so the shape family reads
// as intentional variation rather than one component stamped out four times.
const CARD_STYLE = {
  backgroundColor: "#0F1C18",
  border: "1.5px solid rgba(192,198,204,0.35)",
};

const CARD_CLASS =
  "relative flex h-full min-h-0 flex-col overflow-hidden transition-shadow duration-500 group-hover:shadow-[0_24px_48px_-18px_rgba(0,0,0,0.6)]";

const IMG_CLASS =
  "absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]";

const SCRIM = (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1614]/92 via-[#0a1614]/45 to-[#0a1614]/5"
  />
);

const TOP_HIGHLIGHT = (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
  />
);

const LIFT_STYLE = { transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" };
const LIFT_CLASS =
  "group h-[264px] transition-[transform,border-color] duration-500 hover:-translate-y-2 border border-transparent hover:border-[#C0C6CC]/60";
const FEATURED_LIFT_CLASS =
  "group h-[340px] sm:h-[264px] rounded-tl-[28px] rounded-tr-[10px] rounded-br-[28px] rounded-bl-[28px] transition-[transform,border-color] duration-500 hover:-translate-y-2 border border-transparent hover:border-[#C0C6CC]/60";

const services = [
  {
    image: earImg,
    title: "Auricular (Ear) Acupuncture",
    description:
      "Targeted ear-point therapy that supports stress relief, emotional balance, and overall wellbeing.",
    shapeClass: "rounded-tl-[10px] rounded-tr-[28px] rounded-br-[28px] rounded-bl-[28px]",
  },
  {
    image: cuppingImg,
    title: "Cupping Therapy",
    description:
      "Helps relieve muscle tension, improve circulation, and support natural recovery.",
    shapeClass: "rounded-tl-[28px] rounded-tr-[28px] rounded-br-[10px] rounded-bl-[28px]",
  },
  {
    image: moxibustionImg,
    title: "Moxibustion",
    description:
      "Gentle heat therapy that stimulates circulation and strengthens the body's natural defenses.",
    shapeClass: "rounded-tl-[28px] rounded-tr-[10px] rounded-br-[28px] rounded-bl-[28px]",
  },
  {
    image: wellnessImg,
    title: "Naturopathy",
    description:
      "A natural approach to wellness that supports the body's ability to heal, restore balance, and promote lasting wellbeing.",
    shapeClass: "rounded-tl-[28px] rounded-tr-[28px] rounded-br-[28px] rounded-bl-[10px]",
  },
];

function ServiceCard({ image, title, description, shapeClass, className = "" }) {
  return (
    <motion.div variants={fadeUp} className={`min-h-0 ${className}`}>
      <div className={`${LIFT_CLASS} ${shapeClass}`} style={LIFT_STYLE}>
        <div className={CARD_CLASS} style={CARD_STYLE}>
          <img src={image} alt="" aria-hidden="true" className={IMG_CLASS} />
          {SCRIM}
          {TOP_HIGHLIGHT}
          <div className="relative z-10 flex h-full min-h-0 flex-col justify-end gap-1.5 p-6">
            <RevealWords
              as="h3"
              text={title}
              className="text-[21px] text-cream-50 transition-colors duration-500 group-hover:text-[#CFF3DD]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            />
            <RevealWords
              as="p"
              text={description}
              style={threeLineDesc}
              className="font-body text-[15px] leading-snug text-[#E8ECEF]/90"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-cream-50/12 lg:h-[calc(100svh-5.5rem+170px)]"
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

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-8 py-8 lg:h-full lg:px-8">
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
            className="mt-2 text-cream-50 lg:whitespace-nowrap"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: "clamp(1.6rem, 2.5vw, 2.25rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Traditional Healing. Thoughtfully Personalized.
          </h2>
          <SilverNeedleAccent flip className="mx-auto mt-5 h-2 w-11 sm:mt-6 sm:w-12" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="mx-auto mt-8 grid w-full max-w-[1320px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <motion.div variants={fadeUp} className="relative min-h-0 lg:col-span-2">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-2 -z-10 rounded-tl-[32px] rounded-tr-[12px] rounded-br-[32px] rounded-bl-[32px] bg-[#C0C6CC]/8 blur-xl"
            />
            <div className={FEATURED_LIFT_CLASS} style={LIFT_STYLE}>
              <div
                className={CARD_CLASS}
                style={{
                  ...CARD_STYLE,
                  border: "2px solid rgba(192,198,204,0.6)",
                }}
              >
                <img
                  src={traditionalImg}
                  alt=""
                  aria-hidden="true"
                  className={IMG_CLASS}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1614]/90 via-[#0a1614]/40 to-[#0a1614]/5 sm:bg-gradient-to-r sm:from-[#0a1614]/92 sm:via-[#0a1614]/55 sm:to-[#0a1614]/10"
                />
                {TOP_HIGHLIGHT}
                <div className="relative z-10 flex h-full min-h-0 flex-col justify-end gap-3 p-6 sm:max-w-md sm:justify-center sm:p-8">
                  <RevealWords
                    as="h3"
                    text="Traditional Acupuncture"
                    className="text-[22px] text-cream-50 transition-colors duration-500 group-hover:text-[#CFF3DD] sm:text-[30px]"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 700,
                      lineHeight: 1.05,
                      letterSpacing: "-0.03em",
                    }}
                  />
                  <RevealWords
                    as="p"
                    text="Fine-needle therapy designed to restore energy flow, relieve pain, and support your body’s natural healing."
                    className="font-body text-[16px] leading-snug text-[#E8ECEF]/90"
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

          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
