"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Check,
  ChevronDown,
  Clipboard,
  Minus,
  Plus,
  Printer,
  RotateCcw,
  Settings2,
  SlidersHorizontal,
  Sparkles,
  X,
} from "lucide-react";
import {
  clamp,
  formatNumber,
  formatPercentage,
  getLetterGrade,
  getPercentage,
  GradeBand,
  SCALE_PRESETS,
  ScalePreset,
} from "@/lib/grade";

type PointStep = 1 | 0.5 | 0.25;
type DecimalPlaces = 0 | 1 | 2;

const STORAGE_KEY = "grade-calculator-preferences-v3";

function normalize(value: number, step: number) {
  return Math.round(value / step) * step;
}

function NumberControl({
  id,
  label,
  helper,
  value,
  min,
  max,
  step,
  onChange,
}: {
  id: string;
  label: string;
  helper: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}) {
  const update = (next: number) => onChange(clamp(normalize(next, step), min, max));

  return (
    <div className="number-field">
      <div className="number-label">
        <label htmlFor={id}>{label}</label>
        <span>{helper}</span>
      </div>
      <div className="number-input-wrap">
        <button type="button" onClick={() => update(value - step)} disabled={value <= min} aria-label={`Decrease ${label.toLowerCase()}`}>
          <Minus size={18} />
        </button>
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={formatNumber(value)}
          onFocus={(event) => event.currentTarget.select()}
          onChange={(event) => {
            const next = Number(event.target.value);
            if (Number.isFinite(next)) update(next);
          }}
        />
        <button type="button" onClick={() => update(value + step)} disabled={value >= max} aria-label={`Increase ${label.toLowerCase()}`}>
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
}

export function GradeCalculator() {
  const [total, setTotal] = useState(25);
  const [wrong, setWrong] = useState(2);
  const [bonus, setBonus] = useState(0);
  const [pointStep, setPointStep] = useState<PointStep>(1);
  const [decimals, setDecimals] = useState<DecimalPlaces>(0);
  const [showLetters, setShowLetters] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [preset, setPreset] = useState<ScalePreset>("standard");
  const [customScale, setCustomScale] = useState<GradeBand[]>(() => SCALE_PRESETS.standard.map((band) => ({ ...band })));
  const [showScaleEditor, setShowScaleEditor] = useState(false);
  const [copied, setCopied] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const values = JSON.parse(saved);
        if (typeof values.total === "number") setTotal(clamp(values.total, 1, 500));
        if (typeof values.wrong === "number") setWrong(clamp(values.wrong, 0, 500));
        if ([1, 0.5, 0.25].includes(values.pointStep)) setPointStep(values.pointStep);
        if ([0, 1, 2].includes(values.decimals)) setDecimals(values.decimals);
        if (typeof values.showLetters === "boolean") setShowLetters(values.showLetters);
        if (["standard", "strict", "lenient", "custom"].includes(values.preset)) setPreset(values.preset);
        if (Array.isArray(values.customScale) && values.customScale.length === 12) setCustomScale(values.customScale);
      }
    } catch {
      // Invalid local preferences should never interrupt grading.
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ total, wrong, pointStep, decimals, showLetters, preset, customScale }),
    );
  }, [customScale, decimals, hydrated, pointStep, preset, showLetters, total, wrong]);

  useEffect(() => {
    setWrong((current) => clamp(normalize(current, pointStep), 0, total));
    setBonus((current) => clamp(normalize(current, pointStep), 0, total));
  }, [pointStep, total]);

  const activeScale = useMemo(
    () => (preset === "custom" ? [...customScale].sort((a, b) => b.min - a.min) : SCALE_PRESETS[preset]),
    [customScale, preset],
  );
  const percentage = getPercentage(total, wrong, bonus);
  const correct = total - wrong;
  const grade = getLetterGrade(percentage, activeScale);
  const scoreMood = percentage >= 90 ? "Excellent result" : percentage >= 80 ? "Strong result" : percentage >= 70 ? "On the right track" : percentage >= 60 ? "Passing result" : "Keep going";

  const chartRows = useMemo(() => {
    const count = Math.floor(total / pointStep + 0.0001);
    return Array.from({ length: count + 1 }, (_, index) => {
      const missed = normalize(index * pointStep, pointStep);
      const rowPercentage = getPercentage(total, missed, bonus);
      return {
        wrong: missed,
        correct: Math.max(total - missed, 0),
        percentage: rowPercentage,
        grade: getLetterGrade(rowPercentage, activeScale),
      };
    });
  }, [activeScale, bonus, pointStep, total]);

  const ringStyle = {
    "--score": `${clamp(percentage, 0, 100) * 3.6}deg`,
    "--ring-color": grade.tone === "excellent" ? "#10a879" : grade.tone === "good" ? "#6558f5" : grade.tone === "fair" ? "#e59a18" : "#ef665d",
  } as React.CSSProperties;

  const handleCopy = async () => {
    const text = `${formatNumber(correct + bonus)}/${formatNumber(total)} = ${formatPercentage(percentage, decimals)} (${grade.label})`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const reset = () => {
    setTotal(25);
    setWrong(2);
    setBonus(0);
    setPointStep(1);
    setDecimals(0);
    setShowLetters(true);
    setPreset("standard");
  };

  const openCustomScale = () => {
    if (preset !== "custom") {
      setCustomScale(SCALE_PRESETS[preset].map((band) => ({ ...band })));
    }
    setPreset("custom");
    setShowScaleEditor(true);
  };

  return (
    <div className="calculator-app">
      <aside className="calculator-controls">
        <div className="calculator-card-title">
          <div className="calculator-title-icon"><SlidersHorizontal size={20} /></div>
          <div><h3>Grade details</h3><p>Adjust any value below</p></div>
        </div>

        <div className="field-stack">
          <NumberControl id="total-points" label="Total questions" helper="or possible points" value={total} min={1} max={500} step={pointStep} onChange={(value) => { setTotal(value); setWrong((current) => Math.min(current, value)); }} />
          <NumberControl id="wrong-points" label="Wrong answers" helper="or points missed" value={wrong} min={0} max={total} step={pointStep} onChange={setWrong} />
        </div>

        <div className="scale-field">
          <label htmlFor="grade-scale">Grading scale</label>
          <div className="select-wrap">
            <select id="grade-scale" value={preset} onChange={(event) => event.target.value === "custom" ? openCustomScale() : setPreset(event.target.value as ScalePreset)}>
              <option value="standard">Standard US scale</option>
              <option value="strict">Strict scale</option>
              <option value="lenient">Lenient scale</option>
              <option value="custom">Custom scale</option>
            </select>
            <ChevronDown size={18} />
          </div>
          <button className="customize-link" type="button" onClick={openCustomScale}><Settings2 size={15} /> Customize thresholds</button>
        </div>

        <button className={`options-toggle ${showOptions ? "is-open" : ""}`} type="button" onClick={() => setShowOptions((value) => !value)} aria-expanded={showOptions}>
          <span><Settings2 size={18} /> Calculator options</span><ChevronDown size={18} />
        </button>

        {showOptions && (
          <div className="options-panel">
            <fieldset>
              <legend>Point precision</legend>
              <div className="segmented-control">
                {([
                  [1, "Whole"],
                  [0.5, "Half"],
                  [0.25, "Quarter"],
                ] as [PointStep, string][]).map(([value, label]) => (
                  <button type="button" className={pointStep === value ? "active" : ""} onClick={() => setPointStep(value)} key={value}>{label}</button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend>Percentage decimals</legend>
              <div className="segmented-control compact-segments">
                {([0, 1, 2] as DecimalPlaces[]).map((value) => (
                  <button type="button" className={decimals === value ? "active" : ""} onClick={() => setDecimals(value)} key={value}>{value}</button>
                ))}
              </div>
            </fieldset>
            <label className="switch-row">
              <span><strong>Show letter grades</strong><small>Add A–F labels to the chart</small></span>
              <input type="checkbox" checked={showLetters} onChange={(event) => setShowLetters(event.target.checked)} />
              <i aria-hidden="true" />
            </label>
            <div className="bonus-row">
              <div><strong>Bonus points</strong><small>Extra points earned</small></div>
              <input aria-label="Bonus points" type="number" min="0" max={total} step={pointStep} value={formatNumber(bonus)} onChange={(event) => setBonus(clamp(Number(event.target.value) || 0, 0, total))} />
            </div>
          </div>
        )}

        <button className="reset-button" type="button" onClick={reset}><RotateCcw size={16} /> Reset defaults</button>
      </aside>

      <div className="calculator-results">
        <div className="result-toolbar">
          <div><span className="live-dot" /> Live result</div>
          <div>
            <button type="button" onClick={handleCopy} aria-label="Copy grade result">{copied ? <Check size={17} /> : <Clipboard size={17} />}<span>{copied ? "Copied" : "Copy"}</span></button>
            <button type="button" onClick={() => window.print()} aria-label="Print grade chart"><Printer size={17} /><span>Print</span></button>
          </div>
        </div>

        <div className="result-summary" aria-live="polite">
          <div className="result-ring" style={ringStyle}>
            <div><strong>{percentage.toFixed(decimals)}</strong><span>%</span></div>
          </div>
          <div className="result-copy">
            <div className={`letter-chip ${grade.tone}`}>{showLetters ? grade.label : "Score"}</div>
            <h3>{scoreMood}</h3>
            <p><strong>{formatNumber(correct + bonus)}</strong> out of <strong>{formatNumber(total)}</strong> points earned</p>
          </div>
          <div className="result-stat-grid">
            <div><span>Correct</span><strong>{formatNumber(correct)}</strong></div>
            <div><span>Wrong</span><strong>{formatNumber(wrong)}</strong></div>
            <div><span>Bonus</span><strong>{formatNumber(bonus)}</strong></div>
          </div>
        </div>

        <div className="chart-header">
          <div><h3>Complete grading chart</h3><p>{chartRows.length} possible scores · best to lowest</p></div>
          <span className="chart-key"><i /> Your score</span>
        </div>
        <div className="grade-table-wrap">
          <table className="grade-table">
            <thead><tr><th>Wrong</th><th>Correct</th><th>Score</th>{showLetters && <th>Grade</th>}</tr></thead>
            <tbody>
              {chartRows.map((row) => {
                const isCurrent = Math.abs(row.wrong - wrong) < 0.001;
                return (
                  <tr className={isCurrent ? "current-row" : ""} key={row.wrong}>
                    <td>{formatNumber(row.wrong)}</td>
                    <td>{formatNumber(row.correct)}</td>
                    <td><strong>{formatPercentage(row.percentage, decimals)}</strong>{isCurrent && <span className="you-label">You</span>}</td>
                    {showLetters && <td><span className={`table-grade ${row.grade.tone}`}>{row.grade.label}</span></td>}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {showScaleEditor && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setShowScaleEditor(false)}>
          <section className="scale-modal" role="dialog" aria-modal="true" aria-labelledby="scale-title">
            <div className="modal-header">
              <div><span className="modal-icon"><Settings2 size={19} /></span><div><h3 id="scale-title">Custom grade scale</h3><p>Set the minimum score for each letter.</p></div></div>
              <button type="button" onClick={() => setShowScaleEditor(false)} aria-label="Close grade scale editor"><X size={20} /></button>
            </div>
            <div className="threshold-grid">
              {customScale.map((band, index) => (
                <label key={band.label}>
                  <span className={`table-grade ${band.tone}`}>{band.label}</span>
                  <div><input type="number" min="0" max="100" step="1" disabled={band.label === "F"} value={band.min} onChange={(event) => setCustomScale((current) => current.map((item, itemIndex) => itemIndex === index ? { ...item, min: clamp(Number(event.target.value) || 0, 0, 100) } : item))} /><span>%+</span></div>
                </label>
              ))}
            </div>
            <div className="modal-footer">
              <button type="button" className="modal-reset" onClick={() => setCustomScale(SCALE_PRESETS.standard.map((band) => ({ ...band })))}><RotateCcw size={16} /> Use standard</button>
              <button type="button" className="modal-save" onClick={() => setShowScaleEditor(false)}><Check size={17} /> Apply scale</button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
