/**
 * @vitest-environment jsdom
 */
import React from "react"
import { describe, expect, it } from "vitest"
import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import UnitReview from "../UnitReview"
import { createUnitReviewAdapter } from "@/lib/unit-review"
import type { UnitReviewQuestionSource } from "@/types/unit-review"

const SOURCES: UnitReviewQuestionSource[] = [
  {
    id: "q1",
    lessonId: "lesson01",
    lessonTitle: "Lesson 01",
    prompt: "What is 1 + 1?",
    correctAnswer: "Two",
    distractors: ["Three", "Four"],
    explanation: "One plus one is two.",
    objectiveTags: ["basics"],
  },
  {
    id: "q2",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02",
    prompt: "What is 2 + 4?",
    correctAnswer: "Six",
    distractors: ["Seven", "Eight"],
    explanation: "Two plus four is six.",
    objectiveTags: ["basics"],
  },
  {
    id: "q3",
    lessonId: "lesson02",
    lessonTitle: "Lesson 02",
    prompt: "What is 4 + 5?",
    correctAnswer: "Nine",
    distractors: ["Ten", "Eleven"],
    explanation: "Four plus five is nine.",
    objectiveTags: ["advanced"],
  },
]

const ADAPTER = createUnitReviewAdapter("unit01", "Unit 1", SOURCES)

const ANSWERS: Record<string, { correct: string; wrong: string }> = {
  "What is 1 + 1?": { correct: "Two", wrong: "Three" },
  "What is 2 + 4?": { correct: "Six", wrong: "Seven" },
  "What is 4 + 5?": { correct: "Nine", wrong: "Ten" },
}

function renderReview() {
  return render(<UnitReview adapter={ADAPTER} unitHref="/student/unit01" />)
}

function currentPrompt(): string {
  return screen.getByRole("heading", { level: 1 }).textContent ?? ""
}

function answerCurrent(correct: boolean) {
  const answer = ANSWERS[currentPrompt()]
  fireEvent.click(screen.getByRole("button", { name: correct ? answer.correct : answer.wrong }))
  fireEvent.click(screen.getByRole("button", { name: "Check Answer" }))
  fireEvent.click(screen.getByRole("button", { name: /Next Question|See Results/ }))
}

describe("UnitReview", () => {
  it("starts with a title, guidance, one primary action, and a Customize disclosure", () => {
    renderReview()

    expect(screen.getByRole("heading", { name: "Unit 1 Review" })).toBeInTheDocument()
    expect(screen.getByText(/Answer 3 mixed questions/)).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Start Review" })).toBeInTheDocument()
    expect(screen.getByText("Customize Review")).toBeInTheDocument()
    expect(
      screen.getByRole("button", { name: "3 questions", hidden: true }),
    ).toBeInTheDocument()
  })

  it("shows one question at a time with progress, then reports results", () => {
    renderReview()
    fireEvent.click(screen.getByRole("button", { name: "Start Review" }))

    expect(screen.getByText("Question 1 of 3")).toBeInTheDocument()

    answerCurrent(true)
    expect(screen.getByText("Question 2 of 3")).toBeInTheDocument()

    answerCurrent(true)
    expect(screen.getByText("Question 3 of 3")).toBeInTheDocument()

    answerCurrent(true)

    expect(screen.getByRole("heading", { name: "Unit 1 Review Results" })).toBeInTheDocument()
    expect(screen.getByText("3 of 3 correct (100%).")).toBeInTheDocument()
    expect(screen.getByText("By lesson")).toBeInTheDocument()
    expect(screen.getByText("By topic")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: "Return to Unit" })).toHaveAttribute(
      "href",
      "/student/unit01",
    )
    expect(screen.queryByRole("button", { name: /Retry Missed Questions/ })).toBeNull()
  })

  it("ignores duplicate submissions for an already-answered question", () => {
    renderReview()
    fireEvent.click(screen.getByRole("button", { name: "Start Review" }))

    const answer = ANSWERS[currentPrompt()]
    fireEvent.click(screen.getByRole("button", { name: answer.correct }))
    fireEvent.click(screen.getByRole("button", { name: "Check Answer" }))

    // A single submission swaps Check Answer for Next Question, so there is
    // no second Check button to submit. Re-query instead of re-clicking a
    // stale reference: React reuses the same Button node, so clicking the old
    // reference would activate Next Question and advance prematurely.
    expect(
      screen.getByRole("button", { name: /Next Question|See Results/ }),
    ).toBeInTheDocument()
    expect(screen.queryByRole("button", { name: "Check Answer" })).toBeNull()

    fireEvent.click(screen.getByRole("button", { name: /Next Question|See Results/ }))

    expect(screen.getByText("Question 2 of 3")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Check Answer" })).toBeInTheDocument()

    answerCurrent(true)
    answerCurrent(true)

    expect(screen.getByText("3 of 3 correct (100%).")).toBeInTheDocument()
  })

  it("offers Retry Missed Questions after an incorrect answer", () => {
    renderReview()
    fireEvent.click(screen.getByRole("button", { name: "Start Review" }))

    answerCurrent(false)
    answerCurrent(true)
    answerCurrent(true)

    expect(screen.getByText("2 of 3 correct (67%).")).toBeInTheDocument()

    fireEvent.click(screen.getByRole("button", { name: /Retry Missed Questions/ }))
    expect(screen.getByText("Question 1 of 1")).toBeInTheDocument()
  })
})
