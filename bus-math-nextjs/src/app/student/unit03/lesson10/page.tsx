import { StudentLessonOverview } from "@/components/student/StudentLessonOverview"
import { lesson10Data, unit03Data, lesson10Phases } from "./lesson-data"

export default function Lesson10Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentLessonOverview 
        lesson={lesson10Data} 
        unit={unit03Data} 
        phases={lesson10Phases}
      />
      <div className="mt-6">
        <a className="underline text-blue-600" href="/student/unit03/lesson10/phase-1/">Go to Phase 1</a>
      </div>
    </div>
  )
}
