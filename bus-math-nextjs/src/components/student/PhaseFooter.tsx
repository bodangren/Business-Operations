import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  ArrowLeft, 
  ArrowRight,
  CheckCircle2,
  PlayCircle,
  BookOpen,
  Users,
  Target,
  Lightbulb
} from "lucide-react"
import Link from "next/link"
import ResourceBasePathFixer from "@/components/student/ResourceBasePathFixer"

export interface LessonPhase {
  id: string
  phaseName: "Hook" | "Introduction" | "Guided Practice" | "Independent Practice" | "Assessment" | "Closing"
  sequence: number
  description?: string
}

interface PhaseFooterProps {
  lesson: {
    id: string
    title: string
    sequence: number
    unitId: string
  }
  unit: {
    id: string
    title: string
    sequence: number
  }
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

const phaseIcons = {
  "Hook": PlayCircle,
  "Introduction": BookOpen,
  "Guided Practice": Users,
  "Independent Practice": Target,
  "Assessment": CheckCircle2,
  "Closing": Lightbulb
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
      <div className="flex items-center justify-between pt-6 border-t border-border/50 bg-muted/10 -mx-4 px-4 py-4 rounded-lg">
        <div className="flex items-center gap-2">
          {prevPhase ? (
            <Button variant="outline" asChild className="border-border/50 hover:bg-accent/50">
              <Link href={phaseHrefBuilder(prevPhase)}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous: {prevPhase.phaseName}
              </Link>
            </Button>
          ) : (
            <Button variant="outline" asChild className="border-border/50 hover:bg-accent/50">
              <Link href={lessonHref}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                {backToLessonLabel}
              </Link>
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" asChild className="border-border/50 hover:bg-accent/50">
            <Link href={lessonHref}>
              {lessonOverviewLabel}
            </Link>
          </Button>
          
          {nextPhase ? (
            <Button asChild className="gradient-financial text-primary-foreground shadow-md hover:shadow-lg transition-shadow">
              <Link href={phaseHrefBuilder(nextPhase)}>
                Next: {nextPhase.phaseName}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          ) : (
            <Button asChild className="gradient-success text-white shadow-md hover:shadow-lg transition-shadow">
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {sortedPhases.map((p, index) => {
              const PhaseIcon = phaseIcons[p.phaseName]
              const isCompleted = index < currentIndex
              const isCurrent = p.id === phase.id
              
              return (
                <Link 
                  key={p.id}
                  href={phaseHrefBuilder(p)}
                  className={`flex items-center gap-2 p-3 rounded-lg text-xs font-medium transition-all duration-200 border ${
                    isCurrent 
                      ? 'bg-primary text-primary-foreground border-primary shadow-md scale-105' 
                      : isCompleted 
                        ? 'bg-gradient-success/10 text-green-700 dark:text-green-300 border-green-200/50 dark:border-green-800/30 hover:bg-gradient-success/20' 
                        : 'bg-muted/30 text-muted-foreground border-border/30 hover:bg-muted/50 hover:text-foreground'
                  }`}
                >
                  <PhaseIcon className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{p.phaseName}</span>
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
