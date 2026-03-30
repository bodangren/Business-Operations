import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { BookOpen, AlertCircle } from "lucide-react"
import { lesson05Data, unit01Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[1]

const vocabulary = [
  { 
    id: '1', 
    text: 'Use {blank}(range, criteria, [sum_range]) to sum debits by account', 
    answer: 'SUMIF', 
    hint: 'Adds values in a range that meet a single condition' 
  },
  { 
    id: '2', 
    text: 'Compare total debits and total credits to verify the ledger is {blank}', 
    answer: 'balanced', 
    hint: 'When debits equal credits, the equation is in balance' 
  },
  { 
    id: '3', 
    text: 'Use conditional formatting to create red flags that highlight {blank}', 
    answer: 'errors', 
    hint: 'Color-coding problems makes them visible immediately' 
  },
  { 
    id: '4', 
    text: 'An IF formula can show "Balanced" or "Out of Balance" based on whether {blank} equals credits', 
    answer: 'debits', 
    hint: 'The fundamental check in double-entry bookkeeping' 
  },
  { 
    id: '5', 
    text: 'Document each audit control with a short {blank} explaining what it checks', 
    answer: 'note', 
    hint: 'Helps reviewers understand your reliability design' 
  },
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader
        lesson={lesson05Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              Phase 2: Tool Anatomy — Self-Auditing Formulas
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              SUMIF + Balance Checks + Red Flags = Reliability
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Today you'll learn the formula patterns that catch errors automatically. 
              These controls prove Sarah's ledger is trustworthy to investors.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-4">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Formula 1: SUMIF for Account Totals
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 space-y-3 text-sm leading-relaxed">
              <p>
                <strong>Purpose:</strong> Calculate total debits and credits for each account without manual addition.
              </p>
              <p>
                <strong>Syntax:</strong> <code>=SUMIF(range, criteria, [sum_range])</code>
              </p>
              <p>
                <strong>Example for Cash Debits:</strong> <code>=SUMIF(LedgerTable[Account], "Cash", LedgerTable[Debit])</code>
              </p>
              <p>
                <strong>Example for Cash Credits:</strong> <code>=SUMIF(LedgerTable[Account], "Cash", LedgerTable[Credit])</code>
              </p>
              <p>
                <strong>What it does:</strong> Sums all debit amounts where the account is "Cash". Repeat for credits.
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Formula 2: Trial Balance Check
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900 space-y-3 text-sm leading-relaxed">
              <p>
                <strong>Purpose:</strong> Verify that total debits equal total credits across all accounts.
              </p>
              <p>
                <strong>Step 1:</strong> Calculate total debits: <code>=SUM(LedgerTable[Debit])</code>
              </p>
              <p>
                <strong>Step 2:</strong> Calculate total credits: <code>=SUM(LedgerTable[Credit])</code>
              </p>
              <p>
                <strong>Step 3:</strong> Compare: <code>=IF(total_debits = total_credits, "Balanced", "Out of Balance")</code>
              </p>
              <p>
                <strong>What it does:</strong> Shows "Balanced" if debits equal credits, or "Out of Balance" if they don't.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Formula 3: Red Flags with Conditional Formatting
              </CardTitle>
            </CardHeader>
            <CardContent className="text-orange-900 space-y-3 text-sm leading-relaxed">
              <p>
                <strong>Purpose:</strong> Color-code errors so Sarah spots them immediately.
              </p>
              <p>
                <strong>Flag 1: Out-of-balance trial balance</strong><br/>
                Apply rule: <code>="Out of Balance"</code> → format with red background and bold text
              </p>
              <p>
                <strong>Flag 2: Negative balances (if not allowed)</strong><br/>
                Apply rule: <code>&lt;0</code> → format with red text
              </p>
              <p>
                <strong>Flag 3: Blank or missing values</strong><br/>
                Apply rule: <code>=""</code> → format with yellow background
              </p>
              <p>
                <strong>What it does:</strong> Makes problems visible without manual scanning.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Common Failure Mode: Why Formulas Break
              </CardTitle>
            </CardHeader>
            <CardContent className="text-red-900 text-sm space-y-2">
              <p>
                <strong>Problem:</strong> Formulas stop working when new rows are added to the table.
              </p>
              <p>
                <strong>Cause:</strong> You used fixed ranges like A2:A100 instead of table column references.
              </p>
              <p>
                <strong>Fix:</strong> Always use structured references like <code>LedgerTable[Debit]</code>. 
                These automatically expand when new rows are added to the table.
              </p>
              <p>
                <strong>Remember:</strong> Structured references = formulas that grow with your business.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto">
          <FillInTheBlank
            sentences={vocabulary}
            title="Vocabulary Check: Self-Auditing Formula Terms"
            description="Fill in the key terms used to build reliable, automated checks."
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />
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
