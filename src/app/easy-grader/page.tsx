import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, Search, Timer, Zap } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { GradeCalculator } from "@/components/grade-calculator";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Easy Grader & EZ Grader (Free Online Tool) | Grade Calculator",
  description: "A free online easy grader — also searched as ez grader or ezgrader. Enter wrong answers, get an instant percentage, letter grade, and printable grading chart.",
  alternates: { canonical: "/easy-grader/" },
  openGraph: { title: "Easy Grader & EZ Grader — Free Online Tool", url: "/easy-grader/" },
};

const faq: [string, string][] = [
  ["Is an easy grader the same as an ez grader?", "Yes. \"Easy grader\" and \"ez grader\" (also written ezgrader or e z grader) are two spellings for the same tool — one that converts wrong answers into a percentage and letter grade, plus a full grading chart. This page covers both."],
  ["How is this different from the grade calculator?", "Nothing about the math — both use the same tool. This page is the dedicated home for the \"easy grader\" and \"ez grader\" search terms specifically, while the grade calculator page covers the general grading-calculator use case in more depth. Bookmark whichever URL you prefer; the results are identical."],
  ["Is there a free easy grader app I can install?", "No installation is needed. This is a free, browser-based easy grader that works on any device with no download, no account, and no sign-up — open the page and start grading."],
  ["Can teachers use this as a quick grader for a stack of tests?", "Yes. Set the total questions once, then change only the wrong-answer count for each student — the percentage, letter grade, and highlighted row in the grading chart update instantly, which is faster than recalculating each paper by hand."],
  ["Does the easy grader support half or quarter points?", "Yes. Open Calculator options and choose whole, half, or quarter-point precision for rubrics, projects, and partial-credit grading."],
];

export default function EasyGraderPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "Easy Grader — Free EZ Grader",
        url: "https://gradecalculators.site/easy-grader/",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any",
        isAccessibleForFree: true,
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://gradecalculators.site/" },
          { "@type": "ListItem", position: 2, name: "Easy Grader", item: "https://gradecalculators.site/easy-grader/" },
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
            <Breadcrumbs current="Easy grader" />
            <span className="section-kicker">EASY GRADER · EZ GRADER</span>
            <h1>Easy Grader (EZ Grader)</h1>
            <p>A free easy grader — also searched as "ez grader" or "ezgrader" — for converting wrong answers into a percentage, letter grade, and complete grading chart in seconds.</p>
            <div className="updated-note">Free to use · No sign-up · Updated August 11, 2026</div>
          </div>
        </section>

        <section className="calculator-section page-calculator-section">
          <div className="shell"><GradeCalculator /></div>
        </section>

        <section className="content-section">
          <div className="shell content-grid">
            <article className="article-content">
              <span className="section-kicker">WHAT IT IS</span>
              <h2>What is an easy grader?</h2>
              <p>An easy grader is a classroom tool that turns total questions and wrong answers into a percentage score, a letter grade, and a chart showing every other possible score for the same test. The name comes from a physical paper grading chart teachers have used for decades to grade quizzes by eye without doing the division by hand — this tool is the free, digital version of that same idea.</p>

              <h2>Easy grader vs. ez grader — same tool, different spelling</h2>
              <p>Both terms describe the same thing, and both are used interchangeably in search: "easy grader," "ez grader," "ezgrader," and "e z grader" all point to a tool that grades tests from wrong-answer counts. Common misspellings like "essy grader" turn up for the same reason — searchers are looking for this exact kind of tool, just typing the name slightly differently. Whichever spelling brought you here, the calculator above covers all of them.</p>

              <h2>More than a quick grader</h2>
              <p>Beyond the core easy-grader use case, the same tool works as a general-purpose quick grader, grade checker, or online grader for any test, quiz, or assignment:</p>
              <div className="benefit-list">
                <div><Zap size={21} /><span><b>Quick grader for a stack of papers</b><small>Change only the wrong-answer count per student and re-read the result instantly.</small></span></div>
                <div><Search size={21} /><span><b>Grade checker for students</b><small>Check a raw score against the class scale before it's officially posted.</small></span></div>
                <div><ClipboardCheck size={21} /><span><b>Grader for teachers, TAs, and tutors</b><small>One shared tool with a consistent scale across everyone grading the same assessment.</small></span></div>
                <div><Timer size={21} /><span><b>Test grader with a live chart</b><small>See every possible score for the test length before grading the first paper.</small></span></div>
              </div>

              <h2>Grading by questions or by points</h2>
              <p>Use total questions and wrong answers for equal-value quizzes and tests. For rubrics, essays, and projects with uneven point values, switch to total possible points and points missed instead — the same easy grader math applies either way, and half- or quarter-point precision is available in Calculator options for partial credit.</p>

              <h2>Not the same as ezgrader.us</h2>
              <p>"EZ Grader" is also the name of a separate, long-running paid grading-chart product. This page is an independent free tool built to cover the same "easy grader" and "ez grader" search intent — it isn't affiliated with that product, but it does the same underlying calculation at no cost and with no account required.</p>

              <h2>When you need more than a single score</h2>
              <p>This page grades one test, quiz, or assignment at a time. For a full course made of several weighted categories, use the <Link href="/gradebook-calculator/">gradebook calculator</Link>. To find the exact score needed on a remaining final exam, the <Link href="/final-grade-calculator/">final grade calculator</Link> solves for that directly. For a deeper look at the underlying formula and fractional-point grading, see the <Link href="/grade-calculator/">grade calculator</Link> guide — it's the same tool with more explanation underneath.</p>
            </article>
            <aside className="related-panel">
              <span>RELATED GUIDES</span>
              <Link href="/grade-calculator/"><b>Grade calculator</b><small>The same tool, full formula explained.</small><ArrowRight size={16} /></Link>
              <Link href="/gradebook-calculator/"><b>Gradebook calculator</b><small>Combine weighted categories into a course grade.</small><ArrowRight size={16} /></Link>
              <Link href="/grade-chart/"><b>Grade chart</b><small>See every possible score at a glance.</small><ArrowRight size={16} /></Link>
              <Link href="/grading-scale/"><b>US grading scale</b><small>Compare percentage thresholds.</small><ArrowRight size={16} /></Link>
              <Link href="/blog/grade-calculators-for-teachers/"><b>Grade calculators for teachers</b><small>Batch-grading tips.</small><ArrowRight size={16} /></Link>
            </aside>
          </div>
        </section>

        <section className="page-faq-section">
          <div className="shell narrow-content">
            <span className="section-kicker">COMMON QUESTIONS</span><h2>Easy grader FAQ</h2>
            <div className="faq-list">{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
            <Link className="inline-link" href="/faq/">View every grade calculator question <ArrowRight size={16} /></Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
