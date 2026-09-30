import { describe, expect, it } from "vitest"
import {
  LEGACY_PHASE_SECTION_MAPPINGS,
  STUDENT_LESSON_SECTIONS,
  getNextStudentSection,
  getPreviousStudentSection,
  getSectionForLegacyPhase,
  getSectionForPhaseName,
  getStudentLessonSection,
  getStudentSectionAnchor,
  getStudentSectionHref,
  isStudentLessonSectionId,
  resolveLegacyPhaseHref,
  resolveLegacyPhaseTarget,
} from "../student-lesson"

describe("student-lesson section contract", () => {
  it("defines Start, Learn, Do, and Check in canonical order", () => {
    expect(STUDENT_LESSON_SECTIONS.map((section) => section.id)).toEqual([
      "start",
      "learn",
      "do",
      "check",
    ])
    expect(STUDENT_LESSON_SECTIONS.map((section) => section.label)).toEqual([
      "Start",
      "Learn",
      "Do",
      "Check",
    ])
    expect(STUDENT_LESSON_SECTIONS.map((section) => section.sequence)).toEqual([1, 2, 3, 4])
  })

  it("gives each section a stable anchor", () => {
    expect(getStudentSectionAnchor("start")).toBe("start")
    expect(getStudentSectionAnchor("learn")).toBe("learn")
    expect(getStudentSectionAnchor("do")).toBe("do")
    expect(getStudentSectionAnchor("check")).toBe("check")
    expect(getStudentLessonSection("check").heading).toBe("Check")
  })

  it("narrows strings to valid section ids", () => {
    expect(isStudentLessonSectionId("start")).toBe(true)
    expect(isStudentLessonSectionId("check")).toBe(true)
    expect(isStudentLessonSectionId("middle")).toBe(false)
    expect(isStudentLessonSectionId("")).toBe(false)
  })

  it("maps the six teacher phases to the four student sections", () => {
    expect(getSectionForPhaseName("Hook")).toBe("start")
    expect(getSectionForPhaseName("Introduction")).toBe("learn")
    expect(getSectionForPhaseName("Guided Practice")).toBe("do")
    expect(getSectionForPhaseName("Independent Practice")).toBe("do")
    expect(getSectionForPhaseName("Assessment")).toBe("check")
    expect(getSectionForPhaseName("Closing")).toBe("check")
  })

  it("falls back safely for unknown phase names", () => {
    expect(getSectionForPhaseName("Mystery Phase")).toBe("start")
  })

  it("maps legacy phase 1-6 onto the documented sections", () => {
    expect(LEGACY_PHASE_SECTION_MAPPINGS.map((mapping) => mapping.sectionId)).toEqual([
      "start",
      "learn",
      "do",
      "do",
      "check",
      "check",
    ])
    expect(getSectionForLegacyPhase(1)).toBe("start")
    expect(getSectionForLegacyPhase(2)).toBe("learn")
    expect(getSectionForLegacyPhase(3)).toBe("do")
    expect(getSectionForLegacyPhase(4)).toBe("do")
    expect(getSectionForLegacyPhase(5)).toBe("check")
    expect(getSectionForLegacyPhase(6)).toBe("check")
    expect(getSectionForLegacyPhase(7)).toBeNull()
    expect(getSectionForLegacyPhase(0)).toBeNull()
  })

  it("walks forward and backward through the section chain", () => {
    expect(getNextStudentSection("start")).toBe("learn")
    expect(getNextStudentSection("learn")).toBe("do")
    expect(getNextStudentSection("do")).toBe("check")
    expect(getNextStudentSection("check")).toBeNull()

    expect(getPreviousStudentSection("start")).toBeNull()
    expect(getPreviousStudentSection("learn")).toBe("start")
    expect(getPreviousStudentSection("check")).toBe("do")
  })

  it("builds section hrefs from a lesson route", () => {
    expect(getStudentSectionHref("/student/unit01/lesson01", "do")).toBe(
      "/student/unit01/lesson01#do",
    )
    expect(getStudentSectionHref("/student/unit01/lesson01/#learn", "check")).toBe(
      "/student/unit01/lesson01/#check",
    )
  })

  it("resolves legacy phase paths to the matching section", () => {
    expect(resolveLegacyPhaseHref("/student/unit01/lesson01/phase-1")).toBe(
      "/student/unit01/lesson01#start",
    )
    expect(resolveLegacyPhaseHref("/student/unit01/lesson01/phase-2")).toBe(
      "/student/unit01/lesson01#learn",
    )
    expect(resolveLegacyPhaseHref("/student/unit03/lesson07/phase-4/")).toBe(
      "/student/unit03/lesson07#do",
    )
    expect(resolveLegacyPhaseHref("/student/unit01/lesson01/phase-6")).toBe(
      "/student/unit01/lesson01#check",
    )
  })

  it("returns null for non-phase and out-of-range paths", () => {
    expect(resolveLegacyPhaseHref("/student/unit01/lesson01")).toBeNull()
    expect(resolveLegacyPhaseHref("/student/unit01/lesson01/phase-9")).toBeNull()
    expect(resolveLegacyPhaseTarget("/teacher/unit01/lesson01/phase-9")).toBeNull()
  })

  it("exposes the resolved lesson route without an anchor for compatibility pages", () => {
    expect(resolveLegacyPhaseTarget("/student/unit02/lesson05/phase-3")).toEqual({
      lessonHref: "/student/unit02/lesson05",
      sectionId: "do",
      sectionAnchor: "do",
    })
  })
})
