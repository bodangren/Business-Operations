import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson08Data, unit05Data, lesson08Phases } from "../lesson-data"

export default function Page() {
  const phases = lesson08Phases
  const currentPhase = phases[0]

  return (
    <div className="min-h-screen bg-white">
      <PhaseHeader unit={unit05Data as any} lesson={lesson08Data as any} phase={currentPhase as any} phases={phases as any} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge>
              Phase 1: Project Definition
            </Badge>
            <h1 className="text-2xl font-semibold">Milestone 1 — Define the Payroll Cash‑Flow Problem</h1>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Context: Sarah’s TechStart and Payroll Timing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed">
                Sarah Chen runs TechStart Solutions, a small but growing digital services business. 
                Two Fridays each month, payroll hits her bank account before several client payments clear. 
                Once, this timing mismatch created an overdraft and late fees. In this project, your team will 
                design an Excel payroll system that calculates pay correctly and also helps predict cash‑outs 
                so Sarah can avoid that stress.
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
                  <li>Calculate accurate gross → net pay for hourly, salaried, and tipped employees</li>
                  <li>Apply federal/state tax tables to compute withholdings and employer liabilities</li>
                  <li>Reconcile payroll register with bank transactions to spot timing issues</li>
                  <li>Forecast cash needs for upcoming payroll cycles</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Excel Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>XLOOKUP for employee data and tax tables</li>
                  <li>IF logic for deductions and overtime conditions</li>
                  <li>SUMIFS and conditional formatting for reconciliation</li>
                  <li>Data validation for clean, reliable inputs</li>
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
                Executive audiences and investors care about predictable cash flow and clean processes. 
                A payroll system that calculates correctly, prevents errors, and forecasts cash needs builds trust. 
                Your work shows that you can turn math into decisions that keep a business stable.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Milestone 1 — Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Problem statement, scope, stakeholders, and success metrics defined</li>
                <li>Data inventory and source plan with file naming convention</li>
                <li>Excel model plan: tabs, validations, method switching, dashboards</li>
                <li>Risks/assumptions identified with mitigation plan</li>
                <li>Evidence prepared: 1–2 page brief + workbook skeleton started</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resources — Group Datasets (Download)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li><a className="underline" href="/resources/unit05-pbl-payroll-cashflow-g1.csv" download>unit05-pbl-payroll-cashflow-g1.csv</a></li>
                <li><a className="underline" href="/resources/unit05-pbl-payroll-cashflow-g2.csv" download>unit05-pbl-payroll-cashflow-g2.csv</a></li>
                <li><a className="underline" href="/resources/unit05-pbl-payroll-cashflow-g3.csv" download>unit05-pbl-payroll-cashflow-g3.csv</a></li>
                <li><a className="underline" href="/resources/unit05-pbl-payroll-cashflow-g4.csv" download>unit05-pbl-payroll-cashflow-g4.csv</a></li>
                <li><a className="underline" href="/resources/unit05-pbl-payroll-cashflow-g5.csv" download>unit05-pbl-payroll-cashflow-g5.csv</a></li>
                <li><a className="underline" href="/resources/unit05-pbl-payroll-cashflow-g6.csv" download>unit05-pbl-payroll-cashflow-g6.csv</a></li>
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
              <CardTitle>Workflow Today (45–60 min)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-1">
                <li>Plan: define problem, scope, risks, and success metrics</li>
                <li>Skeleton: set up tabs, validations, and a dashboard outline</li>
                <li>Download: pick your group dataset (g1–g6) and load to Excel</li>
                <li>Check‑in: quick review with teacher using acceptance criteria</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Submission Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li>Project brief (PDF or Google Doc link)</li>
                <li>Workbook skeleton (tabs created, validations started)</li>
                <li>Dataset imported and documented (source + file naming)</li>
              </ul>
            </CardContent>
          </Card>

          <ReflectionJournal unitTitle="Milestone 1 Reflection (CAP)" />
        </section>
      </main>
      <PhaseFooter unit={unit05Data as any} lesson={lesson08Data as any} phase={currentPhase as any} phases={phases as any} />
    </div>
  )
}

