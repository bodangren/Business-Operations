// Unit 1, Lesson 2 data - extracted from MCP curriculum database
export const lesson02Data = {
  id: "mds5t7qqo8d6q2al4v",
  title: "Core Concepts: The Accounting Equation",
  sequence: 2,
  unitId: "mdrha5ziiupuou6dqt",
  learningObjectives: [
    "Apply accounting equation (Assets = Liabilities + Equity) to business transactions",
    "Identify transaction effects on each component of the accounting equation",
    "Explain the universal nature of the accounting equation across all businesses",
    "Connect accounting equation principles to Sarah's TechStart Solutions context"
  ],
  keyConcepts: [
    "Accounting equation (Assets = Liabilities + Equity)",
    "Transaction analysis and effects on equation components",
    "Asset, liability, and equity identification",
    "Mathematical balance verification"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Direct instruction with visual aids",
    "Guided practice with TechStart scenarios",
    "Partner verification activities",
    "Real-world context application"
  ],
  rationale: "This lesson establishes the fundamental accounting equation that forms the foundation for all ledger work and financial statement preparation.",
  status: "Draft"
}

export const unit01Data = {
  id: "mdrha5ziiupuou6dqt",
  title: "Unit 1: Smart Ledger Launch",
  sequence: 1
}

// Lesson phases from MCP curriculum database
export const lesson02Phases = [
  {
    id: "phase02-hook",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Explore the accounting equation through Sarah's business balance and discover why every transaction must balance"
  },
  {
    id: "phase02-intro", 
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Learn the universal accounting equation and understand how it applies to all business transactions"
  },
  {
    id: "phase02-guided",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Practice identifying how TechStart transactions affect assets, liabilities, and equity components"
  },
  {
    id: "phase02-independent",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Analyze complex transactions independently and verify mathematical balance"
  },
  {
    id: "phase02-assessment",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Complete formative assessment on accounting equation application and transaction analysis"
  },
  {
    id: "phase02-closing",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on the accounting equation's role in maintaining financial accuracy and preview debit/credit rules"
  }
]