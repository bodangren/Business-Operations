import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Award, Briefcase } from "lucide-react"
import { lesson06Data, unit01Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[4]

const assessmentQuestions = [
  { id: 'q1', question: 'Best practice for scenario switching by name is:', answers: ['Exact‑match XLOOKUP/INDEX‑MATCH wrapped in IFNA/IFERROR', 'Approximate match with TRUE for flexibility', 'Manually change ranges in each formula', 'Duplicate tabs for each scenario and link screenshots'], explanation: 'Exact match prevents mislabeled scenarios; IFNA/IFERROR guards against missing names.' },
  { id: 'q2', question: 'Charts that stop expanding usually point to:', answers: ['Static A1:A20 ranges instead of Table[Column]', 'Too many colors in the chart', 'Wrong font family selected', 'Sheet protection turned on'], explanation: 'Bind charts to Table columns so ranges expand automatically.' },
  { id: 'q3', question: 'Which is the strongest stale date check?', answers: ['IF(Settings[@AsOfDate] < TODAY()-7, "Stale AsOfDate", "Fresh")', 'Manually read the date each week', 'Hide the date so no one asks', 'Round the date to current month'], explanation: 'Automated checks surface freshness clearly and consistently.' },
  { id: 'q4', question: 'To block invalid rates:', answers: ['Use Data Validation with 0–1 (0%–100%) and visual flags', 'Allow any number and fix later', 'Convert all rates to text', 'Hide rates from users'], explanation: 'Validation prevents bad inputs and keeps models reliable.' },
  { id: 'q5', question: 'IF a scenario is missing, the best dashboard behavior is to:', answers: ['Show a friendly message and hold last good state', 'Show zero everywhere', 'Crash the workbook', 'Silently switch to Base'], explanation: 'Never hide problems; show clear status and maintain integrity.' },
  { id: 'q6', question: 'Which KPI set best supports decisions?', answers: ['Margin %, Cash Days, Runway months', 'Row count, Column width, Font size', 'File size, Zoom level, Sheet order', 'Chart color, Border style, Icon set'], explanation: 'Tie KPIs to cash and sustainability for investor relevance.' },
  { id: 'q7', question: 'A stable executive summary should:', answers: ['Update text at thresholds with plain language', 'Use only emojis for speed', 'Be a static text box', 'Explain every formula in detail'], explanation: 'Short, readable guidance at key thresholds supports fast decisions.' },
  { id: 'q8', question: 'Investor‑ready means:', answers: ['Clarity, reliability, and auditability under time pressure', 'Hiding errors to keep charts clean', 'Many hidden tabs with manual steps', 'Only screenshots and no live model'], explanation: 'Fast, trustworthy decisions require visible controls and clean switching.' },
]

export default function Unit01Lesson06Phase5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader
        lesson={lesson06Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              ✅ Phase 5: Assessment — Integration & Dashboard Mastery
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Switching Logic, Chart Linkage, and Decision Framing
            </h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Demonstrate both technical accuracy and applied business judgment.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <ComprehensionCheck
            title="Integration & Dashboard Mastery Check"
            description="Answer all questions. Focus on clarity, reliability, and auditability."
            questions={assessmentQuestions}
            showExplanations={true}
            allowRetry={true}
          />
        </section>

        <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
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
        </section>
      </main>

      <PhaseFooter 
        lesson={lesson06Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  )
}

