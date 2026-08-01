import { ArrowRight } from "lucide-react";
import FadeUp from "./FadeUp";
import aboutVideo from "../assets/tiru.mp4";

export default function About() {
  return (
    <section
      id="approach"
      className="relative overflow-hidden border-t border-cream-50/12 lg:h-[calc(100svh-5.5rem)]"
    >
      {/* Thiruvalluvar watermark — perfectly centered behind the whole section */}
      <video
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={aboutVideo}
        style={{
          opacity: 1,
          filter: "brightness(0.2)",
          WebkitMaskImage:
            "radial-gradient(78% 78% at 50% 50%, black 55%, transparent 92%)",
          maskImage:
            "radial-gradient(78% 78% at 50% 50%, black 55%, transparent 92%)",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 py-16 lg:h-full lg:py-0 lg:pl-8 lg:pr-10">
      <div className="relative grid gap-16 lg:grid-cols-[0.52fr_auto_0.48fr] lg:items-center lg:gap-12">
        <FadeUp className="max-w-[600px]">
          <p
            className="mb-8 uppercase"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: 500,
              letterSpacing: "0.35em",
              color: "#A8D5BA",
            }}
          >
            OUR APPROACH
          </p>

          <h2
            className="mb-10 text-6xl sm:text-7xl lg:text-[72px]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#f5f2e9",
              maxWidth: "600px",
            }}
          >
            Traditional Wisdom,
            <br />
            Personalized Care.
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: 1.8,
              letterSpacing: "0",
              color: "#F8F6F2",
              maxWidth: "500px",
            }}
          >
            Traditional acupuncture focuses on identifying the root cause
            rather than simply addressing symptoms. Every treatment is
            thoughtfully personalized to restore balance and support your
            body&rsquo;s natural healing process.
          </p>

          <a
            href="#services"
            className="group mt-6 inline-flex items-center gap-2 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl rounded-tr-sm border border-[#A8D5BA]/30 bg-white/5 px-5 py-2.5 font-display text-sm font-semibold text-[#A8D5BA] transition-all duration-300 ease-in-out hover:border-[#A8D5BA]/60 hover:bg-white/10 hover:text-cream-50"
          >
            Explore Our Diagnostic Method
            <ArrowRight
              size={16}
              className="flex-none transition-transform duration-300 ease-in-out group-hover:translate-x-1"
            />
          </a>
        </FadeUp>

        <div
          aria-hidden="true"
          className="hidden h-full w-px bg-gradient-to-b from-transparent via-cream-50/12 to-transparent lg:block lg:translate-x-8 xl:translate-x-24"
        />

        <FadeUp delay={150} className="relative lg:translate-x-8 xl:translate-x-24">
          <p className="font-tamil text-sm font-semibold tracking-[0.15em] text-[#A8D5BA]">
            திருக்குறள் 948
          </p>

          <span
            className="mt-3 block font-script text-5xl leading-none text-gold-400/60"
            aria-hidden="true"
          >
            &ldquo;
          </span>

          <p className="mt-2 font-tamil text-lg italic leading-relaxed text-cream-50/90 sm:text-xl lg:text-[1.35rem]">
            நோய்நாடி நோய்முதல் நாடி அதுதணிக்கும்
            <br />
            வாய்நாடி வாய்ப்பச் செயல்.
          </p>

          <div className="mt-6 h-px w-14 bg-gradient-to-r from-[#7ED9A8]/50 to-transparent" />

          <p className="mt-6 font-tamil text-sm font-semibold tracking-[0.15em] text-[#A8D5BA]/70">
            எங்களின் சிகிச்சை அணுகுமுறை
          </p>

          <p
            lang="ta"
            className="mt-3 max-w-lg font-tamil text-[17px] font-normal not-italic leading-[1.7]"
            style={{
              color: "#ece7d8",
              wordBreak: "keep-all",
              overflowWrap: "break-word",
            }}
          >
            நோயின் அறிகுறிகளை மட்டும் கவனிப்பதல்ல; அதன் அடிப்படைக் காரணத்தை
            அறிந்து, உடலின் இயற்கையான சமநிலையை மீட்டெடுக்க உதவும் தனிப்பயன்
            சிகிச்சை முறையை நாங்கள் பின்பற்றுகிறோம்.
          </p>
        </FadeUp>
      </div>
      </div>
    </section>
  );
}
