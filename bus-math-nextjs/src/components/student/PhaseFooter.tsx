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
    <div className="max-w-4xl mx-auto space-y-8 mt-12 pb-16">
      {/* Ensure public resource links include basePath in production */}
      <ResourceBasePathFixer />
      
      {/* Navigation Controls */}
      <div className="flex flex-col gap-4 border-t border-border/50 pt-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex w-full items-center gap-2 sm:w-auto">
          {prevPhase ? (
            <Button
              variant="outline"
              asChild
              className="w-full justify-start sm:w-auto shadow-sm"
            >
              <Link href={phaseHrefBuilder(prevPhase)}>
                <ArrowLeft className="h-4 w-4 mr-2 opacity-50" />
                <div className="flex flex-col items-start leading-none">
                  <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest mb-0.5">PREVIOUS</span>
                  <span className="font-semibold tracking-tight">{prevPhase.phaseName}</span>
                </div>
              </Link>
            </Button>
          ) : (
            <Button
              variant="outline"
              asChild
              className="w-full justify-start sm:w-auto shadow-sm"
            >
              <Link href={lessonHref}>
                <ArrowLeft className="h-4 w-4 mr-2 opacity-50" />
                <span className="font-semibold tracking-tight">{backToLessonLabel}</span>
              </Link>
            </Button>
          )}
        </div>

        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
          <Button
            variant="ghost"
            asChild
            className="w-full justify-center sm:w-auto text-xs font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <Link href={lessonHref}>
              {lessonOverviewLabel.toUpperCase()}
            </Link>
          </Button>
          
          {nextPhase ? (
            <Button
              variant="velocity"
              asChild
              className="w-full justify-center sm:w-auto px-8"
            >
              <Link href={phaseHrefBuilder(nextPhase)}>
                <div className="flex flex-col items-start leading-none text-left mr-4">
                  <span className="text-[10px] font-bold opacity-70 uppercase tracking-widest mb-0.5">NEXT PHASE</span>
                  <span className="font-semibold tracking-tight">{nextPhase.phaseName}</span>
                </div>
                <ArrowRight className="h-5 w-5 ml-auto opacity-80" />
              </Link>
            </Button>
          ) : (
            <Button
              variant="velocity"
              asChild
              className="w-full justify-center sm:w-auto px-8"
            >
              <Link href={lessonHref}>
                <span className="font-semibold tracking-tight mr-2">{completeLessonLabel}</span>
                <CheckCircle2 className="h-5 w-5 opacity-80" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Phase Overview for Navigation */}
      <Card className="velocity-card border-none">
        <CardHeader className="py-4 px-6 border-b border-border/40">
          <CardTitle className="text-secondary text-[10px] font-bold uppercase tracking-[0.15em]">
            Learning Flow: Lesson Phases
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
            {sortedPhases.map((p, index) => {
              const PhaseIcon = getPhaseIcon(p.phaseName)
              const isCompleted = index < currentIndex
              const isCurrent = p.id === phase.id
              
              return (
                <Link 
                  key={p.id}
                  href={phaseHrefBuilder(p)}
                  className={`flex min-w-0 items-center gap-3 rounded-lg border p-3 transition-all duration-300 ${
                    isCurrent 
                      ? 'bg-primary/5 text-primary border-primary/20 shadow-sm ring-1 ring-primary/10' 
                      : isCompleted 
                        ? 'bg-accent/5 text-accent border-accent/20 hover:bg-accent/10' 
                        : 'bg-white text-muted-foreground border-border/50 hover:border-primary/30 hover:text-primary hover:bg-muted/30'
                  }`}
                >
                  <div className={`p-2 rounded-md ${isCurrent ? 'bg-primary text-white' : isCompleted ? 'bg-accent text-white' : 'bg-muted text-muted-foreground'}`}>
                    <PhaseIcon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[10px] font-bold opacity-60 uppercase tracking-widest">PHASE {p.sequence}</div>
                    <div className="text-sm font-semibold truncate leading-tight">{p.phaseName}</div>
                  </div>
                  {isCompleted && <CheckCircle2 className="h-4 w-4 ml-auto opacity-60" />}
                </Link>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
