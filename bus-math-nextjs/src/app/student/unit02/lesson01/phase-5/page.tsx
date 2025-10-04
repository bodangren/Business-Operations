import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { DragAndDrop } from "@/components/exercises/DragAndDrop"
import {
  adaptComprehensionCheck,
  adaptDragAndDrop,
  getPhaseBySequence,
  getPhaseComponent
} from "@/adapters/scenario-to-props"
import type { PhaseComponentInstance } from "@/types/lesson-scenarios"
import { lessonScenario, lessonHeader, phasesForHeader, unitHeader } from "../scenario"

const phaseScenario = getPhaseBySequence(lessonScenario, 5)

const comprehensionComponent = getPhaseComponent(phaseScenario, "comprehensionCheck")
if (!comprehensionComponent) {
  throw new Error("Unit 02 Lesson 01 Phase 5 scenario is missing a comprehension check component.")
}

const dragAndDropComponent = phaseScenario.components.find((component): component is Extract<
  PhaseComponentInstance,
  { type: "dragAndDrop" }
> & { component: "DragAndDrop" } => component.type === "dragAndDrop" && component.component === "DragAndDrop")

if (!dragAndDropComponent) {
  throw new Error("Unit 02 Lesson 01 Phase 5 scenario is missing the applied drag-and-drop assessment.")
}

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const dragAndDropData = adaptDragAndDrop(dragAndDropComponent)

export default function Phase5Page() {
  const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      <PhaseHeader lesson={lessonHeader} unit={unitHeader} phase={currentPhase} phases={phasesForHeader} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-cyan-100 text-cyan-800 text-lg px-4 py-2">
              Phase {phaseScenario.sequence}: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            <Card className="border-sky-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-sky-800">
                  {comprehensionData.title ?? "Automation Analysis Mastery Assessment"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ComprehensionCheck
                  questions={comprehensionData.questions}
                  title={comprehensionData.title}
                  description={
                    comprehensionData.description ??
                      "Use the unit question bank to prove that you can identify automation wins with evidence."
                  }
                  showExplanations={comprehensionData.showExplanations ?? true}
                  allowRetry={comprehensionData.allowRetry ?? false}
                />
              </CardContent>
            </Card>

            <Card className="border-indigo-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-indigo-800">{dragAndDropData.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <DragAndDrop
                  title={dragAndDropData.title}
                  description={dragAndDropData.description}
                  leftColumnTitle={dragAndDropData.leftColumnTitle}
                  rightColumnTitle={dragAndDropData.rightColumnTitle}
                  items={dragAndDropData.items}
                  showHints={dragAndDropData.showHints}
                  shuffleItems={dragAndDropData.shuffleItems}
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
