import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson05Data, unit04Data, lesson05Phases } from "../lesson-data"
import { getUnit04Phase5ComprehensionCheckItems } from "@/data/question-banks/unit04-phase5"

const currentPhase = lesson05Phases[4]
const assessmentQuestions = getUnit04Phase5ComprehensionCheckItems({ lessonIds: ["lesson05"] })

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">📊 Phase 5: Assessment</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Forecast Automation: Professional Mastery</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Demonstrate technical skill and business judgment for investor‑ready forecasting.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <ComprehensionCheck
            title="Comprehensive Mastery Check"
            description="Answer 8 questions covering automation, validation, and investor standards."
            questions={assessmentQuestions}
            showExplanations={true}
            allowRetry={true}
          />

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Performance Standards</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Investor‑Ready:</strong> No visible errors; Audit Panel shows 0 critical flags; scenario toggle works.</li>
                <li><strong>Proficient:</strong> Minor non‑critical flags present; notes clearly document assumptions.</li>
                <li><strong>Developing:</strong> Fixed ranges or missing validations; scenario toggle incomplete.</li>
              </ul>
              <p className="mt-2">Career link: Analysts and consultants present clean, traceable models with fast what‑if answers.</p>
            </CardContent>
          </Card>

          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-900">Investor Summary Template (Use for Presentations)</CardTitle>
            </CardHeader>
            <CardContent className="text-emerald-900 text-sm">
              <p className="mb-2">Copy this structure into your deck or sheet notes:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Objective:</strong> Forecast weekly units for [Product/Category] to plan staffing and inventory.</li>
                <li><strong>Assumptions:</strong> [Data freshness policy], [Promo handling], [Seasonality notes].</li>
                <li><strong>Method:</strong> SWITCH between Baseline (all data) and Promo‑Adjusted (excludes promo spikes) using FORECAST.LINEAR with Tables.</li>
                <li><strong>Controls:</strong> Audit Panel flags stale dates, outliers, missing IDs, negative values; IFERROR and XLOOKUP defaults prevent #N/A.</li>
                <li><strong>Results:</strong> Next 4 weeks range [X–Y units]; sensitivity: +5% price → [effect] units.</li>
                <li><strong>Decision:</strong> Schedule [N] staff at [peak hours]; order [items] to maintain waste ≤3%.</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}
