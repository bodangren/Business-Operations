// PayDay Simulator, Lesson 6 — Integration & Presentation: Decision‑Ready Payroll Dashboard
export const lesson06Data = {
  id: "u05_l06_integration",
  title: "Integration & Presentation: Payroll Decision Dashboard",
  sequence: 6,
  unitId: "mdrhlhv3ixkn2gykua",
  learningObjectives: [
    "Integrate payroll engine outputs into a single, decision‑ready dashboard",
    "Implement scenario switching (Base/Stretch/Downside) by exact name",
    "Link model outputs to charts/tiles using structured references",
    "Apply validation for missing IDs, negative hours, rate bounds, and stale AsOfDate",
    "Communicate payroll KPIs (coverage days, margin, variance) with clear recommendations"
  ],
  keyConcepts: [
    "Named‑range or driver table scenario control",
    "XLOOKUP/INDEX‑MATCH exact‑match switching with IFNA/IFERROR",
    "Structured references (Table[Column]) for stable visuals",
    "KPI thresholds (coverage days, payroll % of revenue, variance) driving summaries",
    "Auditability, documentation, and performance standards"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Integrate prior automation into a scenario‑driven dashboard and present"
  ],
  rationale: "Students turn Lesson04–05 payroll automation into a live, investor‑ready system: scenario controls, linked visuals, validation, and clear decision cues.",
  status: "Draft"
}

export const unit05Data = {
  id: "mdrhlhv3ixkn2gykua",
  title: "PayDay Simulator",
  sequence: 5
}

// Lesson phases from MCP curriculum database
export const lesson06Phases = [
  {
    id: "phase_hook_6",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Live demo: one dashboard view with Base/Stretch/Downside and payroll decision cues",
    // component: "ComprehensionCheck" – integration pitfalls & best practices
  },
  {
    id: "phase_introduction_6",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "From model to decision: scenario tools, exact‑match linking, visuals, and KPI selection",
    // component: "FillInTheBlank" – vocabulary on scenario drivers, structured refs, IFNA/IFERROR
  },
  {
    id: "phase_guided_practice_6",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Build Sarah’s payroll dashboard with scenario controls, linked charts, and validation",
    // component: "ErrorCheckingSystem" – integration + validation practice
  },
  {
    id: "phase_independent_practice_6",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Integration mastery challenges with downloadable payroll dataset; executive summary outputs",
    // resources: /public/resources/unit05-payroll-integration-practice.csv
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
