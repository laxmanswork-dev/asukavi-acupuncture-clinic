// Signature decorative pieces for the Asukavi identity: the laurel
// monogram, the TCM seal, small leaf glyphs, and the hand-built hero scene
// (a stand-in for real photography — sized to be swapped for a photo later).

export function LaurelMark({ className = "" }) {
  return (
    <svg viewBox="0 0 56 56" className={className} fill="none">
      <circle cx="28" cy="28" r="25" stroke="currentColor" strokeWidth="1" />
      <text
        x="28"
        y="35"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="22"
        fill="currentColor"
      >
        A
      </text>
      <g opacity="0.75" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <path d="M28 46c-6 1-11-1-14-5" />
        <path d="M28 46c6 1 11-1 14-5" />
        <ellipse cx="17" cy="42" rx="2.4" ry="1.3" transform="rotate(-28 17 42)" fill="currentColor" stroke="none" />
        <ellipse cx="13" cy="38" rx="2.2" ry="1.2" transform="rotate(-40 13 38)" fill="currentColor" stroke="none" />
        <ellipse cx="39" cy="42" rx="2.4" ry="1.3" transform="rotate(28 39 42)" fill="currentColor" stroke="none" />
        <ellipse cx="43" cy="38" rx="2.2" ry="1.2" transform="rotate(40 43 38)" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}

export function LeafGlyph({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M5 19c8.5 0 14-5.5 14-14 0 0-11-1-14 6-2 4.5 0 8 0 8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SectionLabel({ children, className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-[#7ED9A8]/40" />
      <span className="flex items-center gap-2 font-display text-xs font-medium tracking-[0.22em] text-[#B8C9BE]">
        {children}
        <LeafGlyph className="h-3.5 w-3.5" />
      </span>
      <span className="h-px w-8 bg-[#7ED9A8]/40" />
    </div>
  );
}

export function TcmEmblem({ className = "" }) {
  const ticks = Array.from({ length: 24 }, (_, i) => i * 15);

  return (
    <svg viewBox="0 0 160 160" className={className} fill="none">
      <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
      <circle cx="80" cy="80" r="58" stroke="currentColor" strokeWidth="1" strokeOpacity="0.35" />
      {ticks.map((deg) => (
        <line
          key={deg}
          x1="80"
          y1="10"
          x2="80"
          y2="16"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.5"
          transform={`rotate(${deg} 80 80)`}
        />
      ))}
      <text
        x="80"
        y="63"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="17"
        fill="currentColor"
      >
        平衡
      </text>
      <text
        x="80"
        y="88"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="17"
        fill="currentColor"
      >
        治愈
      </text>
      <text
        x="80"
        y="113"
        textAnchor="middle"
        fontFamily="'Playfair Display', Georgia, serif"
        fontSize="17"
        fill="currentColor"
      >
        健康
      </text>
    </svg>
  );
}

export function FloralBranch({ className = "" }) {
  return (
    <svg viewBox="0 0 120 200" className={className} fill="none">
      <path
        d="M60 195C55 150 65 110 50 70S60 10 60 5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeOpacity="0.6"
      />
      {[
        { x: 50, y: 60, r: 8 },
        { x: 62, y: 85, r: 6 },
        { x: 45, y: 110, r: 7 },
        { x: 58, y: 140, r: 5.5 },
      ].map((b, i) => (
        <g key={i}>
          <circle cx={b.x} cy={b.y} r={b.r} stroke="currentColor" strokeWidth="1" strokeOpacity="0.55" />
          <circle cx={b.x} cy={b.y} r="1.6" fill="currentColor" fillOpacity="0.7" />
        </g>
      ))}
    </svg>
  );
}

function CandleGlowDefs() {
  return (
    <defs>
      <radialGradient id="candleGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#e0a45c" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#e0a45c" stopOpacity="0" />
      </radialGradient>
      <linearGradient id="sceneBg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#0e2622" />
        <stop offset="100%" stopColor="#122d28" />
      </linearGradient>
    </defs>
  );
}

export function HeroScene({ className = "" }) {
  const needles = [
    { x: 430, base: 292, len: 78 },
    { x: 468, base: 282, len: 96 },
    { x: 506, base: 274, len: 108 },
    { x: 544, base: 270, len: 100 },
    { x: 582, base: 276, len: 88 },
    { x: 618, base: 286, len: 70 },
  ];

  return (
    <svg viewBox="0 0 700 460" className={className} fill="none">
      <CandleGlowDefs />
      <rect x="0" y="0" width="700" height="460" fill="url(#sceneBg)" />

      <circle cx="150" cy="230" r="140" fill="url(#candleGlow)" />
      <circle cx="560" cy="150" r="100" fill="url(#candleGlow)" opacity="0.5" />

      {/* potted plants, upper left */}
      <g stroke="#4d7a68" strokeWidth="1.3" strokeLinecap="round" opacity="0.8">
        <path d="M70 150c-4-18-2-34 8-46M78 150c2-20 10-36 22-44M86 150c8-14 22-22 34-22" />
      </g>
      <path
        d="M60 150h34l-4 22H64Z"
        fill="#17352f"
        stroke="#4d7a68"
        strokeWidth="1"
      />

      {/* lantern */}
      <path d="M95 205h28l-4-16h-20Z" fill="#17352f" stroke="#4d7a68" strokeWidth="1" />
      <rect x="93" y="205" width="32" height="42" rx="4" fill="#122d28" stroke="#4d7a68" strokeWidth="1" />
      <circle cx="109" cy="226" r="10" fill="url(#candleGlow)" />
      <circle cx="109" cy="226" r="3" fill="#e0a45c" />

      {/* candle */}
      <rect x="168" y="222" width="7" height="26" rx="2" fill="#1e433b" />
      <ellipse cx="171.5" cy="218" rx="3" ry="5" fill="#e0a45c" opacity="0.85" />
      <circle cx="171.5" cy="216" r="9" fill="url(#candleGlow)" />

      {/* rolled towel */}
      <rect x="185" y="272" width="230" height="62" rx="31" fill="#1e433b" stroke="#29564b" strokeWidth="1" />
      <path
        d="M215 280c8 6 8 16 0 22M240 278c9 7 9 17 0 24M265 277c10 7 10 18 0 25"
        stroke="#0e2622"
        strokeWidth="1"
        strokeOpacity="0.5"
        strokeLinecap="round"
      />

      {/* abstracted reclining back, needles along the spine */}
      <path
        d="M380 330c30-10 55-42 60-64 18 4 150 4 190 40 14 12 22 30 20 40H380Z"
        fill="#c79c78"
        opacity="0.28"
      />
      <path
        d="M380 330c30-10 55-42 60-64 18 4 150 4 190 40 14 12 22 30 20 40"
        stroke="#c79c78"
        strokeWidth="1"
        strokeOpacity="0.4"
      />

      {needles.map((n) => (
        <g key={n.x}>
          <line
            x1={n.x}
            y1={n.base}
            x2={n.x + 6}
            y2={n.base - n.len}
            stroke="#c8935a"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <circle cx={n.x + 6} cy={n.base - n.len} r="2.6" fill="#e0a45c" />
        </g>
      ))}
    </svg>
  );
}
