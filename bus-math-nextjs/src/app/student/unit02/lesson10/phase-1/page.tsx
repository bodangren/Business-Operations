"use client"

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson10Data, lesson10Phases, unit02Data } from "../lesson-data"

export default function Page() {
  const currentPhase = lesson10Phases[0]
  const slug = "month-end-wizard"
  const groups = [1,2,3,4,5,6]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <PhaseHeader unit={unit02Data} lesson={lesson10Data} phase={currentPhase} phases={lesson10Phases} />

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge variant="secondary">PBL Milestone 3</Badge>
              <CardTitle>Presentations + Peer Review</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed">
              Today is presentation day. Each group delivers a focused demo that shows your
              automated month‑end close working end‑to‑end, backed by clear business reasoning
              and ready answers to common questions.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Presentation Flow (40 minutes)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>5 minutes setup and framing</li>
              <li>Six groups × ~5 minutes each (demo + quick Q&A)</li>
              <li>5 minutes wrap and submissions</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge variant="outline">Acceptance Criteria</Badge>
              <CardTitle>Final Deliverable</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Final model and dashboard are accurate and clear</li>
              <li>Story connects analysis to a business decision; risks addressed</li>
              <li>Presentation hits 4–5 minutes; clean transitions</li>
              <li>Q&A readiness shown with concise, confident responses</li>
              <li>Evidence submitted: final files, slides, peer reviews</li>
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
            <CardTitle>Audience Peer Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <PeerCritiqueForm projectTitle="Month‑End Wizard Final Presentation" unitNumber={2} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Group Datasets (g1–g6)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <p>Same data as Lessons 08–09; no new data today:</p>
            <ul className="list-disc list-inside">
              {groups.map((g) => (
                <li key={g}>
                  <a className="underline" href={`/resources/unit02-pbl-${slug}-g${g}.csv`} download>
                    Download unit02-pbl-{slug}-g{g}.csv
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <ReflectionJournal unitTitle="Milestone 3 Reflection (CAP)" />

        <PhaseFooter unit={unit02Data} lesson={lesson10Data} phase={currentPhase} phases={lesson10Phases} />
      </div>
    </div>
  )}

