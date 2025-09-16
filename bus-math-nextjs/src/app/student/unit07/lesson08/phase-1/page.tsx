import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson08Data, unit07Data, lesson08Phases } from "../lesson-data"

export default function Page() {
  const phases = lesson08Phases
  const currentPhase = phases[0]

  return (
    <div className="min-h-screen bg-white">
      <PhaseHeader unit={unit07Data as any} lesson={lesson08Data as any} phase={currentPhase as any} phases={phases as any} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge>Phase 1: Introduction</Badge>
            <h1 className="text-2xl font-semibold">Milestone 1 — Project Definition</h1>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sarah’s Context</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Sarah Chen runs TechStart Solutions. She tracks laptops, monitors, and other gear. She also keeps
                inventory for small client projects. Today, you will set up a clear plan for how your team will
                manage asset depreciation and inventory valuation in Excel. Your work should be easy to follow and
                ready for an executive audience.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Business Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Define the problem, scope, stakeholders, and success metrics</li>
                  <li>Plan how data will be named, shared, and updated</li>
                  <li>Show a professional path from analysis to a decision</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Excel Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Map workbook tabs: inputs, SLN/DDB, FIFO/LIFO, dashboard</li>
                  <li>Plan validation rules and error checks for data</li>
                  <li>Outline dynamic method switching and clear outputs</li>
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
                Executives trust teams who start with a clear plan. A clean project definition and a workbook
                skeleton help you build fast and avoid mistakes. You will be able to explain what you are doing and
                why it helps the business.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Milestone 1 — Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Problem statement, scope, stakeholders, success metrics</li>
                <li>Data inventory + source plan + file naming convention</li>
                <li>Excel model plan (tabs, validations, method switching, dashboards)</li>
                <li>Risk/assumptions and mitigation plan</li>
                <li>Evidence: brief + workbook skeleton started</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Submission Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li>One‑page project brief (problem, scope, stakeholders, success metrics)</li>
                <li>Workbook skeleton with named tabs and placeholder sections</li>
                <li>Dataset selected (g1–g6) and saved to your team folder</li>
                <li>Risk/assumptions list with 2–3 mitigation steps</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Workflow Today (~45–60 min)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-1">
                <li>Plan: fill in brief and align on scope (10–15 min)</li>
                <li>Skeleton: create tabs and headings in Excel (15–20 min)</li>
                <li>Dataset: download your group’s CSV and connect it (10 min)</li>
                <li>Check‑in: quick review with teacher and adjust plan (10–15 min)</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resources — Datasets (g1–g6)</CardTitle>
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

          <ReflectionJournal unitTitle="Milestone 1 Reflection (CAP)" />
        </section>
      </main>
      <PhaseFooter unit={unit07Data as any} lesson={lesson08Data as any} phase={currentPhase as any} phases={phases as any} />
    </div>
  )
}

