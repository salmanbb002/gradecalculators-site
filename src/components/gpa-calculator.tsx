"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, ChevronDown, Clipboard, GraduationCap, Plus, RotateCcw, Trash2 } from "lucide-react";
import {
  computeGpa,
  COURSE_TYPE_LABELS,
  CourseType,
  formatGpa,
  GpaCourse,
  gpaPointsForCourse,
  LETTER_GRADES,
  LetterGrade,
} from "@/lib/gpa";

const STORAGE_KEY = "gpa-calculator-preferences-v1";

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `course-${Date.now()}-${idCounter}`;
}

function defaultCourses(): GpaCourse[] {
  return [
    { id: nextId(), letter: "A-", credits: 3, type: "regular" },
    { id: nextId(), letter: "B+", credits: 4, type: "honors" },
    { id: nextId(), letter: "A", credits: 3, type: "ap" },
  ];
}

export function GpaCalculator() {
  const [courses, setCourses] = useState<GpaCourse[]>(defaultCourses);
  const [weighted, setWeighted] = useState(true);
  const [copied, setCopied] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const values = JSON.parse(saved);
        if (Array.isArray(values.courses) && values.courses.length > 0) setCourses(values.courses);
        if (typeof values.weighted === "boolean") setWeighted(values.weighted);
      }
    } catch {
      // Invalid local preferences should never interrupt grading.
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ courses, weighted }));
  }, [courses, hydrated, weighted]);

  const { gpa, totalCredits, qualityPoints } = useMemo(() => computeGpa(courses, weighted), [courses, weighted]);

  const updateCourse = (id: string, patch: Partial<GpaCourse>) => {
    setCourses((current) => current.map((course) => (course.id === id ? { ...course, ...patch } : course)));
  };

  const addCourse = () => {
    setCourses((current) => [...current, { id: nextId(), letter: "B", credits: 3, type: "regular" }]);
  };

  const removeCourse = (id: string) => {
    setCourses((current) => (current.length > 1 ? current.filter((course) => course.id !== id) : current));
  };

  const reset = () => {
    setCourses(defaultCourses());
    setWeighted(true);
  };

  const handleCopy = async () => {
    const text = `GPA: ${formatGpa(gpa)} (${totalCredits} credits, ${weighted ? "weighted" : "unweighted"})`;
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
          <div className="calculator-title-icon"><GraduationCap size={20} /></div>
          <div><h3>Your courses</h3><p>Add every course for this GPA</p></div>
        </div>

        <label className="switch-row gpa-weighted-row">
          <span><strong>Weighted GPA</strong><small>Add bonus points for Honors and AP/IB</small></span>
          <input type="checkbox" checked={weighted} onChange={(event) => setWeighted(event.target.checked)} />
          <i aria-hidden="true" />
        </label>

        <div className="course-row-list">
          {courses.map((course) => (
            <div className="course-row" key={course.id}>
              <div className="course-row-fields">
                <div className="select-wrap course-grade-select">
                  <select
                    aria-label="Letter grade"
                    value={course.letter}
                    onChange={(event) => updateCourse(course.id, { letter: event.target.value as LetterGrade })}
                  >
                    {LETTER_GRADES.map((letter) => (
                      <option key={letter} value={letter}>{letter}</option>
                    ))}
                  </select>
                  <ChevronDown size={15} />
                </div>
                <input
                  aria-label="Credit hours"
                  className="course-credits-input"
                  type="number"
                  min={0}
                  max={12}
                  step={0.5}
                  value={course.credits}
                  onChange={(event) => updateCourse(course.id, { credits: Math.max(0, Number(event.target.value) || 0) })}
                />
                <div className="select-wrap course-type-select">
                  <select
                    aria-label="Course type"
                    value={course.type}
                    disabled={!weighted}
                    onChange={(event) => updateCourse(course.id, { type: event.target.value as CourseType })}
                  >
                    {(Object.keys(COURSE_TYPE_LABELS) as CourseType[]).map((type) => (
                      <option key={type} value={type}>{COURSE_TYPE_LABELS[type]}</option>
                    ))}
                  </select>
                  <ChevronDown size={15} />
                </div>
              </div>
              <button
                type="button"
                className="course-remove-button"
                onClick={() => removeCourse(course.id)}
                disabled={courses.length <= 1}
                aria-label="Remove course"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        <button className="add-course-button" type="button" onClick={addCourse}><Plus size={16} /> Add another course</button>
        <button className="reset-button" type="button" onClick={reset}><RotateCcw size={16} /> Reset defaults</button>
      </aside>

      <div className="calculator-results">
        <div className="result-toolbar">
          <div><span className="live-dot" /> Live result</div>
          <div>
            <button type="button" onClick={handleCopy} aria-label="Copy GPA result">{copied ? <Check size={17} /> : <Clipboard size={17} />}<span>{copied ? "Copied" : "Copy"}</span></button>
          </div>
        </div>

        <div className="result-summary gpa-result-summary" aria-live="polite">
          <div className="result-ring gpa-ring">
            <div><strong>{formatGpa(gpa)}</strong><span>GPA</span></div>
          </div>
          <div className="result-copy">
            <div className="letter-chip excellent">{weighted ? "Weighted" : "Unweighted"}</div>
            <h3>{totalCredits} total credit{totalCredits === 1 ? "" : "s"}</h3>
            <p><strong>{qualityPoints.toFixed(2)}</strong> quality points earned</p>
          </div>
        </div>

        <div className="chart-header">
          <div><h3>Per-course quality points</h3><p>{courses.length} course{courses.length === 1 ? "" : "s"} · credit-weighted</p></div>
        </div>
        <div className="grade-table-wrap">
          <table className="grade-table">
            <thead><tr><th>Grade</th><th>Type</th><th>Credits</th><th>Points</th></tr></thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td><strong>{course.letter}</strong></td>
                  <td>{COURSE_TYPE_LABELS[course.type]}</td>
                  <td>{course.credits}</td>
                  <td>{(gpaPointsForCourse(course, weighted) * course.credits).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
