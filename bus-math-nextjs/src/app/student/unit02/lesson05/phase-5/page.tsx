import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson05Data, unit02Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[4]

const assessmentQuestions = [
  {
    id: "a1",
    question: "Best pattern to map AccountID to Method with graceful failure?",
    answers: [
      "XLOOKUP with if_not_found and structured references",
      "VLOOKUP approximate match across fixed ranges",
      "INDEX/MATCH without error handling",
      "Manual mapping on the summary page"
    ],
    explanation: "Use XLOOKUP’s if_not_found and Table[Column] references for reliable, readable mapping."
  },
  {
    id: "a2",
    question: "When do you prefer SWITCH over nested IFs?",
    answers: [
      "When matching exact text options for routing logic",
      "When comparing numeric thresholds with < and >",
      "When building a single SUMIF",
      "When formatting the sheet header"
    ],
    explanation: "SWITCH handles exact-option routing with cleaner syntax and fewer errors."
  },
  {
    id: "a3",
    question: "Which validation rule best catches out-of-period rows?",
    answers: [
      "Date NOT between PeriodStart and PeriodEnd flags the row",
      "Date equals today() flags the row",
      "Amount equals zero flags the row",
      "AccountID contains letters flags the row"
    ],
    explanation: "Month-end relies on accurate period boundaries; enforce date windows."
  },
  {
    id: "a4",
    question: "Your total changes after adding 15 rows. What should be true?",
    answers: [
      "No formulas were edited; totals updated automatically via structured references",
      "Several ranges were extended manually",
      "You rebuilt the pivot from scratch",
      "You re-typed two SUM formulas"
    ],
    explanation: "Auto-expansion proves scalable design and saves time."
  },
  {
    id: "a5",
    question: "Which summary proves investor readiness most clearly?",
    answers: [
      "A dashboard showing totals plus an Audit Panel with open issues",
      "A list of raw transactions",
      "A single cell with net income",
      "A color theme update"
    ],
    explanation: "Totals plus visible audit status communicates both results and reliability."
  },
  {
    id: "a6",
    question: "Multi-criteria aggregation approach for complex rules?",
    answers: [
      "SUMPRODUCT with boolean tests across columns",
      "SUM over a fixed range",
      "AVERAGEIFS with text criteria",
      "COUNTBLANK over Map table"
    ],
    explanation: "SUMPRODUCT handles multiple logical conditions when SUMIFS is insufficient."
  },
  {
    id: "a7",
    question: "Which error should be surfaced, not hidden?",
    answers: [
      "Missing AccountID mapping displayed as 'Unknown' with a flag",
      "Temporary calculation delay hidden with IFERROR('')",
      "All flags removed before a demo",
      "Suppressing validation to avoid questions"
    ],
    explanation: "Surface and fix issues; transparency builds trust."
  },
  {
    id: "a8",
    question: "Why document methods and assumptions on-sheet?",
    answers: [
      "Promotes auditability and speeds reviews by mentors/investors",
      "Increases file size only",
      "Makes the sheet colorful",
      "Prevents anyone else from understanding the model"
    ],
    explanation: "Clear documentation is a professional standard and improves collaboration."
  },
  {
    id: "a9",
    question: "Best practice for duplicates in TxnID?",
    answers: [
      "Flag duplicates with a COUNTIF check and link to source",
      "Ignore duplicates to keep the model simple",
      "Delete one duplicate without review",
      "Hide the column"
    ],
    explanation: "Duplicates can distort results; flag and resolve with traceability."
  },
  {
    id: "a10",
    question: "Career connection: which role most relies on these skills?",
    answers: [
      "Financial analyst building month-end automation",
      "Front desk receptionist",
      "Graphic designer",
      "Facilities custodian"
    ],
    explanation: "Analysts and consultants use scenario engines and validation every month-end."
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit02Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              📊 Phase 5: Assessment
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Professional Mastery Assessment</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Show mastery of scenario-driven automation, validation, and investor-ready communication.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <ComprehensionCheck
            title="Advanced Automation Assessment"
            description="Answer technical and applied business questions to demonstrate professional proficiency."
            questions={assessmentQuestions}
            showExplanations={true}
          />

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Performance Standards: Investor-Ready</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>Automation adapts to new rows and categories without edits</li>
                <li>Validation flags are clear, comprehensive, and centralized in an audit panel</li>
                <li>Documentation explains methods and assumptions concisely on-sheet</li>
                <li>Summary page communicates results and reliability to non-technical stakeholders</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}

