import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson06Data, unit05Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[5]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-slate-50 to-emerald-100">
      <PhaseHeader lesson={lesson06Data} unit={unit05Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="text-center space-y-4">
          <Badge className="bg-indigo-100 text-indigo-900 text-lg px-4 py-2">
            🌅 Phase 6: Closing
          </Badge>
          <h1 className="text-3xl font-bold text-slate-900">Pay Stub Studio: Ready to Share</h1>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto">
            You now have a workbook that converts the Lesson 05 schedule into compliant pay stubs. Capture the lessons you
            learned so you can defend every line when Sarah’s employees or investors ask questions.
          </p>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">Key Wins</CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 text-sm space-y-1">
              <ul className="list-disc list-inside space-y-1">
                <li>Taxable income and FIT logic now live in the same workbook as the schedule.</li>
                <li>Selectors and structured references keep pay stubs consistent and tamper-proof.</li>
                <li>Visual polish makes the stub client-ready (logos, color accents, print settings).</li>
              </ul>
            </CardContent>
          </Card>

          <ReflectionJournal
            unitTitle="CAP Reflection — Pay Stub Studio"
            prompts={[
              {
                id: 'courage-paystub',
                category: 'courage',
                prompt: 'Where did you show courage while debugging FIT or State tax logic? How did you know it was correct?',
                placeholder: 'Describe the risk you took and the result…'
              },
              {
                id: 'adaptability-paystub',
                category: 'adaptability',
                prompt: 'When the selector or formatting broke, how did you adapt your design?',
                placeholder: 'Explain the fix and what you learned…'
              },
              {
                id: 'persistence-paystub',
                category: 'persistence',
                prompt: 'What kept you going when the numbers didn’t reconcile on the first try?',
                placeholder: 'Share the strategy or mindset that helped you finish…'
              }
            ] as any}
          />

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Preview: Lesson 07</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 text-sm">
              Next lesson you will step into stakeholder meetings: presenting these stubs, capturing feedback, and refining
              automation based on what clients need next.
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter lesson={lesson06Data} unit={unit05Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}
