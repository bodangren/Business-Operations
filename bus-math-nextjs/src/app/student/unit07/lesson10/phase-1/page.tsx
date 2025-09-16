import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson10Data, unit07Data, lesson10Phases } from "../lesson-data"

export default function Page() {
  const phases = lesson10Phases
  const currentPhase = phases[0]

  return (
    <div className="min-h-screen bg-white">
      <PhaseHeader unit={unit07Data as any} lesson={lesson10Data as any} phase={currentPhase as any} phases={phases as any} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge>Phase 1: Assessment</Badge>
            <h1 className="text-2xl font-semibold">Milestone 3 — Presentations + Peer Review</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Business Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Share a clear, decision‑ready story for leaders</li>
                  <li>Explain risks, trade‑offs, and next steps</li>
                  <li>Respond to questions with confidence and evidence</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Excel Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Demonstrate accurate SLN/DDB and FIFO/LIFO models</li>
                  <li>Show a clean dashboard with key insights</li>
                  <li>Use method switching to answer “what if” questions</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Why This Matters</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Clear communication turns good analysis into strong decisions. Your final model and presentation
                should build trust and help leaders act with confidence.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Presentation Flow (40 minutes)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li>5 min setup</li>
                <li>Six groups × ~5 min each (presentation + brief Q&A)</li>
                <li>5 min wrap and next steps</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Final model and dashboard are accurate and clear</li>
                <li>Story connects analysis to a business decision; risks addressed</li>
                <li>Presentation hits 4–5 minutes; Q&A readiness shown</li>
                <li>Evidence: final files + slides + peer reviews submitted</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Standard Rubric (Capstone‑Aligned)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Technical Accuracy — 50%</strong>: Correct modeling, formulas, validations</li>
                <li><strong>Strategic Rationale — 20%</strong>: Aligns to business goals and trade‑offs</li>
                <li><strong>Communication & Clarity — 15%</strong>: Concise story, visuals, audience fit</li>
                <li><strong>Time Management — 10%</strong>: Pacing, clean transitions</li>
                <li><strong>Q&A Readiness — 5%</strong>: Confident, concise responses</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Peer Review (Audience)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <PeerCritiqueForm projectTitle="Unit 07 Presentations" unitNumber={7} />
              <p className="text-sm text-muted-foreground">Audience reviewers submit feedback by rubric category.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resources — Same Datasets (g1–g6)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li><a className="underline" href="/resources/unit07-pbl-asset-inventory-g1.csv" download>unit07-pbl-asset-inventory-g1.csv</a></li>
                <li><a className="underline" href="/resources/unit07-pbl-asset-inventory-g2.csv" download>unit07-pbl-asset-inventory-g2.csv</a></li>
                <li><a className="underline" href="/resources/unit07-pbl-asset-inventory-g3.csv" download>unit07-pbl-asset-inventory-g3.csv</a></li>
                <li><a className="underline" href="/resources/unit07-pbl-asset-inventory-g4.csv" download>unit07-pbl-asset-inventory-g4.csv</a></li>
                <li><a className="underline" href="/resources/unit07-pbl-asset-inventory-g5.csv" download>unit07-pbl-asset-inventory-g5.csv</a></li>
                <li><a className="underline" href="/resources/unit07-pbl-asset-inventory-g6.csv" download>unit07-pbl-asset-inventory-g6.csv</a></li>
              </ul>
            </CardContent>
          </Card>

          <ReflectionJournal unitTitle="Post‑Presentation Reflection (CAP)" />
        </section>
      </main>
      <PhaseFooter unit={unit07Data as any} lesson={lesson10Data as any} phase={currentPhase as any} phases={phases as any} />
    </div>
  )
}

