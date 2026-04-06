// Unit 2, Lesson 3 data - Closing Entries
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit02Data = UNIT_REF_MAP[2]
export const lesson03Data = {
  id: "mds5v4u1inmd8zoj1fi",
  title: "Closing Entries: Resetting Temporary Accounts",
  sequence: 3,
  unitId: "mdrhkhm79v8qau43696",
  learningObjectives: [
    "Identify which accounts are temporary and which are permanent",
    "Explain why closing entries are necessary at the end of each accounting period",
    "Prepare closing entries to zero out revenue, expense, and dividend accounts",
    "Post closing entries to update Retained Earnings"
  ],
  keyConcepts: [
    "Temporary accounts (revenues, expenses, dividends) track activity for one period only",
    "Permanent accounts (assets, liabilities, equity) carry balances forward",
    "The Income Summary account is a temporary clearing account used only during closing",
    "Closing entries transfer net income or loss to Retained Earnings"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Concrete-to-abstract progression from business story to journal-entry format",
    "T-account visual supports before abstract journal notation",
    "Algorithmic deliberate practice on closing-entry procedure"
  ],
  rationale: "Students must understand why and how temporary accounts are reset before they can build an automated closing-entry system in later lessons.",
  status: "Draft"
}


// Lesson phases (standard 6-phase structure)
export const lesson03Phases = [
  {
    id: "phase-1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Discover why Sarah's revenue and expense accounts must be reset after March",
  },
  {
    id: "phase-2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Learn the closing-entry procedure step by step with T-account supports",
  },
  {
    id: "phase-3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Close a more complex set of accounts with reduced scaffolding",
  },
  {
    id: "phase-4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Algorithmic deliberate practice on closing entries until mastery",
  },
  {
    id: "phase-5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "MCQ exit ticket on temporary vs permanent accounts and closing-entry logic",
  },
  {
    id: "phase-6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on closing-entry mastery and preview the full month-end checklist",
  }
]