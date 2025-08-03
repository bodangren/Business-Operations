import { StudentLessonOverview } from "@/components/student/StudentLessonOverview"
import { lesson04Data, unit02Data, lesson04Phases } from "./lesson-data"

export default function Lesson04Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentLessonOverview 
        lesson={lesson04Data} 
        unit={unit02Data} 
        phases={lesson04Phases}
      />
    </div>
  )
}
