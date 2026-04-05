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
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg mb-2">Not enough terms</p>
          <p className="text-muted-foreground text-sm">A unit needs at least 6 terms to play matching.</p>
          <Button asChild variant="outline" className="mt-4">
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
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/student/practice-hub"
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Practice Hub
          </Link>
          <span className="text-muted-foreground text-sm"> › Matching Game › </span>
          <span className="text-sm font-medium">{unitLabel}</span>
        </div>

        {isComplete ? (
          /* Session Complete */
          <div className="text-center py-12">
            <Badge variant="outline" className="mb-4 border-green-500 text-green-600">
              All Matched!
            </Badge>
            <h2 className="text-3xl font-bold mb-2">Matching Complete</h2>
            <div className="text-6xl font-bold text-green-600 my-6">
              {session.pairs.length}/{session.pairs.length}
            </div>
            <div className="mb-8 space-y-1">
              <p>{summary.correctCount} correct · {summary.incorrectAttempts} wrong attempts</p>
              <p className="text-muted-foreground text-sm">
                Time: {minutes}:{seconds.toString().padStart(2, "0")}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild>
                <Link href={`/student/practice-hub/flashcards${unitParam ? `?unit=${unitParam}` : ""}`}>
                  <Layers className="h-4 w-4 mr-2" />
                  Try Flashcards
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
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-xl font-bold">Matching Game</h1>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-green-600 font-semibold text-sm">
                  {session.matchedPairs.length}/{session.pairs.length} matched
                </span>
                <span className="text-primary font-semibold bg-primary/10 px-3 py-1 rounded-md text-sm">
                  <Clock className="h-3.5 w-3.5 inline mr-1" />
                  {minutes}:{seconds.toString().padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Progress */}
            <div className="h-1 bg-muted rounded-full mb-6 overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            <p className="text-center text-sm text-muted-foreground mb-6">
              Click a term, then click its matching definition
            </p>

            {/* Match Area */}
            <div className="grid grid-cols-2 gap-8">
              {/* Terms Column */}
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">Terms</div>
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
                              ? "border-primary bg-primary/5 text-primary"
                              : "border-border bg-card hover:border-primary/50"
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
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3 font-semibold">Definitions</div>
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
                            ? "border-primary bg-primary/5 text-primary"
                            : "border-border bg-card hover:border-primary/50"
                      }`}
                    >
                      <div>{pair.def_en}</div>
                      <div className="text-xs text-muted-foreground mt-1">{pair.def_zh}</div>
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
