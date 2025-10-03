import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { JournalEntryBuilding } from "@/components/exercises/JournalEntryBuilding"
import TAccountsVisualization from "@/components/accounting/TAccountsVisualization"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptJournalEntry,
  adaptTAccountsVisualization,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit01", 4)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 4)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit01Data.sequence
}

const journalEntryComponent = getPhaseComponent(phaseScenario, "journalEntry")
if (!journalEntryComponent) {
  throw new Error("Unit 01 Lesson 04 Phase 4 scenario is missing a journal entry component.")
}

const tAccountsComponent = getPhaseComponent(phaseScenario, "tAccountsVisualization")
if (!tAccountsComponent) {
  throw new Error("Unit 01 Lesson 04 Phase 4 scenario is missing a T-accounts visualization component.")
}

const journalEntryData = adaptJournalEntry(journalEntryComponent)
const tAccountsVisualizationData = adaptTAccountsVisualization(tAccountsComponent)

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

            {phaseScenario.datasets && phaseScenario.datasets.length > 0 && (
              <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
                <CardHeader>
                  <CardTitle className="text-purple-800">Download the Practice Workbook</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-purple-900/80">
                    Use the ledger practice workbook to build your Excel Table, then apply SUMIF and SUMIFS formulas exactly like Sarah.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {phaseScenario.datasets.map(dataset => (
                      <Button
                        key={dataset.id}
                        asChild
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <a href={dataset.path ?? "#"} download>
                          <Download className="h-4 w-4" />
                          {dataset.title}
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="text-gray-900">{journalEntryData.title ?? "Advanced Entry Practice"}</CardTitle>
                {journalEntryData.description && (
                  <p className="text-sm text-muted-foreground">{journalEntryData.description}</p>
                )}
              </CardHeader>
              <CardContent>
                <JournalEntryBuilding
                  title={journalEntryData.title}
                  description={journalEntryData.description}
                  availableAccounts={journalEntryData.availableAccounts}
                  scenarios={journalEntryData.scenarios}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-gray-900">
                  {tAccountsVisualizationData.title ?? "Accounting Equation Dashboard"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <TAccountsVisualization
                  title={tAccountsVisualizationData.title}
                  accounts={tAccountsVisualizationData.accounts}
                  showAccountingEquation={tAccountsVisualizationData.showAccountingEquation}
                  showBalances={tAccountsVisualizationData.showBalances}
                  interactive={tAccountsVisualizationData.interactive}
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
