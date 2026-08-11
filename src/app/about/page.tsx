import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About Grade Calculator | Who Built This Site",
  description: "Grade Calculator is built and maintained by Muhammd Salman, an independent developer. Learn why it's free, private, and built without sign-ups or student data.",
  alternates: { canonical: "/about/" },
  openGraph: { title: "About Grade Calculator", url: "/about/" },
};

export default function AboutPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        name: "About Grade Calculator",
        url: "https://gradecalculators.site/about/",
      },
      {
        "@type": "Person",
        name: "Muhammd Salman",
        url: "https://gradecalculators.site/about/",
        jobTitle: "Independent developer",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://gradecalculators.site/" },
          { "@type": "ListItem", position: 2, name: "About", item: "https://gradecalculators.site/about/" },
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
            <Breadcrumbs current="About" />
            <span className="section-kicker">WHO BUILT THIS</span>
            <h1>About Grade Calculator</h1>
            <p>Grade Calculator is built and maintained by Muhammd Salman, an independent developer — not a large company, and not an anonymous "editorial team."</p>
            <div className="updated-note">Independently built · No sign-up · Updated August 11, 2026</div>
          </div>
        </section>

        <section className="content-section">
          <div className="shell content-grid">
            <article className="article-content">
              <div className="direct-answer">
                <span>QUICK SUMMARY</span>
                <p>I'm Muhammd Salman, an independent developer who builds small, focused web tools. Grade Calculator is one of several — each built the same way: solve one problem well, load fast, and never ask for an account to use it.</p>
              </div>

              <h2>Why I built another grade calculator</h2>
              <p>Most grade and GPA calculators online are wrapped in ad clutter, multi-step forms, or a forced sign-up before you can see a result. For something as simple as "what's my score," that's a lot of friction for a calculation that should take five seconds. Grade Calculator exists because that gap was worth closing: enter two numbers, get an accurate percentage, letter grade, and full grading chart — nothing else required.</p>

              <h2>One of several independent tool sites</h2>
              <p>I build and maintain a small portfolio of focused, single-purpose web tools rather than one large product. Grade Calculator follows the same approach as the others: a fast static site, no bloated framework overhead, and a narrow scope done properly instead of a broad feature set done halfway. That's also why the calculators here are opinionated about grading conventions (standard, strict, and lenient scales; the common AP/Honors GPA weighting) rather than trying to model every possible school policy.</p>

              <h2>What "privacy-first" actually means here</h2>
              <p>It isn't just a tagline. There's no account system, no login, and no database of user records — this site can't collect student data because it was never built with anywhere to put it. Every calculation runs directly in your browser. The only thing ever saved is your last-used numbers and settings, stored locally on your own device so they're there next time you open the page. Full details, including exactly what's stored and where, are in the <Link href="/privacy-policy/">privacy policy</Link>.</p>

              <h2>How accuracy is maintained</h2>
              <p>Every formula on this site — grade percentage, weighted categories, GPA quality points, cumulative averages — is checked against the standard convention used in US schools and colleges, with clear notes where policies commonly vary (rounding, passing thresholds, AP/Honors weighting bonuses). None of these tools replace an official gradebook or transcript; they're built to match your school's published policy once you enter it, not to invent a policy of their own.</p>

              <h2>Get in touch</h2>
              <p>Found something that looks wrong, or have a suggestion for a calculator this site is missing? I read everything that comes in through the <Link href="/contact/">contact page</Link>.</p>
            </article>
            <aside className="related-panel">
              <span>MORE ABOUT THIS SITE</span>
              <Link href="/privacy-policy/"><b>Privacy policy</b><small>Exactly what is and isn't stored.</small><ArrowRight size={16} /></Link>
              <Link href="/contact/"><b>Contact</b><small>Report an issue or send feedback.</small><ArrowRight size={16} /></Link>
              <Link href="/grade-calculator/"><b>Grade calculator</b><small>Try the main tool.</small><ArrowRight size={16} /></Link>
              <Link href="/faq/"><b>FAQ</b><small>Common questions answered.</small><ArrowRight size={16} /></Link>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
