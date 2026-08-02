export type GradeCategory = {
  id: string;
  name: string;
  weight: number;
  score: number;
};

export function computeWeightedGrade(categories: GradeCategory[]) {
  const totalWeight = categories.reduce((sum, category) => sum + Math.max(0, category.weight), 0);
  const weightedSum = categories.reduce(
    (sum, category) => sum + category.score * Math.max(0, category.weight),
    0,
  );
  const overall = totalWeight > 0 ? weightedSum / totalWeight : 0;
  return { overall, totalWeight };
}
