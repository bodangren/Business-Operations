import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { DragAndDrop } from "@/components/exercises/DragAndDrop"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MessageCircle, DollarSign, Clock, TrendingDown } from "lucide-react"
import { lesson01Data, unit08Data, lesson01Phases } from "../lesson-data"

export default function Phase2Page() {
  const currentPhase = lesson01Phases[1]

  const comprehensionQuestions = [
    {
      id: "q1",
      question: "What does 'accumulated depreciation' represent?",
      answers: [
        "The current market value of the asset",
        "The total amount of the asset's cost that has been allocated to expense so far",
        "The amount of money set aside to replace the asset",
        "The total cost of all assets the company owns"
      ],
      explanation: "Accumulated depreciation is the running total of how much of an asset's cost has been 'used up' or allocated to expense over time. It grows each year as depreciation is recorded."
    },
    {
      id: "q2",
      question: "If Sarah's printer cost $15,000 and has accumulated depreciation of $6,000, what is its book value?",
      answers: [
        "$21,000",
        "$15,000",
        "$9,000",
        "$6,000"
      ],
      explanation: "Book Value = Cost - Accumulated Depreciation = $15,000 - $6,000 = $9,000. The book value is what the asset is still worth on the company's records."
    },
    {
      id: "q3",
      question: "Why does book value decrease over time?",
      answers: [
        "Because the asset physically disappears",
        "Because accumulated depreciation increases each year, reducing the difference between cost and depreciation",
        "Because the company sells part of the asset each year",
        "Because the original cost was wrong"
      ],
      explanation: "Book value decreases because accumulated depreciation grows each year. As more of the asset's cost is allocated to expense, the remaining book value shrinks. Eventually, book value reaches the asset's estimated salvage value."
    }
  ]

  const expenseVsAssetItems = [
    { id: "1", content: "Office supplies ($50)", matchId: "2", hint: "Used up within days or weeks" },
    { id: "2", content: "Everyday Expense", matchId: "1" },
    { id: "3", content: "Delivery truck ($35,000)", matchId: "4", hint: "Lasts many years, provides ongoing value" },
    { id: "4", content: "Long-Term Asset", matchId: "3" },
    { id: "5", content: "Monthly rent payment ($2,000)", matchId: "6", hint: "Benefit is consumed in the current period" },
    { id: "6", content: "Everyday Expense", matchId: "5" },
    { id: "7", content: "Commercial 3D printer ($15,000)", matchId: "8", hint: "Will be used for 5+ years" },
    { id: "8", content: "Long-Term Asset", matchId: "7" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <PhaseHeader
        lesson={lesson01Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-blue-600 text-white">
              Phase 2: The Scoreboard — Cost, Accumulated Depreciation, Book Value
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Three Numbers That Tell the Story of Every Asset</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              In Phase 1, you saw why Sarah cannot expense her $15,000 printer all at once.
              Now you will learn the three numbers that track an asset&apos;s value over time — and
              how they connect to the formula: Book Value = Cost - Accumulated Depreciation.
            </p>
          </div>

          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="text-xl">The Scoreboard Explained</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Every long-term asset has three numbers that investors and accountants track.
                Think of these as the &quot;scoreboard&quot; for the asset&apos;s life:
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                    <p className="font-bold text-blue-900 text-lg">Cost</p>
                  </div>
                  <p className="text-sm text-gray-700">
                    What you paid to acquire the asset and get it ready to use.
                    This includes the purchase price, delivery, installation, and any setup costs.
                    <strong> This number never changes</strong> once the asset is placed in service.
                  </p>
                  <p className="text-xs text-blue-700 mt-2 font-semibold">
                    Sarah&apos;s printer: $15,000
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingDown className="h-5 w-5 text-blue-600" />
                    <p className="font-bold text-blue-900 text-lg">Accumulated Depreciation</p>
                  </div>
                  <p className="text-sm text-gray-700">
                    The running total of how much of the asset&apos;s cost has been allocated to expense
                    so far. <strong>This number grows each year</strong> as the asset is &quot;used up.&quot;
                    It starts at $0 and increases until the asset is fully depreciated.
                  </p>
                  <p className="text-xs text-blue-700 mt-2 font-semibold">
                    Year 1: $3,000 | Year 2: $6,000 | Year 3: $9,000...
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-blue-600" />
                    <p className="font-bold text-blue-900 text-lg">Book Value</p>
                  </div>
                  <p className="text-sm text-gray-700">
                    What the asset is still worth on the company&apos;s records.
                    <strong> This number shrinks each year</strong> as accumulated depreciation grows.
                    When the asset is fully depreciated, book value equals its estimated salvage value.
                  </p>
                  <p className="text-xs text-blue-700 mt-2 font-semibold">
                    Year 0: $15,000 | Year 1: $12,000 | Year 2: $9,000...
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800 font-mono font-bold text-center">
                  Book Value = Cost - Accumulated Depreciation
                </p>
                <p className="text-sm text-blue-700 text-center mt-1">
                  $15,000 - $3,000 = $12,000 (after Year 1)
                </p>
              </div>
            </CardContent>
          </Card>

          <DragAndDrop
            items={expenseVsAssetItems}
            title="Expense or Asset?"
            description="Match each purchase to the correct category. Decide whether it is an everyday expense (used up quickly) or a long-term asset (provides value for years)."
            leftColumnTitle="Business Purchase"
            rightColumnTitle="Category"
            showHints={true}
            shuffleItems={true}
          />

          <ComprehensionCheck
            questions={comprehensionQuestions}
            title="Understanding the Scoreboard"
            description="Test your understanding of cost, accumulated depreciation, and book value."
            showExplanations={true}
          />

          <Card className="border-l-4 border-l-purple-600">
            <CardHeader>
              <CardTitle className="text-purple-900 dark:text-purple-200 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-purple-900 dark:text-purple-200 mb-2">
                    Discussion Prompt (3 minutes):
                  </p>
                  <p className="text-purple-800 dark:text-purple-300">
                    Sarah buys a $15,000 printer that will last 5 years. After 2 years, the accumulated
                    depreciation is $6,000.
                  </p>
                  <ul className="list-disc list-inside mt-2 space-y-1 text-purple-800 dark:text-purple-300">
                    <li>What is the printer&apos;s book value after 2 years?</li>
                    <li>Will the cost ever change from $15,000? Why or why not?</li>
                    <li>What will the book value be after 5 years if the printer has no salvage value?</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle>How the Three Numbers Work Together</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Here is how the scoreboard changes over the life of Sarah&apos;s $15,000 printer
                (assuming straight-line depreciation with no salvage value):
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 text-left">Year</th>
                      <th className="p-2 text-right">Cost</th>
                      <th className="p-2 text-right">Accumulated Depreciation</th>
                      <th className="p-2 text-right">Book Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b"><td className="p-2">Purchase (Year 0)</td><td className="p-2 text-right">$15,000</td><td className="p-2 text-right">$0</td><td className="p-2 text-right font-bold">$15,000</td></tr>
                    <tr className="border-b"><td className="p-2">End of Year 1</td><td className="p-2 text-right">$15,000</td><td className="p-2 text-right">$3,000</td><td className="p-2 text-right font-bold">$12,000</td></tr>
                    <tr className="border-b"><td className="p-2">End of Year 2</td><td className="p-2 text-right">$15,000</td><td className="p-2 text-right">$6,000</td><td className="p-2 text-right font-bold">$9,000</td></tr>
                    <tr className="border-b"><td className="p-2">End of Year 3</td><td className="p-2 text-right">$15,000</td><td className="p-2 text-right">$9,000</td><td className="p-2 text-right font-bold">$6,000</td></tr>
                    <tr className="border-b"><td className="p-2">End of Year 4</td><td className="p-2 text-right">$15,000</td><td className="p-2 text-right">$12,000</td><td className="p-2 text-right font-bold">$3,000</td></tr>
                    <tr><td className="p-2">End of Year 5</td><td className="p-2 text-right">$15,000</td><td className="p-2 text-right">$15,000</td><td className="p-2 text-right font-bold">$0</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Notice: <strong>Cost stays the same</strong>. Accumulated depreciation grows by $3,000 each year.
                Book value shrinks by $3,000 each year. This pattern is the heart of depreciation.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter
        lesson={lesson01Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />
    </div>
  )
}
