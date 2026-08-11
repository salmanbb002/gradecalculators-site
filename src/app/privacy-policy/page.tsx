import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Ban, Database, FileClock, Server, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Privacy Policy | Grade Calculator",
  description: "Grade Calculator collects no student names, grades, or personal data. Read exactly what is stored in your browser, what isn't collected, and why.",
  alternates: { canonical: "/privacy-policy/" },
  openGraph: { title: "Privacy Policy", url: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", name: "Privacy Policy", url: "https://gradecalculators.site/privacy-policy/" },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://gradecalculators.site/" },
          { "@type": "ListItem", position: 2, name: "Privacy Policy", item: "https://gradecalculators.site/privacy-policy/" },
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
            <Breadcrumbs current="Privacy policy" />
            <span className="section-kicker">0 STUDENT DATA COLLECTED</span>
            <h1>Privacy Policy</h1>
            <p>This page explains exactly what Grade Calculator stores, what it doesn't, and where — in plain language, not boilerplate.</p>
            <div className="updated-note">Applies to all calculators on this site · Updated August 11, 2026</div>
          </div>
        </section>

        <section className="content-section">
          <div className="shell content-grid">
            <article className="article-content">
              <div className="direct-answer">
                <span>QUICK SUMMARY</span>
                <p>Grade Calculator does not collect, store, or transmit student names, grades, or any personal information to a server. Every calculation runs in your browser. The only data saved is your own last-used numbers and settings, kept locally on your device.</p>
              </div>

              <h2>What this site does not collect</h2>
              <div className="benefit-list">
                <div><Ban size={21} /><span><b>No accounts or sign-up</b><small>There is no login system, so there's no account database to store anything in.</small></span></div>
                <div><Ban size={21} /><span><b>No student names, grades, or answers submitted</b><small>Nothing you type into a calculator is ever sent to a server — there isn't one to send it to.</small></span></div>
                <div><Ban size={21} /><span><b>No analytics or ad-tracking scripts</b><small>No Google Analytics, no ad pixels, no third-party trackers of any kind are loaded on this site.</small></span></div>
                <div><Ban size={21} /><span><b>No cookies set by this site</b><small>Grade Calculator itself does not set or read cookies.</small></span></div>
              </div>

              <h2>What's saved on your device, and why</h2>
              <p>Each calculator remembers your last-used inputs so the numbers are still there if you come back or refresh the page. This is stored using your browser's local storage — a small amount of data kept on your own device, never uploaded anywhere:</p>
              <div className="reference-table-wrap">
                <table className="reference-table">
                  <thead><tr><th>Calculator</th><th>What's saved locally</th></tr></thead>
                  <tbody>
                    <tr><td>Grade calculator</td><td>Total questions, wrong answers, point precision, and grading-scale preference</td></tr>
                    <tr><td>Gradebook calculator</td><td>Category weights, scores, and preset selection</td></tr>
                    <tr><td>GPA calculator</td><td>Course letter grades, credit hours, and course type (regular/honors/AP)</td></tr>
                    <tr><td>Cumulative GPA calculator</td><td>Term GPA and credit-hour entries</td></tr>
                  </tbody>
                </table>
              </div>
              <p>None of these fields ask for or store a student's name or any other identifying information — only the numbers needed to reproduce a calculation. This data lives entirely in your browser: we cannot see it, access it, or export it, and it is never transmitted to us or anyone else. You can clear it at any time through your browser's site-data settings.</p>

              <h2>Standard hosting logs</h2>
              <p>Like any website, requests to gradecalculators.site pass through our hosting provider, Vercel, which may automatically log basic technical request data (such as IP address, browser type, and requested page) for security and performance monitoring. This is standard infrastructure-level logging that exists independently of anything this site adds — it is not linked to an account, not used for advertising, and not something we query to track individual visitors.</p>

              <h2>Children's privacy</h2>
              <p>Because Grade Calculator never asks for or collects personal information from any visitor — including students — there is no separate student data-handling disclosure required beyond what's described above. The site is safe to use in a classroom without creating any student data trail.</p>

              <h2>Changes to this policy</h2>
              <p>If what this site stores or how it's hosted ever changes, this page will be updated to reflect it, with the "updated" date at the top revised accordingly.</p>

              <h2>Questions about this policy</h2>
              <p>Reach out through the <Link href="/contact/">contact page</Link> with any privacy question — including "what exactly happens to X" for anything not covered clearly enough above.</p>
            </article>
            <aside className="related-panel">
              <span>RELATED</span>
              <Link href="/about/"><b>About</b><small>Who built this site.</small><ArrowRight size={16} /></Link>
              <Link href="/contact/"><b>Contact</b><small>Ask a privacy question.</small><ArrowRight size={16} /></Link>
              <Link href="/grade-calculator/"><b>Grade calculator</b><small>Try the main tool.</small><ArrowRight size={16} /></Link>
            </aside>
          </div>
        </section>

        <section className="page-faq-section">
          <div className="shell narrow-content">
            <span className="section-kicker">AT A GLANCE</span><h2>Privacy summary</h2>
            <div className="benefit-list">
              <div><ShieldCheck size={21} /><span><b>Private by design</b><small>No accounts, no student data, no way to identify a visitor.</small></span></div>
              <div><Database size={21} /><span><b>Local storage only</b><small>Your preferences stay in your browser, not on our servers.</small></span></div>
              <div><Server size={21} /><span><b>Standard hosting logs only</b><small>Basic technical logs from Vercel, not custom tracking.</small></span></div>
              <div><FileClock size={21} /><span><b>Updated August 11, 2026</b><small>This page is revised whenever practices change.</small></span></div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
