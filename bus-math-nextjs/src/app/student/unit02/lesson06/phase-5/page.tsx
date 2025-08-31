import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson06Data, unit02Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[4]

const assessmentQuestions = [
  {
    id: "a1",
    question: "Best method to switch scenarios by name without breaking references?",
    answers: [
      "Driver table + XLOOKUP exact‑match with IFNA",
      "Approximate VLOOKUP on sorted list",
      "Three separate tabs with manual links",
      "A dropdown that only changes colors"
    ],
    explanation: "Exact‑match XLOOKUP with a driver table is reliable and transparent; IFNA handles missing names."
  },
  {
    id: "a2",
    question: "Charts break when data grows. What fixes this?",
    answers: [
      "Structured references and tables feeding chart series",
      "Static ranges that are updated monthly",
      "Copying values to a ‘Chart Data’ tab",
      "Volatile OFFSET formulas everywhere"
    ],
    explanation: "Tables with structured references auto‑expand, keeping visuals current."
  },
  {
    id: "a3",
    question: "Which validation should appear near the top of the dashboard?",
    answers: [
      "Missing scenario, stale AsOfDate, negative or >100% rates",
      "Sheet color theme and font size",
      "User initials for style points",
      "Hidden named ranges and helper cells"
    ],
    explanation: "Visible validation flags catch critical issues early and build trust."
  },
  {
    id: "a4",
    question: "You need a fallback when lookup has no match. Which formula addition helps?",
    answers: [
      "IFNA or IFERROR around XLOOKUP",
      "Nesting more IFs inside SWITCH",
      "Turning calculation to Manual",
      "Approximate VLOOKUP"
    ],
    explanation: "IFNA/IFERROR returns a readable message instead of #N/A."
  },
  {
    id: "a5",
    question: "Professional KPI selection for month‑end dashboard should prioritize…",
    answers: [
      "Runway, profit margin, cash coverage days",
      "Tab count, chart colors, animation speed",
      "Random ratios from textbooks",
      "All available metrics at once"
    ],
    explanation: "Investor‑relevant KPIs connect the model to decisions."
  },
  {
    id: "a6",
    question: "A student wires a chart directly to raw data that doesn’t filter by scenario. Risk?",
    answers: [
      "Chart won’t reflect scenario changes and misleads viewers",
      "Chart loads faster with fewer formulas",
      "No impact—charts ignore source differences",
      "It auto‑detects the SelectedScenario"
    ],
    explanation: "Charts must reference outputs that respond to scenario switching."
  },
  {
    id: "a7",
    question: "Which statement fits an investor‑ready executive summary?",
    answers: [
      "Downside margin 18% (target 20%). Cut spend 10%; raise price $2.",
      "Our team worked very hard this month on Excel.",
      "We have many tabs and colorful charts.",
      "Revenue is good; expenses are okay; we will try our best."
    ],
    explanation: "Be specific, tie to targets, and offer actions."
  },
  {
    id: "a8",
    question: "INDEX/MATCH vs XLOOKUP for switching—what’s a safe pattern?",
    answers: [
      "INDEX(Map[Value], MATCH(Key, Map[Key], 0)) with exact match",
      "MATCH without 0 for approximate match",
      "INDEX with a hard‑coded row number",
      "MATCH on a formatted text column only"
    ],
    explanation: "Exact‑match lookup avoids silent mis‑matches. XLOOKUP is simpler, but INDEX/MATCH is fine when used correctly."
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit02Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              ✅ Phase 5: Assessment — Integration & Dashboard Mastery
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Technical Accuracy + Business Judgment</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Demonstrate switching logic, chart linkage, validation, and clear decision framing.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <ComprehensionCheck
            title="Integration & Dashboards Mastery Check"
            description="Select the best practice or interpretation for each case."
            questions={assessmentQuestions}
            showExplanations={true}
          />

          <Card>
            <CardHeader>
              <CardTitle>Performance Standard: Investor‑Ready</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-800">
              Your dashboard is clear, reliable, and auditable: scenario toggles work by name; visuals always match the model; validation flags are visible; and the executive summary states insight and action in one breath.
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  )
}

