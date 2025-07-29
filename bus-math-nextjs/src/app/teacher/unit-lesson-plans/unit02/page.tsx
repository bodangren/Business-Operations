import { UnitLessonPlanComponent } from "@/components/teacher/UnitLessonPlan"
import { unit02LessonPlan } from "@/data/teacher/unit02-lesson-plan"

export default function Unit02LessonPlanPage() {
  return <UnitLessonPlanComponent lessonPlan={unit02LessonPlan} />
}

export function generateStaticParams() {
  return [
    { unit: 'unit02' }
  ]
}