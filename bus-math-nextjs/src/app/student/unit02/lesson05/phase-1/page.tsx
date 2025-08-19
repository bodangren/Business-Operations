import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Users, ShieldCheck } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson05Data, unit02Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[0]

const hookQuestions = [
  {
    id: "h1",
    question: "Sarah adds a new revenue type and rows; which design best survives growth without breaking formulas?",
    answers: [
      "Tables with structured references + XLOOKUP mapping + SWITCH for method selection",
      "Fixed ranges like A2:A200 and nested IFs hard-coded for each category",
      "Copy/paste totals to a summary sheet after each month",
      "Turn off calculation to prevent errors during entry"
    ],
    explanation: "Structured references auto-expand; XLOOKUP maps accounts to methods; SWITCH routes logic cleanly as data grows."
  },
  {
    id: "h2",
    question: "An investor asks: ‘How do you know your month-end numbers are reliable?’ What proves professionalism?",
    answers: [
      "Documented validation rules with visible audit flags and error handling",
      "One big formula on the summary page that ‘seems to work’",
      "Manual spot checks of random rows when there’s time",
      "Emailing the spreadsheet to a friend for a quick look"
    ],
    explanation: "Reliable models include validation rules, clear error flags, and graceful handling of missing/invalid data."
  },
  {
    id: "h3",
    question: "Which XLOOKUP pattern reduces #N/A risk when mapping AccountID to Method?",
    answers: [
      '=XLOOKUP([@AccountID], Map[AccountID], Map[Method], "Unknown")',
      '=XLOOKUP([@AccountID], Map[AccountID], Map[Method])',
      '=VLOOKUP([@AccountID], Map, 2, TRUE)',
      '=INDEX(Map[Method], MATCH([@AccountID], Map[AccountID], 0))'
    ],
    explanation: "Use if_not_found to handle missing keys; table references keep ranges dynamic and readable."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit02Data}
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
            <h1 className="text-3xl font-bold text-gray-900">Sarah’s Scenario Engine Stress Test</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how fragile models break when the business grows—and how a scenario-driven month-end engine with XLOOKUP, SWITCH, and validation protects investor trust.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Before: Fragile Month-End
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-red-900">
              <div className="bg-red-100 p-3 rounded font-mono text-sm">
                =SUM(C2:C200)  // breaks when new rows are added
                <br />
                =IF(B2="Accrual", C2, IF(B2="Deferral", -C2, 0))
                <br />
                =VLOOKUP(A2, Map!A:B, 2, TRUE) // wrong matches when sorted
              </div>
              <ul className="list-disc list-inside text-red-800 text-sm">
                <li>Fixed ranges miss new transactions</li>
                <li>Brittle nested IFs collapse as categories grow</li>
                <li>Approximate match returns wrong methods</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                After: Robust Scenario Engine
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-green-900">
              <div className="bg-green-100 p-3 rounded font-mono text-sm">
                =SUM(TransactionTable[Amount])
                <br />
                =XLOOKUP([@AccountID], Map[AccountID], Map[Method], "Unknown")
                <br />
                =SWITCH([@Method], "Accrual", [@Amount], "Deferral", -[@Amount], 0)
              </div>
              <ul className="list-disc list-inside text-green-800 text-sm">
                <li>Structured references auto-expand with new rows</li>
                <li>Safe mapping with if_not_found guards</li>
                <li>Readable SWITCH logic for method routing</li>
              </ul>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Diagnostic: Can this model scale?"
            description="Predict which patterns survive growth and build investor trust."
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
                <li>How would a fragile design hurt investor confidence?</li>
                <li>Where should validation flags appear so problems are impossible to miss?</li>
                <li>What would you show on a one-page summary to prove reliability?</li>
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
