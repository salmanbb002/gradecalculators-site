import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "How to Calculate Grades: Formula & Examples | Grade Calculator",
  description: "Learn how to calculate a test grade using the correct-answer formula. Follow three simple steps and see worked examples for questions, points, and bonus credit.",
  alternates: { canonical: "/how-to-calculate-grades/" },
  openGraph: { title: "How to Calculate Grades: Formula and Examples", url: "/how-to-calculate-grades/" },
};

export default function HowToCalculateGradesPage() {
  const schema = {
    "@context": "https://schema.org", "@type": "HowTo", name: "How to calculate a grade",
    step: [
      { "@type": "HowToStep", position: 1, name: "Find correct answers", text: "Subtract wrong answers from total questions." },
      { "@type": "HowToStep", position: 2, name: "Divide by the total", text: "Divide correct answers by total questions." },
      { "@type": "HowToStep", position: 3, name: "Convert to a percentage", text: "Multiply the decimal by 100." },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />
      <main className="inner-page">
        <section className="page-hero"><div className="shell"><Breadcrumbs current="How to calculate grades" /><span className="section-kicker">STEP-BY-STEP GUIDE</span><h1>How to Calculate Grades</h1><p>To calculate a grade, divide the points earned by the total possible points and multiply by 100. The result is the percentage score used to determine the letter grade.</p><div className="updated-note">3-step method · Worked examples · Updated July 16, 2026</div></div></section>
        <section className="content-section"><div className="shell content-grid">
          <article className="article-content">
            <h2>The grade percentage formula</h2><div className="standalone-formula"><span>Grade %</span><b>=</b><div><strong>Points earned</strong><i /><strong>Total possible points</strong></div><b>× 100</b></div>
            <h2>Calculate a test grade in three steps</h2>
            <ol className="article-steps large-steps"><li><span>1</span><div><h3>Find the points earned</h3><p>Subtract wrong answers or missed points from the total possible points. For 25 questions with 2 wrong, the student earned 23 points.</p></div></li><li><span>2</span><div><h3>Divide earned points by the total</h3><p>Divide 23 by 25. The result is 0.92.</p></div></li><li><span>3</span><div><h3>Multiply by 100</h3><p>Multiply 0.92 by 100 to get a final score of 92%.</p></div></li></ol>
            <h2>Grade calculation examples</h2><div className="example-grid"><div><span>20 questions, 3 wrong</span><strong>17 ÷ 20 × 100 = 85%</strong><small>Letter grade: B</small></div><div><span>40 points, 5.5 missed</span><strong>34.5 ÷ 40 × 100 = 86.25%</strong><small>Letter grade: B</small></div><div><span>50 points, 4 bonus</span><strong>54 ÷ 50 × 100 = 108%</strong><small>Bonus score above 100%</small></div></div>
            <Link className="primary-button article-cta" href="/grade-calculator/">Calculate your grade <ArrowRight size={18} /></Link>
          </article>
          <aside className="related-panel"><span>RELATED RESOURCES</span><Link href="/grade-calculator/"><b>Grade calculator</b><small>Skip the manual math.</small><ArrowRight size={16} /></Link><Link href="/grade-chart/"><b>Grade chart</b><small>See every possible score.</small><ArrowRight size={16} /></Link><Link href="/grading-scale/"><b>Letter-grade scale</b><small>Convert percentages to letters.</small><ArrowRight size={16} /></Link></aside>
        </div></section>
      </main>
      <SiteFooter />
    </>
  );
}
