"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, RotateCcw, Layers } from "lucide-react"
import { glossaryData } from "@/data/glossary"
import { filterByUnit } from "@/lib/glossary/index"
import { ALL_UNIT_IDS } from "@/lib/glossary/index"
import {
  createSpeedRoundSession,
  answerQuestion,
  tickTimer,
  isGameOver,
  getSpeedRoundSummary,
} from "@/lib/study/modes"
import { recordSpeedRoundSession } from "@/lib/study/modes/record-session"
import type { SpeedRoundSession } from "@/lib/study/modes"
import type { UnitId, GlossaryEntry } from "@/types/glossary"

type FeedbackState = { type: "correct" | "wrong"; message: string } | null

const VALID_UNIT_IDS: readonly string[] = ALL_UNIT_IDS

export default function SpeedRoundGame() {
  const searchParams = useSearchParams()
  const rawUnit = searchParams.get("unit")
  const unitParam = rawUnit && VALID_UNIT_IDS.includes(rawUnit) ? (rawUnit as UnitId) : null
  const [session, setSession] = useState<SpeedRoundSession | null>(null)
  const [countdown, setCountdown] = useState<number | null>(3)
  const [feedback, setFeedback] = useState<FeedbackState>(null)
  const [isComplete, setIsComplete] = useState(false)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const recordedRef = useRef(false)

  const terms: GlossaryEntry[] = unitParam
    ? filterByUnit(glossaryData, unitParam)
    : glossaryData

  const startGame = useCallback(() => {
    if (terms.length >= 4) {
      try {
        setSession(createSpeedRoundSession(terms))
        setCountdown(3)
        setIsComplete(false)
        setFeedback(null)
        recordedRef.current = false
      } catch {
        // Not enough terms
      }
    }
  }, [terms])

  useEffect(() => {
    if (!session && terms.length >= 4) {
      startGame()
    }
  }, [terms.length]) // eslint-disable-line react-hooks/exhaustive-deps

  // Countdown
  useEffect(() => {
    if (countdown === null || countdown <= 0) return
    const timeout = setTimeout(() => setCountdown((c) => (c ?? 1) - 1), 1000)
    return () => clearTimeout(timeout)
  }, [countdown])

  // Game timer — pure state tick only
  useEffect(() => {
    if (countdown !== 0 || !session || isComplete) return
    timerRef.current = setInterval(() => {
      setSession((prev) => {
        if (!prev || isGameOver(prev)) return prev
        return tickTimer(prev)
      })
    }, 1000)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [countdown, isComplete]) // eslint-disable-line react-hooks/exhaustive-deps

  // Detect game-over from timer tick — side effects outside setState
  useEffect(() => {
    if (!session || !isGameOver(session) || isComplete || recordedRef.current) return
    recordedRef.current = true
    setIsComplete(true)
    if (timerRef.current) clearInterval(timerRef.current)
    try {
      recordSpeedRoundSession(session, {
        unit_id: unitParam ?? "unit01",
        lesson_id: "practice-hub",
        topic_tags: [],
        mode: "solo",
      })
    } catch {
      // Storage may be unavailable
    }
  }, [session, isComplete, unitParam])

  // Clear feedback after delay
  useEffect(() => {
    if (!feedback) return
    const timeout = setTimeout(() => setFeedback(null), 800)
    return () => clearTimeout(timeout)
  }, [feedback])

  const handleAnswer = useCallback(
    (answer: string) => {
      if (!session || isComplete || countdown !== 0 || recordedRef.current) return
      const { correct, session: next } = answerQuestion(session, answer)
      setSession(next)
      setFeedback({
        type: correct ? "correct" : "wrong",
        message: correct ? "Correct! +2s bonus" : "Wrong! -1 life",
      })
      if (isGameOver(next)) {
        recordedRef.current = true
        setIsComplete(true)
        if (timerRef.current) clearInterval(timerRef.current)
        try {
          recordSpeedRoundSession(next, {
            unit_id: unitParam ?? "unit01",
            lesson_id: "practice-hub",
            topic_tags: [],
            mode: "solo",
          })
        } catch {
          // Storage may be unavailable
        }
      }
    },
    [session, isComplete, countdown, unitParam]
  )

  // Keyboard shortcuts
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!session || isComplete || countdown !== 0) return
      const num = parseInt(e.key)
      if (num >= 1 && num <= 4) {
        const q = session.questions[session.currentIndex]
        if (q && q.options[num - 1]) {
          handleAnswer(q.options[num - 1])
        }
      }
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [session, isComplete, countdown, handleAnswer])

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-lg mb-2">Not enough terms</p>
          <p className="text-slate-400 text-sm">A unit needs at least 4 terms for speed round.</p>
          <Button asChild variant="outline" className="mt-4 border-slate-600 text-slate-300">
            <Link href="/student/practice-hub">Back to Practice Hub</Link>
          </Button>
        </div>
      </div>
    )
  }

  const summary = getSpeedRoundSummary(session)
  const currentQ = session.questions[session.currentIndex]
  const timerMinutes = Math.floor(session.timeRemaining / 60)
  const timerSeconds = session.timeRemaining % 60
  const isUrgent = session.timeRemaining <= 10

  const unitLabel = unitParam
    ? `Unit ${unitParam.replace("unit", "").padStart(2, "0")}`
    : "All Units"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      {/* Countdown overlay */}
      {countdown !== null && countdown > 0 && (
        <div className="fixed inset-0 bg-black/85 flex items-center justify-center z-50">
          <div className="text-8xl font-extrabold text-white">{countdown}</div>
        </div>
      )}

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
          <span className="text-slate-500 text-sm"> › Speed Round › </span>
          <span className="text-slate-300 text-sm font-medium">{unitLabel}</span>
        </div>

        {isComplete ? (
          /* Game Over */
          <div className="text-center py-12">
            <Badge variant="outline" className="mb-4 border-amber-400 text-amber-300">
              Game Over
            </Badge>
            <h2 className="text-3xl font-bold text-white mb-2">Speed Round Results</h2>
            <div className="text-6xl font-bold text-amber-400 my-6">
              {summary.correctCount}
            </div>
            <div className="text-slate-300 mb-8 space-y-1">
              <p>
                {summary.correctCount}/{summary.totalAnswered} correct ·{" "}
                {Math.round(summary.accuracy * 100)}% accuracy
              </p>
              <p className="text-slate-400 text-sm">
                Best streak: {summary.bestStreak} · Time remaining: {summary.timeRemaining}s
              </p>
              <p className="text-slate-400 text-sm">
                Lives remaining: {summary.livesRemaining}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button onClick={startGame} className="bg-amber-600 hover:bg-amber-700">
                <RotateCcw className="h-4 w-4 mr-2" />
                Play Again
              </Button>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href={`/student/practice-hub/flashcards${unitParam ? `?unit=${unitParam}` : ""}`}>
                  <Layers className="h-4 w-4 mr-2" />
                  Try Flashcards
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
            {/* HUD */}
            <div className="flex items-center justify-between mb-4 p-3 bg-slate-900 rounded-lg">
              <div className={`text-2xl font-bold font-mono ${isUrgent ? "text-red-400" : "text-white"}`}>
                {timerMinutes}:{timerSeconds.toString().padStart(2, "0")}
              </div>
              <div className="text-white">
                <span className="text-green-400 font-bold">{session.correctCount}</span>
                {" / "}
                {session.totalAnswered}
              </div>
              {session.streak >= 3 && (
                <div className="text-amber-400 text-sm font-semibold">
                  🔥 {session.streak} streak
                </div>
              )}
            </div>

            {/* Lives */}
            <div className="text-center mb-6 text-lg">
              {Array.from({ length: session.maxLives }, (_, i) => (
                <span key={i} className="mx-0.5">
                  {i < session.lives ? "❤️" : "🖤"}
                </span>
              ))}
            </div>

            {/* Question Card */}
            <div className="bg-gradient-to-br from-blue-800 to-blue-600 rounded-xl p-8 text-center text-white mb-4">
              <div className="text-xs uppercase tracking-widest opacity-60 mb-3">
                Define this term
              </div>
              <div className="text-3xl font-bold">{currentQ.term_en}</div>
              <div className="text-lg opacity-75 mt-2">{currentQ.term_zh}</div>
            </div>

            {/* Feedback */}
            {feedback && (
              <div
                className={`text-center p-3 rounded-lg mb-4 font-semibold text-sm ${
                  feedback.type === "correct"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {feedback.message}
              </div>
            )}

            {/* Answer Options */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {currentQ.options.map((option, i) => (
                <button
                  key={i}
                  onClick={() => handleAnswer(option)}
                  disabled={countdown !== 0}
                  className="text-left p-4 rounded-lg border-2 border-slate-200 bg-white text-sm hover:border-blue-500 transition-colors disabled:opacity-50"
                >
                  <span className="inline-block w-6 h-6 bg-slate-100 rounded text-center text-xs font-semibold leading-6 mr-2 text-slate-500">
                    {i + 1}
                  </span>
                  {option}
                </button>
              ))}
            </div>

            <div className="text-center text-xs text-slate-500">
              Press <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono">1</kbd>{" "}
              <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono">2</kbd>{" "}
              <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono">3</kbd>{" "}
              <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 font-mono">4</kbd> to answer
            </div>
          </>
        )}
      </div>
    </div>
  )
}
