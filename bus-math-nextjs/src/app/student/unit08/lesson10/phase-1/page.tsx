"use client"

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

import { lesson10Data, unit08Data, lesson10Phases } from "../lesson-data"

const phase = lesson10Phases[0]

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <PhaseHeader unit={unit08Data as any} lesson={lesson10Data as any} phase={phase as any} phases={lesson10Phases as any} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="text-base px-3 py-1">Phase 1 of 1 — Assessment</Badge>
            <h1 className="text-2xl font-semibold">PBL Milestone 3: Presentations + Peer Review</h1>
            <p className="max-w-4xl mx-auto text-muted-foreground">
              Demo Day setup: 5 min setup; Six groups x ~5 min each; 5 min wrap. Audience provides structured peer reviews.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Business & Excel Objectives</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Business Objectives</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Tell a clear, concise story tied to decisions</li>
                  <li>Address risks and assumptions with evidence</li>
                  <li>Respond to Q&amp;A with confidence and data</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Excel Objectives</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Accurate linked statements and working scenarios</li>
                  <li>Validations and error checks are clean</li>
                  <li>Readable dashboard visuals for investors</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Presentation Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>5 min setup</li>
                <li>Six groups × ~5 min each (4–5 min talk + brief Q&amp;A)</li>
                <li>5 min wrap and submission confirmation</li>
              </ul>
              <p className="text-muted-foreground mt-2">Keep slides simple. Let your model and reasoning do the work.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Final model and dashboard are accurate and clear</li>
                <li>Storyline links analysis to an actual business choice</li>
                <li>Risks and assumptions are addressed directly</li>
                <li>Presentation hits 4–5 minutes with confident pacing</li>
                <li>Evidence uploaded: final files + slides + peer reviews</li>
              </ul>
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
              <CardTitle>Audience Peer Review</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <PeerCritiqueForm projectTitle="Year‑1 Startup Model — Final Presentation" unitNumber={8} />
              <div className="text-sm text-muted-foreground">
                Use the rubric categories above when submitting feedback.
              </div>
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
              <CardTitle>Post‑Presentation Reflection</CardTitle>
            </CardHeader>
            <CardContent>
              <ReflectionJournal
                unitTitle="Post‑Presentation Reflection"
                prompts={[
                  {
                    id: 'u08-l10-reflect-1',
                    category: 'adaptability',
                    prompt: 'What question from the audience changed your view of the model? What will you improve next?',
                    placeholder: 'Describe the question, your insight, and your next step...'
                  }
                ]}
              />
            </CardContent>
          </Card>
        </section>
      </main>
      <PhaseFooter unit={unit08Data as any} lesson={lesson10Data as any} phase={phase as any} phases={lesson10Phases as any} />
    </div>
  )
}
