import { Link } from "react-router-dom";
import { ArrowRight, Target } from "lucide-react";
import { useGooglePlaces } from "../hooks/useGooglePlaces";
import { useClinicStatus } from "../hooks/useClinicStatus";
import warmVideo from "../assets/warm.mp4";
import heroPoster from "../assets/hero-poster.jpg";

// Same official Google Maps listing used for "Get Directions" on the
// Book Appointment page -- the canonical place to read/leave reviews.
const CLINIC_MAP_LINK = "https://maps.app.goo.gl/T7kLUuqbnLV7ZHcT8";

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
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[74%_center] lg:object-[64%_center] xl:object-center"
        autoPlay
        muted
        loop
        playsInline
        poster={heroPoster}
        src={warmVideo}
        style={{ filter: "contrast(1.02) saturate(1.04)" }}
      />
      {/* Left-to-right tint: darkens the left column the text sits in
          without flattening the practitioner/patient on the right, at
          every breakpoint from mobile up. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#0B1310] via-[#0B1310]/65 to-transparent"
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
          <div className="relative flex min-w-0 flex-col items-start text-left lg:max-w-[45rem] lg:-translate-y-6">
            <h1
              className="hero-reveal mt-7 [@media(min-height:621px)_and_(max-height:680px)]:mt-3 sm:mt-3 lg:mt-5 [@media(max-height:620px)]:mt-3"
              style={{
                color: "#f5f2eb",
                animationDelay: "0.05s",
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
              }}
            >
              <span className="block text-[2.625rem] sm:text-[clamp(2.75rem,1.55rem+3.7vw,5.25rem)]">
                Heal the Root.
              </span>
              <span
                className="mt-2 block text-[2.25rem] sm:mt-2 sm:text-[clamp(2.75rem,1.45rem+3.1vw,4.5rem)] lg:mt-3"
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
            <div className="mt-8 [@media(min-height:621px)_and_(max-height:680px)]:mt-5 flex flex-col items-start sm:mt-8 md:mt-8 lg:mt-9 [@media(max-height:620px)]:mt-4">
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
                className="hero-reveal mt-7 [@media(min-height:621px)_and_(max-height:680px)]:mt-4 flex flex-wrap items-center justify-start gap-x-4 gap-y-5 [@media(min-height:621px)_and_(max-height:680px)]:gap-y-2 sm:mt-7 sm:gap-3 md:mt-8 lg:mt-8 [@media(max-height:620px)]:mt-4"
                style={{ animationDelay: "0.5s" }}
              >
                <Link
                  to="/book-appointment"
                  className="group flex h-11 w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-eucalyptus-950/10 bg-[#A3B899] px-5 font-display text-base font-bold tracking-normal text-eucalyptus-950 transition-all duration-300 ease-in-out hover:bg-[#8FA588] active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3B899] min-[375px]:w-auto sm:h-[52px] sm:gap-2 sm:px-7 sm:text-lg sm:tracking-wide"
                >
                  <Target strokeWidth={2} className="h-3.5 w-3.5 flex-none opacity-80 sm:h-[18px] sm:w-[18px]" />
                  <span>Book an Appointment</span>
                  <ArrowRight
                    strokeWidth={2}
                    className="h-3.5 w-3.5 flex-none transition-transform duration-300 ease-in-out group-hover:translate-x-1.5 sm:h-[18px] sm:w-[18px]"
                  />
                </Link>

                {/* Same family as "Book an Appointment" -- identical height,
                    shape, and padding rhythm -- but transparent with a
                    muted outline instead of a filled background, so it
                    reads as a proper secondary button rather than
                    competing with the primary one. */}
                <Link
                  to="/treatments/traditional-acupuncture"
                  className="group flex h-11 w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-[#C0C6CC]/45 bg-transparent px-5 font-display text-base font-semibold tracking-normal text-white/90 transition-all duration-300 ease-in-out hover:border-[#C0C6CC]/70 hover:bg-white/5 hover:text-white active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 min-[375px]:w-auto sm:h-[52px] sm:gap-2 sm:px-7 sm:text-lg sm:tracking-wide"
                  style={{ textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}
                >
                  <span>Explore Treatments</span>
                  <ArrowRight
                    strokeWidth={2}
                    className="h-3.5 w-3.5 flex-none transition-transform duration-300 ease-in-out group-hover:translate-x-1.5 sm:h-[18px] sm:w-[18px]"
                  />
                </Link>
              </div>

              {/* Clean inline trust row -- no card, no border, no fill.
                  Thin vertical hairlines are the only grouping cue between
                  the rating, city, and hours; a text-shadow (matching the
                  CTAs below) keeps it legible directly over the video. */}
              <div
                className="hero-reveal mt-9 [@media(min-height:621px)_and_(max-height:680px)]:mt-4 flex w-fit flex-wrap items-center gap-x-2.5 gap-y-1.5 sm:mt-10 md:mt-10 lg:mt-11 [@media(max-height:620px)]:mt-6"
                style={{ animationDelay: "0.72s", textShadow: "0 1px 4px rgba(0,0,0,0.7)" }}
              >
                {/* Rating clause travels as one unit so a narrow wrap can
                    never split the icon from its number mid-phrase. The
                    rating + city are one clickable region through to the
                    clinic's Google listing; opening hours stay separate,
                    plain information rather than part of the link. */}
                <a
                  href={CLINIC_MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Read Google reviews for Asukavi Acupuncture Centre — 5-star rating, Tirunelveli, TN (opens in a new tab)"
                  className="group/rating inline-flex items-center gap-1.5 border-b border-transparent pb-0.5 transition-colors duration-300 ease-in-out hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
                >
                  <GoogleGIcon size={18} className="flex-none" />
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
                </a>

                <span aria-hidden="true" className="hidden h-3.5 w-px flex-none bg-white/25 min-[480px]:block" />

                <span className="font-body text-[13px] text-white/85">
                  Tirunelveli, TN
                </span>

                <span aria-hidden="true" className="hidden h-3.5 w-px flex-none bg-white/25 min-[480px]:block" />

                <span
                  className={`font-body text-[13px] font-medium ${
                    clinicStatus.isOpen ? "text-emerald-200" : "text-amber-200"
                  }`}
                >
                  {clinicStatus.message}
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
