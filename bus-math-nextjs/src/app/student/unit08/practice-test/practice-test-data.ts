import { unit08Data } from "../lesson01/lesson-data"

export const practiceTestLessonData = {
  id: "unit08-practice-test",
  title: "Unit 8 Practice Test: Depreciation Mastery",
  sequence: 11,
  unitId: unit08Data.id
}

export const practiceTestPhases = [
  {
    id: "unit08-practice-test-phase-1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Set the scene for a board meeting where Sarah needs to defend TechStart's depreciation policy."
  },
  {
    id: "unit08-practice-test-phase-2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Review the practice-test format, adjust the filters, and lock in a question mix that matches the depreciation skills you need most."
  },
  {
    id: "unit08-practice-test-phase-3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Warm up with strategy tips and checkpoints that mirror the support Sarah leans on before the board meeting."
  },
  {
    id: "unit08-practice-test-phase-4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Work through your personalized practice set. Track timing, flag tough items, and act like the lead asset accountant."
  },
  {
    id: "unit08-practice-test-phase-5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Score your performance instantly, read explanations, and pull insights that keep TechStart's asset tracking credible."
  },
  {
    id: "unit08-practice-test-phase-6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Capture reflections, celebrate progress, and set a next-step focus before the next milestone."
  }
] as const

export type PracticeTestPhase = (typeof practiceTestPhases)[number]

export { unit08Data }
