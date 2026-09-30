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
          <h2 className="text-3xl font-bold text-slate-900">From Schedule Clarity to Cash Confidence</h2>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto">
            You now have a roster that feeds a schedule, and a schedule that feeds gross pay. Lesson06 combines this work with
            tax withholding, cash-flow timing, and dashboards. Capture what you learned so your future self remembers the
            breakthroughs.
          </p>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">Key Takeaways</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-green-900 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>Scheduling accuracy is payroll accuracy—no more separate whiteboards.</li>
                <li>SUMIFS, validation, and conditional formatting act like internal auditors.</li>
                <li>Hours &amp; Gross is the bridge that lets Lesson06 plug in taxes, benefits, and cash forecasts.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Preview: Lesson06 Integration Sprint</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-blue-900 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>Feed your Hours &amp; Gross table into the Payday Simulator’s withholding logic.</li>
                <li>Plot weekly payroll cash-outs next to actual bank timing to prevent Maria’s Friday crisis.</li>
                <li>Build a dashboard tile that answers “What happens if we open two more evening shifts?” in one click.</li>
              </ul>
              <p>Bring your Lesson05 workbook tomorrow—we will layer taxes, benefits, and cash-flow views directly on top of it.</p>
            </CardContent>
          </Card>
        </section>
      </div>

    </div>
  )
}
