import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Award, FileText, Briefcase } from "lucide-react"
import { lesson05Data, unit01Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[4]

const assessmentQuestions = [
  {
    id: "q1",
    question: "What does the formula =SUMIF(LedgerTable[Account], \"Cash\", Ledger LedgerTable[Debit]) calculate?",
    answers: [
      "Total debit amounts for all transactions where the account is Cash",
      "The total of all debits in the ledger",
      "The balance of the Cash account",
      "The total credits for the Cash account"
    ],
    explanation: "SUMIF sums values in one range (Debit) that match a criteria (Account = 'Cash')."
  },
  {
    id: "q2",
    question: "Sarah adds a new transaction to her ledger. What happens if she used structured references in her formulas?",
    answers: [
      "Formulas automatically include the new transaction in totals",
      "She needs to manually update all formula ranges",
      "Formulas break until she recreates them",
      "Only the trial balance updates automatically"
    ],
    explanation: "Structured references (LedgerTable[Column]) automatically expand when new rows are added to the table."
  },
  {
    id: "q3",
    question: "A trial balance that shows 'Balanced' proves what about Sarah's ledger?",
    answers: [
      "Total debits equal total credits across all accounts",
      "All account balances are positive",
      "No transactions were entered incorrectly",
      "The ledger is ready for tax filing"
    ],
    explanation: "Trial balance verifies the accounting equation (Assets = Liabilities + Equity) by checking debits equal credits."
  },
  {
    id: "q4",
    question: "Why is conditional formatting that highlights 'Out of Balance' important for Sarah?",
    answers: [
      "It makes problems visible immediately without manual scanning",
      "It automatically fixes errors in the ledger",
      "It prevents users from entering new transactions",
      "It's required for Excel to calculate totals"
    ],
    explanation: "Red flags bring attention to errors instantly, preventing mistakes from going unnoticed and causing problems later."
  },
  {
    id: "q5",
    question: "Which audit check would matter most to an investor reviewing Sarah's ledger?",
    answers: [
      "Trial balance verification that debits equal credits",
      "Pretty formatting and colors on the spreadsheet",
      "Number of transactions entered per month",
      " alphabetical sorting of account names"
    ],
    explanation: "Investors care about reliability—proof that the ledger is mathematically accurate and error-checked."
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader
        lesson={lesson05Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              Phase 5: Audit and Explain — Prove Your Ledger Is Reliable
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Technical Check + Explain Which Control Matters Most
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Demonstrate your understanding of self-auditing formulas and explain why they 
              matter for Sarah's investor presentation.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <ComprehensionCheck
            title="Technical Check: Self-Auditing Formula Mastery"
            description="Answer all questions to show you understand how Sarah's ledger catches errors automatically."
            questions={assessmentQuestions}
            showExplanations={true}
            allowRetry={true}
          />
        </section>

        <section className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Brief Artifact Task: Which Check Matters Most?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 space-y-4">
              <p className="text-sm">
                <strong>Task:</strong> Write a 2-3 sentence explanation for an investor audience. 
                Answer this question:
              </p>
              
              <div className="bg-white p-4 rounded border border-blue-200">
                <p className="font-semibold text-blue-900 mb-2">
                  "Which self-audit control in Sarah's ledger matters most for proving reliability to investors, and why?"
                </p>
              </div>

              <div className="mt-4 space-y-3">
                <h4 className="text-sm font-semibold text-blue-900">Example Answer Structure:</h4>
                <p className="text-sm text-blue-800 bg-blue-100 p-3 rounded">
                  "The trial balance verification matters most because it proves that Sarah's ledger 
                  follows double-entry bookkeeping rules—total debits always equal total credits. 
                  This mathematical proof gives investors confidence that the financial data is 
                  accurate before they make investment decisions."
                </p>
              </div>

              <div className="mt-4 bg-yellow-50 p-4 rounded border border-yellow-200">
                <p className="text-sm text-yellow-900">
                  <strong>Key Point:</strong> Focus on reliability and investor trust. Explain how 
                  the control catches errors—don't just describe the formula syntax. Investors 
                  care about risk reduction, not Excel mechanics.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <Award className="h-5 w-5" />
                Proficiency Standards
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 text-sm">
              Investor-ready means your workbook has automated checks that verify accuracy, 
              surface errors clearly, and are documented so reviewers understand your design choices.
            </CardContent>
          </Card>
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Career Connection
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900 text-sm">
              Financial analysts build automated verification systems every day. The habits you 
              practice—structured references, conditional formatting, documentation—map directly 
              to professional workflows where accuracy and auditability are essential.
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
