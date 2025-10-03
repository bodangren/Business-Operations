import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptReflection,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit01", 2)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 6)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit01Data.sequence
}

const reflectionComponent = getPhaseComponent(phaseScenario, "reflection")
if (!reflectionComponent) {
  throw new Error("Unit 01 Lesson 02 Phase 6 scenario is missing a reflection component.")
}

const reflectionData = adaptReflection(reflectionComponent)

export default function Phase6Page() {
  const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader
        lesson={lessonHeader}
        unit={unitHeader}
        phase={currentPhase}
        phases={phasesForHeader}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              Phase {phaseScenario.sequence}: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            <Card className="border-indigo-200 bg-indigo-50 dark:bg-indigo-950/10">
              <CardHeader>
                <CardTitle className="text-indigo-800">{reflectionData.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {reflectionData.journalingFocus && (
                  <p className="text-indigo-900/80">{reflectionData.journalingFocus}</p>
                )}
                <ReflectionJournal
                  unitTitle={reflectionData.unitTitle ?? lessonScenario.metadata.title}
                  prompts={reflectionData.prompts}
                  className="p-0"
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
