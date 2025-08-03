import { StudentLessonOverview } from "@/components/student/StudentLessonOverview"
import { lesson03Data, unit02Data, lesson03Phases } from "./lesson-data"

export default function Lesson03Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentLessonOverview 
        lesson={lesson03Data} 
        unit={unit02Data} 
        phases={lesson03Phases}
      />
    </div>
  )
}