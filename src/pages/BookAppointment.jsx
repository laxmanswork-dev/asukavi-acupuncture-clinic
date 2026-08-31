import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Lock } from "lucide-react";
import FadeUp from "../components/FadeUp";
import { NeedleUnderline } from "../components/motifs";
import appointmentVideo from "../assets/appointment.mp4";
import {
  ChevronDownIcon,
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "../components/icons";

const features = [
  "Personalized Consultation",
  "Root Cause Assessment",
  "Traditional Acupuncture",
  "Wellness Guidance",
];

const CONCERNS = [
  "Neck Pain",
  "Back Pain",
  "Joint Pain",
  "Migraine",
  "Stress & Anxiety",
  "Insomnia",
  "Digestive Issues",
  "Sports Injury",
  "Women's Health",
  "General Wellness",
  "Other",
];

const FAQS = [
  {
    q: "Is the first consultation necessary?",
    a: "Yes. It allows us to understand your condition before recommending treatment.",
  },
  {
    q: "How long does a session take?",
    a: "Typically between 30–60 minutes depending on your treatment.",
  },
  {
    q: "Is acupuncture painful?",
    a: "Most patients experience minimal discomfort and often describe the treatment as relaxing.",
  },
  {
    q: "Do I need to bring medical reports?",
    a: "If available, bringing previous reports or scans can help us better understand your condition.",
  },
];

const initialForm = {
  fullName: "",
  phone: "",
  date: "",
  time: "",
  concern: "",
  notes: "",
  consent: false,
};

function Field({ label, htmlFor, error, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block font-display text-sm font-medium text-cream-100"
      >
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 font-body text-xs text-[#E38B7A]">{error}</p>
      )}
    </div>
  );
}

const inputClasses = (hasError) =>
  `h-12 w-full rounded-lg border ${
    hasError ? "border-[#E38B7A]/60" : "border-white/15"
  } bg-white/5 px-4 font-body text-sm text-cream-50 placeholder:text-white/60 transition-colors duration-300 ease-in-out focus:border-[#A8D5BA]/60 focus:outline-none`;

function SelectField({ value, onChange, hasError, children, ...rest }) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className={`${inputClasses(hasError)} appearance-none pr-10`}
        {...rest}
      >
        {children}
      </select>
      <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cream-100/50" />
    </div>
  );
}

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-cream-50/12 py-5">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="font-display text-base font-semibold text-cream-50 sm:text-lg">
          {faq.q}
        </span>
        <ChevronDownIcon
          className={`h-5 w-5 flex-none text-[#CDEFEA]/70 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] pt-3 opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl font-body text-sm leading-relaxed text-[#E8ECEF]">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function BookAppointment() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const update = (field) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  function validate() {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!form.phone.trim()) {
      next.phone = "Please enter your mobile number.";
    } else if (!/^[+\d][\d\s-]{6,}$/.test(form.phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }
    if (!form.date) next.date = "Please choose a preferred date.";
    if (!form.time) next.time = "Please choose a preferred time.";
    if (!form.concern) next.concern = "Please select your primary concern.";
    if (!form.consent) next.consent = "Please agree to be contacted.";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const firstKey = Object.keys(nextErrors)[0];
      document
        .getElementById(firstKey)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function handleReset() {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  }

  return (
    <div className="relative">
      {/* Background video spanning the full booking section */}
      <video
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src={appointmentVideo}
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-eucalyptus-950/75" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 0%, transparent 30%, rgba(10,22,20,0.75) 100%)",
        }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden border-t border-cream-50/12">
        <div className="relative mx-auto max-w-4xl px-6 pb-10 pt-20 text-center lg:pb-14 lg:pt-28">
          <FadeUp>
            <p className="font-display text-xs font-medium tracking-[0.22em] text-[#B8C9BE]">
              SCHEDULE YOUR VISIT
            </p>
            <NeedleUnderline
              aria-hidden="true"
              className="needle-glow mx-auto mt-3 mb-5 h-2 w-20 text-gold-400/80"
            />
            <h1
              className="text-5xl font-bold leading-tight tracking-tight text-cream-50 lg:text-6xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Take the First Step Toward Better Wellbeing.
            </h1>
            <NeedleUnderline
              aria-hidden="true"
              className="needle-glow mx-auto mt-6 h-4 w-32 text-gold-400/80"
            />
          </FadeUp>

          {/* Traditional wisdom -> appointment transition */}
          <FadeUp delay={100}>
            <div className="mx-auto mt-10 max-w-xl border-t border-cream-50/10 pt-8">
              <p
                className="text-[13px] font-semibold tracking-[0.1em] text-[#B8C9BE]"
                style={{ fontFamily: "'Noto Serif Tamil', serif" }}
              >
                திருக்குறள் &middot; குறள் 942
              </p>
              <p
                className="mx-auto mt-4 text-xl font-semibold italic leading-snug text-cream-50 sm:text-2xl"
                style={{ fontFamily: "'Noto Serif Tamil', serif" }}
              >
                &ldquo;மருந்தென வேண்டாவாம் யாக்கைக்கு அருந்தியது
                <br />
                அற்றது போற்றி உணின்&rdquo;
              </p>
              <p
                className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#E8ECEF]/75"
                style={{ fontFamily: "'Noto Serif Tamil', serif" }}
              >
                உண்ட உணவு செரித்த பின், பசியறிந்து அளவோடு உண்பவர்க்கு உடலே
                சிறந்த மருந்தாகும்.
              </p>

              {/* Elegant transition cue leading into the appointment journey */}
              <div
                aria-hidden="true"
                className="mx-auto mt-7 h-10 w-px bg-gradient-to-b from-gold-400/50 to-transparent"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {submitted ? (
        <section className="relative border-t border-cream-50/12">
          <div className="mx-auto max-w-2xl px-6 py-24 text-center">
            <FadeUp>
              <CheckCircle2
                className="mx-auto h-16 w-16 flex-none text-[#7ED9A8]"
                strokeWidth={1.5}
              />
              <h2
                className="mb-4 mt-6 text-3xl font-bold text-cream-50 sm:text-4xl"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Appointment Request Received
              </h2>
              <p className="font-body text-base leading-relaxed text-[#E8ECEF]">
                Thank you for contacting Asukavi Acupuncture Clinic.
                <br />
                Our team will contact you shortly to confirm your preferred
                appointment time.
              </p>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/"
                  className="inline-flex h-12 items-center justify-center rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-sm bg-[#A3B899] px-7 font-display text-sm font-semibold tracking-wide text-eucalyptus-950 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:bg-[#8FA588] active:scale-[0.98]"
                >
                  Return Home
                </Link>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex h-12 items-center justify-center rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-sm border border-white/25 px-7 font-display text-sm font-semibold tracking-wide text-white transition-all duration-300 ease-in-out hover:border-[#A3B899]/70 hover:text-[#A3B899]"
                >
                  Book Another Appointment
                </button>
              </div>
            </FadeUp>
          </div>
        </section>
      ) : (
        <section className="relative border-t border-cream-50/12">
          <div className="mx-auto max-w-7xl px-6 pb-16 pt-10 lg:px-10 lg:pb-20 lg:pt-14">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left: consultation info */}
              <div className="lg:col-span-5">
                <FadeUp>
                  <p className="font-display text-xs font-medium tracking-[0.22em] text-[#B8C9BE]">
                    YOUR FIRST VISIT
                  </p>
                  <NeedleUnderline
                    aria-hidden="true"
                    className="needle-glow mt-3 mb-4 h-2 w-20 text-gold-400/80"
                  />
                  <h2
                    className="mb-6 text-3xl font-bold leading-tight tracking-tight text-cream-50 sm:text-4xl"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    What to Expect
                  </h2>
                  <NeedleUnderline
                    aria-hidden="true"
                    className="needle-glow mb-6 h-4 w-32 text-gold-400/80"
                  />
                  <p className="mb-4 font-body text-base leading-relaxed text-[#E8ECEF]">
                    Your first consultation typically takes 30–45 minutes and
                    includes a personalized assessment of your health history
                    and lifestyle.
                  </p>
                  <p className="mb-8 font-body text-base leading-relaxed text-[#E8ECEF]">
                    From there, we&rsquo;ll recommend a natural, tailored
                    treatment plan &mdash; with friendly guidance every step
                    of the way.
                  </p>

                  <div className="grid grid-cols-2 gap-4">
                    {features.map((label) => (
                      <div
                        key={label}
                        className="flex min-h-[64px] items-center justify-center rounded-tl-[16px] rounded-tr-[6px] rounded-br-[16px] rounded-bl-[16px] border border-white/10 bg-white/5 p-4 text-center"
                      >
                        <span className="font-body text-sm leading-snug text-cream-100">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </FadeUp>

                <FadeUp delay={100}>
                  <div className="mt-8 rounded-tl-[24px] rounded-tr-[8px] rounded-br-[24px] rounded-bl-[24px] border border-white/10 bg-white/5 p-6">
                    <h3 className="mb-4 flex items-center gap-2 font-display text-sm font-semibold tracking-[0.2em] text-[#A8D5BA]">
                      <ClockIcon className="h-4 w-4 flex-none" />
                      CLINIC HOURS
                    </h3>
                    <dl className="space-y-2.5 font-body text-sm text-[#E8ECEF]">
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-cream-100/70">Monday – Friday</dt>
                        <dd>10:00 AM – 1:00 PM &amp; 5:00 PM – 9:00 PM</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-cream-100/70">Saturday</dt>
                        <dd>10:00 AM – 1:00 PM &amp; 5:00 PM – 9:00 PM</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <dt className="text-cream-100/70">Sunday</dt>
                        <dd>Closed</dd>
                      </div>
                    </dl>
                  </div>
                </FadeUp>

                <FadeUp delay={150}>
                  <div className="mt-6 rounded-tl-[24px] rounded-tr-[8px] rounded-br-[24px] rounded-bl-[24px] border border-white/10 bg-white/5 p-6">
                    <h3 className="mb-4 font-display text-sm font-semibold tracking-[0.2em] text-[#A8D5BA]">
                      EMERGENCY CONTACT
                    </h3>
                    <div className="space-y-3 font-body text-sm text-[#E8ECEF]">
                      <a
                        href="tel:+919787626398"
                        className="flex items-center gap-2.5 transition-colors duration-300 ease-in-out hover:text-cream-50"
                      >
                        <PhoneIcon className="h-4 w-4 flex-none text-[#CDEFEA]/70" />
                        097876 26398
                      </a>
                      <a
                        href="mailto:info@asukavi.com"
                        className="flex items-center gap-2.5 transition-colors duration-300 ease-in-out hover:text-cream-50"
                      >
                        <MailIcon className="h-4 w-4 flex-none text-[#CDEFEA]/70" />
                        info@asukavi.com
                      </a>
                      <div className="flex items-start gap-2.5">
                        <PinIcon className="mt-0.5 h-4 w-4 flex-none text-[#CDEFEA]/70" />
                        <span>
                          1/108, N Bypass Rd, opposite to Hotel Apple Tree,
                          near Milo Collection, Vannarpettai, Tirunelveli,
                          Tamil Nadu 627003
                        </span>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>

              {/* Right: appointment form */}
              <div className="lg:col-span-7">
                <FadeUp delay={100}>
                  <div className="rounded-tl-[32px] rounded-tr-[12px] rounded-br-[32px] rounded-bl-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-8 lg:p-10">
                    <h2
                      className="text-2xl font-bold text-cream-50 sm:text-3xl"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Appointment Details
                    </h2>
                    <NeedleUnderline
                      aria-hidden="true"
                      className="needle-glow mt-3 mb-8 h-3.5 w-24 text-gold-400/80"
                    />

                    <form
                      onSubmit={handleSubmit}
                      noValidate
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <Field
                          label="Full Name"
                          htmlFor="fullName"
                          error={errors.fullName}
                        >
                          <input
                            id="fullName"
                            type="text"
                            placeholder="Enter your full name"
                            value={form.fullName}
                            onChange={update("fullName")}
                            className={inputClasses(errors.fullName)}
                          />
                        </Field>

                        <Field
                          label="Mobile Number"
                          htmlFor="phone"
                          error={errors.phone}
                        >
                          <input
                            id="phone"
                            type="tel"
                            placeholder="Enter your phone number"
                            value={form.phone}
                            onChange={update("phone")}
                            className={inputClasses(errors.phone)}
                          />
                        </Field>
                      </div>

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <Field
                          label="Primary Concern"
                          htmlFor="concern"
                          error={errors.concern}
                        >
                          <SelectField
                            id="concern"
                            value={form.concern}
                            onChange={update("concern")}
                            hasError={errors.concern}
                          >
                            <option value="" disabled>
                              Select your concern
                            </option>
                            {CONCERNS.map((c) => (
                              <option key={c}>{c}</option>
                            ))}
                          </SelectField>
                        </Field>

                        <Field
                          label="Preferred Time"
                          htmlFor="time"
                          error={errors.time}
                        >
                          <SelectField
                            id="time"
                            value={form.time}
                            onChange={update("time")}
                            hasError={errors.time}
                          >
                            <option value="" disabled>
                              Select a time
                            </option>
                            <option>Morning</option>
                            <option>Afternoon</option>
                            <option>Evening</option>
                          </SelectField>
                        </Field>
                      </div>

                      <Field
                        label="Preferred Consultation Date"
                        htmlFor="date"
                        error={errors.date}
                      >
                        <input
                          id="date"
                          type="date"
                          value={form.date}
                          onChange={update("date")}
                          min={new Date().toISOString().split("T")[0]}
                          className={inputClasses(errors.date)}
                        />
                      </Field>

                      <Field label="Additional Notes" htmlFor="notes">
                        <textarea
                          id="notes"
                          rows={4}
                          placeholder="Tell us anything you'd like the practitioner to know."
                          value={form.notes}
                          onChange={update("notes")}
                          className={`${inputClasses(false)} h-auto resize-none py-3`}
                        />
                      </Field>

                      <div>
                        <label className="flex items-start gap-3 font-body text-sm text-cream-100">
                          <input
                            type="checkbox"
                            checked={form.consent}
                            onChange={update("consent")}
                            className="mt-0.5 h-4 w-4 flex-none accent-[#A3B899]"
                          />
                          I agree to be contacted regarding my appointment
                          request.
                        </label>
                        {errors.consent && (
                          <p className="mt-1.5 font-body text-xs text-[#E38B7A]">
                            {errors.consent}
                          </p>
                        )}
                      </div>

                      <button
                        type="submit"
                        className="inline-flex h-14 w-full items-center justify-center rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-sm bg-[#A3B899] px-8 font-display text-base font-semibold tracking-wide text-eucalyptus-950 shadow-lg shadow-[#A3B899]/25 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:bg-[#8FA588] active:scale-[0.99] sm:w-auto"
                      >
                        Book Appointment
                      </button>
                    </form>
                  </div>
                </FadeUp>

                <FadeUp delay={150}>
                  <div className="mt-6 flex items-center gap-3 rounded-tl-[16px] rounded-tr-[6px] rounded-br-[16px] rounded-bl-[16px] border border-white/10 bg-white/5 px-5 py-4">
                    <Lock className="h-4 w-4 flex-none text-[#A8D5BA]" />
                    <p className="font-body text-xs leading-relaxed text-cream-100/80">
                      Your information is kept private and used only for
                      scheduling your appointment.
                    </p>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="relative border-t border-cream-50/12">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:px-10 lg:py-20">
          <FadeUp>
            <p className="text-center font-display text-xs font-medium tracking-[0.22em] text-[#B8C9BE]">
              FREQUENTLY ASKED
            </p>
            <NeedleUnderline
              aria-hidden="true"
              className="needle-glow mx-auto mt-3 mb-4 h-2 w-20 text-gold-400/80"
            />
            <h2
              className="text-center text-3xl font-bold text-cream-50 sm:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Frequently Asked Questions
            </h2>
            <NeedleUnderline
              aria-hidden="true"
              className="needle-glow mx-auto mt-4 mb-10 h-4 w-32 text-gold-400/80"
            />

            <div>
              {FAQS.map((faq, index) => (
                <FaqItem
                  key={faq.q}
                  faq={faq}
                  isOpen={openFaq === index}
                  onToggle={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                />
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
