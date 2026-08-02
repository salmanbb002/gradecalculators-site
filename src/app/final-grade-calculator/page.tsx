import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { FinalGradeCalculator } from "@/components/final-grade-calculator";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Final Grade Calculator: What Do I Need? | Grade Calculator",
  description: "Find out what score you need on your final exam to reach a target course grade. Enter your current grade and the final's weight for an instant answer.",
  alternates: { canonical: "/final-grade-calculator/" },
  openGraph: { title: "Final Grade Calculator: What Score Do I Need?", url: "/final-grade-calculator/" },
};

const faq: [string, string][] = [
  ["What if the required score is over 100%?", "If the calculator shows a required score above 100%, that target grade is not reachable on this final exam alone, even with a perfect score. Consider extra credit, a grade replacement policy, or a different target."],
  ["What if I don't know the exact weight of the final exam?", "Check the course syllabus — instructors are usually required to publish grading weights. If it truly isn't stated, ask the instructor directly rather than guessing, since a few percentage points of weight meaningfully changes the required score."],
  ["Does this work if my final exam is curved?", "Calculate the required raw score first, then apply the announced curve afterward. If the instructor adds points or shifts the scale after grading, your actual required raw score will be lower than the uncurved calculation shows."],
];

export default function FinalGradeCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Final Grade Calculator",
        url: "https://gradecalculators.site/final-grade-calculator/",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://gradecalculators.site/" },
          { "@type": "ListItem", position: 2, name: "Final Grade Calculator", item: "https://gradecalculators.site/final-grade-calculator/" },
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
            <Breadcrumbs current="Final grade calculator" />
            <span className="section-kicker">WHAT DO I NEED ON MY FINAL?</span>
            <h1>Final Grade Calculator</h1>
            <p>Enter your current course grade, the final exam's weight, and the grade you want. The calculator solves for the exact score you need on the final exam.</p>
            <div className="updated-note">Free to use · No sign-up · Updated July 26, 2026</div>
          </div>
        </section>

        <section className="calculator-section page-calculator-section">
          <div className="shell"><FinalGradeCalculator /></div>
        </section>

        <section className="content-section">
          <div className="shell content-grid">
            <article className="article-content">
              <span className="section-kicker">THE FORMULA</span>
              <h2>How the required score is calculated</h2>
              <p>A course grade is a weighted average of every graded component. If the final exam is worth a known share of the course grade, the required score solves this equation for the unknown final-exam score: <strong>target % = current % × (1 − weight) + final % × weight</strong>.</p>
              <p>Rearranged for the final exam score, the calculator uses: <strong>required final % = (target % − current % × (1 − weight)) ÷ weight</strong>, where weight is the final's share of the grade written as a decimal.</p>
              <h2>Worked example</h2>
              <p>A student has an 85% going into a final exam worth 20% of the course grade and wants to finish with a 90%. Required score = (90 − 85 × 0.8) ÷ 0.2 = (90 − 68) ÷ 0.2 = 110%. Because that is above 100%, a 90% final course grade is not reachable through the final exam alone — the student would need extra credit or a stronger grade in another component.</p>
              <h2>Why the final exam's weight matters so much</h2>
              <p>A final exam worth 10% of the grade can only move the overall percentage by 10 points at most, even with a perfect score. A final worth 40% can swing the final grade dramatically in either direction. Always confirm the exact weight in the syllabus before relying on the result.</p>
              <h2>When the calculator shows a negative or very low required score</h2>
              <p>A required score at or below 0% means the target grade is already guaranteed — any score on the final, including a zero, keeps the course average at or above the target. This is common late in a course when strong prior grades have already secured a target letter grade.</p>
            </article>
            <aside className="related-panel">
              <span>RELATED GUIDES</span>
              <Link href="/gradebook-calculator/"><b>Gradebook calculator</b><small>See every weighted category, not just the final.</small><ArrowRight size={16} /></Link>
              <Link href="/grade-calculator/"><b>Grade calculator</b><small>Calculate a single test or assignment score.</small><ArrowRight size={16} /></Link>
              <Link href="/grading-scale/"><b>US grading scale</b><small>Compare percentage thresholds.</small><ArrowRight size={16} /></Link>
              <Link href="/gpa-calculator/"><b>GPA calculator</b><small>See how this course affects your GPA.</small><ArrowRight size={16} /></Link>
              <Link href="/how-to-calculate-grades/"><b>How to calculate grades</b><small>Learn the weighted-average formula.</small><ArrowRight size={16} /></Link>
            </aside>
          </div>
        </section>

        <section className="page-faq-section">
          <div className="shell narrow-content">
            <span className="section-kicker">COMMON QUESTIONS</span><h2>Final grade calculator FAQ</h2>
            <div className="faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
            <Link className="inline-link" href="/faq/">View every grade calculator question <ArrowRight size={16} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
