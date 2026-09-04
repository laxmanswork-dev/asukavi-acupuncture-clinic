import {
  ClockIcon,
  GlobeIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  YoutubeIcon,
} from "./icons";
import logo from "../assets/logo.png";

// Facebook and Twitter dropped per client request (2026-09-04) -- no
// active profiles to link to.
const socialLinks = [
  { icon: InstagramIcon, label: "Instagram", href: "https://www.instagram.com/dr.asukavi/" },
  { icon: YoutubeIcon, label: "YouTube", href: "https://youtube.com/@asukavi6954" },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-cream-50/10 bg-eucalyptus-950">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-[1.05fr_1.15fr_1fr_0.85fr_0.75fr] lg:gap-x-10">
          <div className="-ml-2 lg:-ml-4">
            <div className="flex items-start gap-3">
              <img
                src={logo}
                alt="Asukavi Acupuncture Centre"
                className="h-10 w-10 flex-none rounded-full object-cover"
              />
              <span className="flex flex-col items-center leading-none sm:items-start">
                <span className="font-script text-2xl font-semibold tracking-wide text-cream-50">
                  Asukavi
                </span>
                <span className="mt-0.5 whitespace-nowrap font-display text-[7px] font-medium tracking-[0.09em] text-[#A8D5BA] sm:text-[8px] sm:tracking-[0.2em]">
                  ACUPUNCTURE CENTRE
                </span>
              </span>
            </div>

            <p className="mt-4 font-body text-sm leading-relaxed text-[#E8ECEF]">
              Healing from the root.
              <br />
              Restoring balance for life.
            </p>

            <p className="mt-5 font-body text-xs text-[#E8ECEF]/80">
              &copy; 2026 Asukavi Acupuncture Clinic. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold tracking-[0.25em] text-[#A8D5BA]">
              LOCATION
            </h3>
            <div className="mt-4 flex items-start gap-2.5">
              <PinIcon className="mt-0.5 h-4 w-4 flex-none text-white" />
              <p className="font-body text-sm leading-relaxed text-[#E8ECEF]">
                1/108, N Bypass Rd, opposite to Hotel Apple Tree, near Milo
                Collection, Vannarpettai, Tirunelveli, Tamil Nadu 627003
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold tracking-[0.25em] text-[#A8D5BA]">
              CONTACT
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="h-4 w-4 flex-none text-white" />
                <a
                  href="tel:+919787626398"
                  className="font-body text-sm text-[#E8ECEF] transition-colors duration-300 ease-in-out hover:text-cream-50"
                >
                  097876 26398
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon className="h-4 w-4 flex-none text-white" />
                <a
                  href="mailto:asukavi23@gmail.com"
                  className="font-body text-sm text-[#E8ECEF] transition-colors duration-300 ease-in-out hover:text-cream-50"
                >
                  asukavi23@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <GlobeIcon className="h-4 w-4 flex-none text-white" />
                <span className="font-body text-sm text-[#E8ECEF]">
                  www.asukavi.com
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold tracking-[0.25em] text-[#A8D5BA]">
              HOURS
            </h3>
            <div className="mt-4 flex items-start gap-2.5">
              <ClockIcon className="mt-0.5 h-4 w-4 flex-none text-white" />
              <p className="font-body text-sm leading-relaxed text-[#E8ECEF]">
                Open Today
                <br />
                Closes at 9:00 PM
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold tracking-[0.25em] text-[#A8D5BA]">
              FOLLOW US
            </h3>
            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-50/15 text-white transition-all duration-300 ease-in-out hover:border-[#7ED9A8] hover:text-cream-50"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
