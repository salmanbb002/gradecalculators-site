import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { GradeChartTool } from "@/components/grade-chart-tool";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Grade Chart & Letter Grade Table | Grade Calculator",
  description: "Use a grade chart to match wrong answers with percentages and letter grades. See a printable 10-question example and generate a chart for any test size.",
  alternates: { canonical: "/grade-chart/" },
  openGraph: { title: "Grade Chart: Percentage and Letter Grade Table", url: "/grade-chart/" },
};

const rows = Array.from({ length: 11 }, (_, wrong) => {
  const percentage = (10 - wrong) * 10;
  const letter = percentage >= 90 ? "A" : percentage >= 80 ? "B" : percentage >= 70 ? "C" : percentage >= 60 ? "D" : "F";
  return { wrong, correct: 10 - wrong, percentage, letter };
});

export default function GradeChartPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebApplication", name: "Grade Chart Generator", url: "https://gradecalculators.site/grade-chart/", applicationCategory: "EducationalApplication", operatingSystem: "Any", isAccessibleForFree: true },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://gradecalculators.site/" },
        { "@type": "ListItem", position: 2, name: "Grade Chart", item: "https://gradecalculators.site/grade-chart/" },
      ] },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />
      <main className="inner-page">
        <section className="page-hero"><div className="shell"><Breadcrumbs current="Grade chart" /><span className="section-kicker">GRADING REFERENCE</span><h1>Grade Chart</h1><p>A grade chart lists every possible score for a test. Teachers can match the number of wrong answers with the correct percentage and letter grade without repeating the calculation.</p><div className="updated-note">Example chart · 10 total questions · Updated July 16, 2026</div></div></section>
        <section className="page-tool-section"><div className="shell"><div className="page-tool-heading"><span className="section-kicker">INTERACTIVE TOOL</span><h2>Generate a grade chart</h2><p>Choose a test length and grading scale to create a printable table for every possible score.</p></div><GradeChartTool /></div></section>
        <section className="content-section"><div className="shell content-grid">
          <article className="article-content">
            <div className="direct-answer"><span>QUICK DEFINITION</span><p>A grade chart, also called a grading chart or easy-grader table, matches raw scores with percentages and letter grades. Each row shows how the result changes when one more answer is correct or wrong.</p></div>
            <h2>10-question grade chart</h2><p>This example uses whole-point scoring and a simple A–F scale. Use the generator above to create the same chart for any test from 1 to 500 questions with standard, strict, or lenient letter-grade thresholds.</p>
            <div className="reference-table-wrap"><table className="reference-table"><thead><tr><th>Wrong</th><th>Correct</th><th>Percentage</th><th>Letter grade</th></tr></thead><tbody>{rows.map((row) => <tr key={row.wrong}><td>{row.wrong}</td><td>{row.correct}</td><td><strong>{row.percentage}%</strong></td><td><span className={`reference-grade grade-${row.letter.toLowerCase()}`}>{row.letter}</span></td></tr>)}</tbody></table></div>
            <h2>How to read a grade chart</h2><p>Find the number of points or questions missed in the first column. Move across the row to see the number correct, percentage score, and corresponding letter grade. A zero in the wrong column represents a perfect score.</p>
            <h2>Create a chart for any assignment</h2><p>Test length, fractional scoring, bonus points, and grade thresholds can all change the chart. Generate a custom chart instead of relying on a fixed printable table.</p>
            <h2>How many questions can a student miss?</h2><p>Find the required percentage in the chart and read the wrong-answer value in the same row. On a 20-question test, each question is worth 5 percentage points, so 6 wrong answers produce 70%. Shorter quizzes have larger gaps between possible scores because each question represents more of the total.</p>
            <h2>Grade charts for partial credit</h2><p>A whole-question chart assumes every item has equal value. For half points, quarter points, essay rubrics, or different question weights, use the full <Link className="body-link" href="/grade-calculator/">grade calculator</Link> and select the required point precision. The chart will include fractional raw scores.</p>
            <Link className="primary-button article-cta" href="/grade-calculator/">Create a custom grade chart <ArrowRight size={18} /></Link>
          </article>
          <aside className="related-panel"><span>KEEP LEARNING</span><Link href="/grade-calculator/"><b>Free grade calculator</b><small>Generate a fractional chart.</small><ArrowRight size={16} /></Link><Link href="/grading-scale/"><b>Grading scale</b><small>Review letter thresholds.</small><ArrowRight size={16} /></Link><Link href="/blog/how-many-questions-can-you-miss/"><b>How many can you miss?</b><small>Find a passing raw score.</small><ArrowRight size={16} /></Link><Link href="/how-to-calculate-grades/"><b>Grade formula</b><small>Calculate scores manually.</small><ArrowRight size={16} /></Link></aside>
        </div></section>
      </main>
      <SiteFooter />
    </>
  );
}
