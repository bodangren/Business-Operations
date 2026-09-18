import { StudentLessonShell } from "@/components/student/StudentLessonShell"
import { getNextLessonLink } from "@/lib/lesson-sequence"
import { getUnitMetadata } from "@/lib/student-navigation"
import { lesson04Data } from "./lesson-data"
import Phase1Content from "./phase-1/PhaseContent"
import Phase2Content from "./phase-2/PhaseContent"
import Phase3Content from "./phase-3/PhaseContent"
import Phase4Content from "./phase-4/PhaseContent"
import Phase5Content from "./phase-5/PhaseContent"
import Phase6Content from "./phase-6/PhaseContent"

export default function Lesson04Page() {
  return (
    <StudentLessonShell
      unitId="unit04"
      unitLabel={getUnitMetadata("unit04").label}
      lessonId="lesson04"
      lessonNumber={4}
      lessonTitle={lesson04Data.title}
      unitHref="/student/unit04"
      nextLesson={getNextLessonLink("/student/unit04/lesson04") ?? undefined}
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
