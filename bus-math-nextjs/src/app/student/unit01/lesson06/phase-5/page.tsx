import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Award, Briefcase, Users } from "lucide-react"
import { lesson06Data, unit01Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[4]

const assessmentQuestions = [
  {
    id: "status-formula",
    question: "Which formula correctly shows 'Balanced' when Difference is 0 and 'Review Needed' otherwise?",
    answers: [
      "=IF(Difference=0, \"Balanced\", \"Review Needed\")",
      "=IF(Difference=0, \"Review Needed\", \"Balanced\")",
      "=Difference=0",
      "=IF(Difference, \"Balanced\", \"Review Needed\")"
    ],
    explanation: "The IF function checks if Difference equals 0. If true, it returns \"Balanced\"; if false, it returns \"Review Needed\"."
  },
  {
    id: "evidence-chain",
    question: "What is the primary purpose of the evidence chain section?",
    answers: [
      "To explain why investors can trust the numbers without auditing every transaction",
      "To list every formula in the workbook",
      "To show off advanced Excel skills",
      "To make the summary sheet longer"
    ],
    explanation: "The evidence chain builds trust by explaining what the workbook proves, how it proves it, and where the data comes from."
  },
  {
    id: "conditional-formatting",
    question: "When should a status cell be red?",
    answers: [
      "When debits do not equal credits or there are errors in the check column",
      "Always, to look professional",
      "When everything is perfect",
      "Only when the workbook is saved"
    ],
    explanation: "Red signals an issue that needs attention. Use it when the balance is off or errors are detected."
  }
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
              ✅ Phase 5: Assessment — Audit and Defend Your Workbook
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Technical Check and Workbook Defense
            </h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              First, complete a quick technical check. Then, prepare a brief defense of your workbook as if you were presenting to an investor.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <ComprehensionCheck
            title="Technical Check"
            description="Answer these questions to verify your understanding of the summary layer mechanics."
            questions={assessmentQuestions}
            showExplanations={true}
            allowRetry={true}
          />
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Workbook Defense Task
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900 space-y-3 leading-relaxed">
              <p className="font-semibold">Prepare a 60-second explanation of your workbook.</p>
              <p>With a partner, take turns presenting your summary sheet. Use this structure:</p>
              <ol className="list-decimal list-inside space-y-2 text-base">
                <li>
                  <strong>Status (10 seconds)</strong>: "The ledger is [Balanced/Review Needed] with total debits and credits of [amount]."
                </li>
                <li>
                  <strong>Evidence (25 seconds)</strong>: "Here's how I know it's accurate: [evidence chain points]."
                </li>
                <li>
                  <strong>Next Steps (15 seconds)</strong>: "If there are issues, I'll [specific action]. If everything is good, [next step]."
                </li>
                <li>
                  <strong>Trust Signal (10 seconds)</strong>: "You can verify this yourself by checking [specific cell/sheet]."
                </li>
              </ol>
              <div className="bg-purple-100 border border-purple-200 rounded p-3 mt-3">
                <p className="font-semibold">Example:</p>
                <p className="text-sm mt-1">
                  "The ledger is balanced with total debits and credits of $12,500. Here's how I know it's accurate: the trial balance matches,
                  every transaction's check column shows 0, and all error flags are clear. If there were issues, I'd review the red-flagged transactions.
                  You can verify this yourself by checking the Summary sheet status cells and the Trial Balance sheet."
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-900 flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Performance Standards
                </CardTitle>
              </CardHeader>
              <CardContent className="text-green-900 text-sm">
                Investor-ready summaries present one place to check status, clear evidence of accuracy, and plain-language explanations that build trust.
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
                Accountants and financial analysts build summary dashboards to communicate reliability. Your ability to defend your work maps directly to client and investor presentations.
              </CardContent>
            </Card>
          </div>
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
