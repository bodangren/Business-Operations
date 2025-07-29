import { UnitLessonPlanComponent } from "@/components/teacher/UnitLessonPlan"
import { unit03LessonPlan } from "@/data/teacher/unit03-lesson-plan"

export default function Unit03LessonPlanPage() {
  return <UnitLessonPlanComponent lessonPlan={unit03LessonPlan} />
}

export function generateStaticParams() {
  return [
    { unit: 'unit03' }
  ]
}