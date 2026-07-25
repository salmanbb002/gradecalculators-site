"use client";

import { useMemo, useState } from "react";
import { Minus, Plus, Target } from "lucide-react";
import { SCALE_PRESETS } from "@/lib/grade";
import { requiredFinalScore } from "@/lib/gpa";

function clampPercent(value: number) {
  return Math.min(Math.max(value, 0), 100);
}

function NumberControl({
  id,
  label,
  helper,
  value,
  onChange,
}: {
  id: string;
  label: string;
  helper: string;
  value: number;
  onChange: (value: number) => void;
}) {
  const update = (next: number) => onChange(clampPercent(next));

  return (
    <div className="number-field">
      <div className="number-label">
        <label htmlFor={id}>{label}</label>
        <span>{helper}</span>
      </div>
      <div className="number-input-wrap">
        <button type="button" onClick={() => update(value - 1)} aria-label={`Decrease ${label.toLowerCase()}`}>
          <Minus size={18} />
        </button>
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={0}
          max={100}
          step={1}
          value={value}
          onFocus={(event) => event.currentTarget.select()}
          onChange={(event) => {
            const next = Number(event.target.value);
            if (Number.isFinite(next)) update(next);
          }}
        />
        <button type="button" onClick={() => update(value + 1)} aria-label={`Increase ${label.toLowerCase()}`}>
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
}

const KEY_LETTERS = ["A", "B", "C", "D"] as const;

export function FinalGradeCalculator() {
  const [currentGrade, setCurrentGrade] = useState(85);
  const [finalWeight, setFinalWeight] = useState(20);
  const [targetGrade, setTargetGrade] = useState(90);

  const required = useMemo(
    () => requiredFinalScore(currentGrade, finalWeight, targetGrade),
    [currentGrade, finalWeight, targetGrade],
  );

  const letterTargets = useMemo(() => {
    const bands = SCALE_PRESETS.standard.filter((band) => (KEY_LETTERS as readonly string[]).includes(band.label));
    return bands.map((band) => ({
      letter: band.label,
      minPercent: band.min,
      required: requiredFinalScore(currentGrade, finalWeight, band.min),
    }));
  }, [currentGrade, finalWeight]);

  const status =
    required === null
      ? { tone: "fair" as const, text: "Set a final exam weight above 0% to calculate a required score." }
      : required > 100
        ? { tone: "needs-work" as const, text: "This target is not reachable even with a perfect final exam score." }
        : required <= 0
          ? { tone: "excellent" as const, text: "You have already secured this grade — any score on the final keeps you there or higher." }
          : { tone: "good" as const, text: `Score at least ${required.toFixed(1)}% on the final exam to reach this target.` };

  return (
    <div className="calculator-app">
      <aside className="calculator-controls">
        <div className="calculator-card-title">
          <div className="calculator-title-icon"><Target size={20} /></div>
          <div><h3>Final exam details</h3><p>Adjust any value below</p></div>
        </div>

        <div className="field-stack">
          <NumberControl id="current-grade" label="Current course grade" helper="% before the final" value={currentGrade} onChange={setCurrentGrade} />
          <NumberControl id="final-weight" label="Final exam weight" helper="% of course grade" value={finalWeight} onChange={setFinalWeight} />
          <NumberControl id="target-grade" label="Target course grade" helper="% you want overall" value={targetGrade} onChange={setTargetGrade} />
        </div>
      </aside>

      <div className="calculator-results">
        <div className="result-toolbar">
          <div><span className="live-dot" /> Live result</div>
        </div>

        <div className="result-summary" aria-live="polite">
          <div className="result-ring" style={{ "--score": `${clampPercent(required ?? 0) * 3.6}deg`, "--ring-color": status.tone === "excellent" ? "#10a879" : status.tone === "good" ? "#6558f5" : status.tone === "fair" ? "#e59a18" : "#ef665d" } as React.CSSProperties}>
            <div><strong>{required === null ? "—" : Math.max(0, Math.min(100, required)).toFixed(1)}</strong><span>%</span></div>
          </div>
          <div className="result-copy">
            <div className={`letter-chip ${status.tone}`}>Needed on final</div>
            <h3>{status.text}</h3>
            <p>Based on a <strong>{finalWeight}%</strong>-weight final and a <strong>{currentGrade}%</strong> current grade.</p>
          </div>
        </div>

        <div className="chart-header">
          <div><h3>Score needed for common targets</h3><p>Same current grade and final weight, different goals</p></div>
        </div>
        <div className="grade-table-wrap">
          <table className="grade-table">
            <thead><tr><th>Target letter</th><th>Target %</th><th>Required on final</th></tr></thead>
            <tbody>
              {letterTargets.map((row) => (
                <tr key={row.letter}>
                  <td><strong>{row.letter}</strong></td>
                  <td>{row.minPercent}%</td>
                  <td>{row.required === null ? "—" : row.required > 100 ? "Not possible" : `${Math.max(0, row.required).toFixed(1)}%`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
