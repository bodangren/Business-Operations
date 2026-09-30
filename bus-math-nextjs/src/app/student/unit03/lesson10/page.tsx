import { StudentLessonShell } from "@/components/student/StudentLessonShell"
import { getNextLessonLink } from "@/lib/lesson-sequence"
import { getUnitMetadata } from "@/lib/student-navigation"
import { lesson10Data } from "./lesson-data"
import Phase1Content from "./phase-1/PhaseContent"

export default function Lesson10Page() {
  return (
    <StudentLessonShell
      unitId="unit03"
      unitLabel={getUnitMetadata("unit03").label}
      lessonId="lesson10"
      lessonNumber={10}
      lessonTitle={lesson10Data.title}
      unitHref="/student/unit03"
      nextLesson={getNextLessonLink("/student/unit03/lesson10") ?? undefined}
      sections={[
        { id: "start", children: <Phase1Content /> },
      ]}
    />
  )
}
