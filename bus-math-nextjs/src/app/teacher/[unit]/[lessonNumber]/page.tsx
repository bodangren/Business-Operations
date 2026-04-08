import { notFound } from 'next/navigation'
import { TeacherLessonPlan } from '@/components/teacher/TeacherLessonPlan'
import { getUnitLessonPlan, getDailyLesson } from '@/data/teacher'

interface TeacherLessonPageProps {
  params: Promise<{
    unit: string
    lessonNumber: string
  }>
}

const VALID_UNITS = [
  'unit01', 'unit02', 'unit03', 'unit04',
  'unit05', 'unit06', 'unit07', 'unit08'
]

const VALID_LESSON_NUMBERS = [
  'lesson-01', 'lesson-02', 'lesson-03', 'lesson-04', 'lesson-05',
  'lesson-06', 'lesson-07', 'lesson-08', 'lesson-09', 'lesson-10'
]

export default async function TeacherLessonPage({ params }: TeacherLessonPageProps) {
  const { unit, lessonNumber } = await params

  // Validate unit parameter
  if (!VALID_UNITS.includes(unit)) {
    notFound()
  }

  // Validate lesson number parameter
  if (!VALID_LESSON_NUMBERS.includes(lessonNumber)) {
    notFound()
  }

  // Extract lesson number for processing
  const lessonNum = parseInt(lessonNumber.replace('lesson-', ''))
  const unitNum = parseInt(unit.replace('unit', ''))
  
  if (isNaN(lessonNum) || lessonNum < 1 || lessonNum > 10 || isNaN(unitNum)) {
    notFound()
  }

  const unitLessonPlan = getUnitLessonPlan(unitNum)
  if (!unitLessonPlan) {
    notFound()
  }

  const dailyLesson = getDailyLesson(unitLessonPlan, lessonNum)
  if (!dailyLesson) {
    notFound()
  }

  return (
    <div className="bg-gray-50 pt-16 md:pt-0">
      <div className="max-w-6xl mx-auto py-8 px-4">
        <TeacherLessonPlan 
          unitLessonPlan={unitLessonPlan}
          dailyLesson={dailyLesson}
          unit={unit}
          lessonNumber={lessonNum}
        />
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const params = []
  
  for (const unit of VALID_UNITS) {
    for (let i = 1; i <= 10; i++) {
      params.push({
        unit: unit,
        lessonNumber: `lesson-${String(i).padStart(2, '0')}`
      })
    }
  }
  
  return params
}

export async function generateMetadata({ params }: TeacherLessonPageProps) {
  const { unit, lessonNumber } = await params
  const lessonNum = parseInt(lessonNumber.replace('lesson-', ''))
  const unitNum = parseInt(unit.replace('unit', ''))
  
  const unitLessonPlan = getUnitLessonPlan(unitNum)
  const dailyLesson = unitLessonPlan ? getDailyLesson(unitLessonPlan, lessonNum) : undefined
  
  return {
    title: dailyLesson 
      ? `Teacher: ${unit.toUpperCase()} - ${dailyLesson.title} | Math for Business Operations`
      : `Teacher: ${unit.toUpperCase()} - Lesson ${lessonNum} | Math for Business Operations`,
    description: dailyLesson
      ? dailyLesson.focus
      : `Teacher lesson plan for ${unit.toUpperCase()}, Lesson ${lessonNum} - Math for Business Operations curriculum`,
  }
}