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
import type { UnitId, GlossaryField, GlossaryEntry } from "@/types/glossary"

const FIELD_LABELS: Record<GlossaryField, string> = {
  term_en: "English Term",
  term_zh: "中文术语",
  def_en: "English Definition",
  def_zh: "中文定义",
}

export default function FlashcardPlayer() {
  const searchParams = useSearchParams()
  const unitParam = searchParams.get("unit") as UnitId | null
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
    const next = markCorrect(advanceCard(session))
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
    const next = markIncorrect(advanceCard(session))
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
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-lg mb-2">Not enough terms</p>
          <p className="text-slate-400 text-sm">A unit needs at least 1 term to start flashcards.</p>
          <Button asChild variant="outline" className="mt-4 border-slate-600 text-slate-300">
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/student/practice-hub"
            className="text-sm text-slate-400 hover:text-slate-300 inline-flex items-center gap-1"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Practice Hub
          </Link>
          <span className="text-slate-500 text-sm"> › Flashcards › </span>
          <span className="text-slate-300 text-sm font-medium">{unitLabel}</span>
        </div>

        {isComplete ? (
          /* Session Complete */
          <div className="text-center py-12">
            <Badge variant="outline" className="mb-4 border-green-400 text-green-300">
              Session Complete
            </Badge>
            <h2 className="text-3xl font-bold text-white mb-2">Great work!</h2>
            <div className="text-6xl font-bold text-green-400 my-6">
              {Math.round(summary.accuracy * 100)}%
            </div>
            <div className="text-slate-300 mb-8 space-y-1">
              <p>{summary.correct} correct · {summary.incorrect} to review</p>
              <p className="text-slate-400 text-sm">{summary.total} cards reviewed</p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <Link href={`/student/practice-hub/matching${unitParam ? `?unit=${unitParam}` : ""}`}>
                  <Shuffle className="h-4 w-4 mr-2" />
                  Try Matching
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:text-white">
                <Link href="/student/practice-hub/progress">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Progress
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-slate-600 text-slate-300 hover:text-white">
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
              <span className="text-sm text-slate-400">
                Card {summary.total + 1} of {session.cards.length}
              </span>
              <span className="text-sm text-slate-400">{progress}%</span>
            </div>
            <div className="h-1 bg-slate-700 rounded-full mb-8 overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-300"
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
                  className="absolute inset-0 rounded-xl flex flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-800 to-blue-600 text-white"
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
                  className="absolute inset-0 rounded-xl flex flex-col items-center justify-center p-8 bg-white border border-slate-200"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  <div className="text-xs uppercase tracking-widest text-slate-400 mb-3">
                    {FIELD_LABELS[session.answerField]}
                  </div>
                  <div className="text-lg text-center text-slate-700 leading-relaxed">{answerValue}</div>
                  {card.def_zh && session.answerField === "def_en" && (
                    <div className="text-sm text-slate-400 mt-3 text-center">{card.def_zh}</div>
                  )}
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-slate-500 mb-6">
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

            <div className="text-center mt-4 text-xs text-slate-500">
              <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono">←</kbd> Review Again
              {" · "}
              <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono">→</kbd> Got It
              {" · "}
              <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono">Space</kbd> Flip
            </div>
          </>
        )}
      </div>
    </div>
  )
}
