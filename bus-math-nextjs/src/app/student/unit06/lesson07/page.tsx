import { StudentLessonShell } from "@/components/student/StudentLessonShell"
import { getNextLessonLink } from "@/lib/lesson-sequence"
import { getUnitMetadata } from "@/lib/student-navigation"
import { lesson07Data } from "./lesson-data"
import Phase1Content from "./phase-1/PhaseContent"
import Phase2Content from "./phase-2/PhaseContent"
import Phase3Content from "./phase-3/PhaseContent"
import Phase4Content from "./phase-4/PhaseContent"
import Phase5Content from "./phase-5/PhaseContent"
import Phase6Content from "./phase-6/PhaseContent"

export default function Lesson07Page() {
  return (
    <StudentLessonShell
      unitId="unit06"
      unitLabel={getUnitMetadata("unit06").label}
      lessonId="lesson07"
      lessonNumber={7}
      lessonTitle={lesson07Data.title}
      unitHref="/student/unit06"
      nextLesson={getNextLessonLink("/student/unit06/lesson07") ?? undefined}
      sections={[
        { id: "start", children: <Phase1Content /> },
        { id: "learn", children: <Phase2Content /> },
        {
          id: "do",
          children: (
            <>
              <Phase3Content />
              <Phase4Content />
            </>
          ),
        },
        {
          id: "check",
          children: (
            <>
              <Phase5Content />
              <Phase6Content />
            </>
          ),
        },
      ]}
    />
  )
}
