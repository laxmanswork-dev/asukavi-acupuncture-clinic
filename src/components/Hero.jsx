import { Link } from "react-router-dom";
import { ArrowRight, Clock, Target } from "lucide-react";
import { useGooglePlaces } from "../hooks/useGooglePlaces";
import { useClinicStatus } from "../hooks/useClinicStatus";
import { NeedleUnderline } from "./motifs";
import warmVideo from "../assets/warm.mp4";
import heroPoster from "../assets/hero-poster.jpg";

function GoogleGIcon({ size = 20, className }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} className={className}>
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
        c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
        c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      />
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
        C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
        c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      />
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
        c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      />
    </svg>
  );
}

export default function Hero() {
  const { rating, reviewCount, isLoading } = useGooglePlaces();
  const clinicStatus = useClinicStatus();

  return (
    <section id="home" className="relative overflow-hidden">
      <video
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[74%_center] lg:object-center"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
        src={warmVideo}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#0B1310] via-[#0B1310]/65 to-transparent"
      />

      <div className="relative flex h-[calc(100svh-5.5rem)] w-full items-center px-6 py-6 lg:px-12 lg:py-3 xl:px-20">
        <div className="grid w-full items-center gap-10 lg:h-full lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
          <div className="relative min-w-0 lg:max-w-[45rem]">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-6 -inset-y-10 -z-10 rounded-3xl backdrop-blur-md lg:-inset-x-10"
              style={{
                background:
                  "linear-gradient(115deg, rgba(9,20,18,0.88) 0%, rgba(9,20,18,0.72) 45%, rgba(9,20,18,0.35) 80%, transparent 100%)",
              }}
            />
            <h1
              className="hero-reveal mt-3 lg:mt-5"
              style={{ color: "#f5f2eb", animationDelay: "0.05s" }}
            >
              <span
                className="block text-[2.5rem] sm:text-7xl lg:text-[88px]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                }}
              >
                Heal the Root.
              </span>
              <span
                className="mt-1 block text-[2.5rem] sm:text-8xl lg:text-[104px]"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  lineHeight: 0.9,
                  letterSpacing: "-0.03em",
                  color: "#A8D5BA",
                }}
              >
                Feel{" "}
                <span style={{ fontStyle: "italic" }}>True Relief.</span>
              </span>
            </h1>

            <NeedleUnderline
              aria-hidden="true"
              className="underline-grow mt-4 h-[18px] w-32 text-gold-400/95 sm:mt-5"
              style={{
                animationDelay: "0.18s",
                filter:
                  "drop-shadow(0 0 4px rgba(232,177,58,0.35)) drop-shadow(0 0 6px rgba(126,217,168,0.25))",
              }}
            />

            <div className="mt-6 flex flex-col items-start sm:mt-7 lg:mt-8">
              <p
                className="hero-reveal max-w-lg font-body text-xs font-normal sm:text-sm lg:text-base"
                style={{
                  color: "#E8ECEF",
                  lineHeight: 1.75,
                  animationDelay: "0.28s",
                }}
              >
                Personalized acupuncture designed to address underlying
                imbalances, relieve pain, and restore your body&rsquo;s
                natural ability to heal.
              </p>

              <div
                className="hero-reveal mt-7 flex flex-wrap items-center gap-4 sm:mt-8"
                style={{ animationDelay: "0.5s" }}
              >
                <Link
                  to="/book-appointment"
                  className="cta-glow-pulse group inline-flex h-[52px] items-center gap-2 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-sm border border-eucalyptus-950/10 bg-[#A3B899] px-7 font-display text-base font-bold tracking-wide text-eucalyptus-950 transition-all duration-300 ease-in-out hover:bg-[#8FA588] hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3B899] sm:text-lg"
                >
                  <Target size={18} strokeWidth={2} className="flex-none opacity-80" />
                  <span>Book an Appointment</span>
                  <ArrowRight
                    size={18}
                    strokeWidth={2}
                    className="flex-none transition-transform duration-300 ease-in-out group-hover:translate-x-1.5"
                  />
                </Link>

                <a
                  href="#services"
                  className="group inline-flex h-[52px] items-center gap-2 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-sm border border-white/45 bg-white/5 px-6 font-display text-base font-semibold tracking-wide text-white transition-all duration-300 ease-in-out hover:border-white/70 hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 sm:text-lg"
                  style={{ textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}
                >
                  <span>How We Heal</span>
                  <ArrowRight
                    size={18}
                    strokeWidth={2}
                    className="flex-none transition-transform duration-300 ease-in-out group-hover:translate-x-1.5"
                  />
                </a>
              </div>

              <div
                className="hero-reveal mt-[40px] inline-flex flex-wrap items-center gap-3 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-sm border border-white/10 bg-white/10 px-5 py-3 backdrop-blur-md sm:mt-[48px]"
                style={{ animationDelay: "0.72s" }}
              >
                <GoogleGIcon size={20} className="flex-none" />
                <span
                  className={`flex items-center gap-1.5 font-display text-sm font-bold transition-opacity duration-500 ${
                    isLoading ? "opacity-70" : "opacity-100"
                  }`}
                  style={{ color: "#FBBF24" }}
                >
                  {rating.toFixed(1)}
                  <span aria-hidden="true" className="tracking-tight">
                    ★★★★★
                  </span>
                </span>
                <span className="font-body text-[13px] text-white/85">
                  ({reviewCount} Google Reviews) &nbsp;&bull;&nbsp; Tirunelveli, TN
                </span>

                <span
                  aria-hidden="true"
                  className="h-4 w-px flex-none bg-white/15"
                />

                <span className="flex items-center gap-1.5">
                  <Clock
                    className={`h-3.5 w-3.5 flex-none animate-pulse ${
                      clinicStatus.isOpen ? "text-emerald-400/90" : "text-amber-400/90"
                    }`}
                  />
                  <span
                    className={`font-body text-[13px] font-medium ${
                      clinicStatus.isOpen ? "text-emerald-200" : "text-amber-200"
                    }`}
                  >
                    {clinicStatus.message}
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}
