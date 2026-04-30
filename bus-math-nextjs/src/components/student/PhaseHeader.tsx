import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Home } from "lucide-react"
import Link from "next/link"
import ResourceBasePathFixer from "@/components/student/ResourceBasePathFixer"
import { type LessonRef, type UnitRef, type LessonPhase } from "@/types/lesson"
import { getPhaseIcon } from "@/components/student/phase-config"

// Re-export for backward compatibility with existing imports
export type { LessonPhase } from "@/types/lesson"

interface PhaseHeaderProps {
  lesson: LessonRef
  unit: UnitRef
  phase: LessonPhase
  phases: LessonPhase[]
  navigationOverrides?: PhaseHeaderNavigationOverrides
}

interface PhaseHeaderNavigationOverrides {
  unitHref?: string
  lessonHref?: string
  lessonLabel?: string
  phaseLabel?: string
}

export function PhaseHeader({ lesson, unit, phase, phases, navigationOverrides }: PhaseHeaderProps) {
  const Icon = getPhaseIcon(phase.phaseName)
  
  // Sort phases for navigation
  const sortedPhases = [...phases].sort((a, b) => a.sequence - b.sequence)
  const progress = ((phase.sequence) / sortedPhases.length) * 100
  
  // Format lesson and unit numbers with leading zeros
  const formattedLessonNumber = lesson.sequence.toString().padStart(2, '0')
  const formattedUnitNumber = unit.sequence.toString().padStart(2, '0')
  const unitHref = navigationOverrides?.unitHref ?? `/student/unit${formattedUnitNumber}`
  const lessonHref = navigationOverrides?.lessonHref ?? `/student/unit${formattedUnitNumber}/lesson${formattedLessonNumber}`
  const lessonLabel = navigationOverrides?.lessonLabel ?? `Lesson ${lesson.sequence}`
  const phaseBreadcrumbLabel = navigationOverrides?.phaseLabel ?? phase.phaseName

  return (
    <div className="max-w-4xl mx-auto space-y-6 mb-8">
      {/* Ensure public resource links include basePath in production */}
      <ResourceBasePathFixer />
      {/* Breadcrumb Navigation */}
      <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground font-light">
        <Link href="/student" className="hover:text-primary flex items-center gap-1 transition-colors">
          <Home className="h-3 w-3" />
          Student
        </Link>
        <ArrowRight className="h-3 w-3 opacity-30" />
        <Link href={unitHref} className="hover:text-primary transition-colors">
          {unit.title}
        </Link>
        <ArrowRight className="h-3 w-3 opacity-30" />
        <Link href={lessonHref} className="hover:text-primary transition-colors">
          {lessonLabel}
        </Link>
        <ArrowRight className="h-3 w-3 opacity-30" />
        <span className="text-secondary font-medium">{phaseBreadcrumbLabel}</span>
      </nav>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/80">
          <span>Lesson Progress</span>
          <span>Phase {phase.sequence} / {sortedPhases.length}</span>
        </div>
        <div className="relative">
          <Progress value={progress} className="h-1.5 bg-border/40 overflow-hidden rounded-full" />
        </div>
      </div>

      {/* Phase Header */}
      <Card className="velocity-card border-none overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full velocity-gradient" />
        <CardHeader className="pb-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center w-full">
              <div className="flex items-center justify-center w-14 h-14 velocity-gradient text-white rounded-xl shadow-[0_4px_12px_rgba(99,91,255,0.3)] shrink-0">
                <Icon className="h-7 w-7" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="velocity" className="text-[10px] font-bold tracking-widest">
                    PHASE {phase.sequence}
                  </Badge>
                  <Badge variant="secondary" className="text-[10px] font-bold tracking-widest bg-secondary/5 text-secondary border-none">
                    {phase.phaseName.toUpperCase()}
                  </Badge>
                </div>
                <CardTitle className="text-3xl font-semibold text-secondary leading-tight tracking-tight">
                  {phase.phaseName}: {lesson.title}
                </CardTitle>
              </div>
            </div>
          </div>
          {phase.description && (
            <div className="mt-6 pt-5 border-t border-border/50">
              <p className="text-foreground/80 text-sm leading-relaxed font-light italic">
                {phase.description}
              </p>
            </div>
          )}
        </CardHeader>
      </Card>
    </div>
  )
}
