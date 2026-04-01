"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { lesson09Data } from "../lesson-data"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"

export default function Page() {
  const slug = "cafe-weekend-ops"
  const groups = [1, 2, 3, 4, 5, 6]

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center space-y-2">
          <Badge variant="outline" className="mb-2">Lesson 09</Badge>
          <h1 className="text-3xl font-bold text-slate-900">{lesson09Data.title}</h1>
          <p className="text-slate-600">{lesson09Data.rationale}</p>
        </div>

        <Card className="border-blue-200 shadow-md">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge variant="secondary">PBL Milestone 2</Badge>
              <CardTitle>Prototype + Rehearsal</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed">
              Build a working prototype that uses your dataset and forecast logic.
              Add validations to catch errors. Rehearse your 4–5 minute story and
              gather peer feedback to make your message clear and convincing.
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
                <li>Demonstrate weekend waste ≤3% in your plan</li>
                <li>Align staffing to true peak patterns with data</li>
                <li>Tell a clear story a manager can act on</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Excel Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Implement FORECAST.LINEAR or Regression output for demand</li>
                <li>Use data validation and error flags (IFERROR checks)</li>
                <li>Document test scenarios and change notes</li>
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
              Prototypes prove reliability. Testing and rehearsal turn a good idea
              into a tool leaders can trust during a real weekend rush.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge variant="outline">Acceptance Criteria</Badge>
              <CardTitle>Milestone 2 Checklist</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Working prototype implements forecast and validations</li>
              <li>Error checks pass; audit panel flags are resolved</li>
              <li>Test scenarios documented with results and change notes</li>
              <li>Rehearsal complete; peer feedback incorporated</li>
              <li>Evidence: workbook + test summary + change log</li>
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
            <CardTitle>Group Datasets (g1–g6)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-3">
            <p className="text-amber-800">
              Use the same dataset from Lesson 08. Download <strong>your group's file only</strong>:
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
            <CardTitle>Workflow Today (45–60 min)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li><strong>Build (20 min)</strong>: Complete forecast and validation sheets</li>
              <li><strong>Test (10 min)</strong>: Run test scenarios, document results</li>
              <li><strong>Rehearsal (15 min)</strong>: Practice 4–5 minute story, get peer feedback</li>
              <li><strong>Polish (5 min)</strong>: Incorporate feedback, finalize change notes</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Submission Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>✓ Working prototype with forecast and validations</li>
              <li>✓ Test scenarios documented with results</li>
              <li>✓ Peer feedback received and incorporated</li>
              <li>✓ Change notes reflect revisions</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Peer Review & Rehearsal</CardTitle>
          </CardHeader>
          <CardContent>
            <PeerCritiqueForm projectTitle="Data‑Driven Café Prototype" unitNumber={4} />
          </CardContent>
        </Card>

        <ReflectionJournal unitTitle="Milestone 2 Reflection (CAP)" />
      </div>
    </div>
  )
}

