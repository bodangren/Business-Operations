"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { CheckCircle2, RotateCcw, XCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
  DEFAULT_REVIEW_QUESTION_COUNT,
  buildRetryQuestions,
  buildReviewQuestions,
  getSelectableQuestionCounts,
  normalizeQuestionCount,
  recordReviewAnswer,
  summarizeReviewResults,
  type RandomSource,
} from "@/lib/unit-review"
import type {
  UnitReviewBankAdapter,
  UnitReviewQuestion,
  UnitReviewResponseRecord,
  UnitReviewState,
} from "@/types/unit-review"

export interface UnitReviewProps {
  adapter: UnitReviewBankAdapter
  /** Unit route used by the Return to Unit action. */
  unitHref: string
  /** Injectable random source for deterministic tests. */
  random?: RandomSource
}

/**
 * Shared data-driven unit review. One component drives all eight units through
 * three states: Start, Questions, and Results.
 */
export default function UnitReview({ adapter, unitHref, random }: UnitReviewProps) {
  const [state, setState] = useState<UnitReviewState>("start")
  const [questionCount, setQuestionCount] = useState(DEFAULT_REVIEW_QUESTION_COUNT)
  const [selectedLessonIds, setSelectedLessonIds] = useState<string[]>([])
  const [questions, setQuestions] = useState<UnitReviewQuestion[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [records, setRecords] = useState<UnitReviewResponseRecord[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)

  const availableCount = useMemo(() => adapter.getQuestions().length, [adapter])
  const countOptions = useMemo(
    () => getSelectableQuestionCounts(availableCount),
    [availableCount],
  )
  const effectiveCount = normalizeQuestionCount(questionCount, availableCount)
  const results = useMemo(() => summarizeReviewResults(records), [records])

  const question = questions[currentIndex]
  const isAnswered = records.length > currentIndex

  const startReview = () => {
    setQuestions(
      buildReviewQuestions(
        adapter,
        {
          unitId: adapter.unitId,
          questionCount: effectiveCount,
          lessonIds: selectedLessonIds.length > 0 ? selectedLessonIds : undefined,
        },
        random,
      ),
    )
    setCurrentIndex(0)
    setRecords([])
    setSelectedAnswer(null)
    setState("questions")
  }

  const checkAnswer = () => {
    if (!question || !selectedAnswer) return
    if (records.length > currentIndex) return
    setRecords((previous) => {
      if (previous.length > currentIndex) return previous
      return recordReviewAnswer(previous, question, selectedAnswer)
    })
  }

  const goNext = () => {
    if (currentIndex + 1 >= questions.length) {
      setState("results")
      return
    }
    setCurrentIndex((index) => index + 1)
    setSelectedAnswer(null)
  }

  const retryMissed = () => {
    const missed = buildRetryQuestions(questions, records, random)
    if (missed.length === 0) return
    setQuestions(missed)
    setCurrentIndex(0)
    setRecords([])
    setSelectedAnswer(null)
    setState("questions")
  }

  const toggleLesson = (lessonId: string) => {
    setSelectedLessonIds((previous) =>
      previous.includes(lessonId)
        ? previous.filter((id) => id !== lessonId)
        : [...previous, lessonId],
    )
  }

  if (state === "start") {
    return (
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-8">
        <div className="space-y-2">
          <Badge variant="outline" className="text-xs">
            Unit Review
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight">{adapter.unitLabel} Review</h1>
          <p className="text-muted-foreground">
            Answer {effectiveCount} mixed questions from this unit, one at a time.
          </p>
        </div>

        <Button size="lg" onClick={startReview}>
          Start Review
        </Button>

        <details className="rounded-lg border border-border/60 p-4">
          <summary className="cursor-pointer text-sm font-medium">Customize Review</summary>
          <div className="mt-4 space-y-4">
            <fieldset>
              <legend className="text-sm font-medium">Question count</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {countOptions.map((count) => (
                  <Button
                    key={count}
                    type="button"
                    size="sm"
                    variant={count === effectiveCount ? "default" : "outline"}
                    onClick={() => setQuestionCount(count)}
                  >
                    {count} questions
                  </Button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="text-sm font-medium">Lessons (optional)</legend>
              <div className="mt-2 space-y-1">
                {adapter.lessons.map((lesson) => (
                  <label
                    key={lesson.lessonId}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-border"
                      checked={selectedLessonIds.includes(lesson.lessonId)}
                      onChange={() => toggleLesson(lesson.lessonId)}
                    />
                    {lesson.lessonTitle} ({lesson.questionCount})
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
        </details>
      </div>
    )
  }

  if (state === "questions" && question) {
    return (
      <div className="mx-auto max-w-3xl space-y-6 px-4 py-8">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Badge variant="outline" className="text-xs">
            Question {currentIndex + 1} of {questions.length}
          </Badge>
          <span className="text-xs text-muted-foreground">{question.lessonTitle}</span>
        </div>

        <div
          className="h-2 w-full overflow-hidden rounded-full bg-primary/20"
          role="progressbar"
          aria-valuenow={currentIndex + 1}
          aria-valuemin={1}
          aria-valuemax={questions.length}
          aria-label={`Question ${currentIndex + 1} of ${questions.length}`}
        >
          <div
            className="h-full bg-primary transition-all"
            style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          />
        </div>

        <h1 className="text-xl font-semibold">{question.prompt}</h1>

        <div role="group" aria-label="Answer choices" className="space-y-2">
          {question.choices.map((choice, choiceIndex) => {
            const isChosen = selectedAnswer === choice
            const isCorrect = choice === question.correctAnswer
            return (
              <button
                key={`${question.id}-${choiceIndex}`}
                type="button"
                disabled={isAnswered}
                aria-pressed={isChosen}
                onClick={() => setSelectedAnswer(choice)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-lg border p-3 text-left text-sm transition-colors",
                  !isAnswered && "hover:border-primary/40 hover:bg-muted/50",
                  isAnswered && isCorrect && "border-green-300 bg-green-50 dark:bg-green-950/20",
                  isAnswered && isChosen && !isCorrect && "border-red-300 bg-red-50 dark:bg-red-950/20",
                  isChosen && !isAnswered && "border-primary bg-primary/5",
                )}
              >
                <span>{choice}</span>
                {isAnswered && isCorrect ? (
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" />
                ) : null}
                {isAnswered && isChosen && !isCorrect ? (
                  <XCircle className="h-4 w-4 shrink-0 text-red-600" />
                ) : null}
              </button>
            )
          })}
        </div>

        {isAnswered ? (
          <div className="rounded-lg bg-muted/40 p-4">
            <p className="text-sm font-medium">
              {records[currentIndex]?.isCorrect ? "Correct" : "Not quite"}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{question.explanation}</p>
          </div>
        ) : null}

        {isAnswered ? (
          <Button onClick={goNext}>
            {currentIndex + 1 >= questions.length ? "See Results" : "Next Question"}
          </Button>
        ) : (
          <Button onClick={checkAnswer} disabled={!selectedAnswer}>
            Check Answer
          </Button>
        )}
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-8">
      <div className="space-y-2">
        <Badge variant="outline" className="text-xs">
          Results
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight">{adapter.unitLabel} Review Results</h1>
        <p className="text-muted-foreground">
          {results.correct} of {results.total} correct ({results.percent}%).
        </p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-sm">Correct</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold text-green-600">
            {results.correct}
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-1">
            <CardTitle className="text-sm">Incorrect</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold text-red-600">
            {results.incorrect}
          </CardContent>
        </Card>
      </div>

      <section aria-labelledby="review-by-lesson" className="space-y-2">
        <h2 id="review-by-lesson" className="text-sm font-semibold">
          By lesson
        </h2>
        <ul className="space-y-1 text-sm">
          {results.byLesson.map((row) => (
            <li key={row.key} className="flex items-center justify-between gap-4">
              <span>{row.label}</span>
              <span className="text-muted-foreground">
                {row.correct}/{row.total} correct
              </span>
            </li>
          ))}
        </ul>
      </section>

      {results.byTag.length > 0 ? (
        <section aria-labelledby="review-by-topic" className="space-y-2">
          <h2 id="review-by-topic" className="text-sm font-semibold">
            By topic
          </h2>
          <ul className="space-y-1 text-sm">
            {results.byTag.map((row) => (
              <li key={row.key} className="flex items-center justify-between gap-4">
                <span>{row.label}</span>
                <span className="text-muted-foreground">
                  {row.correct}/{row.total} correct
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row">
        {results.incorrect > 0 ? (
          <Button onClick={retryMissed}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Retry Missed Questions
          </Button>
        ) : null}
        <Button variant="outline" asChild>
          <Link href={unitHref}>Return to Unit</Link>
        </Button>
      </div>
    </div>
  )
}
