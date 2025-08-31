import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, AlertTriangle, ShieldCheck } from "lucide-react"
import { lesson06Data, unit03Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[0]

const hookQuestions = [
  {
    id: "u3l6-h1",
    question: "What breaks dashboards most often when scenarios change during a meeting?",
    answers: [
      "Charts linked to static ranges that don’t expand with data",
      "Too many KPI cards",
      "Using colors that are too bright",
      "Slicer buttons that are not centered"
    ],
    explanation: "Static ranges miss new rows or switch off-target series. Use Tables and structured references so charts expand automatically."
  },
  {
    id: "u3l6-h2",
    question: "Which formula pattern is most reliable for scenario switching?",
    answers: [
      'XLOOKUP([@Scenario], Driver[Name], Driver[Value], "Missing") with IFNA guards',
      'VLOOKUP([@Scenario], Driver, 2, TRUE) for flexibility',
      'INDEX(Driver[Value], MATCH([@Scenario], Driver[Name], 1)) approximate',
      'HLOOKUP("Scenario", Driver, 2, TRUE)'
    ],
    explanation: "Exact-match lookups with an if_not_found path prevent #N/A and wrong matches under pressure."
  },
  {
    id: "u3l6-h3",
    question: "An investor asks to compare Base vs Downside instantly. What proves decision‑readiness?",
    answers: [
      "One‑page dashboard with a clear toggle, KPIs that update live, and visible validation checks",
      "Separate sheets for each scenario and manual copy/paste of values",
      "Multiple hidden tabs only the analyst understands",
      "A long formula printout with technical details"
    ],
    explanation: "Decision‑ready means a single view, controlled inputs, stable links, and validation flags so trust stays high."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit03Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🎛️ Phase 1: Investor Dashboard Demo</Badge>
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900">Sarah’s Live Demo: One Page, Three Scenarios</h1>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                A real investor asks Sarah for a single dashboard view with <strong>Base</strong>, <strong>Stretch</strong>, and <strong>Downside</strong>
                toggles. They want quick comparison, clear KPIs, and obvious decision cues. Sarah’s old workbook has hard‑coded
                charts and fragile links. Today she proves a new, integrated model built on named ranges, exact‑match lookups,
                and stable charts.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2"><AlertTriangle className="h-5 w-5"/>Before: Fragile Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-red-900 space-y-2">
              <div className="font-mono bg-red-100 p-3 rounded">
                Charts → =Sheet1!$B$2:$B$13 (static range)
                <br/>=VLOOKUP(Scenario, Map!A:B, 2, TRUE) // wrong matches under pressure
              </div>
              <ul className="list-disc list-inside">
                <li>Static ranges don’t expand; visuals go stale</li>
                <li>Approximate matches return wrong values</li>
                <li>Hidden manual edits break investor trust</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2"><ShieldCheck className="h-5 w-5"/>After: Integrated & Reliable</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-green-900 space-y-2">
              <div className="font-mono bg-green-100 p-3 rounded">
                Drivers: Table + named ranges (e.g., <strong>Driver_Scenario</strong>)
                <br/>=XLOOKUP([@Scenario], Driver[Name], Driver[Value], "Missing")
                <br/>Charts → Table columns (auto‑expanding)
              </div>
              <ul className="list-disc list-inside">
                <li>Exact‑match switching with IFNA/IFERROR guards</li>
                <li>Stable visuals from structured references</li>
                <li>Validation flags visible on the dashboard</li>
              </ul>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Integration Pitfalls & Dashboard Best Practices"
            description="Identify choices that keep dashboards decision‑ready during live scenario changes."
            questions={hookQuestions}
            showExplanations={true}
          />

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2"><Users className="h-5 w-5"/>Turn and Talk</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-900 mb-2 font-medium">Discussion Prompt (3 minutes):</p>
              <ul className="list-disc list-inside text-purple-900 space-y-1">
                <li>What makes a dashboard trustworthy to an investor?</li>
                <li>Where do you surface validation so errors can’t hide?</li>
                <li>Which three KPIs would you feature first for TechStart?</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit03Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}

