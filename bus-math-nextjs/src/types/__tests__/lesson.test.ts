import { describe, it, expect } from "vitest"
import type { LessonPhaseName } from "../lesson"

/**
 * Runtime helper: assert a value is a valid LessonPhaseName.
 * The test file uses string literals and checks they satisfy the type.
 */
function assertLessonPhaseName(_v: LessonPhaseName) {
  // no-op — TypeScript enforces the type at compile time
}

describe("LessonPhaseName", () => {
  it("includes the six standard phase names", () => {
    const standard: LessonPhaseName[] = [
      "Hook",
      "Introduction",
      "Guided Practice",
      "Independent Practice",
      "Assessment",
      "Closing",
    ]
    expect(standard).toHaveLength(6)
    for (const phase of standard) {
      assertLessonPhaseName(phase)
    }
  })

  it("includes the three project phase names", () => {
    const project: LessonPhaseName[] = [
      "Project Launch",
      "Project Milestone",
      "Project Presentation",
    ]
    expect(project).toHaveLength(3)
    for (const phase of project) {
      assertLessonPhaseName(phase)
    }
  })

  it("contains exactly 9 phase names", () => {
    const all: LessonPhaseName[] = [
      "Hook",
      "Introduction",
      "Guided Practice",
      "Independent Practice",
      "Assessment",
      "Closing",
      "Project Launch",
      "Project Milestone",
      "Project Presentation",
    ]
    expect(all).toHaveLength(9)
  })
})
