import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, ArrowRight } from "lucide-react"
import { lesson02Data, unit08Data, lesson02Phases } from "../lesson-data"
import CapitalizationDecisionLab from "../CapitalizationDecisionLab"

export default function Phase3Page() {
  const currentPhase = lesson02Phases[2]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50">
      <PhaseHeader
        lesson={lesson02Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-teal-600 text-white">
              Phase 3: Mixed Classifications with Reduced Scaffolding
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Classify, Calculate, and Explain</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Now you will work through Sarah&apos;s purchase week step by step. The activity below slows down the
              accounting decision so you can see exactly when a cost becomes a fixed asset and when it stays an expense.
            </p>
          </div>

          <Card className="border-l-4 border-l-teal-600">
            <CardHeader>
              <CardTitle className="text-xl">The Decision Framework</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Use this framework for every purchase. The questions get harder as you go.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-3 justify-center">
                <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 text-center">
                  <p className="font-bold text-teal-900">Step 1</p>
                  <p className="text-sm text-teal-800">Lasts more than 1 year?</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 hidden md:block" />
                <ArrowRight className="h-5 w-5 text-gray-400 rotate-90 md:hidden" />
                <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 text-center">
                  <p className="font-bold text-teal-900">Step 2</p>
                  <p className="text-sm text-teal-800">Cost significant?</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 hidden md:block" />
                <ArrowRight className="h-5 w-5 text-gray-400 rotate-90 md:hidden" />
                <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 text-center">
                  <p className="font-bold text-teal-900">Step 3</p>
                  <p className="text-sm text-teal-800">Estimate useful life & salvage value</p>
                </div>
                <ArrowRight className="h-5 w-5 text-gray-400 hidden md:block" />
                <ArrowRight className="h-5 w-5 text-gray-400 rotate-90 md:hidden" />
                <div className="bg-teal-50 p-4 rounded-lg border border-teal-200 text-center">
                  <p className="font-bold text-teal-900">Step 4</p>
                  <p className="text-sm text-teal-800">Calculate depreciable base</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-amber-600">
            <CardHeader>
              <CardTitle className="text-xl">Tricky Cases to Watch For</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="font-medium text-amber-900 mb-2">Repairs vs. Improvements</p>
                <p className="text-sm text-amber-800">
                  <strong>Repairs</strong> (oil change, fixing a broken window) maintain the asset but do not extend its life → <strong>Expense</strong>.
                </p>
                <p className="text-sm text-amber-800 mt-1">
                  <strong>Improvements</strong> (new roof, engine upgrade) extend useful life or increase capacity → <strong>Capitalize</strong>.
                </p>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <p className="font-medium text-amber-900 mb-2">Bundled Purchases</p>
                <p className="text-sm text-amber-800">
                  If you buy equipment and pay for installation, the <strong>total cost</strong> (purchase price + delivery + installation) becomes the asset&apos;s cost basis.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-cyan-600">
            <CardHeader>
              <CardTitle className="text-xl">Activity: Fixed-Asset Decision Lab</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                Work through one guided case in sequence. You will test useful life first, then significance,
                then decide capitalize or expense, and finally calculate depreciable base for the purchases that
                belong on the balance sheet.
              </p>
              <CapitalizationDecisionLab />
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-600">
            <CardHeader>
              <CardTitle className="text-purple-900 dark:text-purple-200 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Think-Pair-Share
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="font-medium text-purple-900 dark:text-purple-200 mb-2">
                Discussion Prompt (4 minutes):
              </p>
              <p className="text-purple-800 dark:text-purple-300">
                Sarah&apos;s accountant says the $15,000 3D printer has a useful life of 7 years and a salvage value of $2,000.
                Another accountant says it should be 5 years and $1,000.
              </p>
              <ul className="list-disc list-inside space-y-1 text-purple-800 dark:text-purple-300">
                <li>How would different useful life estimates affect the annual depreciation expense?</li>
                <li>Who gets to decide useful life and salvage value — is there one right answer?</li>
                <li>Why might a company choose a shorter useful life?</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-600">
            <CardHeader>
              <CardTitle>What Comes Next</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                In the next phase, you will apply this same workflow to several new business cases without the step-by-step
                guidance. The goal is to make the classification process reliable enough to use on your own.
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
