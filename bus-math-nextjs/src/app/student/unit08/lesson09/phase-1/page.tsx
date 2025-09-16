"use client"

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

import { lesson09Data, unit08Data, lesson09Phases } from "../lesson-data"

const phase = lesson09Phases[0]

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <PhaseHeader unit={unit08Data as any} lesson={lesson09Data as any} phase={phase as any} phases={lesson09Phases as any} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="text-base px-3 py-1">Phase 1 of 1 — Assessment</Badge>
            <h1 className="text-2xl font-semibold">PBL Milestone 2: Prototype + Rehearsal</h1>
            <p className="max-w-4xl mx-auto text-muted-foreground">
              Today you will build a working prototype that switches scenarios and runs sensitivity tests. Then you’ll rehearse your demo and collect peer feedback.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Business Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Show that your model responds to real changes</li>
                  <li>Use evidence to justify assumptions and choices</li>
                  <li>Practice a clear, short technical story for a VC</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Excel Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Scenario Manager with 3 cases (best, worst, realistic)</li>
                  <li>One- and two-variable data tables for key drivers</li>
                  <li>Validation rules and error checks pass with test data</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Milestone Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Working prototype implements scenario switching and sensitivity</li>
                <li>Validations prevent common input errors; checks pass</li>
                <li>Test scenarios documented with expected outcomes</li>
                <li>Rehearsal complete; peer feedback incorporated</li>
                <li>Evidence: prototype workbook + test summary + change notes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resources — Group Datasets (Download)</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <a
                  key={i}
                  className="text-blue-700 hover:underline"
                  href={`/resources/unit08-pbl-year1-startup-model-g${i + 1}.csv`}
                  download
                >
                  Download: unit08-pbl-year1-startup-model-g{i + 1}.csv
                </a>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Peer Review (Structured)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">Timebox: ~60 min build + ~20 min rehearsal/peer review</p>
              <PeerCritiqueForm projectTitle="Year‑1 Startup Model — Prototype Rehearsal" unitNumber={8} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Standard Rubric (Capstone‑Aligned)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Technical Accuracy: 50% — formulas, links, validations</li>
                <li>Strategic Rationale: 20% — business logic and trade‑offs</li>
                <li>Communication & Clarity: 15% — story and visuals</li>
                <li>Time Management: 10% — pacing and transitions</li>
                <li>Q&A Readiness: 5% — concise, confident responses</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reflection</CardTitle>
            </CardHeader>
            <CardContent>
              <ReflectionJournal
                unitTitle="Reflection"
                prompts={[
                  {
                    id: 'u08-l09-reflect-1',
                    category: 'adaptability',
                    prompt: 'What feedback will you act on before Demo Day? What will you change in the model or story?',
                    placeholder: 'Summarize the feedback and the change you will make...'
                  }
                ]}
              />
            </CardContent>
          </Card>
        </section>
      </main>
      <PhaseFooter unit={unit08Data as any} lesson={lesson09Data as any} phase={phase as any} phases={lesson09Phases as any} />
    </div>
  )
}
