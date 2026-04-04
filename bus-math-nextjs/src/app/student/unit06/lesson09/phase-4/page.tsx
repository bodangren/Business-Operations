"use client"

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import { lesson09Data, unit06Data, lesson09Phases } from "../lesson-data"

export default function Page() {
  const phases = lesson09Phases
  const currentPhase = phases[3]
  const [claim, setClaim] = useState("")
  const [evidence, setEvidence] = useState("")
  const [risk, setRisk] = useState("")
  const [close, setClose] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50">
      <PhaseHeader unit={unit06Data} lesson={lesson09Data} phase={currentPhase} phases={phases} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-violet-600 text-white">
              Phase 4: Write Your Recommendation Statement
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Craft Your Claim-Evidence-Risk Statement</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In Phase 3, you completed your ProfitMatrix and Dashboard. Now you will write your team&apos;s
              formal recommendation statement using the claim-evidence-risk structure. This statement will be
              the foundation of your presentation in Lesson 10. Every group must have a clear, defensible
              recommendation backed by workbook evidence.
            </p>
          </div>

          <Card className="border-l-4 border-l-violet-600">
            <CardHeader>
              <CardTitle className="text-xl">Why This Structure Matters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                In business, recommendations without evidence are just opinions. Investors, managers, and
                stakeholders expect you to back up your claims with data. The claim-evidence-risk structure
                forces you to think like a professional analyst:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Claim</strong> shows you can make a clear decision</li>
                <li><strong>Evidence</strong> shows you did the analysis and can cite your work</li>
                <li><strong>Risk</strong> shows you understand the limitations and are thinking critically</li>
                <li><strong>Close</strong> shows you can defend your recommendation despite the risks</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-600">
            <CardHeader>
              <CardTitle className="text-xl">Build Your Recommendation Statement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700">
                Use the form below to draft your team&apos;s recommendation. Work together — this should
                reflect your group&apos;s analysis, not just one person&apos;s opinion.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <label className="block font-semibold text-purple-900 mb-2">
                    1. Claim — What price do you recommend?
                  </label>
                  <p className="text-sm text-gray-600 mb-2">
                    Be specific. Include the exact price and briefly state why this is your recommendation.
                  </p>
                  <textarea
                    placeholder="Example: We recommend pricing at $45 per unit because it balances profitability with market competitiveness..."
                    value={claim}
                    onChange={(e) => setClaim(e.target.value)}
                    className="min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <label className="block font-semibold text-purple-900 mb-2">
                    2. Evidence — Cite at least 3 numbers from your workbook
                  </label>
                  <p className="text-sm text-gray-600 mb-2">
                    Use specific numbers from your TargetProfit, PriceSensitivity, or ProfitMatrix sheets.
                    Include projected profit, break-even units, and capacity utilization.
                  </p>
                  <textarea
                    placeholder="Example: At $45, we project $1,200 monthly profit, break even at 80 units (36% of our 220-unit capacity), and our sensitivity analysis shows profit stays positive even if volume drops to 60 units..."
                    value={evidence}
                    onChange={(e) => setEvidence(e.target.value)}
                    className="min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <label className="block font-semibold text-purple-900 mb-2">
                    3. Risk — What is the main weakness or downside case?
                  </label>
                  <p className="text-sm text-gray-600 mb-2">
                    Be honest about the limitations. What could go wrong? What does your sensitivity analysis show?
                  </p>
                  <textarea
                    placeholder="Example: The main risk is that if volume drops below 60 units, we lose money. This could happen if a competitor undercuts our price or if demand is lower than expected..."
                    value={risk}
                    onChange={(e) => setRisk(e.target.value)}
                    className="min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <label className="block font-semibold text-purple-900 mb-2">
                    4. Close — Why is this still the best choice?
                  </label>
                  <p className="text-sm text-gray-600 mb-2">
                    Explain why your recommendation makes sense despite the risk. Compare to alternatives.
                  </p>
                  <textarea
                    placeholder="Example: Even with this risk, $45 gives us the best balance of profit and capacity fit. Lower prices would require unrealistic volume, and higher prices would put us above the local market rate..."
                    value={close}
                    onChange={(e) => setClose(e.target.value)}
                    className="min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>

                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <label className="block font-semibold text-purple-900 mb-2">
                    4. Close — Why is this still the best choice?
                  </label>
                  <p className="text-sm text-gray-600 mb-2">
                    Explain why your recommendation makes sense despite the risk. Compare to alternatives.
                  </p>
                  <textarea
                    placeholder="Example: Even with this risk, $45 gives us the best balance of profit and capacity fit. Lower prices would require unrealistic volume, and higher prices would put us above the local market rate..."
                    value={close}
                    onChange={(e) => setClose(e.target.value)}
                    className="min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-800">
                  <strong>Next step:</strong> Copy your completed statement into your Dashboard sheet.
                  This is the version you will rehearse and present in Lesson 10.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-600">
            <CardHeader>
              <CardTitle>Recommendation Quality Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Before moving to Phase 5, check your recommendation against these criteria:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Claim states a specific price (not a range or vague statement)</li>
                <li>Evidence cites at least 3 specific numbers from your workbook</li>
                <li>Evidence includes projected profit, break-even, and capacity information</li>
                <li>Risk identifies a real weakness from your sensitivity analysis</li>
                <li>Close explains why the recommendation still makes sense despite the risk</li>
                <li>Statement is clear enough that someone outside your team could understand it</li>
                <li>Statement is concise (aim for 4-6 sentences total)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-indigo-600">
            <CardHeader>
              <CardTitle>Rehearse Your Statement</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                Once your statement is written, practice delivering it as a team:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>One person reads the claim clearly and confidently</li>
                <li>Another person presents the evidence, pointing to the numbers in your Dashboard</li>
                <li>A third person explains the risk honestly</li>
                <li>The team closes together with a strong final statement</li>
              </ol>
              <p className="text-gray-700 mt-4">
                Time yourselves — your full presentation in Lesson 10 should be 3-5 minutes.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
      <PhaseFooter unit={unit06Data} lesson={lesson09Data} phase={currentPhase} phases={phases} />
    </div>
  )
}
