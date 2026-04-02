import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, ArrowRight } from "lucide-react"
import { lesson02Data, unit08Data, lesson02Phases } from "../lesson-data"

export default function Phase6Page() {
  const currentPhase = lesson02Phases[5]

  const reflectionPrompts = [
    {
      id: 'confidence-capitalization',
      category: 'confidence' as const,
      prompt: 'How confident do you feel about deciding whether a purchase should be capitalized or expensed? What type of purchase still feels tricky to you?',
      placeholder: 'Think about the classification rule: does it last more than a year AND is the cost significant? Which part feels solid, and which part still needs practice...'
    },
    {
      id: 'understanding-depreciable-base',
      category: 'understanding' as const,
      prompt: 'Can you explain to a classmate why we subtract salvage value from cost to find the depreciable base? What would happen if we depreciated the full cost instead?',
      placeholder: 'Think about what salvage value represents — money the business gets back at the end. If we depreciated the full cost, we would be saying the asset is worthless at the end, which is not true...'
    },
    {
      id: 'business-connection',
      category: 'understanding' as const,
      prompt: 'Why does it matter to investors and lenders whether TechStart classifies its purchases correctly? What would happen to the financial statements if Sarah expensed a $15,000 printer instead of capitalizing it?',
      placeholder: 'Think about the impact on profit, taxes, and the balance sheet. If Sarah expenses the printer, year-1 profit looks artificially low and years 2-7 look artificially high...'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <PhaseHeader
        lesson={lesson02Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-600 text-white">
              Phase 6: Reflection & Preview
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">What You Learned Today</h1>
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
            <ReflectionJournal
              unitTitle="Capitalization & Depreciation Foundations"
              prompts={reflectionPrompts}
            />
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
