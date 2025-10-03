import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptComprehensionCheck,
  adaptPeerReview,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit01", 7)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 5)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit01Data.sequence
}

const comprehensionComponent = getPhaseComponent(phaseScenario, "comprehensionCheck")
if (!comprehensionComponent) {
  throw new Error("Unit 01 Lesson 07 Phase 5 scenario is missing a comprehension check component.")
}

const peerReviewComponent = getPhaseComponent(phaseScenario, "peerReview")
if (!peerReviewComponent) {
  throw new Error("Unit 01 Lesson 07 Phase 5 scenario is missing a peer review component.")
}

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const peerReviewData = adaptPeerReview(peerReviewComponent)
const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader
        lesson={lessonHeader}
        unit={unitHeader}
        phase={currentPhase}
        phases={phasesForHeader}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              ✅ Phase {phaseScenario.sequence}: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {phaseScenario.summary}
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <ScenarioNarrative blocks={phaseScenario.narrative} />

          <Card className="border-blue-200 bg-white">
            <CardHeader>
              <CardTitle className="text-blue-900">
                {comprehensionData.title ?? "Assessment Check"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ComprehensionCheck
                questions={comprehensionData.questions}
                title={comprehensionData.title}
                description={comprehensionData.description ?? "Test your understanding"}
                showExplanations={comprehensionData.showExplanations ?? true}
                allowRetry={comprehensionData.allowRetry ?? true}
              />
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">{peerReviewData.projectTitle}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {peerReviewData.instructions && (
                <p className="text-green-900 text-sm">{peerReviewData.instructions}</p>
              )}
              <PeerCritiqueForm
                projectTitle={peerReviewData.projectTitle}
                peerName={peerReviewData.defaultPeerName ?? "Partner"}
                unitNumber={1}
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
