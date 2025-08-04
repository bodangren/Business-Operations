import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { VideoPlayer } from "@/components/ui/video-player"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageCircle } from "lucide-react"

interface VideoData {
  title: string
  description: string
  youtubeId: string
  duration: string
  transcript: string
}

interface ComprehensionQuestion {
  id: string
  question: string
  answers: string[]
  explanation: string
}

interface UnitConfig {
  colorScheme: {
    primary: string
    secondary: string
    text: string
    cardBg: string
    cardBorder: string
  }
  introText: {
    welcomeText: string
    contextText: string
  }
  reflectionText: string
  transitionText: string
  turnAndTalkPrompt: {
    description: string
    questions: string[]
  }
}

interface Lesson01Phase1Props {
  lesson01Data: any
  unitData: any
  lesson01Phases: any[]
  videoData: VideoData
  comprehensionQuestions: ComprehensionQuestion[]
  unitConfig: UnitConfig
  additionalContent?: React.ReactNode
}

export default function Lesson01Phase1({
  lesson01Data,
  unitData,
  lesson01Phases,
  videoData,
  comprehensionQuestions,
  unitConfig,
  additionalContent
}: Lesson01Phase1Props) {
  const currentPhase = lesson01Phases[0] // Hook phase
  
  return (
    <div className="min-h-screen bg-gray-50">
      <PhaseHeader 
        lesson={lesson01Data}
        unit={unitData}
        phase={currentPhase}
        phases={lesson01Phases}
      />
      
      <div className="max-w-4xl mx-auto space-y-8 pb-8">
        {/* Introductory Text */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            {unitConfig.introText.welcomeText}
          </p>
          
          <p className="text-base leading-relaxed text-gray-700">
            {unitConfig.introText.contextText}
          </p>
        </div>

        {/* Additional Content Section (for unit-specific content) */}
        {additionalContent}

        {/* Video Player */}
        <VideoPlayer video={videoData} />

        {/* Reflection Text */}
        <div className="prose prose-lg max-w-none">
          <p className="text-base leading-relaxed text-gray-700">
            {unitConfig.reflectionText}
          </p>
        </div>

        {/* Comprehension Check */}
        <ComprehensionCheck
          questions={comprehensionQuestions}
          title="Understanding Sarah's Challenge"
          description="Test your understanding of Sarah's business situation and the challenges she encountered."
          showExplanations={true}
        />

        {/* Turn and Talk */}
        <Card className={`border-${unitConfig.colorScheme.cardBorder} bg-${unitConfig.colorScheme.cardBg} dark:bg-${unitConfig.colorScheme.primary}-950/10`}>
          <CardHeader>
            <CardTitle className={`text-${unitConfig.colorScheme.text} dark:text-${unitConfig.colorScheme.secondary} flex items-center gap-2`}>
              <Users className="h-5 w-5" />
              Turn and Talk
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <MessageCircle className={`h-5 w-5 text-${unitConfig.colorScheme.primary}-600 mt-1 flex-shrink-0`} />
              <div>
                <p className={`font-medium text-${unitConfig.colorScheme.primary}-900 dark:text-${unitConfig.colorScheme.secondary} mb-2`}>
                  Discussion Prompt (3 minutes):
                </p>
                <p className={`text-${unitConfig.colorScheme.text} dark:text-${unitConfig.colorScheme.secondary}`}>
                  {unitConfig.turnAndTalkPrompt.description}
                </p>
                <ul className={`list-disc list-inside mt-2 space-y-1 text-${unitConfig.colorScheme.text} dark:text-${unitConfig.colorScheme.secondary}`}>
                  {unitConfig.turnAndTalkPrompt.questions.map((question, index) => (
                    <li key={index}>{question}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transition Text */}
        <div className="prose prose-lg max-w-none">
          <p className="text-base leading-relaxed text-gray-700">
            {unitConfig.transitionText}
          </p>
        </div>
      </div>

      <PhaseFooter 
        lesson={lesson01Data}
        unit={unitData}
        phase={currentPhase}
        phases={lesson01Phases}
      />
    </div>
  )
}