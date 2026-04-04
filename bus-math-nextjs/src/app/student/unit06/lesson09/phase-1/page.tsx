import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson09Data, unit06Data, lesson09Phases } from "../lesson-data"
import { projectGroups } from "../../project-workbooks"

export default function Page() {
  const phases = lesson09Phases
  const currentPhase = phases[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <PhaseHeader unit={unit06Data} lesson={lesson09Data} phase={currentPhase} phases={phases} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-600 text-white">
              Milestone 2: Workbook Completion and Rehearsal
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Complete Your Workbook and Rehearse the Recommendation</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In Lesson 08, your team opened your assigned workbook, classified costs, and completed the first analysis sheets.
              Today you will finish the remaining sheets, test your recommendation under different conditions, write a clear
              claim-evidence-risk statement, and rehearse with peer feedback. This is your dress rehearsal before the final
              presentation in Lesson 10.
            </p>
          </div>

          <Card className="border-l-4 border-l-emerald-600">
            <CardHeader>
              <CardTitle className="text-xl">Reopen Your Lesson 08 Workbook</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                Do not start a new file today. Reopen the exact workbook your team saved in Lesson 08.
                Your workbook already contains the seven-sheet structure from the rehearsal lesson.
                Your job today is to fill in the remaining sheets, test your recommendation, and practice explaining it.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-800">
                  <strong>Missing your file?</strong> Re-download your assigned starter workbook below and rebuild quickly
                  from yesterday&apos;s notes. Use the same file naming convention:{" "}
                  <code className="bg-amber-100 px-1 rounded">Period-TeamName-Unit06-Project.xlsx</code>
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2 mt-4">
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
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-l-4 border-l-blue-600">
              <CardHeader>
                <CardTitle>Business Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Turn your early analysis into one clear pricing recommendation</li>
                  <li>Test whether your recommendation still works under different price and volume conditions</li>
                  <li>Identify one risk or downside case and explain why your recommendation still makes sense</li>
                  <li>Prepare to explain your trade-offs to classmates acting as stakeholders</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-purple-600">
              <CardHeader>
                <CardTitle>Workbook Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Complete <strong>TargetProfit</strong> — solve for price or units to hit your target</li>
                  <li>Complete <strong>PriceSensitivity</strong> — test profit as price changes</li>
                  <li>Complete <strong>ProfitMatrix</strong> — build the full price-by-volume grid</li>
                  <li>Complete <strong>Dashboard</strong> — state recommendation, risk, and explanation</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle>Workbook Map — What to Complete Today</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                Your workbook has seven sheets. You completed the first three in Lesson 08.
                Today you will finish sheets 4-7 and polish the Dashboard for presentation.
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <div>
                    <strong>CostSetup</strong> — Completed in Lesson 08
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <div>
                    <strong>PriceOptions</strong> — Completed in Lesson 08
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <span className="text-green-600 font-bold text-lg">✓</span>
                  <div>
                    <strong>Feasibility</strong> — Completed in Lesson 08
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <span className="text-emerald-600 font-bold text-lg">4.</span>
                  <div>
                    <strong>TargetProfit</strong> — Solve for the price or units needed to hit your group target profit.
                    Use your fixed costs, variable cost per unit, and target profit from your scenario.
                    <em className="text-gray-600"> (Complete today)</em>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <span className="text-emerald-600 font-bold text-lg">5.</span>
                  <div>
                    <strong>PriceSensitivity</strong> — Hold units constant and test how profit changes as price changes.
                    Try at least 5 different prices around your recommended price.
                    <em className="text-gray-600"> (Complete today)</em>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <span className="text-emerald-600 font-bold text-lg">6.</span>
                  <div>
                    <strong>ProfitMatrix</strong> — Build the full price-by-volume grid.
                    Test at least 3 prices and 3 volume levels to see how profit changes.
                    <em className="text-gray-600"> (Complete today)</em>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                  <span className="text-emerald-600 font-bold text-lg">7.</span>
                  <div>
                    <strong>Dashboard</strong> — State your final recommendation, downside risk, and short explanation.
                    Cite at least three numbers from your workbook as evidence.
                    <em className="text-gray-600"> (Complete today, polish for Lesson 10)</em>
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
                <li><strong>Minutes 0-5:</strong> Reopen your team workbook and review what you completed in Lesson 08</li>
                <li><strong>Minutes 5-15:</strong> Complete the <strong>TargetProfit</strong> sheet — solve for your target</li>
                <li><strong>Minutes 15-25:</strong> Complete <strong>PriceSensitivity</strong> and <strong>ProfitMatrix</strong> sheets</li>
                <li><strong>Minutes 25-35:</strong> Complete the <strong>Dashboard</strong> sheet with your recommendation</li>
                <li><strong>Minutes 35-40:</strong> Write your claim-evidence-risk statement and rehearse with your team</li>
                <li><strong>Minutes 40-45:</strong> Exchange with another team for peer critique, then revise</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-indigo-600">
            <CardHeader>
              <CardTitle>Recommendation Structure — Claim, Evidence, Risk</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Your Dashboard and presentation notes should follow this structure. Every group must include all four parts:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <p className="font-semibold text-indigo-900">1. Claim</p>
                  <p className="text-sm text-gray-700">
                    Name the pricing option your team recommends. Be specific — include the exact price.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Example: &quot;We recommend pricing at $45 per unit.&quot;
                  </p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <p className="font-semibold text-indigo-900">2. Evidence</p>
                  <p className="text-sm text-gray-700">
                    Cite at least three numbers from your workbook: projected profit, break-even units, and capacity fit.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Example: &quot;At $45, we project $1,200 monthly profit, break even at 80 units, and stay within our 220-unit capacity.&quot;
                  </p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <p className="font-semibold text-indigo-900">3. Risk</p>
                  <p className="text-sm text-gray-700">
                    Explain one weakness or downside case from your sensitivity work.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Example: &quot;If volume drops below 60 units, we lose money. This could happen if a competitor undercuts us.&quot;
                  </p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <p className="font-semibold text-indigo-900">4. Close</p>
                  <p className="text-sm text-gray-700">
                    Explain why this option is still the best business choice despite the risk.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Example: &quot;Even with this risk, $45 gives us the best balance of profit and capacity fit compared to lower prices.&quot;
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-600">
            <CardHeader>
              <CardTitle>Milestone 2 — Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">Your team must meet <strong>all six</strong> criteria before the end of class:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>All seven workbook tabs are <strong>complete and readable</strong></li>
                <li><strong>TargetProfit</strong> sheet shows the price or units needed to hit your target profit</li>
                <li><strong>PriceSensitivity</strong> and <strong>ProfitMatrix</strong> sheets show tested scenarios with clear results</li>
                <li>The <strong>Dashboard</strong> names one final recommendation with at least three cited workbook numbers</li>
                <li>Your team has written a <strong>claim-evidence-risk statement</strong> following the structure above</li>
                <li>A <strong>peer critique</strong> has happened and feedback is recorded with at least one revision made</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Peer Critique</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Exchange workbooks with another team. Review their Dashboard and recommendation statement.
                Use the form below to give feedback focused on model accuracy, evidence clarity, and presentation readiness.
                After receiving feedback, make at least one revision before Lesson 10.
              </p>
              <PeerCritiqueForm projectTitle="PriceLab Workbook Review" unitNumber={6} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Standard Rubric (Capstone-Aligned)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Technical Accuracy — 50%</strong>: Correct modeling, formulas, validations, and sensitivity analysis</li>
                <li><strong>Strategic Rationale — 20%</strong>: Recommendation aligns to business goals and addresses trade-offs</li>
                <li><strong>Communication & Clarity — 15%</strong>: Concise story, clear visuals, appropriate for stakeholder audience</li>
                <li><strong>Time Management — 10%</strong>: Pacing during presentation, clean transitions between sections</li>
                <li><strong>Q&A Readiness — 5%</strong>: Confident, concise responses to stakeholder questions</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Submission Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Team workbook saved with clear file name following the naming convention</li>
                <li>All seven workbook tabs complete: CostSetup, PriceOptions, Feasibility, TargetProfit, PriceSensitivity, ProfitMatrix, Dashboard</li>
                <li>Dashboard includes recommendation, three cited numbers, and one risk statement</li>
                <li>Claim-evidence-risk statement written and rehearsed</li>
                <li>Peer critique completed with at least one revision made</li>
              </ul>
            </CardContent>
          </Card>

          <ReflectionJournal unitTitle="Milestone 2 Reflection — How confident is your team in your recommendation?" />
        </section>
      </main>
      <PhaseFooter unit={unit06Data} lesson={lesson09Data} phase={currentPhase} phases={phases} />
    </div>
  )
}
