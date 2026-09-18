import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Phase6Content() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-slate-50 to-emerald-100">

      <div className="space-y-8">
        <section className="text-center space-y-4">
          <Badge className="max-w-full whitespace-normal text-center leading-tight bg-indigo-100 text-indigo-900 text-lg px-4 py-2 sm:w-fit sm:whitespace-nowrap">
            🌅 Phase 6: Closing
          </Badge>
          <h2 className="text-3xl font-bold text-slate-900">Pay Stub Studio: Ready to Share</h2>
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
      </div>

    </div>
  )
}
