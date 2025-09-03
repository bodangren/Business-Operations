// Three-Statement Storyboard, Lesson 7 data - extracted from MCP curriculum database
export const lesson07Data = {
  id: "mds5viab1kdrr0r5bqv",
  title: "Production Studio: Model Completion, QA, and Presentation",
  sequence: 7,
  unitId: "mdrhlhuxj2zkbimaqfd",
  learningObjectives: [
    "Complete the three-statement model and remove hard‑coded outputs",
    "Implement exact‑match lookups with error handling (IFNA/IFERROR)",
    "Bind visuals to structured references and verify reconciliation tie‑outs",
    "Produce an investor‑ready one‑screen dashboard and executive summary"
  ],
  keyConcepts: [
    "Named ranges and structured references",
    "XLOOKUP / INDEX‑MATCH with exact match + IFNA/IFERROR",
    "Validation and reconciliation checks for auditability",
    "KPI thresholds driving decision‑ready narratives"
  ],
  durationEstimateMinutes: 50,
  pedagogicalApproach: [
    "Production‑style sprint with standards, QA, peer audit, and presentation readiness"
  ],
  rationale: "Students harden the Unit 03 model for real stakeholders by enforcing exact references, adding visible controls, and packaging insights for fast investor review.",
  status: "Draft"
}

export const unit03Data = {
  id: "mdrhlhuxj2zkbimaqfd",
  title: "Three-Statement Storyboard",
  sequence: 3
}

// Lesson phases from MCP curriculum database
export const lesson07Phases = [
  {
    id: "phase_hook_7",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Production kickoff and stakes: investor expects an audit‑ready model today",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) – Standards quick check
  },
  {
    id: "phase_introduction_7",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Standards, Definition of Done checklist, and short build plan",
    // component: "FillInTheBlank" (id: 175392777770z3y8kqv) – Vocabulary on lookups, validation, reconciliation
  },
  {
    id: "phase_guided_practice_7",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Production Sprint I: Finish core links, enforce exact lookups, no hard‑codes",
    // component: "ErrorCheckingSystem" (id: mdsjne6632yk82ynnc5) – Initial rules and safeguards
  },
  {
    id: "phase_independent_practice_7",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Production Sprint II: QA + reconciliation, visuals bound to tables, executive summary",
    // component: "FinancialDashboard" (id: 1753927800dash) – Visual verification
  },
  {
    id: "phase_assessment_7",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "QA review + peer audit with checklist; mini comprehension check on tradeoffs",
    // component: "PeerCritiqueForm" (id: mdsjc6yna3g4dehzbnd) – Peer audit capture
  },
  {
    id: "phase_closing_7",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Synthesis, readiness check, CAP reflection, preview to Lesson08",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) – CAP prompts
  }
]
