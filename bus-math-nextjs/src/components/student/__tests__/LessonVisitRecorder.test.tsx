/**
 * @vitest-environment jsdom
 */
import React from "react"
import { beforeEach, describe, expect, it } from "vitest"
import { render, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom"
import LessonVisitRecorder from "../LessonVisitRecorder"
import { readContinueRecord } from "@/lib/student-navigation"

describe("LessonVisitRecorder", () => {
  beforeEach(() => {
    window.localStorage.clear()
    window.history.replaceState(null, "", "/")
  })

  it("records the lesson section from the URL anchor", async () => {
    window.history.replaceState(null, "", "/student/unit01/lesson01/#do")

    render(
      <LessonVisitRecorder
        unitId="unit01"
        lessonId="lesson01"
        lessonNumber={1}
        lessonTitle="Introduction: Sarah's Challenge"
        fallbackSection="start"
      />,
    )

    await waitFor(() => {
      expect(readContinueRecord()?.section).toBe("do")
    })
    expect(readContinueRecord()?.lessonId).toBe("lesson01")
  })

  it("falls back to the provided section without an anchor", async () => {
    window.history.replaceState(null, "", "/student/unit01/lesson01/")

    render(
      <LessonVisitRecorder
        unitId="unit01"
        lessonId="lesson01"
        lessonNumber={1}
        lessonTitle="Introduction: Sarah's Challenge"
        fallbackSection="check"
      />,
    )

    await waitFor(() => {
      expect(readContinueRecord()?.section).toBe("check")
    })
  })
})
