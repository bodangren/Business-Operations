import { StudentLessonShell } from "@/components/student/StudentLessonShell"
import { getNextLessonLink } from "@/lib/lesson-sequence"
import { getUnitMetadata } from "@/lib/student-navigation"
import { lesson09Data } from "./lesson-data"
import Phase1Content from "./phase-1/PhaseContent"

export default function Lesson09Page() {
  return (
    <StudentLessonShell
      unitId="unit03"
      unitLabel={getUnitMetadata("unit03").label}
      lessonId="lesson09"
      lessonNumber={9}
      lessonTitle={lesson09Data.title}
      unitHref="/student/unit03"
      nextLesson={getNextLessonLink("/student/unit03/lesson09") ?? undefined}
      sections={[
        { id: "start", children: <Phase1Content /> },
      ]}
    />
  )
}
