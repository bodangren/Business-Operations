"use client"

import { useEffect, useMemo, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { PhaseHeader, type LessonPhase } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import {
  drawRandomUnit07Phase5Questions,
  getUnit07Phase5Questions,
  toComprehensionCheckItems,
  type Unit07LessonId,
  type Unit07Phase5Question
} from "@/data/question-banks/unit07-phase5"
import { practiceTestLessonData, practiceTestPhases, unit07Data } from "./practice-test-data"
import { cn } from "@/lib/utils"
import { CheckCircle2, ListChecks, NotebookPen, RefreshCw, Sparkles, Target, Timer, Wand2 } from "lucide-react"

const PRACTICE_TEST_STORAGE_KEY = "unit07_practice_test_state_v1"

const lessonOptions: Array<{
  id: Unit07LessonId
  title: string
  focus: string
  color: string
}> = [
  {
    id: "lesson01",
    title: "Lesson 01 – Launch & Data Exploration",
    focus: "Matching principle, method selection, and strategic alignment",
    color: "border-rose-300 bg-rose-50"
  },
  {
    id: "lesson02",
    title: "Lesson 02 – Depreciation Techniques",
    focus: "SLN, DDB, Units of Production, and cash-flow impacts",
    color: "border-sky-300 bg-sky-50"
  },
  {
    id: "lesson03",
    title: "Lesson 03 – Inventory Methods Introduction",
    focus: "FIFO, LIFO fundamentals and income statement effects",
    color: "border-emerald-300 bg-emerald-50"
  },
  {
    id: "lesson04",
    title: "Lesson 04 – FIFO/LIFO with Excel Tables",
    focus: "Structured references, XLOOKUP, and validation controls",
    color: "border-amber-300 bg-amber-50"
  },
  {
    id: "lesson05",
    title: "Lesson 05 – Advanced Inventory Automation",
    focus: "Method switching, error handling, and weighted average",
    color: "border-purple-300 bg-purple-50"
  },
  {
    id: "lesson06",
    title: "Lesson 06 – Integration & Dashboards",
    focus: "Scenario planning, KPI storytelling, and dashboard design",
    color: "border-cyan-300 bg-cyan-50"
  },
  {
    id: "lesson07",
    title: "Lesson 07 – Production Studio & QA",
    focus: "Peer audits, model completion, and presentation readiness",
    color: "border-indigo-300 bg-indigo-50"
  }
]

type StoredResult = {
  score: number
  total: number
  percentage: number
  completedAt: string
  lessonBreakdown: Record<Unit07LessonId, number>
}

type StoredState = {
  selectedLessonIds: Unit07LessonId[]
  questionCount: number
  lastResult?: StoredResult
}

export default function PracticeTestPage() {
  const defaultLessonSelection = lessonOptions.map(option => option.id)
  const [selectedLessonIds, setSelectedLessonIds] = useState<Unit07LessonId[]>(defaultLessonSelection)
  const [questionCount, setQuestionCount] = useState<number>(12)
  const [activeQuestions, setActiveQuestions] = useState<Unit07Phase5Question[]>([])
  const [lastResult, setLastResult] = useState<StoredResult | undefined>(undefined)
  const [isHydrated, setIsHydrated] = useState(false)
  const phasesForNavigation: LessonPhase[] = practiceTestPhases.map(phase => ({
    id: phase.id,
    phaseName: phase.phaseName,
    sequence: phase.sequence,
    description: phase.description
  }))

  useEffect(() => {
    if (typeof window === "undefined") {
      return
    }

    try {
      const stored = window.localStorage.getItem(PRACTICE_TEST_STORAGE_KEY)
      if (stored) {
        const parsed: StoredState = JSON.parse(stored)
        if (Array.isArray(parsed.selectedLessonIds) && parsed.selectedLessonIds.length > 0) {
          setSelectedLessonIds(parsed.selectedLessonIds)
        }
        if (typeof parsed.questionCount === "number" && parsed.questionCount > 0) {
          setQuestionCount(parsed.questionCount)
        }
        if (parsed.lastResult) {
          setLastResult(parsed.lastResult)
        }
      }
    } catch (error) {
      console.error("Failed to load practice test state", error)
    } finally {
      setIsHydrated(true)
    }
  }, [])

  const availableQuestions = useMemo(() => {
    if (selectedLessonIds.length === 0) {
      return []
    }
    return getUnit07Phase5Questions({ lessonIds: selectedLessonIds })
  }, [selectedLessonIds])

  const maxSelectableQuestions = availableQuestions.length

  useEffect(() => {
    if (!isHydrated) {
      return
    }

    if (maxSelectableQuestions === 0) {
      setQuestionCount(0)
      return
    }

    setQuestionCount(prev => {
      if (prev === 0) {
        return Math.min(12, maxSelectableQuestions)
      }
      return Math.min(prev, maxSelectableQuestions)
    })
  }, [isHydrated, maxSelectableQuestions])

  useEffect(() => {
    if (!isHydrated) {
      return
    }

    const stateToStore: StoredState = {
      selectedLessonIds,
      questionCount,
      lastResult
    }

    try {
      window.localStorage.setItem(PRACTICE_TEST_STORAGE_KEY, JSON.stringify(stateToStore))
    } catch (error) {
      console.error("Failed to persist practice test state", error)
    }
  }, [isHydrated, selectedLessonIds, questionCount, lastResult])

  const handleToggleLesson = (lessonId: Unit07LessonId) => {
    setSelectedLessonIds(previous => {
      if (previous.includes(lessonId)) {
        return previous.filter(id => id !== lessonId)
      }
      return [...previous, lessonId]
    })
  }

  const handleSelectAllLessons = () => {
    const allSelected = selectedLessonIds.length === lessonOptions.length
    setSelectedLessonIds(allSelected ? [] : lessonOptions.map(option => option.id))
  }

  const handleQuestionCountChange = (value: number) => {
    if (Number.isNaN(value) || value < 0) {
      return
    }
    if (maxSelectableQuestions === 0) {
      setQuestionCount(0)
      return
    }
    const clamped = Math.min(Math.max(value, 1), maxSelectableQuestions)
    setQuestionCount(clamped)
  }

  const startPracticeTest = () => {
    if (selectedLessonIds.length === 0 || maxSelectableQuestions === 0) {
      return
    }

    const questions = drawRandomUnit07Phase5Questions(questionCount, {
      lessonIds: selectedLessonIds
    })
    setActiveQuestions(questions)
    if (typeof window !== "undefined") {
      const focusTarget = document.getElementById("phase-4")
      focusTarget?.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handleResetAll = () => {
    setSelectedLessonIds(defaultLessonSelection)
    setQuestionCount(12)
    setActiveQuestions([])
    setLastResult(undefined)
    try {
      window.localStorage.removeItem(PRACTICE_TEST_STORAGE_KEY)
    } catch (error) {
      console.error("Failed to clear practice test state", error)
    }
  }

  const comprehensionItems = useMemo(() => {
    return toComprehensionCheckItems(activeQuestions)
  }, [activeQuestions])

  const lessonBreakdown = useMemo(() => {
    return activeQuestions.reduce<Record<Unit07LessonId, number>>((acc, question) => {
      acc[question.lessonId] = (acc[question.lessonId] ?? 0) + 1
      return acc
    }, {} as Record<Unit07LessonId, number>)
  }, [activeQuestions])

  const currentPhase = phasesForNavigation.find(phase => phase.sequence === 5)!

  const navigationOverrides = {
    lessonHref: "/student/unit07/practice-test",
    lessonLabel: "Practice Test",
    phaseLabel: "Practice Test"
  }

  const footerNavigationOverrides = {
    lessonHref: "/student/unit07/practice-test",
    lessonOverviewLabel: "Practice Test Overview",
    backToLessonLabel: "Back to Practice Test Overview",
    completeLessonLabel: "Finish Practice Test",
    phaseHrefBuilder: (phase: LessonPhase) => `/student/unit07/practice-test#phase-${phase.sequence}`
  }

  const lastCompletionTime = lastResult
    ? new Date(lastResult.completedAt).toLocaleString(undefined, {
        dateStyle: "medium",
        timeStyle: "short"
      })
    : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <PhaseHeader
          lesson={practiceTestLessonData}
          unit={unit07Data}
          phase={currentPhase}
          phases={phasesForNavigation}
          navigationOverrides={navigationOverrides}
        />

        <main className="space-y-12">
          <section id="phase-1" className="space-y-6">
            <div className="text-center space-y-4">
              <Badge className="bg-rose-100 text-rose-800 text-lg px-4 py-2">
                ✨ Phase 1: Hook – Board Spotlight
              </Badge>
              <Card className="max-w-4xl mx-auto border-rose-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2 text-rose-900">
                    <Sparkles className="h-5 w-5" />
                    Sarah's board rehearsal starts now
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-left">
                  <p className="text-lg leading-relaxed text-slate-800">
                    Sarah Chen is preparing for a critical Board of Directors meeting where she must defend
                    TechStart's depreciation and inventory method choices. Board members will press her on
                    cash-flow impacts, tax strategy, and investor optics. This practice test is your chance to
                    rehearse alongside Sarah so both of you are ready for tough strategic questions.
                  </p>
                  <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 text-rose-900">
                    <h3 className="font-semibold mb-2">Why this matters</h3>
                    <p className="text-sm leading-relaxed">
                      Boards judge management on clarity, strategic thinking, and confidence. When you can explain
                      FIFO vs. LIFO trade-offs or defend double-declining balance without hesitation, you prove
                      TechStart's accounting choices support the business strategy. Your mastery keeps Sarah's
                      credibility high and the board conversation focused on growth, not on method confusion.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="phase-2" className="space-y-6">
            <div className="text-center space-y-4">
              <Badge className="bg-sky-100 text-sky-800 text-lg px-4 py-2">
                ⚙️ Phase 2: Introduction – Build Your Test Plan
              </Badge>
              <div className="max-w-4xl mx-auto space-y-6">
                <Card className="border-sky-200 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2 text-sky-900">
                      <Wand2 className="h-5 w-5" />
                      Tune the challenge to match your goals
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-left text-slate-800">
                    <p className="text-lg leading-relaxed">
                      Decide which lessons you want to focus on today. Each set pulls from the shared question bank
                      that powers every lesson's assessment. Use the toggles below to highlight the asset and inventory
                      skills you want to reinforce before the board presentation.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleSelectAllLessons}
                        className="border-dashed"
                      >
                        {selectedLessonIds.length === lessonOptions.length ? "Clear lesson filters" : "Select every lesson"}
                      </Button>
                      <Badge variant="secondary" className="text-sm">
                        {selectedLessonIds.length} of {lessonOptions.length} lessons active
                      </Badge>
                      <Badge variant="outline" className="text-sm">
                        {maxSelectableQuestions} questions available with current filters
                      </Badge>
                    </div>
                    <div className="grid gap-3">
                      {lessonOptions.map(option => {
                        const isSelected = selectedLessonIds.includes(option.id)
                        return (
                          <label
                            key={option.id}
                            className={cn(
                              "flex items-start gap-3 rounded-lg border p-4 transition",
                              isSelected
                                ? `${option.color} shadow-sm`
                                : "border-slate-200 bg-white hover:border-slate-300"
                            )}
                          >
                            <input
                              type="checkbox"
                              className="mt-1 h-4 w-4"
                              checked={isSelected}
                              onChange={() => handleToggleLesson(option.id)}
                              aria-label={`Toggle ${option.title}`}
                            />
                            <div className="space-y-1">
                              <p className="font-semibold text-slate-900">{option.title}</p>
                              <p className="text-sm text-slate-700">{option.focus}</p>
                            </div>
                          </label>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section id="phase-3" className="space-y-6">
            <div className="text-center space-y-4">
              <Badge className="bg-emerald-100 text-emerald-800 text-lg px-4 py-2">
                🧭 Phase 3: Guided Practice – Strategy Huddle
              </Badge>
              <div className="max-w-4xl mx-auto grid gap-6">
                <Card className="border-emerald-200 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2 text-emerald-900">
                      <Target className="h-5 w-5" />
                      Smart habits before you press start
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4 text-left text-slate-800">
                    <ul className="list-disc list-inside space-y-2 text-sm">
                      <li>
                        Commit to a steady pace. Board members expect confident answers in under a minute, so practice
                        finishing each item within 60 seconds.
                      </li>
                      <li>
                        Read the prompt, anchor it to Sarah's business context, then scan for the answer that best
                        supports TechStart's cash flow, tax strategy, and investor confidence.
                      </li>
                      <li>
                        Use the explanations after you submit. They show the exact reasoning Sarah will share in the
                        board meeting when defending method choices.
                      </li>
                      <li>
                        Flag any question that slows you down. Revisit the matching lesson before your next attempt
                        to strengthen that concept.
                      </li>
                    </ul>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-emerald-900">
                      <h3 className="font-semibold mb-2">Warm-up prompt</h3>
                      <p className="text-sm leading-relaxed">
                        Imagine a board member asks, "Why did you choose double-declining balance over straight-line
                        for our new equipment?" Spend 30 seconds describing the strategic rationale you would spotlight
                        first. That mindset will guide you through the toughest depreciation and inventory questions ahead.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section id="phase-4" className="space-y-6">
            <div className="text-center space-y-4">
              <Badge className="bg-amber-100 text-amber-800 text-lg px-4 py-2">
                ⏱️ Phase 4: Independent Practice – Take the Test
              </Badge>
              <div className="max-w-4xl mx-auto space-y-6">
                <Card className="border-amber-200 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2 text-amber-900">
                      <Timer className="h-5 w-5" />
                      Configure your question set
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-left text-slate-800">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="question-count" className="text-sm font-medium text-slate-700">
                        Number of questions (max {maxSelectableQuestions || 0})
                      </label>
                      <Input
                        id="question-count"
                        type="number"
                        min={maxSelectableQuestions === 0 ? 0 : 1}
                        max={Math.max(maxSelectableQuestions, 1)}
                        value={questionCount}
                        onChange={event => handleQuestionCountChange(Number(event.target.value))}
                        disabled={maxSelectableQuestions === 0}
                      />
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        type="button"
                        onClick={startPracticeTest}
                        disabled={selectedLessonIds.length === 0 || maxSelectableQuestions === 0}
                        className="flex items-center gap-2"
                      >
                        <ListChecks className="h-4 w-4" />
                        Start practice test
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleResetAll}
                        className="flex items-center gap-2"
                      >
                        <RefreshCw className="h-4 w-4" />
                        Reset filters &amp; progress
                      </Button>
                    </div>
                    <p className="text-sm text-slate-600">
                      Tip: Want a tougher round? Narrow the lesson focus or increase your question count until you hit
                      the maximum available.
                    </p>
                  </CardContent>
                </Card>

                {activeQuestions.length > 0 ? (
                  <ComprehensionCheck
                    questions={comprehensionItems}
                    title="Unit 7 Practice Test"
                    description="Answer the questions, then review the explanations to strengthen your board-ready asset and inventory strategy."
                    showExplanations={true}
                    allowRetry={true}
                    onComplete={(score, total) => {
                      const computedBreakdown = { ...lessonBreakdown }
                      setLastResult({
                        score,
                        total,
                        percentage: Math.round((score / total) * 100),
                        completedAt: new Date().toISOString(),
                        lessonBreakdown: computedBreakdown
                      })
                    }}
                  />
                ) : (
                  <Card className="border-dashed border-amber-300 bg-amber-50">
                    <CardHeader>
                      <CardTitle className="text-center text-amber-900">
                        Configure your set and press "Start practice test" to begin.
                      </CardTitle>
                    </CardHeader>
                  </Card>
                )}
              </div>
            </div>
          </section>

          <section id="phase-5" className="space-y-6">
            <div className="text-center space-y-4">
              <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
                🧮 Phase 5: Assessment – Score &amp; Insights
              </Badge>
              <div className="max-w-4xl mx-auto grid gap-6">
                <Card className="border-orange-200 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2 text-orange-900">
                      <CheckCircle2 className="h-5 w-5" />
                      Your current score snapshot
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-4 text-left text-slate-800">
                    {lastResult ? (
                      <div className="grid gap-4">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <Badge variant={lastResult.percentage >= 80 ? "default" : "destructive"} className="text-lg px-3 py-1">
                            {lastResult.score} / {lastResult.total} correct ({lastResult.percentage}% mastery)
                          </Badge>
                          {lastCompletionTime && (
                            <span className="text-sm text-slate-600">Last attempt: {lastCompletionTime}</span>
                          )}
                        </div>
                        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-orange-900 space-y-2">
                          <p className="font-semibold">Reading the results</p>
                          <p className="text-sm leading-relaxed">
                            A score of 80% or higher means you can defend Sarah's asset and inventory strategy with
                            confidence. If you scored lower, focus on the lessons with the largest slice in the breakdown
                            below before the next board rehearsal.
                          </p>
                        </div>
                        <div className="grid gap-3">
                          {lessonOptions.map(option => {
                            const count = lastResult.lessonBreakdown[option.id] ?? 0
                            if (count === 0) {
                              return null
                            }
                            return (
                              <div
                                key={`breakdown-${option.id}`}
                                className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm"
                              >
                                <span className="font-medium text-slate-800">{option.title}</span>
                                <span className="text-slate-600">{count} question{count !== 1 ? "s" : ""}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    ) : (
                      <p className="text-sm text-slate-600">
                        Complete a practice round to see your live score, lesson breakdown, and targeted improvement
                        advice.
                      </p>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <section id="phase-6" className="space-y-6">
            <div className="text-center space-y-4">
              <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
                🪞 Phase 6: Closing – Reflect &amp; Plan Ahead
              </Badge>
              <div className="max-w-4xl mx-auto space-y-6">
                <Card className="border-indigo-200 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2 text-indigo-900">
                      <NotebookPen className="h-5 w-5" />
                      Lock in your next move
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 text-left text-slate-800">
                    <p className="text-lg leading-relaxed">
                      Sarah ends every rehearsal by writing one improvement move and one strength she wants to showcase.
                      Do the same here. The next board meeting depends on consistent reflection and rapid iteration.
                    </p>
                    <ReflectionJournal
                      unitTitle="Unit 7 Practice Test Reflection"
                      prompts={[
                        {
                          id: "unit07-practice-test-reflection-strength",
                          category: "courage",
                          prompt: "What depreciation or inventory concept did you handle with confidence during this practice test, and how will you showcase it in the board presentation?",
                          placeholder: "Describe the question or concept you handled well and the evidence you will share with the board..."
                        },
                        {
                          id: "unit07-practice-test-reflection-focus",
                          category: "persistence",
                          prompt: "Which asset or inventory skill still needs polish before the advisory brief, and what action will you take to strengthen it?",
                          placeholder: "Explain the tricky area you want to improve and the specific practice plan you will use..."
                        }
                      ]}
                    />
                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 text-indigo-900 space-y-2">
                      <h3 className="font-semibold">Ready for the next rep?</h3>
                      <p className="text-sm leading-relaxed">
                        Repeat this practice test with a new question mix tomorrow. Consistent rehearsal keeps Sarah's
                        board presentation tight and your method-selection instincts sharp when the strategic questions
                        get tough.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <PhaseFooter
          lesson={practiceTestLessonData}
          unit={unit07Data}
          phase={currentPhase}
          phases={phasesForNavigation}
          navigationOverrides={footerNavigationOverrides}
        />
      </div>
    </div>
  )
}
