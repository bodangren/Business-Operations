import { UnitLessonPlanComponent } from "@/components/teacher/UnitLessonPlan"
import { unit07LessonPlan } from "@/data/teacher/unit07-lesson-plan"

export default function Unit07LessonPlanPage() {
  return <UnitLessonPlanComponent lessonPlan={unit07LessonPlan} />
}

export function generateStaticParams() {
  return [
    { unit: 'unit07' }
  ]
}