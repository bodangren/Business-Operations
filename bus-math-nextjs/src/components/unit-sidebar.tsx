"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, BookOpen, Clock } from "lucide-react"
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
    return pathname === lessonPath || pathname.startsWith(lessonPath + '/')
  }

  const generateLessonUrl = (lessonId: string) => {
    const lessonNumber = lessons.find(l => l.id === lessonId)?.sequence || 1
    return `/student/unit${unitNumber.toString().padStart(2, '0')}/lesson${lessonNumber.toString().padStart(2, '0')}`
  }


  const formatDuration = (minutes: number) => {
    if (minutes < 60) return `${minutes}m`
    const hours = Math.floor(minutes / 60)
    const remainingMinutes = minutes % 60
    return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`
  }

  const unitProgress = calculateUnitProgress(unitId)

  return (
    <aside className="w-80 space-y-6 h-fit sticky top-24">
      {/* Unit Overview */}
      <Card className="velocity-card overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 velocity-gradient" />
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-1">
            <CardTitle className="text-base font-bold text-secondary">UNIT {unitNumber}</CardTitle>
            <Badge variant="velocity" className="text-[10px] py-0">
              {unitProgress}%
            </Badge>
          </div>
          <div className="text-sm font-semibold tracking-tight text-secondary leading-tight">{unitTitle}</div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
              <span>Overall Completion</span>
              <span>{unitProgress}%</span>
            </div>
            <Progress value={unitProgress} className="h-1.5 bg-muted rounded-full" />
          </div>
          
          <div className="flex items-center gap-4 pt-1 border-t border-border/40">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-light">
              <BookOpen className="h-3.5 w-3.5" />
              <span>{lessons.length} lessons</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-light">
              <Clock className="h-3.5 w-3.5" />
              <span>{lessons.reduce((sum, lesson) => sum + lesson.durationEstimateMinutes, 0)}m</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Lessons Navigation */}
      <Card className="velocity-card">
        <CardHeader className="py-4 px-6 border-b border-border/40">
          <CardTitle className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/70">
            Curriculum Path
          </CardTitle>
        </CardHeader>
        <CardContent className="p-2 pt-3 space-y-1">
          <nav className="space-y-1">
            {lessons.map((lesson) => {
              const lessonProgress = calculateLessonProgress(unitId, lesson.id)
              const isCurrent = isCurrentLesson(lesson.id)
              
              return (
                <div key={lesson.id} className="group">
                  <Link
                    href={generateLessonUrl(lesson.id)}
                    className={`flex flex-col rounded-lg p-3 transition-all duration-300 ${
                      isCurrent 
                        ? 'bg-primary/5 shadow-[inset_0_0_0_1px_rgba(99,91,255,0.15)] ring-1 ring-primary/10' 
                        : 'hover:bg-muted/50'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-start gap-3 min-w-0">
                        <div className={`mt-0.5 shrink-0 flex items-center justify-center w-5 h-5 rounded-md ${
                          lessonProgress === 100 ? 'bg-accent/10 text-accent' :
                          isCurrent ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
                        }`}>
                          {lessonProgress === 100 ? (
                            <CheckCircle className="h-3.5 w-3.5" />
                          ) : (
                            <span className="text-[10px] font-bold">{lesson.sequence}</span>
                          )}
                        </div>
                        <span className={`text-sm font-semibold leading-tight ${isCurrent ? 'text-primary' : 'text-secondary'}`}>
                          {lesson.title}
                        </span>
                      </div>
                    </div>
                    
                    <div className="ml-8 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-medium text-muted-foreground/60">
                          {formatDuration(lesson.durationEstimateMinutes)}
                        </span>
                      </div>
                      <span className={`text-[10px] font-bold ${lessonProgress === 100 ? 'text-accent' : 'text-muted-foreground/40'}`}>
                        {lessonProgress}%
                      </span>
                    </div>
                    
                    <div className="ml-8 mt-2">
                      <Progress 
                        value={lessonProgress} 
                        className={`h-1 rounded-full ${isCurrent ? 'bg-primary/20' : 'bg-muted/50'}`} 
                      />
                    </div>
                  </Link>
                </div>
              )
            })}
          </nav>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="px-1">
        <Link
          href={`/student/unit${unitNumber.toString().padStart(2, '0')}`}
          className="block w-full"
        >
          <Button variant="outline" size="sm" className="w-full justify-center bg-white/50 backdrop-blur-sm shadow-sm border-border/50 text-xs font-semibold uppercase tracking-wider">
            Unit Overview
          </Button>
        </Link>
      </div>
    </aside>
  )
}
