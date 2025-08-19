// Unit03 Lesson05 — Advanced Excel Automation for Three‑Statement Models
export const lesson05Data = {
  id: "unit03_lesson05_advanced",
  title: "Advanced Automation: Three‑Statement Link Engine",
  sequence: 5,
  unitId: "mdrhlhuxj2zkbimaqfd",
  learningObjectives: [
    "Build a robust three‑statement link engine using structured references and XLOOKUP/SUMIFS",
    "Implement scenario‑driven toggles with SWITCH/CHOOSE for driver‑based planning",
    "Add professional validation checks (balance ties, cash reconciliation, missing IDs)",
    "Produce investor‑ready summaries that update correctly as data grows"
  ],
  keyConcepts: [
    "Structured references (Table[Column]) for auto‑expanding models",
    "XLOOKUP with if_not_found and SUMIFS for mapping and aggregation",
    "Scenario control with SWITCH and named ranges",
    "Audit flags for A=L+E, Net Income → Retained Earnings, and cash movement ties"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Textbook‑first explanation with interactive checks and validation practice"
  ],
  rationale: "Students deepen Lesson04 skills by engineering a resilient, investor‑grade model that scales with new rows, methods, and scenarios.",
  status: "Draft"
}

export const unit03Data = {
  id: "mdrhlhuxj2zkbimaqfd",
  title: "Three-Statement Storyboard",
  sequence: 3
}

// Lesson phases from MCP curriculum database
export const lesson05Phases = [
  {
    id: "phase_hook_5",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Stress‑test fragile vs robust three‑statement links to protect investor trust",
  },
  {
    id: "phase_introduction_5",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Professional‑grade automation patterns, constraints, and gotchas",
  },
  {
    id: "phase_guided_practice_5",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Implement scenario switch, mapping, and validation checks step‑by‑step",
  },
  {
    id: "phase_independent_practice_5",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Apply automation to advanced dataset with edge cases",
  },
  {
    id: "phase_assessment_5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Mastery check: technical accuracy and business judgment",
  },
  {
    id: "phase_closing_5",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Synthesize automation wins and preview dashboard integration",
  }
]
