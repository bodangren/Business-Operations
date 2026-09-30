"use client"

import { useEffect } from "react"
import { isStudentLessonSectionId } from "@/lib/student-lesson"
import { createContinueRecord, writeContinueRecord } from "@/lib/student-navigation"
import type { UnitId } from "@/types/glossary"
import type { StudentLessonSectionId } from "@/types/student-lesson"

interface LessonVisitRecorderProps {
  unitId: UnitId
  lessonId: string
  lessonNumber: number
  lessonTitle: string
  /** Section used when the URL has no section anchor. */
  fallbackSection: StudentLessonSectionId
}

/**
 * Writes the local Continue record when a student opens a lesson. The record
 * honors a section anchor such as `#do` so Continue resumes at the right
 * section. Renders nothing; the write is skipped during server rendering.
 */
export default function LessonVisitRecorder({
  unitId,
  lessonId,
  lessonNumber,
  lessonTitle,
  fallbackSection,
}: LessonVisitRecorderProps) {
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "")
    const section = isStudentLessonSectionId(hash) ? hash : fallbackSection
    writeContinueRecord(
      createContinueRecord({ unitId, lessonId, lessonNumber, lessonTitle, section }),
    )
  }, [unitId, lessonId, lessonNumber, lessonTitle, fallbackSection])

  return null
}
