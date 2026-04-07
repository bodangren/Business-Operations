import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"
import ResourceBasePathFixer from "@/components/student/ResourceBasePathFixer"
import { type LessonRef, type UnitRef, type LessonPhase } from "@/types/lesson"
import { getPhaseIcon } from "@/components/student/phase-config"

// Re-export for backward compatibility with existing imports
export type { LessonPhase } from "@/types/lesson"

interface PhaseFooterProps {
  lesson: LessonRef
  unit: UnitRef
  phase: LessonPhase
  phases: LessonPhase[]
  navigationOverrides?: PhaseFooterNavigationOverrides
}

interface PhaseFooterNavigationOverrides {
  lessonHref?: string
  lessonOverviewLabel?: string
  backToLessonLabel?: string
  completeLessonLabel?: string
  phaseHrefBuilder?: (phase: LessonPhase) => string
}

export function PhaseFooter({ lesson, unit, phase, phases, navigationOverrides }: PhaseFooterProps) {
  // Sort phases for navigation
  const sortedPhases = [...phases].sort((a, b) => a.sequence - b.sequence)
  const currentIndex = sortedPhases.findIndex(p => p.id === phase.id)
  const prevPhase = currentIndex > 0 ? sortedPhases[currentIndex - 1] : null
  const nextPhase = currentIndex < sortedPhases.length - 1 ? sortedPhases[currentIndex + 1] : null
  
  // Format lesson and unit numbers with leading zeros
  const formattedLessonNumber = lesson.sequence.toString().padStart(2, '0')
  const formattedUnitNumber = unit.sequence.toString().padStart(2, '0')
  const defaultLessonHref = `/student/unit${formattedUnitNumber}/lesson${formattedLessonNumber}`
  const lessonHref = navigationOverrides?.lessonHref ?? defaultLessonHref
  const phaseHrefBuilder = navigationOverrides?.phaseHrefBuilder ?? ((phase: LessonPhase) => `${defaultLessonHref}/phase-${phase.sequence}`)
  const lessonOverviewLabel = navigationOverrides?.lessonOverviewLabel ?? "Lesson Overview"
  const backToLessonLabel = navigationOverrides?.backToLessonLabel ?? `Back to ${lessonOverviewLabel}`
  const completeLessonLabel = navigationOverrides?.completeLessonLabel ?? "Complete Lesson"
  
  return (
    <div className="max-w-4xl mx-auto space-y-6 mt-8">
      {/* Ensure public resource links include basePath in production */}
      <ResourceBasePathFixer />
      {/* Navigation Controls */}
      <div className="flex flex-col gap-3 rounded-lg border-t border-border/50 bg-muted/10 pt-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full items-center gap-2 sm:w-auto">
          {prevPhase ? (
            <Button
              variant="outline"
              asChild
              className="w-full justify-between border-border/50 hover:bg-accent/50 sm:w-auto"
            >
              <Link href={phaseHrefBuilder(prevPhase)}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous: {prevPhase.phaseName}
              </Link>
            </Button>
          ) : (
            <Button
              variant="outline"
              asChild
              className="w-full justify-between border-border/50 hover:bg-accent/50 sm:w-auto"
            >
              <Link href={lessonHref}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                {backToLessonLabel}
              </Link>
            </Button>
          )}
        </div>

        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row sm:items-center">
          <Button
            variant="outline"
            asChild
            className="w-full justify-between border-border/50 hover:bg-accent/50 sm:w-auto"
          >
            <Link href={lessonHref}>
              {lessonOverviewLabel}
            </Link>
          </Button>
          
          {nextPhase ? (
            <Button
              asChild
              className="w-full justify-between gradient-financial text-primary-foreground shadow-md transition-shadow hover:shadow-lg sm:w-auto"
            >
              <Link href={phaseHrefBuilder(nextPhase)}>
                Next: {nextPhase.phaseName}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          ) : (
            <Button
              asChild
              className="w-full justify-between gradient-success text-white shadow-md transition-shadow hover:shadow-lg sm:w-auto"
            >
              <Link href={lessonHref}>
                {completeLessonLabel}
                <CheckCircle2 className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Phase Overview for Navigation */}
      <Card className="card-ledger border-border/50 shadow-sm">
        <CardHeader className="excel-header">
          <CardTitle className="text-primary text-sm font-semibold">
            Phase Navigation
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
            {sortedPhases.map((p, index) => {
              const PhaseIcon = getPhaseIcon(p.phaseName)
              const isCompleted = index < currentIndex
              const isCurrent = p.id === phase.id
              
              return (
                <Link 
                  key={p.id}
                  href={phaseHrefBuilder(p)}
                  className={`flex min-w-0 items-center gap-2 rounded-lg border p-3 text-xs font-medium transition-all duration-200 ${
                    isCurrent 
                      ? 'bg-primary text-primary-foreground border-primary shadow-md' 
                      : isCompleted 
                        ? 'bg-gradient-success/10 text-green-700 dark:text-green-300 border-green-200/50 dark:border-green-800/30 hover:bg-gradient-success/20' 
                        : 'bg-muted/30 text-muted-foreground border-border/30 hover:bg-muted/50 hover:text-foreground'
                  }`}
                >
                  <PhaseIcon className="h-3 w-3 flex-shrink-0" />
                  <span className="min-w-0 flex-1 truncate">{p.phaseName}</span>
                  {isCompleted && <CheckCircle2 className="h-3 w-3 text-green-600 dark:text-green-400" />}
                </Link>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
