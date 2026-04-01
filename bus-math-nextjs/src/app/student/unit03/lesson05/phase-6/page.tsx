import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson05Data, unit03Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[5]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader 
        unit={unit03Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              Phase 6: Reflection and Handoff
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">What You Can Do Now</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              You built the links that turn three separate statements into one connected financial model.
              Reflect on what changed in your understanding and what comes next.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-800">What You Built Today</CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-900 space-y-2">
              <ul className="list-disc list-inside">
                <li>Net Income flows from the Income Statement into Retained Earnings on the Balance Sheet</li>
                <li>Ending Cash on the Cash Flow Statement links to Cash on the Balance Sheet</li>
                <li>Integrity checks prove the model balances and ties across all three statements</li>
                <li>One change on any statement ripples through the entire model automatically</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-800">What Is Faster Now</CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-900 space-y-2">
              <p className="text-sm">
                Before today, Sarah had to update each statement by hand when a number changed.
                Now she can:
              </p>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Change one assumption and see the impact across all three statements instantly</li>
                <li>Show an investor that the model ties without manual recalculation</li>
                <li>Spot errors immediately through visible integrity checks instead of hunting for them</li>
              </ul>
            </CardContent>
          </Card>

          <ReflectionJournal 
            unitTitle="CAP Reflection: Cross-Sheet Links and Model Trustworthiness"
          />

          <Card>
            <CardHeader>
              <CardTitle>Preview: Lesson 06 — KPI Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-gray-700 text-sm">
                Now that your three statements are linked, the next lesson adds a <strong>KPI dashboard</strong>
                on top of the model. You will build:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Key ratio cards (Current Ratio, Return on Assets, Profit Margin)</li>
                <li>A visual summary page that investors can read in 30 seconds</li>
                <li>Dashboard links that pull from your now-connected statements</li>
              </ul>
              <p className="text-gray-700 text-sm">
                Keep your linked workbook saved. You will use it as the starting point for Lesson 06.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit03Data}
        lesson={lesson05Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}
