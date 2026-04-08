'use client'

import { useRouter } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  CheckCircle, 
  BookOpen, 
  Clock,
  Users,
  Info,
  FileText,
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  PenTool,
  UserCheck,
  ChevronDown
} from "lucide-react"

import type { UnitLessonPlan, DailyLesson } from "@/types/lesson-plan"

interface TeacherLessonPlanProps {
  unitLessonPlan: UnitLessonPlan
  dailyLesson: DailyLesson
  unit: string
  lessonNumber: number
}

export function TeacherLessonPlan({ unitLessonPlan, dailyLesson, unit, lessonNumber }: TeacherLessonPlanProps) {
  const router = useRouter()

  const handleLessonChange = (newLessonNumber: number) => {
    const formattedLesson = `lesson-${String(newLessonNumber).padStart(2, '0')}`
    router.push(`/teacher/${unit}/${formattedLesson}`)
  }

  const getPhaseIcon = (activityName: string) => {
    if (activityName.toLowerCase().includes('hook')) return <PlayCircle className="h-5 w-5" />
    if (activityName.toLowerCase().includes('intro')) return <BookOpen className="h-5 w-5" />
    if (activityName.toLowerCase().includes('practice') || activityName.toLowerCase().includes('guided')) return <Users className="h-5 w-5" />
    if (activityName.toLowerCase().includes('independent')) return <PenTool className="h-5 w-5" />
    if (activityName.toLowerCase().includes('assess') || activityName.toLowerCase().includes('check')) return <UserCheck className="h-5 w-5" />
    if (activityName.toLowerCase().includes('close') || activityName.toLowerCase().includes('wrap')) return <Info className="h-5 w-5" />
    return <Info className="h-5 w-5" />
  }

  const getPhaseColor = (activityName: string) => {
    if (activityName.toLowerCase().includes('hook')) return 'border-red-200 bg-red-50 dark:bg-red-950/10'
    if (activityName.toLowerCase().includes('intro')) return 'border-blue-200 bg-blue-50 dark:bg-blue-950/10'
    if (activityName.toLowerCase().includes('practice') || activityName.toLowerCase().includes('guided')) return 'border-green-200 bg-green-50 dark:bg-green-950/10'
    if (activityName.toLowerCase().includes('independent')) return 'border-purple-200 bg-purple-50 dark:bg-purple-950/10'
    if (activityName.toLowerCase().includes('assess') || activityName.toLowerCase().includes('check')) return 'border-amber-200 bg-amber-50 dark:bg-amber-950/10'
    if (activityName.toLowerCase().includes('close') || activityName.toLowerCase().includes('wrap')) return 'border-slate-200 bg-slate-50 dark:bg-slate-950/10'
    return 'border-gray-200 bg-gray-50 dark:bg-gray-950/10'
  }

  return (
    <div className="space-y-8">
      {/* Header Navigation */}
      <div className="flex items-center justify-between bg-white dark:bg-gray-900 p-4 rounded-lg border shadow-sm">
        <div className="flex items-center gap-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {unit.toUpperCase()} - Lesson {lessonNumber}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">{dailyLesson.title}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <label htmlFor="lesson-selector" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Jump to:
            </label>
            <div className="relative">
              <select
                id="lesson-selector"
                value={lessonNumber}
                onChange={(e) => handleLessonChange(parseInt(e.target.value))}
                className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary min-w-[280px]"
              >
                {unitLessonPlan.learningPlan.dailyLessons.map((lesson) => (
                  <option key={lesson.day} value={lesson.day}>
                    Lesson {lesson.day}: {lesson.title}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Clock className="h-4 w-4" />
            <span>{dailyLesson.duration}</span>
          </div>
          
          {/* Quick Previous/Next for adjacent lessons */}
          <div className="flex items-center gap-1">
            <Button 
              variant="outline" 
              size="sm" 
              disabled={lessonNumber <= 1}
              onClick={() => handleLessonChange(lessonNumber - 1)}
              className="p-2"
              title="Previous lesson"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              disabled={lessonNumber >= 10}
              onClick={() => handleLessonChange(lessonNumber + 1)}
              className="p-2"
              title="Next lesson"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Lesson Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Lesson Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Lesson Focus */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Lesson Focus</h3>
            <p className="text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg italic">
              {dailyLesson.focus}
            </p>
          </div>

          {/* Unit Objectives (from UnitLessonPlan) */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Unit Objectives</h3>
            <div className="bg-blue-50 dark:bg-blue-950/10 p-4 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200 mb-2 font-medium">
                Enduring Understandings:
              </p>
              <ul className="space-y-2">
                {unitLessonPlan.objectives.enduring.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2 text-blue-700 dark:text-blue-300">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lesson Activities */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-primary" />
          Lesson Activities
        </h2>
        
        {dailyLesson.activities.map((activity, index) => (
          <Card key={index} className={`${getPhaseColor(activity.name)} border-l-4`}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getPhaseIcon(activity.name)}
                  <span>Activity {index + 1}: {activity.name}</span>
                </div>
                <Badge variant="secondary">{activity.duration}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {activity.description}
              </p>
              
              {activity.details && activity.details.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Details:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {activity.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              )}

              {activity.callout && (
                <div className={`p-4 rounded-lg mb-4 ${
                  activity.callout.type === 'important' 
                    ? 'bg-amber-50 dark:bg-amber-950/10 border border-amber-200 dark:border-amber-800' 
                    : activity.callout.type === 'definition'
                      ? 'bg-blue-50 dark:bg-blue-950/10 border border-blue-200 dark:border-blue-800'
                      : activity.callout.type === 'tip'
                        ? 'bg-green-50 dark:bg-green-950/10 border border-green-200 dark:border-green-800'
                        : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                }`}>
                  <div className="font-medium text-gray-900 dark:text-gray-100 mb-2">
                    {activity.callout.title}
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                    {activity.callout.content}
                  </p>
                  {activity.callout.items && activity.callout.items.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {activity.callout.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {activity.video && (
                <div className="bg-purple-50 dark:bg-purple-950/10 border border-purple-200 dark:border-purple-800 p-3 rounded-lg mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <PlayCircle className="h-4 w-4 text-purple-600" />
                    <span className="text-sm font-medium text-purple-800 dark:text-purple-200">
                      Video: {activity.video.title} ({activity.video.duration}
                    </span>
                  </div>
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    {activity.video.description}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Materials */}
      {dailyLesson.materials && dailyLesson.materials.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              Required Materials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {dailyLesson.materials.map((material, index) => (
                <li key={index}>{material}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Differentiation Strategies (from UnitLessonPlan) */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Differentiation Strategies
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            {unitLessonPlan.differentiation.map((diff, index) => (
              <div key={index}>
                <h4 className={`font-semibold mb-2 ${
                  diff.audience === 'struggling' ? 'text-green-700 dark:text-green-300' :
                  diff.audience === 'advanced' ? 'text-purple-700 dark:text-purple-300' :
                  'text-blue-700 dark:text-blue-300'
                }`}>
                  {diff.title}
                </h4>
                <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                  {diff.strategies.map((strategy, i) => (
                    <li key={i}>• {strategy}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
