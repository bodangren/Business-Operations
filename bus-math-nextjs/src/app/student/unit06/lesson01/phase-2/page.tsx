import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { TrendingUp, DollarSign, Shield, CheckCircle, ArrowRight } from "lucide-react"
import { lesson01Data, unit06Data, lesson01Phases } from "../lesson-data"

export default function Phase2Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 2)!

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <PhaseHeader
        lesson={lesson01Data}
        unit={unit06Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />

      <div className="max-w-4xl mx-auto space-y-8 pb-8">
        <Card className="border-indigo-200 bg-white/80 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-2xl text-indigo-900">The Pricing Scoreboard</CardTitle>
            <CardDescription>Your guide to strategic pricing decisions</CardDescription>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p>
              Sarah's story shows us that pricing isn't just about covering costs. A good price needs to check three boxes:
            </p>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="border-green-200 bg-green-50/80">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Profitable
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-700 text-sm">
                The price must cover all costs AND leave enough profit to grow the business. Not just break even—actually make money.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50/80">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Competitive
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 text-sm">
                The price must make sense compared to what others in the market charge. Too high and customers leave; too low and you undervalue your work.
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50/80">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Defensible
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-700 text-sm">
                The price must be something you can explain and defend—to yourself, your team, investors, or anyone who asks "why that price?"
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="border-amber-200 bg-amber-50/80">
          <CardHeader>
            <CardTitle className="text-amber-900">Our Unit Question</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-amber-800 font-medium">
              <CheckCircle className="inline h-5 w-5 mr-2" />
              What pricing strategy hits our profit target while staying competitive in the local market?
            </p>
            <p className="text-amber-700 mt-3">
              This is the question Sarah had to answer. Every lesson in this unit will help you build the tools to answer it yourself.
            </p>
          </CardContent>
        </Card>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-xl font-bold text-gray-900 mb-3">What You'll Learn</h2>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <ArrowRight className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">Lessons 1-4: The Math Behind Pricing</p>
                <p className="text-gray-600 text-sm">You'll learn the core calculations: markup vs. margin, break-even analysis, and how to compare pricing scenarios.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <ArrowRight className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">Lessons 5-6: Excel Tools for Pricing</p>
                <p className="text-gray-600 text-sm">You'll build powerful Excel models using Goal Seek and Data Tables to analyze "what-if" scenarios instantly.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <ArrowRight className="h-5 w-5 text-indigo-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-900">Lessons 7-10: Your Pricing Recommendation</p>
                <p className="text-gray-600 text-sm">You'll apply everything you've learned to create a defendable pricing recommendation for your own business scenario.</p>
              </div>
            </div>
          </div>
        </div>

        <ComprehensionCheck
          questions={[
            {
              id: "q1",
              question: "What are the three pillars of the pricing scoreboard?",
              answers: [
                "Profitable, competitive, and defensible",
                "Cheap, expensive, and fair",
                "Cost, markup, and margin",
                "Revenue, profit, and loss"
              ],
              explanation: "The three pillars are: 1) Profitable - covering costs AND leaving profit, 2) Competitive - making sense compared to market, 3) Defensible - able to explain why that price."
            },
            {
              id: "q2",
              question: "What was Sarah's key insight about her pricing?",
              answers: [
                "She was pricing too high for the market",
                "She was pricing to cover costs, not based on value provided",
                "Her competitors were underpricing",
                "She needed to lower prices to compete"
              ],
              explanation: "Sarah realized she was pricing just to cover her costs (cost-plus pricing) rather than pricing based on the value she provided to clients (value-based pricing)."
            },
            {
              id: "q3",
              question: "Why is the 'Profit Paradox' dangerous for growing businesses?",
              answers: [
                "It makes businesses charge too much",
                "It leads to working harder but making less money",
                "It causes customers to leave",
                "It makes businesses too competitive"
              ],
              explanation: "The Profit Paradox is when a business grows (more revenue) but actually makes less profit per dollar of sales because costs grow faster than revenue."
            }
          ]}
          title="Check Your Understanding"
          description="Make sure you understand the pricing scoreboard before moving on."
        />
      </div>

      <PhaseFooter
        lesson={lesson01Data}
        unit={unit06Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />
    </div>
  )
}
