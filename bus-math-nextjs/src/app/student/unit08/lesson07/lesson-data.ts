// Year‑1 Startup Model, Lesson 7 data - extracted from MCP curriculum database
export const lesson07Data = {
  id: "mds5xnqgno2padjpi9",
  title: "Production Studio: Completion, QA, and Investor Readiness",
  sequence: 7,
  unitId: "mdrhlhv53tduw0ib5oa",
  learningObjectives: [
    "Complete the Year‑1 startup model with exact references and no hard‑coded outputs",
    "Implement validation, reconciliation, and error handling for reliability",
    "Bind visuals to structured references and write an executive summary tied to KPI thresholds",
    "Conduct and document a peer audit using a professional checklist"
  ],
  keyConcepts: [
    "Named ranges and structured references in Excel Tables",
    "Exact‑match lookups (XLOOKUP or INDEX/MATCH) with IFNA/IFERROR",
    "Reconciliation tie‑outs and auditability (assumptions, version date)",
    "Scenario behavior and performance (non‑volatile functions, responsive updates)"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Production studio flow: build → validate → visualize → audit → present"
  ],
  rationale: "Students finish and harden their financial model so an investor can trust it. They verify links, add error checks, reconcile totals, and present a concise, decision‑ready dashboard.",
  status: "Ready"
}

export const unit08Data = {
  id: "mdrhlhv53tduw0ib5oa",
  title: "Year‑1 Startup Model",
  sequence: 8
}

// Lesson phases from MCP curriculum database
export const lesson07Phases = [
  {
    id: "phase_hook_7",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Production kickoff: why investor‑ready quality matters today; failures vs. ready model",
    // component: "FinancialDashboard" (id: 1753927517567kkux0mq2b) - To show an example of a professional financial model.
  },
  {
    id: "phase_introduction_7",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Standards and Definition of Done: exact lookups, structured refs, validation, reconciliation, auditability",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_7",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Production Sprint I: finish core formulas, enforce exact‑match lookups, convert ranges to Tables",
    // component: "PeerCritiqueForm" (id: mdsjc6yna3g4dehzbnd) - To guide the peer audit process.
  },
  {
    id: "phase_independent_practice_7",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Production Sprint II: QA + visuals; finalize validation, reconciliation, and executive summary",
    // component: "PeerCritiqueForm" (id: mdsjc6yna3g4dehzbnd) - To guide the peer audit process.
  },
  {
    id: "phase_assessment_7",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "QA review and peer audit: apply the checklist and justify audit decisions",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase_closing_7",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Readiness, reflection, handoff: investor‑ready standards and preview of Lesson08",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
