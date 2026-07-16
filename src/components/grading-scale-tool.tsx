"use client";

import { useMemo, useState } from "react";
import { Gauge, Scale } from "lucide-react";
import { clamp, getLetterGrade, SCALE_PRESETS, ScalePreset } from "@/lib/grade";

export function GradingScaleTool() {
  const [percentage, setPercentage] = useState(87);
  const [preset, setPreset] = useState<Exclude<ScalePreset, "custom">>("standard");
  const bands = SCALE_PRESETS[preset];
  const grade = useMemo(() => getLetterGrade(percentage, bands), [bands, percentage]);

  return (
    <div className="compact-tool scale-tool">
      <div className="compact-tool-controls">
        <div className="compact-tool-title"><span><Scale size={20} /></span><div><h3>Grading scale converter</h3><p>Convert a percentage to a letter grade.</p></div></div>
        <label className="compact-field">
          <span>Percentage score <small>0–100%</small></span>
          <div className="percentage-input"><input type="number" min="0" max="100" step="0.1" value={percentage} onFocus={(event) => event.currentTarget.select()} onChange={(event) => setPercentage(clamp(Number(event.target.value) || 0, 0, 100))} /><b>%</b></div>
        </label>
        <label className="compact-field">
          <span>Grading scale</span>
          <select value={preset} onChange={(event) => setPreset(event.target.value as Exclude<ScalePreset, "custom">)}>
            <option value="standard">Standard US scale</option>
            <option value="strict">Strict scale</option>
            <option value="lenient">Lenient scale</option>
          </select>
        </label>
        <div className={`scale-answer ${grade.tone}`} aria-live="polite">
          <Gauge size={22} /><div><span>Your letter grade</span><strong>{grade.label}</strong></div><b>{percentage.toFixed(1)}%</b>
        </div>
      </div>

      <div className="compact-tool-result">
        <div className="compact-result-head"><div><span>PERCENTAGE SCALE</span><h3>{preset[0].toUpperCase() + preset.slice(1)} A–F thresholds</h3></div><b>{bands.length} bands</b></div>
        <div className="scale-band-list">
          {bands.map((band, index) => {
            const upper = index === 0 ? 100 : bands[index - 1].min - 0.01;
            const active = grade.label === band.label;
            return <div className={active ? "active" : ""} key={band.label}><span className={`table-grade ${band.tone}`}>{band.label}</span><i><b style={{ width: `${Math.max(8, upper - band.min + 1) * 4.5}%` }} /></i><strong>{band.min}%–{upper.toFixed(index === 0 ? 0 : 2)}%</strong>{active && <small>Your score</small>}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
