import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Users, ShieldCheck } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson05Data, unit03Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[0]

const hookQuestions = [
  {
    id: "u3h1",
    question: "Which pattern best survives new rows and account changes across all three statements?",
    answers: [
      "Tables + structured references with XLOOKUP/SUMIFS mapping",
      "Fixed ranges (A2:A200) with nested IFs and VLOOKUP",
      "Copy/paste monthly totals to each statement",
      "Turn off automatic calculation while editing"
    ],
    explanation: "Structured references auto‑expand and keep formulas readable; XLOOKUP/SUMIFS map accounts and rollups reliably."
  },
  {
    id: "u3h2",
    question: "An investor asks: ‘How do you know A = L + E still ties when data grows?’ What proves reliability?",
    answers: [
      "Visible audit flags with balance checks and cash reconciliation",
      "Manual spot checks after each change",
      "One giant formula that seems to work",
      "Emailing the workbook for a second opinion"
    ],
    explanation: "Professional models surface validation results (tie checks, retained earnings roll‑forward, cash ties) every refresh."
  },
  {
    id: "u3h3",
    question: "Which XLOOKUP pattern reduces #N/A when mapping AccountID → StatementLine?",
    answers: [
      '=XLOOKUP([@AccountID], Map[AccountID], Map[StatementLine], "Unknown")',
      '=XLOOKUP([@AccountID], Map[AccountID], Map[StatementLine])',
      '=VLOOKUP([@AccountID], Map, 2, TRUE)',
      '=INDEX(Map[StatementLine], MATCH([@AccountID], Map[AccountID], 0))'
    ],
    explanation: "Use if_not_found to guard missing keys; table references keep ranges dynamic and clear."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit03Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              🎯 Phase 1: Hook
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Sarah’s Three‑Statement Link Engine Stress Test</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how fragile models break when TechStart adds new accounts—and how a link engine with
              structured references, XLOOKUP, and SUMIFS protects investor trust at scale.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Before: Fragile Links
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-red-900">
              <div className="bg-red-100 p-3 rounded font-mono text-sm">
                =SUM(C2:C200)  // misses new rows<br />
                =VLOOKUP(A2, Map!A:B, 2, TRUE) // wrong matches<br />
                =IF(B2="COGS", -C2, C2) // brittle category logic
              </div>
              <ul className="list-disc list-inside text-red-800 text-sm">
                <li>Fixed ranges miss new transactions</li>
                <li>Approximate matches return wrong lines</li>
                <li>Nested IFs collapse as categories grow</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                After: Robust Link Engine
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-green-900">
              <div className="bg-green-100 p-3 rounded font-mono text-sm">
                =SUM(TransactionTable[Amount])<br />
                =XLOOKUP([@AccountID], Map[AccountID], Map[StatementLine], "Unknown")<br />
                =SUMIFS(TransactionTable[Amount], TransactionTable[StatementLine], "Revenue")
              </div>
              <ul className="list-disc list-inside text-green-800 text-sm">
                <li>Tables auto‑expand with new rows</li>
                <li>Safe mapping with if_not_found guards</li>
                <li>Clear rollups via SUMIFS for each statement</li>
              </ul>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Diagnostic: Will it scale and stay tied?"
            description="Predict which patterns protect A=L+E and cash reconciliation as data grows."
            questions={hookQuestions}
            showExplanations={true}
          />

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-800 mb-2 font-medium">Discussion Prompt (3 minutes):</p>
              <ul className="list-disc list-inside space-y-1 text-purple-800">
                <li>How does a fragile link break investor confidence?</li>
                <li>Which audit flags would make issues impossible to miss?</li>
                <li>What one‑page summary would you show to prove the model’s reliability?</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit03Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}

