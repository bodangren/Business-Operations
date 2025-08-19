import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter" 
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Sparkles, ArrowRight } from "lucide-react"
import { lesson04Data, unit07Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[5]

export default function Unit07Lesson04Phase6() {
  const prompts = [
    {
      id: 'courage-1',
      category: 'courage' as const,
      prompt: 'Where did you push yourself most when building the FIFO/LIFO engine?',
      placeholder: 'Describe the hardest formula, choice, or data fix you attempted...'
    },
    {
      id: 'adaptability-1',
      category: 'adaptability' as const,
      prompt: 'What did you change after your first attempt didn’t work as expected?',
      placeholder: 'Explain how you adjusted your approach or simplified the logic...'
    },
    {
      id: 'persistence-1',
      category: 'persistence' as const,
      prompt: 'What kept you going when validation errors kept appearing?',
      placeholder: 'Share your strategies for staying focused and solving issues...'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🎯 Phase 6: Closing</Badge>
            <h1 className="text-3xl font-bold text-gray-900">FIFO/LIFO Mastery Complete: Building Your Future</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              You built a professional inventory valuation engine with validation. That’s a real consulting skill for TechStart
              and a portfolio‑ready system investors can trust.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Sparkles className="h-5 w-5" /> Key Takeaways
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-purple-900">
              <ul className="list-disc list-inside">
                <li>Structured Tables keep your model stable as data grows</li>
                <li>FIFO vs LIFO changes profit, taxes, and cash flow</li>
                <li>Validation rules protect accuracy and investor confidence</li>
              </ul>
            </CardContent>
          </Card>

          <ReflectionJournal unitTitle="CAP Reflection: Inventory Valuation" prompts={prompts as any} />

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                Next Up: Lesson 05 Preview
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 flex items-center gap-2">
              <ArrowRight className="h-5 w-5" /> We’ll layer advanced automation: dynamic method switching and richer analysis so your model answers investor questions instantly.
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit07Data} lesson={lesson04Data} phase={currentPhase} phases={lesson04Phases} />
    </div>
  )
}

