import { StudentLessonOverview } from "@/components/student/StudentLessonOverview"
import { lesson01Data, unit02Data, lesson01Phases } from "./lesson-data"

export default function Lesson01Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentLessonOverview 
        lesson={lesson01Data} 
        unit={unit02Data} 
        phases={lesson01Phases}
      />
    </div>
  )
}