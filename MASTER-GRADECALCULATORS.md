# MASTER — gradecalculators.site SEO

Source of truth for this project. Update this file as work progresses; treat it as the first thing to read at the start of any future session on this site.

- **Live site:** https://gradecalculators.site
- **Repo:** `~/July Projects/grade-calculator` (git remote: `github.com/salmanbb002/gradecalculators-site`)
- **Stack:** Next.js 16 (App Router), React 19, static export (`output: "export"`), deployed to Vercel
- **Keyword sheet on file:** `~/July Projects/gradecalculator-keyword-clusters.xlsx` (raw cluster list, not yet volume/difficulty scored)
- **Audit date:** 2026-08-11

---

## 1. Critical findings, ranked

**1. The site is not indexed by Google.** `site:gradecalculators.site` returns zero results — Google surfaces competitor domains instead. robots.txt allows all crawling, sitemap.xml is valid with 27 URLs, and GSC verification is already wired into `layout.tsx` (`verification.google`). This means either the property was never fully set up in Search Console, indexing was never requested, or the site is too new to have been crawled. **This blocks everything else** — no amount of content work matters until pages are actually in the index. First action in any future session: open GSC, check Coverage/Indexing report, and manually request indexing via URL Inspection for the homepage + top 3 tool pages.

**2. Zero backlinks in one of the most saturated micro-niches on the web.** Competitors identified during this audit: `calculator.net` and `thecalculatorsite.com` (both huge, high-authority generalist calculator sites), plus a wall of near-exact-match domains — `gradecalculators.net`, `gradecalculators.com`, `gradcalculator.com`, `grade-calculator.io`, `gradecalculate.com`, `webgradecalculator.com`, `ezgrader.us`, `quickgra.de`, `onlinegradecalculator.io`, `easygraderhub.com`, `calculategrader.com`, `heycalc.org`, `gradecalculatortools.com`. Several of these (`.net`, `.com` variants especially) are near-identical brand names to this site and are already established. Content quality alone will not overcome this — the site needs a minimum viable backlink base (teacher-resource roundups, edtech directories, Product Hunt-style tool directories) or it will stay buried behind entrenched competitors regardless of on-page work.

**3. No EEAT trust layer exists.** There is no `/about/`, `/privacy-policy/`, or `/contact/` page anywhere in the app router or footer. This is a real liability, not just a nice-to-have: the site's core value proposition is "0 student data collected / private by design," but there is no actual Privacy Policy documenting that claim — which undermines the exact trust signal the site is trying to sell. Blog posts are attributed to a generic "Grade Calculator Editorial Team" with no named person, no credentials, no photo, no bio beyond one boilerplate sentence.

**4. Topical gap: "Easy Grader" / "EZ Grader."** The existing keyword sheet's own second and third clusters (`easy grader`, `ez grader`, plus 13 variants and misspellings like "essy grader") are not covered by a dedicated page — only a single H2 subsection on `/grade-calculator/` and one FAQ entry. This is very likely the single biggest missed opportunity: `ezgrader.us` exists as a standalone competitor purely because "EZ Grader" is a high-volume branded-generic term in this niche (it originated as a well-known physical/paper grading chart product before going digital). A dedicated `/easy-grader/` pillar page is the highest-leverage content gap on the sheet.

**5. Keyword cannibalization risk across the GPA cluster.** Four separate pages target overlapping GPA intent: `/gpa-calculator/`, `/high-school-gpa-calculator/`, `/college-gpa-calculator/`, `/cumulative-gpa-calculator/`. Without clear differentiation and a defined pillar/spoke hierarchy, these will compete against each other in the index instead of each owning a distinct query.

**6. Image pipeline is unoptimized under static export.** `next.config.ts` sets `images: { unoptimized: true }`, which is required for `output: "export"` but means no automatic WebP/AVIF conversion or responsive sizing. Blog cover images were added recently (per git log) — worth checking actual LCP/CWV on the live blog pages before scaling content further, since unoptimized images compound quickly.

**7. `.site` TLD.** Minor but real — `.site` carries a weaker trust prior in search systems than `.com`/`.net`/`.org`, in a niche already flooded with those exact TLDs on near-identical names. Not worth changing domains over, but it raises the bar on everything else (backlinks, EEAT, content depth) to compensate.

## 2. What's already solid — don't rebuild this

- **Schema is genuinely ahead of most competitors in this niche.** Verified in source (not just rendered HTML): `WebApplication`, `FAQPage`, `BreadcrumbList`, `Organization`, `WebSite`, and `BlogPosting` JSON-LD are correctly implemented across 14 pages. (A generic web-fetch/render check would have missed this and wrongly reported "no FAQ schema" — confirmed by reading the actual `.tsx` source.)
- **Site architecture is coherent**: 12 tool/pillar pages + 15 blog posts + FAQ, with real internal linking between calculators, related guides, and the FAQ page (not a thin content farm).
- **robots.txt and sitemap.xml are both correctly configured** and reference each other properly.
- **GSC verification meta tag is already in place** — the property just needs to actually be checked/used.
- **The privacy-first, no-signup positioning is a legitimate differentiator** if it gets backed up with an actual Privacy Policy page and surfaced as a trust signal rather than just a tagline.
- On-page depth on the money page (`/grade-calculator/`) is reasonable at ~1,200 words with a proper H1/H2 hierarchy, live tool + explanation + FAQ in one page — good pattern to replicate for new pillar pages.

## 3. Current site map (as of this audit)

**Tools/pillars:** `/`, `/grade-calculator/`, `/gradebook-calculator/`, `/gpa-calculator/`, `/final-grade-calculator/`, `/high-school-gpa-calculator/`, `/college-gpa-calculator/`, `/cumulative-gpa-calculator/`, `/grade-chart/`, `/how-to-calculate-grades/`, `/grading-scale/`, `/faq/`

**Blog (15 posts):** how-many-questions-can-you-miss, weighted-vs-unweighted-grades, how-extra-credit-affects-your-grade, grade-rounding-rules, how-to-calculate-gpa-weighted-and-unweighted, high-school-gpa-scale-4-vs-5, what-grade-do-i-need-on-my-final-exam, how-to-calculate-cumulative-gpa, letter-grade-to-gpa-conversion-chart, what-is-a-passing-grade, how-do-grade-curves-work, grade-calculators-for-teachers, what-to-do-if-your-grade-is-slipping, ap-honors-ib-weighted-gpa-points-explained, how-to-calculate-grade-percentage

**Missing pages that should exist:** `/about/`, `/privacy-policy/`, `/contact/`, `/easy-grader/` (or `/ez-grader/`)

## 4. Keyword sheet — finalized cluster→page mapping (updated 2026-08-11 with SERP data)

Source: `gradecalculator-keyword-clusters-scored.csv` (60 unique keywords, derived from a competitor SERP-ranking export against `gradecalculator.com`). Every one of these 60 keywords has `gradecalculator.com` ranking in the top 1–9 — **that single domain is the primary competitor to benchmark against**, not the wider competitor list in §1, which is the secondary/longer-tail threat.

Intent breakdown in the data: mostly split commercial/informational, plus 2 navigational terms (`essy grader`, `ezgrader online`) — those two are effectively brand-navigational for a competitor tool and are not realistically winnable; don't build pages chasing them specifically, just don't actively exclude the terms from natural copy.

| Cluster | # kw | Page decision |
|---|---|---|
| Grade Calculator (Core/Generic) | 19 | Existing pillar `/grade-calculator/`. No new page — expand FAQ/body copy to naturally cover the misspelling and phrasing variants (grade calc, calculator grade, calculate test grades, etc.). |
| Easy Grader (Brand-Generic) | 12 | **New pillar `/easy-grader/`.** Single biggest gap on the site. |
| EZ Grader (Brand-Generic) | 7 | Fold into the same `/easy-grader/` pillar (not a separate page) — "Easy Grader" and "EZ Grader" are the same searcher intent split across two spellings; two competing pages would cannibalize each other. Cover both terms explicitly in title/H1/H2/FAQ. |
| Grade Scale & Chart | 5 | Existing `/grading-scale/` + `/grade-chart/`. No new page — verify both "grading scale calculator" and "grade scale calculator" phrasing appear in copy/FAQ. |
| General Grader / Checker | 10 | No new page. These are near-synonyms of both Grade Calculator and Easy Grader ("grader," "quick grader," "grade checker," "grader for teachers," etc.) — absorb as secondary semantic targets across `/grade-calculator/` and the new `/easy-grader/` pillar rather than building a third overlapping page. |
| Gradebook Calculator | 2 | Already covered by existing `/gradebook-calculator/`. No action beyond confirming "online gradebook calculator" phrasing is present. |
| Grade Percentage | 5 | No new page. Natural home is `/grade-calculator/` — add an explicit H2 + FAQ entries for percentage-specific phrasing (grade calculator points, grade calculator with percentages, etc.), and strengthen the internal link from the existing blog post `how-to-calculate-grade-percentage` into the pillar. |

**Net result: one new page (`/easy-grader/`), the rest is semantic enrichment of existing pillars.** This avoids building thin one-keyword pages and matches the site's existing pattern of consolidated, tool-plus-guide pillar pages.

Misspelling variants (grade claculator, grad calculator, essy grader, etc.) should be absorbed semantically into pillar copy and FAQ — never built as separate thin pages.

## 5. The master SEO execution prompt

Use this as the standing brief for all future work on this site — in this session or a fresh one. This version incorporates the finalized cluster→page mapping in §4.

> **Project:** Full SEO buildout for gradecalculators.site (Next.js 16 static export, repo at `~/July Projects/grade-calculator`, deployed via Vercel).
>
> **Context to load first:** Read `MASTER-GRADECALCULATORS.md` in this repo — especially §1 (critical findings), §4 (finalized keyword cluster→page mapping), and §3 (current site map) — before making any changes. Keyword data lives in `~/July Projects/gradecalculator-keyword-clusters-scored.csv`.
>
> **Objective:** Take the site from "not indexed, zero authority, real EEAT gaps" to a properly indexed, topically complete, trustworthy resource. **Primary benchmark: `gradecalculator.com`, which currently ranks top 1–9 for all 60 target keywords across every cluster.** Secondary competitors (calculator.net, thecalculatorsite.com, gradecalculators.net, ezgrader.us, and others in §1) matter but are not the immediate target to unseat.
>
> **Cluster→page mapping (do not deviate without re-checking §4):**
> 1. Grade Calculator (Core/Generic, 19 kw) → existing `/grade-calculator/` pillar. No new page.
> 2. Easy Grader (12 kw) + EZ Grader (7 kw) → **one new pillar, `/easy-grader/`**, covering both spellings/brand variants in title/H1/H2/FAQ. This is the only new page this phase calls for.
> 3. Grade Scale & Chart (5 kw) → existing `/grading-scale/` + `/grade-chart/`. No new page.
> 4. General Grader/Checker (10 kw) → no new page; absorb as secondary semantic coverage across `/grade-calculator/` and the new `/easy-grader/` pillar.
> 5. Gradebook Calculator (2 kw) → existing `/gradebook-calculator/`. No new page.
> 6. Grade Percentage (5 kw) → existing `/grade-calculator/`; add a dedicated H2 + FAQ entries, strengthen the internal link from the blog post `how-to-calculate-grade-percentage`.
>
> **Work to do, in priority order:**
> 1. **Indexing first.** Verify GSC property status, check Coverage report, submit sitemap if not already submitted, and request indexing for the homepage and top 3-4 pillar pages via URL Inspection. Nothing below matters until this is resolved.
> 2. **EEAT foundation.** Build `/about/`, `/privacy-policy/`, and `/contact/` pages. The Privacy Policy must actually substantiate the "0 student data collected" claim made elsewhere on the site. Replace or supplement the generic "Grade Calculator Editorial Team" byline with a real name/bio (teaching background, edtech experience, or founder story).
> 3. **Build `/easy-grader/`.** Match the depth/structure pattern already used on `/grade-calculator/` (live tool + explanation + FAQ, WebApplication + FAQPage schema). Cover Easy Grader and EZ Grader spelling variants plus the General Grader/Checker terms (grader, quick grader, grade checker, grader for teachers, etc.) as secondary on-page targets. Cross-link from `/grade-calculator/` and the homepage.
> 4. **Enrich existing pillars** per the mapping above: add the Grade Percentage H2/FAQ to `/grade-calculator/`, confirm Grade Scale & Chart phrasing variants are present on `/grading-scale/` and `/grade-chart/`, confirm "online gradebook calculator" phrasing on `/gradebook-calculator/`.
> 5. **Resolve GPA cluster cannibalization** (separate from the 60-keyword sheet above, still open from the original audit): establish `/gpa-calculator/` as the pillar; make sure `/high-school-gpa-calculator/`, `/college-gpa-calculator/`, and `/cumulative-gpa-calculator/` each target a genuinely distinct sub-intent with explicit internal linking back to the pillar and no duplicate title/meta/H1 patterns.
> 6. **Semantic on-page optimization per page:** natural topical coverage of entities/subtopics related to the primary query (not keyword-stuffing), FAQ schema for genuine long-tail questions, internal links to/from related tools and blog posts, unique title/meta/H1 per page. Where intent is commercial (most of the sheet), lead with the working tool above the fold; where intent is informational, lead with the explanation/formula before the tool.
> 7. **Technical check:** confirm real-world Core Web Vitals on live pages (LCP especially, given `images: unoptimized: true` under static export + recently added blog cover images); fix any image-weight issues before publishing more content.
> 8. **Off-page:** pursue a minimum viable backlink base — teacher-resource link roundups, edtech tool directories, relevant subreddit/forum mentions where organically appropriate. Do not spam; target genuine relevance.
>
> **Constraints:** static export via Next.js (no server-side rendering tricks), keep the existing schema patterns (WebApplication/FAQPage/BreadcrumbList/Organization/WebSite/BlogPosting) consistent across new pages, keep the no-signup/no-tracking product positioning intact.
>
> **Definition of done for a given batch of work:** every page shipped has a unique title/meta/H1, targets a specific cluster from §4 without cannibalizing an existing page, includes correct schema, is internally linked from at least one related pillar/blog page, and (for the new pillar page) includes a working calculator tool consistent with the site's existing UX pattern.

---

## 6. Implementation log — 2026-08-11 build session

All six steps from §5's priority order were completed in one session. `npm run typecheck` and `npm run build` passed cleanly after each step; final build produces 36 static routes.

1. **Indexing (§5.1) — code-side audit, no fix needed.** Confirmed no `noindex` anywhere, every page has a correct trailing-slash canonical matching `trailingSlash: true`, `robots.ts` allows all crawlers, `sitemap.ts` lists every page, `vercel.json` has no header overrides, and the GSC verification meta is in `layout.tsx`. The block is entirely on the Search Console side (property setup / indexing request) — nothing left to fix in code.
2. **EEAT foundation (§5.2) — shipped.** Added `/about/`, `/privacy-policy/`, `/contact/` (all with correct schema, in `sitemap.ts` and `SiteFooter`). Blog byline changed from "Grade Calculator Editorial Team" (Organization) to Muhammd Salman (Person, linked to `/about/`) in both the `BlogPosting` schema and the visible editorial note in `src/app/blog/[slug]/page.tsx`. Privacy policy documents exactly what's stored (per-calculator `localStorage` keys, verified against source — no student names/data ever collected), no analytics/cookies, standard Vercel hosting logs disclosed honestly.
3. **`/easy-grader/` pillar (§5.3) — shipped.** Reuses the existing `GradeCalculator` component (same tool, different page/copy) rather than duplicating tool logic. Covers Easy Grader + EZ Grader spelling variants and the General Grader/Checker cluster (quick grader, grade checker, grader for teachers, test grader, online grader) in dedicated H2/FAQ content. `WebApplication` + `FAQPage` + `BreadcrumbList` schema. Cross-linked from `/grade-calculator/`, homepage, header nav, and footer.
4. **Pillar enrichment (§5.4) — shipped.** Added a "Using this as a grade percentage calculator" H2 + 2 new FAQ entries to `/grade-calculator/` (grade calculator percentage/points/with-percentages phrasing). Added "grading scale calculator" / "grade scale calculator" phrasing to `/grading-scale/` and `/grade-chart/`. Added "online gradebook calculator" phrasing to `/gradebook-calculator/`. Reordered the `how-to-calculate-grade-percentage` blog post's related-tools list so `/grade-calculator/` is the primary (first) link with a stronger CTA description.
5. **GPA cannibalization (§5.5) — verified already resolved, no changes made.** `/high-school-gpa-calculator/`, `/college-gpa-calculator/`, and `/cumulative-gpa-calculator/` already had unique titles/H1s/content targeting distinct sub-intents (AP/Honors weighting, credit-hour semester GPA, multi-semester aggregation respectively) and already linked back to `/gpa-calculator/`. This finding in §1/§5 was stale relative to the actual current code — likely fixed in an earlier session without updating this doc.
6. **Image technical check (§5.7, partial) — verified no issue.** All blog cover images in `public/images/blog/` are hand-authored inline-vector SVGs, ~4KB each, no embedded base64 raster data. The `images: unoptimized: true` concern from §1 finding 6 doesn't apply in practice since there are no raster images to optimize. Real-world Core Web Vitals / LCP on the live deployed site were not measured (would need Vercel/PageSpeed access, not available from the repo).

**Still open, not part of this session's scope:** off-page/backlink work (§5.8), actually submitting the sitemap and requesting indexing in Search Console (user-only action, flagged in §5.1), and live-site CWV measurement.

## 7. Blog content strategy (added 2026-08-21)

Built from the same `gradecalculator-keyword-clusters.xlsx` used for §4, cross-checked against the 15 posts already live (§3) so nothing here duplicates existing coverage or cannibalizes the pillar pages built in §6. **Rule for this site: blog posts target informational/long-tail intent and feed traffic + internal links into the tool pillars; they don't re-target the commercial head terms the pillars already own.**

### 7.1 Cluster coverage audit

| Cluster | Pillar page (owns commercial intent) | Existing blog coverage | Gap? |
|---|---|---|---|
| Grade Calculator (Core) | `/grade-calculator/` | `how-to-calculate-grade-percentage`, `grade-rounding-rules`, `how-many-questions-can-you-miss`, `how-extra-credit-affects-your-grade`, `how-do-grade-curves-work` | Well covered. No new post needed. |
| Easy Grader + EZ Grader | `/easy-grader/` | None | **Gap — highest priority**, mirrors §1 finding 4. |
| Grade Scale & Chart | `/grading-scale/`, `/grade-chart/` | None (GPA-scale posts exist but that's a different cluster — 4.0/5.0 scale, not the A–F percentage grading scale) | **Gap.** |
| General Grader / Checker | `/easy-grader/` (absorbed per §4) | `grade-calculators-for-teachers` partially covers "grader for teachers" | Partial gap on "quick grader," "test grader," "grade checker." |
| Gradebook Calculator | `/gradebook-calculator/` | None | **Gap.** |
| Grade Percentage | `/grade-calculator/` | `how-to-calculate-grade-percentage` (direct match) | Covered — do not add a second post, would cannibalize. |
| GPA cluster (not in this sheet, but on-site) | `/gpa-calculator/` + 3 spokes | `weighted-vs-unweighted-grades`, `how-to-calculate-gpa-weighted-and-unweighted`, `high-school-gpa-scale-4-vs-5`, `how-to-calculate-cumulative-gpa`, `letter-grade-to-gpa-conversion-chart`, `ap-honors-ib-weighted-gpa-points-explained` | Already the most heavily blogged cluster on the site — no new post needed here either. |

### 7.2 New posts to write, in priority order

1. **"What Is an Easy Grader (EZ Grader)? How the Grading Chart Works"** — supports `/easy-grader/`. Covers `easy grader`, `ez grader`, `easygrader`, `ezgrader`, `e z grader online` naturally as an explainer/history piece (the paper EZ Grader chart predates the online tool — good angle for genuine E-E-A-T depth, ties to Muhammad Salman's teaching-background bio from §6.2). ~1,400 words. Primary internal link: `/easy-grader/` above the fold.
2. **"How to Grade Tests Fast: The Quick Grader Method for Teachers"** — supports `/easy-grader/`. Covers `quick grader`, `quick grade`, `test grader`, `grader online`, `online grader`. How-to format, practical time-saving angle for teachers grading stacks of papers. ~1,200 words.
3. **"Grading Scale Explained: A–F, Percentage, and Weighted Scales"** — supports `/grading-scale/` and `/grade-chart/`. Covers `grading scale`, `grade scale`, `grading scale calculator`, `grade scale calculator`, `grade chart`. Reference/explainer with a scale table — good link-bait for teacher-resource roundups (feeds §5.8 backlink goal). ~1,300 words.
4. **"How to Use an Online Gradebook Calculator for Your Class"** — supports `/gradebook-calculator/`. Covers `gradebook calculator`, `online gradebook calculator`, `online grading calculator`. How-to/workflow piece aimed at teachers managing a full class roster, not just a single test. ~1,200 words.
5. **"Free Online Grade Checker: How to Check Your Grade in Seconds"** — supports `/easy-grader/` (secondary) and `/grade-calculator/`. Covers the remaining `grade checker` term from General Grader/Checker. Short, student-facing, FAQ-heavy. ~900 words. Lowest priority of the four gaps — only write after 1–3 are live, since it's the thinnest remaining term.

**Deliberately not writing:** a second Grade Percentage post (cannibalizes `how-to-calculate-grade-percentage`), a second "grader for teachers" post (cannibalizes `grade-calculators-for-teachers` — instead, add an internal link from that existing post to the new `/easy-grader/` pillar and post #2 above once published).

### 7.3 Sequencing and constraints

- **Indexing blocker still applies (§1 finding 1).** New blog posts add zero value while the site isn't indexed — if GSC indexing still hasn't been requested, do that before or alongside writing post #1, not after.
- Match the existing post pattern: `Person` byline (Muhammad Salman, linked to `/about/`) + `BlogPosting` schema, same as the §6.2 change — don't regress to the generic editorial-team byline.
- Each new post's primary internal link goes to the pillar it supports, added near the top (not just buried in a "related tools" footer list), matching how `how-to-calculate-grade-percentage` was reordered in §6.4.
- Suggested cadence: one post every 1–2 weeks in priority order above — small enough site that a burst of 4 posts in one day looks unnatural relative to current publish history (15 posts since launch).
- Use the `seo-content-pipeline` skill to draft each post — feed it the primary keyword from the "Primary internal link" pillar above plus the secondary terms listed per post, so entity coverage comes from real competitor SERPs rather than the keyword list alone.

## 8. Content drafts — 2026-08-21

All 4 posts from §7.2 drafted via the `seo-content-pipeline` skill and saved to `content-drafts/<slug>-2026-08-21/` in this repo (`draft.md` + `research-notes.md` each, not yet turned into `.tsx` blog pages):

| Slug | Title used | Words | FAQs |
|---|---|---|---|
| `easy-grader-explainer` | What Is an Easy Grader (EZ Grader)? How the Grading Chart Works | ~1,793 | 11 |
| `quick-grader-method` | Quick Grader: Grade Tests Fast | ~1,180 | 11 |
| `grading-scale-explained` | Grading Scale Explained: A–F to Percentages | ~2,360 | 11 |
| `grade-checker` | Grade Checker: See Your Score Instantly | ~1,320 | 12 |

**Open items resolved when publishing:**
- Byline: no per-post byline field exists — `src/app/blog/[slug]/page.tsx` hardcodes the "Muhammad Salman" `Person` schema + editorial-note block for every post, so this was already consistent by construction; nothing to change per-post.
- `quick-grader-method`'s grading-scale table was checked against `src/lib/grade.ts`'s `standard` preset (A 93/A− 90/B+ 87/B 83/B− 80/C+ 77/C 73/C− 70/D+ 67/D 63/D− 60/F 0): collapsing that preset's plus/minus bands to whole letters gives exactly A 90–100, B 80–89, C 70–79, D 60–69, F below 60 — the draft's numbers were already correct, no change needed.
- `grading-scale-explained`'s Mount Holyoke/1897 story kept as "commonly cited," not asserted as fact, per the draft's own E-E-A-T flag.
- The two 403'd competitor fetches are noted in each `research-notes.md`; no impact on the published copy.

## 9. Blog posts published — 2026-08-21

All 4 drafts from §8 converted into `BlogPost` entries in `src/lib/blog.ts` (markdown stripped, restructured into `sections`/`list`/`table`, FAQs kept as a final "Frequently Asked Questions" section — this site doesn't use per-post FAQPage schema, so FAQs render as regular prose Q&A, consistent with how the rest of the article body works) and are now live in the site build:

| Slug | Category | Primary internal link (first in `relatedTools`) |
|---|---|---|
| `easy-grader-explainer` | Grading tools | `/easy-grader/` |
| `quick-grader-method` | Grading tools | `/easy-grader/` |
| `grading-scale-explained` | Grade policies | `/grading-scale/` |
| `grade-checker` | Grading tools | `/easy-grader/` |

- Added a new "Grading tools" category (purple palette, Percent icon) to `scripts/generate-blog-covers.mjs`; ran it to generate the 4 new cover SVGs in `public/images/blog/`.
- `sitemap.ts` needed no changes — it derives blog URLs from `blogPosts` automatically.
- Verified with `npm run typecheck` (clean) and `npm run build` (all 19 blog paths, including the 4 new ones, generated statically; confirmed present in `out/sitemap.xml` and linked from the blog index grid).
- Not yet committed to git or deployed — sitting as local changes pending user review.
- §7.2 item 4 (gradebook calculator post) was never in scope for this drafting run — only the 4 posts the user explicitly requested were drafted/published; it remains a future gap per §7.1.

*Keyword mapping finalized 2026-08-11 (§4). Build session completed 2026-08-11 (§6). Blog strategy added 2026-08-21 (§7). Drafts written 2026-08-21 (§8). Drafts published to the live blog.ts/site build 2026-08-21 (§9).*
