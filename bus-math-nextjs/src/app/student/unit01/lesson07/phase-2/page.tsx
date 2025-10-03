import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptFillInTheBlank,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit01", 7)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 2)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit01Data.sequence
}

const fillInBlankComponent = getPhaseComponent(phaseScenario, "fillInTheBlank")
if (!fillInBlankComponent) {
  throw new Error("Unit 01 Lesson 07 Phase 2 scenario is missing a fill in the blank component.")
}

const fillInBlankData = adaptFillInTheBlank(fillInBlankComponent)
const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader
        lesson={lessonHeader}
        unit={unitHeader}
        phase={currentPhase}
        phases={phasesForHeader}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              📚 Phase {phaseScenario.sequence}: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {phaseScenario.summary}
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <ScenarioNarrative blocks={phaseScenario.narrative} />

          <Card className="border-purple-200 bg-white">
            <CardHeader>
              <CardTitle className="text-purple-900">{fillInBlankData.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <FillInTheBlank
                sentences={fillInBlankData.sentences as any}
                title={fillInBlankData.title}
                description="Fill in the blanks to reinforce exact lookups, structured references, and reconciliation concepts."
                showWordList={true}
                randomizeWordOrder={true}
                showHints={true}
              />
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
