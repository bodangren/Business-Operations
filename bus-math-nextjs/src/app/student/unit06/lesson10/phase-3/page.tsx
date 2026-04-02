import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import { lesson10Data, unit06Data, lesson10Phases } from "../lesson-data"

export default function Page() {
  const phases = lesson10Phases
  const currentPhase = phases[2]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <PhaseHeader unit={unit06Data as any} lesson={lesson10Data as any} phase={currentPhase as any} phases={phases as any} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-600 text-white">
              Phase 3: Deliver Your Presentation
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Present Your Recommendation and Defend It During Q&A</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This is the moment your team has been working toward. Deliver your 3-5 minute presentation,
              show your workbook evidence, and answer questions from the panel. Stay calm, cite your numbers,
              and remember — you know your analysis better than anyone in the room.
            </p>
          </div>

          <Card className="border-l-4 border-l-emerald-600">
            <CardHeader>
              <CardTitle className="text-xl">Presentation Structure Reminder</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Follow this structure during your presentation. Each section has a suggested time:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <p className="font-semibold text-emerald-900">1. Introduction (30 seconds)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Name your business and team</li>
                    <li>State the main constraint: capacity limit or target profit</li>
                    <li>Briefly describe the pricing problem you solved</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-1">
                    Example: &quot;We are Team Northside Print Lab. Our business can produce 220 hoodies per month
                    and we need to hit $500 monthly profit. Our challenge was finding a price that meets both goals.&quot;
                  </p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <p className="font-semibold text-emerald-900">2. Recommendation (1 minute)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>State your claim clearly — the exact price you recommend</li>
                    <li>Briefly explain why this price makes sense</li>
                    <li>Show your Dashboard sheet as you speak</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-1">
                    Example: &quot;We recommend pricing at $28 per hoodie. This price hits our $500 target profit
                    while staying competitive with local print shops.&quot;
                  </p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <p className="font-semibold text-emerald-900">3. Evidence (1-2 minutes)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Cite at least 3 specific numbers from your workbook</li>
                    <li>Point to your Dashboard and one supporting sheet</li>
                    <li>Explain how the numbers support your recommendation</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-1">
                    Example: &quot;At $28, we project $520 monthly profit, break even at 100 hoodies (45% of our 220-unit
                    capacity), and our PriceSensitivity sheet shows profit stays positive even if we only sell 80 units.&quot;
                  </p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <p className="font-semibold text-emerald-900">4. Risk (30 seconds)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Name one downside case from your sensitivity analysis</li>
                    <li>Be honest about the weakness</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-1">
                    Example: &quot;The main risk is that if volume drops below 80 units, we miss our target profit.
                    This could happen if a competitor lowers their price or if demand is seasonal.&quot;
                  </p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <p className="font-semibold text-emerald-900">5. Close (30 seconds)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Explain why your recommendation is still the best choice</li>
                    <li>End with a clear, confident statement</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-1">
                    Example: &quot;Even with this risk, $28 gives us the best balance of profit and capacity fit.
                    Lower prices would require unrealistic volume, and higher prices would put us above the local market rate.&quot;
                  </p>
                </div>
                <div className="p-3 bg-emerald-50 rounded-lg">
                  <p className="font-semibold text-emerald-900">6. Q&A (2-3 minutes)</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 mt-2">
                    <li>Listen to the question carefully</li>
                    <li>Reference your workbook when answering</li>
                    <li>Be honest if you do not know — say how you would find out</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-1">
                    Example: &quot;That is a great question. Our ProfitMatrix shows that at $25, we would need to sell
                    150 units to hit our target. We think 150 is achievable based on our market research.&quot;
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle>Tips for Strong Q&A Responses</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                The Q&A section is where you show you really understand your analysis. Use these tips:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Pause before answering</strong> — take 2 seconds to think about the best response</li>
                <li><strong>Reference your workbook</strong> — say &quot;Our PriceSensitivity sheet shows...&quot; or &quot;According to our ProfitMatrix...&quot;</li>
                <li><strong>Be specific with numbers</strong> — avoid vague answers like &quot;It depends&quot; without explaining what it depends on</li>
                <li><strong>Admit uncertainty honestly</strong> — if you do not know, say &quot;We did not test that scenario, but we could add it to our model by...&quot;</li>
                <li><strong>Stay calm and professional</strong> — questions are not attacks, they are opportunities to show your depth of analysis</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-600">
            <CardHeader>
              <CardTitle>Common Panel Questions to Prepare For</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>&quot;What happens if your costs go up by 10%?&quot;</li>
                <li>&quot;How confident are you in your volume estimate?&quot;</li>
                <li>&quot;What would you do if a competitor undercut your price?&quot;</li>
                <li>&quot;Why did you choose this price over the other options you tested?&quot;</li>
                <li>&quot;What is the biggest risk to your recommendation?&quot;</li>
                <li>&quot;How does your recommendation change if your capacity increases or decreases?&quot;</li>
                <li>&quot;What additional analysis would make your recommendation stronger?&quot;</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-indigo-600">
            <CardHeader>
              <CardTitle>While Other Teams Present</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                When you are not presenting, you are part of the audience. Your job is to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Listen actively and take notes on each team&apos;s recommendation</li>
                <li>Ask thoughtful questions that test their evidence and reasoning</li>
                <li>Complete the audience review form for each team (Phase 4)</li>
                <li>Think about how their approach compares to your team&apos;s analysis</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
      <PhaseFooter unit={unit06Data as any} lesson={lesson10Data as any} phase={currentPhase as any} phases={phases as any} />
    </div>
  )
}
