import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MessageCircle, Lightbulb } from "lucide-react"
import Image from "next/image"
import { lesson01Data, unit08Data, lesson01Phases } from "../lesson-data"

export default function Phase3Page() {
  const currentPhase = lesson01Phases[2]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50">
      <PhaseHeader
        lesson={lesson01Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-600 text-white">
              Phase 3: Predict the Pattern
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">What Happens to Book Value Over Time?</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Before you learn the formal depreciation methods, make a prediction.
              How do you think the value of Sarah&apos;s printer should change on the company&apos;s books
              each year? There is no wrong answer yet — just your best business reasoning.
            </p>
          </div>

          <Card className="border-l-4 border-l-emerald-600">
            <CardHeader>
              <CardTitle className="text-xl">The Prediction Challenge</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Sarah bought a $15,000 3D printer. She expects it to last 5 years.
                At the end of 5 years, she thinks she can sell it for about $1,500 for parts.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <p className="font-semibold text-emerald-900 mb-2">Your Task:</p>
                <p className="text-sm text-emerald-800">
                  In your notebook, create a table with 5 rows (one for each year).
                  For each year, write down what you think the book value should be at the end of that year.
                  Explain your reasoning for the pattern you chose.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3 mt-4">
                <div className="p-4 bg-white rounded-lg border-2 border-dashed border-gray-300">
                  <p className="font-semibold text-gray-900 mb-2">Option A: Equal Drops</p>
                  <p className="text-sm text-gray-700">
                    The book value drops by the same amount each year. Simple and predictable.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Year 1: $12,300 → Year 2: $9,600 → Year 3: $6,900...
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border-2 border-dashed border-gray-300">
                  <p className="font-semibold text-gray-900 mb-2">Option B: Big Drops Early</p>
                  <p className="text-sm text-gray-700">
                    The book value drops faster in early years when the asset is newest and most productive.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Year 1: $10,500 → Year 2: $7,800 → Year 3: $5,700...
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border-2 border-dashed border-gray-300">
                  <p className="font-semibold text-gray-900 mb-2">Option C: Your Own Pattern</p>
                  <p className="text-sm text-gray-700">
                    You think there is a different way the value should change. Describe your pattern.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Write your own numbers and explain your reasoning.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="text-xl">Notice and Wonder</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                Look at the two patterns below. What do you notice? What questions do you have?
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-blue-50 rounded-lg space-y-4">
                  <p className="font-semibold text-blue-900 mb-2">Pattern 1: Straight-Line</p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="p-1 text-left">Year</th>
                        <th className="p-1 text-right">Book Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="p-1">0</td><td className="p-1 text-right">$15,000</td></tr>
                      <tr><td className="p-1">1</td><td className="p-1 text-right">$12,300</td></tr>
                      <tr><td className="p-1">2</td><td className="p-1 text-right">$9,600</td></tr>
                      <tr><td className="p-1">3</td><td className="p-1 text-right">$6,900</td></tr>
                      <tr><td className="p-1">4</td><td className="p-1 text-right">$4,200</td></tr>
                      <tr><td className="p-1">5</td><td className="p-1 text-right">$1,500</td></tr>
                    </tbody>
                  </table>
                  <figure className="overflow-hidden rounded-xl border border-blue-200 bg-white shadow-sm">
                    <Image
                      src="/images/depreciation-straight-line.png"
                      alt="Straight-line depreciation chart showing book value decreasing by equal amounts from fifteen thousand dollars to fifteen hundred dollars over five years."
                      width={1600}
                      height={1200}
                      className="h-auto w-full"
                    />
                    <figcaption className="px-4 py-3 text-sm text-blue-900">
                      Straight-line keeps the yearly drop constant, so the book value falls at an even pace until it reaches salvage value.
                    </figcaption>
                  </figure>
                </div>
                <div className="p-4 bg-purple-50 rounded-lg space-y-4">
                  <p className="font-semibold text-purple-900 mb-2">Pattern 2: Double-Declining Balance</p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-purple-100">
                        <th className="p-1 text-left">Year</th>
                        <th className="p-1 text-right">Book Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td className="p-1">0</td><td className="p-1 text-right">$15,000</td></tr>
                      <tr><td className="p-1">1</td><td className="p-1 text-right">$10,500</td></tr>
                      <tr><td className="p-1">2</td><td className="p-1 text-right">$7,350</td></tr>
                      <tr><td className="p-1">3</td><td className="p-1 text-right">$5,145</td></tr>
                      <tr><td className="p-1">4</td><td className="p-1 text-right">$3,302</td></tr>
                      <tr><td className="p-1">5</td><td className="p-1 text-right">$1,500</td></tr>
                    </tbody>
                  </table>
                  <figure className="overflow-hidden rounded-xl border border-purple-200 bg-white shadow-sm">
                    <Image
                      src="/images/depreciation-double-declining-balance.png"
                      alt="Double-declining balance depreciation chart showing larger drops in early years and smaller drops later until book value reaches fifteen hundred dollars."
                      width={1600}
                      height={1200}
                      className="h-auto w-full"
                    />
                    <figcaption className="px-4 py-3 text-sm text-purple-900">
                      Double-declining balance front-loads depreciation, so the book value drops faster in the early years and slows as it approaches salvage value.
                    </figcaption>
                  </figure>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-600">
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
                    Discussion Prompt (4 minutes):
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-purple-800 dark:text-purple-300">
                    <li>Which pattern makes more sense for a 3D printer? Why?</li>
                    <li>Would the answer change if the asset was a building instead of equipment?</li>
                    <li>How would an investor view each pattern differently?</li>
                    <li>What real-world factors might cause an asset to lose value faster in early years?</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle>What the Reveal Shows</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                Both patterns are real depreciation methods used in business:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Pattern 1 (Straight-Line):</strong> The most common method. Equal expense each year. Simple, predictable, and widely accepted by investors.</li>
                <li><strong>Pattern 2 (Accelerated):</strong> Larger expense in early years, smaller in later years. Used for assets that lose value quickly or become obsolete fast.</li>
              </ul>
              <p className="text-gray-700">
                In the next lessons, you will learn exactly how to calculate each pattern, when to use each one,
                and how they affect a company&apos;s financial statements differently. For now, the key insight is:
                <strong> the method you choose changes the story your financial statements tell.</strong>
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <p className="text-sm text-green-800 flex items-start gap-2">
                  <Lightbulb className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Key insight:</strong> Depreciation is not about what the asset is worth on the open market.
                    It is about how the company allocates the asset&apos;s cost across the years it provides value.
                    The method is a choice — but it must be reasonable and consistently applied.
                  </span>
                </p>
              </div>
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
