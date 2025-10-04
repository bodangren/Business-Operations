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
  adaptTurnAndTalk,
  getPhaseBySequence
} from "@/adapters/scenario-to-props"
import type { PhaseComponentInstance } from "@/types/lesson-scenarios"
import { lessonScenario, lessonHeader, phasesForHeader, unitHeader } from "../scenario"

const phaseScenario = getPhaseBySequence(lessonScenario, 3)

const dragAndDropComponent = phaseScenario.components.find((component): component is Extract<
  PhaseComponentInstance,
  { type: "dragAndDrop" }
> & { component: "DragAndDrop" } => component.type === "dragAndDrop" && component.component === "DragAndDrop")

if (!dragAndDropComponent) {
  throw new Error("Unit 02 Lesson 02 Phase 3 scenario is missing the guided drag-and-drop mapping.")
}

const comprehensionComponent = phaseScenario.components.find(
  (component): component is Extract<PhaseComponentInstance, { type: "comprehensionCheck" }> =>
    component.type === "comprehensionCheck"
)
if (!comprehensionComponent) {
  throw new Error("Unit 02 Lesson 02 Phase 3 scenario is missing the guided comprehension check.")
}

const turnAndTalkComponent = phaseScenario.components.find(
  (component): component is Extract<PhaseComponentInstance, { type: "turnAndTalk" }> =>
    component.type === "turnAndTalk"
)

const dragAndDropData = adaptDragAndDrop(dragAndDropComponent)
const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const turnAndTalkData = turnAndTalkComponent ? adaptTurnAndTalk(turnAndTalkComponent) : null

export default function Phase3Page() {
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

            <Card className="border-cyan-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-cyan-800">{dragAndDropData.title}</CardTitle>
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

            <Card className="border-indigo-200 bg-white shadow-sm">
              <CardHeader>
                <CardTitle className="text-indigo-800">
                  {comprehensionData.title ?? "Guided Practice Knowledge Check"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ComprehensionCheck
                  questions={comprehensionData.questions}
                  title={comprehensionData.title}
                  description={
                    comprehensionData.description ??
                      "Confirm that you can calculate and justify each adjusting entry scenario."
                  }
                  showExplanations={comprehensionData.showExplanations ?? true}
                  allowRetry={comprehensionData.allowRetry ?? true}
                />
              </CardContent>
            </Card>

            {turnAndTalkData && (
              <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/10">
                <CardHeader>
                  <CardTitle className="text-amber-800 dark:text-amber-200 flex items-center justify-between">
                    <span>{turnAndTalkData.title}</span>
                    <span className="text-sm font-normal text-amber-600">{turnAndTalkData.duration}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-amber-800/80">{turnAndTalkData.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-amber-900">
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
