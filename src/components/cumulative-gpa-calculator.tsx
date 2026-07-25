"use client";

import { useEffect, useMemo, useState } from "react";
import { Check, Clipboard, Layers, Plus, RotateCcw, Trash2 } from "lucide-react";
import { computeCumulativeGpa, formatGpa, GpaTerm } from "@/lib/gpa";

const STORAGE_KEY = "cumulative-gpa-calculator-preferences-v1";

let idCounter = 0;
function nextId() {
  idCounter += 1;
  return `term-${Date.now()}-${idCounter}`;
}

function defaultTerms(): GpaTerm[] {
  return [
    { id: nextId(), gpa: 3.4, credits: 15 },
    { id: nextId(), gpa: 3.7, credits: 16 },
    { id: nextId(), gpa: 3.2, credits: 14 },
  ];
}

export function CumulativeGpaCalculator() {
  const [terms, setTerms] = useState<GpaTerm[]>(defaultTerms);
  const [copied, setCopied] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const values = JSON.parse(saved);
        if (Array.isArray(values.terms) && values.terms.length > 0) setTerms(values.terms);
      }
    } catch {
      // Invalid local preferences should never interrupt grading.
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ terms }));
  }, [hydrated, terms]);

  const { gpa, totalCredits } = useMemo(() => computeCumulativeGpa(terms), [terms]);

  const updateTerm = (id: string, patch: Partial<GpaTerm>) => {
    setTerms((current) => current.map((term) => (term.id === id ? { ...term, ...patch } : term)));
  };

  const addTerm = () => {
    setTerms((current) => [...current, { id: nextId(), gpa: 3.0, credits: 15 }]);
  };

  const removeTerm = (id: string) => {
    setTerms((current) => (current.length > 1 ? current.filter((term) => term.id !== id) : current));
  };

  const reset = () => setTerms(defaultTerms());

  const handleCopy = async () => {
    const text = `Cumulative GPA: ${formatGpa(gpa)} (${totalCredits} total credits across ${terms.length} terms)`;
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
          <div className="calculator-title-icon"><Layers size={20} /></div>
          <div><h3>Your terms</h3><p>Add each semester or year</p></div>
        </div>

        <div className="course-row-list">
          {terms.map((term, index) => (
            <div className="course-row term-row" key={term.id}>
              <div className="course-row-fields">
                <div className="term-label">Term {index + 1}</div>
                <input
                  aria-label="Term GPA"
                  className="course-credits-input"
                  type="number"
                  min={0}
                  max={4.5}
                  step={0.01}
                  value={term.gpa}
                  onChange={(event) => updateTerm(term.id, { gpa: Math.max(0, Number(event.target.value) || 0) })}
                />
                <input
                  aria-label="Term credits"
                  className="course-credits-input"
                  type="number"
                  min={0}
                  max={30}
                  step={0.5}
                  value={term.credits}
                  onChange={(event) => updateTerm(term.id, { credits: Math.max(0, Number(event.target.value) || 0) })}
                />
              </div>
              <button
                type="button"
                className="course-remove-button"
                onClick={() => removeTerm(term.id)}
                disabled={terms.length <= 1}
                aria-label="Remove term"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        <button className="add-course-button" type="button" onClick={addTerm}><Plus size={16} /> Add another term</button>
        <button className="reset-button" type="button" onClick={reset}><RotateCcw size={16} /> Reset defaults</button>
      </aside>

      <div className="calculator-results">
        <div className="result-toolbar">
          <div><span className="live-dot" /> Live result</div>
          <div>
            <button type="button" onClick={handleCopy} aria-label="Copy cumulative GPA result">{copied ? <Check size={17} /> : <Clipboard size={17} />}<span>{copied ? "Copied" : "Copy"}</span></button>
          </div>
        </div>

        <div className="result-summary gpa-result-summary" aria-live="polite">
          <div className="result-ring gpa-ring">
            <div><strong>{formatGpa(gpa)}</strong><span>GPA</span></div>
          </div>
          <div className="result-copy">
            <div className="letter-chip excellent">Cumulative</div>
            <h3>{totalCredits} total credits</h3>
            <p>Across <strong>{terms.length}</strong> term{terms.length === 1 ? "" : "s"}</p>
          </div>
        </div>

        <div className="chart-header">
          <div><h3>Term-by-term breakdown</h3><p>Credit-weighted contribution to your cumulative GPA</p></div>
        </div>
        <div className="grade-table-wrap">
          <table className="grade-table">
            <thead><tr><th>Term</th><th>GPA</th><th>Credits</th><th>Quality points</th></tr></thead>
            <tbody>
              {terms.map((term, index) => (
                <tr key={term.id}>
                  <td><strong>Term {index + 1}</strong></td>
                  <td>{formatGpa(term.gpa)}</td>
                  <td>{term.credits}</td>
                  <td>{(term.gpa * term.credits).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
