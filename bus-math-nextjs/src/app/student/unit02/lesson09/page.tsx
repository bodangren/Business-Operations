import { StudentLessonShell } from "@/components/student/StudentLessonShell"
import { getNextLessonLink } from "@/lib/lesson-sequence"
import { getUnitMetadata } from "@/lib/student-navigation"
import { lesson09Data } from "./lesson-data"
import LessonContent from "./LessonContent"

/**
 * Render the build milestone with four student sections.
 * @returns The project lesson shell and build checks.
 */
export default function Lesson09Page() {
  return (
    <StudentLessonShell
      unitId="unit02"
      unitLabel={getUnitMetadata("unit02").label}
      lessonId="lesson09"
      lessonNumber={9}
      lessonTitle={lesson09Data.title}
      unitHref="/student/unit02"
      nextLesson={getNextLessonLink("/student/unit02/lesson09") ?? undefined}
      sections={[
        { id: "start", children: <LessonContent section="start" /> },
        { id: "learn", children: <LessonContent section="learn" /> },
        { id: "do", children: <LessonContent section="do" /> },
        { id: "check", children: <LessonContent section="check" /> },
      ]}
    />
  )
}
