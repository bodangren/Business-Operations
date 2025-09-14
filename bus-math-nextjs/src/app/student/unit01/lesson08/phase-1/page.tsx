'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson08Data, unit01Data, lesson08Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

const currentPhase = lesson08Phases[0]

const businessObjectives = [
  "Define a clear problem statement and project scope for Smart Ledger",
  "Identify stakeholders (Sarah, clients, potential investors) and their needs",
  "Set success metrics that show accuracy, speed, and investor readiness"
]

const excelObjectives = [
  "Plan workbook tabs (Transactions, Accounts, Trial Balance, Checks, Dashboard)",
  "Use Excel Tables, structured references, SUMIF/SUMIFS for totals",
  "Design data validation and a trial-balance auto-check to prevent errors"
]

const rubric = [
  { name: "Technical Accuracy", weight: "50%", desc: "Correct formulas, validations, and reliable results" },
  { name: "Strategic Rationale", weight: "20%", desc: "Explains business goals and trade-offs" },
  { name: "Communication & Clarity", weight: "15%", desc: "Concise story and audience-fit visuals" },
  { name: "Time Management", weight: "10%", desc: "Stays within time and clean transitions" },
  { name: "Q&A Readiness", weight: "5%", desc: "Confident, concise responses" }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-white">
      <PhaseHeader unit={unit01Data} lesson={lesson08Data} phase={currentPhase} phases={lesson08Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-lg px-4 py-2">📌 Phase 1: Introduction</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card>
                <CardHeader>
                  <CardTitle>Project Definition — Smart Ledger for TechStart</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>
                    Sarah Chen runs TechStart Solutions, a small digital marketing company. She moves fast and takes on
                    new clients, but her old tracking system is messy. Today, you will define a clean plan for a
                    professional ledger. This plan must make sense to an executive audience and build investor trust.
                  </p>
                  <p>
                    Keep your writing simple and direct. Use terms like stakeholder, scope, and success metrics in ways
                    a client would understand. Your plan guides how you build the Excel model in the next sessions.
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
                  A well-defined plan saves time and reduces mistakes. Investors and clients look for controls that
                  prevent errors. Your checklist today becomes the standard you use to judge your final workbook.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Milestone 1 — Acceptance Criteria</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>Use this checkable list with your team as you draft and review:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><input type="checkbox" className="mt-1"/> <span>Problem statement, scope, stakeholders, and success metrics are clearly written.</span></li>
                    <li className="flex items-start gap-2"><input type="checkbox" className="mt-1"/> <span>Data inventory and source plan are listed; team sets a file naming convention.</span></li>
                    <li className="flex items-start gap-2"><input type="checkbox" className="mt-1"/> <span>Excel model plan lists tabs, validations, trial-balance check, and a small dashboard.</span></li>
                    <li className="flex items-start gap-2"><input type="checkbox" className="mt-1"/> <span>Risks/assumptions and simple mitigation steps are documented.</span></li>
                    <li className="flex items-start gap-2"><input type="checkbox" className="mt-1"/> <span>Evidence started: brief outline + workbook skeleton (tabs created, headers set).</span></li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Standard Rubric (Shown on all PBL pages)</CardTitle>
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
                  <CardTitle>Workflow Today (~45–60 min)</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Plan → create workbook skeleton → download dataset → team check-in. Keep your notes short and clear.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Resources — Group Datasets (reuse in Lessons 09–10)</CardTitle>
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
                  <CardTitle>Submission Checklist</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm space-y-2">
                  <ul className="list-disc list-inside space-y-1">
                    <li>One-page project brief (PDF or doc link)</li>
                    <li>Workbook skeleton (tabs set, headers added)</li>
                    <li>Link or path to dataset used (g1–g6)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reflection</CardTitle>
                </CardHeader>
                <CardContent>
                  <ReflectionJournal unitTitle="Milestone 1 Reflection" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit01Data} lesson={lesson08Data} phase={currentPhase} phases={lesson08Phases} />
    </div>
  )
}

