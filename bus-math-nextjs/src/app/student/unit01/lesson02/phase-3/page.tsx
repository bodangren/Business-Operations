import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import AccountCategorization from "@/components/drag-drop-exercises/AccountCategorization"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptComprehensionCheck,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit01", 2)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 3)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit01Data.sequence
}

const dragAndDropComponent = getPhaseComponent(phaseScenario, "dragAndDrop")
const accountCategorizationScenario =
  dragAndDropComponent && dragAndDropComponent.component === "AccountCategorization"
    ? dragAndDropComponent
    : null

if (!accountCategorizationScenario) {
  throw new Error("Unit 01 Lesson 02 Phase 3 is missing the AccountCategorization activity in the scenario.")
}

const comprehensionComponent = getPhaseComponent(phaseScenario, "comprehensionCheck")
if (!comprehensionComponent) {
  throw new Error("Unit 01 Lesson 02 Phase 3 scenario is missing a comprehension check component.")
}

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)

export default function Phase3Page() {
  const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

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
              Phase {phaseScenario.sequence}: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            <Card className="border-emerald-200 bg-emerald-50 dark:bg-emerald-950/10">
              <CardHeader>
                <CardTitle className="text-emerald-800">Scenario Practice: TechStart Account Sorting</CardTitle>
                {accountCategorizationScenario.description && (
                  <CardDescription>{accountCategorizationScenario.description}</CardDescription>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                {/* TODO(#57): Pass scenario preset once AccountCategorization supports external props. */}
                <AccountCategorization />
              </CardContent>
            </Card>

            <Card className="border-indigo-200 bg-indigo-50 dark:bg-indigo-950/10">
              <CardHeader>
                <CardTitle className="text-indigo-800">
                  {comprehensionData.title ?? "Guided Practice Check"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ComprehensionCheck
                  questions={comprehensionData.questions}
                  title={comprehensionData.title}
                  description={
                    comprehensionData.description ??
                    "Explain how each TechStart transaction keeps the accounting equation balanced."
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
