import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptComprehensionCheck,
  adaptFillInTheBlank,
  adaptPeerReview,
  adaptReflection,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit01", 9)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 1)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit01Data.sequence
}

const comprehensionComponent = getPhaseComponent(phaseScenario, "comprehensionCheck")
if (!comprehensionComponent) {
  throw new Error("Unit 01 Lesson 09 Phase 1 scenario is missing a comprehension check component.")
}

const fillInBlankComponent = getPhaseComponent(phaseScenario, "fillInTheBlank")
if (!fillInBlankComponent) {
  throw new Error("Unit 01 Lesson 09 Phase 1 scenario is missing a fill in the blank component.")
}

const peerReviewComponent = getPhaseComponent(phaseScenario, "peerReview")
if (!peerReviewComponent) {
  throw new Error("Unit 01 Lesson 09 Phase 1 scenario is missing a peer review component.")
}

const reflectionComponent = getPhaseComponent(phaseScenario, "reflection")
if (!reflectionComponent) {
  throw new Error("Unit 01 Lesson 09 Phase 1 scenario is missing a reflection component.")
}

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const fillInBlankData = adaptFillInTheBlank(fillInBlankComponent)
const peerReviewData = adaptPeerReview(peerReviewComponent)
const reflectionData = adaptReflection(reflectionComponent)

const acceptanceCriteria = [
  "Working prototype implements planned Excel features on real data",
  "Validations and error checks pass; test scenarios documented",
  "Rehearsal complete with peer feedback and change notes captured",
  "Evidence submitted: prototype workbook plus brief test summary"
]

const datasetResource = lessonScenario.sharedResources?.find(resource => resource.id === "smart-ledger-datasets")
const datasetBasePath = datasetResource?.path ?? "/resources/unit01-pbl-smart-ledger-g"
const datasetLinks = Array.from({ length: 6 }, (_, index) => ({
  id: `g${index + 1}`,
  href: `${datasetBasePath}${index + 1}.csv`
}))

export default function Phase1Page() {
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

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-900">
                {comprehensionData.title ?? "Prototype Development Understanding"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ComprehensionCheck
                questions={comprehensionData.questions}
                title={comprehensionData.title}
                description={
                  comprehensionData.description ??
                  "Check your readiness to build and rehearse the Smart Ledger prototype."
                }
                showExplanations={comprehensionData.showExplanations ?? true}
                allowRetry={comprehensionData.allowRetry ?? true}
              />
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900">{fillInBlankData.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <FillInTheBlank
                sentences={fillInBlankData.sentences}
                title={fillInBlankData.title}
                description="Lock in the vocabulary that keeps your prototype investor-ready."
                showWordList={true}
                randomizeWordOrder={true}
                showHints={true}
              />
            </CardContent>
          </Card>

          <Card className="border-sky-200 bg-sky-50">
            <CardHeader>
              <CardTitle className="text-sky-900">Milestone 2 — Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sky-900">
              <p>Confirm each item before submitting your prototype evidence:</p>
              <ul className="list-disc list-inside space-y-1">
                {acceptanceCriteria.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900">Peer Feedback — Structured Review</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-purple-900">
              {peerReviewData.instructions && <p>{peerReviewData.instructions}</p>}
              {peerReviewData.rubricFocus && peerReviewData.rubricFocus.length > 0 && (
                <div className="bg-white border border-purple-200 rounded-md p-4 space-y-2">
                  <h2 className="text-sm font-semibold">Feedback Focus</h2>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    {peerReviewData.rubricFocus.map(item => (
                      <li key={item}>{item}</li>
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

          <Card className="border-teal-200 bg-teal-50">
            <CardHeader>
              <CardTitle className="text-teal-900">Resources — Group Datasets</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-2 text-sm text-teal-900">
              {datasetLinks.map(link => (
                <a key={link.id} href={link.href} download className="underline">Download {link.id} dataset</a>
              ))}
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-900">Reflection</CardTitle>
            </CardHeader>
            <CardContent>
              <ReflectionJournal
                unitTitle={reflectionData.unitTitle}
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

