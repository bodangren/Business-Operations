// Unit 1, Lesson 3 data - extracted from MCP curriculum database
export const lesson03Data = {
  id: "mds5t7qrc36pdfr61an",
  title: "Core Concepts: Debit & Credit Rules",
  sequence: 3,
  unitId: "mdrha5ziiupuou6dqt",
  learningObjectives: [
    "Master debit and credit rules for all account types",
    "Record TechStart Solutions transactions using proper debit/credit format",
    "Verify that total debits equal total credits in all journal entries",
    "Create accurate T-accounts for transaction analysis"
  ],
  keyConcepts: [
    "Debit and credit rules by account type",
    "T-account structure and organization",
    "Journal entry construction and format",
    "Transaction recording verification",
    "TechStart Solutions chart of accounts"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "T-account visual demonstrations",
    "Guided practice with TechStart transactions",
    "Partner verification of journal entries",
    "Progressive skill building"
  ],
  rationale: "This lesson teaches the fundamental debit/credit rules that are essential for accurate ledger construction and transaction recording.",
  status: "Draft"
}

export const unit01Data = {
  id: "mdrha5ziiupuou6dqt",
  title: "Unit 1: Smart Ledger Launch",
  sequence: 1
}

// Lesson phases from MCP curriculum database
export const lesson03Phases = [
  {
    id: "phase03-hook",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Discover the logic behind debit and credit rules through T-account visualization and account type patterns"
  },
  {
    id: "phase03-intro", 
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Learn systematic debit/credit rules for assets, liabilities, equity, revenue, and expense accounts"
  },
  {
    id: "phase03-guided",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Practice recording TechStart transactions in T-accounts and journal entry format"
  },
  {
    id: "phase03-independent",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Create journal entries independently and verify debit/credit balance for complex transactions"
  },
  {
    id: "phase03-assessment",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Complete formative assessment on debit/credit rules and T-account construction"
  },
  {
    id: "phase03-closing",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on debit/credit mastery and preview Excel implementation of ledger systems"
  }
]