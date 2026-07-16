"use client";

import { useMemo, useState } from "react";
import { Printer, Table2 } from "lucide-react";
import { clamp, getLetterGrade, SCALE_PRESETS, ScalePreset } from "@/lib/grade";

type DecimalPlaces = 0 | 1 | 2;

export function GradeChartTool() {
  const [total, setTotal] = useState(20);
  const [preset, setPreset] = useState<Exclude<ScalePreset, "custom">>("standard");
  const [decimals, setDecimals] = useState<DecimalPlaces>(0);

  const rows = useMemo(
    () => Array.from({ length: total + 1 }, (_, wrong) => {
      const correct = total - wrong;
      const percentage = (correct / total) * 100;
      return { wrong, correct, percentage, grade: getLetterGrade(percentage, SCALE_PRESETS[preset]) };
    }),
    [preset, total],
  );

  return (
    <div className="compact-tool chart-tool">
      <div className="compact-tool-controls">
        <div className="compact-tool-title"><span><Table2 size={20} /></span><div><h3>Grade chart generator</h3><p>Create every possible test score.</p></div></div>
        <label className="compact-field">
          <span>Total questions <small>1–500 questions</small></span>
          <input type="number" min="1" max="500" value={total} onFocus={(event) => event.currentTarget.select()} onChange={(event) => setTotal(clamp(Math.round(Number(event.target.value) || 1), 1, 500))} />
        </label>
        <label className="compact-field">
          <span>Grading scale</span>
          <select value={preset} onChange={(event) => setPreset(event.target.value as Exclude<ScalePreset, "custom">)}>
            <option value="standard">Standard (A = 93%)</option>
            <option value="strict">Strict (A = 95%)</option>
            <option value="lenient">Lenient (A = 90%)</option>
          </select>
        </label>
        <fieldset className="compact-fieldset">
          <legend>Percentage decimals</legend>
          <div className="tool-segments">
            {([0, 1, 2] as DecimalPlaces[]).map((value) => <button type="button" className={decimals === value ? "active" : ""} onClick={() => setDecimals(value)} key={value}>{value}</button>)}
          </div>
        </fieldset>
        <button className="tool-print-button" type="button" onClick={() => window.print()}><Printer size={16} /> Print this chart</button>
      </div>

      <div className="compact-tool-result">
        <div className="compact-result-head"><div><span>LIVE GRADE CHART</span><h3>{total}-question test</h3></div><b>{rows.length} scores</b></div>
        <div className="grade-table-wrap compact-table-wrap">
          <table className="grade-table">
            <thead><tr><th>Wrong</th><th>Correct</th><th>Percentage</th><th>Grade</th></tr></thead>
            <tbody>{rows.map((row) => <tr key={row.wrong}><td>{row.wrong}</td><td>{row.correct}</td><td><strong>{row.percentage.toFixed(decimals)}%</strong></td><td><span className={`table-grade ${row.grade.tone}`}>{row.grade.label}</span></td></tr>)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
