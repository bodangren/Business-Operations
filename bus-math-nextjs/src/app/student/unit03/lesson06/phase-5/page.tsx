import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"
import { lesson06Data, unit03Data, lesson06Phases } from "../lesson-data"
import { getUnit03Phase5ComprehensionCheckItems } from "@/data/question-banks/unit03-phase5"

const currentPhase = lesson06Phases[4]

const assessmentQuestions = getUnit03Phase5ComprehensionCheckItems({ lessonIds: ["lesson06"] })

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit03Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">✅ Phase 5: Assessment</Badge>
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900">Integration & Dashboard Mastery Check</h2>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                Demonstrate both technical accuracy and applied business judgment.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <ComprehensionCheck
            title="Investor‑Ready Dashboard Standards"
            description="Answer to validate your scenario switching, link stability, and KPI choices."
            questions={assessmentQuestions}
            showExplanations={true}
          />

          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-800 flex items-center gap-2"><CheckCircle2 className="h-5 w-5"/>Performance Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-emerald-900 space-y-1">
                <li>Clarity: one page, readable formulas, named ranges</li>
                <li>Reliability: exact‑match switching, Tables for visuals, validation flags</li>
                <li>Auditability: A=L+E, NI→RE, cash reconciliation surfaced</li>
                <li>Story: a concise executive summary that frames the decision</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit03Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}

