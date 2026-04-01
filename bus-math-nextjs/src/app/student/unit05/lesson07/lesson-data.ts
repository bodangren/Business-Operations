// PayDay Simulator, Lesson 7 data - extracted from MCP curriculum database
export const lesson07Data = {
  id: "mds5w754qfq7uvh9icq",
  title: "Project Rehearsal: Shared Payroll Workbook Audit",
  sequence: 7,
  unitId: "mdrhlhv3ixkn2gykua",
  learningObjectives: [
    "Use the shared teacher workbook to rehearse the exact structure required for the group project",
    "Audit the payroll workbook for accuracy, evidence, and clarity",
    "Trace each recommendation back to supporting calculations",
    "Identify which features must transfer to your team's independent workbook",
    "Apply peer critique using the Definition of Done"
  ],
  keyConcepts: [
    "Shared workbook structure (teacher and student use same data)",
    "Evidence chain from calculations to recommendations",
    "Reconciliation between payroll register and bank statements",
    "Definition of Done for payroll project quality",
    "Transfer readiness for independent project work"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Guided rehearsal: same data, same structure, teacher‑guided audit"
  ],
  rationale:
    "Lesson 07 serves as the final guided rehearsal before the group project. Every group uses the same teacher workbook today so the class can compare reasoning and quality directly. Students leave knowing exactly which structures, checks, and communication moves they must carry forward into their independent work in Lessons 08–10.",
  status: "In Progress",
  definitionOfDone: [
    "Payroll calculations accurate for all 10 employees",
    "Reconciliation tie‑outs pass (register totals = bank totals within $0.01)",
    "Executive summary states one clear recommendation with supporting evidence",
    "Validation rules catch invalid inputs (negative hours, rates > 100%, stale dates)",
    "Charts bind to Tables using structured references (no fixed ranges)",
    "Clear error messages on lookup failures (IFNA/IFERROR with user guidance)"
  ]
}

export const unit05Data = {
  id: "mdrhlhv3ixkn2gykua",
  title: "PayDay Simulator",
  sequence: 5
}

// Lesson phases from MCP curriculum database
export const lesson07Phases = [
  {
    id: "phase_hook_7",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Frame the lesson as a final guided rehearsal before the group project; explain why every group uses the same data today",
  },
  {
    id: "phase_introduction_7",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Present the shared workbook download path, name each sheet and evidence block, define success criteria",
  },
  {
    id: "phase_guided_practice_7",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Trace the logic chain from raw data through calculations to the final recommendation; identify what makes evidence weak",
  },
  {
    id: "phase_independent_practice_7",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Complete weak spots in the shared workbook, write one recommendation + risk statement, name what transfers to project",
  },
  {
    id: "phase_assessment_7",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Apply peer audit using Definition of Done; identify one strength and one improvement",
  },
  {
    id: "phase_closing_7",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on what must carry into the project; explain what changes when students get their own scenario",
  }
]
