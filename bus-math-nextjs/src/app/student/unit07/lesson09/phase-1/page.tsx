import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson09Data, unit07Data, lesson09Phases } from "../lesson-data"

export default function Page() {
  const phases = lesson09Phases
  const currentPhase = phases[0]

  return (
    <div className="min-h-screen bg-white">
      <PhaseHeader unit={unit07Data as any} lesson={lesson09Data as any} phase={currentPhase as any} phases={phases as any} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge>Phase 1: Assessment</Badge>
            <h1 className="text-2xl font-semibold">Milestone 2 — Prototype + Rehearsal</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Business Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Deliver a functioning asset/inventory model on realistic data</li>
                  <li>Reduce risk with clear validations and error checks</li>
                  <li>Document test scenarios and results for stakeholders</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Excel Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Implement SLN/DDB and FIFO/LIFO with dynamic switching</li>
                  <li>Add validation rules and conditional formatting checks</li>
                  <li>Prepare a clean summary/dashboard for quick review</li>
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
                Leaders trust prototypes that work. A validated model shows your analysis is reliable and your
                recommendations are grounded in math, not guesses. Rehearsal helps you speak with clarity and calm.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Milestone 2 — Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Working prototype implements SLN/DDB and FIFO/LIFO with switching</li>
                <li>Validations and error checks pass; test scenarios documented</li>
                <li>Rehearsal complete; peer feedback incorporated</li>
                <li>Evidence: prototype workbook + test summary + change notes</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Timeboxing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>~60 minutes build + ~20 minutes rehearsal and peer feedback.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Peer Review</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <PeerCritiqueForm projectTitle="Unit 07 Prototype Review" unitNumber={7} />
              <p className="text-sm text-muted-foreground">Use rubric categories below to guide feedback.</p>
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

          <ReflectionJournal unitTitle="Milestone 2 Reflection (CAP)" />
        </section>
      </main>
      <PhaseFooter unit={unit07Data as any} lesson={lesson09Data as any} phase={currentPhase as any} phases={phases as any} />
    </div>
  )
}

