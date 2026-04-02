import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Users, ShieldCheck } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson06Data, unit07Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[0]

const hookQuestions = [
  {
    id: "u07l06-hook-1",
    question:
      "An investor asks for Base, Stretch, and Downside results in one screen. What workbook pattern supports fast switching with traceable logic?",
    answers: [
      "Selector cells + table lookups from Drivers and MethodSummary",
      "Three separate sheets with copy‑pasted values",
      "A toggle that changes colors only",
      "Manual relinking of charts each time"
    ],
    explanation:
      "Selectors and table lookups keep scenario and method switching fast while preserving an audit trail."
  },
  {
    id: "u07l06-hook-2",
    question:
      "Why do scenario + method dropdowns matter to an investor conversation?",
    answers: [
      "They let you compare outcomes live without rebuilding formulas",
      "They remove the need for method-specific calculations",
      "They guarantee all methods produce the same COGS",
      "They replace the need for turnover and days-on-hand metrics"
    ],
    explanation:
      "Live switching allows real-time method discussion while keeping one shared source of truth."
  },
  {
    id: "u07l06-hook-3",
    question:
      "What builds investor trust during a live inventory demo?",
    answers: [
      "Visible validation badges and a one‑page executive summary",
      "Hidden scratch tabs and cryptic formulas",
      "Dozens of tiny sheets with similar names",
      "A single hard‑coded total cell"
    ],
    explanation:
      "Clear validation and concise summaries give fast decision cues and show auditability."
  }
]

export default function Unit07Lesson06Phase1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🎯 Phase 1: Hook — Live Demo</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Sarah’s Inventory Dashboard: One Screen, Three Scenarios</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A client wants to compare Base, Stretch, and Downside outcomes and decide in minutes. Sarah now needs one
              workbook that switches scenario and method on command, then explains COGS, ending inventory, turnover, and
              days-on-hand without manual rewiring.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Investor Decision Agenda
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3 text-red-900">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Question 1:</strong> Which method produces the strongest inventory turnover in each scenario?</li>
                <li><strong>Question 2:</strong> How much does COGS shift when we switch FIFO, LIFO, and Weighted Average?</li>
                <li><strong>Question 3:</strong> Which method gives the best story for margin, cash, and risk?</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                Workbook Strategy for This Lesson
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-3 text-green-900">
              <div className="bg-green-100 p-3 rounded font-mono">
{`=XLOOKUP(SelectedScenario, Drivers[Scenario], Drivers[UnitsSold], "Missing")
=SelectedScenario & "|" & SelectedMethod
=XLOOKUP(SelectedKey, MethodSummary[Key], MethodSummary[COGS], "Missing")`}
              </div>
              <ul className="list-disc list-inside">
                <li>Switch scenario and method from two control cells</li>
                <li>Pull output row by key instead of nested IF chains</li>
                <li>Feed KPI tiles and chart from one summary table</li>
              </ul>
            </CardContent>
          </Card>

          <ComprehensionCheck
            title="Integration Pitfalls & Best Practices (Inventory)"
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
                <li>Which KPI would you defend first: margin, turnover, or days-on-hand?</li>
                <li>What evidence makes a method recommendation credible?</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}
