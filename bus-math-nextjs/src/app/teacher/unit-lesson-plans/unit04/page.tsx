import { UnitLessonPlanComponent } from "@/components/teacher/UnitLessonPlan"
import { unit04LessonPlan } from "@/data/teacher/unit04-lesson-plan"

export default function Unit04LessonPlanPage() {
  return <UnitLessonPlanComponent lessonPlan={unit04LessonPlan} />
}

export function generateStaticParams() {
  return [
    { unit: 'unit04' }
  ]
}