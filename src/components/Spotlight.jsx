import { CheckIcon } from "./icons";
import FadeUp from "./FadeUp";
import { NeedleUnderline } from "./motifs";
import doctorPhoto from "../assets/doctor.png";
import aboutVideo from "../assets/about.mp4";

const points = [
  "Practicing Acupuncture & Natural Care since 1998",
  "Personalized 1-on-1 Pulse Diagnosis & Health Assessment",
  "Safe, Hygienic, and Sterile Treatment Standards",
  "Trusted Local Community Practice in Tirunelveli",
];

export default function Spotlight() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-cream-50/12">
      <video
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
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
            className="mt-3 mb-5 h-2 w-20 text-gold-400/80"
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
            className="mb-6 h-4 w-32 text-gold-400/80"
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
              <li key={point} className="flex items-center gap-3">
                <CheckIcon className="h-5 w-5 flex-none text-[#C0C6CC]" />
                <span className="font-body text-sm font-light leading-relaxed text-gray-300 lg:text-base">
                  {point}
                </span>
              </li>
            ))}
          </ul>

        </FadeUp>

        <FadeUp delay={150} className="relative flex justify-center lg:col-span-5">
          <div
            aria-hidden="true"
            className="blob-shape pointer-events-none absolute inset-12 -z-10 bg-[#7ED9A8]/10 blur-2xl"
          />
          <div className="relative aspect-square w-full max-w-[520px]">
            <div
              aria-hidden="true"
              className="blob-shape absolute -inset-3 border border-[#C0C6CC]/25"
            />
            <div className="blob-shape absolute inset-0 border-2 border-[#C0C6CC]/50 p-2 shadow-[0_0_24px_rgba(126,217,168,0.1)]">
              <div className="blob-shape h-full w-full overflow-hidden">
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
          </div>
        </FadeUp>
      </div>
      </div>
    </section>
  );
}
