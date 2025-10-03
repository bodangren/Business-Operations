import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptComprehensionCheck,
  adaptFillInTheBlank,
  adaptTurnAndTalk,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit02Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit02", 3)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 2)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit02Data.sequence
}

const comprehensionComponent = getPhaseComponent(phaseScenario, "comprehensionCheck")
if (!comprehensionComponent) {
  throw new Error("Unit 2 Lesson 3 Phase 2 scenario is missing a comprehension check component.")
}

const fillInBlankComponent = getPhaseComponent(phaseScenario, "fillInTheBlank")
if (!fillInBlankComponent) {
  throw new Error("Unit 2 Lesson 3 Phase 2 scenario is missing a fill in the blank component.")
}

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const fillInBlankData = adaptFillInTheBlank(fillInBlankComponent)
const turnAndTalkComponent = getPhaseComponent(phaseScenario, "turnAndTalk")
const turnAndTalkData = turnAndTalkComponent ? adaptTurnAndTalk(turnAndTalkComponent) : null

export default function Unit02Lesson03Phase2() {
  const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader
        lesson={lessonHeader}
        unit={unitHeader}
        phase={currentPhase}
        phases={phasesForHeader}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              Phase 2: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            <ComprehensionCheck
              questions={comprehensionData.questions}
              title={comprehensionData.title ?? "Mastering Adjusting Entries"}
              description={
                comprehensionData.description ??
                "Test your understanding of the four key adjusting entry scenarios."
              }
              showExplanations={comprehensionData.showExplanations ?? true}
              allowRetry={comprehensionData.allowRetry ?? true}
            />

            <Card className="border-green-200 shadow-lg">
              <CardContent className="p-6">
                <FillInTheBlank
                  title={fillInBlankData.title}
                  description="Complete these important statements about adjusting entries"
                  sentences={fillInBlankData.sentences}
                  showHints={true}
                  showWordList={false}
                />
              </CardContent>
            </Card>

            {turnAndTalkData && (
              <Card className="border-amber-200 bg-amber-50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-amber-800 flex items-center justify-between">
                    <span>{turnAndTalkData.title}</span>
                    <span className="text-sm font-normal text-amber-600">{turnAndTalkData.duration}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-amber-700/80">{turnAndTalkData.description}</p>
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