import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, ThumbsUp, Equal, AlertTriangle, XCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { GradingScaleTool } from "@/components/grading-scale-tool";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SCALE_PRESETS } from "@/lib/grade";

export const metadata: Metadata = {
  title: "US Grading Scale: Percentage to Letter Grade | Grade Calculator",
  description: "Review the standard US grading scale from A to F. Compare percentage ranges, letter grades, and common GPA values, then customize the scale in the calculator.",
  alternates: { canonical: "/grading-scale/" },
  openGraph: { title: "US Grading Scale: Percentage to Letter Grade", url: "/grading-scale/" },
};

const gpa: Record<string, string> = { "A": "4.0", "A−": "3.7", "B+": "3.3", "B": "3.0", "B−": "2.7", "C+": "2.3", "C": "2.0", "C−": "1.7", "D+": "1.3", "D": "1.0", "D−": "0.7", "F": "0.0" };

export default function GradingScalePage() {
  const bands = SCALE_PRESETS.standard;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebApplication", name: "Grading Scale Converter", url: "https://gradecalculators.site/grading-scale/", applicationCategory: "EducationalApplication", operatingSystem: "Any", isAccessibleForFree: true },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://gradecalculators.site/" },
        { "@type": "ListItem", position: 2, name: "Grading Scale", item: "https://gradecalculators.site/grading-scale/" },
      ] },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />
      <main className="inner-page">
        <section className="page-hero"><div className="shell"><Breadcrumbs current="Grading scale" /><span className="section-kicker">LETTER-GRADE REFERENCE</span><h1>US Grading Scale</h1><p>The standard US grading scale converts percentage scores into letter grades from A to F. Individual schools and instructors may use different thresholds, so always confirm the assigned scale.</p><div className="updated-note">Standard A–F scale · Common GPA values · Updated August 1, 2026</div></div></section>
        <section className="page-tool-section"><div className="shell"><div className="page-tool-heading"><span className="section-kicker">INTERACTIVE TOOL</span><h2>Convert percentage to letter grade</h2><p>Enter any percentage and compare standard, strict, and lenient A–F grading scales.</p></div><GradingScaleTool /></div></section>
        <section className="content-section"><div className="shell content-grid">
          <article className="article-content">
            <div className="direct-answer"><span>QUICK DEFINITION</span><p>A grading scale defines the minimum percentage required for each letter grade. It converts a numerical score into A, B, C, D, or F, often with plus and minus bands.</p></div>
            <h2>Percentage to letter-grade table</h2><p>This reference uses the plus/minus scale included as the calculator’s standard default. It is a useful starting point, but a course syllabus, school district, college, or university may publish different thresholds.</p>
            <div className="reference-table-wrap"><table className="reference-table"><thead><tr><th>Letter grade</th><th>Minimum</th><th>Percentage range</th><th>GPA value</th></tr></thead><tbody>{bands.map((band, index) => { const upper = index === 0 ? 100 : bands[index - 1].min - 0.01; return <tr key={band.label}><td><span className={`table-grade ${band.tone}`}>{band.label}</span></td><td>{band.min}%</td><td><strong>{band.min}%–{upper.toFixed(index === 0 ? 0 : 2)}%</strong></td><td>{gpa[band.label]}</td></tr>; })}</tbody></table></div>

            <h2>What each letter grade means</h2>
            <p>The percentage range is only half the picture — each letter also carries a practical outcome beyond the number on the page.</p>
            <div className="benefit-list">
              <div><Award size={21} /><span><b>A: excellent mastery</b><small>Commonly qualifies for honor roll and scholarship eligibility.</small></span></div>
              <div><ThumbsUp size={21} /><span><b>B: solid, above-average work</b><small>Keeps most students in competitive standing for college admissions.</small></span></div>
              <div><Equal size={21} /><span><b>C: average performance</b><small>Some prerequisite or major-specific courses still require a C or better to move on.</small></span></div>
              <div><AlertTriangle size={21} /><span><b>D: a passing but weak result</b><small>Often blocks progress into the next course, or triggers a required repeat.</small></span></div>
              <div><XCircle size={21} /><span><b>F: failing</b><small>Carries 0.0 GPA points and can pull a cumulative GPA down significantly.</small></span></div>
            </div>

            <h2>What counts as a passing grade?</h2>
            <p>On the standard scale, anything at or above 60% (a D− or better) generally passes in US high schools. College works differently — a D may technically pass a course, but many prerequisite, major-specific, or financial-aid rules require a C or better. Always confirm the passing threshold in the syllabus rather than assuming 60% applies everywhere.</p>

            <h2>How to calculate GPA from letter grades</h2>
            <p>GPA converts letter grades into a single number using grade points and credit hours, not just an average of percentages.</p>
            <ol className="article-steps">
              <li><span>1</span><div><h3>Convert each grade to points</h3><p>Use the GPA value column above — A = 4.0, B+ = 3.3, and so on.</p></div></li>
              <li><span>2</span><div><h3>Multiply by credit hours</h3><p>Each course's grade points × its credit hours gives that course's quality points.</p></div></li>
              <li><span>3</span><div><h3>Add and divide</h3><p>Sum every course's quality points, then divide by total credits attempted.</p></div></li>
            </ol>
            <p>Five 3-credit courses graded A, A, B+, B, and C add up to roughly 48.9 quality points across 15 credits — about a 3.26 GPA. Use the <Link href="/gpa-calculator/">GPA calculator</Link> to run your own courses and credits instead of doing this by hand.</p>

            <h2>Weighted grades combine multiple categories</h2>
            <p>A single percentage only reflects one assignment. Most courses combine several weighted categories — homework, quizzes, exams, a final — into one overall grade before that grade gets mapped to a letter on this scale. Use the <Link href="/gradebook-calculator/">gradebook calculator</Link> to combine your own categories and see the resulting letter grade.</p>

            <h2>Grading scales beyond the standard US model</h2>
            <p>The A–F percentage scale above is common but not universal. Some schools grade on a curve, ranking students against classmates rather than a fixed percentage. The International Baccalaureate uses a seven-point scale instead of letters, and some elementary programs use a 1–4 rating or non-numeric marks like S, N, and U rather than A–F. Always check which system a specific school or course actually uses before comparing scores across institutions.</p>

            <h2>Transcript codes beyond letter grades</h2>
            <p>Transcripts often include codes that aren't part of the A–F scale at all.</p>
            <div className="reference-table-wrap"><table className="reference-table"><thead><tr><th>Code</th><th>Meaning</th><th>GPA effect</th></tr></thead><tbody><tr><td>W</td><td>Withdrew before the deadline</td><td>No effect on GPA</td></tr><tr><td>I</td><td>Incomplete; work still outstanding</td><td>Excluded until resolved</td></tr><tr><td>P</td><td>Passed a pass/fail course</td><td>No effect on GPA</td></tr><tr><td>XF</td><td>Stopped attending without formally withdrawing</td><td>Counted like an F (0.0)</td></tr><tr><td>X</td><td>Audited — attended without earning credit</td><td>No effect on GPA</td></tr></tbody></table></div>

            <h2>Compare standard, strict, and lenient scales</h2>
            <div className="reference-table-wrap"><table className="reference-table"><thead><tr><th>Scale preset</th><th>A starts</th><th>B starts</th><th>C starts</th><th>D starts</th></tr></thead><tbody><tr><td>Standard</td><td><strong>93%</strong></td><td>83%</td><td>73%</td><td>63%</td></tr><tr><td>Strict</td><td><strong>95%</strong></td><td>85%</td><td>75%</td><td>65%</td></tr><tr><td>Lenient</td><td><strong>90%</strong></td><td>80%</td><td>70%</td><td>60%</td></tr></tbody></table></div>
            <h2>Percentage, letter grade, and GPA are different</h2><p>A percentage describes points earned out of points possible. A letter grade groups a percentage into a band. GPA converts course grades into grade points and may account for course credits or advanced-class weighting. Because GPA policies vary, use the official school scale for transcript calculations.</p>
            <h2>Use a custom grade scale</h2><p>The Grade Calculator tool includes standard, strict, and lenient presets. You can also edit every minimum threshold to match a syllabus or school policy.</p>
            <Link className="primary-button article-cta" href="/grade-calculator/">Open the custom grade calculator <ArrowRight size={18} /></Link>
          </article>
          <aside className="related-panel"><span>RELATED RESOURCES</span><Link href="/grade-calculator/"><b>Grade calculator</b><small>Use a custom scale.</small><ArrowRight size={16} /></Link><Link href="/gradebook-calculator/"><b>Gradebook calculator</b><small>Combine weighted categories.</small><ArrowRight size={16} /></Link><Link href="/gpa-calculator/"><b>GPA calculator</b><small>Convert grades and credits to GPA.</small><ArrowRight size={16} /></Link><Link href="/grade-chart/"><b>Grade chart</b><small>Match wrong answers to grades.</small><ArrowRight size={16} /></Link><Link href="/blog/grade-rounding-rules/"><b>Grade rounding rules</b><small>Handle boundary scores.</small><ArrowRight size={16} /></Link><Link href="/faq/"><b>Grading FAQ</b><small>Answers to common questions.</small><ArrowRight size={16} /></Link></aside>
        </div></section>
      </main>
      <SiteFooter />
    </>
  );
}
