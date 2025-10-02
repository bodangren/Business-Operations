import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptComprehensionCheck,
  adaptPeerReview,
  getPhaseBySequence,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"
import type { PhaseComponentInstance } from "@/types/lesson-scenarios"

const lessonScenario = getLessonScenario("unit01", 1)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 5)
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
  throw new Error("Unit 1 Lesson 1 Phase 5 scenario is missing a comprehension check component.")
}

const peerReviewComponent = phaseScenario.components.find((component): component is Extract<
  PhaseComponentInstance,
  { type: "peerReview" }
> => component.type === "peerReview")

if (!peerReviewComponent) {
  throw new Error("Unit 1 Lesson 1 Phase 5 scenario is missing peer review configuration.")
}

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const peerReviewData = adaptPeerReview(peerReviewComponent)

export default function Phase5Page() {
  const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader lesson={lessonHeader} unit={unitHeader} phase={currentPhase} phases={phasesForHeader} />

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

            <Card className="border-red-200 bg-red-50 dark:bg-red-950/10">
              <CardHeader>
                <CardTitle className="text-red-800 dark:text-red-200">
                  {comprehensionData.title ?? "Unit 1 Lesson 1 Assessment"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ComprehensionCheck
                  questions={comprehensionData.questions}
                  title={comprehensionData.title}
                  description={
                    comprehensionData.description ??
                    "Demonstrate that you can articulate TechStart's business model, the risks of manual bookkeeping, and investor expectations."
                  }
                  showExplanations={comprehensionData.showExplanations ?? true}
                  allowRetry={comprehensionData.allowRetry ?? true}
                />
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
              <CardHeader>
                <CardTitle className="text-purple-800 dark:text-purple-200">
                  Peer Critique: {peerReviewData.projectTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {peerReviewData.instructions && (
                  <p className="text-purple-900/80">{peerReviewData.instructions}</p>
                )}
                {peerReviewData.rubricFocus && peerReviewData.rubricFocus.length > 0 && (
                  <div className="bg-white p-4 rounded-lg border border-purple-200 space-y-2">
                    <h2 className="text-sm font-semibold text-purple-800">Feedback Focus</h2>
                    <ul className="list-disc list-inside space-y-1 text-sm text-purple-900">
                      {peerReviewData.rubricFocus.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                <PeerCritiqueForm
                  projectTitle={peerReviewData.projectTitle}
                  peerName={peerReviewData.defaultPeerName}
                  unitNumber={unitHeader.sequence}
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
