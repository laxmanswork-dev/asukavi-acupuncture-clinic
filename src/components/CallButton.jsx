// Floating "Call Now" action, paired with WhatsAppButton as a stacked
// duo (same right edge, offset above it). Desktop already exposes a Call
// Now pill in the navbar (Navbar.jsx, xl:inline-flex), so this floating
// version only needs to exist below that breakpoint.
export default function CallButton() {
  return (
    <a
      href="tel:+919787626398"
      aria-label="Call Asukavi Acupuncture Centre"
      className="group fixed z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#A3B899] shadow-lg shadow-black/25 transition-transform duration-300 ease-in-out hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A3B899] bottom-[calc(4.5rem+env(safe-area-inset-bottom,0px))] sm:h-12 sm:w-12 sm:bottom-[calc(4.75rem+env(safe-area-inset-bottom,0px))] lg:h-11 lg:w-11 lg:shadow-md lg:bottom-[calc(4.5rem+env(safe-area-inset-bottom,0px))] xl:hidden"
      style={{
        right: "calc(1.5rem + env(safe-area-inset-right, 0px))",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        className="relative h-[18px] w-[18px] flex-none text-eucalyptus-950 sm:h-5 sm:w-5 lg:h-[18px] lg:w-[18px]"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    </a>
  );
}
