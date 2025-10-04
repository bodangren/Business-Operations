import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { DragAndDrop } from "@/components/exercises/DragAndDrop"
import { FinancialStatementMatching } from "@/components/drag-drop-exercises/FinancialStatementMatching"
import {
  adaptComprehensionCheck,
  adaptDragAndDrop,
  adaptFillInTheBlank,
  getPhaseBySequence
} from "@/adapters/scenario-to-props"
import type { PhaseComponentInstance } from "@/types/lesson-scenarios"
import { lessonScenario, lessonHeader, phasesForHeader, unitHeader } from "../scenario"

const phaseScenario = getPhaseBySequence(lessonScenario, 4)

const comprehensionComponent = phaseScenario.components.find(
  (component): component is Extract<PhaseComponentInstance, { type: "comprehensionCheck" }> =>
    component.type === "comprehensionCheck"
)
if (!comprehensionComponent) {
  throw new Error("Unit 02 Lesson 02 Phase 4 scenario is missing the independent comprehension check.")
}

const dragAndDropComponent = phaseScenario.components.find((component): component is Extract<
  PhaseComponentInstance,
  { type: "dragAndDrop" }
> & { component: "DragAndDrop" } => component.type === "dragAndDrop" && component.component === "DragAndDrop")

const financialStatementComponent = phaseScenario.components.find((component): component is Extract<
  PhaseComponentInstance,
  { type: "dragAndDrop" }
> & { component: "FinancialStatementMatching" } =>
  component.type === "dragAndDrop" && component.component === "FinancialStatementMatching")

if (!dragAndDropComponent && !financialStatementComponent) {
  throw new Error("Unit 02 Lesson 02 Phase 4 scenario is missing required independent practice interactive components.")
}

const fillInBlankComponent = phaseScenario.components.find(
  (component): component is Extract<PhaseComponentInstance, { type: "fillInTheBlank" }> =>
    component.type === "fillInTheBlank"
)
if (!fillInBlankComponent) {
  throw new Error("Unit 02 Lesson 02 Phase 4 scenario is missing the vocabulary rehearsal activity.")
}

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const dragAndDropData = dragAndDropComponent ? adaptDragAndDrop(dragAndDropComponent) : null
const fillInBlankData = adaptFillInTheBlank(fillInBlankComponent)

export default function Phase4Page() {
  const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-violet-50">
      <PhaseHeader lesson={lessonHeader} unit={unitHeader} phase={currentPhase} phases={phasesForHeader} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-violet-100 text-violet-800 text-lg px-4 py-2">
              Phase {phaseScenario.sequence}: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            {dragAndDropData && (
              <Card className="border-violet-200 bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-violet-800">{dragAndDropData.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <DragAndDrop
                    title={dragAndDropData.title}
                    description={dragAndDropData.description}
                    leftColumnTitle={dragAndDropData.leftColumnTitle}
                    rightColumnTitle={dragAndDropData.rightColumnTitle}
                    items={dragAndDropData.items}
                    showHints={dragAndDropData.showHints}
                    shuffleItems={dragAndDropData.shuffleItems}
                  />
                </CardContent>
              </Card>
            )}

            {financialStatementComponent && (
              <div className="space-y-4">
                {financialStatementComponent.description && (
                  <Card className="border-violet-200 bg-violet-50 dark:bg-violet-950/10">
                    <CardContent>
                      <p className="text-violet-900/80">{financialStatementComponent.description}</p>
                    </CardContent>
                  </Card>
                )}
                <FinancialStatementMatching />
              </div>
            )}

            <Card className="border-indigo-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-indigo-800">
                  {comprehensionData.title ?? "Gallery Walk Readiness Check"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ComprehensionCheck
                  questions={comprehensionData.questions}
                  title={comprehensionData.title}
                  description={
                    comprehensionData.description ??
                      "Verify that you can justify each adjusting entry before building your gallery walk plan."
                  }
                  showExplanations={comprehensionData.showExplanations ?? true}
                  allowRetry={comprehensionData.allowRetry ?? true}
                />
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
              <CardHeader>
                <CardTitle className="text-purple-800 dark:text-purple-200">{fillInBlankData.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <FillInTheBlank
                  sentences={fillInBlankData.sentences}
                  title={fillInBlankData.title}
                  description="Lock in the vocabulary that investors expect when you explain adjusting entries."
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
