import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { TrialBalanceSorting } from "@/components/drag-drop-exercises/TrialBalanceSorting"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptComprehensionCheck,
  adaptFillInTheBlank,
  adaptTrialBalance,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit01", 2)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 4)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit01Data.sequence
}

const trialBalanceComponent = getPhaseComponent(phaseScenario, "trialBalance")
if (!trialBalanceComponent) {
  throw new Error("Unit 01 Lesson 02 Phase 4 scenario is missing a trial balance component.")
}

const comprehensionComponent = getPhaseComponent(phaseScenario, "comprehensionCheck")
if (!comprehensionComponent) {
  throw new Error("Unit 01 Lesson 02 Phase 4 scenario is missing a comprehension check component.")
}

const fillInTheBlankComponent = getPhaseComponent(phaseScenario, "fillInTheBlank")
if (!fillInTheBlankComponent) {
  throw new Error("Unit 01 Lesson 02 Phase 4 scenario is missing a fill-in-the-blank component.")
}

const trialBalanceData = adaptTrialBalance(trialBalanceComponent)
const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const fillInTheBlankData = adaptFillInTheBlank(fillInTheBlankComponent)

export default function Phase4Page() {
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
              Phase {phaseScenario.sequence}: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
              <CardHeader>
                <CardTitle className="text-purple-800">{trialBalanceData.title ?? "Trial Balance Practice"}</CardTitle>
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

            <Card className="border-indigo-200 bg-indigo-50 dark:bg-indigo-950/10">
              <CardHeader>
                <CardTitle className="text-indigo-800">
                  {comprehensionData.title ?? "Independent Practice Problems"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ComprehensionCheck
                  questions={comprehensionData.questions}
                  title={comprehensionData.title}
                  description={
                    comprehensionData.description ??
                    "Work through TechStart's financial scenarios to confirm you can keep the equation balanced."
                  }
                  showExplanations={comprehensionData.showExplanations ?? true}
                  allowRetry={comprehensionData.allowRetry ?? true}
                />
              </CardContent>
            </Card>

            <FillInTheBlank
              sentences={fillInTheBlankData.sentences}
              title={fillInTheBlankData.title}
              description="Apply the accounting equation to complex TechStart scenarios."
              showHints={true}
            />
          </div>
        </section>
      </main>

      <PhaseFooter lesson={lessonHeader} unit={unitHeader} phase={currentPhase} phases={phasesForHeader} />
    </div>
  )
}
