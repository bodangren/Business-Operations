import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"
import SpreadsheetWrapper from "@/components/spreadsheet/SpreadsheetWrapper"
import { trialBalanceTemplate } from "@/components/spreadsheet/SpreadsheetTemplates"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptTurnAndTalk,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit01", 7)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 3)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit01Data.sequence
}

const turnAndTalkComponent = getPhaseComponent(phaseScenario, "turnAndTalk")
if (!turnAndTalkComponent) {
  throw new Error("Unit 01 Lesson 07 Phase 3 scenario is missing a turn and talk component.")
}

const turnAndTalkData = adaptTurnAndTalk(turnAndTalkComponent)
const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

export default function Phase3Page() {
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
              🛠️ Phase {phaseScenario.sequence}: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {phaseScenario.summary}
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <ScenarioNarrative blocks={phaseScenario.narrative} />

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">Trial Balance Scratch Pad</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-green-900">
                Use this interactive template to sketch formulas before committing them in Excel.
              </p>
              <SpreadsheetWrapper initialData={trialBalanceTemplate.data} />
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-900">Interactive Simulation: Error Signals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-orange-900">
              <p>
                Run the Error Checking System to see how professional dashboards highlight bad data.
              </p>
              <ErrorCheckingSystem />
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
              <p className="text-sm italic">Duration: {turnAndTalkData.duration}</p>
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
