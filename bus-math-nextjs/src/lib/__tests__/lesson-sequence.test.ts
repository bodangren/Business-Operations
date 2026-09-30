import { describe, expect, it } from "vitest"
import { getNextLessonLink } from "../lesson-sequence"

describe("lesson sequence handoff", () => {
  it("returns the next lesson within a unit", () => {
    expect(getNextLessonLink("/student/unit01/lesson01")).toEqual({
      title: "Classifying Transactions: How Business Events Change the Accounting Equation",
      href: "/student/unit01/lesson02",
    })
  })

  it("returns the first lesson of the next unit after lesson 10", () => {
    const next = getNextLessonLink("/student/unit01/lesson10")
    expect(next?.href).toBe("/student/unit02/lesson01")
  })

  it("returns null at the end of the course and for unknown routes", () => {
    expect(getNextLessonLink("/student/unit08/lesson10")).toBeNull()
    expect(getNextLessonLink("/student/unit99/lesson01")).toBeNull()
  })
})
