import { StudentLessonShell } from "@/components/student/StudentLessonShell"
import { getNextLessonLink } from "@/lib/lesson-sequence"
import { getUnitMetadata } from "@/lib/student-navigation"
import { lesson09Data } from "./lesson-data"
import Phase1Content from "./phase-1/PhaseContent"

export default function Lesson09Page() {
  return (
    <StudentLessonShell
      unitId="unit08"
      unitLabel={getUnitMetadata("unit08").label}
      lessonId="lesson09"
      lessonNumber={9}
      lessonTitle={lesson09Data.title}
      unitHref="/student/unit08"
      nextLesson={getNextLessonLink("/student/unit08/lesson09") ?? undefined}
      sections={[
        { id: "start", children: <Phase1Content /> },
      ]}
    />
  )
}
