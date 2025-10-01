import { unit05Data as importedUnit05Data } from "../lesson01/lesson-data"

export const unit05Data = importedUnit05Data

export const practiceTestLessonData = {
  id: "unit05-practice-test",
  title: "Unit 5 Practice Test: Payroll Mastery",
  sequence: 11,
  unitId: unit05Data.id
}

export const practiceTestPhases = [
  {
    id: "unit05-practice-test-phase-1",
    phaseName: "Hook" as const,
    sequence: 1,
    description: "Set the scene for Sarah's payroll demo and preview how this practice test sharpens your payroll confidence."
  },
  {
    id: "unit05-practice-test-phase-2",
    phaseName: "Introduction" as const,
    sequence: 2,
    description: "Review the practice-test format, adjust the filters, and lock in a question mix that matches the skills you need most."
  },
  {
    id: "unit05-practice-test-phase-3",
    phaseName: "Guided Practice" as const,
    sequence: 3,
    description: "Warm up with strategy tips and checkpoints that keep your payroll instincts sharp during the test."
  },
  {
    id: "unit05-practice-test-phase-4",
    phaseName: "Independent Practice" as const,
    sequence: 4,
    description: "Launch the test, answer randomized questions, and track your mastery with automatic scoring and explanations."
  },
  {
    id: "unit05-practice-test-phase-5",
    phaseName: "Assessment" as const,
    sequence: 5,
    description: "Review your score breakdown and identify the lessons that need another pass before the next check-in."
  },
  {
    id: "unit05-practice-test-phase-6",
    phaseName: "Closing" as const,
    sequence: 6,
    description: "Reflect on your payroll readiness and plan the next improvement sprint to keep your skills investor-ready."
  }
]
