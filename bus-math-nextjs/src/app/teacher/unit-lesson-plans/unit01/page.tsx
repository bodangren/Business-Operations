import { UnitLessonPlanComponent } from "@/components/teacher/UnitLessonPlan"
import { unit01LessonPlan } from "@/data/teacher/unit01-lesson-plan"

export default function Unit01LessonPlanPage() {
  return <UnitLessonPlanComponent lessonPlan={unit01LessonPlan} />
}

export function generateStaticParams() {
  return [
    { unit: 'unit01' }
  ]
}