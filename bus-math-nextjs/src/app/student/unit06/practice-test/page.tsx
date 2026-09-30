"use client"

import UnitReview from "@/components/student/UnitReview"
import { unit06ReviewAdapter } from "@/data/unit-review-adapters/unit06"
import { getUnitHref } from "@/lib/student-navigation"

/** Thin route that renders the shared data-driven unit review for this unit. */
export default function PracticeTestPage() {
  return <UnitReview adapter={unit06ReviewAdapter} unitHref={getUnitHref("unit06")} />
}
