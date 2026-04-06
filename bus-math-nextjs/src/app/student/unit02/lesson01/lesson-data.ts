// Unit 2, Lesson 1 data - extracted from MCP curriculum database
import { UNIT_REF_MAP } from "@/data/unit-registry"
export const unit02Data = UNIT_REF_MAP[2]
export const lesson01Data = {
  id: "mds5v4twc0o3z3l8ecg",
  title: "Launch: The Month-End Closing Crisis",
  sequence: 1,
  unitId: "mdrhkhm79v8qau43696",
  learningObjectives: [
    "Understand why delayed month-end closing hurts a growing business",
    "Identify the month-end close workflow scoreboard: timing, accuracy, compliance",
    "Explain the business consequences of manual closing processes",
    "Recognize what adjustments make month-end closing necessary"
  ],
  keyConcepts: [
    "Month-end closing workflow as a business-control process",
    "Timing differences between cash and accrual accounting",
    "Adjusting entries: accruals and deferrals",
    "Closing entries reset temporary accounts",
    "Business impact of delayed financial reporting"
  ],
  durationEstimateMinutes: 45,
  pedagogicalApproach: [
    "Launch the month-end close crisis through Sarah's founder story",
    "Establish the unit scoreboard before teaching procedures",
    "Create business urgency around timely closing"
  ],
  rationale: "To establish the founder problem and unit scoreboard before teaching accounting procedures or automation.",
  status: "Complete"
}


// Lesson phases (standard 6-phase structure)
export const lesson01Phases = [
  {
    id: "phase-1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Experience the chaos of manual month-end closing through an interactive CFO crisis scenario",
    // component: "Lesson01Phase1" (id: mdwl1ovg1rb2fimw7zj) - To introduce the month-end challenge with a video and comprehension questions.
  },
  {
    id: "phase-2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Learn about month-end closing challenges and the business case for automation",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - To assess understanding of the introductory text.
  },
  {
    id: "phase-3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Explore GAAP requirements for accruals, deferrals, and adjusting entries",
    // component: "JournalEntry" (id: 1753927405954gyryagjje) - To show examples of adjusting entries.
  },
  {
    id: "phase-4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Analyze month-end procedures and identify automation opportunities",
    // component: "BusinessTransactionCategorization" (id: 175392755383120ix5iu91) - To practice categorizing transactions that will require adjusting entries.
  },
  {
    id: "phase-5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Complete formative assessment on month-end closing concepts and GAAP compliance",
    // component: "ComprehensionCheck" (id: 1753927633396e4osrw16s) - A quiz to assess learning objectives.
  },
  {
    id: "phase-6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on the competitive advantage of automated financial processes",
    // component: "ReflectionJournal" (id: 17539344847679d0wbeyuw) - To guide student reflection on the lesson.
  }
]