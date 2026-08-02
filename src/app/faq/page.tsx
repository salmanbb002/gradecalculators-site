import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Grade Calculator FAQ: Grades, Charts & Scales",
  description: "Get answers about calculating test grades, fractional points, bonus credit, rounding, letter-grade scales, printable charts, and calculator privacy.",
  alternates: { canonical: "/faq/" },
  openGraph: { title: "Grade Calculator Frequently Asked Questions", url: "/faq/" },
};

const questions = [
  ["How do I calculate a grade from wrong answers?", "Subtract wrong answers from total questions, divide the correct answers by the total, and multiply by 100. For 25 questions with 2 wrong: 23 ÷ 25 × 100 = 92%."],
  ["What is an easy grader?", "An easy grader is a tool that creates percentages and letter grades from the total questions and the number missed. It also produces a chart of every possible score."],
  ["Can I calculate grades with half points?", "Yes. Grade Calculator supports whole, half, and quarter-point precision for projects, rubrics, and assignments with partial credit."],
  ["How are bonus points calculated?", "Bonus points are added to earned points before dividing by the total possible points. A result can exceed 100% when bonus credit is included."],
  ["Should grades be rounded?", "Rounding depends on the instructor or school policy. The calculator can display zero, one, or two decimal places so the result follows the required policy."],
  ["What percentage is an A?", "On the default standard US scale, an A begins at 93% and an A− begins at 90%. Other schools may use 90% or 95% as the minimum for an A."],
  ["Can I customize the grading scale?", "Yes. Choose a preset or set the minimum percentage for A, A−, B+, B, B−, C+, C, C−, D+, D, D−, and F."],
  ["Is the grade calculator free?", "Yes. The calculator is free to use and does not require an account."],
  ["Does the website collect student information?", "No student names or records are requested. Calculations run in the browser, and calculator preferences may be stored locally on the same device."],
  ["How many questions can I miss and still pass?", "Multiply the total questions by the required passing percentage, round the required correct answers up, and subtract that number from the total. For 20 questions and a 70% passing score, you can miss 6."],
  ["What is the difference between a raw score and a percentage?", "A raw score is the points earned or questions correct, such as 18 out of 20. A percentage converts that fraction to a score out of 100, so 18 out of 20 equals 90%."],
  ["Are weighted grades calculated differently?", "Yes. Multiply each category average by its assigned weight and add the weighted results. Assignment points, category weights, and weighted GPA are separate concepts. Use the gradebook calculator to add every category at once."],
  ["What is a gradebook calculator?", "A gradebook calculator combines every graded category in a course — homework, quizzes, midterms, a final exam — into one overall percentage, using each category's weight instead of averaging every score equally."],
  ["Do gradebook category weights need to add up to 100%?", "Yes, for the overall percentage to represent a complete course grade. The calculator still produces a result if weights total more or less than 100%, but it only matches your real course grade once every graded category is included and the weights sum to 100%."],
  ["Can a grade be higher than 100%?", "Yes, when bonus or extra-credit points are added without increasing the regular points possible. An instructor or gradebook may cap the official result at 100%."],
  ["What is GPA and how is it different from a grade?", "A grade is a single course's result. GPA (grade point average) converts every course's letter grade into grade points, multiplies by credit hours, and averages across a term or transcript. Use the grade calculator for one course and the GPA calculator for your overall average."],
  ["What is the difference between weighted and unweighted GPA?", "Unweighted GPA caps every course at 4.0. Weighted GPA adds bonus points — commonly +0.5 for Honors and +1.0 for AP or IB — so harder courses can contribute more than 4.0 grade points per credit."],
  ["How do I calculate the score I need on my final exam?", "Use the final grade calculator: enter your current course grade, the final exam's weight, and your target grade. It solves for the exact score needed on the final."],
  ["Is cumulative GPA the same as semester GPA?", "No. Semester GPA covers one term's courses. Cumulative GPA combines quality points and credit hours from every completed term into one running average, which is what appears on an official transcript."],
  ["Do AP and Honors classes always add the same GPA bonus?", "No. The +1.0 (AP/IB) and +0.5 (Honors) bonus used by this calculator is a common convention, but schools vary — some cap the weighted scale, use different bonus values, or weight only certain course types."],
  ["Does a low grade in one class ruin my GPA?", "It depends on the course's credit hours and how many total credit hours you have completed. A single low grade in a high-credit course early in your academic career affects cumulative GPA more than the same grade later, once more credits have accumulated."],
];

export default function FaqPage() {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: questions.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />
      <main className="inner-page">
        <section className="page-hero"><div className="shell"><Breadcrumbs current="FAQ" /><span className="section-kicker">FREQUENTLY ASKED</span><h1>Grade Calculator FAQ</h1><p>Clear answers about test grades, grade charts, percentage formulas, fractional points, letter-grade scales, bonus credit, weighted categories, rounding, GPA, final exams, and calculator privacy.</p><div className="updated-note">21 common questions · Updated August 1, 2026</div></div></section>
        <section className="page-faq-section faq-page-content"><div className="shell narrow-content"><div className="faq-list">{questions.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div><div className="faq-bottom-cta"><h2>Ready to calculate a grade?</h2><p>Enter two numbers and get the percentage, letter grade, and complete chart instantly.</p><Link className="primary-button" href="/grade-calculator/">Open grade calculator <ArrowRight size={18} /></Link></div></div></section>
      </main>
      <SiteFooter />
    </>
  );
}
