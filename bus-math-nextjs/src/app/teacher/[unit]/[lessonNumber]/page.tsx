import { notFound } from 'next/navigation'
import { TeacherLessonPlan } from '@/components/teacher/TeacherLessonPlan'

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
  
  if (isNaN(lessonNum) || lessonNum < 1 || lessonNum > 10) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-8 px-4">
        <TeacherLessonPlan 
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
  
  console.log('Generated static params:', params.slice(0, 5)) // Debug first 5 params
  return params
}

export async function generateMetadata({ params }: TeacherLessonPageProps) {
  const { unit, lessonNumber } = await params
  const lessonNum = parseInt(lessonNumber.replace('lesson-', ''))
  
  return {
    title: `Teacher: ${unit.toUpperCase()} - Lesson ${lessonNum} | Math for Business Operations`,
    description: `Teacher lesson plan for ${unit.toUpperCase()}, Lesson ${lessonNum} - Math for Business Operations curriculum`,
  }
}