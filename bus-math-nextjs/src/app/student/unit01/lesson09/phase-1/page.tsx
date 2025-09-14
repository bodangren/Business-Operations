'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson09Data, unit01Data, lesson09Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

const currentPhase = lesson09Phases[0]

const businessObjectives = [
  "Deliver a working model that matches stakeholder needs",
  "Test against success metrics; track fixes and updates",
  "Practice a concise business story for investors"
]

const excelObjectives = [
  "Implement Tables, SUMIF/SUMIFS, and trial-balance checks",
  "Add data validation and basic error flags for self-audit",
  "Document test cases and results for reliability"
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-white">
      <PhaseHeader unit={unit01Data} lesson={lesson09Data} phase={currentPhase} phases={lesson09Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-lg px-4 py-2">✅ Phase 1: Assessment</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card>
                <CardHeader>
                  <CardTitle>Milestone 2 — Prototype + Rehearsal</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>
                    Your prototype should run on realistic data and show accurate totals and checks. Keep the model
                    simple, fast, and professional. Then rehearse your story: problem → solution → live demo.
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
                  <CardTitle>Milestone 2 — Acceptance Criteria</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Working prototype implements planned Excel features on real data</li>
                    <li>Validations and error checks pass; test scenarios documented</li>
                    <li>Rehearsal complete; peer feedback incorporated with change notes</li>
                    <li>Evidence: prototype workbook + brief test summary</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Peer Feedback — Structured Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <PeerCritiqueForm projectTitle="Unit 01 Smart Ledger — Prototype Review" peerName="Partner" unitNumber={1} />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resources — Group Datasets (same as Lesson 08)</CardTitle>
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
                  <ReflectionJournal unitTitle="Milestone 2 Reflection" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit01Data} lesson={lesson09Data} phase={currentPhase} phases={lesson09Phases} />
    </div>
  )
}

