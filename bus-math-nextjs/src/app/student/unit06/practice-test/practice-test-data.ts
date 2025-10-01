import { unit06Data } from "../lesson01/lesson-data"

export const practiceTestLessonData = {
  id: "unit06-practice-test",
  title: "Unit 6 Practice Test: Pricing Confidence",
  sequence: 11,
  unitId: unit06Data.id
}

export const practiceTestPhases = [
  {
    id: "unit06-practice-test-phase-1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Set the scene for Sarah's pricing strategy presentation and preview how this practice test keeps your analytical instincts sharp."
  },
  {
    id: "unit06-practice-test-phase-2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Review the practice-test format, adjust the filters, and lock in a question mix that matches the skills you need most."
  },
  {
    id: "unit06-practice-test-phase-3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Warm up with strategy tips and checkpoints that mirror the support Sarah leans on before the real investor Q&A."
  },
  {
    id: "unit06-practice-test-phase-4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Work through your personalized practice set. Track timing, flag tough items, and act like the lead analyst in Sarah's business."
  },
  {
    id: "unit06-practice-test-phase-5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Score your performance instantly, read explanations, and pull insights that keep PriceLab investor-ready."
  },
  {
    id: "unit06-practice-test-phase-6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Capture reflections, celebrate progress, and set a next-step focus before the next sprint checkpoint."
  }
] as const

export type PracticeTestPhase = (typeof practiceTestPhases)[number]

export { unit06Data }
