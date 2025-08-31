import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Users, ShieldCheck } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson06Data, unit02Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[0]

const hookQuestions = [
  {
    id: "q1",
    question: "An investor asks for Base/Stretch/Downside in one view. What design makes switching reliable?",
    answers: [
      "Named‑range or driver table with XLOOKUP exact‑match + IFNA",
      "Three separate sheets copied for each scenario",
      "A toggle that changes colors but not formulas",
      "Manual edits to chart series each time"
    ],
    explanation: "A driver table or named range allows exact‑match switching with IFNA for safety; charts auto‑update when linked to model outputs."
  },
  {
    id: "q2",
    question: "Charts keep breaking when Sarah adds rows. What prevents this?",
    answers: [
      "Structured references (Table[Column]) feeding charts",
      "Fixed ranges like A2:A50 and manual re‑select",
      "Copying values into a chart sheet",
      "Using volatile functions to force recalc"
    ],
    explanation: "Structured references expand with the table, so visualizations stay connected as data grows."
  },
  {
    id: "q3",
    question: "Which pattern builds investor trust under pressure?",
    answers: [
      "Visible validation flags and a one‑page executive summary",
      "Hidden scratch work and complex, unlabeled formulas",
      "Dozens of tiny tabs with similar names",
      "A single hard‑coded total cell"
    ],
    explanation: "Clear validation + summary text provides decision cues and auditability in a live demo."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit02Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              🎯 Phase 1: Hook — Live Demo
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Sarah’s Decision‑Ready Dashboard</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A client asks for one view to compare Base, Stretch, and Downside scenarios. Sarah’s old model had hard‑coded ranges and fragile charts. Her integrated model uses named ranges, XLOOKUP links, and stable visuals that update instantly.
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
                =IF(B2="Base", Base!C10, IF(B2="Stretch", Stretch!C10, Downside!C10))
                <br />
                =SUM(C2:C50) // breaks when rows grow
              </div>
              <ul className="list-disc list-inside">
                <li>Multiple tabs drift out of sync</li>
                <li>Fixed ranges miss new data</li>
                <li>Charts point at static ranges</li>
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
                =XLOOKUP(SelectedScenario, Drivers[Scenario], Drivers[COGS_Pct], "Missing")
                <br />
                =IFNA(XLOOKUP(SelectedScenario, Drivers[Scenario], Drivers[OpEx_Pct]), 0)
                <br />
                =SUM(TransactionTable[Amount]) // structured reference
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
                <li>What signals help an investor make a decision in 10 seconds?</li>
                <li>Where should validation live so problems are impossible to miss?</li>
                <li>How do you prove your dashboard won’t break during Q&amp;A?</li>
              </ul>
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

