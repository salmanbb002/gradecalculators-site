import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

const baseUrl = "https://gradecalculators.site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-07-16T00:00:00Z");
  const core: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: updated, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/grade-calculator/`, lastModified: updated, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/grade-chart/`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/how-to-calculate-grades/`, lastModified: updated, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/grading-scale/`, lastModified: updated, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/faq/`, lastModified: updated, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog/`, lastModified: updated, changeFrequency: "weekly", priority: 0.8 },
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
