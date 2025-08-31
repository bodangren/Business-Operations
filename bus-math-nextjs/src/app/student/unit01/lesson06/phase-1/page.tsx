import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Users, AlertTriangle, MonitorSmartphone } from "lucide-react"
// Import dashboard directly; it's a client component with its own boundary
// This avoids using next/dynamic with ssr:false in a Server Component
import { FinancialDashboard } from "@/components/charts/FinancialDashboard"
import { lesson06Data, unit01Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[0]

// Note: FinancialDashboard is a client component ('use client' in file)
// Importing it directly from this Server Component is supported by Next.js

const hookQuestions = [
  {
    id: "q1",
    question: "Sarah needs a single dashboard that switches Base/Stretch/Downside by name. What is the safest lookup setting?",
    answers: [
      "Exact match (0/FALSE) with IFNA/IFERROR",
      "Approximate match (1/TRUE) for faster speed",
      "Wildcard match so any spelling works",
      "No lookup—hard‑code each chart to a tab"
    ],
    explanation: "Dashboards must be stable. Use exact match plus IFNA/IFERROR to prevent silent failures."
  },
  {
    id: "q2",
    question: "A chart stops updating when Sarah adds new rows. What likely caused it?",
    answers: [
      "Chart points to a static A2:A20 range, not a Table column",
      "Excel can only show 20 rows in a chart",
      "The dataset must be sorted A→Z to refresh",
      "The sheet tab name changed and breaks all charts"
    ],
    explanation: "Bind charts to Tables/structured references so ranges expand automatically."
  },
  {
    id: "q3",
    question: "An investor asks, ‘What should we do if margin drops below 20%?’ What belongs on Sarah’s dashboard?",
    answers: [
      "A clear KPI card and an executive summary note tied to the threshold",
      "Hidden calculations so the dashboard stays simple",
      "Ten tabs of supporting math for later reading",
      "A one‑time screenshot pasted into a slide deck"
    ],
    explanation: "Decision‑ready dashboards pair KPIs with plain‑language guidance at key thresholds."
  }
]

export default function Unit01Lesson06Phase1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader
        lesson={lesson06Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              📊 Phase 1: Hook — Sarah’s Live Dashboard Demo
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              From Hard‑Coded Tabs to Integrated, Decision‑Ready Dashboards
            </h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              A real client asks Sarah for one clean view with scenario toggles and clear
              decision cues. Her old workbook uses separate sheets for each case. It breaks.
              The integrated version uses a driver table, exact‑match lookups, and charts that
              expand automatically.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto grid gap-6">
          <Card className="border-blue-200 bg-white">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <MonitorSmartphone className="h-5 w-5" />
                Live Preview: Investor‑Ready Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FinancialDashboard title="TechStart Scenario Dashboard (Quick Preview)" />
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Before vs After
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-red-900 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Before:</strong> Hard‑coded ranges; charts miss new rows; manual tab switching</li>
                <li><strong>After:</strong> Named driver table; XLOOKUP exact‑match; charts bound to Table columns</li>
                <li><strong>Result:</strong> Fast scenario toggles, clear KPIs, and investor trust</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-gray-200">
            <CardContent>
              <ComprehensionCheck
                title="Integration Pitfalls and Dashboard Best Practices"
                description="Predict stable build choices that make dashboards decision‑ready."
                questions={hookQuestions}
                showExplanations={true}
                allowRetry={true}
              />
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk: Clarity Under Pressure
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900 space-y-2 text-sm">
              <p>
                Sarah has 2 minutes to explain a downside result. Discuss with a partner:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Which KPIs should she show first, and why?</li>
                <li>How do scenario names help decision‑makers compare quickly?</li>
                <li>What one sentence should appear in the executive summary?</li>
              </ul>
            </CardContent>
          </Card>
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
