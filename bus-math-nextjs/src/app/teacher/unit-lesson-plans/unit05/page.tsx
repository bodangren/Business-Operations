import { UnitLessonPlanComponent } from "@/components/teacher/UnitLessonPlan"
import { unit05LessonPlan } from "@/data/teacher/unit05-lesson-plan"

export default function Unit05LessonPlanPage() {
  return <UnitLessonPlanComponent lessonPlan={unit05LessonPlan} />
}

export function generateStaticParams() {
  return [
    { unit: 'unit05' }
  ]
}