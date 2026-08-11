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
          <Link href="/easy-grader/">Easy grader / EZ grader</Link>
          <Link href="/grade-chart/">Printable grade chart</Link>
          <Link href="/grading-scale/">US grading scale</Link>
          <Link href="/final-grade-calculator/">Final grade calculator</Link>
        </div>
        <div className="footer-links">
          <strong>GPA calculators</strong>
          <Link href="/gpa-calculator/">GPA calculator</Link>
          <Link href="/high-school-gpa-calculator/">High school GPA</Link>
          <Link href="/college-gpa-calculator/">College GPA</Link>
          <Link href="/cumulative-gpa-calculator/">Cumulative GPA</Link>
        </div>
        <div className="footer-links">
          <strong>Learn</strong>
          <Link href="/how-to-calculate-grades/">How to calculate grades</Link>
          <Link href="/blog/">Grading blog</Link>
          <Link href="/faq/">Grade calculator FAQ</Link>
          <Link href="/blog/how-many-questions-can-you-miss/">How many questions can you miss?</Link>
        </div>
        <div className="footer-links">
          <strong>Site</strong>
          <Link href="/about/">About</Link>
          <Link href="/privacy-policy/">Privacy policy</Link>
          <Link href="/contact/">Contact</Link>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Grade Calculator</span><span>Made for better teaching days.</span></div>
    </footer>
  );
}
