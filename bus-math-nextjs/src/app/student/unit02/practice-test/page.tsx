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
  allUnit02Phase5Questions,
  getRandomQuestions,
  type Unit02LessonId,
  type Unit02Phase5Question
} from "@/data/question-banks/unit02-phase5"
import { practiceTestLessonData, practiceTestPhases, unit02Data } from "./practice-test-data"
import { cn } from "@/lib/utils"
import { CheckCircle2, ListChecks, NotebookPen, RefreshCw, Sparkles, Target, Timer, Wand2 } from "lucide-react"

const PRACTICE_TEST_STORAGE_KEY = "unit02_practice_test_state_v1"

const lessonOptions: Array<{
  id: Unit02LessonId
  title: string
  focus: string
  color: string
}> = [
  {
    id: "lesson01",
    title: "Lesson 01 – Month-End Wizard Vision",
    focus: "Spot process bottlenecks and sell the automation story",
    color: "border-sky-300 bg-sky-50"
  },
  {
    id: "lesson02",
    title: "Lesson 02 – Adjusting Entries Foundation",
    focus: "Lock in accruals, deferrals, and closing discipline",
    color: "border-emerald-300 bg-emerald-50"
  },
  {
    id: "lesson03",
    title: "Lesson 03 – Four Scenarios into Ledger",
    focus: "Translate real activity into GAAP-ready journal entries",
    color: "border-amber-300 bg-amber-50"
  },
  {
    id: "lesson04",
    title: "Lesson 04 – Automation Blueprint",
    focus: "Design flowcharts and RACI handoffs for clean closes",
    color: "border-purple-300 bg-purple-50"
  },
  {
    id: "lesson05",
    title: "Lesson 05 – Excel Controls & Power Tools",
    focus: "Use Power Query, data validation, and ties to prevent drift",
    color: "border-cyan-300 bg-cyan-50"
  },
  {
    id: "lesson06",
    title: "Lesson 06 – Scenario Switching & Dashboards",
    focus: "Pivot between monthly narratives with dynamic KPIs",
    color: "border-rose-300 bg-rose-50"
  },
  {
    id: "lesson07",
    title: "Lesson 07 – Audit & QA Readiness",
    focus: "Prove reconciliation discipline to keep investors confident",
    color: "border-indigo-300 bg-indigo-50"
  }
]

type StoredResult = {
  score: number
  total: number
  percentage: number
  completedAt: string
  lessonBreakdown: Record<Unit02LessonId, number>
}

type StoredState = {
  selectedLessonIds: Unit02LessonId[]
  questionCount: number
  lastResult?: StoredResult
}

export default function PracticeTestPage() {
  const defaultLessonSelection = lessonOptions.map(option => option.id)
  const [selectedLessonIds, setSelectedLessonIds] = useState<Unit02LessonId[]>(defaultLessonSelection)
  const [questionCount, setQuestionCount] = useState<number>(15)
  const [activeQuestions, setActiveQuestions] = useState<Unit02Phase5Question[]>([])
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

    return allUnit02Phase5Questions.filter(question => selectedLessonIds.includes(question.lessonId))
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
        return Math.min(15, maxSelectableQuestions)
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

  const handleToggleLesson = (lessonId: Unit02LessonId) => {
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

    const questions = getRandomQuestions(questionCount, {
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
    setQuestionCount(15)
    setActiveQuestions([])
    setLastResult(undefined)
    try {
      window.localStorage.removeItem(PRACTICE_TEST_STORAGE_KEY)
    } catch (error) {
      console.error("Failed to clear practice test state", error)
    }
  }

  const comprehensionItems = useMemo(() => {
    return activeQuestions.map(question => ({
      id: question.id,
      question: question.prompt,
      answers: [question.correctAnswer, ...question.distractors],
      explanation: question.explanation
    }))
  }, [activeQuestions])

  const lessonBreakdown = useMemo(() => {
    return activeQuestions.reduce<Record<Unit02LessonId, number>>((acc, question) => {
      acc[question.lessonId] = (acc[question.lessonId] ?? 0) + 1
      return acc
    }, {} as Record<Unit02LessonId, number>)
  }, [activeQuestions])

  const currentPhase = phasesForNavigation.find(phase => phase.sequence === 5)!

  const navigationOverrides = {
    lessonHref: "/student/unit02/practice-test",
    lessonLabel: "Practice Test",
    phaseLabel: "Practice Test"
  }

  const footerNavigationOverrides = {
    lessonHref: "/student/unit02/practice-test",
    lessonOverviewLabel: "Practice Test Overview",
    backToLessonLabel: "Back to Practice Test Overview",
    completeLessonLabel: "Finish Practice Test",
    phaseHrefBuilder: (phase: LessonPhase) => `/student/unit02/practice-test#phase-${phase.sequence}`
  }

  const lastCompletionTime = lastResult
    ? new Date(lastResult.completedAt).toLocaleString(undefined, {
        dateStyle: "medium",
        timeStyle: "short"
      })
    : null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <PhaseHeader
          lesson={practiceTestLessonData}
          unit={unit02Data}
          phase={currentPhase}
          phases={phasesForNavigation}
          navigationOverrides={navigationOverrides}
        />

        <main className="space-y-12">
          <section id="phase-1" className="space-y-6">
            <div className="text-center space-y-4">
              <Badge className="bg-sky-100 text-sky-800 text-lg px-4 py-2">
                ✨ Phase 1: Hook – Month-End Pressure Test
              </Badge>
              <Card className="max-w-4xl mx-auto border-sky-200 bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2 text-sky-900">
                    <Sparkles className="h-5 w-5" />
                    Sarah's close clock is ticking
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-left">
                  <p className="text-lg leading-relaxed text-slate-800">
                    It is day 30 and Sarah Chen just opened her Month-End Wizard dashboard. The backlog is growing,
                    deferred revenue needs adjusting, and the CFO expects a polished close package by 9 a.m. tomorrow.
                    This practice test lets you rehearse the exact questions Sarah will face so both of you can deliver
                    a calm, accurate close in hours instead of days.
                  </p>
                  <div className="bg-sky-50 border border-sky-200 rounded-lg p-4 text-sky-900">
                    <h3 className="font-semibold mb-2">Why this matters</h3>
                    <p className="text-sm leading-relaxed">
                      Investors read the month-end memo before every funding conversation. When your adjustments,
                      reconciliations, and dashboards survive tough questions, they know TechStart can scale. This
                      rehearsal protects Sarah from last-minute errors and proves the automation playbook actually
                      works under pressure.
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
                      Decide which parts of the close you want to rehearse today. Each practice set taps the shared
                      Unit 2 question bank that powers every phase-5 assessment. Use the toggles below to target the
                      automation moves, adjusting entries, and reconciliation habits that still feel shaky.
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
                        Keep each question under 60 seconds. That mirrors the response time Sarah needs during the real
                        month-end stand-up with leadership.
                      </li>
                      <li>
                        Anchor every scenario to TechStart’s workflow: What ledger entry, control, or dashboard view keeps
                        the numbers trustworthy?
                      </li>
                      <li>
                        Use the explanations as mini playbooks. Note which automation feature (Power Query refresh,
                        reconciliation tie-out, scenario switch) solved the problem.
                      </li>
                      <li>
                        Flag slow questions and pair them with the lesson you need to revisit before the next sprint
                        checkpoint.
                      </li>
                    </ul>
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-emerald-900">
                      <h3 className="font-semibold mb-2">Warm-up prompt</h3>
                      <p className="text-sm leading-relaxed">
                        Picture the CFO asking, “What proof do we have that the deferred revenue balance is correct at
                        midnight?” Spend 30 seconds explaining the control you would spotlight first. Hold that clarity
                        as you move into the question set.
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
                ⏱️ Phase 4: Independent Practice – Run the Close
              </Badge>
              <div className="max-w-4xl mx-auto space-y-6">
                <Card className="border-amber-200 bg-white">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-center gap-2 text-amber-900">
                      <Timer className="h-5 w-5" />
                      Configure your practice draw
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
                    <div className="flex flex-wrap gap-2">
                      {[10, 15, 20].map(preset => {
                        const disabled = maxSelectableQuestions === 0
                        return (
                          <Button
                            key={`preset-${preset}`}
                            type="button"
                            variant={questionCount === preset ? "default" : "secondary"}
                            onClick={() => handleQuestionCountChange(preset)}
                            disabled={disabled}
                          >
                            {preset} questions
                          </Button>
                        )
                      })}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button
                        type="button"
                        onClick={startPracticeTest}
                        disabled={selectedLessonIds.length === 0 || maxSelectableQuestions === 0}
                        className="flex items-center gap-2"
                      >
                        <ListChecks className="h-4 w-4" />
                        Start practice run
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
                      Tip: Use 10 questions for a quick pulse check, 15 for a balanced rehearsal, or 20 for a full
                      month-end dry run. Narrow the lesson filters when you want to drill a single automation skill.
                    </p>
                  </CardContent>
                </Card>

                {activeQuestions.length > 0 ? (
                  <ComprehensionCheck
                    questions={comprehensionItems}
                    title="Unit 2 Practice Test"
                    description="Answer each scenario, then study the explanations to sharpen your month-end automation strategy."
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
                        Configure your question mix and press “Start practice run” to begin.
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
                            Aim for 80% or higher so you can walk into the month-end huddle ready to explain every
                            adjustment. If your score dipped lower, revisit the lessons that show the biggest counts in
                            the breakdown before the next close rehearsal.
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
                        Complete a practice round to see your live score, lesson breakdown, and targeted month-end
                        improvement advice.
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
                      Sarah ends every close rehearsal by logging one automation win and one adjustment she will tune
                      before the next sprint. Capture your plan here so tomorrow’s rehearsal starts with purpose.
                    </p>
                    <ReflectionJournal
                      unitTitle="Unit 2 Practice Test Reflection"
                      prompts={[
                        {
                          id: "unit02-practice-test-reflection-strength",
                          category: "courage",
                          prompt: "Which automation or adjusting-entry skill felt strongest during this run, and how will you highlight it in the close briefing?",
                          placeholder: "Describe the question you answered with confidence and the proof you will share in the month-end memo..."
                        },
                        {
                          id: "unit02-practice-test-reflection-focus",
                          category: "persistence",
                          prompt: "Where did the practice test slow you down, and what specific action will you take before the next rehearsal?",
                          placeholder: "Name the skill that needs polish and the exact habit, resource, or lesson you will use to improve it..."
                        }
                      ]}
                    />
                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 text-indigo-900 space-y-2">
                      <h3 className="font-semibold">Ready for the next rep?</h3>
                      <p className="text-sm leading-relaxed">
                        Run the practice test again with a fresh draw once you refine your plan. Consistent reps keep the
                        Month-End Wizard fast, accurate, and investor-ready.
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
          unit={unit02Data}
          phase={currentPhase}
          phases={phasesForNavigation}
          navigationOverrides={footerNavigationOverrides}
        />
      </div>
    </div>
  )
}
