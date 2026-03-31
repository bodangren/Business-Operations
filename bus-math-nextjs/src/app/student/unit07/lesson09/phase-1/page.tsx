import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson09Data, unit07Data, lesson09Phases } from "../lesson-data"

export default function Page() {
  const phases = lesson09Phases
  const currentPhase = phases[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <PhaseHeader unit={unit07Data as any} lesson={lesson09Data as any} phase={currentPhase as any} phases={phases as any} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge variant="secondary">Milestone 2</Badge>
            <h1 className="text-3xl font-bold">Complete the Workbook & Rehearse the Recommendation</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Today your team finishes the analysis, writes the recommendation, and rehearses the explanation. 
              By the end of class, your workbook should be complete and your team should be able to defend its method choice.
            </p>
          </div>

          {/* Context: Where We Are */}
          <Card>
            <CardHeader>
              <CardTitle>Where You Left Off</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                In Lesson 08, your team opened its assigned inventory dataset, set up the workbook structure, 
                and began entering data into the BeginningInventory and Purchases sheets. You calculated goods 
                available for sale and drafted an early claim about which method might fit best.
              </p>
              <p>
                Today you complete the remaining sheets, test your workbook, write your full recommendation, 
                and rehearse with peer feedback. This is the most important work session of the project.
              </p>
            </CardContent>
          </Card>

          {/* Objectives */}
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Business Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Complete the inventory valuation for all four methods</li>
                  <li>Write a recommendation backed by workbook evidence, not opinion</li>
                  <li>Test your workbook with scenario checks to prove it works</li>
                  <li>Rehearse your explanation so it is clear and defensible</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Workbook Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Complete the Valuation sheet with FIFO, LIFO, Specific ID, and Weighted Average</li>
                  <li>Build the MethodCompare sheet with side-by-side results</li>
                  <li>Add Checks sheet reconciliations and error flags</li>
                  <li>Complete the Dashboard with visual summary</li>
                  <li>Write the Recommendation sheet with claim, evidence, and risk</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Your Dataset Reminder */}
          <Card>
            <CardHeader>
              <CardTitle>Your Group's Dataset</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Continue working in the same workbook from Lesson 08. Use only your group's assigned dataset.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-semibold">Group Assignments</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Group 1:</strong> <a className="underline text-blue-600" href="/resources/unit07-pbl-asset-inventory-g1.csv" download>unit07-pbl-inventory-g1.csv</a></li>
                    <li><strong>Group 2:</strong> <a className="underline text-blue-600" href="/resources/unit07-pbl-asset-inventory-g2.csv" download>unit07-pbl-inventory-g2.csv</a></li>
                    <li><strong>Group 3:</strong> <a className="underline text-blue-600" href="/resources/unit07-pbl-asset-inventory-g3.csv" download>unit07-pbl-inventory-g3.csv</a></li>
                    <li><strong>Group 4:</strong> <a className="underline text-blue-600" href="/resources/unit07-pbl-asset-inventory-g4.csv" download>unit07-pbl-inventory-g4.csv</a></li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">File Naming</h3>
                  <p className="text-sm">
                    Your workbook should be named: <code className="bg-gray-100 px-2 py-1 rounded text-sm">Unit07_Project_GroupX.xlsx</code>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    If your workbook is missing, re-download your group's CSV and rebuild from your Lesson 08 notes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Workbook Map */}
          <Card>
            <CardHeader>
              <CardTitle>Workbook Map — What to Complete Today</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Each sheet below must be complete before you write your recommendation.</p>
              <div className="grid gap-3 md:grid-cols-2">
                <div className="space-y-3">
                  <h3 className="font-semibold text-purple-700">Valuation Sheet</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Calculate ending inventory and COGS for FIFO</li>
                    <li>Calculate ending inventory and COGS for LIFO</li>
                    <li>Calculate ending inventory and COGS for Specific Identification</li>
                    <li>Calculate ending inventory and COGS for Weighted Average</li>
                    <li>Show the formula: BI + Purchases − COGS = EI for each method</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-purple-700">MethodCompare Sheet</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Side-by-side table of all four methods</li>
                    <li>Include COGS, Ending Inventory, and Gross Profit for each</li>
                    <li>Highlight which method produces the highest and lowest COGS</li>
                    <li>Note which method best fits your business scenario</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-purple-700">Checks Sheet</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Verify: BI + Purchases = COGS + EI for each method</li>
                    <li>Flag any negative inventory or impossible values</li>
                    <li>Test with a scenario change (e.g., one more purchase)</li>
                    <li>Document what passed and what failed</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="font-semibold text-purple-700">Dashboard Sheet</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Visual summary of method comparison</li>
                    <li>Key numbers: COGS, EI, Gross Profit by method</li>
                    <li>Clear labels so a non-accountant can read it</li>
                    <li>One sentence: what the data shows</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recommendation Structure */}
          <Card className="border-2 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800">Your Recommendation — Required Structure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Every team must write a recommendation on the Recommendation sheet. It must follow this exact structure:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="font-semibold">1. Claim</h3>
                  <p className="text-sm">
                    One sentence naming your recommended inventory method and why it fits this business.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Example: "We recommend FIFO because it matches the physical flow of perishable goods and produces the most reliable COGS for this business."
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">2. Evidence</h3>
                  <p className="text-sm">
                    At least three specific numbers cited from your workbook that support the claim.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Example: "FIFO COGS is $12,450 (Valuation sheet, cell B15), which is $340 lower than LIFO. Our inventory turns over every 18 days (Dashboard sheet), making FIFO the most accurate reflection of actual costs."
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">3. Risk</h3>
                  <p className="text-sm">
                    One limitation, downside, or assumption that could weaken your recommendation.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Example: "If purchase prices drop sharply next quarter, FIFO will overstate COGS relative to replacement cost. We recommend reviewing the method quarterly."
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">4. Defense</h3>
                  <p className="text-sm">
                    One sentence explaining why the recommendation still makes sense despite the risk.
                  </p>
                  <p className="text-sm text-muted-foreground italic">
                    Example: "Even with price volatility, FIFO remains the best match for this business because inventory turns over before prices can shift significantly."
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Scenario Testing */}
          <Card>
            <CardHeader>
              <CardTitle>Scenario Testing — Prove Your Workbook Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Before you finalize your recommendation, test your workbook with these scenarios:</p>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-sm">Test 1: Reconciliation Check</h4>
                  <p className="text-sm">Does BI + Purchases = COGS + EI for all four methods? If not, find the error.</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-sm">Test 2: Edge Case</h4>
                  <p className="text-sm">What happens if you add one more purchase at the end of the period? Do all methods update correctly?</p>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-sm">Test 3: Impossible Values</h4>
                  <p className="text-sm">Does your Checks sheet flag negative inventory or COGS greater than goods available?</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Document what passed and what failed. Fix any failures before writing your recommendation.
              </p>
            </CardContent>
          </Card>

          {/* Workflow */}
          <Card>
            <CardHeader>
              <CardTitle>Workflow Today (~80 min)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li><strong>Complete Valuation (25 min):</strong> Finish all four method calculations</li>
                <li><strong>Build MethodCompare & Checks (15 min):</strong> Side-by-side table and reconciliation checks</li>
                <li><strong>Complete Dashboard (10 min):</strong> Visual summary of findings</li>
                <li><strong>Write Recommendation (15 min):</strong> Claim, evidence, risk, and defense</li>
                <li><strong>Scenario Testing (5 min):</strong> Run the three tests above</li>
                <li><strong>Peer Critique (10 min):</strong> Exchange workbooks with another team and give feedback</li>
              </ol>
            </CardContent>
          </Card>

          {/* Milestone 2 Acceptance Criteria */}
          <Card className="border-2 border-indigo-200">
            <CardHeader>
              <CardTitle className="text-indigo-800">Milestone 2 — Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>All four methods calculated on the Valuation sheet</li>
                <li>MethodCompare sheet shows side-by-side COGS, EI, and Gross Profit</li>
                <li>Checks sheet passes reconciliation (BI + Purchases = COGS + EI)</li>
                <li>Dashboard has a clear visual summary</li>
                <li>Recommendation includes claim, three cited numbers, risk, and defense</li>
                <li>Scenario testing documented with pass/fail results</li>
                <li>Peer critique completed with at least one strength and one revision target</li>
              </ul>
            </CardContent>
          </Card>

          {/* Rubric */}
          <Card>
            <CardHeader>
              <CardTitle>Rubric — Milestone 2</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Workbook Completeness (35%)</strong>: All sheets present and populated with correct calculations</li>
                <li><strong>Recommendation Quality (30%)</strong>: Clear claim, cited evidence, risk identified, defense provided</li>
                <li><strong>Testing & Validation (20%)</strong>: Checks pass, scenarios documented, errors fixed</li>
                <li><strong>Peer Critique (15%)</strong>: Constructive feedback given and received, revision attempted</li>
              </ul>
            </CardContent>
          </Card>

          {/* Peer Critique */}
          <Card>
            <CardHeader>
              <CardTitle>Peer Critique</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Exchange your workbook with another team. Review their recommendation and workbook using the criteria below. 
                Provide at least one specific strength and one specific revision target.
              </p>
              <PeerCritiqueForm projectTitle="Unit 07 Milestone 2 — Inventory Recommendation" unitNumber={7} />
              <p className="text-sm text-muted-foreground">
                Focus on: model accuracy, evidence quality, clarity of recommendation, and readiness for final presentation.
              </p>
            </CardContent>
          </Card>

          {/* What's Next */}
          <Card>
            <CardHeader>
              <CardTitle>What Changes in Lesson 10</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                <strong>Lesson 10:</strong> Final polish, presentation, and submission. Your team will defend your method 
                recommendation to an audience. Use the feedback from today's peer critique to strengthen your workbook 
                and presentation notes before then.
              </p>
              <p className="text-sm text-muted-foreground">
                Bring your completed workbook, your recommendation, and any notes from peer feedback to the next session.
              </p>
            </CardContent>
          </Card>

          {/* Reflection */}
          <ReflectionJournal unitTitle="Milestone 2 Reflection — Workbook Complete & Recommendation Drafted" />
        </section>
      </main>
      <PhaseFooter unit={unit07Data as any} lesson={lesson09Data as any} phase={currentPhase as any} phases={phases as any} />
    </div>
  )
}
