"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, BarChart3, Calculator, Scale } from "lucide-react";
import { GradeCalculator } from "@/components/grade-calculator";
import { GradeChartTool } from "@/components/grade-chart-tool";
import { GradingScaleTool } from "@/components/grading-scale-tool";

const tools = [
  { id: "calculator", label: "Grade Calculator", helper: "Find a score from answers missed", icon: Calculator, href: "/grade-calculator/" },
  { id: "chart", label: "Grade Chart", helper: "Generate every possible test score", icon: BarChart3, href: "/grade-chart/" },
  { id: "scale", label: "Grading Scale", helper: "Convert percentages to letter grades", icon: Scale, href: "/grading-scale/" },
] as const;

type ToolId = (typeof tools)[number]["id"];

export function HomepageTools() {
  const [active, setActive] = useState<ToolId>("calculator");
  const selected = tools.find((tool) => tool.id === active) ?? tools[0];

  return (
    <section className="homepage-tools-section" aria-labelledby="homepage-tools-title">
      <div className="shell">
        <div className="section-heading centered-heading tools-heading">
          <span className="section-kicker">FREE GRADING TOOLS</span>
          <h2 id="homepage-tools-title">Three tools. One simpler grading workflow.</h2>
          <p>Calculate an individual score, build a complete grade chart, or convert a percentage with the grading scale tool.</p>
        </div>

        <div className="tool-tab-list" role="tablist" aria-label="Choose a grading tool">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return <button id={`tab-${tool.id}`} type="button" role="tab" aria-selected={active === tool.id} aria-controls={`panel-${tool.id}`} className={active === tool.id ? "active" : ""} onClick={() => setActive(tool.id)} key={tool.id}><span><Icon size={21} /></span><div><strong>{tool.label}</strong><small>{tool.helper}</small></div></button>;
          })}
        </div>

        <div className="homepage-tool-stage">
          <div id="panel-calculator" role="tabpanel" aria-labelledby="tab-calculator" hidden={active !== "calculator"}><GradeCalculator /></div>
          <div id="panel-chart" role="tabpanel" aria-labelledby="tab-chart" hidden={active !== "chart"}><GradeChartTool /></div>
          <div id="panel-scale" role="tabpanel" aria-labelledby="tab-scale" hidden={active !== "scale"}><GradingScaleTool /></div>
        </div>
        <div className="tool-deep-link">Need more guidance? <Link href={selected.href}>Open the full {selected.label.toLowerCase()} page <ArrowRight size={15} /></Link></div>
      </div>
    </section>
  );
}
