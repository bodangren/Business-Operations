'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson08Data, unit03Data, lesson08Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

const currentPhase = lesson08Phases[0]

const businessObjectives = [
  "Define TechStart's project scope and investor-focused goals",
  "Identify stakeholders and their needs (Sarah, clients, investor)",
  "Select KPIs that tell a clear financial story",
  "Document risks, assumptions, and mitigation steps",
  "Set a clean file naming and version control plan"
]

const excelObjectives = [
  "Plan tabs for a three-statement model + dashboard",
  "Use Tables with XLOOKUP/INDEX-MATCH and named ranges",
  "Add scenario switch (SWITCH/CHOOSE) for what-if analysis",
  "Build validation checks (A=L+E, NI→RE, cash ties)",
  "Design charts, sparklines, and status rules (R/Y/G)"
]

const rubric = [
  { name: "Technical Accuracy", weight: "50%", desc: "Correct modeling, formulas, and validations" },
  { name: "Strategic Rationale", weight: "20%", desc: "Aligns insights to business goals and trade-offs" },
  { name: "Communication & Clarity", weight: "15%", desc: "Concise story, useful visuals, audience fit" },
  { name: "Time Management", weight: "10%", desc: "4–5 minutes, smooth transitions" },
  { name: "Q&A Readiness", weight: "5%", desc: "Confident, concise responses" }
]

export default function Unit03Lesson08Phase1() {
  return (
    <div className="min-h-screen bg-white">
      <PhaseHeader unit={unit03Data} lesson={lesson08Data} phase={currentPhase} phases={lesson08Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="text-lg px-4 py-2">📌 Phase 1: Introduction</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card>
                <CardHeader>
                  <CardTitle>PBL Milestone 1 — Project Definition</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>
                    Sarah Chen leads TechStart Solutions, a growing digital services company. Your team will build an
                    investor-ready three‑statement model with a simple KPI dashboard. Start with a clear plan. Write in
                    plain language that an executive can skim and trust.
                  </p>
                  <p>
                    Today you define your problem, choose the right KPIs, and set a clean Excel structure. You will use
                    one dataset for the whole project. A focused plan now saves hours later and helps avoid messy errors.
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
                  Executives and investors care about accuracy, controls, and story. A clear plan shows you can deliver
                  reliable numbers and a narrative that supports decisions.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Milestone 1 — Acceptance Criteria</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>Use this checkable list as you draft and review:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2"><input type="checkbox" className="mt-1"/> <span>Problem statement, scope, stakeholders, and success metrics are written in clear language.</span></li>
                    <li className="flex items-start gap-2"><input type="checkbox" className="mt-1"/> <span>Data inventory and source plan are listed; a file naming convention is set.</span></li>
                    <li className="flex items-start gap-2"><input type="checkbox" className="mt-1"/> <span>Excel model plan lists tabs, validations, method switching, and a small dashboard.</span></li>
                    <li className="flex items-start gap-2"><input type="checkbox" className="mt-1"/> <span>Risks/assumptions and simple mitigation steps are documented.</span></li>
                    <li className="flex items-start gap-2"><input type="checkbox" className="mt-1"/> <span>Evidence started: brief outline + workbook skeleton (tabs created, headers set).</span></li>
                    <li className="flex items-start gap-2"><input type="checkbox" className="mt-1"/> <span>One draft claim or early direction statement written (e.g., "TechStart should pursue...")</span></li>
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
                  <CardTitle>Workflow Today (~45–60 min)</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Plan → create workbook skeleton → download dataset → team check‑in.
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Group's Dataset</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-muted-foreground">
                  <p>Each team works with a unique dataset. Use only your assigned file for all lessons.</p>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                    <div className="border rounded-md p-3 text-center">
                      <Badge className="bg-blue-600">Group 1</Badge>
                      <p className="mt-2 font-medium">Dataset g1</p>
                      <a href="/resources/unit03-pbl-three-statement-g1.csv" download className="text-blue-600 underline text-sm">Download</a>
                    </div>
                    <div className="border rounded-md p-3 text-center">
                      <Badge className="bg-blue-600">Group 2</Badge>
                      <p className="mt-2 font-medium">Dataset g2</p>
                      <a href="/resources/unit03-pbl-three-statement-g2.csv" download className="text-blue-600 underline text-sm">Download</a>
                    </div>
                    <div className="border rounded-md p-3 text-center">
                      <Badge className="bg-blue-600">Group 3</Badge>
                      <p className="mt-2 font-medium">Dataset g3</p>
                      <a href="/resources/unit03-pbl-three-statement-g3.csv" download className="text-blue-600 underline text-sm">Download</a>
                    </div>
                    <div className="border rounded-md p-3 text-center">
                      <Badge className="bg-green-600">Group 4</Badge>
                      <p className="mt-2 font-medium">Dataset g4</p>
                      <a href="/resources/unit03-pbl-three-statement-g4.csv" download className="text-blue-600 underline text-sm">Download</a>
                    </div>
                    <div className="border rounded-md p-3 text-center">
                      <Badge className="bg-green-600">Group 5</Badge>
                      <p className="mt-2 font-medium">Dataset g5</p>
                      <a href="/resources/unit03-pbl-three-statement-g5.csv" download className="text-blue-600 underline text-sm">Download</a>
                    </div>
                    <div className="border rounded-md p-3 text-center">
                      <Badge className="bg-green-600">Group 6</Badge>
                      <p className="mt-2 font-medium">Dataset g6</p>
                      <a href="/resources/unit03-pbl-three-statement-g6.csv" download className="text-blue-600 underline text-sm">Download</a>
                    </div>
                  </div>
                  <p className="text-sm mt-4">Rename your file: <code>TechStart_Group[1-6]_ThreeStatement.xlsx</code></p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Submission Checklist</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-sm space-y-2">
                  <ul className="list-disc list-inside space-y-1">
                    <li>One‑page project brief (PDF or doc link)</li>
                    <li>Workbook skeleton (tabs set, headers added)</li>
                    <li>Link to dataset used (g1–g6)</li>
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

      <PhaseFooter unit={unit03Data} lesson={lesson08Data} phase={currentPhase} phases={lesson08Phases} />
    </div>
  )
}

