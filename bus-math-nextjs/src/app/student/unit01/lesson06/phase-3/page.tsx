import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import {
  ArrowRightCircle,
  Calculator,
  Lightbulb,
  Settings,
  ShieldAlert,
  Users,
  Workflow
} from "lucide-react"
import { lesson06Data, unit01Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[2]

const guidedPracticeQuestions = [
  {
    id: "scenario-lookup",
    question:
      "Why do we wrap our XLOOKUP formula in IFNA when we pull the Price from the Drivers table?",
    answers: [
      "It shows a friendly message if the scenario name is mistyped or missing.",
      "It makes the lookup run faster than normal.",
      "It allows approximate matches for new scenarios.",
      "It turns the result into a chart automatically."
    ],
    explanation:
      "IFNA catches errors so students see a plain-language note instead of a raw Excel error. That supports professional model QA."
  },
  {
    id: "structured-references",
    question:
      "Sarah wants her charts to stay linked when she adds a new scenario row. What should she do when she creates formulas?",
    answers: [
      "Use structured references like Drivers[Volume] so Excel expands ranges automatically.",
      "Copy the current cell references and lock them with dollar signs.",
      "Convert the table back to a normal range before charting.",
      "Type the numbers by hand into the chart setup."
    ],
    explanation:
      "Structured references follow the table even as it grows, so the visuals update with every new scenario."
  },
  {
    id: "cash-days",
    question:
      "If AR Days are 32 and AP Days are 24, what should the Cash Days formula return, and what does it tell Sarah?",
    answers: [
      "8 cash days, meaning money waits 8 days longer to arrive than it takes to leave.",
      "56 cash days, because you add the two numbers together to see the gap.",
      "0 cash days, because the numbers cancel each other out.",
      "-8 cash days, showing Sarah collects cash 8 days faster than she pays vendors."
    ],
    explanation:
      "Cash Days = AR Days – AP Days, so 32 – 24 = 8. A positive number warns Sarah that cash is tied up before expenses are paid."
  }
]

export default function Unit01Lesson06Phase3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader
        lesson={lesson06Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🔧 Phase 3: Guided Practice — Build the Integration
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Guide Sarah’s Scenario Switchboard in Excel
            </h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Sarah Chen is prepping an investor update for TechStart Solutions. She needs a
              scenario dropdown that pulls clean numbers, powers live charts, and warns her when
              the model drifts away from targets. Follow these steps to coach her through the build.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Workflow className="h-5 w-5" />
                Step 1 — Wire the Scenario Controls
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-800 space-y-4 leading-relaxed">
              <p>
                Import <strong>unit01-ledger-integration-practice.csv</strong> as a table named{' '}
                <strong>Drivers</strong>. The first three rows (Base, Stretch, Downside) are Sarah’s main
                scenarios. The rows below the divider are “edge cases” you will use later to test
                validation.
              </p>
              <ol className="list-decimal list-inside space-y-2 text-base">
                <li>
                  On a sheet called <strong>Settings</strong>, place <strong>Selected_Scenario</strong> in B2. Create a
                  dropdown list that points to <code>=Drivers[Scenario]</code>. This powers the entire model.
                </li>
                <li>
                  In the <strong>Model</strong> sheet, pull each driver with XLOOKUP. Example:
                  <code className="block bg-purple-100 text-purple-900 px-3 py-2 rounded">
                    =IFNA(XLOOKUP(Settings!B2, Drivers[Scenario], Drivers[Price]), "Type a scenario name from Drivers")
                  </code>
                  Repeat for unit cost, volume, AR Days, AP Days, overhead, and targets.
                </li>
                <li>
                  Keep every formula in structured-reference form. If Sarah inserts Base2 or a new
                  investor case, your links will still work.
                </li>
              </ol>
              <div className="bg-purple-100 border border-purple-200 rounded-lg p-4 text-purple-900 flex gap-3">
                <Lightbulb className="h-6 w-6 flex-shrink-0" />
                <p className="text-base">
                  Student coach tip: ask your partner to mistype “Stretch” as “Strech.” If IFNA returns the
                  helper message, your scenario switch is investor ready.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Step 2 — Build the Calculation Engine
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-800 space-y-4 leading-relaxed">
              <p>
                Translate each driver into a live KPI. Remind students the math tells TechStart if the
                plan protects cash or puts runway at risk.
              </p>
              <div className="space-y-4">
                <Card className="bg-white border border-slate-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-slate-900 text-lg flex items-center gap-2">
                      <ArrowRightCircle className="h-5 w-5" /> Revenue and Margin
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-slate-800">
                    <p>
                      <strong>Revenue</strong> shows how much money comes in before costs.
                    </p>
                    <pre className="bg-slate-100 p-3 rounded text-slate-900 text-sm overflow-x-auto">
=[@Price] * [@Volume]
                    </pre>
                    <p>
                      <strong>Gross Margin %</strong> compares profit to sales. It drives the investor summary.
                    </p>
                    <pre className="bg-slate-100 p-3 rounded text-slate-900 text-sm overflow-x-auto">
=(([@Price]*[@Volume]) - ([@UnitCost]*[@Volume]) - [@Overhead]) / ([@Price]*[@Volume])
                    </pre>
                  </CardContent>
                </Card>
                <Card className="bg-white border border-slate-200">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-slate-900 text-lg flex items-center gap-2">
                      <ArrowRightCircle className="h-5 w-5" /> Runway and Cash Days
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm text-slate-800">
                    <p>
                      <strong>Runway (months)</strong> estimates how long TechStart can cover overhead with the
                      current margin cushion.
                    </p>
                    <pre className="bg-slate-100 p-3 rounded text-slate-900 text-sm overflow-x-auto">
=([@Revenue] * [@Margin_Pct]) / [@Overhead]
                    </pre>
                    <p>
                      <strong>Cash Days</strong> compares cash-in timing to cash-out timing.
                    </p>
                    <pre className="bg-slate-100 p-3 rounded text-slate-900 text-sm overflow-x-auto">
=[@AR_Days] - [@AP_Days]
                    </pre>
                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-indigo-900">
                      <p className="font-semibold">Why This Matters</p>
                      <p>
                        Positive Cash Days mean money leaves before it returns. Investors want to see Sarah
                        shrinking that gap or proving she can handle it.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Step 3 — Layer on Live Feedback
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-800 space-y-4 leading-relaxed">
              <p>
                Students should prove the model guards against mistakes and communicates clearly.
              </p>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>
                  Build <strong>Data Validation</strong> alerts: stale <code>AsOfDate</code>, negative costs, AR above 90 days.
                </li>
                <li>
                  Set conditional formatting tiles: green when Margin % ≥ Target, amber when Cash Days exceeds the target.
                </li>
                <li>
                  Write an <strong>Executive Summary</strong> formula (e.g., nested IF) that snaps to the latest KPI
                  story in one short sentence.
                </li>
                <li>
                  Connect charts to the Drivers table so they refresh the instant a student switches scenarios.
                </li>
              </ul>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 text-emerald-900 flex gap-3">
                <Users className="h-6 w-6 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Think-Pair-Share (3 minutes)</p>
                  <p>
                    Partner A tests the dropdown and reads the executive sentence aloud. Partner B double-checks the validation flags.
                    Swap roles and note one improvement you would make before presenting to an investor.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <ShieldAlert className="h-5 w-5" />
                Practice: Trigger the Error Checking System
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-amber-900 text-base leading-relaxed">
                Use the simulation to see how professional models call out risky inputs. Notice how each alert ties back to the checklist you will use in Phase 4.
              </p>
              <ErrorCheckingSystem />
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Check Your Guided Practice"
            description="Confirm you can explain the heart of Sarah’s scenario switchboard before moving on."
            questions={guidedPracticeQuestions}
            showExplanations
          />
        </section>
      </main>

      <PhaseFooter
        lesson={lesson06Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  )
}
