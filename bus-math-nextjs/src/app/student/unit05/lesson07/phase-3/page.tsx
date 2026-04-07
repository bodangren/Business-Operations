import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, AlertCircle, CheckCircle } from "lucide-react"
import { lesson07Data, unit05Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[2]

const auditSteps = [
  {
    step: 1,
    title: "Open the Employee_Data sheet",
    description: "Check that all 10 employees have valid hours, rates, and dates. Look for any validation errors highlighted in red.",
    question: "What's one thing you'd flag as a potential problem here?"
  },
  {
    step: 2,
    title: "Trace calculations to Payroll_Calculations",
    description: "Pick one employee and manually verify their gross pay, deductions, and net pay. Do the formulas match what you expect?",
    question: "Can you find one formula that uses structured references (like Table[Column])?"
  },
  {
    step: 3,
    title: "Check the Bank_Reconciliation sheet",
    description: "Find the total from payroll and compare to the bank statement amount. Are they within $0.01?",
    question: "What's the dollar difference, if any? How is it explained?"
  },
  {
    step: 4,
    title: "Review the Dashboard recommendation",
    description: "Read the executive summary. Does it state a clear recommendation? Is there supporting evidence cited?",
    question: "Where in the workbook does the evidence for this recommendation live?"
  }
]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="max-w-full whitespace-normal text-center leading-tight bg-purple-100 text-purple-800 text-lg px-4 py-2 sm:w-fit sm:whitespace-nowrap">Phase 3: Guided Audit</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Audit the Shared Workbook Together</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              We'll trace the evidence chain together. For each step, answer the question and compare findings
              with your neighbors. Focus on where the recommendation comes from and what makes evidence strong.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Search className="h-5 w-5" />
                Audit Walkthrough
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900 space-y-6">
              {auditSteps.map((auditStep) => (
                <div key={auditStep.step} className="border-l-4 border-purple-300 pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-purple-200 text-purple-900 px-2 py-1 rounded text-sm font-bold">
                      Step {auditStep.step}
                    </span>
                    <span className="font-semibold">{auditStep.title}</span>
                  </div>
                  <p className="text-sm mb-2">{auditStep.description}</p>
                  <div className="bg-white p-3 rounded border border-purple-200">
                    <p className="text-sm font-medium">Discussion:</p>
                    <p className="text-sm">{auditStep.question}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Weak Evidence Red Flags
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900">
              <p className="mb-3">Watch for these signs that evidence is weak:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Recommendation without any numbers cited</li>
                <li>Calculations that don't tie to the totals shown</li>
                <li>Bank vs. register mismatch that's not explained</li>
                <li>Hard-coded values instead of formulas</li>
                <li>Charts with fixed ranges instead of Tables</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Strong Evidence Example
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900">
              <p className="mb-3">A strong recommendation looks like this:</p>
              <div className="bg-white p-4 rounded border border-green-200 font-mono text-sm">
                <p className="font-semibold mb-2">"Recommendation: Payroll is on track for Base scenario."</p>
                <p className="mb-2">Evidence:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Total gross pay: $8,360 (Employee_Data!B15)</li>
                  <li>Bank reconciliation within $0.01 (Bank_Reconciliation!E10)</li>
                  <li>Labor % of revenue: 32% (Dashboard!C3), below 40% threshold</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
