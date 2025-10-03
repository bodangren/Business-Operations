import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getLessonScenario } from "@/data/scenarios"
import {
  adaptComprehensionCheck,
  adaptFillInTheBlank,
  adaptReflection,
  getPhaseBySequence,
  getPhaseComponent,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit01", 8)
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
  throw new Error("Unit 01 Lesson 08 Phase 1 scenario is missing a comprehension check component.")
}

const fillInBlankComponent = getPhaseComponent(phaseScenario, "fillInTheBlank")
if (!fillInBlankComponent) {
  throw new Error("Unit 01 Lesson 08 Phase 1 scenario is missing a fill in the blank component.")
}

const reflectionComponent = getPhaseComponent(phaseScenario, "reflection")
if (!reflectionComponent) {
  throw new Error("Unit 01 Lesson 08 Phase 1 scenario is missing a reflection component.")
}

const comprehensionData = adaptComprehensionCheck(comprehensionComponent)
const fillInBlankData = adaptFillInTheBlank(fillInBlankComponent)
const reflectionData = adaptReflection(reflectionComponent)

const acceptanceCriteria = [
  "Problem statement, scope, stakeholders, and success metrics are clearly written",
  "Data inventory and source plan are listed; team sets a file naming convention",
  "Excel model plan lists tabs, validations, trial-balance check, and a small dashboard",
  "Risks/assumptions and simple mitigation steps are documented",
  "Evidence started: brief outline plus workbook skeleton (tabs created, headers set)"
]

const rubric = [
  { name: "Technical Accuracy", weight: "50%", description: "Correct formulas, validations, and reliable results" },
  { name: "Strategic Rationale", weight: "20%", description: "Explains business goals and trade-offs" },
  { name: "Communication & Clarity", weight: "15%", description: "Concise story and audience-fit visuals" },
  { name: "Time Management", weight: "10%", description: "Stays within time and clean transitions" },
  { name: "Q&A Readiness", weight: "5%", description: "Confident, concise responses" }
]

const submissionChecklist = [
  "One-page project brief (PDF or doc link)",
  "Workbook skeleton (tabs set, headers added)",
  "Link or path to dataset used (g1–g6)"
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-rose-50">
      <PhaseHeader
        lesson={lessonHeader}
        unit={unitHeader}
        phase={currentPhase}
        phases={phasesForHeader}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-rose-100 text-rose-800 text-lg px-4 py-2">
              📌 Phase {phaseScenario.sequence}: {phaseScenario.name}
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">{phaseScenario.title}</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {phaseScenario.summary}
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <ScenarioNarrative blocks={phaseScenario.narrative} />

          <Card className="border-rose-200 bg-rose-50">
            <CardHeader>
              <CardTitle className="text-rose-900">
                {comprehensionData.title ?? "Project Definition Understanding"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ComprehensionCheck
                questions={comprehensionData.questions}
                title={comprehensionData.title}
                description={
                  comprehensionData.description ??
                  "Test your understanding of the Smart Ledger project planning work."
                }
                showExplanations={comprehensionData.showExplanations ?? true}
                allowRetry={comprehensionData.allowRetry ?? true}
              />
            </CardContent>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50">
            <CardHeader>
              <CardTitle className="text-yellow-900">{fillInBlankData.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <FillInTheBlank
                sentences={fillInBlankData.sentences}
                title={fillInBlankData.title}
                description="Complete each sentence to lock in key project planning vocabulary."
                showWordList={true}
                randomizeWordOrder={true}
                showHints={true}
              />
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Milestone 1 — Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-blue-900">
              <p>Use this list with your team as you draft and review deliverables:</p>
              <ul className="space-y-2">
                {acceptanceCriteria.map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1">✅</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900">Standard Rubric</CardTitle>
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

          <Card className="border-slate-200 bg-slate-50">
            <CardHeader>
              <CardTitle className="text-slate-900">Submission Checklist</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-slate-900 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                {submissionChecklist.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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

