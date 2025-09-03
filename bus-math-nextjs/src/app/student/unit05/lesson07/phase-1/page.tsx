import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, Users, ShieldCheck } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson07Data, unit05Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[0]

const kickoffQuestions = [
  {
    id: "u05l07-hook-1",
    question:
      "Charts break when Sarah adds two new employees. What prevents this during a live demo?",
    answers: [
      "Bind charts to Tables with structured references",
      "Use fixed ranges like A2:C20 and hope it holds",
      "Paste values to a ‘ChartData’ sheet every time",
      "Refresh by closing and reopening the file"
    ],
    explanation:
      "Tables auto‑expand. Structured references keep visuals connected as payroll grows."
  },
  {
    id: "u05l07-hook-2",
    question:
      "The model returns #N/A when a scenario name is misspelled. What shows professionalism?",
    answers: [
      "Wrap lookups with IFNA/IFERROR and a clear message",
      "Hide errors by turning off warnings",
      "Delete the bad input silently",
      "Copy‑paste the correct value into the output"
    ],
    explanation:
      "Exact‑match lookups should fail loudly but helpfully. IFNA/IFERROR guides the user to fix inputs."
  },
  {
    id: "u05l07-hook-3",
    question:
      "Bank shows $9,850 but the payroll register shows $9,830 for the same run date. What’s the right next step?",
    answers: [
      "Reconcile timing and investigate differences (fees, reversals)",
      "Force the register total to equal the bank number",
      "Ignore because it’s only a $20 difference",
      "Hide the bank data from the dashboard"
    ],
    explanation:
      "Trust comes from reconciliation: explain timing differences and document them."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🎬 Phase 1: Production Kickoff</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Investor Expects Audit‑Ready Payroll Today</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Sarah at TechStart Solutions must finish her payroll system and present with confidence. Two failure cases
              can crash trust fast: broken charts when new employees are added, and silent formula errors that hide
              problems. A ready model shows accurate tie‑outs, clear messages, and responsive visuals.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Failure Case: Fragile Ranges & Hidden Errors
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3 text-red-900">
              <div className="bg-red-100 p-3 rounded font-mono">
{`=IF(B2="Base",Base!C10,IF(B2="Stretch",Stretch!C10,Downside!C10))
=SUM(C2:C20)  // breaks when rows grow
=XLOOKUP(Scenario, Drivers[Scenario], Drivers[OTMultiplier]) // #N/A not handled`}
              </div>
              <ul className="list-disc list-inside">
                <li>Multiple tabs drift out of sync; fixed ranges miss new hires</li>
                <li>Errors appear as #N/A without guidance</li>
                <li>Bank vs. register mismatches aren’t explained</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                Ready Example: Structured, Validated, Reconciled
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3 text-green-900">
              <div className="bg-green-100 p-3 rounded font-mono">
{`=IFNA(XLOOKUP(SelectedScenario, Drivers[Scenario], Drivers[OTMultiplier]), "Scenario not found")
=SUM(PayrollTable[GrossPay])  // structured reference (Table)
// Reconciliation: RegisterTotal vs BankTotal → difference documented`}
              </div>
              <ul className="list-disc list-inside">
                <li>Tables auto‑expand; charts and KPIs remain stable</li>
                <li>Exact‑match lookups return helpful messages on errors</li>
                <li>Reconciliation notes explain timing and fees clearly</li>
              </ul>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Standards Under Pressure"
            description="What makes a payroll model trustworthy in a live setting?"
            questions={kickoffQuestions}
            showExplanations={true}
          />

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Users className="h-5 w-5" /> Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900">
              <p className="font-medium mb-2">Discussion Prompt (3 minutes):</p>
              <ul className="list-disc list-inside space-y-1">
                <li>What signals show investors your model won’t break?</li>
                <li>Where should validation live so problems are impossible to miss?</li>
                <li>How will you handle live questions about bank vs. register differences?</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

