import { StudentUnitOverview } from "@/components/student/StudentUnitOverview"
// Derive lessons from canonical lesson data to avoid drift
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

const unit03Data = {
  id: "mdrhlhuxj2zkbimaqfd",
  title: "Unit 3: Three-Statement Storyboard",
  description: "How do today's journal entries flow into a narrative of profit, solvency, and cash health that investors can trust?",
  rationale: "Students will dissect real company financial statements and map narrative threads to specific line items, creating a comprehensive financial story for investors.",
  sequence: 3
}

const unit03Lessons = [
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

export default function Unit03Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentUnitOverview unit={unit03Data} lessons={unit03Lessons} />
    </div>
  )
}
