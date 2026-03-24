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

const unit07Data = {
  id: "mdrhlhv4ov691yonkpi",
  title: "Unit 7: Inventory Tracker & Valuation",
  description: "How do we build, test, and defend a trustworthy ending inventory number?",
  rationale: "Sarah can count what is on the shelf, but she cannot clearly defend how ending inventory was built. This unit turns that founder problem into a professional inventory workflow.",
  sequence: 7
}

const lessonSources = [
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

const overviewBuildGoals = [
  "Build a month-by-month inventory story that explains beginning inventory, purchases, sales, and ending inventory.",
  "Build FIFO, LIFO, specific identification, and weighted average comparisons from the same business data.",
  "Build Excel workbooks that calculate COGS, ending inventory, and method comparisons with visible checks.",
  "Build and present a group inventory recommendation workbook for a new business case."
]

const overviewSkills = [
  "Ending inventory is a number the business must be able to explain",
  "Beginning Inventory + Purchases - Cost of Goods Sold = Ending Inventory",
  "Buying inventory, selling inventory, and holding inventory are not the same thing",
  "FIFO and LIFO can change COGS, ending inventory, and reported profit",
  "Specific identification works best when items can be tracked exactly",
  "Weighted average works well when many similar items flow together",
  "Reliable workbooks need validation, checks, and method comparison logic",
  "A strong recommendation connects accounting method choice to business reality"
]

const unit07Lessons = lessonSources.map((ld, index) => ({
  title: ld.title,
  keyConcepts: overviewSkills[index] ? [overviewSkills[index]] : [],
  learningObjectives: overviewBuildGoals[index] ? [overviewBuildGoals[index]] : [],
  durationEstimateMinutes: ld.durationEstimateMinutes ?? 45,
}))

export default function Unit07Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentUnitOverview unit={unit07Data} lessons={unit07Lessons} />
    </div>
  )
}
