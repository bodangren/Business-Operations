import { StudentLessonShell } from "@/components/student/StudentLessonShell"
import { getNextLessonLink } from "@/lib/lesson-sequence"
import { getUnitMetadata } from "@/lib/student-navigation"
import { lesson10Data } from "./lesson-data"
import LessonContent from "./LessonContent"

export default function Lesson10Page() {
  return (
    <StudentLessonShell
      unitId="unit01"
      unitLabel={getUnitMetadata("unit01").label}
      lessonId="lesson10"
      lessonNumber={10}
      lessonTitle={lesson10Data.title}
      unitHref="/student/unit01"
      nextLesson={getNextLessonLink("/student/unit01/lesson10") ?? undefined}
      sections={[
        { id: "start", children: <LessonContent /> },
      ]}
    />
  )
}
