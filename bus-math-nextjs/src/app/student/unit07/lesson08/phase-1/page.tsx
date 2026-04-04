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
      <PhaseHeader unit={unit07Data} lesson={lesson08Data} phase={currentPhase} phases={phases} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge>Phase 1: Kickoff</Badge>
            <h1 className="text-2xl font-semibold">Milestone 1 — Project Kickoff & Workbook Setup</h1>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>From Rehearsal to Real Project</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                In Lesson 07, every student worked with the same shared dataset and the same workbook structure. That was your dress rehearsal. Today, you move into the real project.
              </p>
              <p>
                Each group now receives its own inventory dataset from a different business. The workbook structure stays exactly the same as Lesson 07. What changes is the data, the business context, and your team's recommendation.
              </p>
              <p>
                Sarah Chen needs your team to analyze her client's inventory data and recommend the best inventory valuation method. Your recommendation must be backed by numbers from your workbook, not opinions.
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
                  <li>Define the inventory problem, scope, and stakeholders for your assigned business</li>
                  <li>Identify what success looks like: accurate COGS, reliable ending inventory, clear method recommendation</li>
                  <li>Plan how your team will work through the milestone</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Workbook Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Open and name your group's assigned inventory dataset</li>
                  <li>Set up the workbook with the same sheet structure from Lesson 07</li>
                  <li>Begin entering your group's data into the Inputs, BeginningInventory, and Purchases sheets</li>
                  <li>Start calculating goods available for sale and COGS</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Your Group's Dataset</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Each group has been assigned one inventory dataset. Use only the file assigned to your group. Do not use another group's data.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-semibold">Group Assignments</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Group 1:</strong> <a className="underline" href="/resources/unit07-pbl-asset-inventory-g1.csv" download>unit07-pbl-inventory-g1.csv</a></li>
                    <li><strong>Group 2:</strong> <a className="underline" href="/resources/unit07-pbl-asset-inventory-g2.csv" download>unit07-pbl-inventory-g2.csv</a></li>
                    <li><strong>Group 3:</strong> <a className="underline" href="/resources/unit07-pbl-asset-inventory-g3.csv" download>unit07-pbl-inventory-g3.csv</a></li>
                    <li><strong>Group 4:</strong> <a className="underline" href="/resources/unit07-pbl-asset-inventory-g4.csv" download>unit07-pbl-inventory-g4.csv</a></li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">File Naming Convention</h3>
                  <p className="text-sm">
                    Save your workbook as: <code className="bg-gray-100 px-1 rounded">Unit07_Project_GroupX.xlsx</code> where X is your group number.
                  </p>
                  <p className="text-sm">
                    Keep your dataset CSV in the same folder as your workbook.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Workbook Structure — Same as Lesson 07</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Your project workbook must use the exact same sheet structure you practiced in Lesson 07. Do not rename, remove, or reorganize these sheets.
              </p>
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold mb-2">Data Sheets</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>ReadMe</strong> — Project brief and team info</li>
                    <li><strong>Inputs</strong> — Key assumptions and parameters</li>
                    <li><strong>BeginningInventory</strong> — Opening stock levels and costs</li>
                    <li><strong>Purchases</strong> — Dated purchase transactions</li>
                    <li><strong>Sales</strong> — Dated sales transactions</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Analysis Sheets</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Valuation</strong> — FIFO, LIFO, Specific ID, Weighted Avg calculations</li>
                    <li><strong>MethodCompare</strong> — Side-by-side method comparison</li>
                    <li><strong>Checks</strong> — Reconciliation and error checks</li>
                    <li><strong>Dashboard</strong> — Visual summary of findings</li>
                    <li><strong>Recommendation</strong> — Claim, evidence, and risk statement</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Milestone 1 — Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Correct workbook opened and named with your group number</li>
                <li>All required sheets created with the Lesson 07 structure</li>
                <li>BeginningInventory and Purchases sheets populated with your group's data</li>
                <li>Goods available for sale calculated correctly</li>
                <li>One draft claim or early direction statement about which method might fit best</li>
                <li>Risk/assumptions list with at least 2 mitigation steps</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Workflow Today (~55 min)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-1">
                <li><strong>Plan (10 min):</strong> Read your dataset, discuss the business context, assign roles</li>
                <li><strong>Setup (15 min):</strong> Create workbook, name it correctly, set up all required sheets</li>
                <li><strong>Data Entry (15 min):</strong> Enter BeginningInventory and Purchases data from your CSV</li>
                <li><strong>Initial Analysis (10 min):</strong> Calculate goods available for sale, draft early claim</li>
                <li><strong>Check-in (5 min):</strong> Quick review with teacher, confirm you're on track</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rubric — Milestone 1</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Workbook Setup (40%)</strong>: All sheets present, correctly named, data entered accurately</li>
                <li><strong>Initial Analysis (30%)</strong>: Goods available for sale calculated, early claim shows reasoning</li>
                <li><strong>Team Organization (15%)</strong>: Roles assigned, file naming correct, data source documented</li>
                <li><strong>Risk Planning (15%)</strong>: At least 2 risks identified with mitigation steps</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What Changes in Lessons 09 and 10</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                <strong>Lesson 09:</strong> Complete the remaining sheets (Valuation, MethodCompare, Checks, Dashboard). Write your full recommendation with cited workbook numbers. Rehearse your explanation with peer critique.
              </p>
              <p>
                <strong>Lesson 10:</strong> Final polish, presentation, and submission. Your team will defend your method recommendation to an audience.
              </p>
            </CardContent>
          </Card>

          <ReflectionJournal unitTitle="Milestone 1 Reflection — Project Kickoff" />
        </section>
      </main>
      <PhaseFooter unit={unit07Data} lesson={lesson08Data} phase={currentPhase} phases={phases} />
    </div>
  )
}
