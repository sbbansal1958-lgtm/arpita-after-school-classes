/* Arpita's — final logo (Option 4: "Arpita's" + swash + tagline)
   Royal blue background (#1e3a8a) par yellow (#fde047) naam. */
export default function SiteLogo({ className = '' }) {
  return (
    <svg
      className={`site-logo ${className}`.trim()}
      viewBox="0 0 220 80"
      role="img"
      aria-label="Arpita's After School Classes"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="arpitaSwash" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fde047" />
          <stop offset="1" stopColor="#f59e0b" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="220" height="80" rx="16" fill="#1e3a8a" />

      <text
        x="110"
        y="42"
        textAnchor="middle"
        fontFamily="Poppins, 'Noto Sans Devanagari', sans-serif"
        fontSize="30"
        fontWeight="700"
        fill="#fde047"
        textLength="130"
        lengthAdjust="spacingAndGlyphs"
      >
        Arpita's
      </text>

      <path
        d="M45 53 C 80 46, 140 46, 175 53"
        fill="none"
        stroke="url(#arpitaSwash)"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <text
        x="110"
        y="69"
        textAnchor="middle"
        fontFamily="Poppins, sans-serif"
        fontSize="8.5"
        fontWeight="700"
        fill="#fde68a"
        textLength="150"
        lengthAdjust="spacing"
      >
        AFTER SCHOOL CLASSES
      </text>
    </svg>
  )
}
