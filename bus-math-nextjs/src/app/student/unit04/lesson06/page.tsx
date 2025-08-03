import { StudentLessonOverview } from "@/components/student/StudentLessonOverview"
import { lesson06Data, unit04Data, lesson06Phases } from "./lesson-data"

export default function Lesson06Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentLessonOverview 
        lesson={lesson06Data} 
        unit={unit04Data} 
        phases={lesson06Phases}
      />
    </div>
  )
}
