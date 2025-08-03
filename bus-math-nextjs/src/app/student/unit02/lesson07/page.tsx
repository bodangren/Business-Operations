import { StudentLessonOverview } from "@/components/student/StudentLessonOverview"
import { lesson07Data, unit02Data, lesson07Phases } from "./lesson-data"

export default function Lesson07Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentLessonOverview 
        lesson={lesson07Data} 
        unit={unit02Data} 
        phases={lesson07Phases}
      />
    </div>
  )
}
