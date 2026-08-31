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
          <div className="relative w-full max-w-[420px]">
            {/* Offset architectural rule — a single mounting line, not a surrounding box */}
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -right-6 h-full w-full border border-[#C0C6CC]/30"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-eucalyptus-800">
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
              {/* Corner brackets — gallery-mount markers on two opposing corners only */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-10 w-10 border-l border-t border-[#C0C6CC]/70"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 border-b border-r border-[#C0C6CC]/70"
              />
            </div>
          </div>
        </FadeUp>
      </div>
      </div>
    </section>
  );
}
