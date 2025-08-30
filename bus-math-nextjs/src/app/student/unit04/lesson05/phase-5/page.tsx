import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson05Data, unit04Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[4]

const assessmentQuestions = [
  {
    id: "u04l05-a1",
    question: "Why do structured references make forecasts more reliable as data grows?",
    answers: [
      "They auto‑expand with new rows and keep formulas current",
      "They calculate faster than regular ranges",
      "They prevent all errors permanently",
      "They color code cells automatically"
    ],
    explanation: "Tables expand automatically, so formulas like Sales[Units] always include the latest data."
  },
  {
    id: "u04l05-a2",
    question: "Which formula creates a Promo‑Adjusted regression by excluding promo days?",
    answers: [
      "FORECAST.LINEAR([@Week], FILTER(Sales[Units], Sales[PromoFlag]=0), FILTER(Sales[Week], Sales[PromoFlag]=0))",
      "FORECAST.LINEAR([@Week], Sales[Units], Sales[Week]) + 10",
      "AVERAGE(Sales[Units])",
      "SUMIF(Sales[PromoFlag], 0, Sales[Units])"
    ],
    explanation: "Filtering both Units and Week by PromoFlag=0 creates a regression on non‑promo history."
  },
  {
    id: "u04l05-a3",
    question: "What’s the best way to handle missing MenuID lookups in investor‑facing sheets?",
    answers: [
      "Use XLOOKUP with an if_not_found default like \"Unknown\"",
      "Hide errors by changing font color to white",
      "Delete rows with missing IDs",
      "Replace formulas with static text"
    ],
    explanation: "Graceful defaults preserve output quality and highlight issues without crashing the model."
  },
  {
    id: "u04l05-a4",
    question: "Which validation is MOST critical before presenting a forecast?",
    answers: [
      "Flag stale dates and show count of outliers in an Audit Panel",
      "Check cell background colors",
      "Bold all totals",
      "Freeze the header row"
    ],
    explanation: "Investors need to see current, clean data and that issues are known and controlled."
  },
  {
    id: "u04l05-a5",
    question: "A scenario toggle switches Baseline vs. Promo‑Adjusted. Which function is ideal?",
    answers: [
      "SWITCH or IFS on a named Scenario cell",
      "VLOOKUP with approximate match",
      "ROUNDUP",
      "TEXTSPLIT"
    ],
    explanation: "SWITCH/IFS route logic clearly based on the chosen scenario."
  },
  {
    id: "u04l05-a6",
    question: "Which statement best describes SUMPRODUCT in this unit?",
    answers: [
      "It filters and aggregates across multiple criteria for segmented views",
      "It replaces all charting needs",
      "It turns errors into zeros",
      "It formats currencies automatically"
    ],
    explanation: "SUMPRODUCT is a flexible way to compute filtered totals (e.g., Drinks this week)."
  },
  {
    id: "u04l05-a7",
    question: "Why add plain‑language notes near inputs?",
    answers: [
      "They make assumptions visible and auditable",
      "They speed up Excel recalculation",
      "They hide complexity from teachers",
      "They enable macros to run"
    ],
    explanation: "Notes communicate assumptions and limits—crucial for trust and handoffs."
  },
  {
    id: "u04l05-a8",
    question: "Your forecast still shows #N/A. What’s the first fix to try?",
    answers: [
      "Wrap the expression in IFERROR and check the upstream lookup",
      "Change the cell to text",
      "Delete the workbook",
      "Decrease zoom to 90%"
    ],
    explanation: "IFERROR prevents visible breaks; then trace the source (often a missing key)."
  }
]

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
