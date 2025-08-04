import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  ArrowRight,
  PlayCircle,
  BookOpen,
  Users,
  Target,
  CheckCircle2,
  Lightbulb,
  Home
} from "lucide-react"
import Link from "next/link"

interface LessonPhase {
  id: string
  phaseName: "Hook" | "Introduction" | "Guided Practice" | "Independent Practice" | "Assessment" | "Closing"
  sequence: number
  description?: string
}

interface PhaseHeaderProps {
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

const phaseColors = {
  "Hook": "text-red-600 bg-red-50 border-red-200",
  "Introduction": "text-blue-600 bg-blue-50 border-blue-200",
  "Guided Practice": "text-green-600 bg-green-50 border-green-200",
  "Independent Practice": "text-purple-600 bg-purple-50 border-purple-200",
  "Assessment": "text-orange-600 bg-orange-50 border-orange-200",
  "Closing": "text-indigo-600 bg-indigo-50 border-indigo-200"
}

export function PhaseHeader({ lesson, unit, phase, phases }: PhaseHeaderProps) {
  const Icon = phaseIcons[phase.phaseName]
  const colorClass = phaseColors[phase.phaseName]
  
  // Sort phases for navigation
  const sortedPhases = phases.sort((a, b) => a.sequence - b.sequence)
  const progress = ((phase.sequence) / sortedPhases.length) * 100
  
  // Format lesson and unit numbers with leading zeros
  const formattedLessonNumber = lesson.sequence.toString().padStart(2, '0')
  const formattedUnitNumber = unit.sequence.toString().padStart(2, '0')
  
  return (
    <div className="max-w-4xl mx-auto space-y-6 mb-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
        <Link href="/student" className="hover:text-foreground flex items-center gap-1">
          <Home className="h-3 w-3" />
          Student
        </Link>
        <ArrowRight className="h-3 w-3" />
        <Link href={`/student/unit${formattedUnitNumber}`} className="hover:text-foreground">
          {unit.title}
        </Link>
        <ArrowRight className="h-3 w-3" />
        <Link href={`/student/unit${formattedUnitNumber}/lesson${formattedLessonNumber}`} className="hover:text-foreground">
          Lesson {lesson.sequence}
        </Link>
        <ArrowRight className="h-3 w-3" />
        <span className="text-foreground">{phase.phaseName}</span>
      </nav>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Lesson Progress</span>
          <span className="text-muted-foreground">Phase {phase.sequence} of {sortedPhases.length}</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      {/* Phase Header */}
      <Card className={`border-2 ${colorClass}`}>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="outline" className="text-xs">
                    Phase {phase.sequence}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {phase.phaseName}
                  </Badge>
                </div>
                <CardTitle className="text-2xl">
                  {phase.phaseName}: {lesson.title}
                </CardTitle>
              </div>
            </div>
          </div>
          {phase.description && (
            <p className="text-muted-foreground mt-4">
              {phase.description}
            </p>
          )}
        </CardHeader>
      </Card>
    </div>
  )
}