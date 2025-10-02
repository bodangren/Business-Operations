import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { VideoPlayer } from "@/components/ui/video-player"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptComprehensionCheck,
  adaptTurnAndTalk,
  adaptVideoScenario,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit01", 1)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 1)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit01Data.sequence
}

const videoComponent = getPhaseComponent(phaseScenario, "video")
if (!videoComponent) {
  throw new Error("Unit 1 Lesson 1 Phase 1 scenario is missing a video component.")
}

const comprehensionComponent = getPhaseComponent(phaseScenario, "comprehensionCheck")
if (!comprehensionComponent) {
  throw new Error("Unit 1 Lesson 1 Phase 1 scenario is missing a comprehension check component.")
}

const videoData = adaptVideoScenario(videoComponent.data)
const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const turnAndTalkComponent = getPhaseComponent(phaseScenario, "turnAndTalk")
const turnAndTalkData = turnAndTalkComponent ? adaptTurnAndTalk(turnAndTalkComponent) : null

export default function Phase1Page() {
  const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-rose-50">
      <PhaseHeader
        lesson={lessonHeader}
        unit={unitHeader}
        phase={currentPhase}
        phases={phasesForHeader}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-rose-100 text-rose-800 text-lg px-4 py-2">
              Phase 1: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            <VideoPlayer video={videoData} />

            <ComprehensionCheck
              questions={comprehensionData.questions}
              title={comprehensionData.title ?? "Understanding Sarah's Challenge"}
              description={
                comprehensionData.description ??
                "Test your understanding of Sarah's launch story and the pressure to keep clean books from day one."
              }
              showExplanations={comprehensionData.showExplanations ?? true}
              allowRetry={comprehensionData.allowRetry ?? true}
            />

            {turnAndTalkData && (
              <Card className="border-indigo-200 bg-indigo-50 dark:bg-indigo-950/10">
                <CardHeader>
                  <CardTitle className="text-indigo-800 dark:text-indigo-200 flex items-center justify-between">
                    <span>{turnAndTalkData.title}</span>
                    <span className="text-sm font-normal text-indigo-600">{turnAndTalkData.duration}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-indigo-800/80">{turnAndTalkData.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-indigo-900">
                    {turnAndTalkData.prompts.map((prompt, index) => (
                      <li key={index}>{prompt}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
            {!turnAndTalkData && (
              <Card className="border-indigo-200 bg-indigo-50 dark:bg-indigo-950/10">
                <CardHeader>
                  <CardTitle className="text-indigo-800 dark:text-indigo-200">
                    Think-Pair-Share Prompt
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {/* TODO(#15): Replace with scenario-provided turn-and-talk configuration once available. */}
                  <p className="text-indigo-800/80">
                    Discuss the question callout in the narrative with a partner. Capture how Sarah's experience compares to
                    your own encounters with chaotic organization and what systems might have prevented it.
                  </p>
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
