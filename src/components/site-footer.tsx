import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <BrandLogo footer />
          <p>A calmer, quicker grading companion for teachers, tutors, students, and parents.</p>
        </div>
        <div className="footer-links">
          <strong>Calculators</strong>
          <Link href="/grade-calculator/">Grade calculator</Link>
          <Link href="/grade-chart/">Printable grade chart</Link>
          <Link href="/grading-scale/">US grading scale</Link>
        </div>
        <div className="footer-links">
          <strong>Learn</strong>
          <Link href="/how-to-calculate-grades/">How to calculate grades</Link>
          <Link href="/blog/">Grading blog</Link>
          <Link href="/faq/">Grade calculator FAQ</Link>
          <Link href="/blog/how-many-questions-can-you-miss/">How many questions can you miss?</Link>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Grade Calculator</span><span>Made for better teaching days.</span></div>
    </footer>
  );
}
