// Data-Driven Café, Lesson 6 data - extracted from MCP curriculum database
export const lesson06Data = {
  id: "u04_l06_integration",
  title: "Integration & Presentation: Decision‑Ready Dashboard",
  sequence: 6,
  unitId: "mdrhlhv2yok8auw4s3s",
  learningObjectives: [
    "Integrate forecasting outputs into a single, decision‑ready dashboard",
    "Implement scenario switching (Base/Stretch/Downside) with exact‑match logic",
    "Link model outputs to charts/tiles using structured references",
    "Apply validation (IFNA/IFERROR) and audit checks for investor‑ready reliability",
    "Communicate insights with concise executive summaries tied to KPIs"
  ],
  keyConcepts: [
    "Named‑range or driver table scenario control",
    "XLOOKUP/INDEX‑MATCH exact‑match switching with IFNA/IFERROR fallbacks",
    "Structured references (Table[Column]) for stable visuals",
    "KPI thresholds (runway, margin, coverage) driving executive summaries",
    "Auditability, documentation, and performance standards"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Integrate prior skills into a scenario‑driven dashboard and present"
  ],
  rationale: "Students turn Lesson04–05 forecasting into a live, investor‑ready system: scenario controls, linked visuals, validation, and clear decision cues.",
  status: "Draft"
}

export const unit04Data = {
  id: "mdrhlhv2yok8auw4s3s",
  title: "Data-Driven Café",
  sequence: 4
}

// Lesson phases from MCP curriculum database
export const lesson06Phases = [
  {
    id: "phase_hook_6",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Live demo: one dashboard view with Base/Stretch/Downside and decision cues",
    // component: "FinancialDashboard" – used to illustrate integrated dashboards
  },
  {
    id: "phase_introduction_6",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "From model to decision: scenario tools, exact‑match linking, and KPI selection",
    // component: "FillInTheBlank" – vocabulary on integration patterns
  },
  {
    id: "phase_guided_practice_6",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Build Sarah’s café dashboard with scenario controls, linked charts, and validation",
    // component: "FinancialDashboard" + "ErrorCheckingSystem" – integration + validation
  },
  {
    id: "phase_independent_practice_6",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Integration mastery challenges with downloadable dataset; executive summary outputs",
    // resources: /public/resources/unit04-forecasting-integration-practice.csv
  },
  {
    id: "phase_assessment_6",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Mastery check: scenario switching, linking, chart stability, and KPI judgment",
    // component: "ComprehensionCheck" – 8–10 questions
  },
  {
    id: "phase_closing_6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Synthesis and reflection: reliability improvements and presentation readiness",
    // component: "ReflectionJournal" – CAP prompts
  }
]
