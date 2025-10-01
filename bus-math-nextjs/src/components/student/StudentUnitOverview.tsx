import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Rocket, 
  Target, 
  Wrench, 
  Users, 
  Trophy,
  Clock,
  BookOpen,
  ArrowRight
} from "lucide-react"
import Link from "next/link"

interface StudentUnitOverviewProps {
  unit: {
    id: string
    title: string
    description: string
    rationale: string
    sequence: number
  }
  lessons: Array<{
    title: string
    keyConcepts: string[]
    learningObjectives: string[]
    durationEstimateMinutes: number
  }>
}

export function StudentUnitOverview({ unit, lessons }: StudentUnitOverviewProps) {
  // Extract key skills from lesson concepts
  const keySkills = lessons.flatMap(lesson => lesson.keyConcepts).slice(0, 8)
  
  // Extract what students will build from learning objectives
  const buildingGoals = lessons
    .flatMap(lesson => lesson.learningObjectives)
    .filter(obj => obj.includes('Create') || obj.includes('Build') || obj.includes('Demonstrate'))
    .slice(0, 4)
  
  // Calculate total duration
  const totalHours = Math.round(lessons.reduce((sum, lesson) => sum + lesson.durationEstimateMinutes, 0) / 60)
  
  // Determine final presentation type based on unit sequence
  const presentationTypes = [
    "4-minute investor pitch with live Excel demo",
    "Innovation Fair demonstration to entrepreneurs", 
    "Board presentation with integrated financial model",
    "Statistical analysis presentation to café owners",
    "Payroll system demo to HR professionals",
    "Pricing strategy presentation to business executives",
    "Asset tracking system demo to inventory managers",
    "Startup pitch to venture capital panel"
  ]
  
  const finalPresentation = presentationTypes[unit.sequence - 1] || "Professional business presentation"

  const practiceTestMessaging: Record<number, { title: string; description: string; tip: string }> = {
    1: {
      title: "Practice Test & Investor Rehearsal",
      description:
        "Ready for a confidence check? Run the Unit 1 practice test to rehearse investor questions, pull randomized items from every lesson, and track progress with built-in explanations.",
      tip:
        "Tip: Finish Lesson 07 first so you can apply Sarah's audit trail strategies while you review answers."
    },
    2: {
      title: "Practice Test & Month-End Drill",
      description:
        "Need a fast rehearsal before close? Launch the Unit 2 practice test to drill adjusting entries, automation controls, and dashboards with fresh question draws every time.",
      tip:
        "Tip: Complete Lesson 07 before the drill so you can check reconciliations and QA steps while grading your responses."
    },
    3: {
      title: "Practice Test & Storyboard Mastery",
      description:
        "Ready to prove integration? Run the Unit 3 practice test to rehearse three-statement connections, dynamic formulas, and dashboard logic with randomized questions from every lesson.",
      tip:
        "Tip: Complete Lesson 07 first so you can apply integration validation and audit-readiness checks while reviewing your answers."
    },
    4: {
      title: "Practice Test & Café Analysis Confidence",
      description:
        "Ready to prove your statistical mastery? Launch the Unit 4 practice test to rehearse data cleaning, forecasting, and what-if analysis with randomized questions from every café lesson.",
      tip:
        "Tip: Complete Lesson 07 first so you can apply dashboard validation and investor-readiness checks while reviewing your answers."
    },
    5: {
      title: "Practice Test & Payroll Mastery",
      description:
        "Ready to prove your payroll expertise? Launch the Unit 5 practice test to rehearse gross-to-net calculations, tax withholdings, overtime logic, and validation with randomized questions from every payroll lesson.",
      tip:
        "Tip: Complete Lesson 07 first so you can apply QA checks, reconciliation strategies, and professional presentation standards while reviewing your answers."
    },
    6: {
      title: "Practice Test & Pricing Strategy Confidence",
      description:
        "Ready to prove your pricing mastery? Launch the Unit 6 practice test to rehearse CVP analysis, Goal Seek scenarios, markup vs. margin calculations, and scenario automation with randomized questions from every PriceLab lesson.",
      tip:
        "Tip: Complete Lesson 07 first so you can apply production QA, presentation readiness checks, and investor-ready polish while reviewing your answers."
    }
  }

  const defaultPracticeTestCopy = {
    title: "Practice Test Ready",
    description: `Launch the Unit ${unit.sequence} practice test to review key skills and track your mastery before assessments.`,
    tip: "Tip: Focus on the lessons you just completed to reinforce the newest skills first."
  }

  const practiceTestContent = practiceTestMessaging[unit.sequence] ?? defaultPracticeTestCopy

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <Badge variant="outline" className="text-sm">
          Unit {unit.sequence} • {totalHours} Hours • Grade 12 Business Operations
        </Badge>
        <h1 className="text-4xl font-bold tracking-tight">
          {unit.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {unit.description}
        </p>
      </div>

      {/* The Challenge Card */}
      <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
            <Rocket className="h-6 w-6" />
            Your Business Challenge
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-700 dark:text-blue-300 leading-relaxed">
            {unit.rationale}
          </p>
        </CardContent>
      </Card>

      {/* Main Content Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* What You'll Build */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-700">
              <Target className="h-5 w-5" />
              What You'll Build
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {buildingGoals.map((goal, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-green-600 mt-1 text-sm">▶</span>
                  <span className="text-sm leading-relaxed">{goal}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Key Skills */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-700">
              <Wrench className="h-5 w-5" />
              Skills You'll Master
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {keySkills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Project Culmination */}
      <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-800 dark:text-purple-200">
            <Trophy className="h-6 w-6" />
            Your Final Presentation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-purple-700 dark:text-purple-300">
              <Users className="h-4 w-4" />
              <span className="font-medium">Present to real business professionals</span>
            </div>
          </div>
          <p className="text-purple-700 dark:text-purple-300 mt-3 text-lg">
            {finalPresentation}
          </p>
        </CardContent>
      </Card>

      {/* Learning Journey */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Your Learning Journey
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {lessons.map((lesson, index) => (
              <div key={index} className="flex items-center gap-4 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-center w-8 h-8 bg-primary text-primary-foreground rounded-full text-sm font-medium">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{lesson.title}</h4>
                  <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span>{lesson.durationEstimateMinutes} minutes</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/student/unit${unit.sequence.toString().padStart(2, '0')}/lesson${(index + 1).toString().padStart(2, '0')}`}>
                    Start Lesson <ArrowRight className="h-3 w-3 ml-1" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Practice Test Callout */}
      <Card className="border-teal-200 bg-teal-50 dark:bg-teal-950/10">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-teal-800 dark:text-teal-200">
            <Target className="h-5 w-5" />
            {practiceTestContent.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2 text-teal-900 dark:text-teal-100">
            <p className="text-sm leading-relaxed">
              {practiceTestContent.description}
            </p>
            <p className="text-xs text-teal-700 dark:text-teal-300">
              {practiceTestContent.tip}
            </p>
          </div>
          <Button size="lg" asChild>
            <Link href={`/student/unit${unit.sequence.toString().padStart(2, '0')}/practice-test`}>
              Start Practice Test <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
