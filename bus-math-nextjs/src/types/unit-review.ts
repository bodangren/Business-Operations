import type { UnitId } from "./glossary"

/** The three states of the shared unit-review study tool. */
export type UnitReviewState = "start" | "questions" | "results"

/** Question-count presets offered inside Customize Review. */
export type UnitReviewQuestionCountPreset = 5 | 10 | 15

/**
 * A normalized question-bank question. The bank-specific question shape is
 * adapted into this contract so all units share one review component.
 */
export interface UnitReviewQuestionSource {
  id: string
  lessonId: string
  lessonTitle: string
  prompt: string
  correctAnswer: string
  distractors: string[]
  explanation: string
  objectiveTags: string[]
}

/** A question prepared for presentation, with shuffled answer choices. */
export interface UnitReviewQuestion {
  id: string
  lessonId: string
  lessonTitle: string
  prompt: string
  choices: string[]
  correctAnswer: string
  explanation: string
  tags: string[]
}

/** Lesson metadata derived from an adapted question bank. */
export interface UnitReviewLessonMeta {
  lessonId: string
  lessonTitle: string
  questionCount: number
}

/** Optional lesson filter for a review session. */
export interface UnitReviewFilter {
  lessonIds?: string[]
}

/** Adapter that exposes one unit's question bank through the shared contract. */
export interface UnitReviewBankAdapter {
  unitId: UnitId
  unitLabel: string
  lessons: readonly UnitReviewLessonMeta[]
  getQuestions: (filter?: UnitReviewFilter) => UnitReviewQuestionSource[]
}

/** Configuration for one review session. */
export interface UnitReviewConfig {
  unitId: UnitId
  questionCount: number
  lessonIds?: string[]
}

/** One answered question, retained for results reporting and retry. */
export interface UnitReviewResponseRecord {
  questionId: string
  lessonId: string
  lessonTitle: string
  tags: string[]
  selectedAnswer: string
  isCorrect: boolean
  answeredAt: string
}

/** Correct and incorrect totals for one lesson or topic. */
export interface UnitReviewTopicResult {
  key: string
  label: string
  correct: number
  total: number
}

/** Actual performance summary, never a mastery claim. */
export interface UnitReviewResults {
  correct: number
  total: number
  incorrect: number
  percent: number
  byLesson: UnitReviewTopicResult[]
  byTag: UnitReviewTopicResult[]
}
