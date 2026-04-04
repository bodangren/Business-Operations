import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson10Data, unit06Data, lesson10Phases } from "../lesson-data"

export default function Page() {
  const phases = lesson10Phases
  const currentPhase = phases[5]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-50">
      <PhaseHeader unit={unit06Data} lesson={lesson10Data} phase={currentPhase} phases={phases} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-slate-700 text-white">
              Phase 6: Final Reflection
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Reflect on Pricing Logic, Risk, and What You Learned</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You have presented, submitted your work, and completed the PriceLab Challenge.
              Now take time to reflect on what you learned about pricing, risk analysis, teamwork,
              and evidence-based decision-making. This reflection is part of your grade and helps
              you carry these skills into future business challenges.
            </p>
          </div>

          <Card className="border-l-4 border-l-slate-600">
            <CardHeader>
              <CardTitle className="text-xl">What You Accomplished Across Lessons 08-10</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Over the last three lessons, your team completed the full pricing analysis cycle:
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-semibold text-green-900 mb-2">Lesson 08: Kickoff</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Opened your assigned workbook</li>
                    <li>Classified costs as fixed or variable</li>
                    <li>Completed PriceOptions and Feasibility sheets</li>
                    <li>Wrote a draft recommendation statement</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="font-semibold text-blue-900 mb-2">Lesson 09: Completion</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Built TargetProfit, PriceSensitivity, and ProfitMatrix sheets</li>
                    <li>Completed the Dashboard with recommendation</li>
                    <li>Wrote claim-evidence-risk statement</li>
                    <li>Rehearsed with peer feedback and revised</li>
                  </ul>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <p className="font-semibold text-purple-900 mb-2">Lesson 10: Presentation</p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                    <li>Polished workbook and presentation notes</li>
                    <li>Delivered 3-5 minute presentation to panel</li>
                    <li>Defended recommendation during Q&A</li>
                    <li>Submitted final deliverables and reflection</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="text-xl">Reflection Prompts</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Answer the following prompts thoughtfully. Your reflection should be honest, specific,
                and show genuine thinking about what you learned. Aim for 3-5 sentences per prompt.
              </p>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">1. Pricing Logic</p>
                  <p className="text-sm text-gray-700 mt-1">
                    How did your team decide on the final price? What analysis was most important in that decision?
                    Would you choose the same price if you started over? Why or why not?
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">2. Risk Assessment</p>
                  <p className="text-sm text-gray-700 mt-1">
                    What was the biggest risk to your recommendation? How did your sensitivity analysis help you
                    understand that risk? Did your team&apos;s view of risk change between Lesson 08 and Lesson 10?
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">3. Model Credibility</p>
                  <p className="text-sm text-gray-700 mt-1">
                    How confident are you in your workbook model? What assumptions did you make that could weaken
                    your analysis? What additional data or analysis would make your recommendation stronger?
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">4. Teamwork and Communication</p>
                  <p className="text-sm text-gray-700 mt-1">
                    How well did your team work together? What role did you play? What would you do differently
                    if you had to do this project again? How did peer feedback improve your work?
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="font-semibold text-blue-900">5. Real-World Connection</p>
                  <p className="text-sm text-gray-700 mt-1">
                    How does this project connect to real business pricing decisions? What did you learn about
                    how businesses balance profitability with competitiveness? How might you use these skills
                    in a future job or business?
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-600">
            <CardHeader>
              <CardTitle>What You Can Now Do</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                After completing the PriceLab Challenge, you should be able to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Classify costs as fixed or variable and calculate contribution margin</li>
                <li>Distinguish between markup and margin and explain why the difference matters</li>
                <li>Calculate break-even points and interpret what they mean for a business</li>
                <li>Build a CVP model that connects costs, price, volume, and profit</li>
                <li>Test pricing scenarios using sensitivity analysis and profit matrices</li>
                <li>Write a recommendation using claim-evidence-risk structure</li>
                <li>Defend a pricing decision using data and answer stakeholder questions</li>
                <li>Work effectively in a team to complete a complex business analysis</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle>How This Connects to Future Learning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                The skills you built in this unit apply to many business situations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Entrepreneurship:</strong> Setting prices for a new product or service</li>
                <li><strong>Finance:</strong> Analyzing profitability and making investment recommendations</li>
                <li><strong>Marketing:</strong> Understanding how price affects demand and positioning</li>
                <li><strong>Operations:</strong> Managing capacity constraints and cost structures</li>
                <li><strong>Consulting:</strong> Building evidence-based recommendations for clients</li>
              </ul>
              <p className="text-gray-700 mt-4">
                The claim-evidence-risk structure you practiced is used in every professional field
                where decisions must be defended with data. You will use it again.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-600">
            <CardHeader>
              <CardTitle>Celebrate Your Work</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                You just completed a real business analysis project. You built a financial model,
                tested scenarios under uncertainty, made a recommendation, defended it publicly,
                and reflected on your learning. That is professional-level work. Be proud of what
                your team accomplished.
              </p>
            </CardContent>
          </Card>

          <ReflectionJournal unitTitle="Final Reflection — What did you learn about pricing, risk, and evidence-based decision-making?" />
        </section>
      </main>
      <PhaseFooter unit={unit06Data} lesson={lesson10Data} phase={currentPhase} phases={phases} />
    </div>
  )
}
