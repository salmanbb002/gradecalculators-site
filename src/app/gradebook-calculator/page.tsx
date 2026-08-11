import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ListChecks, Percent } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { GradebookCalculator } from "@/components/gradebook-calculator";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Gradebook Calculator: Weighted Course Grade | Grade Calculator",
  description: "This free online gradebook calculator finds a weighted course grade from homework, quiz, midterm, and final categories. Add every category and weight to see your overall grade instantly.",
  alternates: { canonical: "/gradebook-calculator/" },
  openGraph: { title: "Gradebook Calculator: Weighted Course Grade", url: "/gradebook-calculator/" },
};

const faq = [
  ["Do my category weights need to add up to 100%?", "Yes, for the result to represent a complete course grade. The calculator still computes an answer if your weights total more or less than 100%, but the overall percentage only reflects your real course grade when every graded category is included and the weights sum to 100%."],
  ["What if I don't know my final exam score yet?", "Use the final grade calculator instead. It works backward from your current categories to find the score you need on a remaining exam or assignment to reach a target grade."],
  ["Can I add more than four categories?", "Yes. Add as many categories as your syllabus lists—homework, labs, participation, quizzes, projects, midterms, and a final can each be its own row with its own weight."],
  ["Does this replace my school's online gradebook?", "No. Your school's gradebook is the official record. This calculator is a quick way to check your own math, preview a hypothetical score, or plan how much a remaining assignment needs to be worth."],
];

export default function GradebookCalculatorPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Gradebook Calculator — Weighted Course Grade",
        url: "https://gradecalculators.site/gradebook-calculator/",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://gradecalculators.site/" },
          { "@type": "ListItem", position: 2, name: "Gradebook calculator", item: "https://gradecalculators.site/gradebook-calculator/" },
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
            <Breadcrumbs current="Gradebook calculator" />
            <span className="section-kicker">WEIGHTED COURSE GRADE</span>
            <h1>Gradebook Calculator</h1>
            <p>This online gradebook calculator combines homework, quizzes, exams, and any other graded category into one overall course grade. Enter each category's weight and your score, and the total updates instantly.</p>
            <div className="updated-note">Free to use · No sign-up · Updated August 1, 2026</div>
          </div>
        </section>

        <section className="calculator-section page-calculator-section">
          <div className="shell"><GradebookCalculator /></div>
        </section>

        <section className="content-section">
          <div className="shell content-grid">
            <article className="article-content">
              <span className="section-kicker">HOW THE TOOL WORKS</span>
              <h2>What is a gradebook calculator?</h2>
              <p>A gradebook calculator combines scores from every graded category in a course—homework, quizzes, labs, midterms, a final exam—into a single overall percentage. Unlike a single-test grade calculator, it doesn't treat every score equally. Each category is multiplied by its own weight, so a final exam worth 20% of the course affects the total far more than one homework set worth 5%.</p>

              <h2>How the weighted formula works</h2>
              <p>Multiply each category's score by its weight, add the results together, and divide by the total weight. Because every weight is a share of the whole course, they should add up to 100% for the overall percentage to represent a complete, accurate grade.</p>
              <div className="reference-table-wrap">
                <table className="reference-table">
                  <thead><tr><th>Category</th><th>Weight</th><th>Score</th><th>Contribution</th></tr></thead>
                  <tbody>
                    <tr><td>Homework</td><td>20%</td><td>90%</td><td>18.0</td></tr>
                    <tr><td>Quizzes</td><td>30%</td><td>85%</td><td>25.5</td></tr>
                    <tr><td>Midterm</td><td>30%</td><td>80%</td><td>24.0</td></tr>
                    <tr><td>Final exam</td><td>20%</td><td>70%</td><td>14.0</td></tr>
                  </tbody>
                </table>
              </div>
              <p>Adding the contributions gives 81.5, and dividing by the 100% total weight gives an <strong>81.5% overall course grade</strong>—the same numbers used as the calculator's starting example above.</p>

              <h2>Common input mistakes that skew the result</h2>
              <div className="benefit-list">
                <div><Percent size={21} /><span><b>Weights that don't total 100%</b><small>Missing or duplicated categories throw off the overall percentage.</small></span></div>
                <div><ListChecks size={21} /><span><b>Points entered instead of percentages</b><small>Convert raw points to a percentage first if a category isn't already scored out of 100.</small></span></div>
                <div><CheckCircle2 size={21} /><span><b>A dropped or missing category</b><small>Leaving out a low score or forgotten assignment overstates the real grade.</small></span></div>
              </div>

              <h2>Gradebook calculator vs. other grade tools</h2>
              <p>Use this calculator for a whole course made up of multiple weighted categories. For a single test, quiz, or assignment, the <Link href="/grade-calculator/">grade calculator</Link> converts wrong answers or missed points into one percentage and letter grade. If you already know your current categories but need the exact score required on a remaining exam, the <Link href="/final-grade-calculator/">final grade calculator</Link> solves for that number directly.</p>

              <h2>Percentage, letter grade, and GPA</h2>
              <p>Once you have an overall course percentage, convert it to a letter grade and GPA using your school's scale. Thresholds vary by school and sometimes by class, so check the <Link href="/grading-scale/">US grading scale guide</Link> for standard, strict, and lenient percentage ranges before assuming a specific letter grade.</p>
            </article>
            <aside className="related-panel">
              <span>RELATED GUIDES</span>
              <Link href="/grade-calculator/"><b>Grade calculator</b><small>Grade a single test or assignment.</small><ArrowRight size={16} /></Link>
              <Link href="/final-grade-calculator/"><b>Final grade calculator</b><small>Find the score you need on what's left.</small><ArrowRight size={16} /></Link>
              <Link href="/grading-scale/"><b>US grading scale</b><small>Compare percentage thresholds.</small><ArrowRight size={16} /></Link>
              <Link href="/blog/weighted-vs-unweighted-grades/"><b>Weighted vs. unweighted grades</b><small>Understand the difference first.</small><ArrowRight size={16} /></Link>
              <Link href="/blog/how-to-calculate-grade-percentage/"><b>How to calculate grade percentage</b><small>The formula behind every result.</small><ArrowRight size={16} /></Link>
            </aside>
          </div>
        </section>

        <section className="page-faq-section">
          <div className="shell narrow-content">
            <span className="section-kicker">COMMON QUESTIONS</span><h2>Gradebook calculator FAQ</h2>
            <div className="faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
            <Link className="inline-link" href="/faq/">View every grade calculator question <ArrowRight size={16} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
