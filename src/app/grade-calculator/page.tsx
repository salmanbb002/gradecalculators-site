import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Printer, SlidersHorizontal } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { GradeCalculator } from "@/components/grade-calculator";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Free Grade Calculator & Easy Grader | Grade Calculator",
  description: "Use this free grade calculator to convert wrong answers into percentages and letter grades. Create a complete grade chart with custom scales and fractional points.",
  alternates: { canonical: "/grade-calculator/" },
  openGraph: { title: "Free Grade Calculator & Easy Grader", url: "/grade-calculator/" },
};

const faq = [
  ["How is a test grade calculated?", "Correct answers are divided by total questions and multiplied by 100. Bonus points are added to the correct total before the percentage is calculated."],
  ["Can I use half or quarter points?", "Yes. Open Calculator options and select whole, half, or quarter-point precision."],
  ["Can I change the letter-grade scale?", "Yes. Choose standard, strict, or lenient presets, or set a custom minimum percentage for every letter grade."],
];

export default function GradeCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Grade Calculator — Free Easy Grader",
        url: "https://gradecalculators.site/grade-calculator/",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://gradecalculators.site/" },
          { "@type": "ListItem", position: 2, name: "Grade Calculator", item: "https://gradecalculators.site/grade-calculator/" },
        ],
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
            <Breadcrumbs current="Grade calculator" />
            <span className="section-kicker">FREE EASY GRADER</span>
            <h1>Grade Calculator</h1>
            <p>Calculate test, quiz, and assignment grades instantly. Enter the total questions and wrong answers to see the percentage, letter grade, and every possible score in a printable grading chart.</p>
            <div className="updated-note">Free to use · No sign-up · Updated July 16, 2026</div>
          </div>
        </section>

        <section className="calculator-section page-calculator-section">
          <div className="shell"><GradeCalculator /></div>
        </section>

        <section className="content-section">
          <div className="shell content-grid">
            <article className="article-content">
              <span className="section-kicker">HOW THE TOOL WORKS</span>
              <h2>Calculate a grade in seconds</h2>
              <p>The calculator subtracts missed points from the total possible points, then divides the earned points by the total. Your score updates immediately whenever you change an input.</p>
              <ol className="article-steps">
                <li><span>1</span><div><h3>Enter total questions</h3><p>Use the number of questions or the total points available on the assignment.</p></div></li>
                <li><span>2</span><div><h3>Enter wrong answers</h3><p>Add the number of answers or points missed. Fractional points are supported.</p></div></li>
                <li><span>3</span><div><h3>Read or print the result</h3><p>Use the highlighted result or print the complete grade chart.</p></div></li>
              </ol>
              <h2>Flexible grading options</h2>
              <div className="benefit-list">
                <div><SlidersHorizontal size={21} /><span><b>Custom grade scales</b><small>Adjust A–F thresholds to match your school.</small></span></div>
                <div><CheckCircle2 size={21} /><span><b>Fractional and bonus points</b><small>Grade projects with whole, half, or quarter points.</small></span></div>
                <div><Printer size={21} /><span><b>Print-ready grade chart</b><small>Keep a clean reference beside your answer sheets.</small></span></div>
              </div>
            </article>
            <aside className="related-panel">
              <span>RELATED GUIDES</span>
              <Link href="/grade-chart/"><b>Grade chart guide</b><small>See how every score is organized.</small><ArrowRight size={16} /></Link>
              <Link href="/how-to-calculate-grades/"><b>How to calculate grades</b><small>Learn the formula with examples.</small><ArrowRight size={16} /></Link>
              <Link href="/grading-scale/"><b>US grading scale</b><small>Compare percentage thresholds.</small><ArrowRight size={16} /></Link>
            </aside>
          </div>
        </section>

        <section className="page-faq-section">
          <div className="shell narrow-content">
            <span className="section-kicker">COMMON QUESTIONS</span><h2>Grade calculator FAQ</h2>
            <div className="faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
            <Link className="inline-link" href="/faq/">View every grade calculator question <ArrowRight size={16} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
