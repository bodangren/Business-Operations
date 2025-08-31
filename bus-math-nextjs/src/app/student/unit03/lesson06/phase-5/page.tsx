import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"
import { lesson06Data, unit03Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[4]

const assessmentQuestions = [
  {
    id: "a1",
    question: "Best practice for switching Base/Stretch/Downside safely:",
    answers: [
      'XLOOKUP([@Scenario], Driver[Name], Driver[Value], "Missing") with IFNA',
      'VLOOKUP([@Scenario], Driver, 2, TRUE) for flexibility',
      'INDEX(Driver[Value], MATCH([@Scenario], Driver[Name], 1))',
      'Manual copy/paste driver values into each sheet'
    ],
    explanation: "Exact‑match with an if_not_found fallback avoids wrong matches and #N/A during demos."
  },
  {
    id: "a2",
    question: "To keep charts stable as data grows, link them to:",
    answers: [
      'Excel Tables and structured references',
      'Fixed ranges ($B$2:$B$50)',
      'Hidden named ranges with fixed rows',
      'A separate workbook with pasted values'
    ],
    explanation: "Tables auto‑expand and keep visuals accurate under new rows."
  },
  {
    id: "a3",
    question: "Which validation is most important for investor trust?",
    answers: [
      'A=L+E tie, NI→RE rollforward, and cash reconciliation flags',
      'Conditional coloring of headings only',
      'A long formula note on a hidden tab',
      'Emailing the workbook for review later'
    ],
    explanation: "Visible, automatic checks prove the model ties and updates correctly."
  },
  {
    id: "a4",
    question: "When scenario name is misspelled, your model should:",
    answers: [
      'Show a friendly message using IFNA/IFERROR and keep charts stable',
      'Return #N/A throughout the dashboard',
      'Silently switch to Base assumptions',
      'Freeze calculation until corrected'
    ],
    explanation: "Graceful handling prevents confusion and preserves trust during live demos."
  },
  {
    id: "a5",
    question: "KPI choices for decision‑readiness should emphasize:",
    answers: [
      'Runway, margin, current ratio, cash coverage',
      'All ratios available in textbooks',
      'Only profit, because it looks good',
      'Advanced volatility metrics unrelated to the business'
    ],
    explanation: "Choose indicators that directly influence go/no‑go decisions."
  },
  {
    id: "a6",
    question: "Which is a common integration mistake?",
    answers: [
      'Charts referencing static ranges',
      'Using named ranges for clarity',
      'Showing validation badges on the dashboard',
      'Using exact‑match lookups'
    ],
    explanation: "Static ranges go stale and break visuals."
  },
  {
    id: "a7",
    question: "To improve auditability, you should:",
    answers: [
      'Name critical inputs/outputs and keep formulas readable',
      'Hide all intermediate calculations',
      'Use one mega‑formula for the whole model',
      'Delete comments and headers'
    ],
    explanation: "Named ranges and clear structure help others review quickly."
  },
  {
    id: "a8",
    question: "A dashboard that is investor‑ready shows:",
    answers: [
      'Clarity, reliability, and auditability in one page',
      'A separate sheet for each metric',
      'Hidden macros that run behind the scenes',
      'Only a single big number without context'
    ],
    explanation: "One page that updates live and proves correctness earns trust."
  }
]

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

