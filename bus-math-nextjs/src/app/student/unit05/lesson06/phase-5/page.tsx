import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson06Data, unit05Data, lesson06Phases } from "../lesson-data"
import { drawUnit05Phase5ComprehensionCheckItems } from "@/data/question-banks/unit05-phase5"

const currentPhase = lesson06Phases[4]
const assessmentQuestions = drawUnit05Phase5ComprehensionCheckItems(10, { lessonIds: ["lesson06"] })

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit05Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">✅ Phase 5: Assessment</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Integration & Dashboard Mastery Check</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Show technical skill and business judgment. Aim for investor‑ready standards: clarity, reliability, and auditability.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <ComprehensionCheck
            title="Integration Mastery (Payroll)"
            description="Answer to confirm scenario control, linking patterns, and KPI decisions."
            questions={assessmentQuestions}
            showExplanations={true}
          />
        </section>
      </main>

      <PhaseFooter unit={unit05Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}

