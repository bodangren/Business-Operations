// Unit05 Lesson05 — Advanced Excel Automation for Payroll (PayDay Simulator)
export const lesson05Data = {
  id: "unit05_lesson05_advanced",
  title: "Advanced Automation: Payroll Tax & Overtime Engine",
  sequence: 5,
  unitId: "unit05",
  learningObjectives: [
    "Engineer a robust payroll engine using structured references, XLOOKUP, and SUMPRODUCT",
    "Implement professional validation to prevent missing IDs, negative hours, and stale dates",
    "Build scenario toggles for pay frequency and state rules with clear documentation",
    "Produce investor-ready summaries that update correctly as employees and rows change"
  ],
  keyConcepts: [
    "Structured references (Table[Column]) and named ranges",
    "XLOOKUP with if_not_found for safe table mapping",
    "SUMPRODUCT for tiered/overtime calculations",
    "Data validation and audit flags for reliability"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Textbook-first explanation with interactive checks and validation practice"
  ],
  rationale: "Students deepen Lesson04 skills by building a resilient payroll system that scales, protects cash flow, and earns investor trust.",
  status: "Draft"
}

export const unit05Data = {
  id: "unit05",
  title: "PayDay Simulator",
  sequence: 5
}

// Lesson phases from MCP curriculum database
export const lesson05Phases = [
  {
    id: "phase_hook_5",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Stress‑test fragile vs robust payroll models to protect investor trust",
  },
  {
    id: "phase_introduction_5",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Professional‑grade automation patterns, constraints, and gotchas for payroll",
  },
  {
    id: "phase_guided_practice_5",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Implement mapping, overtime, and validation checks step‑by‑step",
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
