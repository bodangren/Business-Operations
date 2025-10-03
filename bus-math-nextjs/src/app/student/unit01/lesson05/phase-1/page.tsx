import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptComprehensionCheck,
  adaptTurnAndTalk,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit01", 5)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 1)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit01Data.sequence
}

const comprehensionComponent = getPhaseComponent(phaseScenario, "comprehensionCheck")
if (!comprehensionComponent) {
  throw new Error("Unit 01 Lesson 05 Phase 1 scenario is missing a comprehension check component.")
}

const turnAndTalkComponent = getPhaseComponent(phaseScenario, "turnAndTalk")
if (!turnAndTalkComponent) {
  throw new Error("Unit 01 Lesson 05 Phase 1 scenario is missing a turn and talk component.")
}

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const turnAndTalkData = adaptTurnAndTalk(turnAndTalkComponent)

export default function Phase1Page() {
  const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader
        lesson={lessonHeader}
        unit={unitHeader}
        phase={currentPhase}
        phases={phasesForHeader}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              🎯 Phase {phaseScenario.sequence}: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {phaseScenario.summary}
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <ScenarioNarrative blocks={phaseScenario.narrative} />

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800">
                {comprehensionData.title ?? "Diagnostic Check"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ComprehensionCheck
                questions={comprehensionData.questions}
                title={comprehensionData.title}
                description={comprehensionData.description ?? "Test your understanding"}
                showExplanations={comprehensionData.showExplanations ?? true}
                allowRetry={comprehensionData.allowRetry ?? true}
              />
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk: {turnAndTalkData.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-800 space-y-3">
              <p className="font-medium">{turnAndTalkData.description}</p>
              <ul className="list-disc list-inside space-y-1">
                {turnAndTalkData.prompts.map((prompt, idx) => (
                  <li key={idx}>{prompt}</li>
                ))}
              </ul>
              <div className="mt-3 p-3 bg-purple-100 rounded border border-purple-200 text-sm">
                <strong className="mr-1">Duration:</strong> {turnAndTalkData.duration}
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter
        lesson={lessonHeader}
        unit={unitHeader}
        phase={currentPhase}
        phases={phasesForHeader}
      />
    </div>
  )
}
