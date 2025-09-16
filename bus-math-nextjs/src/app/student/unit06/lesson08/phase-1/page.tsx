import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson08Data, unit06Data, lesson08Phases } from "../lesson-data"

export default function Page() {
  const phases = lesson08Phases
  const currentPhase = phases[0]

  return (
    <div className="min-h-screen bg-white">
      <PhaseHeader unit={unit06Data as any} lesson={lesson08Data as any} phase={currentPhase as any} phases={phases as any} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge>
              Phase 1: Project Definition
            </Badge>
            <h1 className="text-2xl font-semibold">Milestone 1 — Define the Pricing Strategy Project</h1>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Context: Sarah’s PriceLab Decision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed">
                Sarah Chen runs TechStart Solutions, a digital services startup. She wants to set prices that
                win customers without hurting profit. This unit uses Cost‑Volume‑Profit (CVP) analysis to make
                smart pricing choices. Today your team defines the project: the problem, the data you’ll use,
                and the Excel model you will build.
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
                  <li>Calculate markup vs. margin and determine break‑even points</li>
                  <li>Construct and interpret CVP graphs for decisions</li>
                  <li>Analyze competitor pricing and market positioning</li>
                  <li>Develop a clear, data‑driven pricing recommendation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Excel Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Power Query for importing and cleaning competitor data</li>
                  <li>Goal Seek for target profit price/volume scenarios</li>
                  <li>One‑ and two‑variable Data Tables for sensitivity</li>
                  <li>Professional CVP charts with clear labels</li>
                  <li>Data validation and error checks for reliable inputs</li>
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
                Executives and investors want pricing that is both competitive and profitable. A clean CVP model
                with clear assumptions shows how you think, how you test risk, and how you guide decisions.
                That builds trust.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Milestone 1 — Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Problem statement, scope, stakeholders, and success metrics</li>
                <li>Data inventory + source plan + file naming convention</li>
                <li>Excel model plan (tabs, validations, method switching, dashboards)</li>
                <li>Risks/assumptions identified with mitigation plan</li>
                <li>Evidence prepared: 1–2 page brief + workbook skeleton started</li>
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
              <CardTitle>Resources — Group Datasets (Download)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li><a className="underline" href="/resources/unit06-pbl-pricing-cvp-g1.csv" download>unit06-pbl-pricing-cvp-g1.csv</a></li>
                <li><a className="underline" href="/resources/unit06-pbl-pricing-cvp-g2.csv" download>unit06-pbl-pricing-cvp-g2.csv</a></li>
                <li><a className="underline" href="/resources/unit06-pbl-pricing-cvp-g3.csv" download>unit06-pbl-pricing-cvp-g3.csv</a></li>
                <li><a className="underline" href="/resources/unit06-pbl-pricing-cvp-g4.csv" download>unit06-pbl-pricing-cvp-g4.csv</a></li>
                <li><a className="underline" href="/resources/unit06-pbl-pricing-cvp-g5.csv" download>unit06-pbl-pricing-cvp-g5.csv</a></li>
                <li><a className="underline" href="/resources/unit06-pbl-pricing-cvp-g6.csv" download>unit06-pbl-pricing-cvp-g6.csv</a></li>
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
              <CardTitle>Submission Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li>Project brief (PDF or cloud doc link)</li>
                <li>Workbook skeleton (tabs created, validations started)</li>
                <li>Dataset imported and documented (source + file naming)</li>
              </ul>
            </CardContent>
          </Card>

          <ReflectionJournal unitTitle="Milestone 1 Reflection (CAP)" />
        </section>
      </main>
      <PhaseFooter unit={unit06Data as any} lesson={lesson08Data as any} phase={currentPhase as any} phases={phases as any} />
    </div>
  )
}

