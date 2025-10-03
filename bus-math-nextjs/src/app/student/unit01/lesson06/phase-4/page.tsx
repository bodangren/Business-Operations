import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Download } from "lucide-react"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptComprehensionCheck,
  adaptReflection,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit01", 6)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 4)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit01Data.sequence
}

const comprehensionComponent = getPhaseComponent(phaseScenario, "comprehensionCheck")
if (!comprehensionComponent) {
  throw new Error("Unit 01 Lesson 06 Phase 4 scenario is missing a comprehension check component.")
}

const reflectionComponent = getPhaseComponent(phaseScenario, "reflection")
if (!reflectionComponent) {
  throw new Error("Unit 01 Lesson 06 Phase 4 scenario is missing a reflection component.")
}

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const reflectionData = adaptReflection(reflectionComponent)
const dataset = phaseScenario.datasets?.[0]

export default function Phase4Page() {
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
              🚀 Phase {phaseScenario.sequence}: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {phaseScenario.summary}
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          {dataset && (
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  {dataset.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-900 space-y-3 leading-relaxed">
                <p>{dataset.description}</p>
                <a
                  href={dataset.path}
                  download
                  className="inline-flex items-center gap-2 font-semibold underline text-blue-700"
                >
                  Download: {dataset.path.split('/').pop() ?? 'dataset.csv'}
                </a>
              </CardContent>
            </Card>
          )}

          <ScenarioNarrative blocks={phaseScenario.narrative} />

          <ComprehensionCheck
            questions={comprehensionData.questions}
            title={comprehensionData.title}
            description={comprehensionData.description ?? "Test your understanding"}
            showExplanations={comprehensionData.showExplanations ?? true}
            allowRetry={comprehensionData.allowRetry ?? true}
          />

          <ReflectionJournal
            unitTitle={reflectionData.unitTitle}
            prompts={reflectionData.prompts}
          />
        </section>
      </main>

      <PhaseFooter
        lesson={lessonHeader}
        unit={unitHeader}
        phase={currentPhase}
        phases={phasesForHeader}
      />
    </div>
  )
}
