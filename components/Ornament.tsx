import type { SVGProps } from "react";

/** Small ornamental flourish used between sections. */
export function Flourish(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="48"
      height="20"
      viewBox="0 0 48 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
      {...props}
    >
      <path d="M24 10 C 18 4, 12 4, 6 8 C 4 9, 2 10, 0 11" />
      <path d="M24 10 C 30 4, 36 4, 42 8 C 44 9, 46 10, 48 11" />
      <circle cx="24" cy="10" r="2.4" fill="currentColor" stroke="none" />
      <circle cx="24" cy="10" r="1" fill="var(--navy-900, #0d1838)" stroke="none" />
      <path d="M19 10 C 16 7, 14 7, 12 9" />
      <path d="M29 10 C 32 7, 34 7, 36 9" />
    </svg>
  );
}

/** Centered divider with flourishes on either side. */
export function FloralDivider({ label }: { label?: string }) {
  return (
    <div className="floral-divider" role="presentation">
      <Flourish />
      {label && (
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.7rem",
            letterSpacing: "0.42em",
            textTransform: "uppercase",
            color: "var(--champagne)",
          }}
        >
          {label}
        </span>
      )}
      <Flourish style={{ transform: "scaleX(-1)" }} />
    </div>
  );
}

/** Larger rose/botanic spray for hero ornament. */
export function RoseSpray(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* central stem */}
      <path d="M100 190 C 100 150, 100 110, 100 70" />
      {/* leaves left */}
      <path d="M100 150 C 80 148, 62 138, 50 118 C 66 116, 82 124, 96 142" />
      <path d="M100 120 C 82 118, 68 110, 58 96 C 72 94, 86 100, 98 114" />
      {/* leaves right */}
      <path d="M100 140 C 120 138, 138 128, 150 108 C 134 106, 118 114, 102 132" />
      <path d="M100 110 C 120 108, 134 100, 144 86 C 130 84, 116 90, 102 104" />
      {/* rose head */}
      <circle cx="100" cy="62" r="22" />
      <path d="M100 50 C 92 56, 92 68, 100 74 C 108 68, 108 56, 100 50 Z" />
      <path d="M84 62 C 88 52, 100 50, 108 56" />
      <path d="M116 62 C 112 72, 100 74, 92 68" />
      <circle cx="100" cy="62" r="6" />
    </svg>
  );
}
