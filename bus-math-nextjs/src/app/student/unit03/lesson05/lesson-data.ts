// Unit03 Lesson05 — Build Cross-Sheet Links and Statement Checks
export const lesson05Data = {
  id: "unit03_lesson05_cross_sheet",
  title: "Link the Three Statements: Cross‑Sheet References and Integrity Checks",
  sequence: 5,
  unitId: "mdrhlhuxj2zkbimaqfd",
  learningObjectives: [
    "Link Net Income from the Income Statement into Retained Earnings on the Balance Sheet",
    "Link Balance Sheet cash into the Cash Flow Statement ending cash",
    "Build visible integrity checks that prove the three statements tie together",
    "Explain how a change on one statement ripples through the others"
  ],
  keyConcepts: [
    "Cross‑sheet references (e.g., ='Income Statement'!B12) pull values between tabs",
    "Named ranges make cross‑sheet formulas readable and harder to break",
    "Integrity checks (A=L+E, NI→RE, cash tie) prove the model is correct",
    "One change should ripple through all three statements automatically"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Excel‑lesson skill: business pressure → tool anatomy → safe rehearsal → workbook sprint → audit → reflection"
  ],
  rationale: "Students move from building individual statements (Lessons 02–04) to linking them into one model. Cross‑sheet links are the backbone of any three‑statement financial model.",
  status: "Draft"
}

export const unit03Data = {
  id: "mdrhlhuxj2zkbimaqfd",
  title: "Three-Statement Storyboard",
  sequence: 3
}

// Lesson phases following the excel-lessons skill contract
export const lesson05Phases = [
  {
    id: "phase_tool_pressure_5",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Open with a business scenario where linked statements matter for investor confidence",
  },
  {
    id: "phase_tool_anatomy_5",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Name cross‑sheet linking patterns, explain parts, teach common failure modes",
  },
  {
    id: "phase_safe_rehearsal_5",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Practice linking logic in a simulator before touching the live workbook",
  },
  {
    id: "phase_workbook_sprint_5",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Build cross‑sheet links and statement checks in the real workbook",
  },
  {
    id: "phase_audit_explain_5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Technical check and brief artifact task on trustworthiness and communication",
  },
  {
    id: "phase_reflection_5",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on tool use, name what is faster now, preview next workbook layer",
  }
]
