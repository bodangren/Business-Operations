import { StudentLessonShell } from "@/components/student/StudentLessonShell"
import { getNextLessonLink } from "@/lib/lesson-sequence"
import { getUnitMetadata } from "@/lib/student-navigation"
import { lesson10Data } from "./lesson-data"
import Phase1Content from "./phase-1/PhaseContent"

/**
 * Render the presentation milestone with four student sections.
 * @returns The project lesson shell and presentation checks.
 */
export default function Lesson10Page() {
  return (
    <StudentLessonShell
      unitId="unit02"
      unitLabel={getUnitMetadata("unit02").label}
      lessonId="lesson10"
      lessonNumber={10}
      lessonTitle={lesson10Data.title}
      unitHref="/student/unit02"
      nextLesson={getNextLessonLink("/student/unit02/lesson10") ?? undefined}
      sections={[
        { id: "start", children: <Phase1Content section="start" /> },
        { id: "learn", children: <Phase1Content section="learn" /> },
        { id: "do", children: <Phase1Content section="do" /> },
        { id: "check", children: <Phase1Content section="check" /> },
      ]}
    />
  )
}
