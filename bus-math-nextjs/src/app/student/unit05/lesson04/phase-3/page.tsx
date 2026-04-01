import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Scale, AlertCircle, CheckCircle, ArrowRight } from "lucide-react"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import { lesson04Data, lesson04Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson04Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
      <PhaseHeader lesson={lesson04Data} unit={unit05Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-cyan-100 text-cyan-800 text-lg px-4 py-2">Phase 3: Deeper Timing Scenarios</Badge>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-cyan-900 mb-4">When the Register and Bank Disagree</h2>
                <p className="text-lg leading-relaxed">
                  Real payroll is messy. Employees get added mid-cycle. Direct deposits fail. Banks process transactions on different days. In this phase, you will work through scenarios where the timing gets complicated.
                </p>
              </div>

              <Card className="border-cyan-200 bg-cyan-50">
                <CardHeader>
                  <CardTitle className="text-cyan-800 flex items-center gap-2">
                    <Scale className="h-5 w-5" />
                    Scenario A: New Hire Mid-Cycle
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-cyan-900 text-sm space-y-3">
                  <p>
                    Sarah hires a new developer on Thursday—the day before payroll runs. The employee will not receive a paycheck this cycle, but what liability does Sarah need to record?
                  </p>
                  <div className="bg-white p-3 rounded border border-cyan-300">
                    <p className="font-semibold mb-2">Analysis:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>No wages earned yet = no payroll liability this period</li>
                      <li>However, employer tax liability begins immediately for next period</li>
                      <li>Decision: Record 0 on this cycle's register, but note the future liability</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-cyan-200 bg-cyan-50">
                <CardHeader>
                  <CardTitle className="text-cyan-800 flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Scenario B: Direct Deposit Failure
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-cyan-900 text-sm space-y-3">
                  <p>
                    Two employees' direct deposits failed on Friday. Their net pay is still recorded in the register, but the bank shows the cash did not leave. How does Sarah reconcile this?
                  </p>
                  <div className="bg-white p-3 rounded border border-cyan-300">
                    <p className="font-semibold mb-2">Analysis:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Register shows liability: $1,800 (net pay not delivered)</li>
                      <li>Bank shows $1,800 still in the account</li>
                      <li>Difference = $1,800 (uncleared transactions)</li>
                      <li>Sarah must track these as "outstanding" until deposits clear</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-cyan-200 bg-cyan-50">
                <CardHeader>
                  <CardTitle className="text-cyan-800 flex items-center gap-2">
                    <ArrowRight className="h-5 w-5" />
                    Scenario C: Employer Tax Remittance
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-cyan-900 text-sm space-y-3">
                  <p>
                    Employer FICA (Social Security + Medicare) is due 15 days after the end of the month. When does the liability convert to a cash outflow?
                  </p>
                  <div className="bg-white p-3 rounded border border-cyan-300">
                    <p className="font-semibold mb-2">Analysis:</p>
                    <ul className="list-disc list-inside space-y-1">
                      <li>Liability created: Payday (Wednesday)</li>
                      <li>Cash paid: Following month (by the 15th)</li>
                      <li>Float available: Up to 30+ days on employer taxes</li>
                      <li>Risk: If Sarah forgets, penalties and interest apply</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-bold text-cyan-900 mb-3">Mini Payroll Register Format</h3>
                <p>
                  Notice how the scenarios above require you to think in a structured register format. This is the payroll-style notation you will use in Phase 4.
                </p>
              </div>

              <div className="my-8">
                <ErrorCheckingSystem />
              </div>

              <Card className="border-cyan-200 bg-cyan-50">
                <CardHeader>
                  <CardTitle className="text-cyan-800 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Partner Debrief
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-cyan-900">
                  <p className="font-medium">3-minute share-out:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>For Scenario B, explain to your partner why the failed direct deposit creates an "uncleared" item.</li>
                    <li>How does the employer tax timing window differ from employee deduction timing?</li>
                    <li>What would you add to the register to track Scenario C automatically?</li>
                  </ul>
                </CardContent>
              </Card>

              <Alert className="border-cyan-200 bg-cyan-50">
                <AlertDescription className="text-cyan-800">
                  <strong>Pattern recognition:</strong> The longer the timing gap (like employer taxes), the more cash float available—but the more complex the reconciliation becomes.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter lesson={lesson04Data} unit={unit05Data} phase={currentPhase} phases={lesson04Phases} />
    </div>
  )
}