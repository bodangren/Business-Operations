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

// Unit 1 data - extracted from MCP curriculum database
const unit01Data = {
  id: "mdrha5ziiupuou6dqt",
  title: "Unit 1: Smart Ledger Launch",
  description: "Your team represents a startup seeking angel investment. Investors will scrutinize your financial controls before writing a check. You must build a self-auditing ledger system that demonstrates you can maintain \"clean books\" from day one. The primary deliverable is a 4-minute investor pitch and a live Excel workbook demo showing self-auditing features.",
  rationale: "Early-stage startup bookkeeping is often chaotic and unsustainable, creating significant business risk. This unit is designed to teach founders the importance of building a trustworthy, organized financial system ('clean books') from day one. This isn't just for investors or accountants; it's a critical tool for founders to gain clarity on their financial health, make decisions based on facts, and build confidence in their venture.",
  sequence: 1
}

const unit01Lessons = [
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

export default function Unit01Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentUnitOverview unit={unit01Data} lessons={unit01Lessons} />
    </div>
  )
}
