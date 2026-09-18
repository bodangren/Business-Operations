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
  ArrowRight,
  Layers,
  Home,
  ClipboardCheck,
} from "lucide-react"
import Link from "next/link"
import { UnitVocabulary } from "@/components/unit/UnitVocabulary"
import StudyDueBadge from "@/components/student/StudyDueBadge"
import UnitMasteryProgressBar from "@/components/student/UnitMasteryProgressBar"
import { CURRENT_LESSON } from "@/data/current-lesson"
import { getLessonHref, getUnitHref } from "@/lib/student-navigation"
import { cn } from "@/lib/utils"
import type { UnitId } from "@/types/glossary"

interface StudentUnitOverviewProps {
  unit: {
    id: string
    title: string
    description: string
    rationale: string
    sequence: number
    unitId?: UnitId
  }
  lessons: Array<{
    /** Canonical lesson route segment; derived from position when omitted. */
    lessonId?: string
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
    "Inventory valuation and recommendation demo to business professionals",
    "Startup pitch to venture capital panel"
  ]

  const finalPresentation = presentationTypes[unit.sequence - 1] || "Professional business presentation"

  const unitHref = unit.unitId
    ? getUnitHref(unit.unitId)
    : `/student/unit${unit.sequence.toString().padStart(2, "0")}`
  const reviewHref = `${unitHref}/practice-test`
  const practiceHubUnitId =
    unit.unitId ?? `unit${unit.sequence.toString().padStart(2, "0")}`
  const currentLessonId =
    unit.unitId && CURRENT_LESSON.unitId === unit.unitId ? CURRENT_LESSON.lessonId : null

  return (
    <div className="bg-gradient-to-br from-background via-background to-muted/20 py-8">
      <div className="mx-auto max-w-4xl space-y-6 px-4 sm:px-6">
        {/* Breadcrumb Navigation */}
        <nav className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          <Link href="/student" className="hover:text-foreground flex items-center gap-1">
            <Home className="h-3 w-3" />
            Student
          </Link>
          <ArrowRight className="h-3 w-3" />
          <span className="text-foreground">{unit.title}</span>
        </nav>

        {/* Compact Title */}
        <header className="space-y-2">
          <Badge variant="outline" className="text-xs">
            Unit {unit.sequence} • {totalHours} Hours • Grade 12 Business Operations
          </Badge>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {unit.title}
          </h1>
          <p className="text-sm text-muted-foreground sm:text-base">
            {unit.description}
          </p>
        </header>

        {/* Practice Hub */}
        <section aria-labelledby="unit-practice-heading" className="space-y-3">
          <h2 id="unit-practice-heading" className="text-lg font-semibold">
            Practice Hub
          </h2>
          <div className="flex flex-col gap-3 rounded-lg border border-border/60 p-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-start gap-2">
              <Layers className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Flashcards, a matching game, and a timed speed round for this unit&apos;s terms.
              </p>
            </div>
            <Button asChild size="sm" variant="outline" className="w-full sm:w-auto">
              <Link
                href={`/student/practice-hub?unit=${practiceHubUnitId}`}
                aria-label={`Open the practice hub for ${unit.title}`}
              >
                Open Practice Hub <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Lesson List */}
        <section aria-labelledby="unit-lessons-heading" className="space-y-3">
          <h2 id="unit-lessons-heading" className="text-lg font-semibold">
            Lessons
          </h2>
          <ol className="grid gap-2">
            {lessons.map((lesson, index) => {
              const lessonId =
                lesson.lessonId ?? `lesson${(index + 1).toString().padStart(2, "0")}`
              const isCurrent = lessonId === currentLessonId
              const href = unit.unitId
                ? getLessonHref(unit.unitId, lessonId)
                : `${unitHref}/${lessonId}`
              return (
                <li key={lessonId}>
                  <Link
                    href={href}
                    aria-current={isCurrent ? "true" : undefined}
                    className={cn(
                      "flex items-center gap-3 rounded-lg border p-3 transition-colors",
                      isCurrent
                        ? "border-primary/50 bg-primary/5"
                        : "border-border/60 hover:bg-muted/50",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-medium",
                        isCurrent
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground",
                      )}
                    >
                      {index + 1}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-medium">{lesson.title}</span>
                      <span className="mt-0.5 flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        {lesson.durationEstimateMinutes} minutes
                      </span>
                    </span>
                    {isCurrent && (
                      <Badge variant="secondary" className="shrink-0 text-xs">
                        Current
                      </Badge>
                    )}
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                  </Link>
                </li>
              )
            })}
          </ol>
        </section>

        {/* Compact Unit Review Row */}
        <section aria-labelledby="unit-review-heading" className="space-y-3">
          <h2 id="unit-review-heading" className="text-lg font-semibold">
            Unit Review
          </h2>
          <div className="flex flex-col gap-3 rounded-lg border border-border/60 p-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex min-w-0 items-start gap-2">
              <ClipboardCheck className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Randomized mixed questions from every lesson, with results by lesson and topic.
              </p>
            </div>
            <Button asChild size="sm" className="w-full sm:w-auto">
              <Link href={reviewHref}>
                Start Unit Review <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Secondary Unit Content */}
        <details className="rounded-lg border border-border/60">
          <summary className="cursor-pointer p-4 text-lg font-semibold">
            About This Unit
          </summary>
          <div className="space-y-6 border-t border-border/60 p-4">
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
                  <ul className="min-w-0 space-y-3">
                    {buildingGoals.map((goal, index) => (
                      <li key={index} className="grid min-w-0 grid-cols-[auto,minmax(0,1fr)] items-start gap-2">
                        <span className="text-green-600 mt-1 text-sm">▶</span>
                        <span className="block min-w-0 break-words text-sm leading-relaxed">{goal}</span>
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
                      <Badge
                        key={index}
                        variant="secondary"
                        className="h-auto max-w-full whitespace-normal break-words px-2 py-1 text-center text-xs leading-tight sm:w-fit sm:whitespace-nowrap"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Key Vocabulary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Key Vocabulary
                </CardTitle>
              </CardHeader>
              <CardContent>
                {unit.unitId ? (
                  <UnitVocabulary unitId={unit.unitId} unitSequence={unit.sequence} />
                ) : (
                  <p className="text-sm text-muted-foreground">
                    View all terms in the{" "}
                    <Link href="/backmatter/glossary" className="text-primary hover:underline">
                      bilingual glossary
                    </Link>
                    .
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Study This Unit's Terms */}
            {unit.unitId && (
              <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
                    <Layers className="h-5 w-5" />
                    Study This Unit&apos;s Terms
                    <StudyDueBadge unitId={unit.unitId} />
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="space-y-3 text-blue-900 dark:text-blue-100 flex-1">
                    <p className="text-sm leading-relaxed">
                      Practice this unit&apos;s vocabulary with flashcards, a matching game, or a timed speed round.
                      Your progress is tracked locally and can be exported.
                    </p>
                    {unit.unitId && <UnitMasteryProgressBar unitId={unit.unitId} />}
                  </div>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="w-full border-blue-300 text-blue-700 hover:bg-blue-100 md:w-auto"
                  >
                    <Link href={`/student/practice-hub?unit=${unit.unitId}`}>
                      Study Terms <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}

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
          </div>
        </details>
      </div>
    </div>
  )
}
