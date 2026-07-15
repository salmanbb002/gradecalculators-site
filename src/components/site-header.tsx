import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";

const navigation = [
  ["Calculator", "/grade-calculator/"],
  ["Grade chart", "/grade-chart/"],
  ["How it works", "/how-to-calculate-grades/"],
  ["Grade scale", "/grading-scale/"],
  ["FAQ", "/faq/"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-wrap">
        <BrandLogo />
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
        </nav>
        <Link className="nav-cta" href="/grade-calculator/">Start grading <ArrowRight size={16} /></Link>
      </div>
    </header>
  );
}
