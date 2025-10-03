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

const lessonScenario = getLessonScenario("unit01", 10)
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
  throw new Error("Unit 01 Lesson 10 Phase 1 scenario is missing a comprehension check component.")
}

const fillInBlankComponent = getPhaseComponent(phaseScenario, "fillInTheBlank")
if (!fillInBlankComponent) {
  throw new Error("Unit 01 Lesson 10 Phase 1 scenario is missing a fill in the blank component.")
}

const peerReviewComponent = getPhaseComponent(phaseScenario, "peerReview")
if (!peerReviewComponent) {
  throw new Error("Unit 01 Lesson 10 Phase 1 scenario is missing a peer review component.")
}

const reflectionComponent = getPhaseComponent(phaseScenario, "reflection")
if (!reflectionComponent) {
  throw new Error("Unit 01 Lesson 10 Phase 1 scenario is missing a reflection component.")
}

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const fillInBlankData = adaptFillInTheBlank(fillInBlankComponent)
const peerReviewData = adaptPeerReview(peerReviewComponent)
const reflectionData = adaptReflection(reflectionComponent)

const acceptanceCriteria = [
  "Final model and dashboard are accurate and clear",
  "Storyline connects analysis to a decision; risks addressed",
  "Presentation hits 4–5 minutes with confident Q&A",
  "Evidence submitted: final files, slides, and peer reviews"
]

const rubric = [
  { name: "Technical Accuracy", weight: "50%", description: "Correct modeling, formulas, validations" },
  { name: "Strategic Rationale", weight: "20%", description: "Business alignment and trade-offs explained" },
  { name: "Communication & Clarity", weight: "15%", description: "Concise story and visuals" },
  { name: "Time Management", weight: "10%", description: "4–5 minutes, clean transitions" },
  { name: "Q&A Readiness", weight: "5%", description: "Confident, concise responses" }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader
        lesson={lessonHeader}
        unit={unitHeader}
        phase={currentPhase}
        phases={phasesForHeader}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              🎤 Phase {phaseScenario.sequence}: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {phaseScenario.summary}
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <ScenarioNarrative blocks={phaseScenario.narrative} />

          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900">
                {comprehensionData.title ?? "Presentation Excellence Understanding"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ComprehensionCheck
                questions={comprehensionData.questions}
                title={comprehensionData.title}
                description={
                  comprehensionData.description ??
                  "Confirm you can communicate Smart Ledger value with professional pacing and clarity."
                }
                showExplanations={comprehensionData.showExplanations ?? true}
                allowRetry={comprehensionData.allowRetry ?? true}
              />
            </CardContent>
          </Card>

          <Card className="border-violet-200 bg-violet-50">
            <CardHeader>
              <CardTitle className="text-violet-900">{fillInBlankData.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <FillInTheBlank
                sentences={fillInBlankData.sentences}
                title={fillInBlankData.title}
                description="Strengthen the storytelling vocabulary for your final pitch."
                showWordList={true}
                randomizeWordOrder={true}
                showHints={true}
              />
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900">
              <ul className="list-disc list-inside space-y-1">
                {acceptanceCriteria.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900">Standard Rubric (Capstone-Aligned)</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-4 text-purple-900">
              {rubric.map(item => (
                <div key={item.name} className="border border-purple-200 rounded-md p-3 bg-white">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{item.name}</span>
                    <Badge variant="outline">{item.weight}</Badge>
                  </div>
                  <p className="text-sm mt-2">{item.description}</p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900">Audience Peer Review</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-amber-900">
              {peerReviewData.instructions && <p>{peerReviewData.instructions}</p>}
              {peerReviewData.rubricFocus && peerReviewData.rubricFocus.length > 0 && (
                <div className="bg-white border border-amber-200 rounded-md p-4 space-y-2">
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

