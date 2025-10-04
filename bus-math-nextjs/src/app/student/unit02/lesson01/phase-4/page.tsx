import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DragAndDrop } from "@/components/exercises/DragAndDrop"
import { adaptDragAndDrop, getPhaseBySequence } from "@/adapters/scenario-to-props"
import type { PhaseComponentInstance } from "@/types/lesson-scenarios"
import { lessonScenario, lessonHeader, phasesForHeader, unitHeader } from "../scenario"

const phaseScenario = getPhaseBySequence(lessonScenario, 4)

const dragAndDropComponents = phaseScenario.components.filter((component): component is Extract<
  PhaseComponentInstance,
  { type: "dragAndDrop" }
> & { component: "DragAndDrop" } => component.type === "dragAndDrop" && component.component === "DragAndDrop")

if (dragAndDropComponents.length === 0) {
  throw new Error("Unit 02 Lesson 01 Phase 4 scenario is missing drag-and-drop activities.")
}

const dragAndDropData = dragAndDropComponents.map(adaptDragAndDrop)

export default function Phase4Page() {
  const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50">
      <PhaseHeader lesson={lessonHeader} unit={unitHeader} phase={currentPhase} phases={phasesForHeader} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-sky-100 text-sky-800 text-lg px-4 py-2">
              Phase {phaseScenario.sequence}: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            {dragAndDropData.map(activity => (
              <Card key={activity.title} className="border-blue-200 bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-blue-800">{activity.title}</CardTitle>
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
          </div>
        </section>
      </main>

      <PhaseFooter lesson={lessonHeader} unit={unitHeader} phase={currentPhase} phases={phasesForHeader} />
    </div>
  )
}
