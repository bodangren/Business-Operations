'use client'

import { StudentLessonPhase } from '@/types/student-curriculum'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { VideoPlayer } from '@/components/ui/video-player'
import { DynamicComponentLoader } from '@/components/dynamic-component-loader'
import { Play, Users, MessageCircle, FileText, BarChart3, Video } from 'lucide-react'
import { useState } from 'react'
import introVideos from '@/data/teacher/intro-videos.json'

interface LessonPhaseContentProps {
  phase: StudentLessonPhase
  unitNumber?: number // Optional unit number to match with intro videos
}

export function LessonPhaseContent({ phase, unitNumber }: LessonPhaseContentProps) {
  const [currentDiscussionPrompt, setCurrentDiscussionPrompt] = useState(0)

  const renderVideoContent = () => {
    // Only render video content if this phase is marked as video type
    if (phase.content.type !== 'video') return null

    // Find matching intro video by unit number
    const introVideo = unitNumber ? introVideos.find(video => video.unit === unitNumber) : null

    // If no intro video found, don't render anything
    if (!introVideo) return null

    // Use data entirely from intro-videos.json
    const videoContent = {
      youtubeId: introVideo.youtube,
      title: introVideo.title,
      description: introVideo.description,
      duration: '3 minutes', // Could be extracted from intro video if needed
      transcript: introVideo.transcript
    }

    return (
      <div className="mb-6">
        <VideoPlayer video={videoContent} />
      </div>
    )
  }

  const renderInteractiveComponents = () => {
    if (!phase.content.interactiveComponents || phase.content.interactiveComponents.length === 0) return null

    return (
      <div className="space-y-6 mb-6">
        {phase.content.interactiveComponents.map((component, index) => (
          <div key={index}>
            <div className="mb-2">
              <h3 className="text-lg font-semibold flex items-center gap-2">
                <Play className="w-5 h-5 text-blue-600" />
                Interactive Activity: {component.componentName}
                {component.required && (
                  <Badge variant="destructive" className="ml-2">Required</Badge>
                )}
              </h3>
            </div>
            <DynamicComponentLoader
              componentName={component.componentName}
              props={component.props}
              required={component.required}
            />
          </div>
        ))}
      </div>
    )
  }

  const renderDiscussionPrompts = () => {
    if (!phase.content.discussionPrompts || phase.content.discussionPrompts.length === 0) return null

    const currentPrompt = phase.content.discussionPrompts[currentDiscussionPrompt]

    const getDiscussionIcon = (type: string) => {
      switch (type) {
        case 'individual':
          return <FileText className="w-5 h-5 text-green-600" />
        case 'pair':
          return <Users className="w-5 h-5 text-blue-600" />
        case 'group':
          return <Users className="w-5 h-5 text-purple-600" />
        case 'class':
          return <MessageCircle className="w-5 h-5 text-orange-600" />
        default:
          return <MessageCircle className="w-5 h-5 text-gray-600" />
      }
    }

    const getDiscussionColor = (type: string) => {
      switch (type) {
        case 'individual':
          return 'border-green-200 bg-green-50'
        case 'pair':
          return 'border-blue-200 bg-blue-50'
        case 'group':
          return 'border-purple-200 bg-purple-50'
        case 'class':
          return 'border-orange-200 bg-orange-50'
        default:
          return 'border-gray-200 bg-gray-50'
      }
    }

    return (
      <Card className={`mb-6 ${getDiscussionColor(currentPrompt.type)}`}>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {getDiscussionIcon(currentPrompt.type)}
            Discussion Activity
            <Badge variant="outline" className="ml-2">
              {currentPrompt.type.charAt(0).toUpperCase() + currentPrompt.type.slice(1)} Work
            </Badge>
          </CardTitle>
          {currentPrompt.duration && (
            <CardDescription>
              Suggested time: {currentPrompt.duration} minutes
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Discussion Question:</h4>
            <p className="text-lg italic border-l-4 border-current pl-4 mb-4">
              "{currentPrompt.question}"
            </p>
          </div>

          {phase.content.discussionPrompts.length > 1 && (
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-gray-600">
                Question {currentDiscussionPrompt + 1} of {phase.content.discussionPrompts.length}
              </span>
              <div className="flex gap-1">
                {currentDiscussionPrompt > 0 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentDiscussionPrompt(currentDiscussionPrompt - 1)}
                  >
                    Previous
                  </Button>
                )}
                {currentDiscussionPrompt < phase.content.discussionPrompts.length - 1 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setCurrentDiscussionPrompt(currentDiscussionPrompt + 1)}
                  >
                    Next
                  </Button>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    )
  }

  const renderPracticeActivities = () => {
    if (!phase.content.practiceActivities || phase.content.practiceActivities.length === 0) return null

    return (
      <div className="space-y-6 mb-6">
        {phase.content.practiceActivities.map((activity, index) => (
          <Card key={index} className="border-purple-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="w-5 h-5 text-purple-600" />
                {activity.title}
              </CardTitle>
              {activity.duration && (
                <CardDescription>Duration: {activity.duration} minutes</CardDescription>
              )}
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{activity.description}</p>
              
              {activity.instructions && activity.instructions.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Instructions:</h4>
                  <ol className="space-y-1">
                    {activity.instructions.map((instruction, instrIndex) => (
                      <li key={instrIndex} className="flex items-start gap-2">
                        <span className="w-6 h-6 bg-purple-100 text-purple-800 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                          {instrIndex + 1}
                        </span>
                        <span>{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {activity.materials && activity.materials.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Materials:</h4>
                  <ul className="space-y-1">
                    {activity.materials.map((material, matIndex) => (
                      <li key={matIndex} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                        <span>{material}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  const renderAssessmentItems = () => {
    if (!phase.content.assessmentItems || phase.content.assessmentItems.length === 0) return null

    return (
      <div className="space-y-6 mb-6">
        {phase.content.assessmentItems.map((assessment, index) => (
          <Card key={index} className="border-yellow-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-yellow-600" />
                {assessment.title}
                <Badge variant={assessment.type === 'summative' ? 'destructive' : 'secondary'}>
                  {assessment.type}
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">{assessment.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Assessment Criteria:</h4>
                <ul className="space-y-1">
                  {assessment.criteria.map((criterion, critIndex) => (
                    <li key={critIndex} className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{criterion}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {assessment.rubric && assessment.rubric.length > 0 && (
                <div>
                  <h4 className="font-semibold mb-2">Rubric:</h4>
                  <ul className="space-y-1">
                    {assessment.rubric.map((rubricItem, rubricIndex) => (
                      <li key={rubricIndex} className="text-sm text-gray-600">
                        {rubricItem}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div>
      {renderVideoContent()}
      {renderInteractiveComponents()}
      {renderDiscussionPrompts()}
      {renderPracticeActivities()}
      {renderAssessmentItems()}
      
      {/* Default content for phases without specific content */}
      {!phase.content.video && 
       !phase.content.interactiveComponents?.length && 
       !phase.content.discussionPrompts?.length && 
       !phase.content.practiceActivities?.length && 
       !phase.content.assessmentItems?.length && (
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Phase Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-gray-600">
              <div className="text-6xl mb-4">{phase.phaseName === 'Hook' ? '🎯' : '📖'}</div>
              <p className="text-lg mb-2">Content for this phase is being developed</p>
              <p className="text-sm">Check back soon for interactive activities and materials</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}