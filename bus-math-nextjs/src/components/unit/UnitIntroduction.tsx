import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { VideoPlayer } from "@/components/ui/video-player"
import { PlayCircle, Users, Target, Clock, Lightbulb, ArrowRight } from "lucide-react"
import { UnitIntroductionData } from "@/types/sections"

type UnitIntroductionProps = UnitIntroductionData

export function UnitIntroduction({
  unitNumber,
  unitTitle,
  drivingQuestion,
  introVideo,
  entryEvent,
  projectOverview,
  learningObjectives,
  nextSectionHref = "#"
}: UnitIntroductionProps) {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <Badge variant="outline" className="text-sm">
          {unitNumber} Introduction
        </Badge>
        <h1 className="text-4xl font-bold">{unitTitle}</h1>
        <blockquote className="text-xl text-muted-foreground italic border-l-4 border-primary pl-4 max-w-4xl mx-auto">
          "{drivingQuestion}"
        </blockquote>
      </div>

      {/* Introduction Video */}
      {introVideo && <VideoPlayer video={introVideo} />}

      {/* Entry Event Section */}
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-700">
            <PlayCircle className="h-6 w-6" />
            {entryEvent.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg leading-relaxed">{entryEvent.description}</p>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-blue-900">Day 1 Activities:</h4>
            <ul className="space-y-2">
              {entryEvent.activities.map((activity, index) => (
                <li key={index} className="flex items-start gap-2">
                  <ArrowRight className="h-4 w-4 mt-1 text-blue-600 flex-shrink-0" />
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          {entryEvent.resources && entryEvent.resources.length > 0 && (
            <div className="border-t pt-4">
              <h5 className="font-medium text-sm text-muted-foreground mb-2">Resources Provided:</h5>
              <div className="flex flex-wrap gap-2">
                {entryEvent.resources.map((resource, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {resource}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Project Overview */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700">
            <Target className="h-6 w-6" />
            Your Project Challenge
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-1">SCENARIO</h4>
                <p className="text-sm">{projectOverview.scenario}</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-1">TEAM STRUCTURE</h4>
                <p className="text-sm flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  {projectOverview.teamStructure}
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-1">FINAL DELIVERABLE</h4>
                <p className="text-sm font-medium text-green-700">{projectOverview.deliverable}</p>
              </div>
              <div>
                <h4 className="font-semibold text-sm text-muted-foreground mb-1">TIMELINE</h4>
                <p className="text-sm flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {projectOverview.timeline}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Learning Objectives */}
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-700">
            <Lightbulb className="h-6 w-6" />
            What You'll Learn & Build
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-purple-700 mb-3">Content Knowledge</h4>
              <ul className="space-y-2">
                {learningObjectives.content.map((objective, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 mt-1 text-purple-500 flex-shrink-0" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-3">Excel Skills</h4>
              <ul className="space-y-2">
                {learningObjectives.skills.map((skill, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 mt-1 text-purple-500 flex-shrink-0" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-3">Deliverables</h4>
              <ul className="space-y-2">
                {learningObjectives.deliverables.map((deliverable, index) => (
                  <li key={index} className="text-sm flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 mt-1 text-purple-500 flex-shrink-0" />
                    <span>{deliverable}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Steps */}
      <div className="flex justify-center pt-8">
        <Button asChild size="lg" className="flex items-center gap-2">
          <a href={nextSectionHref}>
            Start Learning: Core Concepts
            <ArrowRight className="h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  )
}