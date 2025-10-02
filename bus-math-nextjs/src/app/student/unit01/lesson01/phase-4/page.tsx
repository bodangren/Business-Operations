import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptComprehensionCheck,
  adaptFillInTheBlank,
  getPhaseBySequence,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"
import type { PhaseComponentInstance } from "@/types/lesson-scenarios"

const lessonScenario = getLessonScenario("unit01", 1)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 4)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit01Data.sequence
}

const comprehensionComponent = phaseScenario.components.find((component): component is Extract<
  PhaseComponentInstance,
  { type: "comprehensionCheck" }
> => component.type === "comprehensionCheck")

if (!comprehensionComponent) {
  throw new Error("Unit 1 Lesson 1 Phase 4 scenario is missing a comprehension check component.")
}

const fillInBlankComponent = phaseScenario.components.find((component): component is Extract<
  PhaseComponentInstance,
  { type: "fillInTheBlank" }
> => component.type === "fillInTheBlank")

if (!fillInBlankComponent) {
  throw new Error("Unit 1 Lesson 1 Phase 4 scenario is missing fill-in-the-blank data.")
}

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const fillInBlankData = adaptFillInTheBlank(fillInBlankComponent)

export default function Phase4Page() {
  const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader lesson={lessonHeader} unit={unitHeader} phase={currentPhase} phases={phasesForHeader} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              Phase 4: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/10">
              <CardHeader>
                <CardTitle className="text-amber-800 dark:text-amber-200">
                  {comprehensionData.title ?? "Investor Analysis"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ComprehensionCheck
                  questions={comprehensionData.questions}
                  title={comprehensionData.title}
                  description={
                    comprehensionData.description ??
                    "Evaluate TechStart Solutions like an investor and explain why automation protects business credibility."
                  }
                  showExplanations={comprehensionData.showExplanations ?? true}
                  allowRetry={comprehensionData.allowRetry ?? true}
                />
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
              <CardHeader>
                <CardTitle className="text-blue-800 dark:text-blue-200">{fillInBlankData.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <FillInTheBlank
                  sentences={fillInBlankData.sentences}
                  title={fillInBlankData.title}
                  description="Complete each statement to describe the self-auditing ledger features investors expect from Sarah."
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
