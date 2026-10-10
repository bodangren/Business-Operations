import fs from "node:fs"
import path from "node:path"
import { describe, expect, it } from "vitest"
import { LESSON_PAGES } from "@/data/lesson-registry"

const STUDENT_APP = path.join(process.cwd(), "src", "app", "student")

const PHASE_SECTIONS: Record<number, string> = {
  1: "start",
  2: "learn",
  3: "do",
  4: "do",
  5: "check",
  6: "check",
}

/** Lessons 8-10 are project milestones and render as one page, not four sections. */
const MILESTONE_LESSON_NUMBERS = new Set([8, 9, 10])

function read(route: string): string {
  return fs.readFileSync(path.join(STUDENT_APP, route), "utf8")
}

function phaseNumbers(unitId: string, lessonId: string): number[] {
  const lessonDir = path.join(STUDENT_APP, unitId, lessonId)
  return fs
    .readdirSync(lessonDir)
    .filter((entry) => /^phase-\d+$/.test(entry))
    .map((entry) => Number(entry.slice("phase-".length)))
    .sort((a, b) => a - b)
}

describe("student lesson route migration", () => {
  it("renders every canonical lesson with the one-route four-section shell", () => {
    for (const lesson of LESSON_PAGES) {
      const source = read(path.join(lesson.unitId, lesson.href.split("/").pop() as string, "page.tsx"))
      expect(source, lesson.href).toContain("StudentLessonShell")
      expect(source, lesson.href).not.toContain("StudentLessonOverview")
    }
  })

  it("maps available phase content onto the four student sections", () => {
    for (const lesson of LESSON_PAGES) {
      const lessonId = lesson.href.split("/").pop() as string
      const source = read(path.join(lesson.unitId, lessonId, "page.tsx"))
      const lessonNumber = Number(lessonId.replace("lesson", ""))
      const expected = MILESTONE_LESSON_NUMBERS.has(lessonNumber)
        ? new Set(lesson.unitId === "unit02" ? ["start", "learn", "do", "check"] : ["start"])
        : new Set(phaseNumbers(lesson.unitId, lessonId).map((phase) => PHASE_SECTIONS[phase]))
      if (expected.size === 0) expected.add("start")

      for (const sectionId of expected) {
        expect(source, `${lesson.href} -> ${sectionId}`).toContain(`id: "${sectionId}"`)
      }
    }
  })

  it("keeps milestones on one page and gives Unit 2 usable section navigation", () => {
    for (const lesson of LESSON_PAGES) {
      const lessonId = lesson.href.split("/").pop() as string
      const lessonNumber = Number(lessonId.replace("lesson", ""))
      if (!MILESTONE_LESSON_NUMBERS.has(lessonNumber)) continue

      const source = read(path.join(lesson.unitId, lessonId, "page.tsx"))
      expect(source, lesson.href).toContain('{ id: "start"')
      for (const sectionId of ["learn", "do", "check"]) {
        if (lesson.unitId === "unit02") {
          expect(source, `${lesson.href} -> ${sectionId}`).toContain(`id: "${sectionId}"`)
        } else {
          expect(source, `${lesson.href} -> ${sectionId}`).not.toContain(`id: "${sectionId}"`)
        }
      }
    }
  })

  it("replaces every legacy phase route with a resolver-backed stub", () => {
    for (const lesson of LESSON_PAGES) {
      const lessonId = lesson.href.split("/").pop() as string
      for (const phase of phaseNumbers(lesson.unitId, lessonId)) {
        const route = path.join(lesson.unitId, lessonId, `phase-${phase}`, "page.tsx")
        const source = read(route)
        expect(source, route).toContain("LegacyPhaseRedirect")
        expect(source, route).toContain(
          `legacyPath="/student/${lesson.unitId}/${lessonId}/phase-${phase}"`,
        )
        expect(source, route).not.toContain("lesson-data")
        expect(source.length, route).toBeLessThan(400)
      }
    }
  })
})
