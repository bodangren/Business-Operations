import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { getUnit07Phase5ComprehensionCheckItems } from "@/data/question-banks/unit07-phase5"
import { lesson05Data, unit07Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[4]

const assessmentQuestions = getUnit07Phase5ComprehensionCheckItems({ lessonIds: ["lesson05"] })

export default function Unit07Lesson05Phase5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">📊 Phase 5: Assessment</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Advanced Inventory Automation: Mastery Assessment</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Show technical skill and business judgment. Aim for investor‑ready standards: reliable, auditable, and well explained.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <ComprehensionCheck
            title="Professional Mastery Check"
            description="Select the best practices and explain business impact."
            questions={assessmentQuestions}
            showExplanations={true}
            allowRetry={true}
          />

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900">Performance Standard: Investor‑Ready</CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900">
              <ul className="list-disc list-inside space-y-1">
                <li>Correct COGS/Ending Inventory across FIFO/LIFO/Weighted Avg</li>
                <li>Validation prevents bad inputs; errors handled with IFNA/IFERROR</li>
                <li>Tables and documentation support quick review and audit</li>
                <li>Clear explanation of tax and cash‑flow impacts</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}
