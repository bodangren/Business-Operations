import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CheckCircle2, AlertCircle } from "lucide-react"
import ScenarioSwitchShowTell from "@/components/business-simulations/ScenarioSwitchShowTell"
import { lesson06Data, unit07Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[1]

export default function Unit07Lesson06Phase2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">Phase 2: Tool Anatomy</Badge>
            <h1 className="text-3xl font-bold text-gray-900">How the Scenario Switch Drives Every KPI</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              This lesson&apos;s Excel move is a selector-driven output chain. You choose scenario and method once, and
              lookups feed COGS, ending inventory, and KPI tiles automatically.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-green-200 bg-white">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <BookOpen className="h-5 w-5" /> Algorithm Contract for This Lesson
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none text-slate-800 space-y-4">
              <h3 className="text-lg font-semibold text-slate-900">Shared Setup</h3>
              <p>
                Keep <strong>Drivers</strong> (Scenario assumptions), <strong>MethodSummary</strong> (scenario + method
                outputs), and <strong>KPI</strong> (turnover + days) in separate sheets. This separation keeps formulas
                readable and debugging fast.
              </p>
              <p className="text-sm bg-slate-50 p-3 rounded border border-slate-200">
                Key control cells: <code>SelectedScenario</code>, <code>SelectedMethod</code>, and
                <code> SelectedKey = SelectedScenario &amp; "|"&amp; SelectedMethod</code>.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">Step 1: Pull Scenario Inputs</h3>
              <p>
                Lookup UnitsSold and other assumptions from Drivers by scenario name:
                <code> XLOOKUP(SelectedScenario, Drivers[Scenario], Drivers[UnitsSold])</code>.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">Step 2: Pull Method Outputs</h3>
              <p>
                Use the composite key to fetch method-specific COGS and ending inventory:
                <code> XLOOKUP(SelectedKey, MethodSummary[Key], MethodSummary[COGS])</code> and
                <code> XLOOKUP(SelectedKey, MethodSummary[Key], MethodSummary[EndingInventory])</code>.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">Step 3: Build KPI Chain</h3>
              <p>
                Convert selected outputs into decision metrics:
                <code> Turnover = COGS / AverageInventory</code> and
                <code> DaysOnHand = 365 / Turnover</code>.
              </p>

              <h3 className="text-lg font-semibold text-slate-900">Step 4: Validate Trust</h3>
              <p>
                Add visible checks so the model proves itself before interpretation:
                <code> IF(ABS((SelectedCOGS+SelectedEndingInventory)-GAFS)&lt;0.01,"Balanced","Check")</code>.
              </p>

              <div className="bg-amber-50 p-4 rounded border border-amber-200 text-sm">
                <h3 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" /> Professional Expectations (Not Scored in This Lesson)
                </h3>
                <ul className="list-disc list-inside text-amber-900 space-y-1">
                  <li>Use structured table references instead of fixed ranges.</li>
                  <li>Use clear names for control cells and output rows.</li>
                  <li>Add validation and error handling as standard model quality.</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <ScenarioSwitchShowTell />

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" /> Bridge to Guided Rehearsal
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-2">
              <p>
                In Phase 3 you will rehearse the exact lookup chain sheet-by-sheet before opening the live workbook.
              </p>
              <p>
                Quick check now: explain the difference between <code>MethodSummary[COGS]</code> and <code>[@COGS]</code>.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}
