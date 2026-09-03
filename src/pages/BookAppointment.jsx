import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { Lock } from "lucide-react";
import FadeUp from "../components/FadeUp";
import appointmentVideo from "../assets/appointment.mp4";
import {
  ArrowRightIcon,
  ChevronDownIcon,
  ClockIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
} from "../components/icons";

const CLINIC_ADDRESS =
  "1/108, N Bypass Rd, opposite to Hotel Apple Tree, near Milo Collection, Vannarpettai, Tirunelveli, Tamil Nadu 627003";
const CLINIC_MAP_EMBED_SRC =
  "https://www.google.com/maps?q=8.731295549723043,77.72238196362515&z=17&output=embed";
const CLINIC_MAP_LINK = "https://maps.app.goo.gl/T7kLUuqbnLV7ZHcT8";
const WHATSAPP_NUMBER = "919787626398";
const INDIAN_MOBILE_PATTERN = /^(?:\+91|91|0)?[6-9]\d{9}$/;

const NADI_INSTRUCTIONS = [
  "காலை 7:30 மணி முதல் நாடி பரிசோதனை செய்யப்படும்.",
  "பரிசோதனைக்கு முன் தேநீர் மற்றும் காபி அருந்துவதை தவிர்க்கவும்.",
  "முன் அனுமதி பெற்று வரவும்.",
];

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

const TIME_OPTIONS = ["Morning", "Afternoon", "Evening"];

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

// Native <select> options render with the OS/browser's own dropdown chrome —
// on most platforms that means a bright, unstylable white panel no matter
// what CSS is applied to <option>. This custom listbox keeps the closed
// trigger identical to the old input styling but renders its own open panel,
// so the dark, premium theme carries through into the open state too.
function CustomSelect({ id, value, onChange, options, placeholder, hasError }) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const rootRef = useRef(null);
  const optionRefs = useRef([]);

  useEffect(() => {
    function handlePointerDown(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handlePointerDown);
    return () => document.removeEventListener("mousedown", handlePointerDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const currentIndex = options.indexOf(value);
    setActiveIndex(currentIndex >= 0 ? currentIndex : 0);
  }, [open, options, value]);

  useEffect(() => {
    if (open && activeIndex >= 0) {
      optionRefs.current[activeIndex]?.scrollIntoView({ block: "nearest" });
    }
  }, [open, activeIndex]);

  function commit(option) {
    onChange(option);
    setOpen(false);
  }

  function handleTriggerKeyDown(e) {
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(i + 1, options.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (activeIndex >= 0) commit(options[activeIndex]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    } else if (e.key === "Tab") {
      setOpen(false);
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        id={id}
        onClick={() => setOpen((o) => !o)}
        onKeyDown={handleTriggerKeyDown}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`${inputClasses(hasError)} flex items-center justify-between pr-10 text-left ${
          value ? "" : "text-white/60"
        }`}
      >
        <span className="truncate">{value || placeholder}</span>
      </button>
      <ChevronDownIcon
        aria-hidden="true"
        className={`pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-cream-100/50 transition-transform duration-200 ease-in-out ${
          open ? "rotate-180" : ""
        }`}
      />

      {open && (
        <ul
          role="listbox"
          tabIndex={-1}
          aria-activedescendant={
            activeIndex >= 0 ? `${id}-option-${activeIndex}` : undefined
          }
          className="absolute z-50 mt-2 max-h-60 w-full overflow-y-auto rounded-lg border border-white/15 bg-eucalyptus-800 py-1.5 shadow-2xl shadow-black/40"
        >
          {options.map((option, i) => {
            const isSelected = option === value;
            const isActive = i === activeIndex;
            return (
              <li
                key={option}
                id={`${id}-option-${i}`}
                ref={(el) => (optionRefs.current[i] = el)}
                role="option"
                aria-selected={isSelected}
                onMouseDown={(e) => e.preventDefault()}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => commit(option)}
                className={`cursor-pointer px-4 py-2.5 font-body text-sm transition-colors duration-150 ease-in-out ${
                  isSelected
                    ? "bg-gold-400/15 text-cream-50"
                    : isActive
                      ? "bg-white/10 text-cream-50"
                      : "text-cream-100/85"
                }`}
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function formatAppointmentDate(dateStr) {
  if (!dateStr) return "";
  const parsed = new Date(`${dateStr}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) return dateStr;
  return parsed.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function buildWhatsAppMessage(form) {
  const notes = form.notes.trim() || "None";
  return [
    "Hello Asukavi Acupuncture Centre,",
    "",
    "I would like to request an appointment.",
    "",
    "*APPOINTMENT DETAILS*",
    "",
    `Name: ${form.fullName.trim()}`,
    `Mobile: ${form.phone.trim()}`,
    `Primary Concern: ${form.concern}`,
    `Preferred Date: ${formatAppointmentDate(form.date)}`,
    `Preferred Time: ${form.time}`,
    "",
    "Additional Notes:",
    notes,
    "",
    "Please let me know the appointment availability.",
    "",
    "Thank you.",
  ].join("\n");
}

export default function BookAppointment() {
  const location = useLocation();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Mirrors isSubmitting synchronously so a second click fired before React
  // re-renders (and disables the button) can't slip through and open two tabs.
  const submittingRef = useRef(false);

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  const update = (field) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  function validate() {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Please enter your full name.";

    const phoneValue = form.phone.trim().replace(/[\s-]/g, "");
    if (!phoneValue) {
      next.phone = "Please enter your mobile number.";
    } else if (!INDIAN_MOBILE_PATTERN.test(phoneValue)) {
      next.phone = "Please enter a valid Indian mobile number.";
    }

    if (!form.date) {
      next.date = "Please choose a preferred date.";
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selectedDate = new Date(`${form.date}T00:00:00`);
      if (selectedDate < today) {
        next.date = "Please choose a date from today onwards.";
      }
    }

    if (!form.time) next.time = "Please choose a preferred time.";
    if (!form.concern) next.concern = "Please select your primary concern.";
    if (!form.consent) next.consent = "Please agree to be contacted.";
    return next;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (submittingRef.current) return;

    const nextErrors = validate();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstKey = Object.keys(nextErrors)[0];
      document
        .getElementById(firstKey)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    submittingRef.current = true;
    setIsSubmitting(true);

    // Opened synchronously (within the click's call stack) so browser
    // popup blockers don't treat it as an unrequested popup.
    const message = buildWhatsAppMessage(form);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    // Brief loading state, then reset the button — the form itself is left
    // untouched in case the user comes back without sending the message.
    window.setTimeout(() => {
      submittingRef.current = false;
      setIsSubmitting(false);
    }, 900);
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
        <div className="relative mx-auto max-w-3xl px-6 py-9 text-center lg:py-11">
          <FadeUp>
            <p className="font-display text-xs font-medium tracking-[0.22em] text-[#B8C9BE]">
              SCHEDULE YOUR VISIT
            </p>
            <h1
              className="mt-4 text-4xl font-bold leading-[1.15] tracking-tight text-cream-50 lg:text-5xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Take the First Step Toward Better Wellbeing.
            </h1>
          </FadeUp>
        </div>
      </section>

      <section className="relative border-t border-cream-50/12">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
              {/* Left: consultation info */}
              <div className="lg:col-span-5">
                <FadeUp>
                  <p className="font-display text-xs font-medium tracking-[0.22em] text-[#B8C9BE]">
                    YOUR FIRST VISIT
                  </p>
                  <h2
                    className="mb-6 mt-4 text-3xl font-bold leading-tight tracking-tight text-cream-50 sm:text-4xl"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    What to Expect
                  </h2>
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
                    <dl className="space-y-3 font-body text-sm text-[#E8ECEF] sm:space-y-2.5">
                      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <dt className="whitespace-nowrap text-cream-100/70">
                          Monday – Friday
                        </dt>
                        <dd>10:00 AM – 1:00 PM &amp; 5:00 PM – 9:00 PM</dd>
                      </div>
                      <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                        <dt className="whitespace-nowrap text-cream-100/70">
                          Saturday
                        </dt>
                        <dd>10:00 AM – 1:00 PM &amp; 5:00 PM – 9:00 PM</dd>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <dt className="whitespace-nowrap text-cream-100/70">
                          Sunday
                        </dt>
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
                        href="mailto:asukavi23@gmail.com"
                        className="flex items-center gap-2.5 transition-colors duration-300 ease-in-out hover:text-cream-50"
                      >
                        <MailIcon className="h-4 w-4 flex-none text-[#CDEFEA]/70" />
                        asukavi23@gmail.com
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
                      className="mb-6 text-2xl font-bold text-cream-50 sm:text-3xl"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      Appointment Details
                    </h2>

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
                          <CustomSelect
                            id="concern"
                            value={form.concern}
                            onChange={(v) =>
                              setForm((prev) => ({ ...prev, concern: v }))
                            }
                            options={CONCERNS}
                            placeholder="Select your concern"
                            hasError={errors.concern}
                          />
                        </Field>

                        <Field
                          label="Preferred Time"
                          htmlFor="time"
                          error={errors.time}
                        >
                          <CustomSelect
                            id="time"
                            value={form.time}
                            onChange={(v) =>
                              setForm((prev) => ({ ...prev, time: v }))
                            }
                            options={TIME_OPTIONS}
                            placeholder="Select a time"
                            hasError={errors.time}
                          />
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
                        disabled={isSubmitting}
                        aria-busy={isSubmitting}
                        className="inline-flex h-14 w-full items-center justify-center rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-sm bg-[#A3B899] px-8 font-display text-base font-semibold tracking-wide text-eucalyptus-950 shadow-lg shadow-[#A3B899]/25 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:bg-[#8FA588] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100 sm:w-auto"
                      >
                        {isSubmitting ? "Opening WhatsApp..." : "Book Appointment"}
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

      {/* Nadi Parisothanai — editorial pulse-diagnosis interlude */}
      <section className="relative border-t border-cream-50/12">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <FadeUp>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-0">
              {/* Left — Tamil heading */}
              <div className="border-b border-cream-50/10 pb-10 lg:col-span-4 lg:border-b-0 lg:border-r lg:border-cream-50/10 lg:pb-0 lg:pr-8">
                <p className="font-display text-xs font-medium tracking-[0.22em] text-[#B8C9BE]">
                  PULSE DIAGNOSIS
                </p>
                <h2
                  lang="ta"
                  className="mt-4 text-4xl font-bold leading-[1.2] tracking-wide text-cream-50 sm:text-5xl lg:text-[2.3rem] xl:text-[2.75rem]"
                  style={{ fontFamily: "'Noto Serif Tamil', serif" }}
                >
                  நாடி பரிசோதனை
                </h2>
              </div>

              {/* Center — instructions */}
              <div className="border-b border-cream-50/10 pb-10 lg:col-span-3 lg:border-b-0 lg:border-r lg:border-cream-50/10 lg:px-8 lg:pb-0">
                <div className="divide-y divide-cream-50/10">
                  {NADI_INSTRUCTIONS.map((line) => (
                    <p
                      key={line}
                      lang="ta"
                      className="py-5 font-tamil text-[16.5px] leading-[1.9] text-cream-100/90 first:pt-0 last:pb-0"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right — Thirukkural */}
              <div className="lg:col-span-5 lg:pl-8">
                <span
                  className="block font-script text-5xl leading-none text-gold-400/60"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <p
                  lang="ta"
                  className="mt-2 font-tamil text-xl font-semibold italic leading-relaxed text-cream-50/90 sm:text-2xl lg:text-[13px] xl:text-[16.5px]"
                >
                  <span className="block lg:whitespace-nowrap">
                    மருந்தென வேண்டாவாம் யாக்கைக்கு அருந்தியது
                  </span>
                  <span className="block lg:whitespace-nowrap">
                    அற்றது போற்றி உணின்.
                  </span>
                </p>
                <p
                  className="mt-5 text-[15px] font-medium tracking-[0.15em] text-[#B8C9BE]/75"
                  style={{ fontFamily: "'Noto Serif Tamil', serif" }}
                >
                  — திருக்குறள்
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Visit Our Clinic — Google Maps location */}
      <section id="visit-clinic" className="relative border-t border-cream-50/12">
        <div className="mx-auto max-w-6xl px-6 py-16 lg:px-10 lg:py-20">
          <FadeUp>
            <p className="text-center font-display text-xs font-medium tracking-[0.22em] text-[#B8C9BE]">
              VISIT OUR CENTRE
            </p>
            <h2
              className="mt-4 text-center text-3xl font-bold text-cream-50 sm:text-4xl"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Find Your Way to Better Healing.
            </h2>

            <div className="mt-8 overflow-hidden rounded-tl-[32px] rounded-tr-[12px] rounded-br-[32px] rounded-bl-[32px] border border-white/10 shadow-2xl shadow-black/30">
              <iframe
                title="Asukavi Acupuncture Centre location on Google Maps"
                src={CLINIC_MAP_EMBED_SRC}
                className="h-[420px] w-full lg:h-[520px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-center font-body text-sm leading-relaxed text-[#E8ECEF]">
              <PinIcon className="h-4 w-4 flex-none text-[#CDEFEA]/70" />
              <span>{CLINIC_ADDRESS}</span>
            </div>

            <div className="mt-6 flex justify-center">
              <a
                href={CLINIC_MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 items-center gap-2 rounded-tl-3xl rounded-bl-3xl rounded-br-3xl rounded-tr-sm border border-white/25 bg-white/10 pl-6 pr-5 font-display text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-md transition-all duration-300 ease-in-out hover:border-[#A3B899]/70 hover:bg-white/15 hover:text-[#A3B899]"
              >
                <span>Get Directions</span>
                <ArrowRightIcon className="h-4 w-4 flex-none transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  );
}
