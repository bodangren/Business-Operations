import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { TAccountSimple } from "@/components/accounting/TAccountSimple"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptComprehensionCheck,
  adaptTAccount,
  adaptTurnAndTalk,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit01", 3)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 1)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit01Data.sequence
}

const tAccountComponent = getPhaseComponent(phaseScenario, "tAccount")
if (!tAccountComponent) {
  throw new Error("Unit 01 Lesson 03 Phase 1 scenario is missing a T-account component.")
}

const comprehensionComponent = getPhaseComponent(phaseScenario, "comprehensionCheck")
if (!comprehensionComponent) {
  throw new Error("Unit 01 Lesson 03 Phase 1 scenario is missing a comprehension check component.")
}

const turnAndTalkComponent = getPhaseComponent(phaseScenario, "turnAndTalk")

const tAccountData = adaptTAccount(tAccountComponent)
const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const turnAndTalkData = turnAndTalkComponent ? adaptTurnAndTalk(turnAndTalkComponent) : null

export default function Phase1Page() {
  const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader
        lesson={lessonHeader}
        unit={unitHeader}
        phase={currentPhase}
        phases={phasesForHeader}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              Phase {phaseScenario.sequence}: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            <TAccountSimple
              accountName={tAccountData.accountName}
              accountType={tAccountData.accountType}
              debits={tAccountData.debits}
              credits={tAccountData.credits}
              showBalance={tAccountData.showBalance}
              showFormulas={tAccountData.showFormulas}
              title={tAccountData.title}
            />

            <Card className="border-red-200 bg-red-50 dark:bg-red-950/10">
              <CardHeader>
                <CardTitle className="text-red-800">
                  {comprehensionData.title ?? "Hook Engagement Check"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ComprehensionCheck
                  questions={comprehensionData.questions}
                  title={comprehensionData.title}
                  description={
                    comprehensionData.description ??
                    "Check your understanding of debit and credit language before we move deeper."
                  }
                  showExplanations={comprehensionData.showExplanations ?? true}
                  allowRetry={comprehensionData.allowRetry ?? true}
                />
              </CardContent>
            </Card>

            {turnAndTalkData && (
              <Card className="border-purple-200 bg-purple-50">
                <CardHeader className="flex items-center justify-between">
                  <CardTitle className="text-purple-800">{turnAndTalkData.title}</CardTitle>
                  <span className="text-sm font-medium text-purple-600">{turnAndTalkData.duration}</span>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-purple-800/80">{turnAndTalkData.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-purple-900">
                    {turnAndTalkData.prompts.map((prompt, index) => (
                      <li key={index}>{prompt}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        </section>
      </main>

      <PhaseFooter lesson={lessonHeader} unit={unitHeader} phase={currentPhase} phases={phasesForHeader} />
    </div>
  )
}
