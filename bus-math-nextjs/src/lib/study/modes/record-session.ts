import type { UnitId, TopicTag, GlossaryField } from "@/types/glossary"
import type {
  ActivityType,
  SessionMode,
  SessionRecord,
  SessionResponse,
  SessionResults,
  DueReviewEntry,
  ReviewOutcome,
} from "../storage-schema"
import { loadStudyData, saveStudyData } from "../storage"
import { processReview, createMastery, updateMastery, scheduleNewTerm, type ReviewRating } from "../srs"
import type { FlashcardSession } from "./flashcards"
import type { MatchingSession } from "./matching"
import type { SpeedRoundSession } from "./speed-round"
import type { ReviewRating } from "../srs"
import { glossaryData } from "@/data/glossary"

// ---------------------------------------------------------------------------
// Session Recording — persists study mode results into local tracking state
// ---------------------------------------------------------------------------

interface RecordSessionOptions {
  unit_id: UnitId
  lesson_id: string
  topic_tags: TopicTag[]
  mode: SessionMode
  prompt_field?: GlossaryField
  answer_field?: GlossaryField
  self_rating?: "easy" | "okay" | "hard"
  student_note?: string
}

function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`
}

function toReviewOutcome(rating: ReviewRating): ReviewOutcome {
  return rating
}

/**
 * Record a flashcard session into local storage and update mastery/SRS state.
 */
export function recordFlashcardSession(
  session: FlashcardSession,
  options: RecordSessionOptions
): SessionRecord {
  const data = loadStudyData()
  const now = new Date().toISOString()

  const responses: SessionResponse[] = session.cards
    .filter((c) => c.result !== "unseen")
    .map((card, i) => {
      const isCorrect = card.result === "correct"
      const rating: ReviewRating = isCorrect ? "good" : "again"

      // Update or create mastery
      let mastery = data.study_state.mastery_by_term.find((m) => m.term_slug === card.slug)
      if (!mastery) {
        mastery = createMastery(card.slug, [options.unit_id])
        data.study_state.mastery_by_term.push(mastery)
      }

      const reviewResult = getOrCreateReviewEntry(data.study_state.due_review_snapshot, card.slug)
      const { entry: updatedEntry, masteryDelta } = processReview(reviewResult, rating)
      const masteryIdx = data.study_state.mastery_by_term.findIndex((m) => m.term_slug === card.slug)
      data.study_state.mastery_by_term[masteryIdx] = updateMastery(
        data.study_state.mastery_by_term[masteryIdx],
        isCorrect,
        masteryDelta
      )

      // Update due review snapshot
      const reviewIdx = data.study_state.due_review_snapshot.findIndex((e) => e.term_slug === card.slug)
      if (reviewIdx >= 0) {
        data.study_state.due_review_snapshot[reviewIdx] = updatedEntry
      } else {
        data.study_state.due_review_snapshot.push(updatedEntry)
      }

      return {
        item_id: `fc-${i}`,
        item_type: "glossary-card" as const,
        term_slug: card.slug,
        prompt_field: options.prompt_field ?? session.promptField,
        answer_field: options.answer_field ?? session.answerField,
        prompt_value: card.term_en,
        expected_answer: card.def_en,
        student_answer: card.def_en,
        is_correct: isCorrect,
        attempt_number: 1,
        response_time_ms: 0,
        review_outcome: toReviewOutcome(rating),
      }
    })

  const total = session.correctCount + session.incorrectCount
  const results: SessionResults = {
    items_seen: total,
    items_answered: total,
    items_correct: session.correctCount,
    items_incorrect: session.incorrectCount,
    accuracy: total > 0 ? session.correctCount / total : 0,
    retry_count: 0,
    score: session.correctCount,
    mastery_delta: computeTotalMasteryDelta(responses),
  }

  const record = buildSessionRecord("flashcards", session.started_at, now, options, responses, results)
  persistSession(data, record)
  return record
}

/**
 * Record a matching session into local storage and update mastery/SRS state.
 */
export function recordMatchingSession(
  session: MatchingSession,
  options: RecordSessionOptions
): SessionRecord {
  const data = loadStudyData()
  const now = new Date().toISOString()

  const responses: SessionResponse[] = session.pairs
    .filter((p) => session.matchedPairs.includes(p.slug))
    .map((pair, i) => {
      const rating: ReviewRating = "good"
      let mastery = data.study_state.mastery_by_term.find((m) => m.term_slug === pair.slug)
      if (!mastery) {
        mastery = createMastery(pair.slug, [options.unit_id])
        data.study_state.mastery_by_term.push(mastery)
      }

      const reviewResult = getOrCreateReviewEntry(data.study_state.due_review_snapshot, pair.slug)
      const { entry: updatedEntry, masteryDelta } = processReview(reviewResult, rating)
      const masteryIdx = data.study_state.mastery_by_term.findIndex((m) => m.term_slug === pair.slug)
      data.study_state.mastery_by_term[masteryIdx] = updateMastery(
        data.study_state.mastery_by_term[masteryIdx],
        true,
        masteryDelta
      )

      const reviewIdx = data.study_state.due_review_snapshot.findIndex((e) => e.term_slug === pair.slug)
      if (reviewIdx >= 0) {
        data.study_state.due_review_snapshot[reviewIdx] = updatedEntry
      } else {
        data.study_state.due_review_snapshot.push(updatedEntry)
      }

      return {
        item_id: `match-${i}`,
        item_type: "match-pair" as const,
        term_slug: pair.slug,
        prompt_field: "term_en" as const,
        answer_field: "def_en" as const,
        prompt_value: pair.term_en,
        expected_answer: pair.def_en,
        student_answer: pair.def_en,
        is_correct: true,
        attempt_number: 1,
        response_time_ms: 0,
        review_outcome: toReviewOutcome(rating),
      }
    })

  const results: SessionResults = {
    items_seen: session.pairs.length,
    items_answered: session.matchedPairs.length,
    items_correct: session.correctCount,
    items_incorrect: session.incorrectCount,
    accuracy: session.pairs.length > 0 ? session.correctCount / session.pairs.length : 0,
    retry_count: session.incorrectCount,
    score: session.correctCount,
    mastery_delta: computeTotalMasteryDelta(responses),
  }

  const record = buildSessionRecord("matching", session.started_at, now, options, responses, results)
  persistSession(data, record)
  return record
}

/**
 * Record a speed round session into local storage and update mastery/SRS state.
 */
export function recordSpeedRoundSession(
  session: SpeedRoundSession,
  options: RecordSessionOptions
): SessionRecord {
  const data = loadStudyData()

  // Create a summary response per unique term seen.
  // Speed round does not track per-term outcomes, so we approximate from aggregate accuracy.
  const uniqueSlugs = new Set(session.questions.map((q) => q.slug))
  const responses: SessionResponse[] = []
  const approxAccuracy = session.totalAnswered > 0 ? session.correctCount / session.totalAnswered : 0

  for (const slug of uniqueSlugs) {
    const rating: ReviewRating = approxAccuracy >= 0.7 ? "good" : "again"
    const wasCorrect = approxAccuracy >= 0.7

    let mastery = data.study_state.mastery_by_term.find((m) => m.term_slug === slug)
    if (!mastery) {
      mastery = createMastery(slug, [options.unit_id])
      data.study_state.mastery_by_term.push(mastery)
    }

    const reviewResult = getOrCreateReviewEntry(data.study_state.due_review_snapshot, slug)
    const { entry: updatedEntry, masteryDelta } = processReview(reviewResult, rating)
    const masteryIdx = data.study_state.mastery_by_term.findIndex((m) => m.term_slug === slug)
    data.study_state.mastery_by_term[masteryIdx] = updateMastery(
      data.study_state.mastery_by_term[masteryIdx],
      wasCorrect,
      masteryDelta
    )

    const reviewIdx = data.study_state.due_review_snapshot.findIndex((e) => e.term_slug === slug)
    if (reviewIdx >= 0) {
      data.study_state.due_review_snapshot[reviewIdx] = updatedEntry
    } else {
      data.study_state.due_review_snapshot.push(updatedEntry)
    }

    responses.push({
      item_id: `sr-${slug}`,
      item_type: "mcq",
      term_slug: slug,
      prompt_field: "term_en",
      answer_field: "def_en",
      prompt_value: session.questions.find((q) => q.slug === slug)?.term_en ?? slug,
      expected_answer: session.questions.find((q) => q.slug === slug)?.correctDefEn ?? "",
      is_correct: wasCorrect,
      attempt_number: 1,
      response_time_ms: 0,
      review_outcome: toReviewOutcome(rating),
    })
  }

  const accuracy = session.totalAnswered > 0 ? session.correctCount / session.totalAnswered : 0
  const results: SessionResults = {
    items_seen: session.totalAnswered,
    items_answered: session.totalAnswered,
    items_correct: session.correctCount,
    items_incorrect: session.totalAnswered - session.correctCount,
    accuracy,
    retry_count: 0,
    score: session.correctCount,
    mastery_delta: 0,
  }

  const elapsed = Math.max(0, 90 - session.timeRemaining)
  const endedAt = new Date(new Date(session.started_at).getTime() + elapsed * 1000).toISOString()

  const record = buildSessionRecord("speed-round", session.started_at, endedAt, options, responses, results)
  persistSession(data, record)
  return record
}

// -- Helpers ---------------------------------------------------------------

function getOrCreateReviewEntry(
  snapshot: DueReviewEntry[],
  termSlug: string
): DueReviewEntry {
  const existing = snapshot.find((e) => e.term_slug === termSlug)
  if (existing) return existing
  return scheduleNewTerm(termSlug)
}

function buildSessionRecord(
  activityType: ActivityType,
  startedAt: string,
  endedAt: string,
  options: RecordSessionOptions,
  responses: SessionResponse[],
  results: SessionResults
): SessionRecord {
  const durationSeconds = Math.max(
    0,
    Math.round((new Date(endedAt).getTime() - new Date(startedAt).getTime()) / 1000)
  )

  return {
    session_id: generateId(),
    started_at: startedAt,
    ended_at: endedAt,
    duration_seconds: durationSeconds,
    activity: {
      activity_id: generateId(),
      activity_type: activityType,
      mode: options.mode,
      route: `/student/practice-hub/${activityType}`,
      title: `${activityType} session`,
    },
    curriculum: {
      unit_id: options.unit_id,
      lesson_id: options.lesson_id,
      topic_tags: options.topic_tags,
      term_slugs: [...new Set(responses.map((r) => r.term_slug))],
    },
    results,
    responses,
    notes: {
      self_rating: options.self_rating ?? "okay",
      student_note: options.student_note,
    },
  }
}

function persistSession(data: ReturnType<typeof loadStudyData>, record: SessionRecord): void {
  data.sessions.push(record)

  // Update aggregate stats
  const stats = data.study_state.aggregate_stats
  stats.total_sessions += 1
  stats.total_questions_answered += record.results.items_answered
  stats.total_terms_tracked = data.study_state.mastery_by_term.length
  stats.total_due_now = data.study_state.due_review_snapshot.filter((e) => e.is_due).length
  stats.total_study_seconds += record.duration_seconds

  const totalCorrect = data.sessions.reduce((sum, s) => sum + s.results.items_correct, 0)
  const totalAnswered = data.sessions.reduce((sum, s) => sum + s.results.items_answered, 0)
  stats.overall_accuracy = totalAnswered > 0 ? totalCorrect / totalAnswered : 0

  saveStudyData(data)
}

// ---------------------------------------------------------------------------
// Review Session Recording
// ---------------------------------------------------------------------------

interface ReviewResponse {
  term_slug: string
  rating: ReviewRating
}

export interface ReviewSession {
  started_at: string
  responses: ReviewResponse[]
}

/**
 * Record a review session into local storage and update mastery/SRS state.
 */
export function recordReviewSession(
  session: ReviewSession,
  options: RecordSessionOptions
): SessionRecord {
  const data = loadStudyData()
  const now = new Date().toISOString()

  const responses: SessionResponse[] = session.responses.map((response, i) => {
    const glossaryTerm = glossaryData.find((g) => g.slug === response.term_slug)
    if (!glossaryTerm) throw new Error(`Glossary term not found: ${response.term_slug}`)

    const isCorrect = response.rating === "good" || response.rating === "easy"
    const rating: ReviewRating = response.rating

    // Update or create mastery
    let mastery = data.study_state.mastery_by_term.find((m) => m.term_slug === response.term_slug)
    if (!mastery) {
      mastery = createMastery(response.term_slug, glossaryTerm.units)
      data.study_state.mastery_by_term.push(mastery)
    }

    const reviewResult = getOrCreateReviewEntry(data.study_state.due_review_snapshot, response.term_slug)
    const { entry: updatedEntry, masteryDelta } = processReview(reviewResult, rating, new Date(now))
    const masteryIdx = data.study_state.mastery_by_term.findIndex((m) => m.term_slug === response.term_slug)
    data.study_state.mastery_by_term[masteryIdx] = updateMastery(
      data.study_state.mastery_by_term[masteryIdx],
      isCorrect,
      masteryDelta
    )

    // Update due review snapshot
    const reviewIdx = data.study_state.due_review_snapshot.findIndex((e) => e.term_slug === response.term_slug)
    if (reviewIdx >= 0) {
      data.study_state.due_review_snapshot[reviewIdx] = updatedEntry
    } else {
      data.study_state.due_review_snapshot.push(updatedEntry)
    }

    return {
      item_id: `review-${i}`,
      item_type: "glossary-card" as const,
      term_slug: response.term_slug,
      prompt_field: "term_en" as const,
      answer_field: "def_en" as const,
      prompt_value: glossaryTerm.term_en,
      expected_answer: glossaryTerm.def_en,
      student_answer: glossaryTerm.def_en,
      is_correct: isCorrect,
      attempt_number: 1,
      response_time_ms: 0,
      review_outcome: toReviewOutcome(rating),
    }
  })

  const correctCount = responses.filter((r) => r.is_correct).length
  const incorrectCount = responses.length - correctCount
  const results: SessionResults = {
    items_seen: responses.length,
    items_answered: responses.length,
    items_correct: correctCount,
    items_incorrect: incorrectCount,
    accuracy: responses.length > 0 ? correctCount / responses.length : 0,
    retry_count: 0,
    score: correctCount,
    mastery_delta: computeTotalMasteryDelta(responses),
  }

  const record = buildSessionRecord("review", session.started_at, now, options, responses, results)
  persistSession(data, record)
  return record
}

function computeTotalMasteryDelta(responses: SessionResponse[]): number {
  return responses.reduce((sum, r) => sum + (r.is_correct ? 0.1 : -0.2), 0)
}
