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
              🎯 Phase 6: Closing
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">Advanced Automation: Ready for the Next Step</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              You engineered a three‑statement link engine that scales, validates ties, and communicates clearly. 
              Next, you’ll connect this engine to dashboards and investor presentations.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-800">What You Built</CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-900 space-y-2">
              <ul className="list-disc list-inside">
                <li>Auto‑expanding links from transactions to all three statements</li>
                <li>Scenario switch that adjusts drivers and KPIs</li>
                <li>Visible validation flags for A=L+E, cash ties, and NI → RE</li>
                <li>Investor‑ready summary with assumptions and results</li>
              </ul>
            </CardContent>
          </Card>

          <ReflectionJournal 
            unitTitle="CAP Reflection: Debugging, Validation, and Persistence"
          />

          <Card>
            <CardHeader>
              <CardTitle>Preview: Lesson06 Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                You’ll integrate this link engine with dashboards: KPI cards, variance bridges, and clear visuals for investors.
                Keep the validation flags in view—professional models make reliability obvious.
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

