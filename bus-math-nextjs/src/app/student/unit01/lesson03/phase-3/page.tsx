import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { TAccountSimple } from "@/components/accounting/TAccountSimple"
import { JournalEntryBuilding } from "@/components/exercises/JournalEntryBuilding"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptJournalEntry,
  adaptTAccount,
  adaptTurnAndTalk,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"
import type { PhaseComponentInstance } from "@/types/lesson-scenarios"

const lessonScenario = getLessonScenario("unit01", 3)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 3)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit01Data.sequence
}

const tAccountComponents = phaseScenario.components.filter(
  (component): component is Extract<PhaseComponentInstance, { type: "tAccount" }> =>
    component.type === "tAccount"
)

if (tAccountComponents.length === 0) {
  throw new Error("Unit 01 Lesson 03 Phase 3 scenario is missing T-account components.")
}

const journalEntryComponent = getPhaseComponent(phaseScenario, "journalEntry")
if (!journalEntryComponent) {
  throw new Error("Unit 01 Lesson 03 Phase 3 scenario is missing a journal entry component.")
}

const turnAndTalkComponent = getPhaseComponent(phaseScenario, "turnAndTalk")
const tAccountData = tAccountComponents.map(adaptTAccount)
const journalEntryData = adaptJournalEntry(journalEntryComponent)
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

            <div className="grid gap-6 md:grid-cols-2">
              {tAccountData.map(account => (
                <TAccountSimple
                  key={account.accountName}
                  accountName={account.accountName}
                  accountType={account.accountType}
                  debits={account.debits}
                  credits={account.credits}
                  showBalance={account.showBalance}
                  showFormulas={account.showFormulas}
                  title={account.title}
                />
              ))}
            </div>

            <JournalEntryBuilding
              title={journalEntryData.title}
              description={journalEntryData.description}
              availableAccounts={journalEntryData.availableAccounts}
              scenarios={journalEntryData.scenarios}
            />

            {turnAndTalkData && (
              <Card className="border-indigo-200 bg-indigo-50">
                <CardHeader className="flex items-center justify-between">
                  <CardTitle className="text-indigo-800">{turnAndTalkData.title}</CardTitle>
                  <span className="text-sm font-medium text-indigo-600">{turnAndTalkData.duration}</span>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-indigo-800/80">{turnAndTalkData.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-indigo-900">
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
