/**
 * @vitest-environment jsdom
 */
import React from "react"
import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Unit01Lesson01Page from "@/app/student/unit01/lesson01/page"
import Unit01Lesson02Page from "@/app/student/unit01/lesson02/page"
import Unit01Lesson08Page from "@/app/student/unit01/lesson08/page"
import Unit01Lesson09Page from "@/app/student/unit01/lesson09/page"
import Unit05Lesson03Page from "@/app/student/unit05/lesson03/page"

describe("canonical lesson routes", () => {
  it("renders the standard lesson as one route with four sections", () => {
    render(<Unit01Lesson01Page />)

    const headings = screen.getAllByRole("heading", { level: 2 }).map((heading) => heading.textContent)
    expect(headings.slice(0, 4)).toEqual(["Start", "Learn", "Do", "Check"])
    for (const anchor of ["start", "learn", "do", "check"]) {
      expect(document.getElementById(anchor), anchor).not.toBeNull()
    }
  })

  it("renders a lesson whose source phases used conditional returns", () => {
    render(<Unit01Lesson02Page />)

    expect(document.getElementById("start")).not.toBeNull()
    expect(document.getElementById("check")).not.toBeNull()
  })

  it("renders project milestone lessons as one milestone section", () => {
    render(<Unit01Lesson08Page />)

    const headings = screen.getAllByRole("heading", { level: 2 }).map((heading) => heading.textContent)
    expect(headings).toContain("Start")
    expect(document.getElementById("start")).not.toBeNull()
  })

  it("renders a milestone lesson whose legacy phase page re-exported the lesson", () => {
    render(<Unit01Lesson09Page />)

    expect(document.getElementById("start")).not.toBeNull()
    expect(screen.getByText(/Milestone 2 Acceptance Criteria/)).toBeInTheDocument()
  })

  it("renders an Excel lesson with its interactive content", () => {
    render(<Unit05Lesson03Page />)

    expect(document.getElementById("do")).not.toBeNull()
    expect(document.getElementById("check")).not.toBeNull()
  })
})
