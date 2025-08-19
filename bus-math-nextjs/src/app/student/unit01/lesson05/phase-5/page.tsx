import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Award, Briefcase } from "lucide-react"
import { lesson05Data, unit01Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[4]

const assessmentQuestions = [
  { id: 'q1', question: 'Which formula best maps AccountID to AccountName with a friendly error?', answers: ['IFERROR(XLOOKUP([@AccountID], Accounts[AccountID], Accounts[AccountName], "Missing ID"), "Missing ID")', 'VLOOKUP([@AccountID], Accounts, 2, FALSE)', 'INDEX(Accounts[AccountName], MATCH([@AccountID], Accounts[AccountID], 0))', 'IFNA(VLOOKUP([@AccountID], Accounts, 2, FALSE), "")'], explanation: 'XLOOKUP with IFERROR provides clear handling and structured references.' },
  { id: 'q2', question: 'To detect an out-of-balance trial balance, compare:', answers: ['SUM(Transactions[Debit]) vs SUM(Transactions[Credit])', 'COUNT(Transactions[Debit]) vs COUNT(Transactions[Credit])', 'MAX(Debit) vs MAX(Credit)', 'AVERAGE(Debit) vs AVERAGE(Credit)'], explanation: 'Total debits must equal total credits in double-entry accounting.' },
  { id: 'q3', question: 'Why use Tables and structured references?', answers: ['Formulas expand to new rows automatically', 'They calculate faster than all functions', 'They remove the need for validation', 'They hide errors more easily'], explanation: 'Tables keep ranges dynamic and reduce maintenance risk.' },
  { id: 'q4', question: 'Which is a strong Data Validation rule for amounts?', answers: ['Allow whole numbers or decimals greater than or equal to 0', 'Allow any number', 'Block all numbers over 1000', 'Allow negative numbers to catch refunds'], explanation: 'Negative entries should be handled via proper Debit/Credit columns, not negative amounts.' },
  { id: 'q5', question: 'Best way to switch Cash vs Accrual?', answers: ['Use a single Settings[Method] cell and IF logic', 'Duplicate sheets: one for Cash, one for Accrual', 'Manual find/replace in formulas', 'No need—methods always match'], explanation: 'Central toggles avoid breaking formulas and improve clarity.' },
  { id: 'q6', question: 'A missing AccountID should:', answers: ['Trigger a visible warning and exclude from final totals', 'Be ignored until month-end', 'Be filled with a guessed value', 'Be hidden using white font color'], explanation: 'Never hide problems; surface them early and block silent errors.' },
  { id: 'q7', question: 'Which SUMIFS pattern checks posting per account?', answers: ['SUMIFS(Transactions[Debit], Transactions[AccountID], [@AccountID]) - SUMIFS(Transactions[Credit], Transactions[AccountID], [@AccountID])', 'SUMIF(Transactions[Debit], [@AccountID])', 'COUNTIF(Transactions[AccountID], [@AccountID])', 'SUMPRODUCT(Transactions[Debit])'], explanation: 'Compare debit and credit totals per account; difference should be zero.' },
  { id: 'q8', question: 'Which statement reflects investor-readiness?', answers: ['Controls are documented and tested with edge cases', 'Formulas are hidden to prevent copying', 'Totals are updated manually each week', 'Errors are suppressed to keep dashboards clean'], explanation: 'Documentation and testing build stakeholder trust.' },
  { id: 'q9', question: 'Stale dates should be flagged by:', answers: ['Conditional formatting + comparison to TODAY()', 'Hiding the date column', 'Manually scanning for old dates', 'Rounding dates to current month'], explanation: 'Automated visual checks prevent outdated postings.' },
  { id: 'q10', question: 'What belongs in audit notes next to a control?', answers: ['Purpose, logic reference, and expected result', 'Color name used in formatting', 'The author’s initials only', 'A motivational quote'], explanation: 'Short documentation accelerates reviews and reduces future errors.' },
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
              📊 Phase 5: Assessment — Professional Mastery
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Advanced Automation and Business Judgment
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Demonstrate technical skill and explain decisions that matter to investors.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto">
          <ComprehensionCheck
            title="Investor-Ready Ledger Assessment"
            description="Answer all questions. Focus on reliability, clarity, and auditability."
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
                Proficiency Standards
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 text-sm">
              Investor-ready means your model updates dynamically, surfaces errors clearly, and
              includes brief documentation beside each control. A reviewer can follow your logic
              without guessing.
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
              Analysts and consultants build automated checks every day. The habits you practice
              here—structured references, validation, documentation—map directly to professional
              workflows in finance and operations.
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

