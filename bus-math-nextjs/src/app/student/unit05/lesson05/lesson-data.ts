// Unit05 Lesson05 — Advanced Excel Automation for Payroll (PayDay Simulator)
export const lesson05Data = {
  id: "unit05_lesson05_schedule",
  title: "Schedule-to-Pay: Building the Weekly Labor Engine",
  sequence: 5,
  unitId: "unit05",
  learningObjectives: [
    "Design a normalized Employee Roster with availability, roles, and hourly rates that feeds the rest of the workbook",
    "Draft a visual weekly schedule for a medium restaurant or grocery team using dropdowns and conditional formatting",
    "Convert scheduled shifts into total hours, overtime flags, and gross pay using SUMIFS and overtime logic",
    "Explain how accurate scheduling protects payroll promises, prevents overtime surprises, and keeps cash predictable"
  ],
  keyConcepts: [
    "Structured tables and named ranges shared across sheets",
    "Data validation lists and conditional formatting for schedule accuracy",
    "SUMIFS and pivot-style summaries to total hours by person or department",
    "Overtime logic tying 40+ hours to gross pay calculations"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Excel build with textbook guidance, interactive checks, and data storytelling"
  ],
  rationale: "Students extend the Lesson04 roster into a living schedule so Sarah can plan labor, monitor overtime risk, and flow clean numbers into the Payday Simulator.",
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
