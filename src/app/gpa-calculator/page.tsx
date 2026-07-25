import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { GpaCalculator } from "@/components/gpa-calculator";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "GPA Calculator: Weighted & Unweighted | Grade Calculator",
  description: "Calculate your weighted or unweighted GPA instantly. Add courses with credit hours and course type, then see quality points and the 4.0 GPA scale explained.",
  alternates: { canonical: "/gpa-calculator/" },
  openGraph: { title: "GPA Calculator: Weighted & Unweighted", url: "/gpa-calculator/" },
};

const faq: [string, string][] = [
  ["What is a good GPA?", "A 3.0 GPA (a B average) is typically considered solid, while a 3.5 or higher is competitive for college admissions and honor rolls. \"Good\" depends on your school's grading scale and the programs you are applying to."],
  ["Does this GPA calculator work for college and high school?", "Yes. Enter each course's letter grade, credit hours, and course type. Turn off weighting for a standard college GPA, or keep it on for a high school GPA that credits Honors and AP/IB courses."],
  ["How is GPA different from a percentage grade?", "A percentage grade measures points earned on one course. GPA converts each course's letter grade into grade points (0–4.0), multiplies by credit hours, and averages across every course to summarize a full term or transcript."],
];

export default function GpaCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "GPA Calculator",
        url: "https://gradecalculators.site/gpa-calculator/",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://gradecalculators.site/" },
          { "@type": "ListItem", position: 2, name: "GPA Calculator", item: "https://gradecalculators.site/gpa-calculator/" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />
      <main className="inner-page">
        <section className="page-hero page-hero-tool">
          <div className="shell">
            <Breadcrumbs current="GPA calculator" />
            <span className="section-kicker">FREE GPA CALCULATOR</span>
            <h1>GPA Calculator</h1>
            <p>Calculate a weighted or unweighted grade point average. Add every course with its letter grade, credit hours, and course type to see your GPA and quality points update live.</p>
            <div className="updated-note">Free to use · No sign-up · Updated July 26, 2026</div>
          </div>
        </section>

        <section className="calculator-section page-calculator-section">
          <div className="shell"><GpaCalculator /></div>
        </section>

        <section className="content-section">
          <div className="shell content-grid">
            <article className="article-content">
              <span className="section-kicker">GPA FUNDAMENTALS</span>
              <h2>What is GPA?</h2>
              <p>Grade point average (GPA) converts every course's letter grade into a numeric grade point, multiplies each by the course's credit hours, and averages the result across a term or an entire transcript. Unlike a single percentage grade, GPA summarizes performance across many courses at once, which is why colleges, scholarship committees, and academic advisors rely on it.</p>
              <h2>Weighted vs. unweighted GPA</h2>
              <p>An unweighted GPA caps every course at 4.0, regardless of difficulty. A weighted GPA adds bonus points for more rigorous courses — typically +0.5 for Honors and +1.0 for AP or IB classes — so a B in an AP class can carry the same grade points as an A in a regular class. High schools commonly report both figures; most colleges use only unweighted GPA.</p>
              <h2>The standard 4.0 GPA scale</h2>
              <div className="reference-table-wrap">
                <table className="reference-table">
                  <thead><tr><th>Letter grade</th><th>GPA points</th><th>Weighted (AP/IB)</th></tr></thead>
                  <tbody>
                    <tr><td>A / A+</td><td>4.0</td><td>5.0</td></tr>
                    <tr><td>A−</td><td>3.7</td><td>4.7</td></tr>
                    <tr><td>B+</td><td>3.3</td><td>4.3</td></tr>
                    <tr><td>B</td><td>3.0</td><td>4.0</td></tr>
                    <tr><td>C</td><td>2.0</td><td>3.0</td></tr>
                    <tr><td>D</td><td>1.0</td><td>2.0</td></tr>
                    <tr><td>F</td><td>0.0</td><td>0.0</td></tr>
                  </tbody>
                </table>
              </div>
              <h2>How credit hours change the average</h2>
              <p>GPA is credit-weighted, not a simple average of grade points. Multiply each course's GPA points by its credit hours to get quality points, add the quality points across every course, then divide by total credit hours. A 4-credit A contributes more to the final GPA than a 1-credit A, so heavier courses influence the result more than lighter ones.</p>
              <h2>Use the right calculator for your situation</h2>
              <p>This calculator handles a single term. For GPA across multiple semesters, transfer credits, or an entire high school career, use the cumulative GPA calculator instead — it combines each term's GPA and credit total into one running average.</p>
            </article>
            <aside className="related-panel">
              <span>RELATED CALCULATORS</span>
              <Link href="/high-school-gpa-calculator/"><b>High school GPA calculator</b><small>AP, Honors, and IB weighting.</small><ArrowRight size={16} /></Link>
              <Link href="/college-gpa-calculator/"><b>College GPA calculator</b><small>Credit hours and semester GPA.</small><ArrowRight size={16} /></Link>
              <Link href="/cumulative-gpa-calculator/"><b>Cumulative GPA calculator</b><small>Combine GPA across every term.</small><ArrowRight size={16} /></Link>
              <Link href="/final-grade-calculator/"><b>Final grade calculator</b><small>Find the score you need on a final exam.</small><ArrowRight size={16} /></Link>
            </aside>
          </div>
        </section>

        <section className="page-faq-section">
          <div className="shell narrow-content">
            <span className="section-kicker">COMMON QUESTIONS</span><h2>GPA calculator FAQ</h2>
            <div className="faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
            <Link className="inline-link" href="/faq/">View every grade calculator question <ArrowRight size={16} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
