import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { lesson08Data, lesson08Phases } from "./lesson-data"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

export default function Lesson08Page() {
  const currentPhase = lesson08Phases[0]
  const slug = "cafe-weekend-ops"
  const groups = [1, 2, 3, 4, 5, 6]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-2">
          <Badge variant="outline" className="mb-2">Lesson 08</Badge>
          <h1 className="text-3xl font-bold text-slate-900">{lesson08Data.title}</h1>
          <p className="text-slate-600">{lesson08Data.rationale}</p>
        </div>

        <Card className="border-blue-200 shadow-md">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge variant="secondary">PBL Milestone 1</Badge>
              <CardTitle>Project Kickoff: Team Setup</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed">
              {lesson08Data.learningObjectives[0]}
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Business Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Cut weekend food waste to ≤3% while protecting service quality</li>
                <li>Align inventory and staffing to true demand patterns</li>
                <li>Increase weekend profit using data‑driven choices</li>
                <li>Communicate a clear, believable plan to the café manager</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Excel Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Clean data with TRIM, Remove Duplicates, Text‑to‑Columns</li>
                <li>Use Analysis ToolPak: Descriptive Stats, Histogram, Regression</li>
                <li>Create charts with trendlines; label clearly for decisions</li>
                <li>Build a forecast tab using FORECAST.LINEAR and checks</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">Why This Matters</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-800 text-sm">
              Leaders trust teams that plan before they build. A clear problem statement,
              strong data plan, and a workbook skeleton show you can deliver a result
              the café manager can actually use.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge variant="outline">Milestone 1</Badge>
              <CardTitle>Acceptance Criteria</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Problem statement, scope, stakeholders, and success metrics written</li>
              <li>Data inventory and source plan; file naming convention set</li>
              <li>Excel model plan: tabs, validations, forecast, dashboards</li>
              <li>Risks/assumptions listed with mitigation ideas</li>
              <li>Evidence: 1‑page brief + workbook skeleton started</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Standard Rubric (Capstone‑Aligned)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Technical Accuracy: 50% — correct modeling, formulas, validations</li>
              <li>Strategic Rationale: 20% — alignment to business goals, trade‑offs</li>
              <li>Communication & Clarity: 15% — concise story, visuals, audience fit</li>
              <li>Time Management: 10% — 4–5 minutes, clean transitions</li>
              <li>Q&A Readiness: 5% — confident, concise responses</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Workflow Today (45–60 min)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>Plan (15 min)</strong>: Write problem, scope, metrics, risks</li>
              <li><strong>Skeleton (20 min)</strong>: Create tabs (Data, Clean, Charts, Forecast, Dashboard)</li>
              <li><strong>Data (10 min)</strong>: Download dataset for your group (g1–g6) and import to Data tab</li>
              <li><strong>Check (10 min)</strong>: Quick review with another team for clarity</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-800">Group Datasets (g1–g6)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-3">
            <p className="text-amber-800">
              All lessons 08–10 use the same dataset. Download <strong>your group's file only</strong>:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {groups.map((g) => (
                <a 
                  key={g}
                  className="block p-2 bg-white border border-amber-300 rounded text-center hover:bg-amber-100 transition-colors"
                  href={`/resources/unit04-pbl-${slug}-g${g}.csv`}
                  download
                >
                  Group {g} Data
                </a>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Submission Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>✓ 1‑page problem brief with scope, metrics, risks</li>
              <li>✓ Excel file with tabs created and dataset loaded</li>
              <li>✓ File names follow convention: Team‑Name_M1_v1.xlsx</li>
            </ul>
          </CardContent>
        </Card>

        <ReflectionJournal unitTitle="Milestone 1 Reflection (CAP)" />
      </div>
    </div>
  )
}
