import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../components/icons";
import FadeUp from "../components/FadeUp";
import { NeedleUnderline } from "../components/motifs";
import servicesVideo from "../assets/ser.mp4";

const modalities = [
  "Acupuncture",
  "Electroacupuncture",
  "Dry Needling",
  "Cupping Therapy",
  "Acupressure",
  "Auricular (Ear) Acupuncture",
  "Ear Seed Therapy",
  "Scalp Acupuncture",
  "Laser Acupuncture",
  "Trigger Point Therapy",
  "Meridian Therapy",
  "Cosmetic Facial Acupuncture",
  "Reflexology",
  "Su Jok Therapy",
  "Magnet Therapy",
  "Color Therapy",
  "Aromatherapy",
  "Stone Therapy (Hot Stone)",
  "Kinesio Taping",
  "Chiropractic Therapy",
];

export default function TraditionalAcupuncture() {
  return (
    <>
      {/* Hero */}
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
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">
          <FadeUp>
            <p className="font-display text-xs font-semibold tracking-[0.35em] text-[#A8D5BA]">
              OUR SIGNATURE TREATMENT
            </p>
            <NeedleUnderline
              aria-hidden="true"
              className="needle-glow mx-auto mt-3 mb-5 h-2 w-20 text-gold-400/80"
            />
            <h1
              className="text-5xl font-bold leading-tight tracking-tight text-cream-50 lg:text-6xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Traditional Acupuncture
            </h1>
            <NeedleUnderline
              aria-hidden="true"
              className="needle-glow mx-auto mt-6 mb-6 h-4 w-32 text-gold-400/80"
            />
            <p className="mx-auto max-w-2xl font-body text-base leading-relaxed text-[#E8ECEF] lg:text-lg">
              Fine-needle therapy designed to restore energy flow, relieve
              pain, and support your body&rsquo;s natural healing.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Modalities grid */}
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

        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <FadeUp>
            <p className="text-center font-display text-xs font-semibold tracking-[0.3em] text-[#A8D5BA]">
              THE FULL DISCIPLINE
            </p>
            <NeedleUnderline
              aria-hidden="true"
              className="needle-glow mx-auto mt-3 h-2 w-20 text-gold-400/80"
            />
            <h2
              className="mx-auto mt-4 max-w-2xl text-center text-3xl font-bold leading-tight tracking-tight text-cream-50 sm:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Techniques &amp; Modalities We Draw On
            </h2>
            <NeedleUnderline
              aria-hidden="true"
              className="needle-glow mx-auto mt-4 h-4 w-32 text-gold-400/80"
            />
            <p className="mx-auto mt-4 max-w-2xl text-center font-body text-base leading-relaxed text-[#E8ECEF]">
              Traditional Acupuncture at Asukavi is informed by a wide range
              of complementary techniques, applied selectively based on your
              consultation &mdash; not every technique is used in every
              session.
            </p>
          </FadeUp>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 xl:grid-cols-5">
            {modalities.map((name, index) => (
              <FadeUp key={name} delay={(index % 10) * 40}>
                <div className="flex h-full items-center gap-3 rounded-2xl border border-[#C0C6CC]/30 bg-white/5 px-4 py-3.5 shadow-lg shadow-black/30 transition-colors duration-300 ease-in-out hover:border-[#C0C6CC]/60">
                  <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-[#C0C6CC]/40 font-display text-[11px] font-semibold text-[#C0C6CC]">
                    {index + 1}
                  </span>
                  <span className="font-body text-[13px] font-medium leading-snug text-cream-100">
                    {name}
                  </span>
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
