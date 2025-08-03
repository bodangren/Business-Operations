import { StudentLessonOverview } from "@/components/student/StudentLessonOverview"
import { lesson09Data, unit05Data, lesson09Phases } from "./lesson-data"

export default function Lesson09Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentLessonOverview 
        lesson={lesson09Data} 
        unit={unit05Data} 
        phases={lesson09Phases}
      />
    </div>
  )
}
