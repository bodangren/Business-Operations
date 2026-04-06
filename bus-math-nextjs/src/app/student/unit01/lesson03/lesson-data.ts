// Unit 1, Lesson 3 data - extracted from MCP curriculum database
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit01Data = UNIT_REF_MAP[1]
export const lesson03Data = {
  id: "mds5t7qrc36pdfr61an",
  title: "Debit, Credit, and Trial Balance",
  sequence: 3,
  unitId: "mdrha5ziiupuou6dqt",
  learningObjectives: [
    "Apply DEA LER rules to determine correct debit/credit entries for all account types",
    "Construct accurate journal entries that maintain balance in every transaction",
    "Post transactions to T-accounts using systematic procedures",
    "Explain why the trial balance must tie out and what errors it detects",
    "Connect manual debit/credit skills to the foundation of Sarah's self-auditing ledger"
  ],
  keyConcepts: [
    "DEA LER mnemonic for debit/credit rules",
    "T-account structure as representational support",
    "Journal entry format and balance verification",
    "Trial balance preparation and interpretation",
    "Double-entry bookkeeping principles"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Concrete-to-Representational-to-Abstract (CRA) progression",
    "Systematic procedure modeling with worked examples",
    "Algorithmic deliberate practice in Phase 4",
    "Exit ticket on debit/credit logic and trial balance",
    "CAP reflection on learning journey"
  ],
  rationale: "This lesson establishes the systematic debit/credit framework that makes Sarah's ledger self-auditing. Students move from understanding the left/right logic to applying it reliably with minimal scaffolding.",
  status: "Active"
}


// Lesson phases from MCP curriculum database
export const lesson03Phases = [
  {
    id: "phase03-hook",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Discover the logic behind debit and credit rules through T-account visualization and account type patterns",
    // component: "TAccountSimple" (id: 1753927420002ucucyllwh) - To visually introduce the T-account structure.
  },
  {
    id: "phase03-intro", 
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Learn systematic debit/credit rules for assets, liabilities, equity, revenue, and expense accounts",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of debit and credit rules.
  },
  {
    id: "phase03-guided",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Practice recording TechStart transactions in T-accounts and journal entry format",
    // component: "JournalEntryBuilding" (id: 1753927672484sg6mzsmy6) - Interactive exercise for creating journal entries.
  },
  {
    id: "phase03-independent",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Create journal entries independently and verify debit/credit balance for complex transactions",
    // component: "TransactionJournal" (id: mdsirjnug8tn2wqhrjt) - Students can independently create and validate journal entries.
  },
  {
    id: "phase03-assessment",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Complete formative assessment on debit/credit rules and T-account construction",
    // component: "TrialBalanceSorting" (id: 1753927612451h1dxmgr2c) - To assess understanding of normal debit and credit balances.
  },
  {
    id: "phase03-closing",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on debit/credit mastery and preview Excel implementation of ledger systems",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]