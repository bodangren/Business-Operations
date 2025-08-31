import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson06Data, unit07Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[5]

export default function Unit07Lesson06Phase6() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🔔 Phase 6: Closing</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Integrated Automation: Present with Confidence</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              You built a dashboard that switches scenarios by name, feeds visuals from Tables, and blocks bad inputs with validation.
              These habits create investor trust and keep demos calm under pressure.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900">Why This Matters</CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-900">
              Clear KPIs and stable charts help decision‑makers see margin, cash, and risk instantly. Your validation and documentation
              show that the model will not fall apart as data grows. That is the difference between a good spreadsheet and an investor‑ready system.
            </CardContent>
          </Card>

          <ReflectionJournal unitTitle="Unit 7 — Integration Reflection" />
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson06Data} phase={currentPhase} phases={lesson06Phases} />
    </div>
  )
}

