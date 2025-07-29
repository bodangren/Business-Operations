import { UnitLessonPlanComponent } from "@/components/teacher/UnitLessonPlan"
import { unit06LessonPlan } from "@/data/teacher/unit06-lesson-plan"

export default function Unit06LessonPlanPage() {
  return <UnitLessonPlanComponent lessonPlan={unit06LessonPlan} />
}

export function generateStaticParams() {
  return [
    { unit: 'unit06' }
  ]
}