import { createEmptyCard, fsrs, Rating, type Card, type Grade } from "ts-fsrs"
import type { DueReviewEntry, SchedulerState, TermMastery } from "./storage-schema"

// ---------------------------------------------------------------------------
// Spaced-Repetition Scheduler — wraps ts-fsrs behind project utilities
// ---------------------------------------------------------------------------

export type ReviewRating = "again" | "hard" | "good" | "easy"

const RATING_MAP: Record<ReviewRating, Grade> = {
  again: Rating.Again,
  hard: Rating.Hard,
  good: Rating.Good,
  easy: Rating.Easy,
}

const scheduler = fsrs()

/**
 * Convert a ts-fsrs Card to our serializable SchedulerState.
 */
function cardToSchedulerState(card: Card): SchedulerState {
  return {
    engine: "fsrs",
    state: {
      stability: card.stability,
      difficulty: card.difficulty,
      elapsed_days: card.elapsed_days,
      scheduled_days: card.scheduled_days,
      reps: card.reps,
      lapses: card.lapses,
    },
  }
}

/**
 * Build a ts-fsrs Card from our SchedulerState for scheduling computation.
 */
function stateToCard(schedulerState: SchedulerState, due: Date): Card {
  const empty = createEmptyCard()
  return {
    ...empty,
    due,
    stability: schedulerState.state.stability,
    difficulty: schedulerState.state.difficulty,
    elapsed_days: schedulerState.state.elapsed_days,
    scheduled_days: schedulerState.state.scheduled_days,
    reps: schedulerState.state.reps,
    lapses: schedulerState.state.lapses,
  }
}

/**
 * Schedule a new term — creates an FSRS card and returns the initial review entry.
 */
export function scheduleNewTerm(termSlug: string): DueReviewEntry {
  const card = createEmptyCard()
  const now = new Date()
  const preview = scheduler.repeat(card, now)

  return {
    term_slug: termSlug,
    scheduled_for: preview[Rating.Good].card.due.toISOString(),
    is_due: true,
    scheduler: cardToSchedulerState(card),
  }
}

/**
 * Process a review rating for a term and return the updated review entry.
 */
export function processReview(
  entry: DueReviewEntry,
  rating: ReviewRating,
  now: Date = new Date()
): { entry: DueReviewEntry; masteryDelta: number } {
  const card = stateToCard(entry.scheduler, new Date(entry.scheduled_for))
  const result = scheduler.next(card, now, RATING_MAP[rating])

  const updatedCard = result.card
  const nextEntry: DueReviewEntry = {
    term_slug: entry.term_slug,
    scheduled_for: updatedCard.due.toISOString(),
    is_due: updatedCard.due <= now,
    scheduler: cardToSchedulerState(updatedCard),
  }

  const masteryDeltas: Record<ReviewRating, number> = {
    again: -0.2,
    hard: -0.05,
    good: 0.1,
    easy: 0.2,
  }

  return { entry: nextEntry, masteryDelta: masteryDeltas[rating] }
}

/**
 * Get all terms that are currently due for review.
 */
export function getDueTerms(entries: DueReviewEntry[], now: Date = new Date()): DueReviewEntry[] {
  return entries.filter((e) => new Date(e.scheduled_for) <= now)
}

/**
 * Compute the proficiency band from a mastery score.
 */
export function proficiencyBand(score: number): TermMastery["proficiency_band"] {
  if (score >= 0.85) return "strong"
  if (score >= 0.6) return "proficient"
  if (score >= 0.3) return "developing"
  return "new"
}

/**
 * Update mastery record after a review attempt.
 */
export function updateMastery(
  mastery: TermMastery,
  isCorrect: boolean,
  masteryDelta: number
): TermMastery {
  const newScore = Math.max(0, Math.min(1, mastery.mastery_score + masteryDelta))
  return {
    ...mastery,
    times_seen: mastery.times_seen + 1,
    times_correct: mastery.times_correct + (isCorrect ? 1 : 0),
    times_incorrect: mastery.times_incorrect + (isCorrect ? 0 : 1),
    last_result: isCorrect ? "correct" : "incorrect",
    mastery_score: newScore,
    proficiency_band: proficiencyBand(newScore),
    last_reviewed_at: new Date().toISOString(),
  }
}

/**
 * Create a fresh mastery record for a term not yet tracked.
 */
export function createMastery(termSlug: string, units: string[]): TermMastery {
  return {
    term_slug: termSlug,
    units: units as TermMastery["units"],
    times_seen: 0,
    times_correct: 0,
    times_incorrect: 0,
    last_result: "skipped",
    mastery_score: 0,
    proficiency_band: "new",
    last_reviewed_at: new Date().toISOString(),
  }
}

export { RATING_MAP }
