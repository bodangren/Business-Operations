import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, HelpCircle, TrendingUp } from "lucide-react"
import Image from "next/image"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson02Data, unit07Data, lesson02Phases } from "../lesson-data"

const currentPhase = lesson02Phases[0]

const hookQuestions = [
  {
    id: "hook-1",
    question: "Sarah started the month with 10 launch kits worth $180 total. She bought 20 more kits for $400. After selling 15 kits, she has 15 kits left on the shelf. Why can't she immediately tell you the dollar value of those 15 remaining kits?",
    answers: [
      "Because the kits were purchased at different costs, and she doesn't know which specific kits were sold",
      "Because she lost the receipts for some of the purchases",
      "Because the kits have all spoiled and are now worthless",
      "Because inventory value is always the same as the selling price"
    ],
    explanation: "When the same product is purchased at different prices, knowing how many units remain doesn't tell you their value. You need to decide which costs stayed in inventory and which costs moved to COGS."
  },
  {
    id: "hook-2",
    question: "Sarah's bookkeeper tells her the 15 remaining kits are worth either $255 or $285 depending on how costs are assigned. What does this mean for Sarah's business?",
    answers: [
      "Her ending inventory value and her profit both depend on a choice she hasn't made yet",
      "The bookkeeper made a calculation error and needs to redo the math",
      "One of those numbers is definitely wrong because inventory can only have one value",
      "Sarah should just pick the higher number because it makes her business look better"
    ],
    explanation: "Both numbers could be correct under different inventory methods. Sarah's job is to understand the options, choose one, and be able to defend it to investors and lenders."
  },
  {
    id: "hook-3",
    question: "Why does the ending inventory number matter to someone outside the business, like a lender or investor?",
    answers: [
      "Because ending inventory affects both the balance sheet value and the reported profit",
      "Because lenders only care about physical items, not dollars",
      "Because investors want to know exactly which products are on the shelf",
      "Because ending inventory determines how much tax the business will pay next year"
    ],
    explanation: "Ending inventory is an asset on the balance sheet, and it directly affects COGS, which affects gross profit. An investor or lender needs to trust that number to evaluate the business."
  },
  {
    id: "hook-4",
    question: "In Lesson 1, you learned the formula: Ending Inventory = Beginning Inventory + Purchases - COGS. Which part of this formula is Sarah unsure about in this lesson?",
    answers: [
      "COGS - she knows how many units sold, but not which cost dollars to assign to those units",
      "Beginning Inventory - she forgot what she started with",
      "Purchases - she lost track of what she bought",
      "All of them - Sarah's records are completely missing"
    ],
    explanation: "Sarah can count units easily. The problem is assigning dollar values. When she sells 15 kits, were they the cheaper ones or the more expensive ones? That choice determines COGS and what's left in inventory."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <PhaseHeader unit={unit07Data} lesson={lesson02Data} phase={currentPhase} phases={lesson02Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-amber-100 text-amber-800 text-lg px-4 py-2">Phase 1: Hook</Badge>
            <h1 className="text-3xl font-bold text-slate-900">Why Counting Units Isn't Enough</h1>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              Sarah can count what's on the shelf. She can count what she bought. She can count what she sold.
              But when she tries to put a dollar value on what remains, she runs into a problem.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto space-y-8">
          {/* Opening Scenario */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Sarah's Inventory Puzzle
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-blue-950">
              <p className="text-lg leading-relaxed">
                Remember Sarah's Client Launch Kits from Lesson 1? She's been buying them in batches throughout 
                the month. Here's what happened:
              </p>
              
              <div className="grid gap-4 md:grid-cols-3">
                <div className="bg-white p-4 rounded-lg border border-blue-300">
                  <p className="text-sm text-blue-700 font-medium">Beginning Inventory</p>
                  <p className="text-2xl font-bold text-blue-900">10 kits</p>
                  <p className="text-sm text-blue-600">$18 each = $180 total</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-300">
                  <p className="text-sm text-blue-700 font-medium">Purchases</p>
                  <p className="text-2xl font-bold text-blue-900">20 kits</p>
                  <p className="text-sm text-blue-600">$20 each = $400 total</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-300">
                  <p className="text-sm text-blue-700 font-medium">Sold</p>
                  <p className="text-2xl font-bold text-blue-900">15 kits</p>
                  <p className="text-sm text-blue-600">Selling price: $38 each</p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-amber-300 mt-4">
                <p className="text-amber-800 font-medium mb-2">Quick math check:</p>
                <p className="text-amber-900">
                  10 + 20 - 15 = <strong>15 kits remaining</strong> on the shelf.
                </p>
                <p className="text-amber-900 mt-2">
                  But here's the puzzle: <strong>What are those 15 kits worth in dollars?</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* The Core Problem */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900 flex items-center gap-2">
                <HelpCircle className="h-5 w-5" />
                The Problem Sarah Can't Solve Yet
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-red-950">
              <p className="text-lg leading-relaxed">
                Sarah knows she has 15 kits left. But when she asks her bookkeeper for the dollar value, 
                she gets a surprising answer:
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-red-300">
                <p className="text-red-800 italic mb-3">
                  "Well, that depends. The 15 kits remaining could be worth <strong>$255</strong> or 
                  they could be worth <strong>$285</strong>. I need to know which cost assignment method 
                  you want to use."
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                Two different answers. Both could be correct. Sarah stares at her spreadsheet, confused.
                How can the same 15 kits have two different values?
              </p>

              <div className="bg-red-100 p-4 rounded-lg border border-red-300">
                <p className="text-red-800 font-medium">
                  The kits were bought at different prices: some at $18, some at $20.
                  When Sarah sold 15 kits, which ones did she sell? The cheaper ones? The more expensive ones?
                  A mix? That choice determines what's left.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* The Formula Image */}
          <Card className="border-slate-200 bg-white">
            <CardHeader>
              <CardTitle className="text-slate-900">The Unit Scoreboard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-700">
                In Lesson 1, you learned the formula that drives this entire unit. Here it is again:
              </p>
              <div className="flex justify-center">
                <Image 
                  src="/images/inventory-equation.png" 
                  alt="Ending Inventory = Beginning Inventory + Purchases - Cost of Goods Sold"
                  width={600}
                  height={120}
                  className="rounded-lg"
                />
              </div>
              <p className="text-slate-700">
                Today's lesson focuses on one question: <strong>How does inventory move through this formula?</strong>
                You'll learn that the formula works perfectly for counting units, but when dollars are involved, 
                you need a rule for which costs go where.
              </p>
            </CardContent>
          </Card>

          {/* Turn and Talk */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-950 space-y-3">
              <p className="font-medium">Discussion prompt (3 minutes):</p>
              <ul className="list-disc list-inside space-y-2">
                <li>If Sarah sold 15 kits, why can't we just say the remaining 15 kits are worth $285 (the average cost)?</li>
                <li>Why might an investor care whether Sarah reports $255 or $285 as her ending inventory?</li>
                <li>What would happen if Sarah just guessed and picked a number without understanding the rules?</li>
              </ul>
            </CardContent>
          </Card>

          {/* Comprehension Check */}
          <ComprehensionCheck
            questions={hookQuestions}
            title="Understanding the Inventory Puzzle"
            description="Check your understanding of why ending inventory value isn't always obvious."
            showExplanations={true}
          />

          {/* Today's Focus */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900">Today's Learning Focus</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-amber-950">
              <p>
                Lesson 2 is about <strong>how inventory moves</strong> through the accounting system. 
                You'll learn to track the flow of units and the flow of costs separately.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-amber-800 mb-2">Key Concepts:</h4>
                  <ul className="text-amber-700 text-sm space-y-1">
                    <li>• Physical flow vs. cost flow</li>
                    <li>• Goods Available for Sale</li>
                    <li>• Inventory layers</li>
                    <li>• Where mistakes happen</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-800 mb-2">Learning Objectives:</h4>
                  <ul className="text-amber-700 text-sm space-y-1">
                    <li>• Trace inventory through the formula</li>
                    <li>• Separate unit tracking from value tracking</li>
                    <li>• Explain why cost assignment matters</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson02Data} phase={currentPhase} phases={lesson02Phases} />
    </div>
  )
}
