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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <PhaseHeader unit={unit06Data} lesson={lesson08Data} phase={currentPhase} phases={phases} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-blue-600 text-white">
              Phase 1: Project Kickoff
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Milestone 1 — Plan Your Scenario and Set Up Your Workbook</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lessons 1-7 taught you how to sort costs, calculate contribution margin, test break-even,
              reverse-solve for target profit, build sensitivity tables, and summarize a recommendation.
              Now your group will apply that same logic to a <strong>new business scenario</strong>.
              Today is not about starting from scratch — it is about planning the work, opening the correct workbook,
              and building the first sheets cleanly.
            </p>
          </div>

          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="text-xl">Why Your Group Gets a Different Business</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-lg leading-relaxed">
                In Lesson 07, the whole class rehearsed with the same teacher-provided data so everyone
                could learn the workbook structure and quality standard together. Today, each group gets
                its own business with different costs, capacity limits, and profit targets. This is on purpose.
              </p>
              <p className="text-lg leading-relaxed">
                The workbook structure stays exactly the same. What changes is the data you plug in
                and the recommendation your team builds from that data. If your workbook architecture
                matches Lesson 07, you are on the right track.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Business Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Understand your assigned business, constraints, and profit target</li>
                  <li>Sort raw costs into fixed and variable categories with clear reasoning</li>
                  <li>Choose a starting price strategy to investigate in your analysis</li>
                  <li>Plan how your team will justify one final recommendation using workbook evidence</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Workbook Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Download the correct group workbook and save your team copy with a clear name</li>
                  <li>Complete the <strong>CostSetup</strong> sheet by classifying each cost item</li>
                  <li>Check that fixed cost, variable cost, capacity, and target cells update correctly</li>
                  <li>Build or verify the first analysis tabs: <strong>PriceOptions</strong> and <strong>Feasibility</strong></li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle>Download Your Assigned Workbook</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Use <strong>only</strong> the workbook for your assigned group. Do not switch scenarios.
                Your workbook already contains the project tab structure from Lesson 07. Your job is to
                fill it in, test it, and defend your pricing recommendation with evidence.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                {projectGroups.map((group) => (
                  <Card key={group.id} className="bg-gray-50">
                    <CardContent className="pt-4 space-y-2">
                      <h3 className="font-semibold text-gray-900">{group.label}: {group.businessName}</h3>
                      <p className="text-sm text-gray-600">{group.businessType}</p>
                      <ul className="text-sm space-y-1">
                        <li><strong>Capacity:</strong> {group.capacity} units/month</li>
                        <li><strong>Target Profit:</strong> ${group.targetProfit}/month</li>
                      </ul>
                      <a
                        className="inline-block text-blue-600 hover:text-blue-800 underline text-sm font-medium"
                        href={group.workbookPath}
                        download
                      >
                        Download {group.workbookFile}
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-800">
                  <strong>File naming rule:</strong> Save your workbook as <code className="bg-amber-100 px-1 rounded">Period-TeamName-Unit06-Project.xlsx</code>
                  (e.g., <code className="bg-amber-100 px-1 rounded">P3-ShineTeam-Unit06-Project.xlsx</code>).
                  This helps your teacher find and grade your work quickly.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-600">
            <CardHeader>
              <CardTitle>Workbook Map — Seven Sheets, Same Structure as Lesson 07</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                Your workbook has the exact same seven-sheet structure you rehearsed in Lesson 07.
                Today you will complete the first three sheets and start planning the rest.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-green-600 font-bold text-lg">1.</span>
                  <div>
                    <strong>CostSetup</strong> — Sort each cost into fixed or variable. Enter amounts.
                    Confirm totals update correctly. <em className="text-gray-600">(Complete today)</em>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-green-600 font-bold text-lg">2.</span>
                  <div>
                    <strong>PriceOptions</strong> — Compare three price ideas using contribution margin
                    and projected profit. <em className="text-gray-600">(Complete today)</em>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <span className="text-green-600 font-bold text-lg">3.</span>
                  <div>
                    <strong>Feasibility</strong> — Check break-even units against your capacity limit.
                    Flag any option that does not fit. <em className="text-gray-600">(Complete today)</em>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-400 font-bold text-lg">4.</span>
                  <div>
                    <strong>TargetProfit</strong> — Solve for the price or units needed to hit your group target.
                    <em className="text-gray-600"> (Lesson 9)</em>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-400 font-bold text-lg">5.</span>
                  <div>
                    <strong>PriceSensitivity</strong> — Test how profit changes as price changes.
                    <em className="text-gray-600"> (Lesson 9)</em>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-400 font-bold text-lg">6.</span>
                  <div>
                    <strong>ProfitMatrix</strong> — Build the full price-by-volume grid.
                    <em className="text-gray-600"> (Lesson 9)</em>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-gray-400 font-bold text-lg">7.</span>
                  <div>
                    <strong>Dashboard</strong> — State your final recommendation, downside risk, and short explanation.
                    <em className="text-gray-600"> (Lesson 9-10)</em>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-600">
            <CardHeader>
              <CardTitle>Workflow Today — 45 Minutes</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li><strong>Minutes 0-5:</strong> Download your team workbook and rename it with your class period and team name</li>
                <li><strong>Minutes 5-15:</strong> Read your group&apos;s business scenario together. Discuss constraints and target profit.</li>
                <li><strong>Minutes 15-25:</strong> Complete the <strong>CostSetup</strong> sheet — sort every cost item into fixed or variable</li>
                <li><strong>Minutes 25-30:</strong> Check the totals on the right side. Make sure your assumptions block is updating correctly.</li>
                <li><strong>Minutes 30-40:</strong> Use those totals to complete <strong>PriceOptions</strong> and <strong>Feasibility</strong></li>
                <li><strong>Minutes 40-45:</strong> Write one sentence about which option looks strongest so far and why. Check in with your teacher.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-600">
            <CardHeader>
              <CardTitle>Milestone 1 — Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">Your team must meet <strong>all five</strong> criteria before the end of class:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Your team has the <strong>correct workbook</strong> open and renamed with the naming convention</li>
                <li>Every cost item is classified in <strong>CostSetup</strong> as fixed or variable</li>
                <li>Fixed cost total and variable cost per unit are <strong>correct</strong> and match your scenario</li>
                <li><strong>PriceOptions</strong> and <strong>Feasibility</strong> sheets are complete with calculations</li>
                <li>Your team has a <strong>draft claim</strong> about the best current option with at least one supporting number</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Standard Rubric (Capstone-Aligned)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Technical Accuracy — 50%</strong>: Correct modeling, formulas, validations</li>
                <li><strong>Strategic Rationale — 20%</strong>: Aligns to business goals and trade-offs</li>
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
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Team workbook saved with a clear file name following the naming convention</li>
                <li>Completed <strong>CostSetup</strong>, <strong>PriceOptions</strong>, and <strong>Feasibility</strong> tabs</li>
                <li>One written sentence naming the most promising option so far with at least one cited number</li>
              </ul>
            </CardContent>
          </Card>

          <ReflectionJournal unitTitle="Milestone 1 Reflection — What did your team learn about your business today?" />
        </section>
      </main>
      <PhaseFooter unit={unit06Data} lesson={lesson08Data} phase={currentPhase} phases={phases} />
    </div>
  )
}
