import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import TransactionJournal from "@/components/accounting/TransactionJournal"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptTransactionJournal,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit02Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit02", 3)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 4)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit02Data.sequence
}

const transactionJournalComponent = getPhaseComponent(phaseScenario, "transactionJournal")
if (!transactionJournalComponent) {
  throw new Error("Unit 2 Lesson 3 Phase 4 scenario is missing a transaction journal component.")
}

const transactionJournalData = adaptTransactionJournal(transactionJournalComponent)

export default function Unit02Lesson03Phase4() {
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
              Phase 4: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            <div className="space-y-4">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {transactionJournalData.title || "Independent Practice Journal"}
                </h2>
                <p className="text-gray-600">
                  Create and validate your own adjusting entries using professional journal entry formats.
                </p>
              </div>
              
              <TransactionJournal
                title={transactionJournalData.title}
                clientTypes={transactionJournalData.clientTypes}
                initialTransactions={transactionJournalData.initialTransactions}
                maxTransactions={transactionJournalData.maxTransactions}
                showAnalytics={transactionJournalData.showAnalytics}
              />
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter lesson={lessonHeader} unit={unitHeader} phase={currentPhase} phases={phasesForHeader} />
    </div>
  )
}