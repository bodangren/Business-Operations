import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson08Data, unit06Data, lesson08Phases } from "../lesson-data"
import { projectGroups } from "../../project-workbooks"

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
              Phase 1: Planning + Workbook Setup
            </Badge>
            <h1 className="text-2xl font-semibold">Milestone 1 - Plan the Scenario and Set Up Your Workbook</h1>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Context: Apply the Unit to a New Business</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed">
                Lessons 1-7 taught you how to sort costs, calculate contribution margin, test break-even,
                reverse-solve for target profit, build sensitivity tables, and summarize a recommendation.
                Now your group will apply that same logic to a new business scenario. Today is not about
                starting from scratch. It is about planning the work, opening the correct workbook, and
                building the first sheets cleanly.
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
                  <li>Understand your assigned business, limits, and profit target</li>
                  <li>Sort raw costs into fixed and variable categories</li>
                  <li>Choose a starting price strategy to investigate</li>
                  <li>Plan how your team will justify one final recommendation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Excel Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Download the correct group workbook and save your team copy</li>
                  <li>Complete the <strong>CostSetup</strong> sheet by classifying each cost</li>
                  <li>Check that fixed cost, variable cost, capacity, and target cells update correctly</li>
                  <li>Build or verify the first analysis tabs: <strong>PriceOptions</strong> and <strong>Feasibility</strong></li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Start Here - Download Your Assigned Workbook</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>
                Use only the workbook for your assigned group. Do not switch scenarios. Your workbook already
                contains the project tab structure. Your job is to fill it in, test it, and defend your pricing
                recommendation with evidence.
              </p>
              <ul className="list-disc list-inside space-y-2">
                {projectGroups.map((group) => (
                  <li key={group.id}>
                    <strong>{group.label} - {group.businessName}</strong> ({group.businessType}) - capacity {group.capacity},
                    target profit ${group.targetProfit} -
                    {" "}
                    <a className="underline" href={group.workbookPath} download>
                      {group.workbookFile}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Workbook Map</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>CostSetup</strong> - sort each cost into fixed or variable and confirm the totals</li>
                <li><strong>PriceOptions</strong> - compare the three given price ideas using contribution margin and projected profit</li>
                <li><strong>Feasibility</strong> - check break-even units and capacity limits</li>
                <li><strong>TargetProfit</strong>, <strong>PriceSensitivity</strong>, <strong>ProfitMatrix</strong> - finish these in Lesson 9</li>
                <li><strong>Dashboard</strong> - leave notes now, complete the final recommendation later</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Workflow Today (45 minutes)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-1">
                <li>Download your team workbook and rename it with your class period and team name</li>
                <li>Complete the <strong>CostSetup</strong> sheet by sorting every cost item into fixed or variable</li>
                <li>Check the totals on the right side and make sure your assumptions block is updating correctly</li>
                <li>Use those totals to complete <strong>PriceOptions</strong> and <strong>Feasibility</strong></li>
                <li>Write one sentence about which option looks strongest so far and why</li>
                <li>Check in with the teacher before moving on</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Milestone 1 - Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Your team has the correct workbook open and renamed</li>
                <li>Every cost item is classified in <strong>CostSetup</strong></li>
                <li>Fixed cost total and variable cost per unit are correct</li>
                <li><strong>PriceOptions</strong> and <strong>Feasibility</strong> are complete</li>
                <li>Your team has a draft claim about the best current option</li>
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
                <li>Team workbook saved with a clear file name</li>
                <li>Completed <strong>CostSetup</strong>, <strong>PriceOptions</strong>, and <strong>Feasibility</strong> tabs</li>
                <li>One written sentence naming the most promising option so far</li>
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
