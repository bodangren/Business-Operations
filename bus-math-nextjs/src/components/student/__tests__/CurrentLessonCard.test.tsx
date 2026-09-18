/**
 * @vitest-environment jsdom
 */
import React from "react"
import { beforeEach, describe, expect, it } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import CurrentLessonCard from "../CurrentLessonCard"
import { CURRENT_LESSON } from "@/data/current-lesson"
import { CONTINUE_STORAGE_KEY } from "@/lib/student-navigation"

describe("CurrentLessonCard", () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it("shows the deployment current lesson by default", () => {
    render(<CurrentLessonCard config={CURRENT_LESSON} />)

    expect(screen.getByText("Today")).toBeInTheDocument()
    expect(
      screen.getByRole("link", { name: /Open lesson/ }),
    ).toHaveAttribute("href", "/student/unit01/lesson01")
  })

  it("shows Continue when a fresh local record exists", async () => {
    window.localStorage.setItem(
      CONTINUE_STORAGE_KEY,
      JSON.stringify({
        unitId: "unit05",
        lessonId: "lesson02",
        lessonNumber: 2,
        lessonTitle: "Gross Pay",
        section: "learn",
        lastVisitedAt: new Date().toISOString(),
      }),
    )

    render(<CurrentLessonCard config={CURRENT_LESSON} />)

    await waitFor(() => {
      expect(screen.getByText("Continue")).toBeInTheDocument()
    })
    expect(screen.getByRole("link", { name: /Continue lesson/ })).toHaveAttribute(
      "href",
      "/student/unit05/lesson02#learn",
    )
  })
})
