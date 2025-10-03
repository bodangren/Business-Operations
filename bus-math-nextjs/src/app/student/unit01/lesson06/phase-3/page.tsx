import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import { ShieldAlert, Users } from "lucide-react"
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

const lessonScenario = getLessonScenario("unit01", 6)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 3)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit01Data.sequence
}

const comprehensionComponent = getPhaseComponent(phaseScenario, "comprehensionCheck")
if (!comprehensionComponent) {
  throw new Error("Unit 01 Lesson 06 Phase 3 scenario is missing a comprehension check component.")
}

const turnAndTalkComponent = getPhaseComponent(phaseScenario, "turnAndTalk")
if (!turnAndTalkComponent) {
  throw new Error("Unit 01 Lesson 06 Phase 3 scenario is missing a turn and talk component.")
}

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const turnAndTalkData = adaptTurnAndTalk(turnAndTalkComponent)

export default function Phase3Page() {
  const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader
        lesson={lessonHeader}
        unit={unitHeader}
        phase={currentPhase}
        phases={phasesForHeader}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🔧 Phase {phaseScenario.sequence}: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {phaseScenario.summary}
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <ScenarioNarrative blocks={phaseScenario.narrative} />

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <ShieldAlert className="h-5 w-5" />
                Practice: Trigger the Error Checking System
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-amber-900 text-base leading-relaxed">
                Use the simulation to see how professional models call out risky inputs. Notice how each alert ties back to the checklist you will use in Phase 4.
              </p>
              <ErrorCheckingSystem />
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk: {turnAndTalkData.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-800 space-y-3">
              <p className="font-medium">{turnAndTalkData.description}</p>
              <ul className="list-disc list-inside space-y-1">
                {turnAndTalkData.prompts.map((prompt, idx) => (
                  <li key={idx}>{prompt}</li>
                ))}
              </ul>
              <div className="mt-3 p-3 bg-green-100 rounded border border-green-200 text-sm">
                <strong className="mr-1">Duration:</strong> {turnAndTalkData.duration}
              </div>
            </CardContent>
          </Card>

          <ComprehensionCheck
            questions={comprehensionData.questions}
            title={comprehensionData.title}
            description={comprehensionData.description ?? "Test your understanding"}
            showExplanations={comprehensionData.showExplanations ?? true}
            allowRetry={comprehensionData.allowRetry ?? true}
          />
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
