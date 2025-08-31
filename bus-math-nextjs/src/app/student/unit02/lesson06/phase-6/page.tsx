import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson06Data, unit02Data, lesson06Phases } from "../lesson-data"

const currentPhase = lesson06Phases[5]

const capPrompts = [
  {
    id: 'courage-present',
    category: 'courage' as const,
    prompt: 'How will you keep calm and clear if an investor challenges your numbers during a live scenario switch?',
    placeholder: 'Describe strategies for confident, honest communication while toggling scenarios...'
  },
  {
    id: 'adaptability-links',
    category: 'adaptability' as const,
    prompt: 'What did you change in your formulas or chart links to make the model more stable?',
    placeholder: 'Explain a specific improvement (e.g., structured reference, IFNA) and why it helps...'
  },
  {
    id: 'persistence-debug',
    category: 'persistence' as const,
    prompt: 'Describe a bug you chased (broken chart, #N/A, stale date). How did you finally solve it?',
    placeholder: 'Walk through your debugging steps and what you learned...'
  }
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader 
        unit={unit02Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              🧠 Phase 6: Closing — Present with Confidence
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">Integrated Automation: Your Wins and Next Steps</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              You built scenario toggles, wired a dashboard, and added validation. That work protects trust. Capture how you improved reliability and how you’ll present clearly to real stakeholders.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Synthesis</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 text-sm">
              You turned a working model into a decision‑ready system. Scenario names drive inputs; charts follow the model; and validation catches issues. This is what analyst and consultant workflows look like: scenarios → insights → recommendations.
            </CardContent>
          </Card>

          <ReflectionJournal 
            unitTitle="CAP Reflection: Month‑End Integration"
            prompts={capPrompts as any}
          />

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900">Preview: Lesson07</CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900 text-sm">
              Next, you’ll review worked examples and perform a stakeholder critique. Some units deepen dynamic dashboards with pro‑level patterns before the mini‑presentation.
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        unit={unit02Data}
        lesson={lesson06Data}
        phase={currentPhase}
        phases={lesson06Phases}
      />
    </div>
  )
}

