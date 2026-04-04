"use client"

import { Badge } from "@/components/ui/badge"
import type { UnitId } from "@/types/glossary"
import { useStudyDueCount } from "@/contexts/StudyDataContext"

interface StudyDueBadgeProps {
  unitId: UnitId
}

export default function StudyDueBadge({ unitId }: StudyDueBadgeProps) {
  const { dueCount, hasStudied } = useStudyDueCount(unitId)

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
