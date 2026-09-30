import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, ArrowRight } from "lucide-react"

export default function Phase6Content() {

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-600 text-white">
              Phase 6: Reflection & Preview
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">What You Learned Today</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You now know how to decide whether a purchase is an asset or an expense, how to estimate
              useful life and salvage value, and how to calculate the depreciable base. These are the
              foundations for every depreciation method you will learn.
            </p>
          </div>

          <Card className="border-l-4 border-l-emerald-600">
            <CardHeader>
              <CardTitle className="text-xl">Today&apos;s Key Takeaways</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="font-bold text-emerald-900 mb-2">Capitalization Rule</p>
                  <p className="text-sm text-emerald-800">
                    Capitalize if the item lasts more than 1 year AND the cost is significant.
                    Otherwise, expense it immediately.
                  </p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="font-bold text-emerald-900 mb-2">Depreciable Base</p>
                  <p className="text-sm text-emerald-800 font-mono">
                    Depreciable Base = Cost - Salvage Value
                  </p>
                  <p className="text-xs text-emerald-700 mt-1">
                    This is the amount spread across the asset&apos;s useful life.
                  </p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="font-bold text-emerald-900 mb-2">Useful Life</p>
                  <p className="text-sm text-emerald-800">
                    How many years the asset provides value. Estimated by management based on
                    experience and industry standards.
                  </p>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                  <p className="font-bold text-emerald-900 mb-2">Accumulated Depreciation</p>
                  <p className="text-sm text-emerald-800">
                    The running total of all depreciation recorded. It grows each year and
                    reduces book value.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-blue-600" />
                Connecting Back to the Business Problem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                Sarah needs to classify every purchase correctly so her financial statements tell an
                honest story. If she expenses a $15,000 printer, her profit looks terrible this year
                and too good in future years. If she capitalizes a $200 supply purchase, she is
                overstating her assets.
              </p>
              <p className="text-gray-700">
                The signal that tells you to use capitalization is simple: <strong>does this purchase
                provide value for more than one year, and is the cost significant enough to track?</strong>
                If yes to both, it is an asset. If not, it is an expense.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Reflect on Your Learning</h3>
              <p className="text-gray-600">
                Take a few minutes to think through these prompts. There are no wrong answers —
                this is about processing what you learned today.
              </p>
            </div>
          </div>

          <Card className="border-l-4 border-l-amber-600">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-amber-600" />
                Preview: Lesson 03 — Straight-Line Depreciation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                Now that you know <strong>what</strong> to depreciate (the depreciable base) and
                <strong> how long</strong> to depreciate it over (useful life), the next lesson teaches
                you <strong>how much</strong> to depreciate each year.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-800 font-mono">
                  Straight-Line Depreciation = Depreciable Base ÷ Useful Life
                </p>
                <p className="text-sm text-amber-700 mt-2">
                  For Sarah&apos;s 3D printer: $13,000 ÷ 7 years = $1,857 per year.
                  The same amount every year — simple, predictable, and the most commonly used method.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

    </div>
  )
}
