import { StudentLessonShell } from "@/components/student/StudentLessonShell"
import { getNextLessonLink } from "@/lib/lesson-sequence"
import { getUnitMetadata } from "@/lib/student-navigation"
import { lesson08Data } from "./lesson-data"
import Phase1Content from "./phase-1/PhaseContent"

export default function Lesson08Page() {
  return (
    <StudentLessonShell
      unitId="unit06"
      unitLabel={getUnitMetadata("unit06").label}
      lessonId="lesson08"
      lessonNumber={8}
      lessonTitle={lesson08Data.title}
      unitHref="/student/unit06"
      nextLesson={getNextLessonLink("/student/unit06/lesson08") ?? undefined}
      sections={[
        { id: "start", children: <Phase1Content /> },
      ]}
    />
  )
}
