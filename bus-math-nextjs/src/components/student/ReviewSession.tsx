"use client"

import React, { useState, useCallback } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shuffle, BarChart3 } from "lucide-react"
import { glossaryData } from "@/data/glossary"
import {
  getDueTerms,
  processReview,
  updateMastery,
  createMastery,
  type ReviewRating,
} from "@/lib/study/srs"
import type { DueReviewEntry } from "@/lib/study/storage-schema"
import { useStudyData } from "@/contexts/StudyDataContext"

export default function ReviewSession() {
  const { data, mutate } = useStudyData()
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentIndexRef = React.useRef(currentIndex)
  const [isFlipped, setIsFlipped] = useState(false)

  React.useEffect(() => {
    currentIndexRef.current = currentIndex
  }, [currentIndex])

  const handleRating = useCallback((rating: ReviewRating) => {
    if (!data) return
    const dueEntries = getDueTerms(data.study_state.due_review_snapshot)
    const index = currentIndexRef.current
    const entry = dueEntries[index]
    if (!entry) return

    const now = new Date()
    const { entry: updatedEntry, masteryDelta } = processReview(entry, rating, now)

    let mastery = data.study_state.mastery_by_term.find((m) => m.term_slug === entry.term_slug)
    if (!mastery) {
      const glossaryTerm = glossaryData.find((g) => g.slug === entry.term_slug)
      if (!glossaryTerm) return
      mastery = createMastery(entry.term_slug, glossaryTerm.units)
    }
    const isCorrect = rating === "good" || rating === "easy"
    const updatedMastery = updateMastery(mastery, isCorrect, masteryDelta)

    const newDueSnapshot = data.study_state.due_review_snapshot.map((e) =>
      e.term_slug === entry.term_slug ? updatedEntry : e
    )
    const newMasteryByTerm = data.study_state.mastery_by_term
      .filter((m) => m.term_slug !== entry.term_slug)
      .concat(updatedMastery)

    mutate({
      ...data,
      study_state: {
        ...data.study_state,
        due_review_snapshot: newDueSnapshot,
        mastery_by_term: newMasteryByTerm,
      },
      last_updated_at: new Date().toISOString(),
    })

    setCurrentIndex((prev) => prev + 1)
    setIsFlipped(false)
  }, [data, mutate])

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg mb-2">Loading...</p>
        </div>
      </div>
    )
  }

  const dueEntries = getDueTerms(data.study_state.due_review_snapshot)
  const isComplete = currentIndex >= dueEntries.length

  if (dueEntries.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-8 max-w-2xl">
          <div className="mb-6">
            <Link
              href="/student/practice-hub"
              className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Practice Hub
            </Link>
          </div>
          <div className="text-center py-12">
            <Badge variant="outline" className="mb-4">
              No Due Reviews
            </Badge>
            <h2 className="text-3xl font-bold mb-2">All caught up!</h2>
            <p className="text-muted-foreground mb-8">
              You have no terms due for review right now. Check back later!
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild>
                <Link href="/student/practice-hub/flashcards">
                  <Shuffle className="h-4 w-4 mr-2" />
                  Practice Flashcards
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
        </div>
      </div>
    )
  }

  let currentEntry: DueReviewEntry | undefined
  let glossaryTerm: typeof glossaryData[number] | undefined
  let progress: number | undefined
  if (!isComplete) {
    currentEntry = dueEntries[currentIndex]
    glossaryTerm = glossaryData.find((g) => g.slug === currentEntry!.term_slug)
    progress = Math.round((currentIndex / dueEntries.length) * 100)
  }

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
          <span className="text-muted-foreground text-sm"> › Review</span>
        </div>

        {isComplete ? (
          <div className="text-center py-12">
            <Badge variant="outline" className="mb-4 border-green-500 text-green-600">
              Review Complete
            </Badge>
            <h2 className="text-3xl font-bold mb-2">Great work!</h2>
            <p className="text-muted-foreground mb-8">
              You reviewed {dueEntries.length} terms!
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button asChild>
                <Link href="/student/practice-hub/flashcards">
                  <Shuffle className="h-4 w-4 mr-2" />
                  Practice Flashcards
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
                Card {currentIndex + 1} of {dueEntries.length}
              </span>
              <span className="text-sm text-muted-foreground">{progress}%</span>
            </div>
            <div className="h-1 bg-muted rounded-full mb-8 overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Review Card */}
            {glossaryTerm && (
              <div
                className="relative w-full min-h-[280px] cursor-pointer mb-4"
                style={{ perspective: "800px" }}
              >
                <button
                  className="relative w-full min-h-[280px] transition-transform duration-500 text-left"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                  }}
                  onClick={() => setIsFlipped((prev) => !prev)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      setIsFlipped((prev) => !prev)
                    }
                  }}
                  aria-label={`Flashcard for ${glossaryTerm.term_en}. Click or press Enter/Space to flip.`}
                  aria-live="polite"
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 rounded-xl flex flex-col items-center justify-center p-8 bg-gradient-to-br from-primary to-accent text-primary-foreground"
                    style={{ backfaceVisibility: "hidden" }}
                    aria-hidden={isFlipped}
                  >
                    <div className="text-xs uppercase tracking-widest opacity-60 mb-3">
                      Term
                    </div>
                    <div className="text-3xl font-bold text-center">{glossaryTerm?.term_en}</div>
                    {glossaryTerm?.term_zh && (
                      <div className="text-lg opacity-75 mt-2">{glossaryTerm.term_zh}</div>
                    )}
                  </div>
                  {/* Back */}
                  <div
                    className="absolute inset-0 rounded-xl flex flex-col items-center justify-center p-8 bg-card border"
                    style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                    aria-hidden={!isFlipped}
                  >
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                      Definition
                    </div>
                    <div className="text-lg text-center leading-relaxed">{glossaryTerm?.def_en}</div>
                    {glossaryTerm?.def_zh && (
                      <div className="text-sm text-muted-foreground mt-3 text-center">{glossaryTerm.def_zh}</div>
                    )}
                  </div>
                </button>
              </div>
            )}

            <p className="text-center text-sm text-muted-foreground mb-6">
              Tap card to flip
            </p>

            {/* Rating Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={() => handleRating("again")}
                disabled={!isFlipped}
                variant="outline"
                className="border-red-300 text-red-600 hover:bg-red-50 hover:text-red-700 disabled:opacity-40"
              >
                Again
              </Button>
              <Button
                onClick={() => handleRating("hard")}
                disabled={!isFlipped}
                variant="outline"
                className="border-amber-300 text-amber-600 hover:bg-amber-50 hover:text-amber-700 disabled:opacity-40"
              >
                Hard
              </Button>
              <Button
                onClick={() => handleRating("good")}
                disabled={!isFlipped}
                className="bg-green-600 hover:bg-green-700 disabled:opacity-40"
              >
                Good
              </Button>
              <Button
                onClick={() => handleRating("easy")}
                disabled={!isFlipped}
                className="bg-blue-600 hover:bg-blue-700 disabled:opacity-40"
              >
                Easy
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
