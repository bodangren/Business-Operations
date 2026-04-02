import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, ArrowRight } from "lucide-react"
import { lesson02Data, unit08Data, lesson02Phases } from "../lesson-data"

export default function Phase3Page() {
  const currentPhase = lesson02Phases[2]

  const classificationQuestions = [
    {
      id: "q1",
      question: "TechStart buys a $12,000 commercial espresso machine for the employee break room. It will last about 8 years and can be sold for $1,000 at the end. Should this be capitalized or expensed? What is the depreciable base?",
      answers: [
        "Capitalize; depreciable base = $11,000",
        "Expense immediately; depreciable base = $0",
        "Capitalize; depreciable base = $12,000",
        "Capitalize; depreciable base = $1,000"
      ],
      explanation: "The espresso machine lasts 8 years (more than 1) and costs $12,000 (significant), so it should be capitalized. Depreciable base = Cost - Salvage Value = $12,000 - $1,000 = $11,000."
    },
    {
      id: "q2",
      question: "TechStart pays $800 for a one-year business insurance policy. Should this be capitalized as a fixed asset or treated differently?",
      answers: [
        "Expense it — it is a prepaid operating cost, not a long-term physical asset",
        "Capitalize it as a fixed asset with an 8-year useful life",
        "Capitalize it because $800 is a significant cost",
        "Expense only half and capitalize the other half"
      ],
      explanation: "Insurance is a prepaid expense, not a fixed asset. While it covers a future period, it is not a tangible long-term asset like equipment or vehicles. It is expensed over the coverage period, not depreciated."
    },
    {
      id: "q3",
      question: "TechStart spends $4,000 to replace the roof on its warehouse. The old roof was fully depreciated. The new roof will last 15 years. Should this be capitalized or expensed?",
      answers: [
        "Capitalize — a roof replacement is a major improvement that extends the building's useful life",
        "Expense immediately — it is a repair cost",
        "Capitalize only $2,000 and expense the rest",
        "Expense it because roofs are maintenance"
      ],
      explanation: "A major roof replacement is a capital improvement because it extends the useful life of the building and has a significant cost. It should be capitalized and depreciated over its useful life of 15 years."
    },
    {
      id: "q4",
      question: "An asset costs $20,000, has a useful life of 4 years, and a salvage value of $4,000. What is the depreciable base?",
      answers: [
        "$16,000",
        "$20,000",
        "$4,000",
        "$5,000"
      ],
      explanation: "Depreciable base = Cost - Salvage Value = $20,000 - $4,000 = $16,000. This is the amount that will be allocated as depreciation expense over the 4-year useful life."
    },
    {
      id: "q5",
      question: "After 2 years, an asset with a $10,000 cost and $2,000 salvage value has accumulated depreciation of $4,000. What is its current book value?",
      answers: [
        "$6,000",
        "$8,000",
        "$4,000",
        "$2,000"
      ],
      explanation: "Book Value = Cost - Accumulated Depreciation = $10,000 - $4,000 = $6,000. The asset is still worth $6,000 on the company's books after 2 years."
    }
  ]

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
              Now you will practice with mixed purchase scenarios. The hints are reduced, and you need to
              explain your reasoning — not just pick an answer.
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

          <ComprehensionCheck
            questions={classificationQuestions}
            title="Mixed Classification Challenge"
            description="Classify each purchase and calculate the depreciable base. Explain your reasoning."
            showExplanations={true}
            allowRetry={true}
          />

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
                In the next phase, you will get repeated practice classifying purchases with new numbers each time.
                The interface will track your streak and give you targeted feedback when you make mistakes.
                Your goal: {5} correct classifications in a row.
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
