'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson09Data, unit03Data, lesson09Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

const currentPhase = lesson09Phases[0]

const businessObjectives = [
  "Show a working three‑statement prototype with real data from your group's dataset",
  "Explain what the KPIs say about TechStart's health using numbers from all three statements",
  "Practice a clear, timed narrative for executives",
  "Document feedback and changes after rehearsal"
]

const excelObjectives = [
  "Link statements with XLOOKUP/INDEX‑MATCH and Tables",
  "Scenario switch updates drivers, statements, and KPIs",
  "Validation checks pass (A=L+E, NI→RE, cash reconcile)",
  "Dashboard charts and sparklines update correctly"
]

const recommendationStructure = [
  { label: "Claim", desc: "Clear recommendation (e.g., 'Invest in TechStart because...')" },
  { label: "Evidence (3+ numbers)", desc: "Cite at least one number from each statement: Income Statement, Balance Sheet, Cash Flow" },
  { label: "Risk/Limitation", desc: "One downside or uncertainty that qualifies your recommendation" },
  { label: "Why it still makes sense", desc: "Explain why the recommendation is justified despite the risk" }
]

const rubric = [
  { name: "Technical Accuracy", weight: "50%", desc: "Correct modeling, formulas, and validations" },
  { name: "Strategic Rationale", weight: "20%", desc: "Aligns insights to business goals and trade-offs" },
  { name: "Communication & Clarity", weight: "15%", desc: "Concise story, useful visuals, audience fit" },
  { name: "Time Management", weight: "10%", desc: "4–5 minutes, smooth transitions" },
  { name: "Q&A Readiness", weight: "5%", desc: "Confident, concise responses" }
]

export default function Unit03Lesson09Phase1() {
  return (
    <div className="min-h-screen bg-white">
      <PhaseHeader unit={unit03Data} lesson={lesson09Data} phase={currentPhase} phases={lesson09Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-lg px-4 py-2">🧪 Phase 1: Assessment</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card>
                <CardHeader>
                  <CardTitle>PBL Milestone 2 — Prototype + Rehearsal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>
                    Your prototype should implement the link engine and a basic dashboard. Run through your timed
                    story once, then rehearse with a peer. Use clear visuals. Keep your language short and direct.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Objectives</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-2">Business Objectives</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {businessObjectives.map((o) => (<li key={o}>{o}</li>))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Excel Objectives</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {excelObjectives.map((o) => (<li key={o}>{o}</li>))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why This Matters</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  A working model plus rehearsal builds confidence. It also reveals weak spots before Demo Day.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Milestone 2 — Acceptance Criteria</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><input type="checkbox" className="mt-1"/> <span>Prototype implements link engine and scenario switch with your group's data.</span></li>
                    <li className="flex items-start gap-2"><input type="checkbox" className="mt-1"/> <span>Validations pass (A=L+E, NI→RE, cash reconcile); test scenarios documented.</span></li>
                    <li className="flex items-start gap-2"><input type="checkbox" className="mt-1"/> <span>Rehearsal complete; peer feedback incorporated; timing on target.</span></li>
                    <li className="flex items-start gap-2"><input type="checkbox" className="mt-1"/> <span>Evidence: prototype workbook + test summary + change notes.</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommendation Structure — Claim, Evidence, Risk</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>Your final presentation needs a clear recommendation backed by numbers from all three statements:</p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    {recommendationStructure.map(r => (
                      <div key={r.label} className="border rounded-md p-3">
                        <div className="font-medium">{r.label}</div>
                        <p className="text-sm mt-1">{r.desc}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm mt-4">Example: "Invest in TechStart because revenue grew 15% to $2.1M (Income Statement), cash reserves reached $450K (Balance Sheet), and operating cash flow improved by $200K (Cash Flow Statement). The risk: customer concentration is 60%. Even with this limitation, the strong cash position supports growth."</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Standard Rubric</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-4">
                  {rubric.map(r => (
                    <div key={r.name} className="border rounded-md p-3">
                      <div className="flex items-center justify-between"><span className="font-medium">{r.name}</span><Badge variant="outline">{r.weight}</Badge></div>
                      <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Peer Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <PeerCritiqueForm projectTitle="Unit 03 — Three‑Statement Prototype" peerName="Reviewer" unitNumber={3} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resources — Use the Same Dataset (g1–g6)</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-2 text-sm">
                  {Array.from({length:6}).map((_,i)=>{
                    const n=i+1
                    const href=`/resources/unit03-pbl-three-statement-g${n}.csv`
                    return (<a key={n} href={href} download className="underline text-blue-600">Download g{n} dataset</a>)
                  })}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reflection</CardTitle>
                </CardHeader>
                <CardContent>
                  <ReflectionJournal unitTitle="Milestone 2 Reflection" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit03Data} lesson={lesson09Data} phase={currentPhase} phases={lesson09Phases} />
    </div>
  )
}

