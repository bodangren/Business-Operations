import { ScenarioNarrative } from "@/components/student/ScenarioNarrative"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { getUnit01Phase5ComprehensionCheckItems } from "@/data/question-banks/unit01-phase5"
import { Award, Briefcase } from "lucide-react"
import { getLessonScenario } from "@/data/scenarios"
import {
  getPhaseBySequence,
  mapLessonMetadata,
  mapScenarioPhasesToLessonPhases
} from "@/adapters/scenario-to-props"
import { unit01Data } from "../lesson-data"

const lessonScenario = getLessonScenario("unit01", 6)
const phasesForHeader = mapScenarioPhasesToLessonPhases(lessonScenario)
const lessonHeader = mapLessonMetadata(lessonScenario)
const phaseScenario = getPhaseBySequence(lessonScenario, 5)
const unitHeader = {
  id: lessonScenario.metadata.unitId,
  title: lessonScenario.metadata.unitTitle,
  sequence: unit01Data.sequence
}

const assessmentQuestions = getUnit01Phase5ComprehensionCheckItems({ lessonIds: ["lesson06"] })

export default function Phase5Page() {
  const currentPhase = phasesForHeader.find(phase => phase.sequence === phaseScenario.sequence)!

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
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              {phaseScenario.summary}
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <ScenarioNarrative blocks={phaseScenario.narrative} />

          <ComprehensionCheck
            title="Integration & Dashboard Mastery Check"
            description="Answer all questions. Focus on clarity, reliability, and auditability."
            questions={assessmentQuestions}
            showExplanations={true}
            allowRetry={true}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Performance Standards
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-900 text-sm">
                Investor‑ready dashboards present one place to decide: scenario toggles by name,
                live visuals, clear thresholds, and complete safeguards.
              </CardContent>
            </Card>
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Career Connection
                </CardTitle>
              </CardHeader>
              <CardContent className="text-blue-900 text-sm">
                Analysts and consultants build scenario dashboards to guide decisions. Your
                build maps directly to client work: scenarios → insights → recommendations.
              </CardContent>
            </Card>
          </div>
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
