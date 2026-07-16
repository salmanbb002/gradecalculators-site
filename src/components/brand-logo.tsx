import Link from "next/link";

export function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <Link className={`brand${footer ? " footer-brand" : ""}`} href="/" aria-label="Grade Calculator home">
      <svg className="brand-symbol" viewBox="0 0 44 44" aria-hidden="true">
        <defs>
          <linearGradient id="grade-calculator-mark" x1="5" y1="4" x2="39" y2="41" gradientUnits="userSpaceOnUse">
            <stop stopColor="#5143df" />
            <stop offset="1" stopColor="#786bf8" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="42" height="42" rx="13" fill="url(#grade-calculator-mark)" />
        <path d="M30.8 14.3A11.4 11.4 0 1 0 33 29V23h-9" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="34" cy="11" r="2.4" fill="#a7f3d0" />
      </svg>
      <span className="brand-wordmark"><b>Grade</b><strong>Calculator</strong></span>
    </Link>
  );
}
