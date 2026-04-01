'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson10Data, unit03Data, lesson10Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

const currentPhase = lesson10Phases[0]

const businessObjectives = [
  "Present a clear financial story to investors",
  "Show accurate statements and a useful dashboard",
  "Address risks and assumptions with evidence",
  "Handle Q&A with concise, confident responses"
]

const excelObjectives = [
  "Demonstrate linked three‑statement model with controls",
  "Show scenario switch changing KPIs and statements",
  "Explain validations (A=L+E, NI→RE, cash ties)",
  "Use visuals that update fast and read clearly"
]

const rubric = [
  { name: "Technical Accuracy", weight: "50%", desc: "Correct modeling, formulas, and validations" },
  { name: "Strategic Rationale", weight: "20%", desc: "Aligns insights to business goals and trade-offs" },
  { name: "Communication & Clarity", weight: "15%", desc: "Concise story, useful visuals, audience fit" },
  { name: "Time Management", weight: "10%", desc: "4–5 minutes, clean transitions" },
  { name: "Q&A Readiness", weight: "5%", desc: "Confident, concise responses" }
]

export default function Unit03Lesson10Phase1() {
  return (
    <div className="min-h-screen bg-white">
      <PhaseHeader unit={unit03Data} lesson={lesson10Data} phase={currentPhase} phases={lesson10Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-lg px-4 py-2">🎤 Phase 1: Assessment</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card>
                <CardHeader>
                  <CardTitle>PBL Milestone 3 — Presentations + Peer Review</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>
                    Today is Demo Day. Keep your story simple and strong. Show how your workbook links the Income
                    Statement, Balance Sheet, and Cash Flow Statement. Then explain what the KPIs mean for TechStart.
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
                  <CardTitle>Audience & Standards</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="border rounded-md p-3">
                      <div className="font-medium">Audience</div>
                      <p className="text-sm mt-1">Mock investor panel (2-3 professionals)</p>
                    </div>
                    <div className="border rounded-md p-3">
                      <div className="font-medium">Presentation Standard</div>
                      <p className="text-sm mt-1">4-5 minutes, clear storyline, Excel live demo</p>
                    </div>
                    <div className="border rounded-md p-3">
                      <div className="font-medium">Submission Standard</div>
                      <p className="text-sm mt-1">Final workbook + one-pager + peer reviews</p>
                    </div>
                    <div className="border rounded-md p-3">
                      <div className="font-medium">Q&A Expectation</div>
                      <p className="text-sm mt-1">2-3 questions on assumptions, risks, or methodology</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Final Artifact Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <ul className="space-y-2">
                    <li><strong>Final Workbook:</strong> Complete three-statement model with working links, scenario switch, validations, and dashboard</li>
                    <li><strong>One-Pager:</strong> Executive summary (1 page max) with recommendation, 3+ evidence numbers, risk, and visuals</li>
                    <li><strong>Peer Reviews:</strong> Completed PeerCritiqueForm from at least one other group</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Acceptance Criteria</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><input type="checkbox" className="mt-1"/> <span>Final model and dashboard are accurate, clear, and responsive.</span></li>
                    <li className="flex items-start gap-2"><input type="checkbox" className="mt-1"/> <span>Storyline connects analysis to a real decision; risks are addressed.</span></li>
                    <li className="flex items-start gap-2"><input type="checkbox" className="mt-1"/> <span>Presentation hits 4–5 minutes; Q&amp;A readiness is shown.</span></li>
                    <li className="flex items-start gap-2"><input type="checkbox" className="mt-1"/> <span>Evidence submitted: final files + slides + peer reviews.</span></li>
                  </ul>
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
                  <CardTitle>Audience Peer Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <PeerCritiqueForm projectTitle="Unit 03 — Demo Day Peer Review" peerName="Presenter" unitNumber={3} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resources — Same Group Dataset (g1–g6)</CardTitle>
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
                  <div className="space-y-4">
                    <ReflectionJournal unitTitle="Milestone 3 Reflection" />
                    <div className="border-t pt-4 mt-4">
                      <p className="font-medium mb-2">What made your model trustworthy?</p>
                      <p className="text-sm text-muted-foreground">
                        Reflect on what technical choices (validations, linked formulas, scenario testing) and communication choices (clear visuals, evidence-backed claims, risk acknowledgment) made your three-statement model credible to investors.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit03Data} lesson={lesson10Data} phase={currentPhase} phases={lesson10Phases} />
    </div>
  )
}

