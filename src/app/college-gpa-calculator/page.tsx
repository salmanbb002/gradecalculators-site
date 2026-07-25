import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { GpaCalculator } from "@/components/gpa-calculator";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "College GPA Calculator (Credit Hours) | Grade Calculator",
  description: "Calculate your college semester GPA from letter grades and credit hours. See quality points per course and how each credit hour affects your average.",
  alternates: { canonical: "/college-gpa-calculator/" },
  openGraph: { title: "College GPA Calculator (Credit Hours)", url: "/college-gpa-calculator/" },
};

const faq: [string, string][] = [
  ["Do colleges use weighted GPA?", "Most colleges calculate GPA on an unweighted 4.0 scale, without bonus points for honors or advanced courses. Turn the weighted toggle off above for the figure most registrars report."],
  ["What GPA do I need for the Dean's List?", "Thresholds vary by school, but a 3.5 GPA for the term is a common minimum, with some programs requiring 3.7 or higher and a minimum full-time credit load. Check your college's academic policies for the exact requirement."],
  ["Is this my semester GPA or cumulative GPA?", "This calculator produces a single term's GPA from the courses you enter. For a running average across multiple semesters, use the cumulative GPA calculator and enter each term's GPA and credit hours."],
];

export default function CollegeGpaCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "College GPA Calculator",
        url: "https://gradecalculators.site/college-gpa-calculator/",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://gradecalculators.site/" },
          { "@type": "ListItem", position: 2, name: "College GPA Calculator", item: "https://gradecalculators.site/college-gpa-calculator/" },
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
            <Breadcrumbs current="College GPA calculator" />
            <span className="section-kicker">CREDIT-HOUR BASED</span>
            <h1>College GPA Calculator</h1>
            <p>Enter each course's letter grade and credit hours to calculate your semester GPA. Turn off weighting for the standard unweighted figure colleges report.</p>
            <div className="updated-note">Free to use · No sign-up · Updated July 26, 2026</div>
          </div>
        </section>

        <section className="calculator-section page-calculator-section">
          <div className="shell"><GpaCalculator /></div>
        </section>

        <section className="content-section">
          <div className="shell content-grid">
            <article className="article-content">
              <span className="section-kicker">HOW COLLEGE GPA WORKS</span>
              <h2>Credit hours, not course count, drive the average</h2>
              <p>College GPA weights every course by its credit hours rather than counting each course equally. A 4-credit lab science affects your GPA twice as much as a 2-credit seminar. Multiply each course's grade points by its credit hours to get quality points, then divide the total quality points by total credit hours attempted.</p>
              <h2>Semester GPA vs. cumulative GPA</h2>
              <p>Semester GPA reflects only the courses taken in one term. Cumulative GPA carries every credit hour and quality point earned across every term into one running average, which is the figure that typically determines academic standing, Dean's List eligibility, and graduation honors.</p>
              <h2>Repeated courses and grade replacement</h2>
              <p>Some colleges replace the original grade with the retake grade in GPA calculations when a course is repeated; others average both attempts, or count both toward credit hours attempted. Confirm your institution's repeat policy before assuming a retake fully erases a low grade.</p>
              <h2>Pass/fail and credit-only courses</h2>
              <p>Courses graded pass/fail, satisfactory/unsatisfactory, or credit/no-credit typically do not carry grade points and are excluded from GPA math, even though the credit hours may still count toward your degree progress. Leave these courses out of the calculator entirely.</p>
              <h2>Full-time status and GPA</h2>
              <p>Financial aid and scholarship eligibility often require both a minimum GPA and a minimum number of credit hours per term. Use this calculator alongside your school's credit-hour requirements when planning a course load.</p>
            </article>
            <aside className="related-panel">
              <span>RELATED CALCULATORS</span>
              <Link href="/cumulative-gpa-calculator/"><b>Cumulative GPA calculator</b><small>Combine every semester into one GPA.</small><ArrowRight size={16} /></Link>
              <Link href="/gpa-calculator/"><b>GPA calculator</b><small>General weighted and unweighted GPA.</small><ArrowRight size={16} /></Link>
              <Link href="/final-grade-calculator/"><b>Final grade calculator</b><small>Find the score you need on a final exam.</small><ArrowRight size={16} /></Link>
              <Link href="/grading-scale/"><b>US grading scale</b><small>Compare percentage thresholds.</small><ArrowRight size={16} /></Link>
            </aside>
          </div>
        </section>

        <section className="page-faq-section">
          <div className="shell narrow-content">
            <span className="section-kicker">COMMON QUESTIONS</span><h2>College GPA FAQ</h2>
            <div className="faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
            <Link className="inline-link" href="/faq/">View every grade calculator question <ArrowRight size={16} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
