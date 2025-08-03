import { StudentLessonOverview } from "@/components/student/StudentLessonOverview"
import { lesson05Data, unit03Data, lesson05Phases } from "./lesson-data"

export default function Lesson05Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentLessonOverview 
        lesson={lesson05Data} 
        unit={unit03Data} 
        phases={lesson05Phases}
      />
    </div>
  )
}
