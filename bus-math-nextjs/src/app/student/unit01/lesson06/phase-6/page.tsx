import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Lightbulb } from "lucide-react"
import { lesson06Data, unit01Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[5]

export default function Unit01Lesson06Phase6() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader
        lesson={lesson06Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              🧭 Phase 6: Closing — Present with Confidence
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Integrated Automation: Your Best One‑Minute Story
            </h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Summarize what changed: faster switching, stable charts, clear KPIs, and better
              decisions. Prepare a short script you could use in a live investor call.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-4">
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Synthesis & Preview
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900 text-sm">
              You built a decision‑ready dashboard for Sarah. In Lesson07, you will refine
              examples, review with stakeholders, and strengthen your executive summaries with
              professional models.
            </CardContent>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto">
          <ReflectionJournal 
            unitTitle="CAP Reflection — Integration & Dashboards"
          />
        </section>
      </main>

      <PhaseFooter 
        lesson={lesson06Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  )
}
