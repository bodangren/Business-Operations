"use client"

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson09Data, lesson09Phases, unit04Data } from "../lesson-data"

export default function Page() {
  const currentPhase = lesson09Phases[0]
  const slug = "cafe-weekend-ops"
  const groups = [1, 2, 3, 4, 5, 6]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <PhaseHeader unit={unit04Data} lesson={lesson09Data} phase={currentPhase} phases={lesson09Phases} />

        <Card>
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
          <CardContent className="text-sm space-y-2">
            <p>Use the same dataset from Lesson 08:</p>
            <ul className="list-disc list-inside">
              {groups.map((g) => (
                <li key={g}>
                  <a className="underline" href={`/resources/unit04-pbl-${slug}-g${g}.csv`} download>
                    Download unit04-pbl-{slug}-g{g}.csv
                  </a>
                </li>
              ))}
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

        <PhaseFooter unit={unit04Data} lesson={lesson09Data} phase={currentPhase} phases={lesson09Phases} />
      </div>
    </div>
  )
}

