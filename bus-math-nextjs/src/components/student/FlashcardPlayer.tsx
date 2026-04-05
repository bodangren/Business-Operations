"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle2, XCircle, Shuffle, BarChart3 } from "lucide-react"
import { glossaryData } from "@/data/glossary"
import { filterByUnit } from "@/lib/glossary/index"
import {
  createFlashcardSession,
  flipCard,
  markCorrect,
  markIncorrect,
  advanceCard,
  isSessionComplete,
  getSessionSummary,
} from "@/lib/study/modes"
import { recordFlashcardSession } from "@/lib/study/modes/record-session"
import type { FlashcardSession } from "@/lib/study/modes"
import { ALL_UNIT_IDS } from "@/lib/glossary/index"
import type { UnitId, GlossaryField, GlossaryEntry } from "@/types/glossary"

const VALID_UNIT_IDS: readonly string[] = ALL_UNIT_IDS

const FIELD_LABELS: Record<GlossaryField, string> = {
  term_en: "English Term",
  term_zh: "中文术语",
  def_en: "English Definition",
  def_zh: "中文定义",
}

export default function FlashcardPlayer() {
  const searchParams = useSearchParams()
  const rawUnit = searchParams.get("unit")
  const unitParam = rawUnit && VALID_UNIT_IDS.includes(rawUnit) ? (rawUnit as UnitId) : null
  const [session, setSession] = useState<FlashcardSession | null>(null)
  const [isComplete, setIsComplete] = useState(false)

  const terms: GlossaryEntry[] = unitParam
    ? filterByUnit(glossaryData, unitParam)
    : glossaryData

  useEffect(() => {
    if (terms.length > 0 && !session) {
      try {
        setSession(createFlashcardSession(terms, "term_en", "def_en"))
      } catch {
        // Not enough terms
      }
    }
  }, [terms.length]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleFlip = useCallback(() => {
    if (!session || isComplete) return
    setSession(flipCard(session))
  }, [session, isComplete])

  const handleCorrect = useCallback(() => {
    if (!session || isComplete || !session.isFlipped) return
    const marked = markCorrect(session)
    const next = advanceCard(marked)
    setSession(next)
    if (isSessionComplete(next)) {
      setIsComplete(true)
      try {
        recordFlashcardSession(next, {
          unit_id: unitParam ?? "unit01",
          lesson_id: "practice-hub",
          topic_tags: [],
          mode: "solo",
        })
      } catch {
        // Storage may be unavailable
      }
    }
  }, [session, isComplete, unitParam])

  const handleIncorrect = useCallback(() => {
    if (!session || isComplete || !session.isFlipped) return
    const marked = markIncorrect(session)
    const next = advanceCard(marked)
    setSession(next)
    if (isSessionComplete(next)) {
      setIsComplete(true)
      try {
        recordFlashcardSession(next, {
          unit_id: unitParam ?? "unit01",
          lesson_id: "practice-hub",
          topic_tags: [],
          mode: "solo",
        })
      } catch {
        // Storage may be unavailable
      }
    }
  }, [session, isComplete, unitParam])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "Spacebar") {
        e.preventDefault()
        handleFlip()
      } else if (e.key === "ArrowRight" || e.key === "Enter") {
        handleCorrect()
      } else if (e.key === "ArrowLeft") {
        handleIncorrect()
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [handleFlip, handleCorrect, handleIncorrect])

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg mb-2">Not enough terms</p>
          <p className="text-muted-foreground text-sm">A unit needs at least 1 term to start flashcards.</p>
          <Button asChild variant="outline" className="mt-4">
            <Link href="/student/practice-hub">Back to Practice Hub</Link>
          </Button>
        </div>
      </div>
    )
  }

  const summary = getSessionSummary(session)
  const card = session.cards[session.currentIndex]
  const promptValue = card[session.promptField]
  const answerValue = card[session.answerField]
  const progress = Math.round(
    ((session.correctCount + session.incorrectCount) / (session.cards.length)) * 100
  )

  const unitLabel = unitParam
    ? `Unit ${unitParam.replace("unit", "").padStart(2, "0")}`
    : "All Units"

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/student/practice-hub"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Practice Hub
          </Link>
          <span className="text-muted-foreground text-sm"> › Flashcards › </span>
          <span className="text-sm font-medium">{unitLabel}</span>
        </div>

        {isComplete ? (
          /* Session Complete */
          <div className="text-center py-12">
            <Badge variant="outline" className="mb-4 border-green-500 text-green-600">
              Session Complete
            </Badge>
            <h2 className="text-3xl font-bold mb-2">Great work!</h2>
            <div className="text-6xl font-bold text-green-600 my-6">
              {Math.round(summary.accuracy * 100)}%
            </div>
            <div className="mb-8 space-y-1">
              <p>{summary.correct} correct · {summary.incorrect} to review</p>
              <p className="text-muted-foreground text-sm">{summary.total} cards reviewed</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href={`/student/practice-hub/matching${unitParam ? `?unit=${unitParam}` : ""}`}>
                  <Shuffle className="h-4 w-4 mr-2" />
                  Try Matching
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/student/practice-hub/progress">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Progress
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/student/practice-hub">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Hub
                </Link>
              </Button>
            </div>
          </div>
        ) : (
          <>
            {/* Progress */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">
                Card {summary.total + 1} of {session.cards.length}
              </span>
              <span className="text-sm text-muted-foreground">{progress}%</span>
            </div>
            <div className="h-1 bg-muted rounded-full mb-8 overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Flashcard */}
            <div
              className="relative w-full min-h-[280px] cursor-pointer mb-4"
              style={{ perspective: "800px" }}
              onClick={handleFlip}
            >
              <div
                className="relative w-full min-h-[280px] transition-transform duration-500"
                style={{ transformStyle: "preserve-3d", transform: session.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 rounded-xl flex flex-col items-center justify-center p-8 bg-gradient-to-br from-primary to-accent text-primary-foreground"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="text-xs uppercase tracking-widest opacity-60 mb-3">
                    {FIELD_LABELS[session.promptField]}
                  </div>
                  <div className="text-3xl font-bold text-center">{promptValue}</div>
                  {card.term_zh && session.promptField === "term_en" && (
                    <div className="text-lg opacity-75 mt-2">{card.term_zh}</div>
                  )}
                </div>
                {/* Back */}
                <div
                  className="absolute inset-0 rounded-xl flex flex-col items-center justify-center p-8 bg-card border"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    {FIELD_LABELS[session.answerField]}
                  </div>
                  <div className="text-lg text-center leading-relaxed">{answerValue}</div>
                  {card.def_zh && session.answerField === "def_en" && (
                    <div className="text-sm text-muted-foreground mt-3 text-center">{card.def_zh}</div>
                  )}
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground mb-6">
              Tap card or press Space to flip
            </p>

            {/* Actions */}
            <div className="flex gap-4 justify-center">
              <Button
                onClick={handleIncorrect}
                disabled={!session.isFlipped}
                variant="outline"
                className="border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700 disabled:opacity-40"
              >
                <XCircle className="h-4 w-4 mr-2" />
                Review Again
              </Button>
              <Button
                onClick={handleCorrect}
                disabled={!session.isFlipped}
                className="bg-green-600 hover:bg-green-700 disabled:opacity-40"
              >
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Got It!
              </Button>
            </div>

            <div className="text-center mt-4 text-xs text-muted-foreground">
              <kbd className="px-1.5 py-0.5 bg-muted rounded border font-mono">←</kbd> Review Again
              {" · "}
              <kbd className="px-1.5 py-0.5 bg-muted rounded border font-mono">→</kbd> Got It
              {" · "}
              <kbd className="px-1.5 py-0.5 bg-muted rounded border font-mono">Space</kbd> Flip
            </div>
          </>
        )}
      </div>
    </div>
  )
}
