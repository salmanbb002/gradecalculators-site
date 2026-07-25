import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { GpaCalculator } from "@/components/gpa-calculator";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "High School GPA Calculator (Weighted 5.0 Scale) | Grade Calculator",
  description: "Calculate your high school GPA with Honors and AP/IB weighting. Add each course's letter grade, credit hours, and level to see your weighted or unweighted GPA.",
  alternates: { canonical: "/high-school-gpa-calculator/" },
  openGraph: { title: "High School GPA Calculator (Weighted 5.0 Scale)", url: "/high-school-gpa-calculator/" },
};

const faq: [string, string][] = [
  ["Is high school GPA on a 4.0 or 5.0 scale?", "Unweighted GPA uses a 4.0 scale for every course. Weighted GPA can exceed 4.0 — a common convention adds 1.0 for AP/IB courses and 0.5 for Honors courses, so an all-AP straight-A schedule can reach close to 5.0."],
  ["Do colleges look at weighted or unweighted GPA?", "Many colleges recalculate GPA using their own scale during admissions review, since high schools weight courses inconsistently. Reporting both weighted and unweighted GPA on a transcript gives colleges the full picture."],
  ["Does every school use the same AP/Honors bonus?", "No. Some districts add 1.0 for AP/IB and 0.5 for Honors, others use different bonus values or cap the weighted scale at 4.5. Check your school's profile or guidance office for the exact policy before comparing GPA across schools."],
];

export default function HighSchoolGpaCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "High School GPA Calculator",
        url: "https://gradecalculators.site/high-school-gpa-calculator/",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://gradecalculators.site/" },
          { "@type": "ListItem", position: 2, name: "High School GPA Calculator", item: "https://gradecalculators.site/high-school-gpa-calculator/" },
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
            <Breadcrumbs current="High school GPA calculator" />
            <span className="section-kicker">WEIGHTED FOR AP, HONORS & IB</span>
            <h1>High School GPA Calculator</h1>
            <p>Add every course from your schedule, mark which ones are Honors or AP/IB, and see your weighted and unweighted GPA update instantly.</p>
            <div className="updated-note">Free to use · No sign-up · Updated July 26, 2026</div>
          </div>
        </section>

        <section className="calculator-section page-calculator-section">
          <div className="shell"><GpaCalculator /></div>
        </section>

        <section className="content-section">
          <div className="shell content-grid">
            <article className="article-content">
              <span className="section-kicker">HOW WEIGHTING WORKS</span>
              <h2>Why AP and Honors classes are weighted</h2>
              <p>Rigorous courses cover more material and are graded on a tougher curve, so many high schools reward them with bonus GPA points. The most common convention adds 1.0 grade point for AP or IB classes and 0.5 for Honors classes, on top of the standard 4.0-point scale for the letter grade earned.</p>
              <h2>Weighted GPA can exceed 4.0</h2>
              <p>A student who earns straight A's in all AP classes can reach close to a 5.0 weighted GPA, since each A already worth 4.0 gains an additional 1.0. This is normal and expected — weighted GPA is designed to recognize course difficulty, not to match the 4.0 unweighted scale.</p>
              <h2>Turn weighting off to see your unweighted GPA</h2>
              <p>Use the weighted toggle above the course list. With weighting off, every course counts as a standard 4.0-scale grade regardless of level — this is the number most college applications ask for alongside the weighted figure.</p>
              <h2>Class rank and GPA</h2>
              <p>Schools that calculate class rank almost always use weighted GPA, since it accounts for students who chose harder course loads. If your school reports rank, confirm which GPA version (weighted or unweighted) it is based on.</p>
              <h2>Check your school's exact policy</h2>
              <p>Weighting conventions vary by district — some cap the bonus, use a 4.5 scale instead of 5.0, or only weight AP and not Honors courses. Use this calculator's standard convention as a close estimate, then confirm the exact figure with your school's registrar or transcript.</p>
            </article>
            <aside className="related-panel">
              <span>RELATED CALCULATORS</span>
              <Link href="/gpa-calculator/"><b>GPA calculator</b><small>General weighted and unweighted GPA.</small><ArrowRight size={16} /></Link>
              <Link href="/college-gpa-calculator/"><b>College GPA calculator</b><small>Credit hours and semester GPA.</small><ArrowRight size={16} /></Link>
              <Link href="/cumulative-gpa-calculator/"><b>Cumulative GPA calculator</b><small>Combine every year into one GPA.</small><ArrowRight size={16} /></Link>
              <Link href="/grading-scale/"><b>US grading scale</b><small>Compare percentage thresholds.</small><ArrowRight size={16} /></Link>
            </aside>
          </div>
        </section>

        <section className="page-faq-section">
          <div className="shell narrow-content">
            <span className="section-kicker">COMMON QUESTIONS</span><h2>High school GPA FAQ</h2>
            <div className="faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
            <Link className="inline-link" href="/faq/">View every grade calculator question <ArrowRight size={16} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
