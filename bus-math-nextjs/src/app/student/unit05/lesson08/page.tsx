import { StudentLessonOverview } from "@/components/student/StudentLessonOverview"
import { lesson08Data, unit05Data, lesson08Phases } from "./lesson-data"

export default function Lesson08Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentLessonOverview 
        lesson={lesson08Data} 
        unit={unit05Data} 
        phases={lesson08Phases}
      />
    </div>
  )
}
