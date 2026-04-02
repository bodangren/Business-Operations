import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import { lesson10Data, unit06Data, lesson10Phases } from "../lesson-data"

export default function Page() {
  const phases = lesson10Phases
  const currentPhase = phases[3]

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50">
      <PhaseHeader unit={unit06Data as any} lesson={lesson10Data as any} phase={currentPhase as any} phases={phases as any} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-violet-600 text-white">
              Phase 4: Audience Review
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Review Other Teams and Submit Feedback</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              While other teams present, you are an active audience member and reviewer.
              Your feedback helps your classmates improve and demonstrates your own understanding
              of what makes a strong pricing recommendation. Use the rubric to guide your evaluations.
            </p>
          </div>

          <Card className="border-l-4 border-l-violet-600">
            <CardHeader>
              <CardTitle className="text-xl">How to Review a Presentation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Use the rubric categories below to evaluate each team&apos;s presentation.
                Be specific, constructive, and fair in your feedback.
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-violet-50 rounded-lg">
                  <p className="font-semibold text-violet-900">1. Technical Accuracy (50%)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Did the team cite accurate numbers from their workbook?</li>
                    <li>Were their calculations and formulas correct?</li>
                    <li>Did their evidence actually support their recommendation?</li>
                    <li>Was their sensitivity analysis thorough and meaningful?</li>
                  </ul>
                </div>
                <div className="p-3 bg-violet-50 rounded-lg">
                  <p className="font-semibold text-violet-900">2. Strategic Rationale (20%)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Does the recommendation make business sense?</li>
                    <li>Did they address trade-offs between profitability and competitiveness?</li>
                    <li>Is their risk assessment honest and realistic?</li>
                    <li>Did they explain why their recommendation is still the best choice?</li>
                  </ul>
                </div>
                <div className="p-3 bg-violet-50 rounded-lg">
                  <p className="font-semibold text-violet-900">3. Communication and Clarity (15%)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Was the presentation easy to follow?</li>
                    <li>Did they use their Dashboard and supporting sheets effectively?</li>
                    <li>Was their language appropriate for a stakeholder audience?</li>
                    <li>Were their visuals clean and professional?</li>
                  </ul>
                </div>
                <div className="p-3 bg-violet-50 rounded-lg">
                  <p className="font-semibold text-violet-900">4. Time Management (10%)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Did they stay within the 3-5 minute limit?</li>
                    <li>Were transitions between speakers smooth?</li>
                    <li>Did they cover all required sections without rushing?</li>
                  </ul>
                </div>
                <div className="p-3 bg-violet-50 rounded-lg">
                  <p className="font-semibold text-violet-900">5. Q&A Readiness (5%)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Did they answer questions confidently?</li>
                    <li>Did they reference their workbook when responding?</li>
                    <li>Were their answers specific and evidence-based?</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-600">
            <CardHeader>
              <CardTitle>What to Note During Each Presentation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                Keep brief notes on each team. Focus on these areas:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-900 mb-2">Strengths</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>What did they do well?</li>
                    <li>What evidence was most convincing?</li>
                    <li>What part of their presentation was clearest?</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-900 mb-2">Areas to Improve</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>What was confusing or unclear?</li>
                    <li>What evidence was weak or missing?</li>
                    <li>What would make their recommendation stronger?</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-900 mb-2">Questions to Ask</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>What would you want to know if you were an investor?</li>
                    <li>What scenario did they not test that you are curious about?</li>
                    <li>How does their approach compare to your team&apos;s?</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg">
                  <p className="font-semibold text-purple-900 mb-2">Key Numbers</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>What price did they recommend?</li>
                    <li>What profit did they project?</li>
                    <li>What was their biggest risk?</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-600">
            <CardHeader>
              <CardTitle>Submit Your Feedback</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Use the form below to submit your review for each team. Be specific and constructive.
                Your feedback will be shared with the teams to help them improve.
              </p>
              <PeerCritiqueForm projectTitle="PriceLab Final Presentation Review" unitNumber={6} />
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle>Compare Approaches Across Teams</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                As you watch multiple presentations, think about these comparison questions:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Which team had the strongest evidence? What made it strong?</li>
                <li>Which team handled Q&A most effectively? What did they do differently?</li>
                <li>Did any team&apos;s recommendation surprise you? Why?</li>
                <li>How did different businesses&apos; constraints (capacity, target profit) affect their pricing strategies?</li>
                <li>What is one thing you learned from another team that you would apply to your own work?</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
      <PhaseFooter unit={unit06Data as any} lesson={lesson10Data as any} phase={currentPhase as any} phases={phases as any} />
    </div>
  )
}
