import FadeUp from "./FadeUp";
import { NeedleUnderline } from "./motifs";
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
      <video
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
          <p className="font-display text-base font-semibold tracking-[0.3em] text-[#A8D5BA]">
            MEET YOUR SPECIALIST &middot; TIRUNELVELI
          </p>
          <NeedleUnderline
            aria-hidden="true"
            className="needle-glow mt-3 mb-5 h-2 w-20 text-gold-400/80"
          />
          <h2
            className="mb-6 text-4xl font-bold leading-tight tracking-tight text-cream-50 lg:text-5xl"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            <span style={{ fontFamily: "'Sora', sans-serif" }}>
              25+
            </span>{" "}
            Years of Clinical Mastery
          </h2>
          <NeedleUnderline
            aria-hidden="true"
            className="needle-glow mb-6 h-4 w-32 text-gold-400/80"
          />
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
              <video
                className="h-full w-full object-cover"
                poster={doctorPhoto}
                autoPlay
                muted
                loop
                playsInline
                aria-label="Dr. Asukavi, acupuncturist at Asukavi Acupuncture Clinic"
              >
                <source src="/doctor.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </FadeUp>
      </div>
      </div>
    </section>
  );
}
