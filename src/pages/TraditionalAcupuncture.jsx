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

const modalities = [
  { name: "Acupuncture", image: acupunctureImg },
  { name: "Electroacupuncture", image: electroacupunctureImg },
  { name: "Dry Needling", image: dryNeedlingImg },
  { name: "Cupping Therapy", image: cuppingTherapyImg },
  { name: "Acupressure", image: acupressureImg },
  { name: "Auricular (Ear) Acupuncture", image: auricularAcupunctureImg },
  { name: "Ear Seed Therapy", image: earSeedTherapyImg },
  { name: "Scalp Acupuncture", image: scalpAcupunctureImg },
  { name: "Laser Acupuncture", image: laserAcupunctureImg },
  { name: "Trigger Point Therapy", image: triggerPointTherapyImg },
  { name: "Meridian Therapy", image: meridianTherapyImg },
  { name: "Reflexology", image: reflexologyImg },
  { name: "Su Jok Therapy", image: suJokTherapyImg },
  { name: "Magnet Therapy", image: magnetTherapyImg },
  { name: "Color Therapy", image: colorTherapyImg },
  { name: "Aromatherapy", image: aromatherapyImg },
  { name: "Hot Stone Therapy", image: hotStoneTherapyImg },
  { name: "Kinesiology", image: kinesiologyImg },
  { name: "Chiropractic Therapy", image: chiropracticTherapyImg },
];

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

        <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          {/* Thirukkural philosophy — no card, generous breathing room */}
          <FadeUp>
            <div className="mx-auto max-w-3xl text-center">
              <NeedleUnderline
                aria-hidden="true"
                className="needle-glow mx-auto h-2 w-20 text-gold-400/80"
              />
              <p
                className="mt-6 text-sm font-semibold tracking-[0.1em] text-[#B8C9BE]"
                style={{ fontFamily: "'Noto Serif Tamil', serif" }}
              >
                திருக்குறள் &middot; குறள் 942
              </p>
              <p
                className="mx-auto mt-5 font-medium italic leading-snug text-cream-50"
                style={{
                  fontFamily: "'Noto Serif Tamil', serif",
                  fontSize: "clamp(0.8rem, 3.4vw, 1.5rem)",
                }}
              >
                <span className="block whitespace-nowrap">
                  &ldquo;மருந்தென வேண்டாவாம் யாக்கைக்கு அருந்தியது
                </span>
                <span className="block whitespace-nowrap">
                  அற்றது போற்றி உணின்&rdquo;
                </span>
              </p>
              <NeedleUnderline
                aria-hidden="true"
                className="needle-glow mx-auto mt-8 h-4 w-32 text-gold-400/80"
              />
            </div>
          </FadeUp>

          {/* Bridge into the techniques grid */}
          <FadeUp delay={80} className="mt-10 lg:mt-12">
            <h2
              className="mx-auto max-w-2xl text-center text-3xl font-bold leading-tight tracking-tight text-cream-50 sm:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Our Treatment Approaches
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center font-body text-base leading-relaxed text-[#E8ECEF]">
              A range of carefully selected techniques, tailored to each
              individual&rsquo;s needs.
            </p>
          </FadeUp>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
            {modalities.map(({ name, image }, index) => (
              <FadeUp key={name} delay={(index % 10) * 40}>
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
                      {toRoman(index + 1)}
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
