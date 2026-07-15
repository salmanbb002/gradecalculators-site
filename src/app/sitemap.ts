import type { MetadataRoute } from "next";

const baseUrl = "https://gradecalculators.site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/grade-calculator/`, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/grade-chart/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/how-to-calculate-grades/`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/grading-scale/`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/faq/`, changeFrequency: "monthly", priority: 0.7 },
  ];
}
