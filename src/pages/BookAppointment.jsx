import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Lock } from "lucide-react";
import FadeUp from "../components/FadeUp";
import { NeedleUnderline } from "../components/motifs";
import appointmentVideo from "../assets/appointment.mp4";
import {
  ChatBubbleIcon,
  ChevronDownIcon,
  ClockIcon,
  LotusIcon,
  MailIcon,
  NeedleIcon,
  PhoneIcon,
  PinIcon,
  RootsIcon,
} from "../components/icons";

const features = [
  { icon: ChatBubbleIcon, label: "Personalized Consultation" },
  { icon: RootsIcon, label: "Root Cause Assessment" },
  { icon: NeedleIcon, label: "Traditional Acupuncture" },
  { icon: LotusIcon, label: "Wellness Guidance" },
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

const DURATIONS = [
  "Less than 1 Week",
  "1–4 Weeks",
  "1–3 Months",
  "More than 3 Months",
  "More than 1 Year",
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
  email: "",
  age: "",
  gender: "",
  date: "",
  time: "",
  concern: "",
  duration: "",
  priorAcupuncture: "",
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
    if (!form.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!form.age) {
      next.age = "Please enter your age.";
    } else if (Number(form.age) < 1 || Number(form.age) > 120) {
      next.age = "Please enter a valid age.";
    }
    if (!form.gender) next.gender = "Please select an option.";
    if (!form.date) next.date = "Please choose a preferred date.";
    if (!form.time) next.time = "Please choose a preferred time.";
    if (!form.concern) next.concern = "Please select your primary concern.";
    if (!form.duration) next.duration = "Please let us know the duration.";
    if (!form.priorAcupuncture)
      next.priorAcupuncture = "Please select an option.";
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
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{ backgroundColor: "rgba(10,20,15,0.88)" }}
      />
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
        <div className="relative mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">
          <FadeUp>
            <p className="font-display text-xs font-semibold tracking-[0.35em] text-[#A8D5BA]">
              SCHEDULE YOUR VISIT
            </p>
            <NeedleUnderline
              aria-hidden="true"
              className="mx-auto mt-3 mb-5 h-2 w-20 text-gold-400/80"
            />
            <h1
              className="text-5xl font-bold leading-tight tracking-tight text-cream-50 lg:text-6xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Take the First Step Toward Better Wellbeing.
            </h1>
            <NeedleUnderline
              aria-hidden="true"
              className="mx-auto mt-6 h-4 w-32 text-gold-400/80"
            />
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
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left: consultation info */}
              <div className="lg:col-span-5">
                <FadeUp>
                  <p className="font-display text-xs font-semibold tracking-[0.3em] text-[#A8D5BA]">
                    YOUR FIRST VISIT
                  </p>
                  <NeedleUnderline
                    aria-hidden="true"
                    className="mt-3 mb-4 h-2 w-20 text-gold-400/80"
                  />
                  <h2
                    className="mb-6 text-3xl font-bold leading-tight tracking-tight text-cream-50 sm:text-4xl"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    What to Expect
                  </h2>
                  <NeedleUnderline
                    aria-hidden="true"
                    className="mb-6 h-4 w-32 text-gold-400/80"
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
                    {features.map(({ icon: Icon, label }) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4"
                      >
                        <Icon className="h-5 w-5 flex-none text-[#C5A059]" />
                        <span className="font-body text-sm leading-snug text-cream-100">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </FadeUp>

                <FadeUp delay={100}>
                  <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
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
                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
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
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur-md sm:p-8 lg:p-10">
                    <h2
                      className="text-2xl font-bold text-cream-50 sm:text-3xl"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Appointment Details
                    </h2>
                    <NeedleUnderline
                      aria-hidden="true"
                      className="mt-3 mb-8 h-3.5 w-24 text-gold-400/80"
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
                          label="Email Address"
                          htmlFor="email"
                          error={errors.email}
                        >
                          <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={form.email}
                            onChange={update("email")}
                            className={inputClasses(errors.email)}
                          />
                        </Field>

                        <Field label="Age" htmlFor="age" error={errors.age}>
                          <input
                            id="age"
                            type="number"
                            min="1"
                            max="120"
                            placeholder="Enter your age"
                            value={form.age}
                            onChange={update("age")}
                            className={inputClasses(errors.age)}
                          />
                        </Field>
                      </div>

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <Field
                          label="Gender"
                          htmlFor="gender"
                          error={errors.gender}
                        >
                          <SelectField
                            id="gender"
                            value={form.gender}
                            onChange={update("gender")}
                            hasError={errors.gender}
                          >
                            <option value="" disabled>
                              Select an option
                            </option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                            <option>Prefer not to say</option>
                          </SelectField>
                        </Field>

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
                      </div>

                      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                      </div>

                      <Field
                        label="How long have you experienced this condition?"
                        htmlFor="duration"
                        error={errors.duration}
                      >
                        <SelectField
                          id="duration"
                          value={form.duration}
                          onChange={update("duration")}
                          hasError={errors.duration}
                        >
                          <option value="" disabled>
                            Select duration
                          </option>
                          {DURATIONS.map((d) => (
                            <option key={d}>{d}</option>
                          ))}
                        </SelectField>
                      </Field>

                      <div>
                        <span className="mb-2 block font-display text-sm font-medium text-cream-100">
                          Have you received acupuncture before?
                        </span>
                        <div
                          id="priorAcupuncture"
                          className="flex items-center gap-6"
                        >
                          {["Yes", "No"].map((opt) => (
                            <label
                              key={opt}
                              className="flex items-center gap-2 font-body text-sm text-cream-100"
                            >
                              <input
                                type="radio"
                                name="priorAcupuncture"
                                value={opt}
                                checked={form.priorAcupuncture === opt}
                                onChange={update("priorAcupuncture")}
                                className="h-4 w-4 accent-[#A3B899]"
                              />
                              {opt}
                            </label>
                          ))}
                        </div>
                        {errors.priorAcupuncture && (
                          <p className="mt-1.5 font-body text-xs text-[#E38B7A]">
                            {errors.priorAcupuncture}
                          </p>
                        )}
                      </div>

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
                  <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
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
            <p className="text-center font-display text-xs font-semibold tracking-[0.3em] text-[#A8D5BA]">
              FREQUENTLY ASKED
            </p>
            <NeedleUnderline
              aria-hidden="true"
              className="mx-auto mt-3 mb-4 h-2 w-20 text-gold-400/80"
            />
            <h2
              className="text-center text-3xl font-bold text-cream-50 sm:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Frequently Asked Questions
            </h2>
            <NeedleUnderline
              aria-hidden="true"
              className="mx-auto mt-4 mb-10 h-4 w-32 text-gold-400/80"
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
