import { StudentLessonOverview } from "@/components/student/StudentLessonOverview"
import { lesson09Data, unit03Data, lesson09Phases } from "./lesson-data"

export default function Lesson09Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentLessonOverview 
        lesson={lesson09Data} 
        unit={unit03Data} 
        phases={lesson09Phases}
      />
      <div className="mt-6">
        <a className="underline text-blue-600" href="/student/unit03/lesson09/phase-1/">Go to Phase 1</a>
      </div>
    </div>
  )
}
