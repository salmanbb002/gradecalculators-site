import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SCALE_PRESETS } from "@/lib/grade";

export const metadata: Metadata = {
  title: "US Grading Scale: Percentage to Letter Grade | Grade Calculator",
  description: "Review the standard US grading scale from A to F. Compare percentage ranges, letter grades, and common GPA values, then customize the scale in the calculator.",
  alternates: { canonical: "/grading-scale/" },
  openGraph: { title: "US Grading Scale: Percentage to Letter Grade", url: "/grading-scale/" },
};

const gpa: Record<string, string> = { "A": "4.0", "A−": "3.7", "B+": "3.3", "B": "3.0", "B−": "2.7", "C+": "2.3", "C": "2.0", "C−": "1.7", "D+": "1.3", "D": "1.0", "D−": "0.7", "F": "0.0" };

export default function GradingScalePage() {
  const bands = SCALE_PRESETS.standard;
  return (
    <>
      <SiteHeader />
      <main className="inner-page">
        <section className="page-hero"><div className="shell"><Breadcrumbs current="Grading scale" /><span className="section-kicker">LETTER-GRADE REFERENCE</span><h1>US Grading Scale</h1><p>The standard US grading scale converts percentage scores into letter grades from A to F. Individual schools and instructors may use different thresholds, so always confirm the assigned scale.</p><div className="updated-note">Standard A–F scale · Common GPA values · Updated July 16, 2026</div></div></section>
        <section className="content-section"><div className="shell content-grid">
          <article className="article-content">
            <h2>Percentage to letter-grade table</h2><p>This table uses the common plus/minus grading scale included as the calculator’s default setting.</p>
            <div className="reference-table-wrap"><table className="reference-table"><thead><tr><th>Letter grade</th><th>Minimum</th><th>Percentage range</th><th>GPA value</th></tr></thead><tbody>{bands.map((band, index) => { const upper = index === 0 ? 100 : bands[index - 1].min - 0.01; return <tr key={band.label}><td><span className={`table-grade ${band.tone}`}>{band.label}</span></td><td>{band.min}%</td><td><strong>{band.min}%–{upper.toFixed(index === 0 ? 0 : 2)}%</strong></td><td>{gpa[band.label]}</td></tr>; })}</tbody></table></div>
            <h2>Do all schools use the same grading scale?</h2><p>No. Some instructors use 90% as the minimum for an A, while others use 93% or 95%. Pass/fail courses, weighted classes, and international education systems may use different rules.</p>
            <h2>Use a custom grade scale</h2><p>The Grade Calculator tool includes standard, strict, and lenient presets. You can also edit every minimum threshold to match a syllabus or school policy.</p>
            <Link className="primary-button article-cta" href="/grade-calculator/">Open the custom grade calculator <ArrowRight size={18} /></Link>
          </article>
          <aside className="related-panel"><span>RELATED RESOURCES</span><Link href="/grade-calculator/"><b>Grade calculator</b><small>Use a custom scale.</small><ArrowRight size={16} /></Link><Link href="/grade-chart/"><b>Grade chart</b><small>Match wrong answers to grades.</small><ArrowRight size={16} /></Link><Link href="/faq/"><b>Grading FAQ</b><small>Answers to common questions.</small><ArrowRight size={16} /></Link></aside>
        </div></section>
      </main>
      <SiteFooter />
    </>
  );
}
