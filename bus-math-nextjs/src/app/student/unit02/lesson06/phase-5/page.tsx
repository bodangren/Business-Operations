import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson06Data, unit02Data, lesson06Phases } from "../lesson-data"
import { getQuestionsForLesson, toComprehensionCheckFormat } from "@/data/question-banks/unit02-phase5"

const currentPhase = lesson06Phases[4]

const assessmentQuestions = toComprehensionCheckFormat(
  getQuestionsForLesson("lesson06")
)

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit02Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              ✅ Phase 5: Assessment — Integration & Dashboard Mastery
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Technical Accuracy + Business Judgment</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Demonstrate switching logic, chart linkage, validation, and clear decision framing.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <ComprehensionCheck
            title="Integration & Dashboards Mastery Check"
            description="Select the best practice or interpretation for each case."
            questions={assessmentQuestions}
            showExplanations={true}
          />

          <Card>
            <CardHeader>
              <CardTitle>Performance Standard: Investor‑Ready</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-800">
              Your dashboard is clear, reliable, and auditable: scenario toggles work by name; visuals always match the model; validation flags are visible; and the executive summary states insight and action in one breath.
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  )
}

