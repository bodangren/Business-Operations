import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson05Data, unit07Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[5]

const prompts = [
  {
    id: 'adapt-1',
    category: 'adaptability' as const,
    prompt: 'When your workbook first failed under new rows or a method toggle, how did you adjust your approach?',
    placeholder: 'Describe the specific change you made and why it worked...'
  },
  {
    id: 'persist-1',
    category: 'persistence' as const,
    prompt: 'What validation or error-handling took the longest to get right? How did you keep going?',
    placeholder: 'Explain your debugging steps and how you finally resolved it...'
  },
  {
    id: 'courage-1',
    category: 'courage' as const,
    prompt: 'How will you confidently explain method trade-offs (profit, tax, cash) to investors next time?',
    placeholder: 'Write a short script you could use during Q&A...'
  }
]

export default function Unit07Lesson05Phase6() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">Phase 6: Reflection and Handoff</Badge>
            <h1 className="text-3xl font-bold text-gray-900">What You Can Now Do Faster and More Reliably</h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              You built a method-comparison workbook that switches among FIFO, LIFO, Specific ID, and Weighted Average
              from one control cell. You practiced algorithm-level reasoning and defended a method recommendation with
              workbook evidence. These skills prepare you for Lesson 06, where you will turn this logic into a
              dashboard that tells the business story.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" /> What You Accomplished Today
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Set up Excel Tables with structured references so the model scales</li>
                <li>Built FIFO, LIFO, Specific ID, and Weighted Average algorithm blocks in one workbook</li>
                <li>Added a method selector that drives all four methods from one cell</li>
                <li>Wrote a recommendation memo with evidence from your workbook</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" /> Preview: Lesson 06
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 space-y-2">
              <p className="font-medium">In Lesson 06 you will:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Turn your method-comparison workbook into an investor-facing dashboard</li>
                <li>Add dynamic charts that update when the method changes</li>
                <li>Include turnover analysis and days-on-hand metrics</li>
                <li>Build a recommendation section that ties KPIs to your method choice</li>
              </ul>
              <p className="text-sm text-blue-700 mt-2">
                Keep applying standard quality controls (naming, validation, error handling). The workbook you built
                today is the foundation, and Lesson 06 adds the presentation layer.
              </p>
            </CardContent>
          </Card>

          <ReflectionJournal
            unitTitle="Reflection: Build the Inventory Method Workbook"
            prompts={prompts}
          />
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}
