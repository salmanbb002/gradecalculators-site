import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  Clock3,
  Printer,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { GradeCalculator } from "@/components/grade-calculator";

const faqs = [
  {
    question: "How do I calculate a test grade?",
    answer:
      "Subtract the number of wrong answers from the total questions, divide the correct answers by the total, then multiply by 100. GradeKit does this instantly and builds the full grading chart for you.",
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
    question: "Does GradeKit save or upload student data?",
    answer:
      "No student data is requested. Calculations happen in your browser. Your calculator preferences may be saved locally on your own device for convenience.",
  },
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        name: "GradeKit Grade Calculator",
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
      <header className="site-header">
        <div className="shell nav-wrap">
          <a className="brand" href="#top" aria-label="GradeKit home">
            <span className="brand-mark" aria-hidden="true"><Check size={19} strokeWidth={3} /></span>
            <span>Grade<span>Kit</span></span>
          </a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#calculator">Calculator</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How it works</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a className="nav-cta" href="#calculator">Start grading <ArrowRight size={16} /></a>
        </div>
      </header>

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
                <a className="primary-button" href="#calculator">Calculate a grade <ArrowRight size={18} /></a>
                <a className="text-button" href="#how-it-works">See how it works</a>
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

        <section className="calculator-section" id="calculator">
          <div className="shell">
            <div className="section-heading calculator-heading">
              <div>
                <span className="section-kicker">EASY GRADER</span>
                <h2>Your complete grading desk.</h2>
              </div>
              <p>Enter the total and wrong answers. Everything else updates instantly.</p>
            </div>
            <GradeCalculator />
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
              <a className="primary-button" href="#calculator">Try the calculator <ArrowRight size={18} /></a>
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
            <a className="light-button" href="#calculator">Open the calculator <ArrowRight size={18} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell footer-grid">
          <div>
            <a className="brand footer-brand" href="#top"><span className="brand-mark"><Check size={19} strokeWidth={3} /></span><span>Grade<span>Kit</span></span></a>
            <p>A calmer, quicker grading companion for teachers, tutors, and students.</p>
          </div>
          <div className="footer-links"><strong>Product</strong><a href="#calculator">Calculator</a><a href="#features">Features</a><a href="#how-it-works">How it works</a></div>
          <div className="footer-links"><strong>Resources</strong><a href="#faq">FAQ</a><a href="#formula">Grade formula</a><a href="#calculator">Grading chart</a></div>
        </div>
        <div className="shell footer-bottom"><span>© {new Date().getFullYear()} GradeKit</span><span>Made for better teaching days.</span></div>
      </footer>
    </>
  );
}
