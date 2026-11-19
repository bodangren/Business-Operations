// Data-Driven Café, Lesson 6 data - extracted from MCP curriculum database
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit04Data = UNIT_REF_MAP[4]
export const lesson06Data = {
  id: "u04_l06_integration",
  title: "Integration & Presentation: Decision‑Ready Dashboard",
  sequence: 6,
  unitId: "mdrhlhv2yok8auw4s3s",
  learningObjectives: [
    "Forecast the next weekend with FORECAST.LINEAR",
    "Compare Low, Base, and High using waste and service checks",
    "Test the linked dashboard charts",
  ],
  keyConcepts: [
    "Scenario selection with COUNTIF and SUMIF",
    "Planned waste and demand coverage",
    "Chart values and fixed chart ranges",
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Integrate prior skills into a scenario‑driven dashboard and present"
  ],
  rationale: "Use one forecast and three plans to compare waste and demand coverage.",
  status: "Draft"
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
    // Workbook: /public/resources/unit04-lesson06-student.xlsx
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
