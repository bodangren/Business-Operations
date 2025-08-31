import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Users, ShieldCheck } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson06Data, unit04Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[0]

const hookQuestions = [
  {
    id: "u04l06-hook-1",
    question:
      "An investor asks to compare Base, Stretch, and Downside in one view. What makes switching reliable?",
    answers: [
      "Named range or driver table + XLOOKUP exact‑match with IFNA",
      "Three separate sheets with copy‑pasted formulas",
      "A toggle that changes colors but not formulas",
      "Manual relinking of charts each time"
    ],
    explanation:
      "A single driver table controls assumptions by name. XLOOKUP exact‑match with IFNA keeps outputs stable and safe."
  },
  {
    id: "u04l06-hook-2",
    question:
      "Charts keep breaking when new weeks are added. What prevents this?",
    answers: [
      "Structured references (Table[Column]) feeding visuals",
      "Fixed ranges like A2:A50 updated by hand",
      "Copying values into a chart worksheet",
      "Using volatile functions to force recalc"
    ],
    explanation:
      "Tables auto‑expand. Structured references keep charts connected as data grows."
  },
  {
    id: "u04l06-hook-3",
    question:
      "What builds investor trust during a live demo?",
    answers: [
      "Visible validation flags and a one‑page executive summary",
      "Hidden scratch tabs and cryptic formulas",
      "Dozens of tiny sheets with similar names",
      "A single hard‑coded total cell"
    ],
    explanation:
      "Clear validation and concise summaries give fast decision cues and show auditability."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit04Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🎯 Phase 1: Hook — Live Demo</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Sarah’s Café Dashboard: One Screen, Three Scenarios</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A client wants to see Base, Stretch, and Downside side‑by‑side and make a call fast. Sarah’s
              early model had hard‑coded ranges and fragile charts. Her integrated model uses a driver table,
              XLOOKUP links, and stable visuals that update instantly.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Before: Fragile Switching
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3 text-red-900">
              <div className="bg-red-100 p-3 rounded font-mono">
{`=IF(B2="Base", Base!C10, IF(B2="Stretch", Stretch!C10, Downside!C10))
=SUM(C2:C50) // breaks when rows grow`}
              </div>
              <ul className="list-disc list-inside">
                <li>Multiple tabs drift out of sync</li>
                <li>Fixed ranges miss new rows</li>
                <li>Charts point to static ranges</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                After: Integrated Scenario Driver
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3 text-green-900">
              <div className="bg-green-100 p-3 rounded font-mono">
{`=XLOOKUP(SelectedScenario, Drivers[Scenario], Drivers[FoodCostPct], "Missing")
=IFNA(XLOOKUP(SelectedScenario, Drivers[Scenario], Drivers[LaborRatePct]), 0)
=SUM(SalesTable[Units]) // structured reference`}
              </div>
              <ul className="list-disc list-inside">
                <li>Switch by name with exact match</li>
                <li>Validation shows missing or out‑of‑range inputs</li>
                <li>Charts/tiles read from model outputs</li>
              </ul>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Integration Pitfalls & Best Practices"
            description="Predict what fails under growth and what stays reliable."
            questions={hookQuestions}
            showExplanations={true}
          />

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900">
              <p className="font-medium mb-2">Discussion Prompt (3 minutes):</p>
              <ul className="list-disc list-inside space-y-1">
                <li>What signals help an investor decide in 10 seconds?</li>
                <li>Where should validation live so problems are impossible to miss?</li>
                <li>How do you prove your dashboard won’t break during Q&amp;A?</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}

