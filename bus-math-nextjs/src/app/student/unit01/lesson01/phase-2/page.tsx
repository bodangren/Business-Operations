import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { BusinessTransactionCategorization } from "@/components/drag-drop/BusinessTransactionCategorization"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptComprehensionCheck,
  adaptFillInTheBlank,
  getPhaseBySequence,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"
import type { PhaseComponentInstance } from "@/types/lesson-scenarios"

const lessonScenario = getLessonScenario("unit01", 1)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 2)
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
  throw new Error("Unit 1 Lesson 1 Phase 2 scenario is missing a comprehension check component.")
}

const fillInBlankComponent = phaseScenario.components.find((component): component is Extract<
  PhaseComponentInstance,
  { type: "fillInTheBlank" }
> => component.type === "fillInTheBlank")

if (!fillInBlankComponent) {
  throw new Error("Unit 1 Lesson 1 Phase 2 scenario is missing fill-in-the-blank data.")
}

const transactionCategorizationComponent = phaseScenario.components.find((component): component is Extract<
  PhaseComponentInstance,
  { type: "dragAndDrop" }
> & { component: "BusinessTransactionCategorization" } =>
  component.type === "dragAndDrop" && component.component === "BusinessTransactionCategorization"
)

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const fillInBlankData = adaptFillInTheBlank(fillInBlankComponent)

export default function Phase2Page() {
  const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PhaseHeader lesson={lessonHeader} unit={unitHeader} phase={currentPhase} phases={phasesForHeader} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
              Phase 2: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            {transactionCategorizationComponent && (
              <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
                <CardHeader>
                  <CardTitle className="text-green-800 dark:text-green-200">
                    Interactive Exercise: Organize TechStart Transactions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-green-900/80">
                    {transactionCategorizationComponent.description ??
                      "Sort Sarah's transactions to see how professional systems group revenue, expenses, assets, and liabilities."}
                  </p>
                  {/* TODO(#19): Pass scenario preset \"techstart-intro\" once BusinessTransactionCategorization accepts props. */}
                  <BusinessTransactionCategorization />
                </CardContent>
              </Card>
            )}

            <Card className="border-indigo-200 bg-indigo-50 dark:bg-indigo-950/10">
              <CardHeader>
                <CardTitle className="text-indigo-800 dark:text-indigo-200">
                  {comprehensionData.title ?? "TechStart Solutions Business Model"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ComprehensionCheck
                  questions={comprehensionData.questions}
                  title={comprehensionData.title}
                  description={
                    comprehensionData.description ??
                    "Check your understanding of Sarah's services, operating risks, and the need for clean books."
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
                  description="Fill in the blanks to reinforce Sarah's core business vocabulary and investor language."
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
