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

interface LessonPhase {
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
}

const phaseIcons = {
  "Hook": PlayCircle,
  "Introduction": BookOpen,
  "Guided Practice": Users,
  "Independent Practice": Target,
  "Assessment": CheckCircle2,
  "Closing": Lightbulb
}

export function PhaseFooter({ lesson, unit, phase, phases }: PhaseFooterProps) {
  // Sort phases for navigation
  const sortedPhases = phases.sort((a, b) => a.sequence - b.sequence)
  const currentIndex = sortedPhases.findIndex(p => p.id === phase.id)
  const prevPhase = currentIndex > 0 ? sortedPhases[currentIndex - 1] : null
  const nextPhase = currentIndex < sortedPhases.length - 1 ? sortedPhases[currentIndex + 1] : null
  
  // Format lesson and unit numbers with leading zeros
  const formattedLessonNumber = lesson.sequence.toString().padStart(2, '0')
  const formattedUnitNumber = unit.sequence.toString().padStart(2, '0')
  
  return (
    <div className="max-w-4xl mx-auto space-y-6 mt-8">
      {/* Ensure public resource links include basePath in production */}
      <ResourceBasePathFixer />
      {/* Navigation Controls */}
      <div className="flex items-center justify-between pt-6 border-t">
        <div className="flex items-center gap-2">
          {prevPhase ? (
            <Button variant="outline" asChild>
              <Link href={`/student/unit${formattedUnitNumber}/lesson${formattedLessonNumber}/phase-${prevPhase.sequence}`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous: {prevPhase.phaseName}
              </Link>
            </Button>
          ) : (
            <Button variant="outline" asChild>
              <Link href={`/student/unit${formattedUnitNumber}/lesson${formattedLessonNumber}`}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Lesson Overview
              </Link>
            </Button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" asChild>
            <Link href={`/student/unit${formattedUnitNumber}/lesson${formattedLessonNumber}`}>
              Lesson Overview
            </Link>
          </Button>
          
          {nextPhase ? (
            <Button asChild>
              <Link href={`/student/unit${formattedUnitNumber}/lesson${formattedLessonNumber}/phase-${nextPhase.sequence}`}>
                Next: {nextPhase.phaseName}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          ) : (
            <Button asChild>
              <Link href={`/student/unit${formattedUnitNumber}/lesson${formattedLessonNumber}`}>
                Complete Lesson
                <CheckCircle2 className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          )}
        </div>
      </div>

      {/* Phase Overview for Navigation */}
      <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/10">
        <CardHeader>
          <CardTitle className="text-amber-800 dark:text-amber-200 text-sm">
            Phase Navigation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {sortedPhases.map((p, index) => {
              const PhaseIcon = phaseIcons[p.phaseName]
              const isCompleted = index < currentIndex
              const isCurrent = p.id === phase.id
              
              return (
                <Link 
                  key={p.id}
                  href={`/student/unit${formattedUnitNumber}/lesson${formattedLessonNumber}/phase-${p.sequence}`}
                  className={`flex items-center gap-2 p-2 rounded-md text-xs transition-colors ${
                    isCurrent 
                      ? 'bg-primary text-primary-foreground' 
                      : isCompleted 
                        ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <PhaseIcon className="h-3 w-3 flex-shrink-0" />
                  <span className="truncate">{p.phaseName}</span>
                  {isCompleted && <CheckCircle2 className="h-3 w-3 text-green-600" />}
                </Link>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
