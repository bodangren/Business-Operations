import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson10Data, unit06Data, lesson10Phases } from "../lesson-data"
import { projectGroups } from "../../project-workbooks"

export default function Page() {
  const phases = lesson10Phases
  const currentPhase = phases[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <PhaseHeader unit={unit06Data} lesson={lesson10Data} phase={currentPhase} phases={phases} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-rose-600 text-white">
              Milestone 3: Final Presentation and Submission
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Final Polish — Get Ready to Present</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This is presentation day. Your team has built the workbook, tested your recommendation, rehearsed
              with peer feedback, and made revisions. Now you will polish your presentation notes, verify your
              workbook is submission-ready, and prepare to defend your pricing recommendation to a panel.
            </p>
          </div>

          <Card className="border-l-4 border-l-rose-600">
            <CardHeader>
              <CardTitle className="text-xl">Your Final Workbook — Last Checks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                Open your team workbook one more time. Run through this checklist before presenting:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-rose-50 rounded-lg border border-rose-200">
                  <p className="font-semibold text-rose-900 mb-2">Workbook Structure</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>All seven sheets present and named correctly</li>
                    <li>No blank or incomplete sheets</li>
                    <li>File named correctly: Period-TeamName-Unit06-Project.xlsx</li>
                  </ul>
                </div>
                <div className="p-4 bg-rose-50 rounded-lg border border-rose-200">
                  <p className="font-semibold text-rose-900 mb-2">Dashboard Quality</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Recommendation is clear and specific</li>
                    <li>At least 3 workbook numbers cited as evidence</li>
                    <li>Risk statement is honest and specific</li>
                    <li>Formatting is clean and professional</li>
                  </ul>
                </div>
                <div className="p-4 bg-rose-50 rounded-lg border border-rose-200">
                  <p className="font-semibold text-rose-900 mb-2">Supporting Sheets</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>TargetProfit shows target calculation</li>
                    <li>PriceSensitivity has at least 5 prices tested</li>
                    <li>ProfitMatrix has a complete price-by-volume grid</li>
                    <li>All formulas produce correct results</li>
                  </ul>
                </div>
                <div className="p-4 bg-rose-50 rounded-lg border border-rose-200">
                  <p className="font-semibold text-rose-900 mb-2">Presentation Notes</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Claim-evidence-risk statement is written</li>
                    <li>Team roles are assigned for each section</li>
                    <li>Presentation is timed to 3-5 minutes</li>
                    <li>Each speaker knows their part</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle>Business Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Deliver a clear, confident presentation of your pricing recommendation</li>
                <li>Defend your recommendation using specific workbook evidence during Q&A</li>
                <li>Show how your analysis balances profitability with market competitiveness</li>
                <li>Demonstrate professional communication appropriate for a stakeholder audience</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-600">
            <CardHeader>
              <CardTitle>Workbook Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Final workbook is complete, polished, and ready for submission</li>
                <li>Dashboard is clean, readable, and tells a clear story</li>
                <li>All supporting sheets are complete and accurate</li>
                <li>File is named correctly and accessible for submission</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-600">
            <CardHeader>
              <CardTitle>What to Show During Your Presentation</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li><strong>Introduction (30 seconds):</strong> Name your business, its main constraint (capacity or target profit), and your team</li>
                <li><strong>Recommendation (1 minute):</strong> State your claim clearly — the exact price you recommend and why</li>
                <li><strong>Evidence (1-2 minutes):</strong> Show your Dashboard and cite at least 3 numbers from your workbook. Point to one supporting sheet (PriceSensitivity or ProfitMatrix)</li>
                <li><strong>Risk (30 seconds):</strong> Name one downside case from your sensitivity analysis</li>
                <li><strong>Close (30 seconds):</strong> Explain why your recommendation is still the best choice despite the risk</li>
                <li><strong>Q&A (2-3 minutes):</strong> Answer panel questions using workbook evidence, not opinions</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-indigo-600">
            <CardHeader>
              <CardTitle>Quick Practice Round</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                Before the full-class presentations, do a quick practice round with another team:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Each team presents their recommendation in 2 minutes (shorter than the real thing)</li>
                <li>The listening team asks one question about the evidence</li>
                <li>Give one piece of feedback: &quot;One thing that was clear was...&quot; and &quot;One thing to strengthen is...&quot;</li>
                <li>Use the feedback to make one quick adjustment before your real presentation</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle>Your Assigned Workbook</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                Confirm your team has the correct workbook open and ready to present:
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

          <ReflectionJournal unitTitle="Pre-Presentation Check — How ready does your team feel?" />
        </section>
      </main>
      <PhaseFooter unit={unit06Data} lesson={lesson10Data} phase={currentPhase} phases={phases} />
    </div>
  )
}
