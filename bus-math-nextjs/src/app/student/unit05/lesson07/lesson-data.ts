// PayDay Simulator, Lesson 7 data - extracted from MCP curriculum database
export const lesson07Data = {
  id: "mds5w754qfq7uvh9icq",
  title: "Production Completion: Payroll QA, Reconciliation, and Presentation",
  sequence: 7,
  unitId: "mdrhlhv3ixkn2gykua",
  learningObjectives: [
    "Finish the payroll model with exact‑match lookups and structured references",
    "Validate inputs and implement error handling with clear user messages",
    "Reconcile bank vs. payroll register and explain timing differences",
    "Bind visuals to tables and draft an executive summary tied to KPI thresholds",
    "Demonstrate investor‑readiness through a concise, audit‑ready presentation"
  ],
  keyConcepts: [
    "Exact‑match lookups with IFNA/IFERROR",
    "Named ranges and structured references (Tables)",
    "Validation rules and reconciliation tie‑outs",
    "Scenario drivers (Base/Stretch/Downside) and sensitivity",
    "Dashboard binding and executive summary logic"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Production‑studio flow: build → validate → reconcile → present"
  ],
  rationale:
    "Students complete and harden the payroll system they began in Lessons 04–06, add validation and reconciliation, and prepare a decision‑ready summary for stakeholders.",
  status: "In Progress",
  definitionOfDone: [
    "No hard‑coded outputs; use named ranges and structured references",
    "Exact‑match XLOOKUP or INDEX/MATCH wrapped with IFNA/IFERROR",
    "All charts bind to tables; no fixed A1:C10 ranges",
    "Inputs validated: no negatives where invalid; rates ≤ 100%; fresh AsOfDate",
    "Reconciliation tie‑outs pass (payroll totals, bank vs. register)",
    "No volatile heavy formulas; model responds quickly",
    "Assumptions and version/date noted; no hidden logic",
    "Scenarios update KPIs; executive summary text follows thresholds",
    "Clear user‑facing errors; ErrorCheckingSystem rules pass",
    "Single‑screen dashboard or summary readout is readable and concise"
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
    description: "Capture attention and establish relevance for model completion: 10-employee system & reconciliation",
    // component: "TrialBalance" (id: 1753927426859mh078t2dd) - To show a trial balance with a reconciliation error.
  },
  {
    id: "phase_introduction_7",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Introduce Payroll register reconciliation with bank transactions and connect to business applications",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the concepts.
  },
  {
    id: "phase_guided_practice_7",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Collaborative practice applying Payroll register reconciliation with bank transactions with scaffolded support",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice reconciling a payroll register in a template.
  },
  {
    id: "phase_independent_practice_7",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Complete model construction demonstrating mastery of technical skills",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - To practice reconciling a payroll register in a template.
  },
  {
    id: "phase_assessment_7",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Demonstrate understanding through formative assessment and peer evaluation",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase_closing_7",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Summarize key takeaways and preview connections to upcoming lessons",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
