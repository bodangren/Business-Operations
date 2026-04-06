"use client"

import { useUnitMastery } from "@/contexts/StudyDataContext"
import { masteryColor } from "@/lib/study/derived"
import type { UnitId } from "@/types/glossary"

interface UnitMasteryProgressBarProps {
  unitId: UnitId
}

export default function UnitMasteryProgressBar({ unitId }: UnitMasteryProgressBarProps) {
  const mastery = useUnitMastery(unitId)

  if (!mastery || mastery.termsStudied === 0) return null

  const color = masteryColor(mastery.avgMastery)

  return (
    <div className="space-y-1" aria-label={`${mastery.termsStudied} of ${mastery.termsTotal} terms studied, ${mastery.avgMastery}% mastery`}>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{mastery.termsStudied}/{mastery.termsTotal} terms</span>
        <span>{mastery.avgMastery}%</span>
      </div>
      <div
        className="relative h-2 w-full overflow-hidden rounded-full bg-primary/20"
        role="progressbar"
        aria-valuenow={mastery.avgMastery}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`h-full rounded-full transition-all ${color}`}
          style={{ width: `${mastery.avgMastery}%` }}
        />
      </div>
    </div>
  )
}
