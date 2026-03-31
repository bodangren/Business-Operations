import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { AlertTriangle, Clock, TrendingUp, Users } from "lucide-react"
import { lesson06Data, unit01Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[0]

const hookQuestions = [
  {
    id: "q1",
    question: "An investor asks Sarah: 'How do you know your books are accurate?' What makes the strongest impression?",
    answers: [
      "A clean summary layer showing debits equal credits, all error checks pass, and a clear evidence trail",
      "A detailed explanation of every SUMIF formula used",
      "A promise that she checked everything manually yesterday",
      "A printout of all 50 transactions for the investor to verify"
    ],
    explanation: "Investors want to trust your system, not audit it personally. A clean summary with visible error checks proves reliability quickly."
  },
  {
    id: "q2",
    question: "Sarah's trial balance shows debits equal credits ($10,000), but the summary says 'Review Needed' because several Check column cells are red. What should she tell the investor?",
    answers: [
      "'The totals balance, but I've identified three specific accounts that need review and correction.'",
      "'Everything is perfect—debits equal credits.'",
      "'I don't know what the red cells mean, but the numbers look right.'",
      "'I'll need to re-enter all transactions to make sure.'"
    ],
    explanation: "Professional transparency builds trust. Admit what works and what needs attention—don't hide problems."
  },
  {
    id: "q3",
    question: "Why is plain language important on an investor-facing summary?",
    answers: [
      "Investors may not know accounting terms—they need clear status and next steps in plain words",
      "Using technical jargon makes the workbook look more professional",
      "Plain language is only needed for internal team documents",
      "The summary is just for Sarah's reference, not for investors"
    ],
    explanation: "Your workbook speaks to the audience. Use plain language to communicate status, risks, and actions clearly."
  }
]

export default function Unit01Lesson06Phase1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader
        lesson={lesson06Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              ⏰ Phase 1: Hook — 2 Minutes to Prove Reliability
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              From Working Ledger to Investor-Ready Summary
            </h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Sarah Chen sits down with a potential investor. Her ledger is accurate and her error
              checks catch mistakes, but the presentation is messy. The investor asks: <strong>"How do you know
              your books are clean?"</strong> Sarah has 2 minutes to prove reliability.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto grid gap-6">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                The Pressure Test
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-red-900 space-y-3">
              <p>
                Sarah needs to show that her accounting system is trustworthy. The investor doesn't want to
                audit 50 transactions—they want to see:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>A clear status</strong> — Are the books balanced or not?</li>
                <li><strong>Visible safeguards</strong> — What error checks are in place?</li>
                <li><strong>Plain language</strong> — What does this mean for the business?</li>
                <li><strong>Next steps</strong> — What action should be taken?</li>
              </ul>
              <div className="bg-white border border-red-200 rounded p-3 mt-3">
                <p className="font-semibold text-red-800">The Problem</p>
                <p className="mt-1">
                  Sarah's current workbook has all the right formulas, but there's no summary layer.
                  She has to scroll through multiple sheets to answer basic questions. Under time pressure,
                  this looks disorganized and raises doubts.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Before vs After
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-amber-900 space-y-2">
              <div className="bg-white border border-amber-200 rounded p-3 space-y-2">
                <p className="font-semibold">Before: Scattered, Technical</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Debits = Credits hidden in Trial Balance sheet</li>
                  <li>Error checks only visible on specific tabs</li>
                  <li>Formulas exposed but status unclear</li>
                  <li>No single view for quick assessment</li>
                </ul>
              </div>
              <div className="bg-white border border-amber-200 rounded p-3 space-y-2">
                <p className="font-semibold">After: Clear, Investor-Ready</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Dedicated Summary sheet with key metrics</li>
                  <li>Visual status indicators (green/red/yellow)</li>
                  <li>Plain language explanations</li>
                  <li>Evidence chain visible in one place</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Why This Matters
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-blue-900">
              <p>
                Professional accounting systems don't just calculate correctly—they communicate
                reliability. Investors, auditors, and stakeholders need to trust your books without
                digging into the details. Today you'll build that trust signal.
              </p>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardContent>
              <ComprehensionCheck
                title="Quick Comprehension Check"
                description="Think through what makes an investor-facing summary trustworthy."
                questions={hookQuestions}
                showExplanations={true}
                allowRetry={true}
              />
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Think-Pair-Share
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900 text-sm space-y-2">
              <p>
                With a partner, discuss: What three pieces of information would you put on a one-page
                summary to prove your ledger is trustworthy?
              </p>
              <p className="mt-2">
                Be ready to share one idea with the class.
              </p>
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
