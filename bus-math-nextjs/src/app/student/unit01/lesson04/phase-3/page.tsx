import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { TransactionJournal } from "@/components/accounting/TransactionJournal"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptTransactionJournal,
  adaptTurnAndTalk,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit01", 4)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 3)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit01Data.sequence
}

const transactionJournalComponent = getPhaseComponent(phaseScenario, "transactionJournal")
if (!transactionJournalComponent) {
  throw new Error("Unit 01 Lesson 04 Phase 3 scenario is missing a transaction journal component.")
}

const turnAndTalkComponent = getPhaseComponent(phaseScenario, "turnAndTalk")

const transactionJournalData = adaptTransactionJournal(transactionJournalComponent)
const turnAndTalkData = turnAndTalkComponent ? adaptTurnAndTalk(turnAndTalkComponent) : null

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

          <div className="max-w-5xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            <Card>
              <CardHeader>
                <CardTitle className="text-gray-900">
                  {transactionJournalData.title ?? "Smart Ledger Practice Journal"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TransactionJournal
                  title={transactionJournalData.title}
                  clientTypes={transactionJournalData.clientTypes}
                  initialTransactions={transactionJournalData.initialTransactions}
                  maxTransactions={transactionJournalData.maxTransactions}
                  showAnalytics={transactionJournalData.showAnalytics}
                />
              </CardContent>
            </Card>

            {turnAndTalkData && (
              <Card className="border-emerald-200 bg-emerald-50 dark:bg-emerald-950/10">
                <CardHeader className="flex items-center justify-between">
                  <CardTitle className="text-emerald-800">{turnAndTalkData.title}</CardTitle>
                  <span className="text-sm font-medium text-emerald-600">{turnAndTalkData.duration}</span>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-emerald-900/80">{turnAndTalkData.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-emerald-900">
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
