export type GradeBand = {
  label: string;
  min: number;
  tone: "excellent" | "good" | "fair" | "needs-work";
};

export type ScalePreset = "standard" | "strict" | "lenient" | "custom";

export const SCALE_PRESETS: Record<Exclude<ScalePreset, "custom">, GradeBand[]> = {
  standard: [
    { label: "A", min: 93, tone: "excellent" },
    { label: "A−", min: 90, tone: "excellent" },
    { label: "B+", min: 87, tone: "good" },
    { label: "B", min: 83, tone: "good" },
    { label: "B−", min: 80, tone: "good" },
    { label: "C+", min: 77, tone: "fair" },
    { label: "C", min: 73, tone: "fair" },
    { label: "C−", min: 70, tone: "fair" },
    { label: "D+", min: 67, tone: "needs-work" },
    { label: "D", min: 63, tone: "needs-work" },
    { label: "D−", min: 60, tone: "needs-work" },
    { label: "F", min: 0, tone: "needs-work" },
  ],
  strict: [
    { label: "A", min: 95, tone: "excellent" },
    { label: "A−", min: 92, tone: "excellent" },
    { label: "B+", min: 89, tone: "good" },
    { label: "B", min: 85, tone: "good" },
    { label: "B−", min: 82, tone: "good" },
    { label: "C+", min: 79, tone: "fair" },
    { label: "C", min: 75, tone: "fair" },
    { label: "C−", min: 72, tone: "fair" },
    { label: "D+", min: 69, tone: "needs-work" },
    { label: "D", min: 65, tone: "needs-work" },
    { label: "D−", min: 62, tone: "needs-work" },
    { label: "F", min: 0, tone: "needs-work" },
  ],
  lenient: [
    { label: "A", min: 90, tone: "excellent" },
    { label: "A−", min: 87, tone: "excellent" },
    { label: "B+", min: 84, tone: "good" },
    { label: "B", min: 80, tone: "good" },
    { label: "B−", min: 77, tone: "good" },
    { label: "C+", min: 74, tone: "fair" },
    { label: "C", min: 70, tone: "fair" },
    { label: "C−", min: 67, tone: "fair" },
    { label: "D+", min: 64, tone: "needs-work" },
    { label: "D", min: 60, tone: "needs-work" },
    { label: "D−", min: 57, tone: "needs-work" },
    { label: "F", min: 0, tone: "needs-work" },
  ],
};

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function getLetterGrade(percentage: number, scale: GradeBand[]) {
  return scale.find((band) => percentage >= band.min) ?? scale[scale.length - 1];
}

export function getPercentage(total: number, wrong: number, bonus: number) {
  if (total <= 0) return 0;
  return ((total - wrong + bonus) / total) * 100;
}

export function formatNumber(value: number) {
  return Number.isInteger(value) ? String(value) : value.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

export function formatPercentage(value: number, decimals: 0 | 1 | 2) {
  return `${value.toFixed(decimals)}%`;
}
