import { StudentUnitOverview } from "@/components/student/StudentUnitOverview"
// Pull canonical lesson data directly from implemented lesson files to avoid drift
import { lesson01Data } from "./lesson01/lesson-data"
import { lesson02Data } from "./lesson02/lesson-data"
import { lesson03Data } from "./lesson03/lesson-data"
import { lesson04Data } from "./lesson04/lesson-data"
import { lesson05Data } from "./lesson05/lesson-data"
import { lesson06Data } from "./lesson06/lesson-data"
import { lesson07Data } from "./lesson07/lesson-data"
import { lesson08Data } from "./lesson08/lesson-data"
import { lesson09Data } from "./lesson09/lesson-data"
import { lesson10Data } from "./lesson10/lesson-data"

const unit02Data = {
  id: "mdrhkhm79v8qau43696",
  title: "Unit 2: Month-End Wizard",
  description: "What automation can cut our month-end closing time from two days to two hours without sacrificing GAAP accuracy?",
  rationale: "Students will experience the real cost of slow month-end closes and learn to build automated solutions that maintain accounting accuracy while dramatically improving efficiency.",
  sequence: 2
}

// Assemble the lessons list from canonical lesson data exports
const unit02Lessons = [
  lesson01Data,
  lesson02Data,
  lesson03Data,
  lesson04Data,
  lesson05Data,
  lesson06Data,
  lesson07Data,
  lesson08Data,
  lesson09Data,
  lesson10Data,
].sort((a, b) => (a.sequence ?? 0) - (b.sequence ?? 0))
  .map(ld => ({
    title: ld.title,
    keyConcepts: ld.keyConcepts,
    learningObjectives: ld.learningObjectives,
    durationEstimateMinutes: ld.durationEstimateMinutes ?? 45,
  }))

export default function Unit02Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentUnitOverview unit={unit02Data} lessons={unit02Lessons} />
    </div>
  )
}
