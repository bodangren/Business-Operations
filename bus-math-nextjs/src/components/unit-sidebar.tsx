"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronRight, CheckCircle, Circle, Clock, BookOpen, Play, Users, ClipboardCheck, Target, MessageSquare } from "lucide-react"
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

interface MCPLessonPhase {
  id: string
  phaseName: 'Hook' | 'Introduction' | 'Guided Practice' | 'Independent Practice' | 'Assessment' | 'Closing'
  sequence: number
  description: string
  developerNotes?: string
}

interface UnitSidebarProps {
  unitId: string
  unitNumber: number
  unitTitle: string
  lessons?: MCPLesson[]
}

// Phase icons mapping
const phaseIcons = {
  'Hook': Play,
  'Introduction': BookOpen,
  'Guided Practice': Users,
  'Independent Practice': Target,
  'Assessment': ClipboardCheck,
  'Closing': MessageSquare
}

// Phase color mapping for badges
const phaseColors = {
  'Hook': 'bg-red-500',
  'Introduction': 'bg-blue-500',
  'Guided Practice': 'bg-green-500',
  'Independent Practice': 'bg-yellow-500',
  'Assessment': 'bg-purple-500',
  'Closing': 'bg-gray-500'
}

export function UnitSidebar({ unitId, unitNumber, unitTitle, lessons = [] }: UnitSidebarProps) {
  const pathname = usePathname()
  const { getUnitProgress, getLessonProgress, getPhaseProgress, calculateUnitProgress, calculateLessonProgress, completePhase } = useLessonProgress()
  
  const [expandedLessons, setExpandedLessons] = useState<Set<string>>(new Set())
  const [lessonPhases, setLessonPhases] = useState<{ [lessonId: string]: MCPLessonPhase[] }>({})
  const [isLoading, setIsLoading] = useState(false)

  // Load lesson phases from MCP database
  useEffect(() => {
    const loadLessonPhases = async () => {
      if (lessons.length === 0) return
      
      setIsLoading(true)
      try {
        const phasesData: { [lessonId: string]: MCPLessonPhase[] } = {}
        
        // For now, we'll create default phases since MCP connection might not be available
        // In production, this would fetch from: mcp__curriculum-mcp__get_lesson_phases
        const defaultPhases: MCPLessonPhase[] = [
          { id: 'hook', phaseName: 'Hook', sequence: 1, description: 'Engaging opening activity' },
          { id: 'introduction', phaseName: 'Introduction', sequence: 2, description: 'Introduce key concepts' },
          { id: 'guided-practice', phaseName: 'Guided Practice', sequence: 3, description: 'Practice with guidance' },
          { id: 'independent-practice', phaseName: 'Independent Practice', sequence: 4, description: 'Apply skills independently' },
          { id: 'assessment', phaseName: 'Assessment', sequence: 5, description: 'Check understanding' },
          { id: 'closing', phaseName: 'Closing', sequence: 6, description: 'Wrap up and reflect' }
        ]
        
        lessons.forEach(lesson => {
          phasesData[lesson.id] = defaultPhases.map(phase => ({
            ...phase,
            id: `${lesson.id}-${phase.id}`
          }))
        })
        
        setLessonPhases(phasesData)
      } catch (error) {
        console.error('Failed to load lesson phases:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadLessonPhases()
  }, [lessons])

  const toggleLessonExpansion = (lessonId: string) => {
    const newExpanded = new Set(expandedLessons)
    if (newExpanded.has(lessonId)) {
      newExpanded.delete(lessonId)
    } else {
      newExpanded.add(lessonId)
    }
    setExpandedLessons(newExpanded)
  }

  const isCurrentLessonPhase = (lessonId: string, phase: MCPLessonPhase) => {
    const lessonNumber = lessons.find(l => l.id === lessonId)?.sequence || 1
    const phaseSlug = phase.phaseName.toLowerCase().replace(/\s+/g, '-')
    const expectedPath = `/units/unit${unitNumber.toString().padStart(2, '0')}/lesson-${lessonNumber.toString().padStart(2, '0')}/${phaseSlug}`
    return pathname === expectedPath
  }

  const isCurrentLesson = (lessonId: string) => {
    const lessonNumber = lessons.find(l => l.id === lessonId)?.sequence || 1
    const lessonBasePath = `/units/unit${unitNumber.toString().padStart(2, '0')}/lesson-${lessonNumber.toString().padStart(2, '0')}`
    return pathname.startsWith(lessonBasePath)
  }

  const generatePhaseUrl = (lessonId: string, phase: MCPLessonPhase) => {
    const lessonNumber = lessons.find(l => l.id === lessonId)?.sequence || 1
    const phaseSlug = phase.phaseName.toLowerCase().replace(/\s+/g, '-')
    return `/units/unit${unitNumber.toString().padStart(2, '0')}/lesson-${lessonNumber.toString().padStart(2, '0')}/${phaseSlug}`
  }

  const getPhaseIcon = (phaseName: MCPLessonPhase['phaseName']) => {
    const IconComponent = phaseIcons[phaseName]
    return IconComponent || Circle
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
          {isLoading ? (
            <div className="flex items-center justify-center py-4">
              <Clock className="h-4 w-4 animate-spin mr-2" />
              Loading lessons...
            </div>
          ) : (
            <nav className="space-y-1">
              {lessons.map((lesson) => {
                const lessonProgress = calculateLessonProgress(unitId, lesson.id)
                const phases = lessonPhases[lesson.id] || []
                const isExpanded = expandedLessons.has(lesson.id)
                const isCurrent = isCurrentLesson(lesson.id)
                
                return (
                  <div key={lesson.id} className="space-y-1">
                    {/* Lesson Header */}
                    <div className={`flex items-center rounded-md transition-colors ${
                      isCurrent ? 'bg-primary/10' : 'hover:bg-muted'
                    }`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleLessonExpansion(lesson.id)}
                        className="flex-1 justify-start p-2 h-auto"
                      >
                        <div className="flex items-center w-full">
                          {isExpanded ? (
                            <ChevronDown className="h-4 w-4 mr-2 shrink-0" />
                          ) : (
                            <ChevronRight className="h-4 w-4 mr-2 shrink-0" />
                          )}
                          
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
                        </div>
                      </Button>
                    </div>

                    {/* Lesson Progress Bar */}
                    <div className="ml-6 mr-2">
                      <Progress value={lessonProgress} className="h-1" />
                    </div>

                    {/* Lesson Phases */}
                    {isExpanded && (
                      <div className="ml-6 space-y-1 border-l-2 border-muted pl-3">
                        {phases.map((phase) => {
                          const phaseProgress = getPhaseProgress(unitId, lesson.id, phase.id)
                          const isPhaseCompleted = phaseProgress?.isCompleted || false
                          const isPhaseActive = isCurrentLessonPhase(lesson.id, phase)
                          const PhaseIcon = getPhaseIcon(phase.phaseName)
                          
                          return (
                            <Link
                              key={phase.id}
                              href={generatePhaseUrl(lesson.id, phase)}
                              className={`flex items-center gap-3 p-2 rounded-md text-sm transition-colors ${
                                isPhaseActive
                                  ? 'bg-primary text-primary-foreground'
                                  : isPhaseCompleted
                                  ? 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                  : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                              }`}
                            >
                              <div className="flex items-center gap-2 flex-1">
                                {isPhaseCompleted ? (
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                ) : (
                                  <PhaseIcon className="h-4 w-4" />
                                )}
                                <span className="truncate">{phase.phaseName}</span>
                              </div>
                              
                              <div className={`w-2 h-2 rounded-full ${
                                isPhaseCompleted ? 'bg-green-500' :
                                isPhaseActive ? 'bg-primary' : 'bg-muted-foreground/30'
                              }`} />
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })}
            </nav>
          )}
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <Link
            href={`/units/unit${unitNumber.toString().padStart(2, '0')}`}
            className="block w-full"
          >
            <Button variant="outline" size="sm" className="w-full justify-start">
              <BookOpen className="h-4 w-4 mr-2" />
              Unit Overview
            </Button>
          </Link>
          
          <Link
            href={`/teacher/unit${unitNumber.toString().padStart(2, '0')}`}
            className="block w-full"
          >
            <Button variant="outline" size="sm" className="w-full justify-start">
              <Users className="h-4 w-4 mr-2" />
              Teacher View
            </Button>
          </Link>
        </CardContent>
      </Card>
    </aside>
  )
}