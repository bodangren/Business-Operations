import { StudentLessonShell } from "@/components/student/StudentLessonShell"
import { getNextLessonLink } from "@/lib/lesson-sequence"
import { getUnitMetadata } from "@/lib/student-navigation"
import { lesson08Data } from "./lesson-data"
import LessonContent from "./LessonContent"

export default function Lesson08Page() {
  return (
    <StudentLessonShell
      unitId="unit04"
      unitLabel={getUnitMetadata("unit04").label}
      lessonId="lesson08"
      lessonNumber={8}
      lessonTitle={lesson08Data.title}
      unitHref="/student/unit04"
      nextLesson={getNextLessonLink("/student/unit04/lesson08") ?? undefined}
      sections={[
        { id: "start", children: <LessonContent /> },
      ]}
    />
  )
}
