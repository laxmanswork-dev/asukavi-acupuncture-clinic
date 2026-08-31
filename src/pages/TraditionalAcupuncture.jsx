import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../components/icons";
import FadeUp from "../components/FadeUp";
import { NeedleUnderline } from "../components/motifs";
import servicesVideo from "../assets/ser.mp4";
import acupunctureImg from "../assets/services/modalities/acupuncture.png";
import electroacupunctureImg from "../assets/services/modalities/electroacupuncture.png";
import dryNeedlingImg from "../assets/services/modalities/dry-needling.png";
import cuppingTherapyImg from "../assets/services/modalities/cupping-therapy.png";
import acupressureImg from "../assets/services/modalities/acupressure.png";
import auricularAcupunctureImg from "../assets/services/modalities/auricular-acupuncture.png";
import earSeedTherapyImg from "../assets/services/modalities/ear-seed-therapy.png";
import scalpAcupunctureImg from "../assets/services/modalities/scalp-acupuncture.png";
import laserAcupunctureImg from "../assets/services/modalities/laser-acupuncture.png";
import triggerPointTherapyImg from "../assets/services/modalities/trigger-point-therapy.png";
import meridianTherapyImg from "../assets/services/modalities/meridian-therapy.png";
import reflexologyImg from "../assets/services/modalities/reflexology.png";
import suJokTherapyImg from "../assets/services/modalities/su-jok-therapy.png";
import magnetTherapyImg from "../assets/services/modalities/magnet-therapy.png";
import colorTherapyImg from "../assets/services/modalities/color-therapy.png";
import aromatherapyImg from "../assets/services/modalities/aromatherapy.png";
import hotStoneTherapyImg from "../assets/services/modalities/hot-stone-therapy.png";
import kinesiologyImg from "../assets/services/modalities/kinesiology.png";
import chiropracticTherapyImg from "../assets/services/modalities/chiropractic-therapy.png";

const CATEGORIES = [
  "All",
  "Acupuncture Techniques",
  "Therapeutic Methods",
  "Reflex & Micro Therapies",
  "Complementary Therapies",
  "Body Assessment",
];

const modalities = [
  { name: "Acupuncture", image: acupunctureImg, category: "Acupuncture Techniques" },
  { name: "Electroacupuncture", image: electroacupunctureImg, category: "Acupuncture Techniques" },
  { name: "Dry Needling", image: dryNeedlingImg, category: "Acupuncture Techniques" },
  { name: "Cupping Therapy", image: cuppingTherapyImg, category: "Therapeutic Methods" },
  { name: "Acupressure", image: acupressureImg, category: "Therapeutic Methods" },
  { name: "Auricular (Ear) Acupuncture", image: auricularAcupunctureImg, category: "Acupuncture Techniques" },
  { name: "Ear Seed Therapy", image: earSeedTherapyImg, category: "Reflex & Micro Therapies" },
  { name: "Scalp Acupuncture", image: scalpAcupunctureImg, category: "Acupuncture Techniques" },
  { name: "Laser Acupuncture", image: laserAcupunctureImg, category: "Acupuncture Techniques" },
  { name: "Trigger Point Therapy", image: triggerPointTherapyImg, category: "Therapeutic Methods" },
  { name: "Meridian Therapy", image: meridianTherapyImg, category: "Therapeutic Methods" },
  { name: "Reflexology", image: reflexologyImg, category: "Reflex & Micro Therapies" },
  { name: "Su Jok Therapy", image: suJokTherapyImg, category: "Reflex & Micro Therapies" },
  { name: "Magnet Therapy", image: magnetTherapyImg, category: "Complementary Therapies" },
  { name: "Color Therapy", image: colorTherapyImg, category: "Complementary Therapies" },
  { name: "Aromatherapy", image: aromatherapyImg, category: "Complementary Therapies" },
  { name: "Hot Stone Therapy", image: hotStoneTherapyImg, category: "Complementary Therapies" },
  { name: "Kinesiology", image: kinesiologyImg, category: "Body Assessment" },
  { name: "Chiropractic Therapy", image: chiropracticTherapyImg, category: "Therapeutic Methods" },
].map((item, i) => ({ ...item, number: i + 1 }));

const ROMAN_NUMERAL_MAP = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

function toRoman(num) {
  let result = "";
  let remaining = num;
  for (const [value, symbol] of ROMAN_NUMERAL_MAP) {
    while (remaining >= value) {
      result += symbol;
      remaining -= value;
    }
  }
  return result;
}

export default function TraditionalAcupuncture() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered =
    activeCategory === "All"
      ? modalities
      : modalities.filter((m) => m.category === activeCategory);

  return (
    <>
      {/* Philosophy (Thirukkural) -> Treatment methods -> Techniques grid */}
      <section className="relative overflow-hidden border-t border-cream-50/12">
        <video
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
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
              "radial-gradient(120% 90% at 50% 0%, transparent 30%, rgba(10,22,20,0.75) 100%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-10 lg:px-10 lg:pb-28 lg:pt-14">
          {/* Section opens directly with the heading — treatment exploration is the focus */}
          <FadeUp>
            <NeedleUnderline
              aria-hidden="true"
              className="needle-glow mx-auto mb-6 h-2 w-20 text-gold-400/80"
            />
            <h2
              className="mx-auto max-w-2xl text-center text-3xl font-bold leading-tight tracking-tight text-cream-50 sm:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Explore Our Healing Methods
            </h2>
          </FadeUp>

          {/* Category filters */}
          <FadeUp delay={120} className="mt-7 flex justify-center">
            <div className="no-scrollbar flex max-w-full flex-nowrap items-center gap-2 overflow-x-auto px-2 lg:justify-center lg:gap-2.5">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    aria-pressed={isActive}
                    className={`flex h-9 flex-none items-center whitespace-nowrap rounded-tl-[10px] rounded-tr-[4px] rounded-br-[10px] rounded-bl-[10px] border px-3.5 font-display text-[10.5px] font-medium uppercase tracking-[0.1em] transition-colors duration-300 ease-in-out ${
                      isActive
                        ? "border-[#C0C6CC]/50 bg-[#132621]/90 text-cream-50"
                        : "border-[#C0C6CC]/18 bg-transparent text-cream-100/50 hover:border-[#C0C6CC]/32 hover:text-cream-100/80"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </FadeUp>

          <div
            key={activeCategory}
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5"
          >
            {filtered.map(({ name, image, number }, i) => (
              <FadeUp key={name} delay={(i % 10) * 40}>
                <div className="group relative h-[150px] overflow-hidden rounded-tl-[16px] rounded-tr-[6px] rounded-br-[16px] rounded-bl-[16px] border border-[#C0C6CC]/30 shadow-lg shadow-black/30 transition-colors duration-300 ease-in-out hover:border-[#C0C6CC]/60">
                  <img
                    src={image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a1614]/92 via-[#0a1614]/45 to-[#0a1614]/5"
                  />
                  <div className="relative z-10 flex h-full flex-col justify-between p-3.5">
                    <span className="font-display text-xs font-medium tracking-wide text-[#C0C6CC]/80">
                      {toRoman(number)}
                    </span>
                    <span className="font-body text-[13px] font-medium leading-snug text-cream-100">
                      {name}
                    </span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-cream-50/12">
        <video
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src={servicesVideo}
        />
        <div aria-hidden="true" className="absolute inset-0 bg-eucalyptus-950/75" />

        <div className="relative mx-auto max-w-2xl px-6 py-20 text-center lg:py-24">
          <FadeUp>
            <h2
              className="text-3xl font-bold leading-tight tracking-tight text-cream-50 sm:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Ready to Begin Your Healing Journey?
            </h2>
            <NeedleUnderline
              aria-hidden="true"
              className="needle-glow mx-auto mt-5 mb-8 h-4 w-32 text-gold-400/80"
            />
            <p className="mb-8 font-body text-base leading-relaxed text-[#E8ECEF]">
              Book a personalized consultation and let us design a treatment
              plan around your specific needs.
            </p>
            <Link
              to="/book-appointment"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-sm bg-[#A3B899] px-7 font-display text-sm font-semibold tracking-wide text-eucalyptus-950 shadow-lg shadow-[#A3B899]/25 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#8FA588] active:scale-[0.98]"
            >
              <span>Book an Appointment</span>
              <ArrowRightIcon
                className="h-4 w-4 flex-none transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
