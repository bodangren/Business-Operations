import { StudentLessonShell } from "@/components/student/StudentLessonShell"
import { getNextLessonLink } from "@/lib/lesson-sequence"
import { getUnitMetadata } from "@/lib/student-navigation"
import { lesson09Data } from "./lesson-data"
import LessonContent from "./LessonContent"

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
        { id: "start", children: <LessonContent /> },
      ]}
    />
  )
}
