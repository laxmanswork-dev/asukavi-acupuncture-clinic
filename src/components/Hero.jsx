import { Link } from "react-router-dom";
import { ArrowRight, Clock, Target } from "lucide-react";
import { useGooglePlaces } from "../hooks/useGooglePlaces";
import { useClinicStatus } from "../hooks/useClinicStatus";
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
  const { rating, isLoading } = useGooglePlaces();
  const clinicStatus = useClinicStatus();

  return (
    <section id="home" className="relative overflow-hidden">
      <video
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[85%_32%] sm:object-[74%_center] lg:object-[64%_center] xl:object-center"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
        src={warmVideo}
        style={{ filter: "contrast(1.02) saturate(1.04)" }}
      />
      {/* Mobile text is centered, so it no longer sits over the same
          (dark, mostly-empty) left third the desktop's left-to-right
          tint was built for. A top-weighted radial tint keeps the
          centered heading/CTA block legible instead; the desktop
          tint (unchanged) resumes from sm: up. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 sm:hidden"
        style={{
          background:
            "radial-gradient(80% 65% at 50% 34%, rgba(11,19,16,0.86) 0%, rgba(11,19,16,0.55) 55%, rgba(11,19,16,0.15) 85%, transparent 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden bg-gradient-to-r from-[#0B1310] via-[#0B1310]/65 to-transparent sm:block"
      />
      {/* Faint edge vignette — frames the shot without darkening the
          practitioner/patient themselves, so the image reads as composed
          rather than a raw full-bleed rectangle. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 105% at 64% 42%, transparent 55%, rgba(5,12,10,0.32) 100%)",
        }}
      />

      {/* Below 620px of viewport height (a landscape phone or tablet, not
          an ordinary portrait phone -- those stay comfortably clear now
          that the content is compact) centering can push the block low
          enough to collide with the viewport-fixed Call/WhatsApp
          buttons, since those sit a fixed distance from the browser's
          bottom edge no matter how tall the hero itself is. */}
      <div className="relative mx-auto flex min-h-[clamp(460px,80svh,560px)] w-full max-w-[1800px] items-center px-6 py-6 [@media(max-height:620px)]:items-start [@media(max-height:620px)]:pt-0 lg:h-[calc(100svh-5.5rem)] lg:min-h-[620px] lg:px-12 lg:py-3 xl:px-20">
        <div className="grid w-full items-center gap-10 lg:h-full lg:grid-cols-[1.35fr_0.65fr] lg:gap-12">
          <div className="relative flex min-w-0 flex-col items-center text-center sm:items-start sm:text-left lg:max-w-[45rem] lg:-translate-y-6">
            <h1
              className="hero-reveal mt-4 sm:mt-3 lg:mt-5 [@media(max-height:620px)]:mt-2"
              style={{
                color: "#f5f2eb",
                animationDelay: "0.05s",
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 600,
                lineHeight: 1,
                letterSpacing: "-0.02em",
              }}
            >
              <span className="block text-[2.125rem] sm:text-[clamp(2.5rem,1.4rem+3.4vw,4.75rem)]">
                Heal the Root.
              </span>
              <span
                className="mt-1.5 block text-[1.75rem] sm:mt-2 sm:text-[clamp(2.5rem,1.3rem+2.8vw,4rem)] lg:mt-3"
                style={{
                  fontStyle: "italic",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  color: "#A8D5BA",
                }}
              >
                Feel True Relief.
              </span>
            </h1>

            {/* Vertical rhythm is optically tuned per relationship, not one
                repeated gap: headline->tagline stays tight (mt-2/mt-3
                above, a single editorial unit), tagline->description
                opens up noticeably, description->CTA is a clear
                "comfortable" beat, and CTA->trust bar opens up the most
                of all since the trust bar is the most secondary element
                in the stack. */}
            <div className="mt-6 flex flex-col items-center sm:mt-8 sm:items-start md:mt-8 lg:mt-9 [@media(max-height:620px)]:mt-3">
              <p
                className="hero-reveal max-w-md font-body text-xs font-normal sm:text-sm lg:text-base"
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
                className="hero-reveal mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-7 sm:justify-start sm:gap-4 md:mt-8 lg:mt-8 [@media(max-height:620px)]:mt-4"
                style={{ animationDelay: "0.5s" }}
              >
                <Link
                  to="/book-appointment"
                  className="group flex h-11 w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-sm border border-eucalyptus-950/10 bg-[#A3B899] px-4 font-display text-base font-bold tracking-normal text-eucalyptus-950 transition-all duration-300 ease-in-out hover:bg-[#8FA588] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3B899] min-[375px]:w-auto sm:h-[52px] sm:gap-2 sm:px-7 sm:text-lg sm:tracking-wide"
                >
                  <Target strokeWidth={2} className="h-3.5 w-3.5 flex-none opacity-80 sm:h-[18px] sm:w-[18px]" />
                  <span>Book an Appointment</span>
                  <ArrowRight
                    strokeWidth={2}
                    className="h-3.5 w-3.5 flex-none transition-transform duration-300 ease-in-out group-hover:translate-x-1.5 sm:h-[18px] sm:w-[18px]"
                  />
                </Link>

                <Link
                  to="/treatments/traditional-acupuncture"
                  className="group inline-flex items-center gap-2 font-display text-base font-medium tracking-wide text-white/90 transition-colors duration-300 ease-in-out hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 sm:h-[52px] sm:text-lg"
                  style={{ textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}
                >
                  <span className="border-b border-white/35 pb-0.5 transition-colors duration-300 ease-in-out group-hover:border-white/70">
                    Explore Treatments
                  </span>
                  <ArrowRight
                    size={18}
                    strokeWidth={2}
                    className="flex-none transition-transform duration-300 ease-in-out group-hover:translate-x-1.5"
                  />
                </Link>
              </div>

              <div
                className="hero-reveal mt-6 inline-flex w-fit flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-lg border border-white/10 bg-[#0B1310]/50 px-3 py-1.5 sm:mt-10 sm:justify-start sm:gap-x-2 sm:gap-y-1.5 sm:px-3.5 sm:py-2.5 md:mt-10 lg:mt-11 [@media(max-height:620px)]:mt-5"
                style={{ animationDelay: "0.72s" }}
              >
                {/* Rating clause travels as one unit so a narrow wrap can
                    never split the icon from its number mid-phrase. */}
                <span className="inline-flex items-center gap-1.5">
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
                </span>

                <span
                  aria-hidden="true"
                  className="hidden h-4 w-px flex-none bg-white/15 sm:block"
                />

                <span className="font-body text-[13px] text-white/85">
                  Tirunelveli, TN
                </span>

                <span
                  aria-hidden="true"
                  className="hidden h-4 w-px flex-none bg-white/15 sm:block"
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
