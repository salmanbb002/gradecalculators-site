import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CalendarDays, Check, Clock3 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { blogPosts, getBlogPost } from "@/lib/blog";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.seoTitle,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}/`,
      publishedTime: post.published,
      modifiedTime: post.updated,
    },
  };
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T12:00:00Z`));
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const url = `https://gradecalculators.site/blog/${post.slug}/`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.published,
        dateModified: post.updated,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        author: { "@type": "Organization", name: "Grade Calculator Editorial Team", url: "https://gradecalculators.site/" },
        publisher: {
          "@type": "Organization",
          name: "Grade Calculator",
          logo: { "@type": "ImageObject", url: "https://gradecalculators.site/grade-calculator-logo.svg" },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://gradecalculators.site/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://gradecalculators.site/blog/" },
          { "@type": "ListItem", position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />
      <main className="inner-page">
        <section className="page-hero article-hero">
          <div className="shell">
            <Breadcrumbs current={post.title} parent={{ label: "Blog", href: "/blog/" }} />
            <span className="section-kicker">{post.category}</span>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <div className="article-meta"><span><CalendarDays size={14} /> Updated {formatDate(post.updated)}</span><span><Clock3 size={14} /> {post.readingTime}</span></div>
          </div>
        </section>

        <section className="content-section blog-article-section">
          <div className="shell content-grid">
            <article className="article-content blog-article">
              <div className="direct-answer"><span>QUICK ANSWER</span><p>{post.directAnswer}</p></div>
              {post.sections.map((section) => (
                <section className="blog-content-section" key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.list && <ul className="article-check-list">{section.list.map((item) => <li key={item}><Check size={17} /><span>{item}</span></li>)}</ul>}
                  {section.table && <div className="reference-table-wrap"><table className="reference-table"><thead><tr>{section.table.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead><tbody>{section.table.rows.map((row) => <tr key={row.join("-")}>{row.map((cell, index) => <td key={`${cell}-${index}`}>{index === row.length - 1 ? <strong>{cell}</strong> : cell}</td>)}</tr>)}</tbody></table></div>}
                </section>
              ))}

              <div className="editorial-note">
                <span>ABOUT THIS GUIDE</span>
                <h2>Grade Calculator Editorial Team</h2>
                <p>We create plain-language grading tools and educational guides, check every worked example against the underlying formula, and note where school or instructor policies can change the result.</p>
              </div>
            </article>

            <aside className="related-panel">
              <span>USE THE RIGHT TOOL</span>
              {post.relatedTools.map((tool) => <Link href={tool.href} key={tool.href}><b>{tool.label}</b><small>{tool.description}</small><ArrowRight size={16} /></Link>)}
              <Link href="/blog/"><b>All grading guides</b><small>Explore the knowledge base.</small><ArrowRight size={16} /></Link>
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
