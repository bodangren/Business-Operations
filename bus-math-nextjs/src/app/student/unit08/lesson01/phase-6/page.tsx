import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Lightbulb, TrendingUp } from "lucide-react"
import { lesson01Data, unit08Data, lesson01Phases } from "../lesson-data"

export default function Phase6Page() {
  const currentPhase = lesson01Phases[5]

  const reflectionPrompts = [
    {
      id: "understanding-unit8-l1",
      category: "understanding" as const,
      prompt: "In your own words, explain why a business cannot expense the full cost of a long-term asset in the year it is purchased. What would go wrong if they did?",
      placeholder: "Think about what happens to reported profit, investor trust, and the accuracy of financial statements when a big purchase is treated like a small one..."
    },
    {
      id: "confidence-unit8-l1",
      category: "confidence" as const,
      prompt: "Which part of today's lesson feels most clear to you right now? Which part still feels confusing or uncertain?",
      placeholder: "Be honest about where you feel strong and where you need more practice. The scoreboard? The formula? The difference between assets and expenses?"
    },
    {
      id: "transfer-unit8-l1",
      category: "transfer" as const,
      prompt: "How does the formula Book Value = Cost - Accumulated Depreciation connect to Sarah's equipment purchase problem? Why will this formula matter in the next lessons?",
      placeholder: "Think about how this single formula ties together everything you learned today and what comes next..."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-violet-50">
      <PhaseHeader
        lesson={lesson01Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-600 text-white">
              Phase 6: Closing — Lock In the Unit Frame
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">What You Now Understand About Long-Term Assets</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Today you learned why long-term asset costs are not treated like everyday expenses,
              what the depreciation scoreboard means, and why investors expect professional asset tracking.
              Let us lock in what matters and look ahead.
            </p>
          </div>

          <Card className="border-l-4 border-l-indigo-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-indigo-600" />
                The Enduring Formula for This Unit
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg p-6 text-center">
                <p className="text-2xl font-mono font-bold text-indigo-900">
                  Book Value = Cost - Accumulated Depreciation
                </p>
              </div>
              <p className="text-gray-700">
                This formula is the spine of the entire unit. Every lesson connects back to it:
              </p>
              <div className="grid gap-3 md:grid-cols-3">
                <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                  <p className="font-bold text-indigo-900">Cost</p>
                  <p className="text-sm text-gray-700 mt-1">
                    What you paid. This number never changes once the asset is in service.
                  </p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                  <p className="font-bold text-indigo-900">Accumulated Depreciation</p>
                  <p className="text-sm text-gray-700 mt-1">
                    The total cost allocated to expense so far. This number grows each year.
                  </p>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                  <p className="font-bold text-indigo-900">Book Value</p>
                  <p className="text-sm text-gray-700 mt-1">
                    What the asset is still worth on the books. This number shrinks each year.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle>What You Should Now Understand</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  <strong>Long-term assets are different from everyday expenses.</strong> A $15,000 printer
                  provides value for years, so its cost must be spread across those years through depreciation.
                </li>
                <li>
                  <strong>The scoreboard has three parts.</strong> Cost stays fixed. Accumulated depreciation
                  grows. Book value shrinks. The formula connects all three.
                </li>
                <li>
                  <strong>Investors watch how founders handle big purchases.</strong> Professional asset tracking
                  signals that management understands financial reporting. Poor tracking is a red flag.
                </li>
                <li>
                  <strong>The depreciation method you choose changes the story your financial statements tell.</strong>
                  Different methods produce different expense amounts each year, which affects reported profit and tax liability.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-amber-600" />
                What Comes Next: Capitalization and Depreciation Rules
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                Today you saw the problem. The next lessons teach the formal rules:
              </p>
              <div className="space-y-3">
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="font-semibold text-amber-900">Lesson 2: Capitalization vs. Expense</p>
                  <p className="text-sm text-gray-700 mt-1">
                    When does a cost become an asset? You will learn the rules for capitalization, useful life,
                    salvage value, and how accumulated depreciation builds over time.
                  </p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="font-semibold text-amber-900">Lesson 3: Straight-Line Depreciation</p>
                  <p className="text-sm text-gray-700 mt-1">
                    The most common method. Equal expense each year. You will calculate it by hand and see how
                    it affects the income statement and balance sheet.
                  </p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="font-semibold text-amber-900">Lesson 4: Double-Declining Balance</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Accelerated depreciation. Bigger expense early, smaller later. You will compare it with
                    straight-line and decide when each method makes sense.
                  </p>
                </div>
                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <p className="font-semibold text-amber-900">Lessons 5-6: Build the Asset Register Workbook</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Take everything you have learned manually and build a professional Excel asset register
                    and depreciation schedule.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <ReflectionJournal
            unitTitle="Unit 8, Lesson 1: Sarah's Equipment Purchase — Why Long-Term Assets Are Different"
            prompts={reflectionPrompts}
          />

          <Card className="border-l-4 border-l-emerald-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-emerald-600" />
                Your Path Forward
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700">
                Today you stepped into Sarah's shoes and saw why a $15,000 equipment purchase is not
                just a simple transaction. It is a decision that affects financial statements, investor
                trust, and the credibility of a business for years to come.
              </p>
              <p className="text-gray-700">
                The formula <strong>Book Value = Cost - Accumulated Depreciation</strong> will be your
                compass through every lesson in this unit. By the end, you will not just understand it —
                you will be able to calculate it, defend it, and build a professional workbook that
                tracks it for real business assets.
              </p>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <p className="text-sm text-emerald-800">
                  <strong>Before you leave:</strong> Make sure you can explain the scoreboard to someone
                  who was absent today. If you can teach it, you own it.
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
