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
      { label: "Grade calculator", description: "Find each assignment percentage first.", href: "/grade-calculator/" },
      { label: "How to calculate grades", description: "Review the raw-score formula.", href: "/how-to-calculate-grades/" },
      { label: "Grading scale", description: "Convert a final percentage to a letter.", href: "/grading-scale/" },
    ],
  },
  {
    slug: "how-extra-credit-affects-your-grade",
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
      { label: "Grade formula", description: "See earned-points examples.", href: "/how-to-calculate-grades/" },
      { label: "Grading FAQ", description: "Review bonus and rounding answers.", href: "/faq/" },
    ],
  },
  {
    slug: "grade-rounding-rules",
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
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
