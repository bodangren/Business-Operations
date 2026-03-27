// Unit 1, Lesson 2 data - extracted from MCP curriculum database
export const lesson02Data = {
  id: "mds5t7qqo8d6q2al4v",
  title: "Classifying Transactions: How Business Events Change the Accounting Equation",
  sequence: 2,
  unitId: "mdrha5ziiupuou6dqt",
  learningObjectives: [
    "Classify business transactions into assets, liabilities, and equity",
    "Explain how each transaction affects the accounting equation components",
    "Apply the accounting equation to verify transaction balance",
    "Connect transaction analysis to Sarah's TechStart Solutions business events"
  ],
  keyConcepts: [
    "Transaction classification into equation components",
    "Double-effect principle (every transaction affects at least two components)",
    "Asset, liability, and equity identification in business events",
    "Equation balance verification after transactions"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Direct instruction with concrete transaction examples",
    "Guided practice with TechStart startup transactions",
    "Algorithmic deliberate practice for fluency",
    "MCQ exit ticket on understanding"
  ],
  rationale: "This lesson teaches students to classify transactions and show how business events move the accounting equation, building fluency before introducing debits and credits.",
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
    description: "Reactivate accounting equation and discover the challenge: how do we track what happens when Sarah's business has complex events?",
    // component: ComprehensionCheck - Quick check on equation recall and problem-framing
  },
  {
    id: "phase02-intro", 
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Learn to classify concrete transactions into assets, liabilities, and equity using Sarah's real business events",
    // component: AccountCategorization - Guided classification with representational supports
  },
  {
    id: "phase02-guided",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Practice analyzing transaction effects with reduced scaffolding and move toward accounting-style representation",
    // component: ComprehensionCheck + structured practice on transaction analysis
  },
  {
    id: "phase02-independent",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Algorithmic deliberate practice: classify and verify equation balance for varied transactions until mastery",
    // component: Deliberate practice component with transaction variation and automatic checking
  },
  {
    id: "phase02-assessment",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "MCQ exit ticket on transaction classification, equation effects, and common misconceptions",
    // component: ComprehensionCheck - Short aligned assessment on knowledge and understanding
  },
  {
    id: "phase02-closing",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on transaction classification skills and preview how debits and credits formalize this work",
    // component: ReflectionJournal - Consolidation and preview
  }
]