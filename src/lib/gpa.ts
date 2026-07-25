export type CourseType = "regular" | "honors" | "ap";

export const COURSE_TYPE_LABELS: Record<CourseType, string> = {
  regular: "Regular",
  honors: "Honors",
  ap: "AP / IB",
};

export const COURSE_TYPE_BONUS: Record<CourseType, number> = {
  regular: 0,
  honors: 0.5,
  ap: 1,
};

export const LETTER_GRADES = [
  "A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "F",
] as const;

export type LetterGrade = (typeof LETTER_GRADES)[number];

export const LETTER_TO_GPA: Record<LetterGrade, number> = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  "D-": 0.7,
  F: 0,
};

export type GpaCourse = {
  id: string;
  letter: LetterGrade;
  credits: number;
  type: CourseType;
};

export function gpaPointsForCourse(course: { letter: LetterGrade; type: CourseType }, weighted: boolean) {
  const base = LETTER_TO_GPA[course.letter] ?? 0;
  if (base <= 0) return 0;
  if (!weighted || course.type === "regular") return base;
  return base + COURSE_TYPE_BONUS[course.type];
}

export function computeGpa(courses: GpaCourse[], weighted: boolean) {
  const totalCredits = courses.reduce((sum, course) => sum + course.credits, 0);
  const qualityPoints = courses.reduce(
    (sum, course) => sum + gpaPointsForCourse(course, weighted) * course.credits,
    0,
  );
  const gpa = totalCredits > 0 ? qualityPoints / totalCredits : 0;
  return { gpa, totalCredits, qualityPoints };
}

export type GpaTerm = {
  id: string;
  gpa: number;
  credits: number;
};

export function computeCumulativeGpa(terms: GpaTerm[]) {
  const totalCredits = terms.reduce((sum, term) => sum + term.credits, 0);
  const qualityPoints = terms.reduce((sum, term) => sum + term.gpa * term.credits, 0);
  const gpa = totalCredits > 0 ? qualityPoints / totalCredits : 0;
  return { gpa, totalCredits };
}

/**
 * Solves targetGrade = currentGrade * (1 - w) + requiredScore * w for requiredScore,
 * where w is the final exam's weight as a decimal share of the course grade.
 */
export function requiredFinalScore(currentGrade: number, finalWeightPercent: number, targetGrade: number) {
  const w = finalWeightPercent / 100;
  if (w <= 0) return null;
  return (targetGrade - currentGrade * (1 - w)) / w;
}

export function formatGpa(value: number) {
  return value.toFixed(2);
}
