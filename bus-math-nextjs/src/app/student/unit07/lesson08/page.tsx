import { StudentLessonShell } from "@/components/student/StudentLessonShell"
import { getNextLessonLink } from "@/lib/lesson-sequence"
import { getUnitMetadata } from "@/lib/student-navigation"
import { lesson08Data } from "./lesson-data"
import Phase1Content from "./phase-1/PhaseContent"

export default function Lesson08Page() {
  return (
    <StudentLessonShell
      unitId="unit07"
      unitLabel={getUnitMetadata("unit07").label}
      lessonId="lesson08"
      lessonNumber={8}
      lessonTitle={lesson08Data.title}
      unitHref="/student/unit07"
      nextLesson={getNextLessonLink("/student/unit07/lesson08") ?? undefined}
      sections={[
        { id: "start", children: <Phase1Content /> },
      ]}
    />
  )
}
