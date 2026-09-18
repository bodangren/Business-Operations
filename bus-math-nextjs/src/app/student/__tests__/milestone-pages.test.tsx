/**
 * @vitest-environment jsdom
 */
import React from "react"
import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Unit06Lesson09Page from "@/app/student/unit06/lesson09/page"
import Unit06Lesson10Page from "@/app/student/unit06/lesson10/page"

const MILESTONE_PAGES = [
  { label: "Unit 6 Lesson 9", Page: Unit06Lesson09Page },
  { label: "Unit 6 Lesson 10", Page: Unit06Lesson10Page },
]

describe("project milestone lesson pages", () => {
  it.each(MILESTONE_PAGES)("$label renders as one milestone page", ({ Page }) => {
    render(<Page />)

    expect(document.getElementById("start")).not.toBeNull()
    for (const sectionId of ["learn", "do", "check"]) {
      expect(document.getElementById(sectionId), sectionId).toBeNull()
    }
  })

  it.each(MILESTONE_PAGES)("$label includes every milestone section", ({ Page }) => {
    render(<Page />)

    for (const pattern of [/Context/, /Objectives/, /Workflow/, /Acceptance Criteria/, /Checklist/, /Rubric/, /Next Step/]) {
      expect(screen.getAllByText(pattern).length, String(pattern)).toBeGreaterThan(0)
    }
  })

  it.each(MILESTONE_PAGES)("$label keeps the next-lesson handoff", ({ Page }) => {
    render(<Page />)

    expect(screen.getByRole("link", { name: /Next lesson:/ })).toBeInTheDocument()
  })
})
