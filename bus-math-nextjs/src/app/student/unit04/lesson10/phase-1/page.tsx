"use client"

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson10Data, lesson10Phases, unit04Data } from "../lesson-data"

export default function Page() {
  const currentPhase = lesson10Phases[0]
  const slug = "cafe-weekend-ops"
  const groups = [1, 2, 3, 4, 5, 6]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <PhaseHeader unit={unit04Data} lesson={lesson10Data} phase={currentPhase} phases={lesson10Phases} />

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge variant="secondary">PBL Milestone 3</Badge>
              <CardTitle>Presentations + Peer Review</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed">
              Deliver your 4–5 minute presentation to the class. Show that your
              model is accurate and your plan is realistic. Review other teams
              using the rubric, and reflect on your performance.
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
                <li>Present a credible plan to reach ≤3% waste</li>
                <li>Show clear staffing and inventory actions</li>
                <li>Connect analysis to business decisions and impact</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Excel Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Demonstrate accurate formulas and forecasts</li>
                <li>Explain validations and how errors are prevented</li>
                <li>Show charts/dashboards that support your story</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">Presentation Flow (40 minutes)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm text-blue-800">
              <li>5 min setup</li>
              <li>Six groups × ~5 min each (presentation + brief Q&amp;A)</li>
              <li>5 min wrap and submission</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge variant="outline">Acceptance Criteria</Badge>
              <CardTitle>Milestone 3 Checklist</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Model and dashboard are accurate and clear</li>
              <li>Storyline ties analysis to the decision and risks</li>
              <li>Presentation hits 4–5 minutes; Q&amp;A is confident</li>
              <li>Evidence: final workbook + slides + peer reviews</li>
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
              <li>Q&amp;A Readiness: 5% — confident, concise responses</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Group Datasets (g1–g6)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <p>Same datasets as Lessons 08–09 (no new data today):</p>
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
            <CardTitle>Peer Review (Audience)</CardTitle>
          </CardHeader>
          <CardContent>
            <PeerCritiqueForm projectTitle="Data‑Driven Café Final Presentation" unitNumber={4} />
          </CardContent>
        </Card>

        <ReflectionJournal unitTitle="Milestone 3 Reflection (CAP)" />

        <PhaseFooter unit={unit04Data} lesson={lesson10Data} phase={currentPhase} phases={lesson10Phases} />
      </div>
    </div>
  )
}

