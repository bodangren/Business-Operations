import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { BookOpen, Clock, Users, Target, CheckCircle, ArrowRight } from 'lucide-react'
import type { UnitData } from '@/types/unit'
import type { UnitLessonPlan } from '@/types/lesson-plan'

// Explicit imports ensure inclusion in static export
import { unit01Data } from '@/data/unit01'
import { unit02Data } from '@/data/unit02'
import { unit03Data } from '@/data/unit03'
import { unit04Data } from '@/data/unit04'
import { unit05Data } from '@/data/unit05'
import { unit06Data } from '@/data/unit06'
import { unit07Data } from '@/data/unit07'
import { unit08Data } from '@/data/unit08'

import { unit01LessonPlan } from '@/data/teacher/unit01-lesson-plan'
import { unit02LessonPlan } from '@/data/teacher/unit02-lesson-plan'
import { unit03LessonPlan } from '@/data/teacher/unit03-lesson-plan'
import { unit04LessonPlan } from '@/data/teacher/unit04-lesson-plan'
import { unit05LessonPlan } from '@/data/teacher/unit05-lesson-plan'
import { unit06LessonPlan } from '@/data/teacher/unit06-lesson-plan'
import { unit07LessonPlan } from '@/data/teacher/unit07-lesson-plan'
import { unit08LessonPlan } from '@/data/teacher/unit08-lesson-plan'

interface TeacherUnitPageProps {
  params: Promise<{ unit: string }>
}

const VALID_UNITS = [
  'unit01', 'unit02', 'unit03', 'unit04',
  'unit05', 'unit06', 'unit07', 'unit08',
] as const

function getUnitModules(unit: string): { unitData: UnitData; plan: UnitLessonPlan } | null {
  switch (unit) {
    case 'unit01': return { unitData: unit01Data, plan: unit01LessonPlan }
    case 'unit02': return { unitData: unit02Data, plan: unit02LessonPlan }
    case 'unit03': return { unitData: unit03Data, plan: unit03LessonPlan }
    case 'unit04': return { unitData: unit04Data, plan: unit04LessonPlan }
    case 'unit05': return { unitData: unit05Data, plan: unit05LessonPlan }
    case 'unit06': return { unitData: unit06Data, plan: unit06LessonPlan }
    case 'unit07': return { unitData: unit07Data, plan: unit07LessonPlan }
    case 'unit08': return { unitData: unit08Data, plan: unit08LessonPlan }
    default: return null
  }
}

export default async function TeacherUnitPage({ params }: TeacherUnitPageProps) {
  const { unit } = await params
  if (!VALID_UNITS.includes(unit as any)) notFound()

  const mods = getUnitModules(unit)
  if (!mods) notFound()

  const { unitData, plan } = mods
  const lessons = plan.learningPlan.dailyLessons

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-8 px-4 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold">{unitData.title}</h1>
            <p className="text-muted-foreground max-w-3xl">{unitData.description}</p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Duration: {unitData.duration}</Badge>
              <Badge variant="outline">Difficulty: {unitData.difficulty}</Badge>
            </div>
          </div>
          <div className="shrink-0">
            <Link href={`/student/${unit}`}>
              <Button>View Student Experience</Button>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Driving Question */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" /> Driving Question
                </CardTitle>
                <CardDescription>{unitData.drivingQuestion.context}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-medium">{unitData.drivingQuestion.question}</p>
              </CardContent>
            </Card>

            {/* Performance Task */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" /> Performance Task
                </CardTitle>
                {unitData.assessment.performanceTask.context && (
                  <CardDescription>{unitData.assessment.performanceTask.context}</CardDescription>
                )}
              </CardHeader>
              <CardContent className="space-y-3">
                <h4 className="font-semibold">{unitData.assessment.performanceTask.title}</h4>
                <p className="text-sm text-muted-foreground">{unitData.assessment.performanceTask.description}</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {unitData.assessment.performanceTask.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Milestones */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" /> Assessment Milestones
                </CardTitle>
                <CardDescription>Aligned to implemented student lessons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {unitData.assessment.milestones.map((m) => (
                  <div key={m.id} className="p-3 border rounded-md">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Day {m.day}: {m.title}</h4>
                      <Badge variant="outline">Milestone</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{m.description}</p>
                    <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                      {m.criteria.map((c, i) => (<li key={i}>{c}</li>))}
                    </ul>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Lessons list from teacher plan */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" /> Lessons ({lessons.length})
                </CardTitle>
                <CardDescription>Click a day to open the detailed lesson plan</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                {lessons.map((lesson) => (
                  <Link key={lesson.day} href={`/teacher/${unit}/lesson-${String(lesson.day).padStart(2, '0')}`}>
                    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors group">
                      <div className="flex items-center gap-3">
                        <Badge variant="outline">Day {lesson.day}</Badge>
                        <div>
                          <div className="font-medium group-hover:text-primary transition-colors">{lesson.title}</div>
                          <div className="text-xs text-muted-foreground">{lesson.focus}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" /> {lesson.duration}
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar (simplified, no Other Units) */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href={`/student/${unit}`}>
                  <Button className="w-full" variant="default">View Student Experience</Button>
                </Link>
                <Link href={`/teacher/${unit}/lesson-01`}>
                  <Button className="w-full" variant="outline">Start with Lesson 1</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Prerequisite Resources</CardTitle>
                <CardDescription>Files referenced in student lessons</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                {unitData.prerequisites.resources.map((r, i) => (
                  <div key={i} className="text-sm">
                    {r.url ? (
                      <Link href={r.url} className="underline">{r.title}</Link>
                    ) : (
                      <span>{r.title}</span>
                    )}
                    <Badge variant="secondary" className="ml-2 text-xxs uppercase">{r.type}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  return VALID_UNITS.map((unit) => ({ unit }))
}

export async function generateMetadata({ params }: TeacherUnitPageProps) {
  const { unit } = await params
  const mods = getUnitModules(unit)
  const title = mods?.unitData?.title || unit.toUpperCase()
  return {
    title: `Teacher: ${title} | Math for Business Operations`,
    description: `Teacher resources and lesson plans for ${title} - Math for Business Operations curriculum`,
  }
}

