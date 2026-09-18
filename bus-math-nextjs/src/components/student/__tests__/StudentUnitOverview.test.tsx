/**
 * @vitest-environment jsdom
 */
import React from "react"
import { describe, expect, it } from "vitest"
import { render, screen, within } from "@testing-library/react"
import "@testing-library/jest-dom"
import { StudentUnitOverview } from "../StudentUnitOverview"
import { StudyDataProvider } from "@/contexts/StudyDataContext"

const UNIT = {
  id: "unit01-mcp-id",
  title: "Unit 1: Smart Ledger Launch",
  description: "Build a self-auditing ledger system.",
  rationale: "Clean books build investor trust.",
  sequence: 1,
  unitId: "unit01" as const,
}

const LESSONS = Array.from({ length: 10 }, (_, index) => ({
  lessonId: `lesson${(index + 1).toString().padStart(2, "0")}`,
  title: `Lesson ${index + 1}`,
  keyConcepts: [`Concept ${index + 1}`],
  learningObjectives: [`Build objective ${index + 1}`],
  durationEstimateMinutes: 45,
}))

const LESSONS_WITHOUT_IDS = LESSONS.map((lesson) => ({
  title: lesson.title,
  keyConcepts: lesson.keyConcepts,
  learningObjectives: lesson.learningObjectives,
  durationEstimateMinutes: lesson.durationEstimateMinutes,
}))

type OverviewLessons = React.ComponentProps<typeof StudentUnitOverview>["lessons"]

function renderOverview(lessons: OverviewLessons = LESSONS) {
  return render(
    <StudyDataProvider>
      <StudentUnitOverview unit={UNIT} lessons={lessons} />
    </StudyDataProvider>,
  )
}

describe("StudentUnitOverview", () => {
  it("places the lesson list directly after the compact unit title", () => {
    renderOverview()

    const title = screen.getByRole("heading", { level: 1, name: UNIT.title })
    const lessons = screen.getByRole("heading", { level: 2, name: "Lessons" })

    expect(
      title.compareDocumentPosition(lessons) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
  })

  it("links every lesson row directly to its lesson route", () => {
    renderOverview()

    expect(screen.getByRole("link", { name: /Lesson 1\b/ })).toHaveAttribute(
      "href",
      "/student/unit01/lesson01",
    )
    expect(screen.getByRole("link", { name: /Lesson 10\b/ })).toHaveAttribute(
      "href",
      "/student/unit01/lesson10",
    )
  })

  it("visibly marks the current lesson", () => {
    renderOverview()

    const current = screen.getByRole("link", { current: true })
    expect(current).toHaveAttribute("href", "/student/unit01/lesson01")
    expect(within(current).getByText("Current")).toBeInTheDocument()
    expect(screen.getAllByRole("link", { current: true })).toHaveLength(1)
  })

  it("derives canonical lesson routes when lesson ids are omitted", () => {
    renderOverview(LESSONS_WITHOUT_IDS)

    expect(screen.getByRole("link", { current: true })).toHaveAttribute(
      "href",
      "/student/unit01/lesson01",
    )
    expect(screen.getByRole("link", { name: /Lesson 10\b/ })).toHaveAttribute(
      "href",
      "/student/unit01/lesson10",
    )
  })

  it("renders the unit review as one compact row after the lesson list", () => {
    renderOverview()

    const lessons = screen.getByRole("heading", { level: 2, name: "Lessons" })
    const review = screen.getByRole("link", { name: /Start Unit Review/ })
    const about = screen.getByText("About This Unit")

    expect(review).toHaveAttribute("href", "/student/unit01/practice-test")
    expect(
      lessons.compareDocumentPosition(review) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(
      review.compareDocumentPosition(about) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
  })

  it("links to the unit-specific practice hub near the top", () => {
    renderOverview()

    const practice = screen.getByRole("link", {
      name: `Open the practice hub for ${UNIT.title}`,
    })
    const lessons = screen.getByRole("heading", { level: 2, name: "Lessons" })

    expect(practice).toHaveAttribute("href", "/student/practice-hub?unit=unit01")
    expect(
      practice.compareDocumentPosition(lessons) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
  })

  it("derives the practice hub unit id when unitId is omitted", () => {
    render(
      <StudyDataProvider>
        <StudentUnitOverview
          unit={{ ...UNIT, unitId: undefined }}
          lessons={LESSONS}
        />
      </StudyDataProvider>,
    )

    expect(
      screen.getByRole("link", { name: `Open the practice hub for ${UNIT.title}` }),
    ).toHaveAttribute("href", "/student/practice-hub?unit=unit01")
  })

  it("keeps secondary unit content inside one About This Unit disclosure", () => {
    renderOverview()

    const details = screen.getByText("About This Unit").closest("details")
    expect(details).not.toBeNull()
    expect(within(details as HTMLElement).getByText("Your Business Challenge")).toBeInTheDocument()
    expect(within(details as HTMLElement).getByText("Your Final Presentation")).toBeInTheDocument()
    expect(
      within(details as HTMLElement).getByText(UNIT.rationale),
    ).toBeInTheDocument()
  })
})
