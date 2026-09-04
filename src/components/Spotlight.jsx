import FadeUp from "./FadeUp";
import LazyVideo from "./LazyVideo";
import doctorPhoto from "../assets/doctor.png";
import aboutVideo from "../assets/about.mp4";

const points = [
  { numeral: "I.", text: "Practicing Acupuncture & Natural Care since 1998" },
  {
    numeral: "II.",
    text: "Personalized 1-on-1 Pulse Diagnosis & Health Assessment",
  },
  { numeral: "III.", text: "Safe, Hygienic, and Sterile Treatment Standards" },
  { numeral: "IV.", text: "Trusted Local Community Practice in Tirunelveli" },
];

export default function Spotlight() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-cream-50/12">
      <LazyVideo
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={aboutVideo}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-eucalyptus-950/75"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        <FadeUp className="lg:col-span-7">
          <p className="font-display text-base font-medium tracking-[0.22em] text-[#B8C9BE]">
            MEET YOUR SPECIALIST &middot; TIRUNELVELI
          </p>
          <h2
            className="mb-8 mt-4 text-4xl text-cream-50 lg:text-5xl"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            25+ Years of Clinical Mastery
          </h2>
          <p className="mb-6 max-w-lg font-body text-base leading-relaxed text-[#E8ECEF]">
            Founded in 1998, Asukavi Acupuncture Clinic is led by Dr. Asukavi
            Navaneethakrishnan. Over the last 25+ years, he has helped
            thousands of patients across Tirunelveli manage pain and restore
            balance through careful consultation and gentle, medicine-free
            care.
          </p>

          <ul className="space-y-3">
            {points.map((point) => (
              <li key={point.text} className="flex items-center gap-3">
                <span className="flex h-5 w-5 flex-none items-center justify-center font-display text-xs font-semibold text-[#A8D5BA]">
                  {point.numeral}
                </span>
                <span className="font-body text-sm font-light leading-relaxed text-gray-300 lg:text-base">
                  {point.text}
                </span>
              </li>
            ))}
          </ul>

        </FadeUp>

        <FadeUp delay={150} className="relative flex justify-center lg:col-span-5">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-8 -z-10 rounded-tl-[48px] rounded-tr-[16px] rounded-br-[48px] rounded-bl-[48px] bg-[#7ED9A8]/22 blur-3xl"
          />
          <div className="relative aspect-square w-full max-w-[460px]">
            {/* Subtle offset echo line for depth — a single thin accent, not a nested box */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-2 rounded-tl-[44px] rounded-tr-[16px] rounded-br-[44px] rounded-bl-[44px] border border-[#C0C6CC]/15"
            />
            <div className="relative h-full w-full overflow-hidden rounded-tl-[36px] rounded-tr-[12px] rounded-br-[36px] rounded-bl-[36px] border border-[#C0C6CC]/45">
              <img
                src={doctorPhoto}
                alt="Dr. Asukavi, acupuncturist at Asukavi Acupuncture Clinic"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </FadeUp>
      </div>
      </div>
    </section>
  );
}
