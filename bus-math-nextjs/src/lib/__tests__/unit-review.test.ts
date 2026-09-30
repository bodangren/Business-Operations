import { describe, expect, it } from "vitest"
import {
  DEFAULT_REVIEW_QUESTION_COUNT,
  REVIEW_QUESTION_COUNT_PRESETS,
  buildRetryQuestions,
  buildReviewQuestions,
  createUnitReviewAdapter,
  getMissedQuestionIds,
  getSelectableQuestionCounts,
  normalizeQuestionCount,
  recordReviewAnswer,
  shuffleItems,
  summarizeReviewResults,
  toReviewQuestion,
} from "../unit-review"
import type { UnitReviewQuestionSource } from "@/types/unit-review"

function makeQuestion(index: number, lessonId = "lesson01"): UnitReviewQuestionSource {
  return {
    id: `q${index}`,
    lessonId,
    lessonTitle: lessonId === "lesson01" ? "Lesson 01" : "Lesson 02",
    prompt: `Prompt ${index}`,
    correctAnswer: `Correct ${index}`,
    distractors: [`Wrong ${index}a`, `Wrong ${index}b`],
    explanation: `Explanation ${index}`,
    objectiveTags: [`tag-${index % 2}`],
  }
}

const QUESTIONS: UnitReviewQuestionSource[] = Array.from({ length: 20 }, (_, index) =>
  makeQuestion(index + 1, index < 12 ? "lesson01" : "lesson02"),
)

const ADAPTER = createUnitReviewAdapter("unit01", "Unit 1", QUESTIONS)

describe("shuffle helpers", () => {
  it("shuffles without mutating the input", () => {
    const input = [1, 2, 3, 4]
    const shuffled = shuffleItems(input, () => 0.5)
    expect(input).toEqual([1, 2, 3, 4])
    expect([...shuffled].sort()).toEqual([1, 2, 3, 4])
  })
})

describe("question-count presets", () => {
  it("offers 5, 10, and 15 presets limited by the bank", () => {
    expect(REVIEW_QUESTION_COUNT_PRESETS).toEqual([5, 10, 15])
    expect(getSelectableQuestionCounts(20)).toEqual([5, 10, 15])
    expect(getSelectableQuestionCounts(12)).toEqual([5, 10])
    expect(getSelectableQuestionCounts(6)).toEqual([5])
    expect(getSelectableQuestionCounts(3)).toEqual([3])
    expect(getSelectableQuestionCounts(0)).toEqual([])
  })

  it("clamps requests to the available question count", () => {
    expect(normalizeQuestionCount(15, 12)).toBe(12)
    expect(normalizeQuestionCount(10, 20)).toBe(10)
    expect(normalizeQuestionCount(5, 0)).toBe(0)
    expect(normalizeQuestionCount(Number.NaN, 20)).toBe(0)
  })
})

describe("review question building", () => {
  it("draws a default mixed set of 10 unique questions", () => {
    const questions = buildReviewQuestions(ADAPTER, {
      unitId: "unit01",
      questionCount: DEFAULT_REVIEW_QUESTION_COUNT,
    })
    expect(questions).toHaveLength(10)
    expect(new Set(questions.map((question) => question.id)).size).toBe(10)
  })

  it("keeps the correct answer among the shuffled choices", () => {
    const questions = buildReviewQuestions(ADAPTER, { unitId: "unit01", questionCount: 5 })
    for (const question of questions) {
      expect(question.choices).toContain(question.correctAnswer)
      expect(question.choices).toHaveLength(3)
    }
  })

  it("limits the draw to the bank size", () => {
    const questions = buildReviewQuestions(ADAPTER, { unitId: "unit01", questionCount: 50 })
    expect(questions).toHaveLength(20)
  })

  it("honors optional lesson filters", () => {
    const questions = buildReviewQuestions(ADAPTER, {
      unitId: "unit01",
      questionCount: 15,
      lessonIds: ["lesson02"],
    })
    expect(questions).toHaveLength(8)
    expect(questions.every((question) => question.lessonId === "lesson02")).toBe(true)
  })

  it("converts one source question deterministically", () => {
    const question = toReviewQuestion(makeQuestion(1), () => 0.5)
    expect(question.tags).toEqual(["tag-1"])
    expect(question.explanation).toBe("Explanation 1")
  })
})

describe("response records and results", () => {
  const responseAdapter = createUnitReviewAdapter("unit01", "Unit 1", [
    makeQuestion(1, "lesson01"),
    makeQuestion(2, "lesson02"),
  ])
  const [firstQuestion, secondQuestion] = buildReviewQuestions(responseAdapter, {
    unitId: "unit01",
    questionCount: 2,
  })

  it("records correctness by comparing the selected answer", () => {
    const records = recordReviewAnswer([], firstQuestion, firstQuestion.correctAnswer)
    expect(records).toHaveLength(1)
    expect(records[0].isCorrect).toBe(true)
    expect(records[0].tags).toEqual(firstQuestion.tags)
  })

  it("summarizes correct and incorrect performance by lesson and topic", () => {
    let records = recordReviewAnswer([], firstQuestion, firstQuestion.correctAnswer)
    records = recordReviewAnswer(records, secondQuestion, "definitely wrong")

    const results = summarizeReviewResults(records)
    expect(results.total).toBe(2)
    expect(results.correct).toBe(1)
    expect(results.incorrect).toBe(1)
    expect(results.percent).toBe(50)
    expect(results.byLesson).toHaveLength(2)
    expect(results.byTag.length).toBeGreaterThan(0)
  })

  it("tracks missed question ids and builds a retry set", () => {
    let records = recordReviewAnswer([], firstQuestion, firstQuestion.correctAnswer)
    records = recordReviewAnswer(records, secondQuestion, "definitely wrong")

    expect(getMissedQuestionIds(records)).toEqual([secondQuestion.id])

    const retry = buildRetryQuestions([firstQuestion, secondQuestion], records)
    expect(retry.map((question) => question.id)).toEqual([secondQuestion.id])
  })
})

describe("adapter factory", () => {
  it("exposes unit identity, lesson metadata, and filtering", () => {
    expect(ADAPTER.unitId).toBe("unit01")
    expect(ADAPTER.unitLabel).toBe("Unit 1")
    expect(ADAPTER.lessons.map((lesson) => lesson.lessonId)).toEqual(["lesson01", "lesson02"])
    expect(ADAPTER.lessons.map((lesson) => lesson.questionCount)).toEqual([12, 8])
    expect(ADAPTER.getQuestions()).toHaveLength(20)
    expect(ADAPTER.getQuestions({ lessonIds: ["lesson02"] })).toHaveLength(8)
  })
})
