import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { TrialBalanceSorting } from "@/components/drag-drop-exercises/TrialBalanceSorting"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptComprehensionCheck,
  adaptTrialBalance,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit01", 3)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 5)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit01Data.sequence
}

const comprehensionComponent = getPhaseComponent(phaseScenario, "comprehensionCheck")
if (!comprehensionComponent) {
  throw new Error("Unit 01 Lesson 03 Phase 5 scenario is missing a comprehension check component.")
}

const trialBalanceComponent = getPhaseComponent(phaseScenario, "trialBalance")
if (!trialBalanceComponent) {
  throw new Error("Unit 01 Lesson 03 Phase 5 scenario is missing a trial balance component.")
}

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const trialBalanceData = adaptTrialBalance(trialBalanceComponent)

export default function Phase5Page() {
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
              Phase {phaseScenario.sequence}: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            <ComprehensionCheck
              questions={comprehensionData.questions}
              title={comprehensionData.title ?? "Debit & Credit Rules Assessment"}
              description={
                comprehensionData.description ??
                "Demonstrate mastery of debit and credit logic across TechStart scenarios."
              }
              showExplanations={comprehensionData.showExplanations ?? true}
              allowRetry={comprehensionData.allowRetry ?? true}
            />

            <Card>
              <CardHeader>
                <CardTitle className="text-gray-900">{trialBalanceData.title ?? "Trial Balance: Assessment Set"}</CardTitle>
              </CardHeader>
              <CardContent>
                <TrialBalanceSorting
                  accounts={trialBalanceData.accounts}
                  title={trialBalanceData.title}
                  description={trialBalanceData.description}
                  initialShuffle={trialBalanceData.initialShuffle}
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
