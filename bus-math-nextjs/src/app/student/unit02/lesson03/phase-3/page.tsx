import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { JournalEntryBuilding } from "@/components/exercises/JournalEntryBuilding"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptJournalEntry,
  adaptTurnAndTalk,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit02Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit02", 3)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 3)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit02Data.sequence
}

const journalEntryComponent = getPhaseComponent(phaseScenario, "journalEntry")
if (!journalEntryComponent) {
  throw new Error("Unit 2 Lesson 3 Phase 3 scenario is missing a journal entry component.")
}

const journalEntryData = adaptJournalEntry(journalEntryComponent)
const turnAndTalkComponent = getPhaseComponent(phaseScenario, "turnAndTalk")
const turnAndTalkData = turnAndTalkComponent ? adaptTurnAndTalk(turnAndTalkComponent) : null

export default function Unit02Lesson03Phase3() {
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
              Phase 3: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            <JournalEntryBuilding
              title={journalEntryData.title}
              description={journalEntryData.description}
              availableAccounts={journalEntryData.availableAccounts}
              scenarios={journalEntryData.scenarios}
            />

            {turnAndTalkData && (
              <Card className="border-indigo-200 bg-indigo-50 dark:bg-indigo-950/10">
                <CardHeader>
                  <CardTitle className="text-indigo-800 dark:text-indigo-200 flex items-center justify-between">
                    <span>{turnAndTalkData.title}</span>
                    <span className="text-sm font-normal text-indigo-600">{turnAndTalkData.duration}</span>
                  </CardTitle>
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