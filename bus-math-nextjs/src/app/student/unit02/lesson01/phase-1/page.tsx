import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { VideoPlayer } from "@/components/ui/video-player"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import {
  adaptComprehensionCheck,
  adaptTurnAndTalk,
  adaptVideoScenario,
  getPhaseBySequence,
  getPhaseComponent
} from "@/adapters/scenario-to-props"
import { lessonScenario, lessonHeader, phasesForHeader, unitHeader } from "../scenario"

const phaseScenario = getPhaseBySequence(lessonScenario, 1)

const videoComponent = getPhaseComponent(phaseScenario, "video")
if (!videoComponent) {
  throw new Error("Unit 02 Lesson 01 Phase 1 scenario is missing a video component.")
}

const comprehensionComponent = getPhaseComponent(phaseScenario, "comprehensionCheck")
if (!comprehensionComponent) {
  throw new Error("Unit 02 Lesson 01 Phase 1 scenario is missing a comprehension check component.")
}

const videoData = adaptVideoScenario(videoComponent.data)
const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const turnAndTalkComponent = getPhaseComponent(phaseScenario, "turnAndTalk")
const turnAndTalkData = turnAndTalkComponent ? adaptTurnAndTalk(turnAndTalkComponent) : null

export default function Phase1Page() {
  const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader lesson={lessonHeader} unit={unitHeader} phase={currentPhase} phases={phasesForHeader} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              Phase {phaseScenario.sequence}: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            <VideoPlayer video={videoData} />

            <ComprehensionCheck
              questions={comprehensionData.questions}
              title={
                comprehensionData.title ??
                "Understanding Sarah's Month-End Automation Challenge"
              }
              description={
                comprehensionData.description ??
                  "Check how well you grasp Sarah's weekend nightmare and the promise of automation."
              }
              showExplanations={comprehensionData.showExplanations ?? true}
              allowRetry={comprehensionData.allowRetry ?? true}
            />

            {turnAndTalkData && (
              <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/10">
                <CardHeader>
                  <CardTitle className="text-amber-800 dark:text-amber-200 flex items-center justify-between">
                    <span>{turnAndTalkData.title}</span>
                    <span className="text-sm font-normal text-amber-600">{turnAndTalkData.duration}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-amber-800/80">{turnAndTalkData.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-amber-900">
                    {turnAndTalkData.prompts.map((prompt, index) => (
                      <li key={index}>{prompt}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>

      <PhaseFooter lesson={lessonHeader} unit={unitHeader} phase={currentPhase} phases={phasesForHeader} />
    </div>
  )
}
