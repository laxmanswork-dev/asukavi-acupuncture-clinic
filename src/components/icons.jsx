const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
};

export function NeedleArrowIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="4.5" cy="12" r="1.8" />
      <path d="M7.3 12h9.7" />
      <path d="M17 9.5 21 12l-4 2.5" />
    </svg>
  );
}

export function NeedleEyeletIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="6.5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function NeedleSproutIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="17.5" cy="5.5" r="1.3" />
      <path d="M16.5 6.5 7 16" />
      <path d="M6.3 16.7 5 18" />
      <path d="M9.5 13.5c-.5-2.3.3-3.8 2.2-4.5-.6 2.2-1 3.7-2.2 4.5Z" />
    </svg>
  );
}

export function NeedleBalanceIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="6" r="1.3" />
      <circle cx="18" cy="6" r="1.3" />
      <path d="M7 7 17.3 17.3" />
      <path d="M17 7 6.7 17.3" />
    </svg>
  );
}

export function NeedleRadiateIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="1" />
      <circle cx="12" cy="4" r="1.2" />
      <path d="M12 5.2v6" />
      <circle cx="19" cy="17" r="1.2" />
      <path d="M18.1 16.4 13.2 13" />
      <circle cx="5" cy="17" r="1.2" />
      <path d="M5.9 16.4 10.8 13" />
    </svg>
  );
}

export function NeedleRootedIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="4.5" r="1.3" />
      <path d="M12 5.8v12" />
      <path d="M7 18.5h10" />
    </svg>
  );
}

export function LeafIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 19c8.5 0 14-5.5 14-14 0 0-11-1-14 6-2 4.5 0 8 0 8Z" />
      <path d="M5 19c0-4 1.5-8 5-11" />
    </svg>
  );
}

export function BowlSproutIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12a8 8 0 0 0 16 0Z" />
      <path d="M12 12V6" />
      <path d="M12 9c1-2 3-2.5 5-2-1 2-3 2.5-5 2Z" />
    </svg>
  );
}

export function ChatBubbleIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 5h16v10H9l-4 4v-4H4Z" />
    </svg>
  );
}

export function ClipboardIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M9 11l2 2 4-4" />
    </svg>
  );
}

export function HeartHandIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 8.5c-1.2-2-4.5-1.8-4.5 1 0 2.2 2.6 3.7 4.5 5.3 1.9-1.6 4.5-3.1 4.5-5.3 0-2.8-3.3-3-4.5-1Z" />
      <path d="M6 19c1.5-1 3-1 4.5 0h3c1-.6 2-1.4 2.5-2" />
    </svg>
  );
}

export function BalanceIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v18M6 7l-3 5a3 3 0 0 0 6 0Zm12 0-3 5a3 3 0 0 0 6 0ZM4 21h16M6 7h12" />
    </svg>
  );
}

export function PersonIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="7" r="3.2" />
      <path d="M5.5 20c1-3.6 3.6-5.5 6.5-5.5s5.5 1.9 6.5 5.5" />
    </svg>
  );
}

export function RootsIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v8" />
      <path d="M12 11c-3 0-5 2.5-6 6M12 11c3 0 5 2.5 6 6M12 11c-1.5 1.5-2 4-2 8M12 11c1.5 1.5 2 4 2 8" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.5 2.5 2.5L16 9.5" />
    </svg>
  );
}

export function ArrowRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function NeedleIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 20 17 7M14 4l6 6M12.5 9.5l2-2M15.5 12.5l2-2" />
    </svg>
  );
}

export function CuppingIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 9a6 6 0 0 0 12 0" />
      <path d="M6 9c0-2.5.5-5 6-5s6 2.5 6 5" />
      <path d="M9 15v2a3 3 0 0 0 6 0v-2" />
    </svg>
  );
}

export function HerbalIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21c0-6 0-11 5-15" />
      <path d="M12 21c0-5-1-9-5-12" />
      <path d="M12 9c1-2 3-3 5-3-.5 2-2 4-5 4Z" />
      <path d="M12 13c-1-2-3-3-5-3 .5 2 2 4 5 4Z" />
    </svg>
  );
}

export function LotusIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20c-3.5 0-6-2-6-5 2 0 4 1 6 3 2-2 4-3 6-3 0 3-2.5 5-6 5Z" />
      <path d="M12 20c0-4 0-8-3-11 3 0 5 1.5 6 4M12 20c0-4 0-8 3-11-3 0-5 1.5-6 4" />
    </svg>
  );
}

export function CalmWaveIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 9c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0" />
      <path d="M3 15c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0" />
    </svg>
  );
}

export function MoonIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z" />
      <path d="M17 3.5v3M15.5 5h3" />
    </svg>
  );
}

export function PainReliefIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="7.5" r="3" />
      <path d="M12 10.5v6M9 20l3-3.5L15 20M8 14h8" />
    </svg>
  );
}

export function EmotionalBalanceIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20s-7-4.3-7-9.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 7 3.5C19 15.7 12 20 12 20Z" />
      <path d="M9 11h1.5l1-2 1.5 4 1-2H16" />
    </svg>
  );
}

export function ImmuneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 19 6v5.5c0 5-3 8-7 9-4-1-7-4-7-9V6Z" />
      <path d="M9.5 12l1.8 1.8L14.5 10" />
    </svg>
  );
}

export function BreathRipplesIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="5.5" opacity="0.55" />
      <circle cx="12" cy="12" r="9" opacity="0.28" />
    </svg>
  );
}

export function SleepCrescentIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M15.8 4.2A7.5 7.5 0 1 0 19.8 15 6.2 6.2 0 0 1 15.8 4.2Z" />
      <path d="M18.3 3.3v2.3M17.15 4.45h2.3" />
    </svg>
  );
}

export function AcuPointIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="6.8" cy="17.2" r="1.7" />
      <line x1="8.1" y1="15.9" x2="17.4" y2="6.6" />
      <circle cx="18.2" cy="5.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BalanceScaleIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v16" />
      <path d="M6 8h12" />
      <path d="M6 8 3.8 12.8a2.8 2.8 0 0 0 4.4 0Z" />
      <path d="M18 8l-2.2 4.8a2.8 2.8 0 0 0 4.4 0Z" />
    </svg>
  );
}

export function ShieldCheckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.5 19 6v5.5c0 5-3 8-7 9-4-1-7-4-7-9V6Z" />
      <path d="M9 12.2l2.1 2.1L15.5 10" />
    </svg>
  );
}

export function MigraineIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="11" r="7" />
      <path d="M12.5 7 10 11h3l-2.5 4" />
    </svg>
  );
}

export function ImagePlaceholderIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="9" cy="10" r="1.6" />
      <path d="m4 18 5-5 3.5 3.5L16 13l4 4" />
    </svg>
  );
}

export function PinIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  );
}

export function PhoneIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 8.2 2 2 0 0 1 6 3Z" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 6.5 8 6.5 8-6.5" />
    </svg>
  );
}

export function GlobeIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
    </svg>
  );
}

export function ClockIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

export function ChevronDownIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function MenuIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <path d="M16.8 7.2h.01" strokeWidth={2} />
    </svg>
  );
}

export function FacebookIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14 21v-7h2.4l.4-3H14V9c0-.9.3-1.5 1.7-1.5H17V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H8.5v3H10.8v7Z" />
    </svg>
  );
}

export function YoutubeIcon(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="6" width="18" height="12" rx="4" />
      <path d="m10.5 9.5 4.5 2.5-4.5 2.5Z" />
    </svg>
  );
}

export function TwitterIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 6.4c-.6.3-1.3.5-2 .6a3.4 3.4 0 0 0 1.5-1.9c-.7.4-1.5.7-2.3.9a3.5 3.5 0 0 0-6 3.2A10 10 0 0 1 3.8 5.4a3.5 3.5 0 0 0 1.1 4.7c-.6 0-1.1-.2-1.6-.4v.1a3.5 3.5 0 0 0 2.8 3.4 3.6 3.6 0 0 1-1.6.1 3.5 3.5 0 0 0 3.3 2.4A7 7 0 0 1 3 17.2a9.9 9.9 0 0 0 5.4 1.6c6.5 0 10-5.4 10-10v-.5c.7-.5 1.3-1.1 1.8-1.8Z" />
    </svg>
  );
}

export function AcupunctureNeedleIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="5.5" cy="18.5" r="1.6" />
      <line x1="6.8" y1="17.2" x2="17.5" y2="6.5" />
      <circle cx="18.7" cy="5.3" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function EarAcupunctureIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 19c-3-1-5-4-5-7a6 6 0 0 1 12 0c0 2-1 3-1 5a2 2 0 0 1-4 0v-3" />
      <circle cx="10" cy="9" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="13.5" cy="11" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="11" cy="14" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CuppingGlassIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 11a7 7 0 0 1 14 0v3a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z" />
      <path d="M5 16h14" />
      <path d="M9 7c1-1 2-1.5 3-1.5s2 .5 3 1.5" opacity="0.6" />
    </svg>
  );
}

export function MoxibustionFlameIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3c1.8 2.4 2.6 4.2 2.6 6a2.6 2.6 0 1 1-5.2 0c0-.8.3-1.4.7-2 .3.9.9 1.4 1.4 1.4-.3-1.8 0-3.4.5-5.4Z" />
      <line x1="12" y1="11.5" x2="12" y2="16" />
      <path d="M8.5 19.5h7l-1-3.5h-5Z" />
    </svg>
  );
}

export function HerbalSprigIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20V6" />
      <path d="M12 8c-2.5-2-5-2-6.5-.5C7 9.5 9.5 10 12 8Z" />
      <path d="M12 12c2.5-2 5-2 6.5-.5C17 13.5 14.5 14 12 12Z" />
      <path d="M12 16c-2.2-1.7-4.3-1.7-5.6-.4C7.7 17.3 9.9 17.7 12 16Z" />
    </svg>
  );
}

export function WellnessBalanceIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 3.5c2.5 2 2.5 5 0 8.5-2.5 3.5-2.5 6.5 0 8.5" />
      <circle cx="12" cy="7.8" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="16.2" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
