// Unit 2, Lesson 6 — Integration & Dashboards: Decision‑Ready Month‑End
export const lesson06Data = {
  id: "unit02_lesson06",
  title: "Integration & Dashboards: Decision‑Ready Month‑End",
  sequence: 6,
  unitId: "unit02",
  learningObjectives: [
    "Integrate scenario controls (Base/Stretch/Downside) using named ranges or driver tables",
    "Link drivers to outputs with XLOOKUP/INDEX‑MATCH and structured references",
    "Build a live dashboard with charts and KPI tiles tied to the model",
    "Implement validation for missing names, stale dates, and out‑of‑range rates",
    "Write executive summaries that guide investor decisions"
  ],
  keyConcepts: [
    "Scenario Manager vs. driver tables",
    "Named ranges and structured references",
    "XLOOKUP with IFNA/IFERROR for safe switching",
    "Chart linkage to expanding ranges",
    "KPI thresholds and decision cues"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Textbook‑first explanations grounded in TechStart context",
    "Interactive practice with vocabulary and scenario switching",
    "Professional standards: clarity, reliability, auditability"
  ],
  rationale: "Students turn robust month‑end logic into a single, decision‑ready dashboard with scenario toggles, live charts, validation, and investor‑style summaries.",
  status: "Draft"
}

export const unit02Data = {
  id: "unit02",
  title: "Unit 2: Month‑End Wizard",
  sequence: 2
}

export const lesson06Phases = [
  {
    id: "phase-1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Sarah’s live demo: one dashboard, scenario toggles, and clear investor cues.",
  },
  {
    id: "phase-2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "From model to decision: drivers, XLOOKUP switching, and chart linkage.",
  },
  {
    id: "phase-3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Build scenario controls, link outputs, connect visuals, and add validation.",
  },
  {
    id: "phase-4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Mastery challenges with dataset: toggles by name, live charts, exec summary.",
  },
  {
    id: "phase-5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Integration quiz: switching logic, structured references, KPI judgment.",
  },
  {
    id: "phase-6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Synthesis, CAP reflection, and preview of Lesson07 stakeholder review.",
  }
]
