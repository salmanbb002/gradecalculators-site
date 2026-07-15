import Link from "next/link";

export function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <Link className={`brand${footer ? " footer-brand" : ""}`} href="/" aria-label="Grade calcular home">
      <svg className="brand-symbol" viewBox="0 0 44 44" aria-hidden="true">
        <rect width="44" height="44" rx="14" fill="currentColor" />
        <path d="M12.5 10.5h19a3 3 0 0 1 3 3v17a3 3 0 0 1-3 3h-19a3 3 0 0 1-3-3v-17a3 3 0 0 1 3-3Z" fill="white" fillOpacity=".16" />
        <path d="M15 16h14" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <circle cx="16" cy="23" r="2" fill="white" />
        <circle cx="22" cy="23" r="2" fill="white" />
        <circle cx="28" cy="23" r="2" fill="white" />
        <path d="m15 29 3 3 7-7" fill="none" stroke="#a7f3d0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="brand-wordmark"><b>Grade</b><strong>calcular</strong></span>
    </Link>
  );
}
