import { describe, expect, it } from "vitest"
import {
  FRONTMATTER_LINKS,
  REFERENCE_LINKS,
  STUDENT_UNIT_LINKS,
  TEACHER_RESOURCE_LINKS,
  TEACHER_UNIT_LINKS,
} from "../site-navigation"

describe("site-navigation", () => {
  it("keeps the public reference links in place", () => {
    expect(FRONTMATTER_LINKS.map((link) => link.href)).toEqual([
      "/frontmatter/preface",
      "/frontmatter/acknowledgments",
    ])

    expect(REFERENCE_LINKS.map((link) => link.href)).toEqual([
      "/backmatter/glossary",
      "/backmatter/index",
    ])
  })

  it("derives all student and teacher unit links from the canonical unit registry", () => {
    expect(STUDENT_UNIT_LINKS).toHaveLength(8)
    expect(TEACHER_UNIT_LINKS).toHaveLength(8)

    for (let index = 0; index < 8; index += 1) {
      expect(STUDENT_UNIT_LINKS[index].href).toBe(
        `/student/unit${String(index + 1).padStart(2, "0")}`,
      )
      expect(TEACHER_UNIT_LINKS[index].href).toBe(
        `/teacher/unit${String(index + 1).padStart(2, "0")}`,
      )
    }
  })

  it("exposes the shared teacher-resource routes used by the shell", () => {
    expect(TEACHER_RESOURCE_LINKS.map((link) => link.href)).toEqual([
      "/teacher",
      "/teacher/course-overview/pbl-methodology",
      "/teacher/course-overview/backward-design",
      "/teacher/classroom-routines",
    ])
  })
})
