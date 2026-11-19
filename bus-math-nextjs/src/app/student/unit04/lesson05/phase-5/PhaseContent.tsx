import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { getUnit04Phase5ComprehensionCheckItems } from "@/data/question-banks/unit04-phase5"

const questions = getUnit04Phase5ComprehensionCheckItems({ lessonIds: ["lesson05"] })

/** @returns The exit ticket for Lesson 5. */
export default function Phase5Content() {
  return <ComprehensionCheck title="Lesson 5 Exit Ticket" questions={questions} />
}
