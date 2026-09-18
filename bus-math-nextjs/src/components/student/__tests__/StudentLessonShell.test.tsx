/**
 * @vitest-environment jsdom
 */
import React from "react"
import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import { StudentLessonShell } from "../StudentLessonShell"

function renderShell(overrides: Partial<React.ComponentProps<typeof StudentLessonShell>> = {}) {
  return render(
    <StudentLessonShell
      unitId="unit01"
      unitLabel="Unit 1: Smart Ledger Launch"
      lessonId="lesson01"
      lessonNumber={1}
      lessonTitle="Introduction: Sarah's Challenge"
      unitHref="/student/unit01"
      nextLesson={{ title: "Accounting Equation", href: "/student/unit01/lesson02" }}
      sections={[
        { id: "check", children: <p>Check body</p> },
        { id: "start", children: <p>Start body</p> },
        { id: "do", children: <p>Do body</p> },
        { id: "learn", children: <p>Learn body</p> },
      ]}
      {...overrides}
    />,
  )
}

describe("StudentLessonShell", () => {
  it("renders the four sections in Start, Learn, Do, Check order with stable anchors", () => {
    renderShell()

    const headings = screen.getAllByRole("heading", { level: 2 }).map((heading) => heading.textContent)
    expect(headings).toEqual(["Start", "Learn", "Do", "Check"])

    expect(document.getElementById("start")).not.toBeNull()
    expect(document.getElementById("learn")).not.toBeNull()
    expect(document.getElementById("do")).not.toBeNull()
    expect(document.getElementById("check")).not.toBeNull()
  })

  it("shows the unit, lesson, and four-section progress in a compact header", () => {
    renderShell()
    expect(screen.getByText("Unit 1: Smart Ledger Launch • Lesson 1")).toBeInTheDocument()
    expect(screen.getByRole("heading", { level: 1, name: "Introduction: Sarah's Challenge" })).toBeInTheDocument()

    const sectionNav = screen.getByRole("navigation", { name: "Lesson sections" })
    expect(sectionNav.querySelectorAll("a")).toHaveLength(4)
  })

  it("provides one next-step action per section", () => {
    renderShell()
    expect(screen.getByRole("link", { name: /Next: Learn/ })).toHaveAttribute("href", "#learn")
    expect(screen.getByRole("link", { name: /Next: Do/ })).toHaveAttribute("href", "#do")
    expect(screen.getByRole("link", { name: /Next: Check/ })).toHaveAttribute("href", "#check")
    expect(screen.getByRole("link", { name: /Next lesson: Accounting Equation/ })).toHaveAttribute(
      "href",
      "/student/unit01/lesson02",
    )
  })

  it("makes every rendered section a focusable direct-anchor target", () => {
    renderShell()

    for (const anchor of ["start", "learn", "do", "check"]) {
      expect(document.getElementById(anchor), anchor).toHaveAttribute("tabindex", "-1")
    }
  })

  it("hands off to the next lesson when only one section is rendered", () => {
    renderShell({ sections: [{ id: "start", children: <p>Milestone body</p> }] })

    expect(screen.queryByRole("link", { name: /Next: Learn/ })).toBeNull()
    expect(screen.getByRole("link", { name: /Next lesson: Accounting Equation/ })).toHaveAttribute(
      "href",
      "/student/unit01/lesson02",
    )
  })

  it("renders the exit ticket and summary inside Check", () => {
    renderShell({
      exitTicket: <p>Exit ticket question</p>,
      summary: "You can now describe clean books.",
    })

    const check = document.getElementById("check")
    expect(check).not.toBeNull()
    expect(check).toContainElement(screen.getByText("Exit ticket question"))
    expect(check).toContainElement(screen.getByText("You can now describe clean books."))
  })

  it("falls back to Return to Unit when there is no next lesson", () => {
    renderShell({ nextLesson: undefined })
    expect(screen.getByRole("link", { name: /Return to Unit/ })).toHaveAttribute(
      "href",
      "/student/unit01",
    )
  })
})
