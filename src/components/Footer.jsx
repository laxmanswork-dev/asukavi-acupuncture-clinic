import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
  ClockIcon,
  FacebookIcon,
  GlobeIcon,
  InstagramIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  TwitterIcon,
  YoutubeIcon,
} from "./icons";
import { LeafGlyph } from "./motifs";
import logo from "../assets/logo.png";

const socialLinks = [
  { icon: InstagramIcon, label: "Instagram", href: "#" },
  { icon: FacebookIcon, label: "Facebook", href: "#" },
  { icon: YoutubeIcon, label: "YouTube", href: "#" },
  { icon: TwitterIcon, label: "Twitter", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="mt-16 border-t border-cream-50/10 bg-eucalyptus-800">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Asukavi Acupuncture Centre"
                className="h-10 w-10 flex-none rounded-full object-cover"
              />
              <span className="flex flex-col items-center leading-none sm:items-start">
                <span className="font-script text-xl font-semibold text-cream-50">
                  Asukavi
                </span>
                <span className="mt-0.5 whitespace-nowrap font-display text-[8px] font-semibold tracking-[0.1em] text-[#A8D5BA] sm:text-[0.55rem] sm:tracking-[0.3em]">
                  ACUPUNCTURE CENTRE
                </span>
              </span>
            </div>

            <div className="mt-5 flex items-start gap-2.5">
              <LeafGlyph className="mt-0.5 h-4 w-4 flex-none text-[#CDEFEA]/70" />
              <p className="font-body text-sm leading-relaxed text-[#E8ECEF]">
                Healing from the root.
                <br />
                Restoring balance for life.
              </p>
            </div>

            <p className="mt-6 font-body text-xs text-[#E8ECEF]/80">
              &copy; 2026 Asukavi Acupuncture Clinic. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold tracking-[0.25em] text-[#A8D5BA]">
              LOCATION
            </h3>
            <div className="mt-4 flex items-start gap-2.5">
              <PinIcon className="mt-0.5 h-4 w-4 flex-none text-[#CDEFEA]/70" />
              <p className="font-body text-sm leading-relaxed text-[#E8ECEF]">
                1/108, N Bypass Rd, opposite to Hotel Apple Tree,
                <br />
                near Milo Collection, Vannarpettai,
                <br />
                Tirunelveli, Tamil Nadu 627003
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold tracking-[0.25em] text-[#A8D5BA]">
              CONTACT
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="h-4 w-4 flex-none text-[#CDEFEA]/70" />
                <a
                  href="tel:+919787626398"
                  className="font-body text-sm text-[#E8ECEF] transition-colors duration-300 ease-in-out hover:text-cream-50"
                >
                  097876 26398
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon className="h-4 w-4 flex-none text-[#CDEFEA]/70" />
                <a
                  href="mailto:info@asukavi.com"
                  className="font-body text-sm text-[#E8ECEF] transition-colors duration-300 ease-in-out hover:text-cream-50"
                >
                  info@asukavi.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <GlobeIcon className="h-4 w-4 flex-none text-[#CDEFEA]/70" />
                <span className="font-body text-sm text-[#E8ECEF]">
                  www.asukavi.com
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <ArrowRightIcon className="h-4 w-4 flex-none text-[#A8D5BA]" />
                <Link
                  to="/book-appointment"
                  className="font-body text-sm font-semibold text-[#A8D5BA] transition-colors duration-300 ease-in-out hover:text-cream-50"
                >
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs font-semibold tracking-[0.25em] text-[#A8D5BA]">
              HOURS
            </h3>
            <div className="mt-4 flex items-start gap-2.5">
              <ClockIcon className="mt-0.5 h-4 w-4 flex-none text-[#CDEFEA]/70" />
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
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-50/15 text-[#CDEFEA] transition-all duration-300 ease-in-out hover:border-[#7ED9A8] hover:text-cream-50"
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
