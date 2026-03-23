import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getUnit07Phase5ComprehensionCheckItems } from "@/data/question-banks/unit07-phase5"
import { lesson01Data, unit07Data, lesson01Phases } from "../lesson-data"

const currentPhase = lesson01Phases[4]

const assessmentQuestions = getUnit07Phase5ComprehensionCheckItems({ lessonIds: ["lesson01"] }).slice(0, 4)

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-violet-50">
      <PhaseHeader unit={unit07Data} lesson={lesson01Data} phase={currentPhase} phases={lesson01Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-violet-100 text-violet-800 text-lg px-4 py-2">Phase 5: Assessment</Badge>
            <h1 className="text-3xl font-bold text-slate-900">Quick Launch Check</h1>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-violet-200 bg-white">
            <CardHeader>
              <CardTitle className="text-violet-900">Lesson 1 Mastery Focus</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-800">
              <p>
                This is the only formal check in Lesson 1. It is short on purpose. The goal is to confirm that you understand
                Sarah&apos;s problem, the unit scoreboard, and the difference between inventory on the shelf and profit from a sale.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Lesson 1 Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <ComprehensionCheck
                questions={assessmentQuestions}
                allowRetry={false}
                title="Sarah's Inventory Problem Check"
                description="Show that you understand the unit problem, the month scoreboard, and why ending inventory is not the same thing as profit."
              />
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson01Data} phase={currentPhase} phases={lesson01Phases} />
    </div>
  )
}
