// Data-Driven Café, Lesson 7 data - extracted from MCP curriculum database
export const lesson07Data = {
  id: "mds5vu0cmuyzd6czgp",
  title: "Production Studio: Model Completion, QA, and Presentation",
  sequence: 7,
  unitId: "mdrhlhv2yok8auw4s3s",
  learningObjectives: [
    "Complete the forecasting model and remove hard‑coded outputs",
    "Enforce exact‑match lookups with IFNA/IFERROR and clear messages",
    "Bind charts to structured references and verify reconciliation checks",
    "Publish an investor‑ready one‑screen dashboard and executive summary"
  ],
  keyConcepts: [
    "Named ranges and structured references",
    "XLOOKUP / INDEX‑MATCH (exact match) with IFNA/IFERROR",
    "Validation and reconciliation for auditability",
    "KPI thresholds driving decision‑ready summaries"
  ],
  durationEstimateMinutes: 50,
  pedagogicalApproach: [
    "Production‑style sprint with standards, QA, peer audit, and presentation readiness"
  ],
  rationale:
    "Students harden the Unit 04 café forecasting model for real stakeholders by enforcing exact references, documenting assumptions, and packaging insights for fast investor review.",
  status: "Draft"
}

export const unit04Data = {
  id: "mdrhlhv2yok8auw4s3s",
  title: "Data-Driven Café",
  sequence: 4
}

// Lesson phases from MCP curriculum database
export const lesson07Phases = [
  {
    id: "phase_hook_7",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Production kickoff and stakes: investor expects an audit‑ready forecast today",
    // component: "ComprehensionCheck" – Standards quick check
  },
  {
    id: "phase_introduction_7",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Standards, Definition of Done checklist, and short build plan",
    // component: "FillInTheBlank" – Vocabulary on lookups, validation, reconciliation
  },
  {
    id: "phase_guided_practice_7",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Production Sprint I: Finish core links, enforce exact lookups, no hard‑codes",
    // component: "ErrorCheckingSystem" – Initial rules and safeguards
  },
  {
    id: "phase_independent_practice_7",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Production Sprint II: QA + reconciliation, visuals bound to tables, executive summary",
    // component: "FinancialDashboard" – Visual verification and KPI readout
  },
  {
    id: "phase_assessment_7",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "QA review + peer audit with checklist; mini comprehension check on tradeoffs",
    // component: "PeerCritiqueForm" – Peer audit capture
  },
  {
    id: "phase_closing_7",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Synthesis, readiness check, CAP reflection, preview to Lesson08",
    // component: "ReflectionJournal" – CAP prompts
  }
]
