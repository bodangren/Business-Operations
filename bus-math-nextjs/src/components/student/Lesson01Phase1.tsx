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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <PhaseHeader 
        lesson={lesson01Data}
        unit={unitData}
        phase={currentPhase}
        phases={lesson01Phases}
      />
      
      <div className="max-w-4xl mx-auto space-y-8 pb-8 px-4">
        {/* Introductory Text */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 p-6 shadow-sm">
            <p className="text-lg leading-relaxed text-foreground">
              {unitConfig.introText.welcomeText}
            </p>
            
            <p className="text-base leading-relaxed text-muted-foreground mt-4">
              {unitConfig.introText.contextText}
            </p>
          </div>
        </div>

        {/* Additional Content Section (for unit-specific content) */}
        {additionalContent}

        {/* Video Player */}
        <VideoPlayer video={videoData} />

        {/* Reflection Text */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border border-blue-200/50 dark:border-blue-800/30 p-6">
            <p className="text-base leading-relaxed text-foreground">
              {unitConfig.reflectionText}
            </p>
          </div>
        </div>

        {/* Comprehension Check */}
        <ComprehensionCheck
          questions={comprehensionQuestions}
          title="Understanding Sarah's Challenge"
          description="Test your understanding of Sarah's business situation and the challenges she encountered."
          showExplanations={true}
        />

        {/* Turn and Talk */}
        <Card className="card-ledger border-primary/20">
          <CardHeader className="excel-header">
            <CardTitle className="text-primary flex items-center gap-2">
              <Users className="h-5 w-5" />
              Turn and Talk
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <MessageCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground mb-2">
                  Discussion Prompt (3 minutes):
                </p>
                <p className="text-muted-foreground">
                  {unitConfig.turnAndTalkPrompt.description}
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
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
          <div className="bg-accent/10 rounded-lg border border-accent/20 p-6">
            <p className="text-base leading-relaxed text-foreground">
              {unitConfig.transitionText}
            </p>
          </div>
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