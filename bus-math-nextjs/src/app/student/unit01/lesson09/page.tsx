import { StudentLessonShell } from "@/components/student/StudentLessonShell"
import { getNextLessonLink } from "@/lib/lesson-sequence"
import { getUnitMetadata } from "@/lib/student-navigation"
import { lesson09Data } from "./lesson-data"
import LessonContent from "./LessonContent"

export default function Lesson09Page() {
  return (
    <StudentLessonShell
      unitId="unit01"
      unitLabel={getUnitMetadata("unit01").label}
      lessonId="lesson09"
      lessonNumber={9}
      lessonTitle={lesson09Data.title}
      unitHref="/student/unit01"
      nextLesson={getNextLessonLink("/student/unit01/lesson09") ?? undefined}
      sections={[
        { id: "start", children: <LessonContent /> },
      ]}
    />
  )
}
