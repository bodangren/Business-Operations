// Unit 1, Lesson 5 data
export const lesson05Data = {
  id: "mds5t7qth7rdjsqegg",
  title: "Build Self-Auditing Formulas and Error Flags",
  sequence: 5,
  unitId: "mdrha5ziiupuou6dqt",
  learningObjectives: [
    "Build SUMIF formulas to calculate account totals automatically",
    "Create debit/credit balance checks that flag out-of-balance states",
    "Add red-flag formulas that highlight common posting errors",
    "Document audit controls so reviewers can verify reliability",
    "Explain which self-audit check matters most for investor trust"
  ],
  keyConcepts: [
    "SUMIF for totaling debits and credits by account",
    "Balance verification formulas",
    "Conditional formatting for red flags",
    "Audit trail documentation",
    "Self-auditing workbook design"
  ],
  durationEstimateMinutes: 50,
  pedagogicalApproach: [
    "Business-pressure hook",
    "Tool anatomy explanation",
    "Safe simulator rehearsal",
    "Workbook build sprint",
    "Brief artifact task explaining which check matters most"
  ],
  rationale: "Students build self-auditing formulas that catch common posting errors and verify the trial balance, proving Sarah's ledger is reliable and investor-ready.",
  status: "Draft"
}

export const unit01Data = {
  id: "mdrha5ziiupuou6dqt",
  title: "Unit 1: Smart Ledger Launch",
  sequence: 1
}

// Lesson phases - aligned with excel-lessons skill
export const lesson05Phases = [
  {
    id: "phase05-tool-pressure",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Business scenario where self-auditing matters for investor trust",
  },
  {
    id: "phase05-tool-anatomy",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Self-auditing formula pattern, parts, and common failure modes",
  },
  {
    id: "phase05-safe-rehearsal",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Rehearse formula logic before building in real workbook",
  },
  {
    id: "phase05-workbook-sprint",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Build real Excel workbook with self-auditing formulas and error flags",
  },
  {
    id: "phase05-audit-explain",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Short technical check and brief artifact explaining which check matters most",
  },
  {
    id: "phase05-reflection-handoff",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on tool use and preview investor-facing summary in next lesson"
  },
]
