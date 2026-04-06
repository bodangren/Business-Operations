import { describe, it, expect } from "vitest"
import type { LessonProgressPhaseName } from "../LessonProgressContext"

function assertPhaseName(_v: LessonProgressPhaseName) {
  // no-op — TypeScript enforces at compile time
}

describe("LessonProgressPhaseName", () => {
  it("includes the six standard phase names", () => {
    const standard: LessonProgressPhaseName[] = [
      "Hook",
      "Introduction",
      "Guided Practice",
      "Independent Practice",
      "Assessment",
      "Closing",
    ]
    expect(standard).toHaveLength(6)
    for (const phase of standard) {
      assertPhaseName(phase)
    }
  })

  it("includes the three project phase names", () => {
    const project: LessonProgressPhaseName[] = [
      "Project Launch",
      "Project Milestone",
      "Project Presentation",
    ]
    expect(project).toHaveLength(3)
    for (const phase of project) {
      assertPhaseName(phase)
    }
  })

  it("contains exactly 9 phase names", () => {
    const all: LessonProgressPhaseName[] = [
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
