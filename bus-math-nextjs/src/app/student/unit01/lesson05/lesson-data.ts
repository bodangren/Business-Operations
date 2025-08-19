// Unit 1, Lesson 5 data - extracted from MCP curriculum database
export const lesson05Data = {
  id: "mds5t7qth7rdjsqegg",
  title: "Advanced Ledger Automation: Dynamic Trial Balance & Posting Validator",
  sequence: 5,
  unitId: "mdrha5ziiupuou6dqt",
  learningObjectives: [
    "Automate posting validation using structured references and SUMIFS across tables",
    "Use XLOOKUP with IFERROR for robust account mapping and missing-ID checks",
    "Build dynamic trial balance controls that flag out-of-balance states instantly",
    "Implement professional data validation (lists, ranges, stale dates, negative values)",
    "Stress test the model with edge cases to prove investor-ready reliability"
  ],
  keyConcepts: [
    "Structured References (Table[Column])",
    "XLOOKUP with IFERROR and validation",
    "SUMIFS and SUMPRODUCT for ledger checks",
    "Dynamic method switching (cash vs accrual)",
    "Audit trails and self-auditing controls"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Demonstration of advanced automation patterns",
    "Guided build of validation and control formulas",
    "Independent stress testing with edge cases",
    "Professional documentation and auditability standards"
  ],
  rationale: "Students deepen Lesson04 skills by building a self-auditing ledger with dynamic trial balance and robust validation. This reliability builds investor trust and prepares the model for growth.",
  status: "Draft"
}

export const unit01Data = {
  id: "mdrha5ziiupuou6dqt",
  title: "Unit 1: Smart Ledger Launch",
  sequence: 1
}

// Lesson phases from MCP curriculum database
export const lesson05Phases = [
  {
    id: "phase05-hook",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "See a fragile ledger fail under stress—then watch a dynamic, self-auditing build catch issues instantly.",
    // component: "ComprehensionCheck" for diagnostic/prediction questions
  },
  {
    id: "phase05-intro", 
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Deep dive on XLOOKUP error handling, SUMIFS controls, and structured references for professional-grade automation.",
    // component: "FillInTheBlank" for advanced vocabulary
  },
  {
    id: "phase05-guided",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Build Sarah’s posting validator and trial balance checks step-by-step with safeguards and documentation.",
    // component: "ErrorCheckingSystem" for validation logic practice
  },
  {
    id: "phase05-independent",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Download advanced practice data with edge cases; implement dynamic updates and document your checks.",
    // dataset: public/resources/unit01-ledger-advanced-practice.csv
  },
  {
    id: "phase05-assessment",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Professional mastery assessment: technical knowledge + applied business judgment for investor-readiness.",
    // component: "ComprehensionCheck" with 8–10 comprehensive questions
  },
  {
    id: "phase05-closing",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Synthesize wins and reliability improvements; reflect on CAP skills; preview Lesson06 integration.",
    // component: "ReflectionJournal"
  }
]
