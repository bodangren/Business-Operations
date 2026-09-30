"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowRight, PlayCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { readContinueRecord, resolveContinueLesson } from "@/lib/student-navigation"
import type { ContinueResolution, CurrentLessonConfig } from "@/types/student-navigation"

interface CurrentLessonCardProps {
  config: CurrentLessonConfig
}

/**
 * Student hub card for the current lesson. It prefers a recent local Continue
 * record and falls back to the deployment-wide current lesson.
 */
export default function CurrentLessonCard({ config }: CurrentLessonCardProps) {
  const [resolution, setResolution] = useState<ContinueResolution>(() =>
    resolveContinueLesson(config, null),
  )

  useEffect(() => {
    setResolution(resolveContinueLesson(config, readContinueRecord()))
  }, [config])

  const lesson = resolution.lesson
  if (!lesson) return null

  const isContinue = resolution.source === "local"

  return (
    <Card className="border-primary/30 bg-primary/5">
      <CardHeader className="pb-2">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            {isContinue ? "Continue" : "Today"}
          </Badge>
          <span className="text-xs text-muted-foreground">{lesson.unitLabel}</span>
        </div>
        <CardTitle className="text-xl">
          Lesson {lesson.lessonNumber}: {lesson.lessonTitle}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {isContinue
            ? "Pick up where you left off."
            : "Open the current lesson to get started."}
        </p>
        <Button asChild className="w-full sm:w-auto">
          <Link href={lesson.href}>
            <PlayCircle className="h-4 w-4" />
            <span className="ml-2">{isContinue ? "Continue lesson" : "Open lesson"}</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
