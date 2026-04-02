import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import { lesson09Data, unit06Data, lesson09Phases } from "../lesson-data"

export default function Page() {
  const phases = lesson09Phases
  const currentPhase = phases[4]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <PhaseHeader unit={unit06Data as any} lesson={lesson09Data as any} phase={currentPhase as any} phases={phases as any} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-amber-600 text-white">
              Phase 5: Peer Critique and Revision
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Exchange Workbooks and Revise Based on Feedback</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In Phase 4, you wrote your recommendation statement and rehearsed it as a team.
              Now you will exchange workbooks with another team, give and receive structured feedback,
              and make at least one revision before Lesson 10. Peer critique is not a formality — it is
              a chance to catch errors, strengthen your evidence, and improve your presentation.
            </p>
          </div>

          <Card className="border-l-4 border-l-amber-600">
            <CardHeader>
              <CardTitle className="text-xl">How Peer Critique Works</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Your teacher will pair your team with another team. You will review their workbook and
                recommendation, then they will review yours. The goal is to help each other improve
                before the final presentation in Lesson 10.
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="font-semibold text-amber-900 mb-2">When Giving Feedback:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Be specific — point to exact sheets, numbers, or statements</li>
                    <li>Be constructive — suggest improvements, not just problems</li>
                    <li>Be honest — if something is unclear, say so</li>
                    <li>Focus on the work, not the people</li>
                  </ul>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="font-semibold text-amber-900 mb-2">When Receiving Feedback:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Listen without defending — just take notes</li>
                    <li>Ask clarifying questions if you do not understand</li>
                    <li>Decide what to revise — you do not have to accept every suggestion</li>
                    <li>Make at least one revision before Lesson 10</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-600">
            <CardHeader>
              <CardTitle className="text-xl">What to Review in Another Team&apos;s Workbook</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Use these criteria when reviewing the other team&apos;s workbook and recommendation:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-semibold text-orange-900">1. Technical Accuracy</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Are the formulas correct in TargetProfit, PriceSensitivity, and ProfitMatrix?</li>
                    <li>Do the numbers in the Dashboard match the numbers in the other sheets?</li>
                    <li>Are there any calculation errors or inconsistencies?</li>
                  </ul>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-semibold text-orange-900">2. Evidence Quality</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Does the recommendation cite at least 3 specific numbers from the workbook?</li>
                    <li>Are the cited numbers accurate and relevant?</li>
                    <li>Is the evidence strong enough to support the claim?</li>
                  </ul>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-semibold text-orange-900">3. Clarity and Structure</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Is the recommendation statement easy to understand?</li>
                    <li>Does it follow the claim-evidence-risk-close structure?</li>
                    <li>Is the Dashboard clean and professional?</li>
                  </ul>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-semibold text-orange-900">4. Risk Awareness</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Does the team identify a real risk or weakness?</li>
                    <li>Is the risk supported by their sensitivity analysis?</li>
                    <li>Do they explain why their recommendation still makes sense?</li>
                  </ul>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg">
                  <p className="font-semibold text-orange-900">5. Presentation Readiness</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Could this team deliver a clear 3-5 minute presentation?</li>
                    <li>Would a stakeholder find their recommendation convincing?</li>
                    <li>What one thing would make their presentation stronger?</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-600">
            <CardHeader>
              <CardTitle>Peer Critique Form</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Use the form below to record your feedback for the other team. Be specific and constructive.
                Your feedback will help them improve before Lesson 10.
              </p>
              <PeerCritiqueForm projectTitle="PriceLab Workbook Review" unitNumber={6} />
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle>Revision Plan — What to Change Before Lesson 10</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                After receiving feedback from the other team, decide what to revise. You do not need to
                accept every suggestion, but you must make at least one meaningful revision.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-900">Common Revisions:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Fix a calculation error in one of your sheets</li>
                    <li>Add another piece of evidence to your recommendation statement</li>
                    <li>Clarify a confusing label or section in your Dashboard</li>
                    <li>Strengthen your risk statement with a specific number from your sensitivity analysis</li>
                    <li>Improve the formatting or readability of your Dashboard</li>
                    <li>Add a note explaining an assumption you made in your analysis</li>
                  </ul>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-semibold text-green-900">Document Your Revision:</p>
                  <p className="text-sm text-gray-700 mt-1">
                    In your workbook or on a separate sheet, write down:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>What feedback you received</li>
                    <li>What you decided to change (or not change) and why</li>
                    <li>What you actually changed in your workbook or recommendation</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-indigo-600">
            <CardHeader>
              <CardTitle>What to Complete Before Moving On</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>You have reviewed another team&apos;s workbook using the criteria above</li>
                <li>You have submitted feedback using the Peer Critique Form</li>
                <li>You have received feedback from another team</li>
                <li>You have decided on at least one revision to make</li>
                <li>You have made at least one revision to your workbook or recommendation</li>
                <li>You have documented what you changed and why</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
      <PhaseFooter unit={unit06Data as any} lesson={lesson09Data as any} phase={currentPhase as any} phases={phases as any} />
    </div>
  )
}
