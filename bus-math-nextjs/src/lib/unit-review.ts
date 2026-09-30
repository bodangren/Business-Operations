import type { UnitId } from "@/types/glossary"
import type {
  UnitReviewBankAdapter,
  UnitReviewConfig,
  UnitReviewLessonMeta,
  UnitReviewQuestion,
  UnitReviewQuestionCountPreset,
  UnitReviewQuestionSource,
  UnitReviewResponseRecord,
  UnitReviewResults,
  UnitReviewTopicResult,
} from "@/types/unit-review"

/** Question-count presets offered in Customize Review. */
export const REVIEW_QUESTION_COUNT_PRESETS: readonly UnitReviewQuestionCountPreset[] = [5, 10, 15]

/** Default mixed-review size when the question bank supports it. */
export const DEFAULT_REVIEW_QUESTION_COUNT = 10

/** Signature for an injectable random source so draws are deterministic in tests. */
export type RandomSource = () => number

/**
 * Shuffle a list without mutating the input, using an injectable random source.
 */
export function shuffleItems<T>(items: readonly T[], random: RandomSource = Math.random): T[] {
  const copy = [...items]
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1))
    const current = copy[index]
    copy[index] = copy[swapIndex]
    copy[swapIndex] = current
  }
  return copy
}

/**
 * Clamp a requested question count to the number of available questions.
 */
export function normalizeQuestionCount(requested: number, available: number): number {
  if (available <= 0) return 0
  const safe = Number.isFinite(requested) ? Math.floor(requested) : 0
  return Math.max(0, Math.min(safe, available))
}

/**
 * Question-count presets that fit the available question bank. Falls back to
 * the available count when the bank holds fewer than five questions.
 */
export function getSelectableQuestionCounts(available: number): number[] {
  if (available <= 0) return []
  const presets = REVIEW_QUESTION_COUNT_PRESETS.filter((preset) => preset <= available)
  return presets.length > 0 ? [...presets] : [available]
}

/**
 * Prepare one adapted question for presentation by shuffling its choices.
 */
export function toReviewQuestion(
  source: UnitReviewQuestionSource,
  random: RandomSource = Math.random,
): UnitReviewQuestion {
  return {
    id: source.id,
    lessonId: source.lessonId,
    lessonTitle: source.lessonTitle,
    prompt: source.prompt,
    choices: shuffleItems([source.correctAnswer, ...source.distractors], random),
    correctAnswer: source.correctAnswer,
    explanation: source.explanation,
    tags: source.objectiveTags,
  }
}

/**
 * Build a randomized review session from an adapter. Optional lesson filters
 * narrow the pool; the count is limited by what the bank supports.
 */
export function buildReviewQuestions(
  adapter: UnitReviewBankAdapter,
  config: UnitReviewConfig,
  random: RandomSource = Math.random,
): UnitReviewQuestion[] {
  const filter = config.lessonIds && config.lessonIds.length > 0
    ? { lessonIds: config.lessonIds }
    : undefined
  const pool = adapter.getQuestions(filter)
  const count = normalizeQuestionCount(config.questionCount, pool.length)
  return shuffleItems(pool, random)
    .slice(0, count)
    .map((source) => toReviewQuestion(source, random))
}

/**
 * Append a response record for an answered question.
 */
export function recordReviewAnswer(
  records: readonly UnitReviewResponseRecord[],
  question: UnitReviewQuestion,
  selectedAnswer: string,
  answeredAt: Date = new Date(),
): UnitReviewResponseRecord[] {
  return [
    ...records,
    {
      questionId: question.id,
      lessonId: question.lessonId,
      lessonTitle: question.lessonTitle,
      tags: question.tags,
      selectedAnswer,
      isCorrect: selectedAnswer === question.correctAnswer,
      answeredAt: answeredAt.toISOString(),
    },
  ]
}

/**
 * Get the ids of questions answered incorrectly.
 */
export function getMissedQuestionIds(records: readonly UnitReviewResponseRecord[]): string[] {
  const missed = new Set<string>()
  for (const record of records) {
    if (!record.isCorrect) missed.add(record.questionId)
  }
  return [...missed]
}

/**
 * Build a retry set containing only the questions missed in the prior attempt.
 */
export function buildRetryQuestions(
  questions: readonly UnitReviewQuestion[],
  records: readonly UnitReviewResponseRecord[],
  random: RandomSource = Math.random,
): UnitReviewQuestion[] {
  const missed = new Set(getMissedQuestionIds(records))
  return shuffleItems(
    questions.filter((question) => missed.has(question.id)),
    random,
  )
}

function tally(
  groups: Map<string, UnitReviewTopicResult>,
  key: string,
  label: string,
  isCorrect: boolean,
): void {
  const existing = groups.get(key)
  if (existing) {
    existing.total += 1
    if (isCorrect) existing.correct += 1
    return
  }
  groups.set(key, { key, label, correct: isCorrect ? 1 : 0, total: 1 })
}

/**
 * Summarize actual correct and incorrect performance by lesson and by topic
 * tag. This reports results, not mastery.
 */
export function summarizeReviewResults(
  records: readonly UnitReviewResponseRecord[],
): UnitReviewResults {
  const byLesson = new Map<string, UnitReviewTopicResult>()
  const byTag = new Map<string, UnitReviewTopicResult>()
  let correct = 0

  for (const record of records) {
    if (record.isCorrect) correct += 1
    tally(byLesson, record.lessonId, record.lessonTitle, record.isCorrect)
    for (const tag of record.tags) {
      tally(byTag, tag, tag, record.isCorrect)
    }
  }

  const total = records.length
  return {
    correct,
    total,
    incorrect: total - correct,
    percent: total > 0 ? Math.round((correct / total) * 100) : 0,
    byLesson: [...byLesson.values()],
    byTag: [...byTag.values()],
  }
}

/**
 * Build an adapter for one unit's question bank. Lesson metadata is derived
 * from the questions themselves so it cannot drift from the bank.
 */
export function createUnitReviewAdapter(
  unitId: UnitId,
  unitLabel: string,
  questions: readonly UnitReviewQuestionSource[],
): UnitReviewBankAdapter {
  const lessons: UnitReviewLessonMeta[] = []
  const lessonIndex = new Map<string, UnitReviewLessonMeta>()

  for (const question of questions) {
    const existing = lessonIndex.get(question.lessonId)
    if (existing) {
      existing.questionCount += 1
      continue
    }
    const meta: UnitReviewLessonMeta = {
      lessonId: question.lessonId,
      lessonTitle: question.lessonTitle,
      questionCount: 1,
    }
    lessonIndex.set(question.lessonId, meta)
    lessons.push(meta)
  }

  return {
    unitId,
    unitLabel,
    lessons,
    getQuestions: (filter) => {
      if (!filter?.lessonIds || filter.lessonIds.length === 0) {
        return [...questions]
      }
      const allowed = new Set(filter.lessonIds)
      return questions.filter((question) => allowed.has(question.lessonId))
    },
  }
}
