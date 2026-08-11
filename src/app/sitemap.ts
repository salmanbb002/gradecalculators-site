import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

const baseUrl = "https://gradecalculators.site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-07-16T00:00:00Z");
  const gpaUpdated = new Date("2026-07-26T00:00:00Z");
  const eeatUpdated = new Date("2026-08-11T00:00:00Z");
  const core: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: updated, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/grade-calculator/`, lastModified: eeatUpdated, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/easy-grader/`, lastModified: eeatUpdated, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/gradebook-calculator/`, lastModified: new Date("2026-08-01T00:00:00Z"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/gpa-calculator/`, lastModified: gpaUpdated, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/final-grade-calculator/`, lastModified: gpaUpdated, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/high-school-gpa-calculator/`, lastModified: gpaUpdated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/college-gpa-calculator/`, lastModified: gpaUpdated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/cumulative-gpa-calculator/`, lastModified: gpaUpdated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/grade-chart/`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/how-to-calculate-grades/`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/grading-scale/`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/faq/`, lastModified: gpaUpdated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/`, lastModified: gpaUpdated, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about/`, lastModified: eeatUpdated, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/privacy-policy/`, lastModified: eeatUpdated, changeFrequency: "yearly", priority: 0.4 },
    { url: `${baseUrl}/contact/`, lastModified: eeatUpdated, changeFrequency: "yearly", priority: 0.4 },
  ];

  return [
    ...core,
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}/`,
      lastModified: new Date(`${post.updated}T00:00:00Z`),
      changeFrequency: "monthly" as const,
      priority: 0.72,
    })),
  ];
}
