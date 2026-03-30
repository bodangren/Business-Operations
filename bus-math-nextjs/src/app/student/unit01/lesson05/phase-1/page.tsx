import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { AlertTriangle, Shield, TrendingUp } from "lucide-react"
import { lesson05Data, unit01Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[0]

const hookQuestions = [
  {
    id: "q1",
    question: "Sarah discovers a debit entry of $500 is missing from her Cash account. What should a self-auditing ledger do?",
    answers: [
      "Flag the imbalance automatically and show exactly which accounts don't match",
      "Wait for a human to notice during year-end audit",
      "Ignore it and assume it will fix itself",
      "Show a generic error without identifying the problem"
    ],
    explanation: "Self-auditing ledgers catch errors immediately, preventing them from growing into costly problems."
  },
  {
    id: "q2",
    question: "An investor asks Sarah to prove her books are accurate. What demonstrates reliability most convincingly?",
    answers: [
      "Formulas that verify debits equal credits and highlight any discrepancies in real time",
      "A spreadsheet with no visible error messages",
      "Printing the ledger and showing it looks neat",
      "Stating that she checks it manually each month"
    ],
    explanation: "Automated verification is objective, transparent, and builds investor confidence."
  },
  {
    id: "q3",
    question: "Sarah's trial balance shows total debits of $45,200 and total credits of $45,325. What's the most important action?",
    answers: [
      "Find and correct the $125 error immediately before using any totals for decisions",
      "Round both totals to $45,000 and continue",
      "Ignore the small difference since it's less than 1%",
      "Copy the ledger to a new file to start fresh"
    ],
    explanation: "Even small errors compound over time and undermine trust in the financial system."
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
              Phase 1: Why Self-Auditing Formulas Matter
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Can Sarah Prove Her Books Are Accurate to an Investor?
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Sarah needs to convince a potential investor that TechStart Solutions keeps clean books.
              Manual checks aren't enough—she needs formulas that automatically catch errors and 
              verify her ledger is trustworthy.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="border-red-200 bg-white">
            <CardHeader>
              <CardTitle className="text-red-700 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Manual Ledger Risk
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-red-800 space-y-2">
              <ul className="list-disc list list-inside space-y-1">
                <li>Posting errors go unnoticed until a formal audit</li>
                <li>Trial balance might not tie out—nobody knows</li>
                <li>Investors see risk, not reliability</li>
                <li>Time wasted hunting for mistakes after they cause problems</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-white">
            <CardHeader>
              <CardTitle className="text-green-700 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Self-Auditing Advantage
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-green-800 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Formulas verify debits equal credits automatically</li>
                <li>Red flags highlight problems the moment they appear</li>
                <li>Investors see built-in controls and trust</li>
                <li>Errors caught early—before they affect decisions</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">
                Connecting to Your Workbook from Lesson 04
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900">
              <p className="text-sm mb-2">
                You built Sarah's professional Excel Table in Lesson 04. Today you'll add the 
                self-auditing formulas that make that table powerful and trustworthy.
              </p>
              <p className="text-sm">
                Think of your Lesson 04 table as the <strong>structure</strong>. Today you're building 
                the <strong>checks</strong> that prove the structure works correctly.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto">
          <ComprehensionCheck
            title="Quick Check: How Self-Auditing Helps Sarah"
            description="Think about what happens when things go wrong in Sarah's ledger."
            questions={hookQuestions}
            showExplanations={true}
            allowRetry={true}
          />
        </section>

        <section className="max-w-4xl mx-auto">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Why This Matters for Sarah's Investor Pitch
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-800 space-y-2">
              <p className="text-sm">
                When Sarah presents to investors, she'll show more than a list of transactions. 
                She'll demonstrate:
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Formulas that prove debits equal credits in real time</li>
                <li>Red flags that surface errors before reports are sent</li>
                <li>Documentation explaining each control and why it matters</li>
              </ul>
              <p className="text-sm mt-2">
                These aren't nice-to-have features—they're essential for proving Sarah's financial 
                systems are professional, reliable, and investor-ready.
              </p>
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
