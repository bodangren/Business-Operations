import { StudentLessonOverview } from "@/components/student/StudentLessonOverview"
import { lesson06Data, unit07Data, lesson06Phases } from "./lesson-data"

export default function Lesson06Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentLessonOverview 
        lesson={lesson06Data} 
        unit={unit07Data} 
        phases={lesson06Phases}
      />
    </div>
  )
}
