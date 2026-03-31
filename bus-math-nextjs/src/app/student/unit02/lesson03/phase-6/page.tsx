import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, ArrowRight, CheckCircle, ListChecks } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson03Data, unit02Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[5]

const lesson03Reflections = [
  {
    id: 'confidence-closing',
    category: 'confidence' as const,
    prompt: 'On a scale from "not at all" to "completely," how confident are you that you could close a set of accounts on your own? What part still feels shaky?',
    placeholder: 'Be honest about which step of the four-step process feels least secure...'
  },
  {
    id: 'signal-recognition',
    category: 'understanding' as const,
    prompt: 'What signal in a business scenario tells you that closing entries are needed? How is that different from the signal for adjusting entries?',
    placeholder: 'Think about what triggers each type of entry and how you would know which comes first...'
  },
  {
    id: 'business-connection',
    category: 'application' as const,
    prompt: 'Why would an investor care that Sarah properly closes her books each month? What could go wrong if she skips this step?',
    placeholder: 'Connect the mechanical process of closing entries to the business story and investor trust...'
  }
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson03Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">

          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-800 flex items-center gap-2">
                <Lightbulb className="h-6 w-6" />
                What You Can Do Now
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-indigo-900">
                <p>
                  At the start of this lesson, Sarah's revenue and expense accounts were stuck carrying
                  March's balances into April. Now you know exactly how to fix that.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4 not-prose">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <Badge className="bg-green-200 text-green-800">You Can Now</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Sort any account into temporary or permanent</li>
                      <li>• Execute the four-step closing sequence in order</li>
                      <li>• Calculate ending Retained Earnings after closing</li>
                      <li>• Verify that all temporary accounts are zero after closing</li>
                      <li>• Explain why Income Summary exists and what it proves</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader className="pb-3">
                    <Badge className="bg-blue-200 text-blue-800">The Key Formula</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white p-3 rounded border border-blue-200 text-sm font-mono text-blue-900 space-y-1">
                      <p>Ending RE = Beginning RE + Net Income − Dividends</p>
                      <p className="text-blue-600 mt-2">Where Net Income = Total Revenues − Total Expenses</p>
                    </div>
                    <p className="text-xs text-blue-700 mt-2">
                      This single formula captures the entire business result of the closing process.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Where This Fits in the Month-End Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-amber-900">
                <p>
                  Closing entries are not the first thing Sarah does at month-end. They come at the
                  end of a specific sequence. Here's where today's lesson sits:
                </p>
              </div>

              <div className="not-prose space-y-2">
                <div className="flex items-center gap-3 p-3 bg-white rounded border border-amber-200">
                  <Badge className="bg-gray-400 text-white flex-shrink-0">1</Badge>
                  <div>
                    <p className="text-sm font-semibold text-amber-900">Record regular transactions</p>
                    <p className="text-xs text-amber-700">All the invoices, payments, and receipts for the month</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded border border-amber-200">
                  <Badge className="bg-gray-400 text-white flex-shrink-0">2</Badge>
                  <div>
                    <p className="text-sm font-semibold text-amber-900">Record adjusting entries</p>
                    <p className="text-xs text-amber-700">Accruals, deferrals, depreciation (Lesson 02)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-amber-100 rounded border-2 border-amber-400">
                  <Badge className="bg-amber-500 text-white flex-shrink-0">3</Badge>
                  <div>
                    <p className="text-sm font-semibold text-amber-900">Record closing entries</p>
                    <p className="text-xs text-amber-700">Reset temporary accounts — today's lesson</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-white rounded border border-amber-200">
                  <Badge className="bg-gray-400 text-white flex-shrink-0">4</Badge>
                  <div>
                    <p className="text-sm font-semibold text-amber-900">Prepare post-closing trial balance</p>
                    <p className="text-xs text-amber-700">Verify only permanent accounts remain with balances</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border border-amber-300">
                <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                  <ListChecks className="h-5 w-5" />
                  Coming Next: Lesson 04
                </h4>
                <p className="text-sm text-amber-800">
                  In Lesson 04 you'll pull all of these steps together into one complete manual
                  month-end close checklist. You'll practice the full sequence from unadjusted
                  trial balance through post-closing trial balance, including any recurring
                  adjustments like depreciation that Sarah needs every month. That checklist
                  becomes the blueprint for the Month-End Wizard you'll automate later.
                </p>
              </div>
            </CardContent>
          </Card>

          <ReflectionJournal
            unitTitle="Unit 2 Lesson 3: Closing Entries"
            prompts={lesson03Reflections}
          />

        </div>

        <PhaseFooter
          lesson={lesson03Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson03Phases}
        />
      </div>
    </div>
  )
}