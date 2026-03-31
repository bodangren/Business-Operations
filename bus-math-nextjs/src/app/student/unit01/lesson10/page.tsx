'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileSpreadsheet, Upload, CheckCircle2, Users, Trophy, ClipboardList } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

export default function Lesson10Page() {
  const finalChecklist = [
    "Final workbook renamed correctly: Unit01_Group[X]_SmartLedger.xlsx",
    "All transactions entered with correct debit/credit labels",
    "Trial Balance shows debits = credits with no errors",
    "Error Checks sheet confirms all validations pass",
    "Executive Summary includes claim, 3+ pieces of evidence, and 1 risk",
    "Presentation notes are ready for your 2-minute pitch",
    "Team has practiced staying within the time limit"
  ]

  const reflectionPrompts = [
    {
      id: 'final-trust',
      category: 'persistence' as const,
      prompt: 'What is one thing you learned about why "clean books" matter to an investor?',
      placeholder: 'Explain your key takeaway about trust...'
    },
    {
      id: 'final-control',
      category: 'adaptability' as const,
      prompt: 'What is one feature of your Smart Ledger that gives you control over catching mistakes early?',
      placeholder: 'Describe the control feature...'
    },
    {
      id: 'final-next',
      category: 'courage' as const,
      prompt: 'If you had more time, what is one thing you would improve about your workbook or presentation?',
      placeholder: 'Name your next improvement...'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <main className="container mx-auto px-4 py-12 space-y-10">
        <section className="text-center space-y-4">
          <Badge className="bg-purple-100 text-purple-800 text-xl px-6 py-3">🎉 Unit 1 • Lesson 10</Badge>
          <h1 className="text-4xl font-extrabold text-gray-900">
            Project Milestone 3: Final Presentation & Submission
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            It's time to show off your Smart Ledger, share your recommendation, and submit your final work!
          </p>
        </section>

        <section className="space-y-6">
          <Card className="border-purple-200 bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-purple-800 flex items-center gap-2">
                <Trophy className="w-6 h-6" />
                Presentation & Audience Expectations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-blue-800">Your 2‑Minute Pitch</CardTitle>
                  </CardHeader>
                  <CardContent className="text-blue-900 space-y-1">
                    <p>1. Introduce your team and business</p>
                    <p>2. State your clear claim</p>
                    <p>3. Share 3 numbers from your workbook</p>
                    <p>4. Name one risk or limitation</p>
                    <p>5. End with confidence!</p>
                  </CardContent>
                </Card>
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-green-800">As an Audience Member</CardTitle>
                  </CardHeader>
                  <CardContent className="text-green-900 space-y-1">
                    <p>Listen carefully to each team</p>
                    <p>Look for evidence in their workbook</p>
                    <p>Ask one respectful question after each pitch</p>
                    <p>Celebrate your classmates' hard work!</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <Card className="border-green-200 bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-800 flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6" />
                Final Submission Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-gray-700">
                Before you submit, make sure your team has completed everything on this list:
              </p>
              <ul className="space-y-3">
                {finalChecklist.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <Card className="border-yellow-200 bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-800 flex items-center gap-2">
                <ClipboardList className="w-6 h-6" />
                Today's Workflow (90 Minutes)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4 text-gray-800">
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="font-semibold text-yellow-900 mb-1">0–5 minutes: Final prep</p>
                  <p className="text-yellow-800">
                    Do one last check of your workbook and presentation notes.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="font-semibold text-orange-900 mb-1">5–70 minutes: Team presentations</p>
                  <p className="text-orange-800">
                    Each team presents for 2 minutes plus 1 minute for questions.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-semibold text-green-900 mb-1">70–90 minutes: Submit & reflect</p>
                  <p className="text-green-800">
                    Upload your final workbook and complete the reflection below.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <Card className="border-blue-200 bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-800 flex items-center gap-2">
                <Upload className="w-6 h-6" />
                How to Submit Your Work
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-gray-700">
                Follow these steps to turn in your final project:
              </p>
              <ol className="list-decimal list-inside space-y-3 text-lg text-gray-800">
                <li>Make sure your workbook is named correctly: <code className="font-mono bg-slate-100 px-2 py-1 rounded">Unit01_Group[X]_SmartLedger.xlsx</code></li>
                <li>Double‑check that all sheets are complete and error‑free</li>
                <li>Save a final copy of your presentation notes</li>
                <li>Upload both files to your teacher using the process they showed you</li>
                <li>High‑five your team—you did it!</li>
              </ol>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <Card className="border-indigo-200 bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-indigo-800">
                End-of-Unit Reflection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ReflectionJournal
                prompts={reflectionPrompts}
                unitTitle="Final Unit Reflection"
              />
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
