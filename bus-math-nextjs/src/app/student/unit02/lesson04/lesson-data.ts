// Unit 2, Lesson 4 data - Complete Manual Month-End Flow
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit02Data = UNIT_REF_MAP[2]
export const lesson04Data = {
  id: "unit02_lesson04",
  title: "Complete Manual Month-End Flow",
  sequence: 4,
  unitId: "unit02",
  learningObjectives: [
    "Walk through the complete month-end close in the correct order",
    "Identify and record all required recurring adjustments including depreciation",
    "Use a month-end close checklist to ensure no steps are missed",
    "Explain how each adjustment affects the financial statements"
  ],
  keyConcepts: [
    "The month-end close workflow from unadjusted trial balance to post-closing trial balance",
    "Recurring adjustments: accruals, deferrals, depreciation, and other month-end entries",
    "Checklists and flow diagrams as control tools for accurate closing",
    "How the complete close prepares the books for the next period"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Textbook-first instruction with concrete TechStart scenarios",
    "Progressive scaffold fade from guided checklists to independent close routines",
    "Algorithmic deliberate practice on the full month-end sequence"
  ],
  rationale: "Students must master the complete manual month-end flow before any automation is introduced. This lesson ties together adjusting entries, closing entries, and recurring adjustments into one ordered workflow so students understand what the automation will eventually replace.",
  status: "Draft"
}


// Lesson phases (standard 6-phase structure for accounting-principles lessons)
export const lesson04Phases = [
  {
    id: "phase-1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Reconnect to closing entries and surface the need for a complete close workflow",
  },
  {
    id: "phase-2", 
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "The month-end close workflow: step-by-step procedure with checklists and flow diagrams",
  },
  {
    id: "phase-3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Complex adjustments and reduced scaffolding with authentic accounting notation",
  },
  {
    id: "phase-4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Repeated manual close routine with algorithmic variation and mastery tracking",
  },
  {
    id: "phase-5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "MCQ exit ticket on month-end close workflow, adjustments, and misconceptions",
  },
  {
    id: "phase-6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on the complete close and preview the first Excel build lesson",
  }
]
