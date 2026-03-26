import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, AlertTriangle, DollarSign, TrendingUp, TrendingDown, Layers } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson03Data, unit07Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[0] // Hook phase

const hookQuestions = [
  {
    id: "hook-1",
    question: "In Lesson 2, you learned that Sarah has inventory layers at different costs. When she sells products, she must decide which layer's costs move to COGS. Why does this matter?",
    answers: [
      "Because the choice affects her reported profit, taxes, and ending inventory value",
      "Because she needs to track which physical units were sold",
      "Because the government requires all businesses to use the same method",
      "Because her accountant needs to know exactly which box was sold"
    ],
    explanation: "The choice doesn't change what physically happened, but it does change what Sarah reports on her financial statements. Different methods produce different profit numbers and different tax bills."
  },
  {
    id: "hook-2",
    question: "Sarah sold 20 Premium Client Kits this month. Under one method, her COGS is $936. Under another method, her COGS is $1,000. What does this mean?",
    answers: [
      "Both calculations are correct — they just use different assumptions about which costs to assign",
      "One calculation must be wrong because inventory can only have one value",
      "The higher COGS number is always the correct one",
      "The lower COGS number is always the correct one"
    ],
    explanation: "Accounting standards recognize that there isn't one 'right' answer when inventory comes from different purchases at different prices. FIFO and LIFO are two accepted methods for making this assignment."
  },
  {
    id: "hook-3",
    question: "Why would Sarah care which method she uses when presenting to investors vs. filing taxes?",
    answers: [
      "Investors want to see higher profits, but lower profits mean lower taxes — so different methods serve different goals",
      "Investors and the IRS require the same method, so there's no choice",
      "Investors don't care about inventory methods at all",
      "Tax filing doesn't involve inventory calculations"
    ],
    explanation: "This is exactly why the choice matters. In rising-cost environments, FIFO shows higher profit (attractive to investors) while LIFO shows lower profit (reduces taxes). Sarah might strategically prefer different methods for different audiences."
  },
  {
    id: "hook-4",
    question: "Sarah's Premium Client Kits cost $45, $48, and $52 per unit in three different purchases. Prices are rising. Which method would produce the lowest COGS when she sells 20 units?",
    answers: [
      "FIFO — it uses the oldest, cheapest costs first",
      "LIFO — it uses the newest, most expensive costs first",
      "Both methods would produce the same COGS",
      "The method doesn't affect COGS at all"
    ],
    explanation: "In a rising-price environment, FIFO pulls the cheaper $45 and $48 costs into COGS first, leaving the expensive $52 costs in inventory. This makes COGS lower and profit higher compared to LIFO."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit07Data} lesson={lesson03Data} phase={currentPhase} phases={lesson03Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">Phase 1: Hook</Badge>
            <h1 className="text-3xl font-bold text-slate-900">One Inventory, Two Different Values</h1>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              In Lesson 2, you discovered that inventory layers create ambiguity. Today, you'll learn 
              how accounting turns that ambiguity into a strategic decision.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto space-y-8">
          {/* Connection to Lesson 2 */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">What You Discovered in Lesson 2</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-blue-950">
              <p className="text-lg leading-relaxed">
                Remember Sarah's Client Launch Kits? She started with 10 kits at $18 each, 
                then bought 20 more at $20 each. When she sold 15 kits, you learned that 
                knowing how many units remain (15 kits) doesn't tell you their dollar value.
              </p>
              
              <p className="text-lg leading-relaxed">
                The same question kept appearing: <strong>Which $X should move to Cost of Goods Sold, 
                and which $X should stay in Ending Inventory?</strong>
              </p>

              <div className="bg-white p-4 rounded-lg border border-blue-300">
                <p className="text-blue-800 font-medium">
                  Sarah's bookkeeper told her: "Your ending inventory could be worth either 
                  $255 or $285 depending on how you assign costs. Both numbers could be correct."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* New Scenario Introduction */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Layers className="h-5 w-5" />
                Sarah's Premium Client Kits — A New Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-purple-950">
              <p className="text-lg leading-relaxed">
                Sarah's business is growing. She's now offering <strong>Premium Client Kits</strong> for 
                larger corporate clients. These kits include more resources and sell for higher prices. 
                But they also come with a cost challenge that's even more dramatic than her original kits.
              </p>

              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-3">Sarah's Premium Kits This Month:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center p-2 bg-purple-100 rounded">
                    <span className="font-medium text-purple-800">Beginning Inventory</span>
                    <span className="text-purple-900">8 kits at $45 each</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-purple-100 rounded">
                    <span className="font-medium text-purple-800">Purchase 1 (Day 5)</span>
                    <span className="text-purple-900">12 kits at $48 each</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-purple-100 rounded">
                    <span className="font-medium text-purple-800">Purchase 2 (Day 12)</span>
                    <span className="text-purple-900">10 kits at $52 each</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-purple-200 rounded font-semibold">
                    <span className="text-purple-900">Total Available</span>
                    <span className="text-purple-900">30 units × $45-$52</span>
                  </div>
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                Sarah sold <strong>20 kits</strong> this month at $75 each. But here's the question: 
                <em>Which 20 kits?</em> The $45 ones? The $48 ones? The $52 ones? Or some combination?
              </p>
            </CardContent>
          </Card>

          {/* The Accounting Solution */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                The Standardized Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-amber-950">
              <p className="text-lg leading-relaxed">
                Accounting doesn't leave this question unanswered. Over decades, the accounting profession 
                developed <strong>four standardized methods</strong> for assigning costs when inventory comes 
                from different layers. Today, we'll learn the first two.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border-2 border-green-300">
                  <Badge className="bg-green-600 mb-2">Method 1</Badge>
                  <h4 className="font-semibold text-green-900 text-lg">FIFO — First-In, First-Out</h4>
                  <p className="text-green-800 text-sm mt-2">
                    Assign the oldest costs to COGS first. When you sell products, 
                    assume they came from your earliest purchases.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border-2 border-red-300">
                  <Badge className="bg-red-600 mb-2">Method 2</Badge>
                  <h4 className="font-semibold text-red-900 text-lg">LIFO — Last-In, First-Out</h4>
                  <p className="text-red-800 text-sm mt-2">
                    Assign the newest costs to COGS first. When you sell products, 
                    assume they came from your most recent purchases.
                  </p>
                </div>
              </div>

              <div className="bg-amber-100 p-4 rounded-lg border border-amber-300">
                <p className="text-amber-900 text-sm">
                  <strong>Coming in Lesson 4:</strong> We'll add two more methods — 
                  <strong>Specific Identification</strong> and <strong>Weighted Average</strong> — 
                  to complete your toolkit.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* The Stakes */}
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-slate-900 flex items-center gap-2">
                <DollarSign className="h-5 w-5" />
                Why This Choice Matters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed">
                Sarah's Premium Kits are rising in cost — $45, then $48, then $52. This rising-price 
                environment is exactly where FIFO and LIFO produce dramatically different results.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <span className="font-semibold text-green-900">FIFO in Rising Costs</span>
                  </div>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Uses older, cheaper costs for COGS</li>
                    <li>• Lower COGS → Higher gross profit</li>
                    <li>• Higher profit → Higher taxes</li>
                    <li>• Higher ending inventory value</li>
                    <li>• <em>Looks better to investors and lenders</em></li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="h-5 w-5 text-red-600" />
                    <span className="font-semibold text-red-900">LIFO in Rising Costs</span>
                  </div>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Uses newer, expensive costs for COGS</li>
                    <li>• Higher COGS → Lower gross profit</li>
                    <li>• Lower profit → Lower taxes</li>
                    <li>• Lower ending inventory value</li>
                    <li>• <em>Conserves cash by reducing tax burden</em></li>
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                <p className="text-slate-800">
                  <strong>The same 20 units sold.</strong> The same 10 units remaining. 
                  <strong>Two different stories</strong> about profit, taxes, and asset value. 
                  Which one Sarah tells depends on her goals — and today you'll learn how to calculate both.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Discussion */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="font-medium text-blue-900 mb-2">
                Discussion Prompt (2 minutes):
              </p>
              <p className="text-blue-800">
                If you were Sarah, and you had a meeting with potential investors next month, 
                which method would you instinctively prefer? Why?
              </p>
              <div className="bg-white p-3 rounded border border-blue-200 mt-3">
                <p className="text-sm text-blue-700">
                  <strong>Hint:</strong> Think about what each method does to your profit numbers. 
                  Investors want to see growth and profitability. Does one method make those numbers look stronger?
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Comprehension Check */}
          <ComprehensionCheck
            title="Check Your Understanding"
            description="Before diving into the mechanics, make sure you understand why FIFO and LIFO exist."
            questions={hookQuestions}
            showExplanations={true}
            allowRetry={true}
          />
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson03Data} phase={currentPhase} phases={lesson03Phases} />
    </div>
  )
}