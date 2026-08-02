"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, ChevronDown, Clipboard, ClipboardList, Plus, RotateCcw, Trash2 } from "lucide-react";
import { clamp, formatPercentage, getLetterGrade, SCALE_PRESETS } from "@/lib/grade";
import { computeWeightedGrade, GradeCategory } from "@/lib/gradebook";

const STORAGE_KEY = "gradebook-calculator-preferences-v1";
type Preset = keyof typeof SCALE_PRESETS;

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `category-${Date.now()}-${idCounter}`;
}

function defaultCategories(): GradeCategory[] {
  return [
    { id: nextId(), name: "Homework", weight: 20, score: 90 },
    { id: nextId(), name: "Quizzes", weight: 30, score: 85 },
    { id: nextId(), name: "Midterm", weight: 30, score: 80 },
    { id: nextId(), name: "Final exam", weight: 20, score: 70 },
  ];
}

export function GradebookCalculator() {
  const [categories, setCategories] = useState<GradeCategory[]>(defaultCategories);
  const [preset, setPreset] = useState<Preset>("standard");
  const [copied, setCopied] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const values = JSON.parse(saved);
        if (Array.isArray(values.categories) && values.categories.length > 0) setCategories(values.categories);
        if (["standard", "strict", "lenient"].includes(values.preset)) setPreset(values.preset);
      }
    } catch {
      // Invalid local preferences should never interrupt grading.
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ categories, preset }));
  }, [categories, hydrated, preset]);

  const { overall, totalWeight } = useMemo(() => computeWeightedGrade(categories), [categories]);
  const grade = getLetterGrade(overall, SCALE_PRESETS[preset]);
  const weightIsBalanced = Math.abs(totalWeight - 100) < 0.01;

  const ringStyle = {
    "--score": `${clamp(overall, 0, 100) * 3.6}deg`,
    "--ring-color": grade.tone === "excellent" ? "#10a879" : grade.tone === "good" ? "#6558f5" : grade.tone === "fair" ? "#e59a18" : "#ef665d",
  } as React.CSSProperties;

  const updateCategory = (id: string, patch: Partial<GradeCategory>) => {
    setCategories((current) => current.map((category) => (category.id === id ? { ...category, ...patch } : category)));
  };

  const addCategory = () => {
    setCategories((current) => [...current, { id: nextId(), name: "New category", weight: 0, score: 100 }]);
  };

  const removeCategory = (id: string) => {
    setCategories((current) => (current.length > 1 ? current.filter((category) => category.id !== id) : current));
  };

  const reset = () => {
    setCategories(defaultCategories());
    setPreset("standard");
  };

  const handleCopy = async () => {
    const text = `Course grade: ${formatPercentage(overall, 1)} (${grade.label})`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="calculator-app gpa-calculator-app">
      <aside className="calculator-controls">
        <div className="calculator-card-title">
          <div className="calculator-title-icon"><ClipboardList size={20} /></div>
          <div><h3>Your categories</h3><p>Add every graded category for this course</p></div>
        </div>

        <div className="scale-field">
          <label htmlFor="gradebook-scale">Grading scale</label>
          <div className="select-wrap">
            <select id="gradebook-scale" value={preset} onChange={(event) => setPreset(event.target.value as Preset)}>
              <option value="standard">Standard US scale</option>
              <option value="strict">Strict scale</option>
              <option value="lenient">Lenient scale</option>
            </select>
            <ChevronDown size={18} />
          </div>
        </div>

        <div className="course-row-list">
          {categories.map((category) => (
            <div className="course-row" key={category.id}>
              <div className="course-row-fields">
                <input
                  aria-label="Category name"
                  className="course-credits-input category-name-input"
                  type="text"
                  value={category.name}
                  onChange={(event) => updateCategory(category.id, { name: event.target.value })}
                />
                <input
                  aria-label="Category weight percent"
                  className="course-credits-input"
                  type="number"
                  min={0}
                  max={100}
                  step={1}
                  value={category.weight}
                  onChange={(event) => updateCategory(category.id, { weight: Math.max(0, Number(event.target.value) || 0) })}
                />
                <input
                  aria-label="Category score percent"
                  className="course-credits-input"
                  type="number"
                  min={0}
                  max={100}
                  step={0.5}
                  value={category.score}
                  onChange={(event) => updateCategory(category.id, { score: Math.max(0, Number(event.target.value) || 0) })}
                />
              </div>
              <button
                type="button"
                className="course-remove-button"
                onClick={() => removeCategory(category.id)}
                disabled={categories.length <= 1}
                aria-label="Remove category"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        <button className="add-course-button" type="button" onClick={addCategory}><Plus size={16} /> Add another category</button>
        <button className="reset-button" type="button" onClick={reset}><RotateCcw size={16} /> Reset defaults</button>
      </aside>

      <div className="calculator-results">
        <div className="result-toolbar">
          <div><span className="live-dot" /> Live result</div>
          <div>
            <button type="button" onClick={handleCopy} aria-label="Copy course grade result">{copied ? <Check size={17} /> : <Clipboard size={17} />}<span>{copied ? "Copied" : "Copy"}</span></button>
          </div>
        </div>

        <div className="result-summary" aria-live="polite">
          <div className="result-ring" style={ringStyle}>
            <div><strong>{overall.toFixed(1)}</strong><span>%</span></div>
          </div>
          <div className="result-copy">
            <div className={`letter-chip ${grade.tone}`}>{grade.label}</div>
            <h3>Course grade</h3>
            <p>
              Weights total <strong>{formatPercentage(totalWeight, 0)}</strong>
              {!weightIsBalanced && <span> — should add up to 100% for an accurate result</span>}
            </p>
          </div>
        </div>

        <div className="chart-header">
          <div><h3>Per-category contribution</h3><p>{categories.length} categor{categories.length === 1 ? "y" : "ies"} · weighted</p></div>
        </div>
        <div className="grade-table-wrap">
          <table className="grade-table">
            <thead><tr><th>Category</th><th>Weight</th><th>Score</th><th>Contribution</th></tr></thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category.id}>
                  <td><strong>{category.name}</strong></td>
                  <td>{formatPercentage(category.weight, 0)}</td>
                  <td>{formatPercentage(category.score, 0)}</td>
                  <td>{((category.score * Math.max(0, category.weight)) / 100).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
