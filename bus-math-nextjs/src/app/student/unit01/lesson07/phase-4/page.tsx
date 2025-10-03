import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

const lessonScenario = getLessonScenario("unit01", 7)
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
  throw new Error("Unit 01 Lesson 07 Phase 4 scenario is missing a comprehension check component.")
}

const reflectionComponent = getPhaseComponent(phaseScenario, "reflection")
if (!reflectionComponent) {
  throw new Error("Unit 01 Lesson 07 Phase 4 scenario is missing a reflection component.")
}

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const reflectionData = adaptReflection(reflectionComponent)
const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

const practiceDataset = phaseScenario.datasets?.find(d => d.id === "unit01-ledger-lesson07-practice")

export default function Phase4Page() {
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
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {phaseScenario.summary}
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <ScenarioNarrative blocks={phaseScenario.narrative} />

          {practiceDataset && (
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <Download className="h-5 w-5" /> {practiceDataset.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-900 space-y-3">
                <p>{practiceDataset.description}</p>
                <a
                  href={practiceDataset.path}
                  download
                  className="inline-flex items-center gap-2 font-semibold underline text-blue-700"
                >
                  Download: {practiceDataset.title}
                </a>
              </CardContent>
            </Card>
          )}

          <Card className="border-purple-200 bg-white">
            <CardHeader>
              <CardTitle className="text-purple-800">
                {comprehensionData.title ?? "QA Self-Check"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ComprehensionCheck
                questions={comprehensionData.questions}
                title={comprehensionData.title}
                description={comprehensionData.description ?? "Confirm your understanding"}
                showExplanations={comprehensionData.showExplanations ?? true}
                allowRetry={comprehensionData.allowRetry ?? true}
              />
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">{reflectionData.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ReflectionJournal
                unitTitle={reflectionData.unitTitle ?? lessonScenario.metadata.unitTitle}
                prompts={reflectionData.prompts}
              />
            </CardContent>
          </Card>
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
