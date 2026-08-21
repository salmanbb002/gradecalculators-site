# Research notes — "Grade Checker" blog post

**Primary keyword:** grade checker
**Secondary keywords:** grader, grade checker online
**Target site:** gradecalculators.site — internal links to `/easy-grader/` (primary) and `/grade-calculator/` (secondary)
**Date:** 2026-08-21

## Step 1 — SERP research

Searched "grade checker online" and "grade checker" (live WebSearch tool, not a manual browser SERP — see skill notes on geo/personalization variance).

Organic results relevant to academic grade-checking intent (off-topic results skipped: Wikipedia "Electronic grade book", Wikipedia "Checker", Hemingway readability checker, Datumate construction "grade checking", grammar checker):

| Domain | URL | Title | Type |
|---|---|---|---|
| ezgrader.us | https://ezgrader.us/ | Grade Calculator - Online Easy Grader for Grading (EZ Grader) | Tool + long-form content |
| omnicalculator.com | https://www.omnicalculator.com/other/test-grade | Test Grade Calculator | Tool + FAQ |
| gradecalculator.com | https://www.gradecalculator.com/ | Grade Calculator - Easy Grader for Grading (EZ GRADER) | Tool, thin content |
| calculator.net | https://www.calculator.net/grade-calculator.html | Grade Calculator | Tool + historical essay |
| quickgra.de | https://quickgra.de/ | QuickGrade | Tool (not fetched — 4 competitors already locked in) |
| thegradecalculator.com | https://www.thegradecalculator.com/ | Grade Calculator App | Tool (not fetched) |

**Note:** `gradecalculator.com` is the same domain flagged in `MASTER-GRADECALCULATORS.md` §4 as the primary benchmark ranking top 1–9 across the whole keyword sheet — consistent with it showing up here too.

**"Grade checker" ambiguity:** the bare term also returns construction surveying ("grade checking") and writing-readability tools in a non-trivial share of results. The academic/test-score sense is still clearly dominant among the top organic academic-adjacent results, so proceeded with that intent as directed.

PAA-equivalent questions surfaced (via omnicalculator's own FAQ, verbatim, and general query patterns): "How do I calculate my test grade?", "Is 27 out of 40 a passing grade?", "What grade is 7 wrong out of 40?", "Is 75 out of 80 an A?" — used directly in the draft's FAQ section.

## Step 2 — Title

Competitor title patterns: keyword-first, parenthetical brand qualifier common ("(EZ Grader)" / "(EZ GRADER)"), otherwise short and undecorated ("Test Grade Calculator", "Grade Calculator").

Chosen title: **"Grade Checker: See Your Score Instantly"** (40 characters, power word: "Instantly").
Alternate considered: "Free Grade Checker: Check Your Score Fast" (43 characters) — kept as backup if "Instantly" reads as overused elsewhere on the site.

## Step 3 — Top 4 competitor pages (locked in)

1. https://ezgrader.us/
2. https://www.omnicalculator.com/other/test-grade
3. https://www.gradecalculator.com/
4. https://www.calculator.net/grade-calculator.html

**Fetch limitation to flag plainly:** WebFetch returns an AI-summarized version of each page's content, not raw HTML/text. Heading structure and topic coverage below are accurate to what each page covers, but exact original sentence wording (beyond the 4 FAQ questions quoted verbatim from omnicalculator) was not available to extract character-for-character. Entity pools below are built from these summaries, which is a reasonable proxy but not the exhaustive raw-paragraph extraction the pipeline calls for in ideal conditions.

## Step 4/5 — Entity extraction & dedupe (pooled by topic, since headings overlapped heavily across the 4 competitors)

**Pool 1 — What is a grade checker (from ezgrader.us "What Is an EZ Grader?", gradecalculator.com H1 description, omnicalculator.com intro):**
EZ Grader, percentage score, letter grade, incorrect answers, instrument, sliding card, digital calculator, quiz, test, assignment scores, accessible, any device, grading tool, correct answers, wrong answers — **15 words**, all used in draft.

**Pool 2 — Formula (ezgrader.us "EZ Grader Formula Explained", omnicalculator.com "How to calculate test score"):**
Correct Answers, Total Questions, Wrong Answers, Percentage, formula, earned points, total points possible, percentile, divide, multiply by 100, percentage score — **11 words**, all used.

**Pool 3 — How to use it (ezgrader.us "How Does an EZ Grader Work?" + "How to Use the EZ Grader Calculator", omnicalculator.com "how to use it"):**
test setup, define scope, enter total questions, log incorrect answers, instant grade, view calculated percentage, four-step process, record results, visualize results, reference grading scale table — **10 words**, all used.

**Pool 4 — Grading scale reference (ezgrader.us "Common Grading Scales", omnicalculator.com grading scale, calculator.net historical grading systems):**
A+, letter grades, GPA points, performance descriptions, 97-100%, below 60%, grading scale, Yale, Harvard, Mount Holyoke College, 1887, F for failing, standardized — **13 words**. Used: A+, letter grades, GPA points, performance descriptions, 97-100%, below 60%, grading scale, standardized (8). **Deliberately unused: Yale, Harvard, Mount Holyoke College, 1887, F for failing (5)** — this is calculator.net's grading-scale-history angle, reserved for the site's separate dedicated grading-scale post (primary keyword "grading scale", per blog strategy §7.2 post #3) so the two pieces don't duplicate content.

**Pool 5 — Who it's for (ezgrader.us "Who Benefits from EZ Grader?", "Advantages of Using an EZ Grader", "EZ Grader vs Manual Grading"):**
teachers, students, tutors, parents, grading speed, accuracy, simplified conversions, workflow, privacy protection, manual grading, comparison, time-saving, large classes, semester-end reporting — **14 words**, all used.

**Pool 6 — Common mistakes (ezgrader.us "Common Mistakes to Avoid", "Tips for Accurate Results"):**
ignoring total counts, input inaccuracy, bonus question errors, scaling mismatches, validate inputs, verify answer key, standardize process — **7 words**, all used.

**Pool 7 — CTA/trust (ezgrader.us "Why Choose Our Calculator?"):**
free access, no registration, mobile responsive, immediate results, no signup — **5 words**. Used: free access, no registration, immediate results, no signup (4). **Unused: "mobile responsive"** — paraphrased as "on desktop or mobile" in the CTA sentence rather than forcing the exact competitor phrase in twice.

**Duplicate words removed across pools during dedupe:** "percentage score" (appeared in both Pool 1 and Pool 2 source material — kept once per pool since each pool feeds a different section and reuse across sections is fine), "privacy protection" (appeared in both ezgrader's advantages list and its trust/CTA section — assigned to Pool 5 only, not duplicated into Pool 7).

## Step 6 — Final heading structure

H1/H2: Grade Checker: See Your Score Instantly
H3s: What Is a Grade Checker? / How to Calculate Your Grade (the Formula) / How to Use an Online Grade Checker / Standard Grading Scale Reference / Who Should Use a Grade Checker? / Common Mistakes to Avoid / Try a Free Grade Checker

Gap filled beyond competitors: none needed — competitor coverage across the 4 pages was already comprehensive for this keyword's intent.

## Step 8 — FAQ sourcing

4 questions quoted verbatim from omnicalculator.com's own FAQ (calculation, 27/40, 7-wrong/40, 75/80). Remaining 8 are genuine follow-ups built from the entity research and section gaps (what it is, who it's for, cost, data privacy, bonus questions, checker-vs-calculator distinction, custom scales, question-count limits) — none restate a body section verbatim, all add new ground per the skill's rule.

## Step 10 — QA / E-E-A-T flags for user

- **Byline needed:** per site convention (MASTER-GRADECALCULATORS.md §6.2), attribute to Muhammad Salman (Person schema, linked to `/about/`) when this is published — not done in the draft itself since that's a publish-time step, not a drafting one.
- **No fabricated stats:** the only numeric claims (97-100% = A+, <60% = F, and the 4 verbatim FAQ calculations) mirror what's already standard across the fetched competitor pages, not invented.
- **Scope call, not an error:** grading-scale history (Yale/Harvard/Mount Holyoke) intentionally excluded — see Pool 4 note above — to avoid overlapping the separate grading-scale post planned in the blog strategy.
- **Fetch caveat:** see Step 3 note — entity extraction is from WebFetch's summarized page content, not raw HTML. If a fully literal extraction is required later, re-fetch these 4 URLs with a browser tool instead of WebFetch.

## Final report

- **Title used:** Grade Checker: See Your Score Instantly
- **Word count:** ~1,320 words (body + FAQ)
- **FAQ count:** 12
- **Output folder:** `~/July Projects/grade-calculator/content-drafts/grade-checker-2026-08-21/`
- **Unused words:** 5 (grading-scale history terms, deliberately deferred) + 1 ("mobile responsive," paraphrased) — both explained inline in draft.md
- **QA/E-E-A-T flags needing manual input:** byline attribution at publish time (see above)
