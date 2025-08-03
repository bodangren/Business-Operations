"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, BookOpen } from "lucide-react"
import { useLessonProgress } from "@/contexts/LessonProgressContext"

interface MCPLesson {
  id: string
  sequence: number
  title: string
  durationEstimateMinutes: number
  status: string
  keyConcepts: string[]
  learningObjectives: string[]
}


interface UnitSidebarProps {
  unitId: string
  unitNumber: number
  unitTitle: string
  lessons?: MCPLesson[]
}


export function UnitSidebar({ unitId, unitNumber, unitTitle, lessons = [] }: UnitSidebarProps) {
  const pathname = usePathname()
  const { calculateUnitProgress, calculateLessonProgress } = useLessonProgress()


  const isCurrentLesson = (lessonId: string) => {
    const lessonNumber = lessons.find(l => l.id === lessonId)?.sequence || 1
    const lessonPath = `/student/unit${unitNumber.toString().padStart(2, '0')}/lesson${lessonNumber.toString().padStart(2, '0')}`
    return pathname === lessonPath
  }

  const generateLessonUrl = (lessonId: string) => {
    const lessonNumber = lessons.find(l => l.id === lessonId)?.sequence || 1
    return `/student/unit${unitNumber.toString().padStart(2, '0')}/lesson${lessonNumber.toString().padStart(2, '0')}`
  }


  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes}min`
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}min` : `${hours}h`
  }

  const unitProgress = calculateUnitProgress(unitId)

  return (
    <aside className="w-80 space-y-6 h-fit sticky top-4">
      {/* Unit Overview */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Unit {unitNumber}</CardTitle>
            <Badge variant="outline" className="text-xs">
              {unitProgress}% Complete
            </Badge>
          </div>
          <div className="text-sm text-muted-foreground">{unitTitle}</div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Overall Progress</span>
              <span>{unitProgress}%</span>
            </div>
            <Progress value={unitProgress} className="h-2" />
          </div>
          
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{lessons.length} lessons</span>
            <span>{lessons.reduce((sum, lesson) => sum + lesson.durationEstimateMinutes, 0)} min total</span>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Lessons Navigation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Lessons
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <nav className="space-y-1">
            {lessons.map((lesson) => {
              const lessonProgress = calculateLessonProgress(unitId, lesson.id)
              const isCurrent = isCurrentLesson(lesson.id)
              
              return (
                <div key={lesson.id} className="space-y-1">
                  {/* Lesson Header - Now a clickable link */}
                  <Link
                    href={generateLessonUrl(lesson.id)}
                    className={`flex items-center rounded-md p-2 transition-colors ${
                      isCurrent ? 'bg-primary/10' : 'hover:bg-muted'
                    }`}
                  >
                    <div className="flex items-center w-full">
                      <BookOpen className="h-4 w-4 mr-3 shrink-0" />
                      
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-sm">
                            {lesson.sequence}. {lesson.title}
                          </span>
                          {lessonProgress === 100 && (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          )}
                        </div>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-muted-foreground">
                            {formatDuration(lesson.durationEstimateMinutes)}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {lessonProgress}%
                          </span>
                        </div>
                      </div>
                      
                      {/* Progress indicator */}
                      <div className={`w-3 h-3 rounded-full ml-2 ${
                        lessonProgress === 100 ? 'bg-green-500' :
                        isCurrent ? 'bg-primary' : 'bg-muted-foreground/30'
                      }`} />
                    </div>
                  </Link>

                  {/* Lesson Progress Bar */}
                  <div className="ml-6 mr-2">
                    <Progress value={lessonProgress} className="h-1" />
                  </div>
                </div>
              )
            })}
          </nav>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Link
            href={`/student/unit${unitNumber.toString().padStart(2, '0')}`}
            className="block w-full"
          >
            <Button variant="outline" size="sm" className="w-full justify-start">
              <BookOpen className="h-4 w-4 mr-2" />
              Unit Overview
            </Button>
          </Link>
        </CardContent>
      </Card>
    </aside>
  )
}