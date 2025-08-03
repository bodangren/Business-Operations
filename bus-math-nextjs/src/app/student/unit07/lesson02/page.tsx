import { StudentLessonOverview } from "@/components/student/StudentLessonOverview"
import { lesson02Data, unit07Data, lesson02Phases } from "./lesson-data"

export default function Lesson02Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentLessonOverview 
        lesson={lesson02Data} 
        unit={unit07Data} 
        phases={lesson02Phases}
      />
    </div>
  )
}
