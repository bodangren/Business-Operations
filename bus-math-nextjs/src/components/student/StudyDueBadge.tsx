"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import type { UnitId } from "@/types/glossary"
import { glossaryData } from "@/data/glossary"
import { loadStudyData } from "@/lib/study/storage"
import { getDueCountForUnit } from "@/lib/study/derived"

function buildSlugUnitMap(): Record<string, UnitId[]> {
  const map: Record<string, UnitId[]> = {}
  for (const entry of glossaryData) {
    map[entry.slug] = entry.units
  }
  return map
}

const SLUG_UNITS = buildSlugUnitMap()

interface StudyDueBadgeProps {
  unitId: UnitId
}

export default function StudyDueBadge({ unitId }: StudyDueBadgeProps) {
  const [dueCount, setDueCount] = useState<number | null>(null)
  const [hasStudied, setHasStudied] = useState(false)

  useEffect(() => {
    const data = loadStudyData()
    const studied = data.study_state.mastery_by_term.some((m) => m.times_seen > 0)
    setHasStudied(studied)
    const count = getDueCountForUnit(unitId, data.study_state.due_review_snapshot, SLUG_UNITS)
    setDueCount(count)
  }, [unitId])

  if (dueCount === null) return null

  if (dueCount > 0) {
    return (
      <Badge variant="destructive" className="text-xs">
        {dueCount} term{dueCount === 1 ? "" : "s"} due
      </Badge>
    )
  }

  if (hasStudied) {
    return (
      <Badge variant="outline" className="text-xs text-green-700 border-green-300">
        All caught up
      </Badge>
    )
  }

  return null
}
