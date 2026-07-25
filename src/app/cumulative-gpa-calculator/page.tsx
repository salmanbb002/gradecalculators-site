import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { CumulativeGpaCalculator } from "@/components/cumulative-gpa-calculator";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Cumulative GPA Calculator (Multiple Semesters) | Grade Calculator",
  description: "Combine GPA and credit hours from multiple semesters, years, or schools into one cumulative GPA. Add each term and see the credit-weighted total instantly.",
  alternates: { canonical: "/cumulative-gpa-calculator/" },
  openGraph: { title: "Cumulative GPA Calculator (Multiple Semesters)", url: "/cumulative-gpa-calculator/" },
};

const faq: [string, string][] = [
  ["How is cumulative GPA different from semester GPA?", "Semester GPA covers only the courses in one term. Cumulative GPA combines the quality points and credit hours from every term you have completed into a single running average, which is what appears on an official transcript."],
  ["Do transfer credits count toward cumulative GPA?", "Policies vary. Many schools count transfer credit hours toward your degree but exclude the transfer institution's grades from your cumulative GPA, since that GPA was calculated under a different school's grading scale. Check your registrar's transfer credit policy."],
  ["How much can one bad semester lower my cumulative GPA?", "The effect depends on how many credit hours you have already completed. A rough semester early on, with few prior credits, moves cumulative GPA more than the same semester after you have accumulated 60+ credit hours, because the bad term is a smaller share of the total credit-weighted average."],
];

export default function CumulativeGpaCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Cumulative GPA Calculator",
        url: "https://gradecalculators.site/cumulative-gpa-calculator/",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://gradecalculators.site/" },
          { "@type": "ListItem", position: 2, name: "Cumulative GPA Calculator", item: "https://gradecalculators.site/cumulative-gpa-calculator/" },
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
            <Breadcrumbs current="Cumulative GPA calculator" />
            <span className="section-kicker">COMBINE EVERY TERM</span>
            <h1>Cumulative GPA Calculator</h1>
            <p>Add the GPA and credit hours from each semester, year, or school. The calculator combines them into one credit-weighted cumulative GPA.</p>
            <div className="updated-note">Free to use · No sign-up · Updated July 26, 2026</div>
          </div>
        </section>

        <section className="calculator-section page-calculator-section">
          <div className="shell"><CumulativeGpaCalculator /></div>
        </section>

        <section className="content-section">
          <div className="shell content-grid">
            <article className="article-content">
              <span className="section-kicker">HOW CUMULATIVE GPA WORKS</span>
              <h2>A credit-weighted average of every term</h2>
              <p>Cumulative GPA is not a simple average of each term's GPA — it is credit-weighted. Multiply each term's GPA by its credit hours to get that term's quality points, add the quality points across every term, then divide by total credit hours attempted across your entire academic career.</p>
              <h2>Why a 12-credit semester and an 18-credit semester count differently</h2>
              <p>A term with more credit hours contributes more quality points to the cumulative total, so a strong GPA in a heavy course load raises cumulative GPA more than the same GPA in a light course load. This is also why one bad semester matters less as total credit hours accumulate over time.</p>
              <h2>Combining GPA across high school and college</h2>
              <p>High school and college GPA are calculated and reported separately — colleges do not merge a high school GPA into a college transcript's cumulative GPA. Use this calculator to combine multiple college semesters, or multiple high school years, but not the two together.</p>
              <h2>Repeating a course and cumulative GPA</h2>
              <p>If your school replaces a repeated course's original grade in GPA calculations, recalculate that term's GPA with the updated grade before entering it here. If your school averages both attempts instead, include both grades in the term where each was originally earned.</p>
              <h2>Academic standing and cumulative GPA minimums</h2>
              <p>Financial aid, scholarship renewal, and academic probation policies are almost always based on cumulative GPA rather than a single term's GPA, since it reflects overall academic performance rather than one term's results.</p>
            </article>
            <aside className="related-panel">
              <span>RELATED CALCULATORS</span>
              <Link href="/college-gpa-calculator/"><b>College GPA calculator</b><small>Calculate a single semester's GPA.</small><ArrowRight size={16} /></Link>
              <Link href="/high-school-gpa-calculator/"><b>High school GPA calculator</b><small>Weighted for AP, Honors, and IB.</small><ArrowRight size={16} /></Link>
              <Link href="/gpa-calculator/"><b>GPA calculator</b><small>General weighted and unweighted GPA.</small><ArrowRight size={16} /></Link>
              <Link href="/final-grade-calculator/"><b>Final grade calculator</b><small>Find the score you need on a final exam.</small><ArrowRight size={16} /></Link>
            </aside>
          </div>
        </section>

        <section className="page-faq-section">
          <div className="shell narrow-content">
            <span className="section-kicker">COMMON QUESTIONS</span><h2>Cumulative GPA FAQ</h2>
            <div className="faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
            <Link className="inline-link" href="/faq/">View every grade calculator question <ArrowRight size={16} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
