import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowRight, Home } from "lucide-react"
import Link from "next/link"
import ResourceBasePathFixer from "@/components/student/ResourceBasePathFixer"
import { type LessonRef, type UnitRef, type LessonPhase } from "@/types/lesson"
import { getPhaseIcon, getPhaseColor } from "@/components/student/phase-config"

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
  const colorClass = getPhaseColor(phase.phaseName)
  
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
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
        <Link href="/student" className="hover:text-foreground flex items-center gap-1">
          <Home className="h-3 w-3" />
          Student
        </Link>
        <ArrowRight className="h-3 w-3" />
        <Link href={unitHref} className="hover:text-foreground">
          {unit.title}
        </Link>
        <ArrowRight className="h-3 w-3" />
        <Link href={lessonHref} className="hover:text-foreground">
          {lessonLabel}
        </Link>
        <ArrowRight className="h-3 w-3" />
        <span className="text-foreground">{phaseBreadcrumbLabel}</span>
      </nav>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground font-medium">Lesson Progress</span>
          <span className="text-muted-foreground font-medium">Phase {phase.sequence} of {sortedPhases.length}</span>
        </div>
        <div className="relative">
          <Progress value={progress} className="h-3 bg-muted/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full pointer-events-none" />
        </div>
      </div>

      {/* Phase Header */}
      <Card className={`card-statement ${colorClass} shadow-lg`}>
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-background shadow-md border border-border/50">
                <Icon className="h-7 w-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-xs font-medium bg-background/50 border-border/50">
                    Phase {phase.sequence}
                  </Badge>
                  <Badge variant="secondary" className="text-xs font-medium">
                    {phase.phaseName}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  {phase.phaseName}: {lesson.title}
                </CardTitle>
              </div>
            </div>
          </div>
          {phase.description && (
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              {phase.description}
            </p>
          )}
        </CardHeader>
      </Card>
    </div>
  )
}
