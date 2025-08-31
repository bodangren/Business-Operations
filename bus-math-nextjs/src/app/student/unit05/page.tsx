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

const unit05Data = {
  id: "mdrhlhv3ixkn2gykua",
  title: "Unit 5: PayDay Simulator",
  description: "How can a small business owner predict payroll cash-outs and still make rent on time?",
  rationale: "Small business owners often struggle with cash flow timing, especially when payroll obligations coincide with other major expenses like rent. Through this unit, you'll build a comprehensive payroll system that helps predict and manage these cash flow challenges.",
  sequence: 5
}

const unit05Lessons = [
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

export default function Unit05Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentUnitOverview unit={unit05Data} lessons={unit05Lessons} />
    </div>
  )
}
