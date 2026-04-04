import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { VideoPlayer } from "@/components/ui/video-player"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"

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
  lesson01Data: { id: string; title: string; sequence: number; unitId: string; [key: string]: unknown }
  unitData: { id: string; title: string; sequence: number; [key: string]: unknown }
  lesson01Phases: Array<{ id: string; phaseName: "Hook" | "Introduction" | "Guided Practice" | "Independent Practice" | "Assessment" | "Closing"; sequence: number; description?: string }>
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
        {/* Additional Content - For units with extra intro context */}
        {additionalContent}

        {/* Video Player - FIRST: Start with Sarah's interview video per launch-lesson skill */}
        <VideoPlayer video={videoData} />

        {/* Short Processing After Video */}
        <ComprehensionCheck
          questions={comprehensionQuestions}
          title="Understanding Sarah's Challenge"
          description="Test your understanding of Sarah's business situation and the challenges she encountered."
          showExplanations={true}
        />

        {/* Turn and Talk - Short discussion after initial processing */}
        <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
          <CardHeader>
            <CardTitle className="text-blue-800 dark:text-blue-200 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Turn and Talk (3 minutes)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="font-medium text-blue-900 mb-2">
              {unitConfig.turnAndTalkPrompt.description}
            </p>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              {unitConfig.turnAndTalkPrompt.questions.map((question, index) => (
                <li key={index}>{question}</li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Investor-Trust Problem - The Core Tension */}
        <Card className="border-red-200 bg-red-50 dark:bg-red-950/10">
          <CardHeader>
            <CardTitle className="text-red-800 dark:text-red-200">
              The Investor-Trust Problem
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed">
              {unitConfig.reflectionText}
            </p>
            <div className="bg-white p-4 rounded-lg border-2 border-red-300">
              <p className="font-semibold text-red-800 mb-2">Our Unit Challenge:</p>
              <p className="text-red-700">
                How can Sarah design a <strong>self-auditing ledger</strong> that would convince a potential 
                angel investor that she keeps "clean books" from day one? That's exactly what we'll learn 
                to build over the next several lessons.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Transition Text */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border border-blue-200/50 dark:border-blue-800/30 p-6">
            <p className="text-base leading-relaxed">
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