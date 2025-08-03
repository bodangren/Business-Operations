import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Clock, 
  Target, 
  BookOpen,
  PlayCircle,
  ArrowRight,
  CheckCircle2,
  Users,
  Lightbulb
} from "lucide-react"
import Link from "next/link"

interface LessonPhase {
  id: string
  phaseName: "Hook" | "Introduction" | "Guided Practice" | "Independent Practice" | "Assessment" | "Closing"
  sequence: number
  description?: string
}

interface StudentLessonOverviewProps {
  lesson: {
    id: string
    title: string
    sequence: number
    learningObjectives: string[]
    keyConcepts: string[]
    durationEstimateMinutes: number
    pedagogicalApproach: string[]
    rationale: string
    unitId: string
  }
  unit: {
    id: string
    title: string
    sequence: number
  }
  phases?: LessonPhase[]
}

const phaseIcons = {
  "Hook": PlayCircle,
  "Introduction": BookOpen,
  "Guided Practice": Users,
  "Independent Practice": Target,
  "Assessment": CheckCircle2,
  "Closing": Lightbulb
}

const phaseDescriptions = {
  "Hook": "Engage with the lesson's driving question and real-world challenge",
  "Introduction": "Learn new concepts and skills through direct instruction",
  "Guided Practice": "Practice new skills with teacher support and collaboration",
  "Independent Practice": "Apply learning independently to build mastery",
  "Assessment": "Demonstrate understanding through formative evaluation",
  "Closing": "Reflect on learning and connect to bigger picture"
}

export function StudentLessonOverview({ lesson, unit, phases = [] }: StudentLessonOverviewProps) {
  // Calculate lesson display info
  const lessonHours = Math.round(lesson.durationEstimateMinutes / 60 * 10) / 10
  const isMultiDay = lesson.durationEstimateMinutes > 60
  
  // Sort phases by sequence
  const sortedPhases = phases.sort((a, b) => a.sequence - b.sequence)
  
  // Extract main skill focus from key concepts
  const mainSkills = lesson.keyConcepts.slice(0, 3)
  
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
        <Link href="/student" className="hover:text-foreground">Student</Link>
        <ArrowRight className="h-3 w-3" />
        <Link href={`/student/unit0${unit.sequence}`} className="hover:text-foreground">
          {unit.title}
        </Link>
        <ArrowRight className="h-3 w-3" />
        <span className="text-foreground">Lesson {lesson.sequence}</span>
      </nav>

      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
          <Badge variant="outline" className="text-sm">
            Unit {unit.sequence} • Lesson {lesson.sequence}
          </Badge>
          <Badge variant="secondary" className="text-sm">
            <Clock className="h-3 w-3 mr-1" />
            {lessonHours}h {isMultiDay && "• Multi-day"}
          </Badge>
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          {lesson.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {lesson.rationale}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Learning Objectives */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <Target className="h-5 w-5" />
              What You'll Learn
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {lesson.learningObjectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1 text-sm">▶</span>
                  <span className="text-sm leading-relaxed">{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Key Concepts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <BookOpen className="h-5 w-5" />
              Key Concepts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {mainSkills.map((concept, index) => (
                <div key={index} className="p-2 bg-green-50 dark:bg-green-950/10 rounded-md">
                  <span className="text-sm font-medium text-green-800 dark:text-green-200">
                    {concept}
                  </span>
                </div>
              ))}
              {lesson.keyConcepts.length > 3 && (
                <div className="text-xs text-muted-foreground pt-1">
                  +{lesson.keyConcepts.length - 3} more concepts
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lesson Phases */}
      {sortedPhases.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <PlayCircle className="h-5 w-5" />
              Lesson Phases
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              This lesson follows a structured 6-phase learning model designed for authentic project-based learning.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {sortedPhases.map((phase, index) => {
                const Icon = phaseIcons[phase.phaseName]
                const description = phase.description || phaseDescriptions[phase.phaseName]
                
                return (
                  <div key={phase.id} className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-full">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium">{phase.phaseName}</h4>
                      <p className="text-sm text-muted-foreground">{description}</p>
                    </div>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/student/unit0${unit.sequence}/lesson0${lesson.sequence.toString().padStart(2, '0')}/phase-${phase.sequence}`}>
                        Start Phase
                      </Link>
                    </Button>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Pedagogical Approach */}
      <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
            <Users className="h-6 w-6" />
            How You'll Learn
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2">
            {lesson.pedagogicalApproach.map((approach, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-600 rounded-full" />
                <span className="text-sm text-orange-700 dark:text-orange-300">{approach}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Navigation Actions */}
      <div className="flex items-center justify-between pt-6 border-t">
        <Button variant="outline" asChild>
          <Link href={`/student/unit0${unit.sequence}`}>
            ← Back to Unit Overview
          </Link>
        </Button>
        
        {sortedPhases.length > 0 ? (
          <Button asChild>
            <Link href={`/student/unit0${unit.sequence}/lesson0${lesson.sequence.toString().padStart(2, '0')}/phase-1`}>
              Start Lesson <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        ) : (
          <Button disabled>
            Lesson Content Coming Soon
          </Button>
        )}
      </div>
    </div>
  )
}