import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import BusinessTransactionCategorization from "@/components/drag-drop/BusinessTransactionCategorization"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptComprehensionCheck,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit02Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit02", 2)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 3)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit02Data.sequence
}

const comprehensionComponent = getPhaseComponent(phaseScenario, "comprehensionCheck")
if (!comprehensionComponent) {
  throw new Error("Unit 2 Lesson 2 Phase 3 scenario is missing a comprehension check component.")
}

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)

// Look for BusinessTransactionCategorization component
const businessTransactionComponent = phaseScenario.components.find(
  component => component.type === "dragAndDrop" && component.component === "BusinessTransactionCategorization"
)

export default function Unit02Lesson02Phase3() {
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
              Phase 3: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            {businessTransactionComponent && (
              <Card className="border-green-200 shadow-lg">
                <CardContent className="p-6">
                  <BusinessTransactionCategorization />
                </CardContent>
              </Card>
            )}

            <ComprehensionCheck
              questions={comprehensionData.questions}
              title={comprehensionData.title ?? "Journal Entry Mastery"}
              description={
                comprehensionData.description ??
                "Test your ability to create accurate adjusting entries for common business scenarios."
              }
              showExplanations={comprehensionData.showExplanations ?? true}
              allowRetry={comprehensionData.allowRetry ?? true}
            />
          </div>
        </section>
      </main>

      <PhaseFooter lesson={lessonHeader} unit={unitHeader} phase={currentPhase} phases={phasesForHeader} />
    </div>
  )
}