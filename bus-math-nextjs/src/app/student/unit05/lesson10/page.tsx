import { StudentLessonOverview } from "@/components/student/StudentLessonOverview"
import { lesson10Data, unit05Data, lesson10Phases } from "./lesson-data"

export default function Lesson10Page() {
  return (
    <div className="container mx-auto py-8">
      <StudentLessonOverview 
        lesson={lesson10Data} 
        unit={unit05Data} 
        phases={lesson10Phases}
      />
    </div>
  )
}
