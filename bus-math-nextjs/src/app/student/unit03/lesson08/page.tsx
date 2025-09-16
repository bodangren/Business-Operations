import { StudentLessonOverview } from "@/components/student/StudentLessonOverview"
import { lesson08Data, unit03Data, lesson08Phases } from "./lesson-data"

export default function Lesson08Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentLessonOverview 
        lesson={lesson08Data} 
        unit={unit03Data} 
        phases={lesson08Phases}
      />
      <div className="mt-6">
        <a className="underline text-blue-600" href="/student/unit03/lesson08/phase-1/">Go to Phase 1</a>
      </div>
    </div>
  )
}
