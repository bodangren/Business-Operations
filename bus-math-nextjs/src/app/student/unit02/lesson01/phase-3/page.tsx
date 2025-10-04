import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DragAndDrop } from "@/components/exercises/DragAndDrop"
import {
  adaptDragAndDrop,
  adaptTurnAndTalk,
  getPhaseBySequence
} from "@/adapters/scenario-to-props"
import type { PhaseComponentInstance } from "@/types/lesson-scenarios"
import { lessonScenario, lessonHeader, phasesForHeader, unitHeader } from "../scenario"

const phaseScenario = getPhaseBySequence(lessonScenario, 3)

const dragAndDropComponents = phaseScenario.components.filter((component): component is Extract<
  PhaseComponentInstance,
  { type: "dragAndDrop" }
> & { component: "DragAndDrop" } => component.type === "dragAndDrop" && component.component === "DragAndDrop")

if (dragAndDropComponents.length === 0) {
  throw new Error("Unit 02 Lesson 01 Phase 3 scenario is missing drag-and-drop activities.")
}

const dragAndDropData = dragAndDropComponents.map(adaptDragAndDrop)
const turnAndTalkComponent = phaseScenario.components.find(
  (component): component is Extract<PhaseComponentInstance, { type: "turnAndTalk" }> => component.type === "turnAndTalk"
)
const turnAndTalkData = turnAndTalkComponent ? adaptTurnAndTalk(turnAndTalkComponent) : null

export default function Phase3Page() {
  const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-lime-50">
      <PhaseHeader lesson={lessonHeader} unit={unitHeader} phase={currentPhase} phases={phasesForHeader} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-lime-100 text-lime-800 text-lg px-4 py-2">
              Phase {phaseScenario.sequence}: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            {dragAndDropData.map(activity => (
              <Card key={activity.title} className="border-emerald-200 bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-emerald-800">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <DragAndDrop
                    title={activity.title}
                    description={activity.description}
                    leftColumnTitle={activity.leftColumnTitle}
                    rightColumnTitle={activity.rightColumnTitle}
                    items={activity.items}
                    showHints={activity.showHints}
                    shuffleItems={activity.shuffleItems}
                  />
                </CardContent>
              </Card>
            ))}

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
