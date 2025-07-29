import { UnitLessonPlanComponent } from "@/components/teacher/UnitLessonPlan"
import { unit08LessonPlan } from "@/data/teacher/unit08-lesson-plan"

export default function Unit08LessonPlanPage() {
  return <UnitLessonPlanComponent lessonPlan={unit08LessonPlan} />
}

export function generateStaticParams() {
  return [
    { unit: 'unit08' }
  ]
}