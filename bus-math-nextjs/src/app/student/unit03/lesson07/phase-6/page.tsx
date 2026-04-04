'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit03Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, BookOpen } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

const currentPhase = lesson07Phases[5]

const synthesisPoints = [
  {
    title: "What a Complete Project Needs",
    points: [
      "Five sheets: Income Statement, Balance Sheet, Cash Flow, Assumptions, Dashboard",
      "Recommendation with evidence from all three statements",
      "At least one risk or limitation stated",
      "Balance sheet that balances (A = L + E)",
      "Linked formulas (not hard-coded values)"
    ]
  },
  {
    title: "How to Trace Evidence",
    points: [
      "Start with the recommendation in the Dashboard",
      "Find the supporting numbers in Income Statement or Balance Sheet",
      "Check the Assumptions sheet for the inputs that drive those numbers",
      "Verify the three statements are consistent"
    ]
  },
  {
    title: "What Changes Next Lesson",
    points: [
      "You get your team's own business scenario (different data)",
      "You apply the same structure to your specific story",
      "The quality bar stays the same - same five sheets, same evidence requirement",
      "Your team works more independently, but can reference today's rehearsal"
    ]
  }
]

const transferChecklist = [
  "Can I name all five sheets and what each proves?",
  "Can I trace a recommendation back to its evidence?",
  "Do I know what makes an artifact feel weak vs. trustworthy?",
  "Can I state at least one risk or limitation?",
  "Can I check if the balance sheet balances?"
]

const capPrompts: Array<{ id: string; category: 'courage' | 'adaptability' | 'persistence'; prompt: string; placeholder: string }> = [
  {
    id: 'courage-u3l7',
    category: 'courage',
    prompt: 'Where did you show courage today—asking a question about the evidence chain or presenting your audit findings?',
    placeholder: 'Describe a moment where you took a risk in your analysis or presentation...'
  },
  {
    id: 'adaptability-u3l7',
    category: 'adaptability',
    prompt: 'How did you adapt when your understanding of "complete" changed during the audit?',
    placeholder: 'Explain how you adjusted your approach when you discovered what was missing...'
  },
  {
    id: 'persistence-u3l7',
    category: 'persistence',
    prompt: 'What kept you going while tracing the evidence chain or completing the checklist?',
    placeholder: 'Share how you stayed focused and got to a clean result...'
  },
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader unit={unit03Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🎯 Phase 6: Reflection and Project Handoff</Badge>
            <div className="max-w-4xl mx-auto space-y-8 text-left">
              <Card className="border-indigo-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-indigo-900">Synthesis: What the Rehearsal Clarified</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-indigo-900">
                  {synthesisPoints.map((section, idx) => (
                    <div key={idx} className="mb-4">
                      <h4 className="font-semibold text-indigo-800">{section.title}</h4>
                      <ul className="list-disc list-inside mt-1">
                        {section.points.map((point, pidx) => (
                          <li key={pidx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Transfer Checklist: Am I Ready?</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-900">
                  <p className="mb-3">Before you leave, confirm you can answer YES to each of these:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {transferChecklist.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 bg-white rounded border border-blue-200">
                        <input type="checkbox" className="w-4 h-4" disabled />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center gap-2"><ArrowRight className="w-5 h-5" /> What Changes Next Lesson</CardTitle>
                </CardHeader>
                <CardContent className="text-green-900">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-3 bg-white rounded-lg border border-green-200">
                      <h5 className="font-semibold text-green-800 mb-2">Today (Rehearsal)</h5>
                      <ul className="list-disc list-inside text-sm">
                        <li>Same data as teacher</li>
                        <li>Teacher guided the structure</li>
                        <li>Focus on audit and evidence</li>
                        <li>Whole class on same page</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-green-200">
                      <h5 className="font-semibold text-green-800 mb-2">Next Lesson (Project)</h5>
                      <ul className="list-disc list-inside text-sm">
                        <li>Your team's own scenario</li>
                        <li>You apply what you practiced</li>
                        <li>Focus on your business story</li>
                        <li>Groups work independently</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-100 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Reference:</strong> Your rehearsal workbook shows exactly what the quality standard looks like. 
                      Use it as your template when you build your project.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-purple-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-purple-900 flex items-center gap-2"><BookOpen className="w-5 h-5" /> CAP Reflection</CardTitle>
                </CardHeader>
                <CardContent>
                  <ReflectionJournal unitTitle="CAP Reflection: Project Rehearsal" prompts={capPrompts} />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit03Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}

