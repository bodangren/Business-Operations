"use client"

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

import { lesson10Data, unit08Data, lesson10Phases } from "../lesson-data"

const phase = lesson10Phases[0]

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <PhaseHeader unit={unit08Data as any} lesson={lesson10Data as any} phase={phase as any} phases={lesson10Phases as any} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="text-base px-3 py-1">Phase 1 of 1 — Assessment</Badge>
            <h1 className="text-2xl font-semibold">PBL Milestone 3: Fixed‑Asset Recommendation Presentations</h1>
            <p className="max-w-4xl mx-auto text-muted-foreground">
              Final presentation setup: 5 min setup; Six groups × ~5 min each; 5 min wrap. Audience provides structured peer reviews focused on evidence trustworthiness.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Business & Excel Objectives</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Business Objectives</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Tell a clear, concise depreciation recommendation story</li>
                  <li>Address risks with asset register and schedule evidence</li>
                  <li>Respond to Q&amp;A with confidence and workbook numbers</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Excel Objectives</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Accurate asset register and depreciation schedule</li>
                  <li>Validations and error checks for book value are clean</li>
                  <li>Readable method comparison and summary views</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Presentation Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>5 min setup</li>
                <li>Six groups × ~5 min each (4–5 min talk + brief Q&amp;A)</li>
                <li>5 min wrap and submission confirmation</li>
              </ul>
              <p className="text-muted-foreground mt-2">Keep slides simple. Let your asset register, depreciation schedule, and method comparison do the work.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Final asset register and depreciation schedule are accurate and clear</li>
                <li>Storyline links depreciation method choice to business impact</li>
                <li>Risks and limitations are addressed directly</li>
                <li>Presentation hits 4–5 minutes with confident pacing</li>
                <li>Evidence uploaded: final workbook + slides + peer reviews</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Standard Rubric</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Technical Accuracy: 50% — depreciation formulas, links, book value checks</li>
                <li>Method Rationale: 20% — business logic for depreciation method choice</li>
                <li>Communication & Clarity: 15% — evidence chain and clarity</li>
                <li>Time Management: 10% — pacing and transitions</li>
                <li>Q&A Readiness: 5% — concise, confident responses with workbook citations</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Audience Peer Review</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <PeerCritiqueForm projectTitle="Fixed‑Asset Depreciation Recommendation — Final Presentation" unitNumber={8} />
              <div className="text-sm text-muted-foreground">
                Use the rubric categories above when submitting feedback — focus on evidence trustworthiness and book value logic.
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Post‑Presentation Reflection</CardTitle>
            </CardHeader>
            <CardContent>
              <ReflectionJournal
                unitTitle="Post‑Presentation Reflection"
                prompts={[
                  {
                    id: 'u08-l10-reflect-1',
                    category: 'adaptability',
                    prompt: 'What question from the audience changed your view of your depreciation recommendation? What workbook evidence would you strengthen next?',
                    placeholder: 'Describe the question, your insight, and your next step...'
                  },
                  {
                    id: 'u08-l10-reflect-2',
                    category: 'confidence',
                    prompt: 'Looking back at the unit, what made your asset tracking and depreciation recommendation feel trustworthy to you?',
                    placeholder: 'Reflect on evidence, checks, and logic...'
                  }
                ]}
              />
            </CardContent>
          </Card>
        </section>
      </main>
      <PhaseFooter unit={unit08Data as any} lesson={lesson10Data as any} phase={phase as any} phases={lesson10Phases as any} />
    </div>
  )
}
