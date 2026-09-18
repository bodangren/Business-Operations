import { StudentLessonShell } from "@/components/student/StudentLessonShell"
import { getNextLessonLink } from "@/lib/lesson-sequence"
import { getUnitMetadata } from "@/lib/student-navigation"
import { lesson08Data } from "./lesson-data"
import LessonContent from "./LessonContent"

export default function Lesson08Page() {
  return (
    <StudentLessonShell
      unitId="unit02"
      unitLabel={getUnitMetadata("unit02").label}
      lessonId="lesson08"
      lessonNumber={8}
      lessonTitle={lesson08Data.title}
      unitHref="/student/unit02"
      nextLesson={getNextLessonLink("/student/unit02/lesson08") ?? undefined}
      sections={[
        { id: "start", children: <LessonContent /> },
      ]}
    />
  )
}
