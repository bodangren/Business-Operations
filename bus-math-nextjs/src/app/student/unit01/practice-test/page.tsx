"use client"

import UnitReview from "@/components/student/UnitReview"
import { unit01ReviewAdapter } from "@/data/unit-review-adapters/unit01"
import { getUnitHref } from "@/lib/student-navigation"

/** Thin route that renders the shared data-driven unit review for this unit. */
export default function PracticeTestPage() {
  return <UnitReview adapter={unit01ReviewAdapter} unitHref={getUnitHref("unit01")} />
}
