import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  Clock3,
  GraduationCap,
  Printer,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const faqs = [
  {
    question: "How do I calculate a test grade?",
    answer:
      "Subtract the number of wrong answers from the total questions, divide the correct answers by the total, then multiply by 100. Grade Calculator does this instantly and builds the full grading chart for you.",
  },
  {
    question: "Can I grade assignments with half or quarter points?",
    answer:
      "Yes. Open Calculator options and choose whole, half, or quarter-point steps. The result and every row in the chart update automatically.",
  },
  {
    question: "What grading scale does this calculator use?",
    answer:
      "The default US scale uses A at 93%, A− at 90%, B+ at 87%, and so on. You can switch to strict or lenient presets, or change each threshold with a custom scale.",
  },
  {
    question: "Does Grade Calculator save or upload student data?",
    answer:
      "No student data is requested. Calculations happen in your browser. Your calculator preferences may be saved locally on your own device for convenience.",
  },
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Grade Calculator",
        url: "https://gradecalculators.site/",
        logo: "https://gradecalculators.site/grade-calculator-logo.svg",
      },
      {
        "@type": "WebSite",
        name: "Grade Calculator",
        url: "https://gradecalculators.site/",
        publisher: { "@type": "Organization", name: "Grade Calculator" },
      },
      {
        "@type": "WebApplication",
        name: "Grade Calculator",
        url: "https://gradecalculators.site/grade-calculator/",
        publisher: { "@type": "Organization", name: "Grade Calculator" },
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        description: "A free easy grader and printable grade chart for teachers and students.",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />

      <main id="top">
        <section className="hero">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="shell hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={15} /> Free · instant · teacher-friendly</div>
              <h1>Grade faster.<br /><span>Teach happier.</span></h1>
              <p className="hero-lede">
                Turn wrong answers into accurate grades in seconds. Get the score, letter grade, and a complete printable chart—without spreadsheets or guesswork.
              </p>
              <div className="hero-actions">
                <Link className="primary-button" href="/grade-calculator/">Calculate a grade <ArrowRight size={18} /></Link>
                <Link className="text-button" href="/how-to-calculate-grades/">See how it works</Link>
              </div>
              <div className="trust-row">
                <span><BadgeCheck size={18} /> No sign-up</span>
                <span><Clock3 size={18} /> Instant results</span>
                <span><ShieldCheck size={18} /> Private by design</span>
              </div>
            </div>

            <div className="hero-preview" aria-hidden="true">
              <div className="preview-float preview-float-top"><Sparkles size={16} /> Ready in seconds</div>
              <div className="preview-card">
                <div className="preview-head">
                  <div><span>TEST RESULT</span><strong>Excellent work!</strong></div>
                  <span className="preview-badge">A</span>
                </div>
                <div className="preview-score">
                  <div className="score-ring"><strong>92</strong><span>%</span></div>
                  <div className="preview-metrics">
                    <div><span>Questions</span><strong>25</strong></div>
                    <div><span>Correct</span><strong>23</strong></div>
                    <div><span>Wrong</span><strong>2</strong></div>
                  </div>
                </div>
                <div className="preview-bars">
                  {[100, 96, 92, 88].map((score, index) => (
                    <div className={index === 2 ? "active" : ""} key={score}>
                      <span>{index} wrong</span><i><b style={{ width: `${score}%` }} /></i><strong>{score}%</strong>
                    </div>
                  ))}
                </div>
              </div>
              <div className="preview-float preview-float-bottom"><Printer size={16} /> Print-ready chart</div>
            </div>
          </div>
        </section>

        <section className="route-directory-section">
          <div className="shell">
            <div className="section-heading centered-heading route-heading">
              <span className="section-kicker">GRADING RESOURCES</span>
              <h2>Start with what you need.</h2>
              <p>Each tool and guide now has its own clear, bookmarkable URL.</p>
            </div>
            <div className="route-card-grid">
              <Link className="route-card route-card-primary" href="/grade-calculator/">
                <span><GraduationCap size={23} /></span><div><small>INTERACTIVE TOOL</small><h3>Grade calculator</h3><p>Calculate percentages, letter grades, bonus points, and fractional scores.</p></div><ArrowRight size={19} />
              </Link>
              <Link className="route-card" href="/grade-chart/">
                <span><BarChart3 size={23} /></span><div><small>PRINTABLE RESOURCE</small><h3>Grade chart</h3><p>Understand and create a complete score chart for any test.</p></div><ArrowRight size={19} />
              </Link>
              <Link className="route-card" href="/grading-scale/">
                <span><Sparkles size={23} /></span><div><small>REFERENCE GUIDE</small><h3>Grading scale</h3><p>Review standard US percentage and letter-grade thresholds.</p></div><ArrowRight size={19} />
              </Link>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Product benefits">
          <div className="shell proof-grid">
            <div><strong>100%</strong><span>free to use</span></div>
            <div><strong>0</strong><span>student data collected</span></div>
            <div><strong>500</strong><span>questions supported</span></div>
            <div><strong>3</strong><span>point precision modes</span></div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="shell">
            <div className="section-heading centered-heading">
              <span className="section-kicker">LESS ADMIN, MORE TEACHING</span>
              <h2>Small details that save real time.</h2>
              <p>Designed for the way teachers actually grade—not just for a perfect demo.</p>
            </div>
            <div className="feature-grid">
              <article className="feature-card feature-purple">
                <div className="feature-icon"><BarChart3 size={23} /></div>
                <h3>Instant grade chart</h3>
                <p>See every possible score at once, with your current result highlighted and easy to scan.</p>
                <div className="mini-chart" aria-hidden="true">
                  <span style={{ height: "42%" }} /><span style={{ height: "58%" }} /><span style={{ height: "72%" }} /><span style={{ height: "88%" }} /><span style={{ height: "100%" }} />
                </div>
              </article>
              <article className="feature-card feature-green">
                <div className="feature-icon"><Sparkles size={23} /></div>
                <h3>Your scale, your rules</h3>
                <p>Choose standard, strict, or lenient grading—and fine-tune every letter threshold.</p>
                <div className="grade-pills" aria-hidden="true"><span>A</span><span>A−</span><span>B+</span><span>B</span></div>
              </article>
              <article className="feature-card feature-amber">
                <div className="feature-icon"><Printer size={23} /></div>
                <h3>Made to share</h3>
                <p>Copy a result in one click or print a clean chart for your desk, binder, or substitute folder.</p>
                <div className="paper-stack" aria-hidden="true"><i /><i /><b><Check size={23} /></b></div>
              </article>
            </div>
          </div>
        </section>

        <section className="how-section" id="how-it-works">
          <div className="shell how-grid">
            <div className="how-copy">
              <span className="section-kicker">HOW IT WORKS</span>
              <h2>From answer sheet to final score in three steps.</h2>
              <p>No account, setup wizard, or complicated formula. Just the numbers you already have.</p>
              <Link className="primary-button" href="/grade-calculator/">Try the calculator <ArrowRight size={18} /></Link>
            </div>
            <ol className="steps-list">
              <li><span>01</span><div><h3>Enter the total</h3><p>Add the number of questions or total possible points.</p></div></li>
              <li><span>02</span><div><h3>Add points missed</h3><p>Use whole, half, or quarter points for precise grading.</p></div></li>
              <li><span>03</span><div><h3>Use your result</h3><p>Read the score, copy it, or print the complete grading chart.</p></div></li>
            </ol>
          </div>
        </section>

        <section className="formula-section" id="formula">
          <div className="shell formula-card">
            <div>
              <span className="section-kicker">THE GRADE FORMULA</span>
              <h2>Simple math, checked instantly.</h2>
              <p>Subtract missed points from total points, divide by the total, and multiply by 100.</p>
            </div>
            <div className="formula-box" aria-label="Grade percentage formula">
              <span>Grade %</span><strong>=</strong><div><b>Total − Wrong + Bonus</b><i /><b>Total</b></div><strong>× 100</strong>
            </div>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="shell faq-grid">
            <div className="faq-intro">
              <span className="section-kicker">FREQUENTLY ASKED</span>
              <h2>Questions, answered.</h2>
              <p>Everything you need to grade with confidence.</p>
            </div>
            <div className="faq-list">
              {faqs.map((item, index) => (
                <details key={item.question} open={index === 0}>
                  <summary>{item.question}<span>+</span></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="shell final-card">
            <div>
              <span className="eyebrow light-eyebrow"><Sparkles size={15} /> Faster grading starts here</span>
              <h2>One less thing to calculate.</h2>
              <p>Free, private, and ready whenever the answer sheets pile up.</p>
            </div>
            <Link className="light-button" href="/grade-calculator/">Open the calculator <ArrowRight size={18} /></Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
