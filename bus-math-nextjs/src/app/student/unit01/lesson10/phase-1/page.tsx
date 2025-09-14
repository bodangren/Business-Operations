'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson10Data, unit01Data, lesson10Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

const currentPhase = lesson10Phases[0]

const businessObjectives = [
  "Show a final, accurate model and dashboard",
  "Tell a clear story that leads to a business decision",
  "Demonstrate readiness for investor/client questions"
]

const excelObjectives = [
  "Verify formulas, validations, and totals are correct",
  "Ensure charts/tables update with the dataset",
  "Package workbook clearly with named tabs and notes"
]

const rubric = [
  { name: "Technical Accuracy", weight: "50%", desc: "Correct modeling, formulas, validations" },
  { name: "Strategic Rationale", weight: "20%", desc: "Business alignment and trade-offs explained" },
  { name: "Communication & Clarity", weight: "15%", desc: "Concise story and visuals" },
  { name: "Time Management", weight: "10%", desc: "4–5 minutes, clean transitions" },
  { name: "Q&A Readiness", weight: "5%", desc: "Confident, concise responses" }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-white">
      <PhaseHeader unit={unit01Data} lesson={lesson10Data} phase={currentPhase} phases={lesson10Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-lg px-4 py-2">🎤 Phase 1: Assessment</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card>
                <CardHeader>
                  <CardTitle>Presentation Day — Flow (40 minutes)</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm space-y-1">
                  <p>5 min setup; Six groups × ~5 min each; 5 min wrap</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Presenter order: g1 → g2 → g3 → g4 → g5 → g6</li>
                    <li>Timeboxing reminder: 4–5 minutes per group, then brief Q&amp;A</li>
                  </ul>
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
                  <CardTitle>Acceptance Criteria</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Final model and dashboard are accurate and clear</li>
                    <li>Storyline connects analysis to a decision; risks addressed</li>
                    <li>Presentation hits 4–5 minutes; Q&amp;A readiness shown</li>
                    <li>Evidence submitted: final files + slides + peer reviews</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Standard Rubric (capstone‑aligned)</CardTitle>
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
                  <PeerCritiqueForm projectTitle="Unit 01 Smart Ledger — Final Presentation" peerName="Presenter" unitNumber={1} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resources — Group Datasets</CardTitle>
                </CardHeader>
                <CardContent className="grid sm:grid-cols-2 gap-2 text-sm">
                  {Array.from({length:6}).map((_,i)=>{
                    const n=i+1
                    const href=`/resources/unit01-pbl-smart-ledger-g${n}.csv`
                    return (<a key={n} href={href} download className="underline text-blue-600">Download g{n} dataset</a>)
                  })}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reflection</CardTitle>
                </CardHeader>
                <CardContent>
                  <ReflectionJournal unitTitle="Milestone 3 Reflection" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit01Data} lesson={lesson10Data} phase={currentPhase} phases={lesson10Phases} />
    </div>
  )
}

