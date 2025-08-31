import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2 } from "lucide-react"
import { lesson06Data, unit04Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit04Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">🧩 Phase 4: Independent Practice</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Integration Mastery Challenges</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Build your decision‑ready dashboard. Use scenario toggles by name, link visuals, and create an executive
              summary tied to KPIs.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Download Practice Data</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 space-y-2">
              <p>
                Use this dataset with Base/Stretch/Downside lines, KPI targets, and edge cases for validation:
              </p>
              <a className="underline font-semibold" href="/resources/unit04-forecasting-integration-practice.csv" download>
                /resources/unit04-forecasting-integration-practice.csv
              </a>
              <p className="text-sm">
                Check for: missing scenario names, negative or &gt;100% rates, stale AsOfDate, and broken chart links.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Build Tasks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>Create a driver table with scenario names and assumptions.</li>
                <li>Set SelectedScenario (named cell) and switch by exact name using XLOOKUP or INDEX‑MATCH.</li>
                <li>Link outputs to dashboard charts/tiles using Table[Column] references.</li>
                <li>Add an audit panel: missing names, rate bounds, stale dates.</li>
                <li>Write a one‑paragraph executive summary that updates with KPIs.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                Self‑Assessment Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 text-sm space-y-1">
              <ul className="list-disc list-inside space-y-1">
                <li>Scenario switches by name; wrong names show a clear message.</li>
                <li>Charts update when you add rows (no fixed ranges).</li>
                <li>Validation flags appear for rates &lt;0 or &gt;1 and stale dates.</li>
                <li>Executive summary mentions runway, margin, and traffic thresholds.</li>
                <li>All assumptions are documented next to inputs.</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}

