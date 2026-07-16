import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { BlogCard } from "@/components/blog-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Grade Calculator Blog: Grading Guides & Formulas",
  description: "Practical guides about test scores, weighted grades, extra credit, grade rounding, grading scales, and classroom assessment calculations.",
  alternates: { canonical: "/blog/" },
  openGraph: { title: "Grade Calculator Blog: Grading Guides and Formulas", url: "/blog/" },
};

export default function BlogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Grade Calculator Blog",
    url: "https://gradecalculators.site/blog/",
    description: "Educational guides about calculating and understanding grades.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogPosts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.title,
        url: `https://gradecalculators.site/blog/${post.slug}/`,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />
      <main className="inner-page">
        <section className="page-hero blog-index-hero">
          <div className="shell">
            <Breadcrumbs current="Blog" />
            <span className="section-kicker">GRADING KNOWLEDGE BASE</span>
            <h1>Grade Calculator Blog</h1>
            <p>Clear, practical guides for understanding test grades, raw scores, weighted categories, extra credit, rounding rules, and percentage-to-letter-grade conversions.</p>
            <div className="updated-note">4 in-depth guides · Teacher and student friendly · Updated July 16, 2026</div>
          </div>
        </section>

        <section className="blog-index-section">
          <div className="shell">
            <div className="blog-index-intro">
              <div><span className="section-kicker">LATEST GUIDES</span><h2>Understand the math behind every grade.</h2></div>
              <p>Each guide answers one grading question directly, shows the formula or policy behind it, and links to the right calculator for the next step.</p>
            </div>
            <div className="blog-grid blog-index-grid">{blogPosts.map((post) => <BlogCard post={post} key={post.slug} />)}</div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
