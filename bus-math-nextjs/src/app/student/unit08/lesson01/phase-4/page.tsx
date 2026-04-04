import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Lightbulb } from "lucide-react"
import { lesson01Data, unit08Data, lesson01Phases } from "../lesson-data"

export default function Phase4Page() {
  const currentPhase = lesson01Phases[3]

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-50">
      <PhaseHeader
        lesson={lesson01Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-violet-600 text-white">
              Phase 4: Make the Choice
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">How Should Sarah Track Her Printer?</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              You have seen the scoreboard and predicted the pattern. Now make a real decision.
              Sarah needs to choose how to track her $15,000 printer. Her choice will affect
              her financial statements and how investors see her business.
            </p>
          </div>

          <Card className="border-l-4 border-l-violet-600">
            <CardHeader>
              <CardTitle className="text-xl">The Decision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Sarah has two reasonable choices for tracking her $15,000 printer over 5 years
                with an estimated salvage value of $1,500:
              </p>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="p-4 bg-green-50 rounded-lg border-2 border-green-300">
                  <p className="font-bold text-green-900 text-lg mb-2">Choice A: Straight-Line</p>
                  <p className="text-sm text-gray-700 mb-2">
                    Depreciate the same amount each year.
                  </p>
                  <p className="text-sm text-gray-700">
                    Annual depreciation = ($15,000 - $1,500) ÷ 5 = <strong>$2,700/year</strong>
                  </p>
                  <div className="mt-3 p-2 bg-green-100 rounded">
                    <p className="text-xs text-green-800">
                      <strong>Effect:</strong> Profit is reduced by $2,700 every year. Predictable and simple.
                    </p>
                  </div>
                </div>
                <div className="p-4 bg-amber-50 rounded-lg border-2 border-amber-300">
                  <p className="font-bold text-amber-900 text-lg mb-2">Choice B: Double-Declining Balance</p>
                  <p className="text-sm text-gray-700 mb-2">
                    Depreciate more in early years, less in later years.
                  </p>
                  <p className="text-sm text-gray-700">
                    Year 1: $6,000 | Year 2: $3,600 | Year 3: $2,160...
                  </p>
                  <div className="mt-3 p-2 bg-amber-100 rounded">
                    <p className="text-xs text-amber-800">
                      <strong>Effect:</strong> Profit takes a bigger hit early on but improves in later years.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-600">
            <CardHeader>
              <CardTitle>Your Analysis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                In your notebook, answer these questions:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-gray-700">
                <li>
                  <strong>Which method would you recommend for Sarah?</strong> Write one sentence explaining your choice.
                </li>
                <li>
                  <strong>What is the book value after 3 years under each method?</strong> Show your work.
                </li>
                <li>
                  <strong>How would each method affect Sarah&apos;s reported profit in Year 1?</strong>
                  Which method makes profit look better? Which is more honest?
                </li>
                <li>
                  <strong>If Sarah wants to show strong profit to investors in Year 1,</strong>
                  which method helps her? Is that a good reason to choose it?
                </li>
              </ol>
              <div className="bg-violet-50 border border-violet-200 rounded-lg p-4">
                <p className="text-sm text-violet-800 flex items-start gap-2">
                  <Lightbulb className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Hint:</strong> There is no single &quot;right&quot; answer. Both methods are acceptable under
                    accounting rules. What matters is that you can explain <em>why</em> you chose one over the other
                    and what the consequences are for the financial statements.
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-orange-600">
            <CardHeader>
              <CardTitle>Consequences of Each Choice</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="p-2 text-left">Factor</th>
                      <th className="p-2 text-center">Straight-Line</th>
                      <th className="p-2 text-center">Double-Declining</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-2">Year 1 expense</td>
                      <td className="p-2 text-center">$2,700</td>
                      <td className="p-2 text-center">$6,000</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Year 1 profit impact</td>
                      <td className="p-2 text-center">Smaller hit</td>
                      <td className="p-2 text-center">Bigger hit</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Year 3 book value</td>
                      <td className="p-2 text-center">$6,900</td>
                      <td className="p-2 text-center">$4,320</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-2">Complexity</td>
                      <td className="p-2 text-center">Simple</td>
                      <td className="p-2 text-center">More complex</td>
                    </tr>
                    <tr>
                      <td className="p-2">Best for assets that...</td>
                      <td className="p-2 text-center">Lose value evenly</td>
                      <td className="p-2 text-center">Lose value fast early</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-sm text-amber-800 flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Important:</strong> Once Sarah chooses a method, she should use it consistently.
                    Switching methods mid-stream is a red flag for investors because it can look like she is
                    manipulating profit numbers.
                  </span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle>What This Reveals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                This exercise shows why depreciation matters beyond just &quot;doing the math.&quot;
                The method a company chooses affects:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Reported profit</strong> — different methods produce different expense amounts each year</li>
                <li><strong>Tax liability</strong> — more depreciation means lower taxable income</li>
                <li><strong>Investor perception</strong> — the method signals how management views the asset&apos;s useful life</li>
                <li><strong>Book value accuracy</strong> — the method should reflect how the asset actually loses value</li>
              </ul>
              <p className="text-gray-700">
                In the next lessons, you will learn the formal rules for calculating each method,
                how to record depreciation in financial statements, and how to defend your method
                choice to investors.
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
