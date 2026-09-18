import Link from "next/link"
import type React from "react"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle2, Flag } from "lucide-react"
import {
  STUDENT_LESSON_SECTIONS,
  getStudentLessonSection,
} from "@/lib/student-lesson"
import type { UnitId } from "@/types/glossary"
import type { StudentLessonSectionId } from "@/types/student-lesson"
import LessonVisitRecorder from "./LessonVisitRecorder"

export interface StudentLessonShellSection {
  id: StudentLessonSectionId
  children: React.ReactNode
}

export interface StudentLessonShellProps {
  unitId: UnitId
  unitLabel: string
  lessonId: string
  lessonNumber: number
  lessonTitle: string
  /** Lesson content keyed by section; rendered in canonical Start-Learn-Do-Check order. */
  sections: readonly StudentLessonShellSection[]
  /** The single exit ticket, rendered inside Check. */
  exitTicket?: React.ReactNode
  /** One or two sentences of synthesis shown in Check. */
  summary?: string
  /** Next lesson handoff shown as the Check primary action. */
  nextLesson?: { title: string; href: string }
  /** Unit route used as the Check primary action when there is no next lesson. */
  unitHref: string
}

/**
 * Compact one-route lesson shell. It renders the four visible student sections
 * in canonical order with stable anchors, a four-step progress header, and one
 * next-step action per section. It does not use the legacy phase chrome.
 */
export function StudentLessonShell({
  unitId,
  unitLabel,
  lessonId,
  lessonNumber,
  lessonTitle,
  sections,
  exitTicket,
  summary,
  nextLesson,
  unitHref,
}: StudentLessonShellProps) {
  const provided = new Map(sections.map((section) => [section.id, section]))
  const visible = STUDENT_LESSON_SECTIONS.filter((section) => provided.has(section.id))

  return (
    <div className="bg-gradient-to-br from-background via-background to-muted/20">
      <div className="mx-auto max-w-4xl space-y-6 px-4 py-6 sm:px-6">
        <LessonVisitRecorder
          unitId={unitId}
          lessonId={lessonId}
          lessonNumber={lessonNumber}
          lessonTitle={lessonTitle}
          fallbackSection="start"
        />

        <header className="space-y-3">
          <Badge variant="outline" className="text-xs">
            {unitLabel} • Lesson {lessonNumber}
          </Badge>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{lessonTitle}</h1>
          <nav aria-label="Lesson sections">
            <ol className="flex flex-wrap gap-2 text-sm">
              {STUDENT_LESSON_SECTIONS.map((section) => {
                const isVisible = provided.has(section.id)
                return (
                  <li key={section.id}>
                    {isVisible ? (
                      <Link
                        href={`#${section.anchor}`}
                        className="flex items-center gap-1.5 rounded-full border border-border/60 px-3 py-1 font-medium text-foreground/70 transition-colors hover:border-primary/40 hover:text-primary"
                      >
                        <span className="text-xs text-muted-foreground">{section.sequence}</span>
                        {section.label}
                      </Link>
                    ) : (
                      <span className="flex items-center gap-1.5 rounded-full border border-dashed border-border/60 px-3 py-1 text-muted-foreground/60">
                        <span className="text-xs">{section.sequence}</span>
                        {section.label}
                      </span>
                    )}
                  </li>
                )
              })}
            </ol>
          </nav>
        </header>

        {visible.map((section) => {
          const content = provided.get(section.id)
          const definition = getStudentLessonSection(section.id)
          const nextSection = visible.find((candidate) => candidate.sequence === definition.sequence + 1)
          const headingId = `lesson-${section.id}-title`

          return (
            <section
              key={section.id}
              id={definition.anchor}
              tabIndex={-1}
              aria-labelledby={headingId}
              className="scroll-mt-20 space-y-4 border-t border-border/60 pt-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <div className="space-y-1">
                <h2 id={headingId} className="text-xl font-semibold">
                  {definition.heading}
                </h2>
                <p className="text-sm text-muted-foreground">{definition.description}</p>
              </div>

              <div className="space-y-4">{content?.children}</div>

              {section.id === "check" && (
                <div className="space-y-4">
                  {exitTicket}
                  {summary ? (
                    <div className="rounded-lg bg-muted/40 p-4">
                      <h3 className="mb-1 flex items-center gap-2 text-sm font-semibold">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        Summary
                      </h3>
                      <p className="text-sm text-muted-foreground">{summary}</p>
                    </div>
                  ) : null}
                </div>
              )}

              {nextSection ? (
                <Link
                  href={`#${nextSection.anchor}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Next: {nextSection.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ) : nextLesson ? (
                <Link
                  href={nextLesson.href}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  Next lesson: {nextLesson.title}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ) : (
                <Link
                  href={unitHref}
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                >
                  <Flag className="h-3.5 w-3.5" />
                  Return to Unit
                </Link>
              )}
            </section>
          )
        })}
      </div>
    </div>
  )
}
