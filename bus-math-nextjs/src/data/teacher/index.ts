import { unit01LessonPlan } from './unit01-lesson-plan'
import { unit02LessonPlan } from './unit02-lesson-plan'
import { unit03LessonPlan } from './unit03-lesson-plan'
import { unit04LessonPlan } from './unit04-lesson-plan'
import { unit05LessonPlan } from './unit05-lesson-plan'
import { unit06LessonPlan } from './unit06-lesson-plan'
import { unit07LessonPlan } from './unit07-lesson-plan'
import { unit08LessonPlan } from './unit08-lesson-plan'
import type { UnitLessonPlan } from '@/types/lesson-plan'

export const UNIT_LESSON_PLANS: Record<number, UnitLessonPlan> = {
  1: unit01LessonPlan,
  2: unit02LessonPlan,
  3: unit03LessonPlan,
  4: unit04LessonPlan,
  5: unit05LessonPlan,
  6: unit06LessonPlan,
  7: unit07LessonPlan,
  8: unit08LessonPlan,
}

export function getUnitLessonPlan(unitNumber: number): UnitLessonPlan | undefined {
  return UNIT_LESSON_PLANS[unitNumber]
}

export function getDailyLesson(unitLessonPlan: UnitLessonPlan, day: number) {
  return unitLessonPlan.learningPlan.dailyLessons.find(lesson => lesson.day === day)
}
