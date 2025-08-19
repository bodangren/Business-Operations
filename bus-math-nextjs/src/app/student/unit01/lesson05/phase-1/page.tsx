import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Users, AlertTriangle, Shield, Zap } from "lucide-react"
import { lesson05Data, unit01Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[0]

const hookQuestions = [
  {
    id: "q1",
    question: "A client payment is posted with a missing AccountID. What should a robust model do?",
    answers: [
      "Flag the missing ID and prevent totals from updating silently",
      "Ignore the row and keep totals unchanged",
      "Guess the account based on description text",
      "Hide the error to keep the sheet clean"
    ],
    explanation: "Investor-ready models surface problems clearly and never hide data issues."
  },
  {
    id: "q2",
    question: "Sarah switches from cash to accrual view. What should change?",
    answers: [
      "Recognition timing updates dynamically without breaking formulas",
      "Only chart colors change",
      "Nothing changes—method doesn't affect totals",
      "The workbook requires manual copy-paste updates"
    ],
    explanation: "Dynamic method switching is a hallmark of professional automation."
  },
  {
    id: "q3",
    question: "Debit and credit totals disagree by $125. The right behavior is to:",
    answers: [
      "Show a visible Out-of-Balance warning and isolate the issue",
      "Round totals to make them match",
      "Delete the last row to reset the error",
      "Export to PDF to lock the numbers"
    ],
    explanation: "A self-auditing ledger must highlight imbalances and help trace the cause."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader
        lesson={lesson05Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              🎯 Phase 1: Hook — Sarah’s Advanced Automation Stress Test
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Fragile vs. Robust: Can Sarah’s Ledger Survive Growth?
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Sarah’s TechStart Solutions is growing fast. New invoices, partial payments, and
              refunds hit her books every week. A fragile spreadsheet breaks under this stress.
              A robust, self-auditing model adapts and keeps investor trust.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="border-red-200 bg-white">
            <CardHeader>
              <CardTitle className="text-red-700 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Fragile Build (Before)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-red-800 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Hard-coded totals that ignore new rows</li>
                <li>No warning for missing AccountIDs</li>
                <li>Manual method switching (cash vs. accrual)</li>
                <li>Out-of-balance errors go unnoticed</li>
                <li>Hidden mistakes damage investor confidence</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-white">
            <CardHeader>
              <CardTitle className="text-green-700 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Robust Build (After)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-green-800 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Structured references update with new rows</li>
                <li>XLOOKUP + IFERROR flags missing IDs</li>
                <li>Dynamic method switch with clear labels</li>
                <li>Trial balance control shows balance status</li>
                <li>Professional documentation and audit trail</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto">
          <ComprehensionCheck
            title="Diagnostic: Advanced Automation Readiness"
            description="Predict how a professional ledger should behave under stress."
            questions={hookQuestions}
            showExplanations={true}
            allowRetry={true}
          />
        </section>

        <section className="max-w-4xl mx-auto">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk: Risk and Investor Trust
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-800 space-y-2">
              <p>
                Sarah just learned her totals were off by $125 for two weeks. Discuss with a partner:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>What business risks does this create?</li>
                <li>What would convince an investor that her model is reliable?</li>
                <li>Which safeguard would you build first, and why?</li>
              </ul>
              <div className="mt-3 p-3 bg-purple-100 rounded border border-purple-200 text-sm">
                <strong className="mr-1">Goal:</strong> Name one control that prevents silent errors and
                one control that speeds up reviews.
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Zap className="h-5 w-5" />
                Why This Matters
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-800">
              A self-auditing ledger protects cash flow, prevents tax mistakes, and builds investor
              confidence. Automation reduces closing time and frees Sarah to focus on clients.
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        lesson={lesson05Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}

