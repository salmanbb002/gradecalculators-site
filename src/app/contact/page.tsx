import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bug, Lightbulb, Mail, ShieldQuestion } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contact | Grade Calculator",
  description: "Report an inaccurate calculation, suggest a grading scale or calculator, or ask a privacy question. Contact Grade Calculator directly by email.",
  alternates: { canonical: "/contact/" },
  openGraph: { title: "Contact Grade Calculator", url: "/contact/" },
};

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "ContactPage", name: "Contact Grade Calculator", url: "https://gradecalculators.site/contact/" },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://gradecalculators.site/" },
          { "@type": "ListItem", position: 2, name: "Contact", item: "https://gradecalculators.site/contact/" },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />
      <main className="inner-page">
        <section className="page-hero">
          <div className="shell">
            <Breadcrumbs current="Contact" />
            <span className="section-kicker">GET IN TOUCH</span>
            <h1>Contact</h1>
            <p>Grade Calculator is built and maintained directly by Muhammd Salman — messages go straight to a real inbox, not a support queue.</p>
            <div className="updated-note">No forms, no tickets · Just email</div>
          </div>
        </section>

        <section className="content-section">
          <div className="shell content-grid">
            <article className="article-content">
              <div className="direct-answer">
                <span>EMAIL DIRECTLY</span>
                <p>
                  <a className="body-link" href="mailto:salmanb0022@gmail.com">salmanb0022@gmail.com</a>
                </p>
              </div>

              <h2>What to include</h2>
              <p>A quick note on what you were calculating and what looked wrong (or what's missing) is enough to act on — screenshots help but aren't required.</p>

              <h2>Common reasons to reach out</h2>
              <div className="benefit-list">
                <div><Bug size={21} /><span><b>Report an inaccurate result</b><small>A calculation, formula, or grading scale that doesn't match what you expected.</small></span></div>
                <div><Lightbulb size={21} /><span><b>Suggest a calculator or feature</b><small>A grading scenario or scale this site doesn't cover yet.</small></span></div>
                <div><ShieldQuestion size={21} /><span><b>Ask a privacy question</b><small>Anything not covered clearly enough in the <Link href="/privacy-policy/">privacy policy</Link>.</small></span></div>
                <div><Mail size={21} /><span><b>General feedback</b><small>What's working, what isn't, or what would make this more useful.</small></span></div>
              </div>

              <a className="primary-button article-cta" href="mailto:salmanb0022@gmail.com"><Mail size={18} /> Send an email</a>
            </article>
            <aside className="related-panel">
              <span>RELATED</span>
              <Link href="/about/"><b>About</b><small>Who built this site.</small><ArrowRight size={16} /></Link>
              <Link href="/privacy-policy/"><b>Privacy policy</b><small>What is and isn't stored.</small><ArrowRight size={16} /></Link>
              <Link href="/faq/"><b>FAQ</b><small>Common questions answered.</small><ArrowRight size={16} /></Link>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
