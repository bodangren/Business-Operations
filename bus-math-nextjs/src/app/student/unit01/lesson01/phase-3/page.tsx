import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { BusinessTransactionCategorization } from "@/components/drag-drop/BusinessTransactionCategorization"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptComprehensionCheck,
  getPhaseBySequence,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"
import type { PhaseComponentInstance } from "@/types/lesson-scenarios"

const lessonScenario = getLessonScenario("unit01", 1)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 3)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit01Data.sequence
}

const comprehensionComponent = phaseScenario.components.find((component): component is Extract<
  PhaseComponentInstance,
  { type: "comprehensionCheck" }
> => component.type === "comprehensionCheck")

if (!comprehensionComponent) {
  throw new Error("Unit 1 Lesson 1 Phase 3 scenario is missing a comprehension check component.")
}

const transactionCategorizationComponent = phaseScenario.components.find((component): component is Extract<
  PhaseComponentInstance,
  { type: "dragAndDrop" }
> & { component: "BusinessTransactionCategorization" } =>
  component.type === "dragAndDrop" && component.component === "BusinessTransactionCategorization"
)

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)

export default function Phase3Page() {
  const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader lesson={lessonHeader} unit={unitHeader} phase={currentPhase} phases={phasesForHeader} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              Phase 3: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            {transactionCategorizationComponent && (
              <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
                <CardHeader>
                  <CardTitle className="text-blue-800 dark:text-blue-200">
                    Guided Practice: Categorize TechStart Transactions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-blue-900/80">
                    {transactionCategorizationComponent.description ??
                      "Drag each transaction into the correct category and explain why it belongs there."}
                  </p>
                  {/* TODO(#19): Use preset \"techstart-guided\" when the drag-and-drop component supports scenario-driven props. */}
                  <BusinessTransactionCategorization />
                </CardContent>
              </Card>
            )}

            <Card className="border-emerald-200 bg-emerald-50 dark:bg-emerald-950/10">
              <CardHeader>
                <CardTitle className="text-emerald-800 dark:text-emerald-200">
                  {comprehensionData.title ?? "Guided Practice Check"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ComprehensionCheck
                  questions={comprehensionData.questions}
                  title={comprehensionData.title}
                  description={
                    comprehensionData.description ??
                    "Confirm that you can classify each transaction and explain the weaknesses of manual notebooks."
                  }
                  showExplanations={comprehensionData.showExplanations ?? true}
                  allowRetry={comprehensionData.allowRetry ?? true}
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
