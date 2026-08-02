// One-off generator for on-brand SVG cover images used on the blog grid and blog article pages.
// Run with: node scripts/generate-blog-covers.mjs
import { writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, "..", "public", "images", "blog");
mkdirSync(OUT_DIR, { recursive: true });

// Icon element data lifted directly from the lucide-react icons already used across the site
// (Percent, Sigma, Star, ScrollText, ChartColumn, Clock3, Presentation, TrendingUp), so the
// glyphs match the icon language used everywhere else instead of introducing a new style.
const ICONS = {
  Percent: [
    ["line", { x1: "19", x2: "5", y1: "5", y2: "19" }],
    ["circle", { cx: "6.5", cy: "6.5", r: "2.5" }],
    ["circle", { cx: "17.5", cy: "17.5", r: "2.5" }],
  ],
  Sigma: [
    ["path", { d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2" }],
  ],
  Star: [
    ["path", { d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" }],
  ],
  ScrollText: [
    ["path", { d: "M15 12h-5" }],
    ["path", { d: "M15 8h-5" }],
    ["path", { d: "M19 17V5a2 2 0 0 0-2-2H4" }],
    ["path", { d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3" }],
  ],
  ChartColumn: [
    ["path", { d: "M3 3v16a2 2 0 0 0 2 2h16" }],
    ["path", { d: "M18 17V9" }],
    ["path", { d: "M13 17V5" }],
    ["path", { d: "M8 17v-3" }],
  ],
  Clock3: [
    ["circle", { cx: "12", cy: "12", r: "10" }],
    ["polyline", { points: "12 6 12 12 16.5 12" }],
  ],
  Presentation: [
    ["path", { d: "M2 3h20" }],
    ["path", { d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" }],
    ["path", { d: "m7 21 5-5 5 5" }],
  ],
  TrendingUp: [
    ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17" }],
    ["polyline", { points: "16 7 22 7 22 13" }],
  ],
};

const PALETTE = {
  purple: { soft: "#efedff", mid: "#a89bff", accent: "#6558f5", dark: "#5143df" },
  green: { soft: "#e8fbf3", mid: "#7fd9b8", accent: "#0c9f72", dark: "#0a8760" },
  amber: { soft: "#fff6dc", mid: "#f3c765", accent: "#d98b10", dark: "#b6740c" },
  red: { soft: "#fff0ef", mid: "#f0a8a3", accent: "#e55b55", dark: "#c94944" },
};

const CATEGORY_STYLE = {
  "Test grades": { palette: "purple", icon: "Percent" },
  "Grade formulas": { palette: "green", icon: "Sigma" },
  "Extra credit": { palette: "amber", icon: "Star" },
  "Grade policies": { palette: "red", icon: "ScrollText" },
  "GPA basics": { palette: "purple", icon: "ChartColumn" },
  "Final exams": { palette: "amber", icon: "Clock3" },
  "For teachers": { palette: "green", icon: "Presentation" },
  "Grade recovery": { palette: "red", icon: "TrendingUp" },
};

const POSTS = [
  { slug: "how-many-questions-can-you-miss", category: "Test grades" },
  { slug: "weighted-vs-unweighted-grades", category: "Grade formulas" },
  { slug: "how-extra-credit-affects-your-grade", category: "Extra credit" },
  { slug: "grade-rounding-rules", category: "Grade policies" },
  { slug: "how-to-calculate-gpa-weighted-and-unweighted", category: "GPA basics" },
  { slug: "high-school-gpa-scale-4-vs-5", category: "GPA basics" },
  { slug: "what-grade-do-i-need-on-my-final-exam", category: "Final exams" },
  { slug: "how-to-calculate-cumulative-gpa", category: "GPA basics" },
  { slug: "letter-grade-to-gpa-conversion-chart", category: "GPA basics" },
  { slug: "what-is-a-passing-grade", category: "Grade policies" },
  { slug: "how-do-grade-curves-work", category: "Grade policies" },
  { slug: "grade-calculators-for-teachers", category: "For teachers" },
  { slug: "what-to-do-if-your-grade-is-slipping", category: "Grade recovery" },
  { slug: "ap-honors-ib-weighted-gpa-points-explained", category: "GPA basics" },
  { slug: "how-to-calculate-grade-percentage", category: "Grade formulas" },
];

// Deterministic hash so each slug always renders the same cover (stable across re-runs / diffs).
function hash(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rand(seed, index) {
  const x = Math.sin(seed + index * 999.17) * 43758.5453;
  return x - Math.floor(x);
}

function renderIcon(name, { x, y, size, stroke }) {
  const scale = size / 24;
  const elements = ICONS[name]
    .map(([tag, attrs]) => {
      const attrString = Object.entries(attrs)
        .map(([key, value]) => `${key}="${value}"`)
        .join(" ");
      return `<${tag} ${attrString} />`;
    })
    .join("");
  return `<g transform="translate(${x}, ${y}) scale(${scale})" fill="none" stroke="${stroke}" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${elements}</g>`;
}

function renderCover({ slug, category }) {
  const style = CATEGORY_STYLE[category];
  const colors = PALETTE[style.palette];
  const seed = hash(slug);
  const W = 800;
  const H = 450;

  const circle1 = { r: 140 + rand(seed, 1) * 60, cx: W * (0.08 + rand(seed, 2) * 0.18), cy: H * (0.15 + rand(seed, 3) * 0.25) };
  const circle2 = { r: 90 + rand(seed, 4) * 50, cx: W * (0.78 + rand(seed, 5) * 0.16), cy: H * (0.72 + rand(seed, 6) * 0.22) };
  const badgeSize = 128;
  const badgeX = W * 0.635 + rand(seed, 7) * 30 - 15;
  const badgeY = H * 0.5 - badgeSize / 2 + (rand(seed, 8) * 40 - 20);
  const iconSize = 64;

  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${category} illustration">
  <defs>
    <linearGradient id="bg-${slug}" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${colors.soft}" />
      <stop offset="100%" stop-color="#ffffff" />
    </linearGradient>
    <pattern id="dots-${slug}" width="26" height="26" patternUnits="userSpaceOnUse">
      <circle cx="1.4" cy="1.4" r="1.4" fill="${colors.accent}" opacity="0.16" />
    </pattern>
    <clipPath id="clip-${slug}"><rect width="${W}" height="${H}" /></clipPath>
  </defs>
  <g clip-path="url(#clip-${slug})">
    <rect width="${W}" height="${H}" fill="url(#bg-${slug})" />
    <rect width="${W}" height="${H}" fill="url(#dots-${slug})" />
    <circle cx="${circle1.cx.toFixed(1)}" cy="${circle1.cy.toFixed(1)}" r="${circle1.r.toFixed(1)}" fill="${colors.mid}" opacity="0.22" />
    <circle cx="${circle2.cx.toFixed(1)}" cy="${circle2.cy.toFixed(1)}" r="${circle2.r.toFixed(1)}" fill="${colors.accent}" opacity="0.16" />
    <rect x="${(badgeX - 6).toFixed(1)}" y="${(badgeY - 6).toFixed(1)}" width="${badgeSize + 12}" height="${badgeSize + 12}" rx="30" fill="#ffffff" opacity="0.6" />
    <rect x="${badgeX.toFixed(1)}" y="${badgeY.toFixed(1)}" width="${badgeSize}" height="${badgeSize}" rx="26" fill="#ffffff" stroke="${colors.mid}" stroke-width="1.5" />
    ${renderIcon(style.icon, { x: badgeX + (badgeSize - iconSize) / 2, y: badgeY + (badgeSize - iconSize) / 2, size: iconSize, stroke: colors.dark })}
  </g>
</svg>`;
}

for (const post of POSTS) {
  const svg = renderCover(post);
  writeFileSync(join(OUT_DIR, `${post.slug}.svg`), svg, "utf8");
}

console.log(`Generated ${POSTS.length} blog cover images in ${OUT_DIR}`);
