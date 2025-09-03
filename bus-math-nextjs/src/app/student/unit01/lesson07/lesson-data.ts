// Unit 1, Lesson 7 data - extracted from MCP curriculum database
export const lesson07Data = {
  id: "mds5t7qyamtivn9oq6",
  title: "Production Studio: Complete • QA • Present",
  sequence: 7,
  unitId: "mdrha5ziiupuou6dqt",
  learningObjectives: [
    "Finish the Smart Ledger model with exact-match lookups and structured references",
    "Apply error handling (IFNA/IFERROR) and build a clear reconciliation trail",
    "Validate inputs and performance; ensure chart links use tables (no static ranges)",
    "Demonstrate investor-ready communication with an executive summary and peer audit"
  ],
  keyConcepts: [
    "Definition of Done checklist",
    "Exact-match lookups (XLOOKUP or INDEX/MATCH)",
    "Structured references and named ranges",
    "QA, reconciliation, and auditability",
    "Scenario behavior and threshold-driven summaries"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Production sprints with standards-based QA",
    "Peer audit against a published checklist",
    "Formative checks embedded in the flow",
    "Presentation readiness and decision-focused outputs"
  ],
  rationale: "Students complete the ledger system started in Lessons 04–06, harden it with validation and reconciliation, and prepare concise, decision-ready outputs that inspire investor confidence.",
  status: "Draft"
}

export const unit01Data = {
  id: "mdrha5ziiupuou6dqt",
  title: "Unit 1: Smart Ledger Launch",
  sequence: 1
}

// Lesson phases from MCP curriculum database
export const lesson07Phases = [
  {
    id: "phase07-hook",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Production kickoff: stakes, standards, and what investor-ready means",
    // component: "StudentChoices" (id: 1753928158697pz6b4sjet) - To allow students to select their business venture.
  },
  {
    id: "phase07-intro", 
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Standards, plan, and Definition of Done checklist for completion and QA",
    // component: "AssessmentOverview" (id: 1753928098855pkynqh56h) - To review the rubric and expectations.
  },
  {
    id: "phase07-guided",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Production Sprint I: build core links and enforce exact-match lookups",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - Students can use a blank template to start their work.
  },
  {
    id: "phase07-independent",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Production Sprint II: validation, reconciliation, visuals, and executive summary",
    // component: "SpreadsheetTemplates" (id: 17539277832972t3mivyfi) - Students continue their work.
  },
  {
    id: "phase07-assessment",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "QA review and structured peer audit against investor-ready standards",
    // component: "PeerCritiqueForm" (id: mdsjc6yna3g4dehzbnd) - To guide the peer review process.
  },
  {
    id: "phase07-closing",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Readiness reflection and handoff to Lesson 08 (final polish)",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]
