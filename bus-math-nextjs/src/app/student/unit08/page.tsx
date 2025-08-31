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

const unit08Data = {
  id: "mdrhlhv53tduw0ib5oa",
  title: "Unit 8: Year‑1 Startup Model",
  description: "Can we convince a micro‑VC that our first‑year financial model is robust enough to merit funding?",
  rationale: "A venture capitalist guest outlines common red flags in rookie startup models and challenges students to avoid them. Students review anonymized pitch decks and model failures.",
  sequence: 8
}

const unit08Lessons = [
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

export default function Unit08Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentUnitOverview unit={unit08Data} lessons={unit08Lessons} />
    </div>
  )
}
