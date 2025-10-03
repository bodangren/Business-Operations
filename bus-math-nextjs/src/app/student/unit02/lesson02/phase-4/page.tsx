import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import FinancialStatementMatching from "@/components/drag-drop-exercises/FinancialStatementMatching"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptComprehensionCheck,
  adaptFillInTheBlank,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit02Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit02", 2)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 4)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit02Data.sequence
}

const comprehensionComponent = getPhaseComponent(phaseScenario, "comprehensionCheck")
if (!comprehensionComponent) {
  throw new Error("Unit 2 Lesson 2 Phase 4 scenario is missing a comprehension check component.")
}

const fillInBlankComponent = getPhaseComponent(phaseScenario, "fillInTheBlank")
if (!fillInBlankComponent) {
  throw new Error("Unit 2 Lesson 2 Phase 4 scenario is missing a fill in the blank component.")
}

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const fillInBlankData = adaptFillInTheBlank(fillInBlankComponent)

export default function Unit02Lesson02Phase4() {
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
              Phase 4: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            <Card className="border-green-200 shadow-lg">
              <CardContent className="p-6">
                <FinancialStatementMatching />
              </CardContent>
            </Card>

            <ComprehensionCheck
              questions={comprehensionData.questions}
              title={comprehensionData.title ?? "Gallery Walk Practice"}
              description={
                comprehensionData.description ??
                "Test your understanding of peer review and feedback practices."
              }
              showExplanations={comprehensionData.showExplanations ?? true}
              allowRetry={comprehensionData.allowRetry ?? true}
            />

            <Card className="border-green-200 shadow-lg">
              <CardContent className="p-6">
                <FillInTheBlank
                  title={fillInBlankData.title}
                  description="Complete these important statements about providing effective feedback"
                  sentences={fillInBlankData.sentences}
                  showHints={true}
                  showWordList={false}
                />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <PhaseFooter lesson={lessonHeader} unit={unitHeader} phase={currentPhase} phases={phasesForHeader} />
    </div>
  )
}