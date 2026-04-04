"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Layers, BarChart3, Clock } from "lucide-react"
import { glossaryData } from "@/data/glossary"
import { filterByUnit } from "@/lib/glossary/index"
import { ALL_UNIT_IDS } from "@/lib/glossary/index"
import {
  createMatchingSession,
  selectTerm,
  selectDefinition,
  checkMatch,
  isMatchingComplete,
  getMatchingSummary,
} from "@/lib/study/modes"
import { recordMatchingSession } from "@/lib/study/modes/record-session"
import type { MatchingSession } from "@/lib/study/modes"
import type { UnitId, GlossaryEntry } from "@/types/glossary"

const VALID_UNIT_IDS: readonly string[] = ALL_UNIT_IDS

export default function MatchingGame() {
  const searchParams = useSearchParams()
  const rawUnit = searchParams.get("unit")
  const unitParam = rawUnit && VALID_UNIT_IDS.includes(rawUnit) ? (rawUnit as UnitId) : null
  const [session, setSession] = useState<MatchingSession | null>(null)
  const [isComplete, setIsComplete] = useState(false)
  const [elapsed, setElapsed] = useState(0)

  const terms: GlossaryEntry[] = unitParam
    ? filterByUnit(glossaryData, unitParam)
    : glossaryData

  useEffect(() => {
    if (terms.length >= 6 && !session) {
      try {
        setSession(createMatchingSession(terms))
      } catch {
        // Not enough terms
      }
    }
  }, [terms.length]) // eslint-disable-line react-hooks/exhaustive-deps

  // Timer
  const sessionActive = !!session && !isComplete
  useEffect(() => {
    if (!sessionActive) return
    const id = setInterval(() => setElapsed((p) => p + 1), 1000)
    return () => clearInterval(id)
  }, [sessionActive])

  // Check match when both selected
  useEffect(() => {
    if (session?.selectedTermSlug && session?.selectedDefSlug) {
      const timeout = setTimeout(() => {
        const { session: next } = checkMatch(session)
        setSession(next)
        if (isMatchingComplete(next)) {
          setIsComplete(true)
          try {
            recordMatchingSession(next, {
              unit_id: unitParam ?? "unit01",
              lesson_id: "practice-hub",
              topic_tags: [],
              mode: "solo",
            })
          } catch {
            // Storage may be unavailable
          }
        }
      }, 200)
      return () => clearTimeout(timeout)
    }
  }, [session?.selectedTermSlug, session?.selectedDefSlug]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleTermClick = useCallback(
    (slug: string) => {
      if (!session || isComplete) return
      setSession(selectTerm(session, slug))
    },
    [session, isComplete]
  )

  const handleDefClick = useCallback(
    (slug: string) => {
      if (!session || isComplete) return
      setSession(selectDefinition(session, slug))
    },
    [session, isComplete]
  )

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex items-center justify-center">
        <div className="text-center text-white">
          <p className="text-lg mb-2">Not enough terms</p>
          <p className="text-slate-400 text-sm">A unit needs at least 6 terms to play matching.</p>
          <Button asChild variant="outline" className="mt-4 border-slate-600 text-slate-300">
            <Link href="/student/practice-hub">Back to Practice Hub</Link>
          </Button>
        </div>
      </div>
    )
  }

  const summary = getMatchingSummary(session)
  const minutes = Math.floor(elapsed / 60)
  const seconds = elapsed % 60
  const progress = Math.round((session.matchedPairs.length / session.pairs.length) * 100)

  const unitLabel = unitParam
    ? `Unit ${unitParam.replace("unit", "").padStart(2, "0")}`
    : "All Units"

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/student/practice-hub"
            className="text-sm text-slate-400 hover:text-slate-300 inline-flex items-center gap-1"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Practice Hub
          </Link>
          <span className="text-slate-500 text-sm"> › Matching Game › </span>
          <span className="text-slate-300 text-sm font-medium">{unitLabel}</span>
        </div>

        {isComplete ? (
          /* Session Complete */
          <div className="text-center py-12">
            <Badge variant="outline" className="mb-4 border-green-400 text-green-300">
              All Matched!
            </Badge>
            <h2 className="text-3xl font-bold text-white mb-2">Matching Complete</h2>
            <div className="text-6xl font-bold text-green-400 my-6">
              {session.pairs.length}/{session.pairs.length}
            </div>
            <div className="text-slate-300 mb-8 space-y-1">
              <p>{summary.correctCount} correct · {summary.incorrectAttempts} wrong attempts</p>
              <p className="text-slate-400 text-sm">
                Time: {minutes}:{seconds.toString().padStart(2, "0")}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link href={`/student/practice-hub/flashcards${unitParam ? `?unit=${unitParam}` : ""}`}>
                  <Layers className="h-4 w-4 mr-2" />
                  Try Flashcards
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
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-xl font-bold text-white">Matching Game</h1>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-green-400 font-semibold text-sm">
                  {session.matchedPairs.length}/{session.pairs.length} matched
                </span>
                <span className="text-blue-300 font-semibold bg-blue-900/50 px-3 py-1 rounded-md text-sm">
                  <Clock className="h-3.5 w-3.5 inline mr-1" />
                  {minutes}:{seconds.toString().padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Progress */}
            <div className="h-1 bg-slate-700 rounded-full mb-6 overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="text-center text-sm text-slate-500 mb-6">
              Click a term, then click its matching definition
            </p>

            {/* Match Area */}
            <div className="grid grid-cols-2 gap-8">
              {/* Terms Column */}
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-500 mb-3 font-semibold">Terms</div>
                {session.pairs.map((pair) => {
                  const isMatched = session.matchedPairs.includes(pair.slug)
                  const isSelected = session.selectedTermSlug === pair.slug
                  const isWrong = session.wrongFlashSlug === pair.slug
                  return (
                    <button
                      key={pair.slug}
                      onClick={() => handleTermClick(pair.slug)}
                      disabled={isMatched}
                      className={`w-full text-left p-3 rounded-lg border-2 mb-2 text-sm font-semibold transition-all ${
                        isMatched
                          ? "border-green-300 bg-green-50 text-green-700 opacity-70 cursor-default"
                          : isWrong
                            ? "border-red-300 bg-red-50 text-red-700 animate-pulse"
                            : isSelected
                              ? "border-blue-500 bg-blue-50 text-blue-700"
                              : "border-slate-200 bg-white text-slate-700 hover:border-blue-400"
                      }`}
                    >
                      {pair.term_en}
                      {isMatched && " ✓"}
                    </button>
                  )
                })}
              </div>

              {/* Definitions Column */}
              <div>
                <div className="text-xs uppercase tracking-widest text-slate-500 mb-3 font-semibold">Definitions</div>
                {session.shuffledDefinitions.map((pair) => {
                  const isMatched = session.matchedPairs.includes(pair.slug)
                  const isSelected = session.selectedDefSlug === pair.slug
                  return (
                    <button
                      key={`def-${pair.slug}`}
                      onClick={() => handleDefClick(pair.slug)}
                      disabled={isMatched}
                      className={`w-full text-left p-3 rounded-lg border-2 mb-2 text-sm transition-all leading-relaxed ${
                        isMatched
                          ? "border-green-300 bg-green-50 text-green-700 opacity-70 cursor-default"
                          : isSelected
                            ? "border-blue-500 bg-blue-50 text-blue-700"
                            : "border-slate-200 bg-white text-slate-600 hover:border-blue-400"
                      }`}
                    >
                      <div>{pair.def_en}</div>
                      <div className="text-xs text-slate-400 mt-1">{pair.def_zh}</div>
                      {isMatched && <span className="text-green-600"> ✓</span>}
                    </button>
                  )
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
