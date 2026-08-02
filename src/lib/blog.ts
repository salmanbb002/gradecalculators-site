export type BlogTable = {
  headers: string[];
  rows: string[][];
};

export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  list?: string[];
  table?: BlogTable;
};

export type BlogPost = {
  slug: string;
  coverImage: string;
  title: string;
  seoTitle: string;
  description: string;
  category: string;
  readingTime: string;
  published: string;
  updated: string;
  directAnswer: string;
  sections: BlogSection[];
  relatedTools: { label: string; description: string; href: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-many-questions-can-you-miss",
    coverImage: "/images/blog/how-many-questions-can-you-miss.svg",
    title: "How Many Questions Can You Miss and Still Pass?",
    seoTitle: "How Many Questions Can You Miss? | Grade Calculator",
    description: "Learn how to calculate the maximum questions you can miss and still earn a passing grade, with examples for 10-, 20-, 25-, 50-, and 100-question tests.",
    category: "Test grades",
    readingTime: "7 min read",
    published: "2026-07-16",
    updated: "2026-07-16",
    directAnswer: "To find how many questions you can miss, multiply the total questions by the required passing percentage, round the required correct answers up to a whole question, and subtract that number from the total. On a 20-question test with a 70% passing score, you need 14 correct and can miss 6.",
    sections: [
      {
        heading: "The maximum-missed-questions formula",
        paragraphs: [
          "A test grade is the percentage of available points earned. When every question has the same value, the number of correct answers can stand in for earned points. The key is to round the required correct answers up, because a fraction of a question usually cannot be answered correctly.",
          "Use this formula: required correct answers = ceiling(total questions × passing percentage ÷ 100). Then calculate maximum wrong answers = total questions − required correct answers.",
        ],
        list: [
          "Convert the passing grade to a decimal: 70% becomes 0.70.",
          "Multiply the decimal by the number of questions.",
          "Round the required correct answers up to the next whole question.",
          "Subtract required correct answers from total questions.",
        ],
      },
      {
        heading: "Passing-grade examples by test length",
        paragraphs: ["The table shows the most questions a student can miss while still meeting common 60%, 70%, and 80% cutoffs. It assumes equal-value questions and no partial credit."],
        table: {
          headers: ["Total questions", "Miss for 60%", "Miss for 70%", "Miss for 80%"],
          rows: [
            ["10", "4", "3", "2"],
            ["20", "8", "6", "4"],
            ["25", "10", "7", "5"],
            ["50", "20", "15", "10"],
            ["100", "40", "30", "20"],
          ],
        },
      },
      {
        heading: "Why the answer changes on shorter tests",
        paragraphs: [
          "Each question carries more weight on a short quiz. On a 10-question quiz, one wrong answer reduces the score by 10 percentage points. On a 100-question exam, one wrong answer reduces it by only 1 percentage point. That is why a grade chart is useful: it makes every possible raw score visible before grading begins.",
          "For a 15-question quiz, 10 correct is 66.67% and 11 correct is 73.33%. There is no whole-question score between those percentages. A 70% passing rule therefore requires 11 correct answers, so the student can miss 4.",
        ],
      },
      {
        heading: "What if questions have different point values?",
        paragraphs: [
          "Do not count questions when an assessment uses a rubric, essay points, or problems with different weights. Add the points earned instead. Divide earned points by total possible points, then multiply by 100. A student may miss one 10-point problem and lose more than a student who misses several 1-point questions.",
          "Partial credit also changes the calculation. If a 20-point assignment awards half points, 14.5 points is 72.5%. Use the grade calculator’s half- or quarter-point setting rather than a whole-question chart.",
        ],
      },
      {
        heading: "Check the actual passing policy",
        paragraphs: [
          "Passing thresholds are not universal. A course syllabus may define 60%, 65%, 70%, or another score as passing, and some programs require a minimum grade in specific assessments. Rounding rules matter near the boundary, too. Confirm whether the instructor rounds the final percentage before deciding that a score passes.",
        ],
      },
    ],
    relatedTools: [
      { label: "Grade chart", description: "Generate every possible score for your test.", href: "/grade-chart/" },
      { label: "Grade calculator", description: "Calculate the result from wrong answers.", href: "/grade-calculator/" },
      { label: "Grading scale", description: "Check percentage and letter thresholds.", href: "/grading-scale/" },
    ],
  },
  {
    slug: "weighted-vs-unweighted-grades",
    coverImage: "/images/blog/weighted-vs-unweighted-grades.svg",
    title: "Weighted vs. Unweighted Grades: What Is the Difference?",
    seoTitle: "Weighted vs. Unweighted Grades | Grade Calculator",
    description: "Understand weighted and unweighted grades, calculate weighted category averages, and see how course weights differ from weighted GPA.",
    category: "Grade formulas",
    readingTime: "8 min read",
    published: "2026-07-16",
    updated: "2026-07-16",
    directAnswer: "An unweighted grade treats each score or point equally, while a weighted grade gives selected assignments or categories more influence. If exams are 50% of a course and homework is 20%, one percentage point in the exam average affects the final grade more than one percentage point in homework.",
    sections: [
      {
        heading: "What is an unweighted grade?",
        paragraphs: [
          "An unweighted points-based grade adds all points earned and divides by all points possible. If a student earns 420 of 500 points, the unweighted course percentage is 84%. A 20-point quiz has twice the influence of a 10-point quiz because it contributes twice as many possible points.",
          "Some gradebooks instead average assignment percentages equally. In that system, a 10-point quiz and a 100-point exam can have the same influence unless the instructor assigns category weights. Always identify whether the gradebook uses total points, equal assignment averages, or weighted categories.",
        ],
      },
      {
        heading: "What is a weighted grade?",
        paragraphs: [
          "A weighted grade multiplies each category average by its share of the final grade, then adds the weighted results. Common categories include exams, quizzes, homework, projects, labs, participation, and a final exam. The category weights should total 100%.",
        ],
        list: [
          "Convert each weight to a decimal: 40% becomes 0.40.",
          "Multiply each category average by its decimal weight.",
          "Add the weighted category results.",
          "Compare the final percentage with the course grading scale.",
        ],
      },
      {
        heading: "Worked weighted-grade example",
        paragraphs: ["Suppose a course uses four categories. The weighted contributions add to 85.95%, even though the simple average of the four category percentages is different."],
        table: {
          headers: ["Category", "Average", "Weight", "Contribution"],
          rows: [
            ["Exams", "88%", "40%", "35.20"],
            ["Quizzes", "82%", "25%", "20.50"],
            ["Homework", "95%", "20%", "19.00"],
            ["Final project", "75%", "15%", "11.25"],
            ["Final grade", "—", "100%", "85.95%"],
          ],
        },
      },
      {
        heading: "Course weights are different from weighted GPA",
        paragraphs: [
          "A weighted course grade describes how assignments contribute to one class percentage. A weighted GPA describes how a school assigns additional grade points to advanced courses such as honors, Advanced Placement, or International Baccalaureate classes. These are separate calculations.",
          "A common unweighted GPA scale tops out at 4.0, but weighted GPA scales vary by school and can exceed 4.0. Percentage-to-GPA conversions also vary. Use the official transcript or school handbook instead of assuming one universal conversion table.",
        ],
      },
      {
        heading: "How to check your gradebook calculation",
        paragraphs: [
          "First confirm the category weights in the syllabus. Next, check whether empty assignments are excluded or counted as zeros. Then verify extra credit, dropped scores, late penalties, and rounding. A small policy difference can explain why a manual estimate does not match the learning management system.",
          "For an individual quiz or exam, use a test grade calculator to find the raw percentage. For the full course grade, place that percentage into the correct weighted category.",
        ],
      },
    ],
    relatedTools: [
      { label: "Gradebook calculator", description: "Combine every weighted category into one grade.", href: "/gradebook-calculator/" },
      { label: "Grade calculator", description: "Find each assignment percentage first.", href: "/grade-calculator/" },
      { label: "How to calculate grades", description: "Review the raw-score formula.", href: "/how-to-calculate-grades/" },
      { label: "Grading scale", description: "Convert a final percentage to a letter.", href: "/grading-scale/" },
    ],
  },
  {
    slug: "how-extra-credit-affects-your-grade",
    coverImage: "/images/blog/how-extra-credit-affects-your-grade.svg",
    title: "How Extra Credit Affects Your Grade",
    seoTitle: "How Extra Credit Affects Grades | Grade Calculator",
    description: "Learn how bonus points and extra-credit assignments change a test or course grade, with formulas, examples, and common gradebook methods.",
    category: "Extra credit",
    readingTime: "7 min read",
    published: "2026-07-16",
    updated: "2026-07-16",
    directAnswer: "Extra credit raises a grade by adding earned points without adding the same number of required points to the denominator. On a 50-point test, 3 bonus points increase the score by 6 percentage points because 3 ÷ 50 × 100 = 6. The exact effect depends on whether the bonus applies to one assessment, a category, or the entire course.",
    sections: [
      {
        heading: "Bonus points on a test or quiz",
        paragraphs: [
          "For assessment-level bonus points, use: grade percentage = (regular points earned + bonus points) ÷ regular points possible × 100. A student with 42 regular points and 3 bonus points on a 50-point exam earns 45 ÷ 50 × 100 = 90%.",
          "A bonus can produce a score above 100%. If a student earns all 50 regular points plus 3 bonus points, the result is 106%. Whether the gradebook keeps, caps, or reallocates that amount is determined by the instructor’s policy.",
        ],
      },
      {
        heading: "How much is one bonus point worth?",
        paragraphs: ["The smaller the assessment, the more one bonus point changes the percentage. Divide one by the total possible points and multiply by 100."],
        table: {
          headers: ["Assessment total", "Value of 1 bonus point", "Value of 3 bonus points"],
          rows: [
            ["10 points", "10 percentage points", "30 percentage points"],
            ["20 points", "5 percentage points", "15 percentage points"],
            ["50 points", "2 percentage points", "6 percentage points"],
            ["100 points", "1 percentage point", "3 percentage points"],
            ["200 points", "0.5 percentage points", "1.5 percentage points"],
          ],
        },
      },
      {
        heading: "Extra-credit assignment methods",
        paragraphs: [
          "Gradebooks handle separate extra-credit assignments in different ways. A points-based gradebook may add earned bonus points to the numerator while leaving required points unchanged. A category-based gradebook may create a dedicated extra-credit category or add the activity to an existing category.",
        ],
        list: [
          "Bonus points: add points to one quiz, test, project, or course total.",
          "Zero-point assignment: award earned points while the assignment contributes zero required points.",
          "Category bonus: add a fixed percentage or weighted contribution to a category.",
          "Replacement or recovery: replace a lower score rather than adding points directly.",
        ],
      },
      {
        heading: "Extra credit in a weighted course",
        paragraphs: [
          "In a weighted gradebook, the location of the extra credit matters. Raising an exam category from 80% to 82% changes a final course grade by 1 percentage point if exams are worth 50%: 2 × 0.50 = 1. Raising a homework category by the same 2 points changes the final grade by only 0.4 points when homework is worth 20%.",
          "This is why a bonus displayed as three points does not always translate to three points on the final course percentage. The gradebook first applies the category rules and weights.",
        ],
      },
      {
        heading: "Avoid common extra-credit mistakes",
        paragraphs: [
          "Do not add bonus points to both earned points and possible points unless the activity is a regular required assignment. Doing so reduces the benefit. Also avoid assuming the gradebook rounds every intermediate result; many systems keep additional decimal precision until the final display.",
          "Use the bonus-points option in the grade calculator for a single assessment. For a full course estimate, apply the exact extra-credit method documented in the syllabus or learning management system.",
        ],
      },
    ],
    relatedTools: [
      { label: "Grade calculator", description: "Add bonus points to a test result.", href: "/grade-calculator/" },
      { label: "Gradebook calculator", description: "See how extra credit shifts a weighted category.", href: "/gradebook-calculator/" },
      { label: "Grade formula", description: "See earned-points examples.", href: "/how-to-calculate-grades/" },
      { label: "Grading FAQ", description: "Review bonus and rounding answers.", href: "/faq/" },
    ],
  },
  {
    slug: "grade-rounding-rules",
    coverImage: "/images/blog/grade-rounding-rules.svg",
    title: "Grade Rounding Rules: When Does 89.5 Become 90?",
    seoTitle: "Grade Rounding Rules | Grade Calculator",
    description: "Understand common grade rounding methods, decimal precision, boundary scores, and why an 89.5% does not automatically become a 90% in every course.",
    category: "Grade policies",
    readingTime: "7 min read",
    published: "2026-07-16",
    updated: "2026-07-16",
    directAnswer: "An 89.5% rounds to 90% under standard rounding to the nearest whole number, but instructors are not required to use that method. A syllabus may keep decimals, truncate the score, round only the final course grade, or apply a specific boundary rule. The published grading policy controls the letter grade.",
    sections: [
      {
        heading: "Four common ways grades are handled",
        paragraphs: ["The displayed percentage and the stored percentage are not always the same. A gradebook may show one or two decimals while retaining more precision behind the scenes."],
        table: {
          headers: ["Method", "89.49 becomes", "89.50 becomes", "Meaning"],
          rows: [
            ["Nearest whole number", "89", "90", "0.5 and above rounds up"],
            ["One decimal place", "89.5", "89.5", "Second decimal determines rounding"],
            ["Truncation", "89", "89", "Decimals are removed, not rounded"],
            ["No rounding", "89.49", "89.50", "Exact value is compared with threshold"],
          ],
        },
      },
      {
        heading: "Round the final grade, not every assignment",
        paragraphs: [
          "Rounding each quiz, exam, or category before calculating the course grade can create accumulated error. A more precise method keeps the original decimal values and rounds only the final result for display. For example, several scores rounded upward can make a course estimate slightly higher than the gradebook’s exact calculation.",
          "The same issue appears in weighted categories. Calculate each weighted contribution with sufficient precision, add the contributions, and then apply the documented final rounding rule.",
        ],
      },
      {
        heading: "Letter-grade boundaries and plus/minus grades",
        paragraphs: [
          "Rounding matters most near a grading-scale boundary. On a scale where A− begins at 90%, an exact 89.95% is below the threshold unless the course rounds it to one decimal or a whole number first. On a scale where B+ begins at 87%, 86.99% remains below the boundary if no rounding is allowed.",
          "Plus/minus scales create more boundaries than a simple A, B, C, D, F scale. Confirm the threshold for each letter rather than assuming every school uses the same percentage ranges.",
        ],
      },
      {
        heading: "How calculators should display decimals",
        paragraphs: [
          "A grade calculator can display zero, one, or two decimal places, but changing the display does not change the underlying answers earned. A score of 23 out of 25 is exactly 92%, while 17 out of 21 is approximately 80.95238%. Displaying 81% is useful for readability; displaying 80.95% preserves more precision.",
          "When checking a grade, use the same decimal setting as the instructor’s gradebook and do not infer a letter-grade change unless the policy explicitly rounds before applying thresholds.",
        ],
      },
      {
        heading: "What to check in a syllabus",
        list: [
          "Whether assignment scores, category averages, or only the final grade are rounded.",
          "How many decimal places the gradebook retains and displays.",
          "Whether scores are rounded normally, truncated, or left exact.",
          "The exact percentage thresholds for A–F and plus/minus grades.",
          "Whether an instructor considers borderline grades individually.",
        ],
        paragraphs: ["If the policy is unclear, calculate the exact percentage first and ask the instructor which rounding rule applies. A calculator provides the arithmetic; the course policy determines the official grade."],
      },
    ],
    relatedTools: [
      { label: "Grade calculator", description: "Display zero, one, or two decimals.", href: "/grade-calculator/" },
      { label: "Grading scale", description: "Review exact letter-grade boundaries.", href: "/grading-scale/" },
      { label: "Grade calculator FAQ", description: "Find quick answers about rounding.", href: "/faq/" },
    ],
  },
  {
    slug: "how-to-calculate-gpa-weighted-and-unweighted",
    coverImage: "/images/blog/how-to-calculate-gpa-weighted-and-unweighted.svg",
    title: "How to Calculate GPA (Weighted and Unweighted)",
    seoTitle: "How to Calculate GPA: Weighted & Unweighted | Grade Calculator",
    description: "Learn the GPA formula step by step, see the difference between weighted and unweighted GPA, and work through a full example with credit hours.",
    category: "GPA basics",
    readingTime: "8 min read",
    published: "2026-07-26",
    updated: "2026-07-26",
    directAnswer: "To calculate GPA, convert each course's letter grade into grade points (A = 4.0, B = 3.0, and so on), multiply each course's points by its credit hours to get quality points, add the quality points together, then divide by total credit hours. Weighted GPA adds bonus points for Honors and AP/IB courses before this final division.",
    sections: [
      {
        heading: "The GPA formula",
        paragraphs: [
          "GPA is a credit-weighted average, not a simple average of letter grades. Every course contributes quality points equal to its GPA points multiplied by its credit hours, and the GPA is the sum of quality points divided by the sum of credit hours.",
        ],
        list: [
          "Convert each course's letter grade to GPA points using the 4.0 scale.",
          "Multiply each course's GPA points by its credit hours to get quality points.",
          "Add the quality points from every course.",
          "Divide total quality points by total credit hours.",
        ],
      },
      {
        heading: "Worked example",
        paragraphs: ["A student takes four courses in one term. The GPA is the total quality points divided by total credit hours, not a plain average of the four grades."],
        table: {
          headers: ["Course", "Grade", "Points", "Credits", "Quality points"],
          rows: [
            ["English", "A−", "3.7", "3", "11.10"],
            ["Chemistry", "B+", "3.3", "4", "13.20"],
            ["History", "A", "4.0", "3", "12.00"],
            ["Algebra II", "B", "3.0", "3", "9.00"],
          ],
        },
      },
      {
        heading: "Weighted vs. unweighted GPA",
        paragraphs: [
          "An unweighted GPA caps every course's contribution at 4.0. A weighted GPA adds bonus points for more difficult courses — a common convention is +0.5 for Honors and +1.0 for AP or IB — before the credit-hour division, which is why a weighted GPA can exceed 4.0.",
          "In the example above, if Chemistry were an AP course, its weighted points would be 3.3 + 1.0 = 4.3, raising both that course's quality points and the overall GPA.",
        ],
      },
      {
        heading: "Common GPA calculation mistakes",
        paragraphs: [
          "The most frequent error is averaging grade points directly without accounting for credit hours, which overweights low-credit courses and underweights high-credit courses. Another common mistake is applying a weighted bonus to a failing grade — most schools do not award bonus points for an F regardless of course level.",
        ],
      },
    ],
    relatedTools: [
      { label: "GPA calculator", description: "Enter your own courses and credits.", href: "/gpa-calculator/" },
      { label: "High school GPA calculator", description: "AP, Honors, and IB weighting.", href: "/high-school-gpa-calculator/" },
      { label: "College GPA calculator", description: "Semester GPA from credit hours.", href: "/college-gpa-calculator/" },
    ],
  },
  {
    slug: "high-school-gpa-scale-4-vs-5",
    coverImage: "/images/blog/high-school-gpa-scale-4-vs-5.svg",
    title: "High School GPA Scale: 4.0 vs. 5.0 Explained",
    seoTitle: "High School GPA Scale: 4.0 vs 5.0 | Grade Calculator",
    description: "Understand the difference between the 4.0 unweighted GPA scale and the 5.0 weighted GPA scale used for AP, Honors, and IB courses in high school.",
    category: "GPA basics",
    readingTime: "6 min read",
    published: "2026-07-26",
    updated: "2026-07-26",
    directAnswer: "The 4.0 scale is unweighted and caps every course at 4.0 regardless of difficulty. The 5.0 scale is weighted, adding roughly 1.0 grade point for AP or IB courses and 0.5 for Honors courses, so a student with a rigorous, high-scoring schedule can approach a 5.0 GPA.",
    sections: [
      {
        heading: "Why two scales exist",
        paragraphs: [
          "The 4.0 scale answers a simple question: what letter grades did a student earn? The 5.0 scale answers a different question: how did a student perform relative to course difficulty? Reporting both lets colleges see raw academic performance and the rigor of the schedule side by side.",
        ],
      },
      {
        heading: "How the 5.0 scale is built",
        table: {
          headers: ["Letter grade", "Regular (4.0 scale)", "Honors (+0.5)", "AP / IB (+1.0)"],
          rows: [
            ["A", "4.0", "4.5", "5.0"],
            ["B", "3.0", "3.5", "4.0"],
            ["C", "2.0", "2.5", "3.0"],
            ["D", "1.0", "1.5", "2.0"],
            ["F", "0.0", "0.0", "0.0"],
          ],
        },
      },
      {
        heading: "Not every school uses the same bonus",
        paragraphs: [
          "Some districts cap weighted GPA at 4.5 instead of 5.0, some only weight AP/IB and not Honors, and some use a different bonus value entirely. There is no single national standard, which is why a 4.2 weighted GPA at one school is not directly comparable to a 4.2 at another.",
        ],
      },
      {
        heading: "Which GPA should go on a college application?",
        paragraphs: [
          "Most applications ask for both, and many colleges recalculate GPA internally using their own weighting formula so every applicant is compared on the same scale. Report the figures your school's transcript provides — do not attempt to convert between different schools' weighting systems yourself.",
        ],
      },
    ],
    relatedTools: [
      { label: "High school GPA calculator", description: "Calculate your weighted or unweighted GPA.", href: "/high-school-gpa-calculator/" },
      { label: "GPA calculator", description: "General weighted and unweighted GPA.", href: "/gpa-calculator/" },
      { label: "Grading scale", description: "Percentage to letter-grade reference.", href: "/grading-scale/" },
    ],
  },
  {
    slug: "what-grade-do-i-need-on-my-final-exam",
    coverImage: "/images/blog/what-grade-do-i-need-on-my-final-exam.svg",
    title: "What Grade Do I Need on My Final Exam?",
    seoTitle: "What Grade Do I Need on My Final Exam? | Grade Calculator",
    description: "Learn the formula for finding the score you need on a final exam to reach a target course grade, with a worked example and common edge cases.",
    category: "Final exams",
    readingTime: "6 min read",
    published: "2026-07-26",
    updated: "2026-07-26",
    directAnswer: "Required final score = (target grade − current grade × (1 − final weight)) ÷ final weight, using the final's weight as a decimal share of the course grade. A student at 88% needing a B (83%) on a final worth 25% needs only 63% — because the current grade already carries most of the course.",
    sections: [
      {
        heading: "The formula, explained",
        paragraphs: [
          "A course grade is a weighted average: final course grade = current grade × (1 − final weight) + final exam score × final weight. Solving that equation for the unknown final exam score gives the required-score formula.",
          "The current grade should reflect everything graded before the final — the weighted average of all other categories, not a raw point total, unless the course truly is 100% points-based.",
        ],
      },
      {
        heading: "Worked example",
        paragraphs: ["A student has a 78% average going into a final worth 30% of the grade and wants to reach an 80% overall."],
        table: {
          headers: ["Value", "Amount"],
          rows: [
            ["Current grade", "78%"],
            ["Final exam weight", "30%"],
            ["Target grade", "80%"],
            ["Required final score", "(80 − 78 × 0.7) ÷ 0.3 = 84.7%"],
          ],
        },
      },
      {
        heading: "When the required score is impossible",
        paragraphs: [
          "If the formula returns a number above 100%, the target is not reachable through the final alone. This happens when the current grade is well below the target and the final's weight is too small to close the gap even with a perfect score. Options at that point include extra credit, grade replacement policies, or accepting a lower final grade.",
        ],
      },
      {
        heading: "When the final is curved",
        paragraphs: [
          "Calculate the required raw score first using the uncurved formula, then apply any announced curve afterward. If an instructor adds points after grading, the effective raw score needed is lower than the calculation shows — but do not assume a curve in advance unless it is part of the stated policy.",
        ],
      },
    ],
    relatedTools: [
      { label: "Final grade calculator", description: "Enter your own numbers for an instant answer.", href: "/final-grade-calculator/" },
      { label: "Grade calculator", description: "Calculate the final exam score itself.", href: "/grade-calculator/" },
      { label: "How to calculate grades", description: "Review the weighted-average formula.", href: "/how-to-calculate-grades/" },
    ],
  },
  {
    slug: "how-to-calculate-cumulative-gpa",
    coverImage: "/images/blog/how-to-calculate-cumulative-gpa.svg",
    title: "How to Calculate Cumulative GPA Across Semesters",
    seoTitle: "How to Calculate Cumulative GPA | Grade Calculator",
    description: "Learn how to combine GPA and credit hours from multiple semesters into one cumulative GPA, with a worked multi-term example.",
    category: "GPA basics",
    readingTime: "7 min read",
    published: "2026-07-26",
    updated: "2026-07-26",
    directAnswer: "Multiply each term's GPA by its credit hours to get that term's quality points, add the quality points from every term, then divide by total credit hours across all terms. Cumulative GPA is credit-weighted, so a heavier-credit term with a strong GPA raises the cumulative average more than a lighter term with the same GPA.",
    sections: [
      {
        heading: "Cumulative GPA is not an average of GPAs",
        paragraphs: [
          "A common mistake is averaging each term's GPA directly: (3.2 + 3.8) ÷ 2 = 3.5. That is only correct if both terms carried the same number of credit hours. When credit hours differ, the correct method weights each term's GPA by its credit hours.",
        ],
      },
      {
        heading: "Worked multi-term example",
        table: {
          headers: ["Term", "GPA", "Credits", "Quality points"],
          rows: [
            ["Fall", "3.2", "15", "48.00"],
            ["Spring", "3.8", "12", "45.60"],
            ["Summer", "3.5", "6", "21.00"],
          ],
        },
        paragraphs: ["Cumulative GPA = (48.00 + 45.60 + 21.00) ÷ (15 + 12 + 6) = 114.60 ÷ 33 = 3.47."],
      },
      {
        heading: "Why one bad term matters less over time",
        paragraphs: [
          "A low-GPA term early in a program, with few total credit hours on record, pulls the cumulative average down significantly. The same term after 60+ credit hours have already been earned has proportionally less effect, since it represents a smaller share of the total credit-weighted average.",
        ],
      },
      {
        heading: "Transfer credit and repeated courses",
        paragraphs: [
          "Transfer credit hours often count toward a degree without the grades entering the receiving school's cumulative GPA, since the grading scale differs between institutions. Repeated courses may replace the original grade, average both attempts, or count both toward credit hours attempted, depending on institutional policy — confirm the exact rule before recalculating.",
        ],
      },
    ],
    relatedTools: [
      { label: "Cumulative GPA calculator", description: "Combine your own terms into one GPA.", href: "/cumulative-gpa-calculator/" },
      { label: "College GPA calculator", description: "Calculate a single semester's GPA.", href: "/college-gpa-calculator/" },
      { label: "GPA calculator", description: "General weighted and unweighted GPA.", href: "/gpa-calculator/" },
    ],
  },
  {
    slug: "letter-grade-to-gpa-conversion-chart",
    coverImage: "/images/blog/letter-grade-to-gpa-conversion-chart.svg",
    title: "Letter Grade to GPA Conversion Chart",
    seoTitle: "Letter Grade to GPA Conversion Chart | Grade Calculator",
    description: "A complete letter grade to GPA conversion table on the standard 4.0 scale, including plus/minus grades and common percentage equivalents.",
    category: "GPA basics",
    readingTime: "5 min read",
    published: "2026-07-26",
    updated: "2026-07-26",
    directAnswer: "On the standard 4.0 scale, A = 4.0, A− = 3.7, B+ = 3.3, B = 3.0, B− = 2.7, C+ = 2.3, C = 2.0, C− = 1.7, D+ = 1.3, D = 1.0, D− = 0.7, and F = 0.0. Some schools use a simplified scale without plus/minus distinctions, where every A-range grade equals 4.0.",
    sections: [
      {
        heading: "Full letter grade to GPA conversion table",
        table: {
          headers: ["Letter", "GPA points", "Typical percentage"],
          rows: [
            ["A / A+", "4.0", "93–100%"],
            ["A−", "3.7", "90–92%"],
            ["B+", "3.3", "87–89%"],
            ["B", "3.0", "83–86%"],
            ["B−", "2.7", "80–82%"],
            ["C+", "2.3", "77–79%"],
            ["C", "2.0", "73–76%"],
            ["C−", "1.7", "70–72%"],
            ["D+", "1.3", "67–69%"],
            ["D", "1.0", "63–66%"],
            ["D−", "0.7", "60–62%"],
            ["F", "0.0", "Below 60%"],
          ],
        },
      },
      {
        heading: "Why this table is a reference, not a rule",
        paragraphs: [
          "The percentage ranges shown match a common standard grading scale, but individual schools set their own thresholds — an A− might begin at 90% at one school and 92% at another. Always convert your percentage to a letter grade using your own school's published scale before looking up the GPA value.",
        ],
      },
      {
        heading: "Plus/minus vs. simplified GPA scales",
        paragraphs: [
          "Some colleges use only whole-letter GPA values (A = 4.0, B = 3.0, C = 2.0) without plus/minus distinctions, so an A− and a straight A both convert to 4.0. Check whether your institution's scale includes plus/minus GPA values before combining grades from different courses.",
        ],
      },
    ],
    relatedTools: [
      { label: "GPA calculator", description: "Convert your own courses to a GPA.", href: "/gpa-calculator/" },
      { label: "Grading scale", description: "Percentage to letter-grade reference.", href: "/grading-scale/" },
      { label: "Grade calculator", description: "Find a percentage from raw points.", href: "/grade-calculator/" },
    ],
  },
  {
    slug: "what-is-a-passing-grade",
    coverImage: "/images/blog/what-is-a-passing-grade.svg",
    title: "What Is a Passing Grade? How Thresholds Differ by School",
    seoTitle: "What Is a Passing Grade? | Grade Calculator",
    description: "Learn the most common passing-grade thresholds for K-12 and college courses, why they differ by school, and how pass/fail grading changes the rules.",
    category: "Grade policies",
    readingTime: "6 min read",
    published: "2026-07-26",
    updated: "2026-07-26",
    directAnswer: "A 60% (a D or higher) is the most common passing threshold in US K-12 schools, while many colleges set the passing threshold at 70% (a C or higher) for courses that count toward a major or prerequisite chain. Pass/fail courses set their own separate cutoff, which is not always the same as the standard letter-grade scale.",
    sections: [
      {
        heading: "Common passing thresholds",
        table: {
          headers: ["Context", "Typical passing threshold", "Notes"],
          rows: [
            ["General K-12 course", "60% (D−)", "Varies by district and state"],
            ["College general elective", "60–70% (D or C)", "Check the specific syllabus"],
            ["College major/prerequisite course", "70% (C) or higher", "Often required to advance"],
            ["Pass/fail course", "Set by instructor", "No plus/minus distinction"],
          ],
        },
      },
      {
        heading: "Why the threshold isn't universal",
        paragraphs: [
          "Individual schools, districts, and departments set their own passing standards. A nursing or engineering program may require a C or higher in core courses even if the school's general passing grade is a D. Always confirm the specific policy for the course and program, not just the general school-wide default.",
        ],
      },
      {
        heading: "Pass/fail and credit/no-credit grading",
        paragraphs: [
          "Courses graded pass/fail or credit/no-credit use a single cutoff percentage instead of a full A–F scale, and that cutoff is not always 60%. Some pass/fail courses require 70% or a C-equivalent performance to earn a passing mark, even though no letter grade appears on the transcript.",
        ],
      },
      {
        heading: "How many questions can you miss and still pass?",
        paragraphs: [
          "Multiply the total questions by the required passing percentage and round the required correct answers up to the next whole question. On a 25-question test with a 60% passing score, a student needs 15 correct and can miss 10.",
        ],
      },
    ],
    relatedTools: [
      { label: "Grade calculator", description: "Check your own passing threshold.", href: "/grade-calculator/" },
      { label: "Grading scale", description: "Compare standard, strict, and lenient scales.", href: "/grading-scale/" },
      { label: "How many questions can you miss?", description: "Passing thresholds by test length.", href: "/blog/how-many-questions-can-you-miss/" },
    ],
  },
  {
    slug: "how-do-grade-curves-work",
    coverImage: "/images/blog/how-do-grade-curves-work.svg",
    title: "How Do Grade Curves Work?",
    seoTitle: "How Do Grade Curves Work? | Grade Calculator",
    description: "Learn the most common ways instructors curve grades, including flat-point curves, percentage curves, and scale shifts, with worked examples of each.",
    category: "Grade policies",
    readingTime: "7 min read",
    published: "2026-07-26",
    updated: "2026-07-26",
    directAnswer: "A grade curve adjusts scores after grading, usually to raise the class average toward a target. Common methods add a flat number of points to every score, multiply every score by a fixed percentage, or shift the letter-grade thresholds down instead of changing the raw scores at all.",
    sections: [
      {
        heading: "Flat-point curve",
        paragraphs: [
          "The instructor adds the same number of points to every student's score. If the highest score was 92% and the instructor wants the top score at 100%, every student receives +8 points. A 75% becomes an 83%.",
        ],
      },
      {
        heading: "Percentage (multiplicative) curve",
        paragraphs: [
          "Every score is multiplied by a fixed factor rather than shifted by a flat amount. This method raises high scores by more raw points than low scores, since the adjustment scales with the original score.",
        ],
        table: {
          headers: ["Original score", "Flat +8 curve", "×1.10 curve"],
          rows: [
            ["60%", "68%", "66%"],
            ["75%", "83%", "82.5%"],
            ["92%", "100%", "100% (capped)"],
          ],
        },
      },
      {
        heading: "Scale-shift curve",
        paragraphs: [
          "Instead of changing raw scores, the instructor lowers the percentage thresholds for each letter grade — for example, moving the A cutoff from 93% to 88%. Raw scores stay the same on paper, but more students land in a higher letter-grade band.",
        ],
      },
      {
        heading: "Square-root and standard-deviation curves",
        paragraphs: [
          "A square-root curve takes the square root of a percentage (expressed as a decimal) and multiplies by 100, which disproportionately helps lower scores — a 64% becomes 80%. A standard-deviation curve maps scores onto a bell curve around the class average, which can lower some students' grades even as it raises others'. These methods are less common but appear in some math and science courses.",
        ],
      },
      {
        heading: "Curves are the instructor's choice, not a right",
        paragraphs: [
          "No grading policy guarantees a curve. If a syllabus does not mention one, assume none will be applied and calculate your grade from the stated scale. Ask the instructor directly rather than assuming a specific curve method in advance.",
        ],
      },
    ],
    relatedTools: [
      { label: "Grading scale", description: "See standard, strict, and lenient thresholds.", href: "/grading-scale/" },
      { label: "Grade calculator", description: "Recalculate a score after a curve.", href: "/grade-calculator/" },
      { label: "Grade rounding rules", description: "How rounding interacts with grade boundaries.", href: "/blog/grade-rounding-rules/" },
    ],
  },
  {
    slug: "grade-calculators-for-teachers",
    coverImage: "/images/blog/grade-calculators-for-teachers.svg",
    title: "Grade Calculators for Teachers: Batch-Grading Tips",
    seoTitle: "Grade Calculators for Teachers | Grade Calculator",
    description: "Practical tips for teachers using a grade calculator and grade chart to grade quizzes, tests, and assignments faster and more consistently.",
    category: "For teachers",
    readingTime: "6 min read",
    published: "2026-07-26",
    updated: "2026-07-26",
    directAnswer: "Teachers save the most time by generating a printable grade chart for each assessment's total point value before grading begins, so every answer sheet can be matched to a percentage and letter grade without recalculating. Setting a consistent grading scale and rounding policy in advance also prevents inconsistent decisions on borderline scores.",
    sections: [
      {
        heading: "Generate a chart before you start grading",
        paragraphs: [
          "Rather than calculating each student's percentage individually, build a grade chart for the assessment's total point value once. Every possible raw score is matched to a percentage and letter grade, so grading becomes a lookup rather than repeated arithmetic.",
        ],
      },
      {
        heading: "Set your scale and precision before grading begins",
        list: [
          "Choose standard, strict, or lenient thresholds — or a custom scale matching your school's policy.",
          "Decide whole, half, or quarter-point precision before grading, not after seeing results.",
          "Confirm whether bonus or extra-credit points apply to this assessment.",
          "Decide the rounding rule for borderline scores in advance, and apply it consistently.",
        ],
      },
      {
        heading: "Handling partial credit consistently",
        paragraphs: [
          "For rubric-based or free-response questions, decide the smallest point increment (whole, half, or quarter point) before grading the first paper, and apply it to every student. Switching precision mid-stack is a common source of inconsistent grading that students notice and can reasonably question.",
        ],
      },
      {
        heading: "Printing a reference chart",
        paragraphs: [
          "A printed grade chart taped inside a grading folder or kept next to an answer key lets substitutes, teaching assistants, or co-teachers grade consistently without access to the same digital tool or gradebook software.",
        ],
      },
    ],
    relatedTools: [
      { label: "Grade chart", description: "Generate a printable chart for any test length.", href: "/grade-chart/" },
      { label: "Grade calculator", description: "Grade an individual test or assignment.", href: "/grade-calculator/" },
      { label: "Grading scale", description: "Set a consistent A–F threshold.", href: "/grading-scale/" },
    ],
  },
  {
    slug: "what-to-do-if-your-grade-is-slipping",
    coverImage: "/images/blog/what-to-do-if-your-grade-is-slipping.svg",
    title: "What to Do If Your Grade Is Slipping Mid-Semester",
    seoTitle: "What to Do If Your Grade Is Slipping | Grade Calculator",
    description: "A practical, calculator-based approach to diagnosing a slipping grade mid-semester and figuring out what it will actually take to recover it.",
    category: "Grade recovery",
    readingTime: "7 min read",
    published: "2026-07-26",
    updated: "2026-07-26",
    directAnswer: "Start by calculating your exact current grade in each weighted category, not just an overall guess. Identify which category has the most remaining weight and the most room for improvement, then use a final grade calculator to find the realistic score needed on remaining assessments to reach your target.",
    sections: [
      {
        heading: "Diagnose before you plan",
        paragraphs: [
          "A slipping grade often feels worse than the numbers show, or better than they actually are. Calculate the exact weighted average from the syllabus's category weights rather than estimating, so the recovery plan is based on real numbers instead of anxiety or assumption.",
        ],
      },
      {
        heading: "Find the category with the most leverage",
        paragraphs: [
          "Remaining assignments in a heavily weighted category (like a final exam or major project) can move the overall grade much more than the same effort in a lightly weighted category (like participation). Focus recovery effort where the weight is highest and the remaining opportunities are largest.",
        ],
      },
      {
        heading: "Use a calculator to set a realistic target",
        paragraphs: [
          "Rather than aiming for an abstract improvement, calculate the specific score needed on each remaining assessment to reach a target grade. If the required score on every remaining item is over 100%, the original target is not realistic and a revised goal should be set before the final assessment, not after.",
        ],
      },
      {
        heading: "Talk to the instructor early, not late",
        paragraphs: [
          "Instructors are generally more willing to discuss extra credit, a grade replacement policy, or flexibility on a due date when a student raises the issue with several weeks remaining rather than in the final week of the term. Bring the calculated numbers to that conversation — a specific, well-defined gap is easier to address than a vague concern.",
        ],
      },
    ],
    relatedTools: [
      { label: "Gradebook calculator", description: "Recalculate your weighted course grade.", href: "/gradebook-calculator/" },
      { label: "Final grade calculator", description: "Find the score you need on what's left.", href: "/final-grade-calculator/" },
      { label: "Grade calculator", description: "Check your current category averages.", href: "/grade-calculator/" },
      { label: "How extra credit affects your grade", description: "See how much bonus points really help.", href: "/blog/how-extra-credit-affects-your-grade/" },
    ],
  },
  {
    slug: "ap-honors-ib-weighted-gpa-points-explained",
    coverImage: "/images/blog/ap-honors-ib-weighted-gpa-points-explained.svg",
    title: "AP, Honors, and IB Weighted GPA Points Explained",
    seoTitle: "AP, Honors & IB Weighted GPA Points | Grade Calculator",
    description: "Understand exactly how AP, Honors, and IB courses add bonus GPA points, why the bonus varies by school, and how it affects class rank.",
    category: "GPA basics",
    readingTime: "6 min read",
    published: "2026-07-26",
    updated: "2026-07-26",
    directAnswer: "Most schools that weight GPA add 1.0 grade point for AP or IB courses and 0.5 for Honors courses, on top of the standard 4.0-point letter-grade scale. A B in an AP class (3.0 + 1.0 = 4.0) can carry the same weighted GPA points as an A in a regular class, which is the intended effect of weighting.",
    sections: [
      {
        heading: "The standard bonus convention",
        table: {
          headers: ["Course level", "GPA bonus", "Example: B grade"],
          rows: [
            ["Regular", "+0", "3.0"],
            ["Honors", "+0.5", "3.5"],
            ["AP / IB", "+1.0", "4.0"],
          ],
        },
      },
      {
        heading: "Why schools weight advanced courses",
        paragraphs: [
          "Weighting recognizes that a B in a college-level AP course typically represents more rigorous material and a harder curve than a B in a standard course. Without weighting, a student who avoids challenging courses to protect their GPA could out-rank a student who took on harder material and earned slightly lower grades.",
        ],
      },
      {
        heading: "Weighting rarely applies to failing grades",
        paragraphs: [
          "Almost no school adds a weighted bonus to an F — a failing grade in an AP class still contributes 0 grade points, the same as a failing grade in a regular class. The bonus rewards performance in a difficult course, not enrollment in one.",
        ],
      },
      {
        heading: "How weighting affects class rank",
        paragraphs: [
          "Schools that calculate class rank typically use weighted GPA specifically so students are not penalized for choosing a harder course load. If your school reports class rank, confirm whether it is based on weighted or unweighted GPA — the two can produce noticeably different rankings for students with different course selections.",
        ],
      },
      {
        heading: "This convention is not universal",
        paragraphs: [
          "Some schools use a different bonus (such as +0.5 for both Honors and AP), cap the weighted scale at 4.5 instead of allowing it to approach 5.0, or do not weight GPA at all. Confirm the exact policy with your school's guidance office before comparing your weighted GPA to a published benchmark from another school.",
        ],
      },
    ],
    relatedTools: [
      { label: "High school GPA calculator", description: "Calculate your own weighted GPA.", href: "/high-school-gpa-calculator/" },
      { label: "GPA calculator", description: "General weighted and unweighted GPA.", href: "/gpa-calculator/" },
      { label: "Letter grade to GPA chart", description: "Full 4.0-scale conversion table.", href: "/blog/letter-grade-to-gpa-conversion-chart/" },
    ],
  },
  {
    slug: "how-to-calculate-grade-percentage",
    coverImage: "/images/blog/how-to-calculate-grade-percentage.svg",
    title: "How to Calculate Your Grade Percentage (With Examples)",
    seoTitle: "How to Calculate a Grade Percentage | Grade Calculator",
    description: "Learn the formula for turning correct answers or points earned into a percentage grade, plus how to combine weighted categories and solve for a final exam score.",
    category: "Grade formulas",
    readingTime: "7 min read",
    published: "2026-08-01",
    updated: "2026-08-01",
    directAnswer: "To calculate a grade percentage, divide the points earned (or correct answers) by the total points possible, then multiply by 100. If a course has weighted categories, multiply each category's average by its weight and add the results instead of averaging every score equally.",
    sections: [
      {
        heading: "Two ways to get a percentage grade",
        paragraphs: [
          "Every percentage grade comes from the same relationship — points earned against points possible — but the inputs differ depending on how the assessment was scored.",
        ],
        list: [
          "Wrong-answers method: percentage = 100 × (total questions − wrong answers) ÷ total questions. Use this when every question is worth the same amount.",
          "Points-earned method: percentage = (points earned ÷ points possible) × 100. Use this for rubrics, essays, and assignments with uneven point values.",
        ],
      },
      {
        heading: "Quick checks: converting common scores",
        paragraphs: [
          "Missing 7 of 40 questions leaves 33 correct, which works out to 82.5%. A raw score of 27 out of 40 is 67.5%, and 75 out of 80 is 93.75%. Once you have the percentage, compare it against your school's grading scale to find the letter grade — the standard scale starts an A at 93% and a passing grade at 60%, but see the full US grading scale for every threshold and GPA value, since schools vary.",
        ],
      },
      {
        heading: "Combining weighted categories into one grade",
        paragraphs: [
          "A single percentage only tells you about one test. Most courses combine several graded categories — homework, quizzes, exams — each worth a different share of the final grade. Multiply each category's average by its weight, then add the weighted results together. The category weights should total 100% for the overall percentage to be accurate.",
        ],
        table: {
          headers: ["Category", "Score", "Weight", "Weighted value"],
          rows: [
            ["Homework", "90%", "20%", "18.0"],
            ["Quizzes", "85%", "30%", "25.5"],
            ["Midterm", "80%", "30%", "24.0"],
            ["Final exam", "70%", "20%", "14.0"],
          ],
        },
      },
      {
        heading: "Solving backward for the score you need on the final",
        paragraphs: [
          "Sometimes the question runs in reverse: given a current grade and a target grade, what score does the final exam need? The weighted average formula still applies — it's just solved for the missing final-exam score instead of the overall percentage. With a current grade of 84%, a final exam worth 30% of the course, and a target of 90% overall, the final exam needs to reach about 98.2%. A lower current grade or a lighter final-exam weight pushes that required score higher.",
        ],
      },
      {
        heading: "Using a calculator instead of doing it by hand",
        paragraphs: [
          "For a single test or assignment, the grade calculator converts wrong answers or points into a percentage and letter grade directly. For a full course with multiple weighted categories, the gradebook calculator adds each category and its weight, then computes the overall percentage automatically — the worked example above is its default state, so you can open it and see the same 81.5% result. If you already know your current grade and want the exact score needed on what's left, the final grade calculator solves that in one step.",
        ],
      },
    ],
    relatedTools: [
      { label: "Gradebook calculator", description: "Combine weighted categories into a course grade.", href: "/gradebook-calculator/" },
      { label: "Grade calculator", description: "Convert wrong answers into a percentage.", href: "/grade-calculator/" },
      { label: "Final grade calculator", description: "Find the score you need on what's left.", href: "/final-grade-calculator/" },
      { label: "US grading scale", description: "Compare percentage thresholds and GPA.", href: "/grading-scale/" },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
