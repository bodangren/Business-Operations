import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson05Data, unit05Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[0]

const hookQuestions = [
  {
    id: "u5h1",
    question: "Sarah adds 5 new employees and 2 new pay codes. Which setup best survives the change?",
    answers: [
      "Tables + structured references with XLOOKUP and SUMPRODUCT",
      "Fixed ranges (A2:A200) with nested IFs and VLOOKUP",
      "Copy/paste weekly totals into a summary sheet",
      "Turn off automatic calculation before editing"
    ],
    explanation: "Structured references auto-expand; XLOOKUP maps IDs safely; SUMPRODUCT handles overtime tiers without brittle ranges."
  },
  {
    id: "u5h2",
    question: "Payroll withheld $0 taxes for one worker. What proves your model is investor-ready?",
    answers: [
      "Visible validation flags for missing IDs, negative hours, and stale dates",
      "Manual spot checks after each change",
      "A long formula that seems to work",
      "Emailing the file for a second opinion"
    ],
    explanation: "Professionals surface audit flags so problems are obvious and fast to fix—this builds investor confidence."
  },
  {
    id: "u5h3",
    question: "Which XLOOKUP pattern reduces #N/A when retrieving employee pay rate by ID?",
    answers: [
      '=XLOOKUP([@EmployeeID], Emp[EmployeeID], Emp[PayRate], "Missing ID")',
      '=XLOOKUP([@EmployeeID], Emp[EmployeeID], Emp[PayRate])',
      '=VLOOKUP([@EmployeeID], Emp, 3, TRUE)',
      '=INDEX(Emp[PayRate], MATCH([@EmployeeID], Emp[EmployeeID], 1))'
    ],
    explanation: "Use the if_not_found argument to guard missing keys and keep summaries stable."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit05Data}
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
            <h1 className="text-3xl font-bold text-gray-900">Sarah’s Payroll Automation Stress Test</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              TechStart just hired seasonal staff. Last month, overtime was miscalculated and one person had
              $0 tax withheld. That mistake upset a client and delayed cash. Today you’ll see how a fragile
              payroll sheet breaks—and how a robust, investor‑ready system prevents it.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800">Before: Fragile Payroll Setup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-red-900">
              <div className="bg-red-100 p-3 rounded font-mono text-sm">
                =IF(Hours&gt;40, 40*Rate + (Hours-40)*Rate*1.5, Hours*Rate)<br />
                =VLOOKUP(EmployeeID, Emp!A:E, 3, TRUE)  // wrong matches<br />
                =SUM(C2:C200)  // misses new rows
              </div>
              <ul className="list-disc list-inside text-red-800 text-sm">
                <li>Fixed ranges miss added employees</li>
                <li>Approximate matches return wrong pay rates</li>
                <li>Hidden errors (negative hours, missing IDs) go unnoticed</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">After: Robust, Audited Payroll Engine</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-green-900">
              <div className="bg-green-100 p-3 rounded font-mono text-sm">
                =XLOOKUP([@EmployeeID], Emp[EmployeeID], Emp[PayRate], "Missing ID")<br />
                =SUMPRODUCT(([@Hours]&gt;40)*(40*[@Rate] + ([@Hours]-40)*[@Rate]*1.5) + ([@Hours]&le;40)*([@Hours]*[@Rate]))<br />
                =SUM(Payroll[NetPay])
              </div>
              <ul className="list-disc list-inside text-green-800 text-sm">
                <li>Tables auto‑expand with new rows</li>
                <li>Overtime handled with a clear tiered formula</li>
                <li>Audit flags expose missing IDs, negative hours, and stale dates</li>
              </ul>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Diagnostic: Will this payroll model scale?"
            description="Predict which patterns protect accuracy and cash flow as the team grows."
            questions={hookQuestions}
            showExplanations={true}
          />

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800">Turn and Talk</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-800 mb-2 font-medium">Discussion Prompt (3 minutes):</p>
              <ul className="list-disc list-inside space-y-1 text-purple-800">
                <li>How do payroll errors damage investor trust and cash flow?</li>
                <li>Which validation flags would make issues impossible to miss?</li>
                <li>What one‑page summary would you show to prove reliability?</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit05Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}
