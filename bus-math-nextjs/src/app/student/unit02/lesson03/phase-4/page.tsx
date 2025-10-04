import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TransactionJournal from "@/components/accounting/TransactionJournal"
import {
  adaptTransactionJournal,
  getPhaseBySequence,
  getPhaseComponent
} from "@/adapters/scenario-to-props"
import { lessonScenario, lessonHeader, phasesForHeader, unitHeader } from "../scenario"

const phaseScenario = getPhaseBySequence(lessonScenario, 4)

const transactionJournalComponent = getPhaseComponent(phaseScenario, "transactionJournal")
if (!transactionJournalComponent) {
  throw new Error("Unit 02 Lesson 03 Phase 4 scenario is missing a transaction journal component.")
}

const transactionJournalData = adaptTransactionJournal(transactionJournalComponent)

export default function Phase4Page() {
  const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50">
      <PhaseHeader lesson={lessonHeader} unit={unitHeader} phase={currentPhase} phases={phasesForHeader} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-sky-100 text-sky-800 text-lg px-4 py-2">
              Phase {phaseScenario.sequence}: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            <Card className="border-sky-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-sky-800">{transactionJournalData.title ?? "Automation Blueprint Journal"}</CardTitle>
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
          </div>
        </section>
      </main>

      <PhaseFooter lesson={lessonHeader} unit={unitHeader} phase={currentPhase} phases={phasesForHeader} />
    </div>
  )
}
