import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { lesson02Data, unit08Data, lesson02Phases } from "../lesson-data"

export default function Phase2Page() {
  const currentPhase = lesson02Phases[1]

  const vocabularySentences = [
    {
      id: "v1",
      text: "When a purchase provides value for more than one year, you {blank} it as an asset instead of expensing it immediately.",
      answer: "capitalize",
      hint: "This means recording the cost as a long-term asset on the balance sheet",
      category: "Capitalization"
    },
    {
      id: "v2",
      text: "The number of years an asset is expected to provide value to the business is called its {blank}.",
      answer: "useful life",
      hint: "For a delivery van, this might be 5-8 years",
      category: "Useful Life"
    },
    {
      id: "v3",
      text: "The estimated amount a business expects to receive when it sells an asset at the end of its useful life is called {blank}.",
      answer: "salvage value",
      hint: "Also called residual value or scrap value",
      category: "Salvage Value"
    },
    {
      id: "v4",
      text: "The amount of an asset's cost that will be allocated as depreciation expense is called the depreciable {blank}.",
      answer: "base",
      hint: "It equals Cost minus Salvage Value",
      category: "Depreciable Base"
    },
    {
      id: "v5",
      text: "The running total of all depreciation expense recorded for an asset since it was purchased is called {blank} depreciation.",
      answer: "accumulated",
      hint: "This account grows each year and reduces book value",
      category: "Accumulated Depreciation"
    },
    {
      id: "v6",
      text: "Office supplies like paper and ink are {blank} immediately because they are used up within the current period.",
      answer: "expensed",
      hint: "The opposite of capitalized",
      category: "Expense"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <PhaseHeader
        lesson={lesson02Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-blue-600 text-white">
              Phase 2: The Rules for Capitalization
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">When Does a Cost Become an Asset?</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              There is a clear rule for deciding whether a purchase is an asset or an expense.
              Once you learn it, every purchase becomes straightforward.
            </p>
          </div>

          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="text-xl">The Capitalization Rule</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                A purchase should be <strong>capitalized</strong> (recorded as an asset) when it meets <strong>both</strong> of these conditions:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-bold text-green-900 text-lg">Condition 1: Lasts More Than 1 Year</p>
                  <p className="text-sm text-gray-700 mt-2">
                    The asset will provide economic value to the business for multiple accounting periods.
                    Example: A delivery van lasts 5-8 years.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-bold text-green-900 text-lg">Condition 2: Significant Cost</p>
                  <p className="text-sm text-gray-700 mt-2">
                    The cost is large enough that it matters to track separately.
                    Example: $3,500 for a scooter is significant; $15 for a stapler is not.
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>If both conditions are YES</strong> → Capitalize (record as an asset, depreciate over time).
                </p>
                <p className="text-sm text-blue-800 mt-1">
                  <strong>If either condition is NO</strong> → Expense (record as a cost in the current period).
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-600">
            <CardHeader>
              <CardTitle className="text-xl">Three Numbers You Need for Every Asset</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Once you decide to capitalize a purchase, you need three numbers to track it properly:
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="font-bold text-blue-900 text-lg">1. Cost</p>
                  <p className="text-sm text-gray-700 mt-1">
                    What you paid, including delivery and installation.
                    <br />Example: $15,000 for the 3D printer.
                  </p>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="font-bold text-amber-900 text-lg">2. Useful Life</p>
                  <p className="text-sm text-gray-700 mt-1">
                    How many years the asset will provide value.
                    <br />Example: 7 years for the printer.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-bold text-green-900 text-lg">3. Salvage Value</p>
                  <p className="text-sm text-gray-700 mt-1">
                    What you expect to sell it for at the end.
                    <br />Example: $2,000 for the printer.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-600">
            <CardHeader>
              <CardTitle className="text-xl">The Depreciable Base</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Not all of an asset&apos;s cost gets depreciated. You only depreciate the portion that will be
                &quot;used up&quot; — the cost minus what you expect to get back at the end.
              </p>
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                <p className="text-center text-lg font-bold text-purple-900 mb-3">
                  Depreciable Base = Cost - Salvage Value
                </p>
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <p className="font-medium text-purple-900 mb-2">Example: Sarah&apos;s 3D Printer</p>
                  <div className="space-y-1 text-sm text-purple-800 font-mono">
                    <p>Cost = $15,000</p>
                    <p>Salvage Value = $2,000</p>
                    <p className="font-bold text-lg border-t border-purple-200 pt-2 mt-2">
                      Depreciable Base = $15,000 - $2,000 = $13,000
                    </p>
                  </div>
                  <p className="text-sm text-purple-700 mt-3">
                    This means $13,000 of the printer&apos;s cost will be spread across its 7-year useful life
                    as depreciation expense. The remaining $2,000 is recovered when the printer is sold.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle className="text-xl">How Accumulated Depreciation Builds</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Each year, a portion of the depreciable base moves from the asset to depreciation expense.
                The total of all depreciation recorded so far is called <strong>accumulated depreciation</strong>.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="font-medium text-green-900 mb-3">
                  Sarah&apos;s 3D Printer — Year by Year (Straight-Line Preview)
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-green-300">
                        <th className="text-left py-2 px-3 text-green-900">Year</th>
                        <th className="text-right py-2 px-3 text-green-900">Annual Depreciation</th>
                        <th className="text-right py-2 px-3 text-green-900">Accumulated Depreciation</th>
                        <th className="text-right py-2 px-3 text-green-900">Book Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-green-200">
                        <td className="py-2 px-3">Start</td>
                        <td className="text-right py-2 px-3">—</td>
                        <td className="text-right py-2 px-3">$0</td>
                        <td className="text-right py-2 px-3 font-bold">$15,000</td>
                      </tr>
                      <tr className="border-b border-green-200">
                        <td className="py-2 px-3">Year 1</td>
                        <td className="text-right py-2 px-3">$1,857</td>
                        <td className="text-right py-2 px-3">$1,857</td>
                        <td className="text-right py-2 px-3">$13,143</td>
                      </tr>
                      <tr className="border-b border-green-200">
                        <td className="py-2 px-3">Year 2</td>
                        <td className="text-right py-2 px-3">$1,857</td>
                        <td className="text-right py-2 px-3">$3,714</td>
                        <td className="text-right py-2 px-3">$11,286</td>
                      </tr>
                      <tr className="border-b border-green-200">
                        <td className="py-2 px-3">Year 3</td>
                        <td className="text-right py-2 px-3">$1,857</td>
                        <td className="text-right py-2 px-3">$5,571</td>
                        <td className="text-right py-2 px-3">$9,429</td>
                      </tr>
                      <tr className="bg-green-100">
                        <td className="py-2 px-3 font-medium">Year 7</td>
                        <td className="text-right py-2 px-3">$1,857</td>
                        <td className="text-right py-2 px-3 font-bold">$13,000</td>
                        <td className="text-right py-2 px-3 font-bold">$2,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-green-700 mt-3">
                  Note: $13,000 ÷ 7 years = $1,857 per year (rounded). Book value at the end equals the salvage value.
                  In Lesson 03 you will learn the straight-line method that produces this schedule.
                </p>
              </div>
            </CardContent>
          </Card>

          <FillInTheBlank
            sentences={vocabularySentences}
            title="Master the Vocabulary"
            description="Complete these sentences to solidify your understanding of capitalization, useful life, salvage value, and accumulated depreciation."
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />

          <Card className="border-l-4 border-l-indigo-600">
            <CardHeader>
              <CardTitle>Worked Example: The Delivery Scooter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Let&apos;s walk through the full process for Sarah&apos;s $3,500 delivery scooter.
              </p>
              <div className="space-y-3">
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <p className="font-medium text-indigo-900 mb-2">Step 1: Classify — Capitalize or Expense?</p>
                  <p className="text-sm text-indigo-800">
                    Does it last more than 1 year? <strong>Yes</strong> — about 5 years.
                    Is the cost significant? <strong>Yes</strong> — $3,500.
                    → <strong>Capitalize</strong> as an asset.
                  </p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <p className="font-medium text-indigo-900 mb-2">Step 2: Identify the Three Numbers</p>
                  <p className="text-sm text-indigo-800">
                    Cost = $3,500. Useful Life = 5 years. Salvage Value = $500.
                  </p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                  <p className="font-medium text-indigo-900 mb-2">Step 3: Calculate the Depreciable Base</p>
                  <p className="text-sm text-indigo-800 font-mono">
                    Depreciable Base = $3,500 - $500 = $3,000
                  </p>
                  <p className="text-sm text-indigo-700 mt-1">
                    This $3,000 will be spread across 5 years as depreciation expense.
                    The scooter&apos;s book value will decrease from $3,500 to $500 over those 5 years.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle>What Comes Next</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Now you know the rules. In the next phase, you will practice classifying mixed purchases
                and calculating depreciable bases with less guidance. You will need to explain your reasoning,
                not just pick an answer.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter
        lesson={lesson02Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}
