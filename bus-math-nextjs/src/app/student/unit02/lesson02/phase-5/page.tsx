import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import {
  adaptComprehensionCheck,
  adaptFillInTheBlank,
  getPhaseBySequence
} from "@/adapters/scenario-to-props"
import type { PhaseComponentInstance } from "@/types/lesson-scenarios"
import { lessonScenario, lessonHeader, phasesForHeader, unitHeader } from "../scenario"

const phaseScenario = getPhaseBySequence(lessonScenario, 5)

const comprehensionComponent = phaseScenario.components.find(
  (component): component is Extract<PhaseComponentInstance, { type: "comprehensionCheck" }> =>
    component.type === "comprehensionCheck"
)
if (!comprehensionComponent) {
  throw new Error("Unit 02 Lesson 02 Phase 5 scenario is missing the mastery check.")
}

const fillInBlankComponent = phaseScenario.components.find(
  (component): component is Extract<PhaseComponentInstance, { type: "fillInTheBlank" }> =>
    component.type === "fillInTheBlank"
)
if (!fillInBlankComponent) {
  throw new Error("Unit 02 Lesson 02 Phase 5 scenario is missing the summary fill-in-the-blank activity.")
}

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const fillInBlankData = adaptFillInTheBlank(fillInBlankComponent)

export default function Phase5Page() {
  const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-rose-50">
      <PhaseHeader lesson={lessonHeader} unit={unitHeader} phase={currentPhase} phases={phasesForHeader} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-rose-100 text-rose-800 text-lg px-4 py-2">
              Phase {phaseScenario.sequence}: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            <Card className="border-rose-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-rose-800">
                  {comprehensionData.title ?? "Unit Question Bank Mastery Check"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ComprehensionCheck
                  questions={comprehensionData.questions}
                  title={comprehensionData.title}
                  description={
                    comprehensionData.description ??
                      "Demonstrate mastery of adjusting entries, depreciation, and closing processes using the Unit 02 bank."
                  }
                  showExplanations={comprehensionData.showExplanations ?? true}
                  allowRetry={comprehensionData.allowRetry ?? false}
                />
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
              <CardHeader>
                <CardTitle className="text-purple-800 dark:text-purple-200">{fillInBlankData.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <FillInTheBlank
                  sentences={fillInBlankData.sentences}
                  title={fillInBlankData.title}
                  description="Use the summary prompts to connect timing rules to the Month-End Wizard blueprint."
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
