import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { DragAndDrop } from "@/components/exercises/DragAndDrop"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptComprehensionCheck,
  adaptDragAndDrop,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit02Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit02", 1)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 5)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit02Data.sequence
}

const comprehensionComponent = getPhaseComponent(phaseScenario, "comprehensionCheck")
if (!comprehensionComponent) {
  throw new Error("Unit 2 Lesson 1 Phase 5 scenario is missing a comprehension check component.")
}

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)

// Get all drag-and-drop components in this phase
const dragAndDropComponents = phaseScenario.components.filter(
  component => component.type === "dragAndDrop"
)

export default function Phase5Page() {
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
              Phase 5: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-semibold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">{phaseScenario.summary}</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <ScenarioNarrative blocks={phaseScenario.narrative} />

            <ComprehensionCheck
              questions={comprehensionData.questions}
              title={comprehensionData.title ?? "Automation Analysis Mastery Assessment"}
              description={
                comprehensionData.description ??
                "Demonstrate your understanding of automation principles and business process analysis."
              }
              showExplanations={comprehensionData.showExplanations ?? true}
              allowRetry={comprehensionData.allowRetry ?? false}
            />

            {/* Render all drag-and-drop exercises */}
            {dragAndDropComponents.map((component, index) => {
              const dragAndDropData = adaptDragAndDrop(component)
              return (
                <Card key={component.type + index} className="border-green-200 shadow-lg">
                  <CardContent className="p-6">
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
              )
            })}
          </div>
        </section>
      </main>

      <PhaseFooter lesson={lessonHeader} unit={unitHeader} phase={currentPhase} phases={phasesForHeader} />
    </div>
  )
}