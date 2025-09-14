"use client"

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson09Data, lesson09Phases, unit02Data } from "../lesson-data"

export default function Page() {
  const currentPhase = lesson09Phases[0]
  const slug = "month-end-wizard"
  const groups = [1,2,3,4,5,6]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <PhaseHeader unit={unit02Data} lesson={lesson09Data} phase={currentPhase} phases={lesson09Phases} />

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge variant="secondary">PBL Milestone 2</Badge>
              <CardTitle>Prototype + Rehearsal</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed">
              Build a working prototype that shows your Excel automation in action. Use realistic
              data, run tests, and document what passes. Then rehearse your 4–5 minute story and
              gather structured peer feedback to improve clarity and impact.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Business Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Demonstrate time savings with clear before/after comparison</li>
                <li>Show accuracy and reliability through test results</li>
                <li>Tell a concise story that a client can follow</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Excel Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Implement XLOOKUP + SWITCH/IFS for method routing</li>
                <li>Apply data validation, error flags, and named ranges</li>
                <li>Document test scenarios and results with change notes</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-800">Why This Matters</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-800 text-sm">
              Prototypes prove your idea works. Testing and feedback turn a good demo into a
              reliable tool that leaders can trust in real operations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge variant="outline">Acceptance Criteria</Badge>
              <CardTitle>Milestone 2 Checklist</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Working prototype implements planned excelSkillFocus</li>
              <li>Validations and error checks pass on sample data</li>
              <li>Test scenarios documented with results and change notes</li>
              <li>Rehearsal complete; peer feedback incorporated</li>
              <li>Evidence: prototype workbook + test summary</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Standard Rubric (Capstone‑Aligned)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Technical Accuracy: 50% — correct modeling, formulas, validations</li>
              <li>Strategic Rationale: 20% — alignment to business goals, trade‑offs</li>
              <li>Communication & Clarity: 15% — concise story, visuals, audience fit</li>
              <li>Time Management: 10% — 4–5 minutes, clean transitions</li>
              <li>Q&A Readiness: 5% — confident, concise responses</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Group Datasets (g1–g6)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <p>Use the same dataset you started in Lesson 08:</p>
            <ul className="list-disc list-inside">
              {groups.map((g) => (
                <li key={g}>
                  <a className="underline" href={`/resources/unit02-pbl-${slug}-g${g}.csv`} download>
                    Download unit02-pbl-{slug}-g{g}.csv
                  </a>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Peer Review & Rehearsal</CardTitle>
          </CardHeader>
          <CardContent>
            <PeerCritiqueForm projectTitle="Month‑End Wizard Prototype" unitNumber={2} />
          </CardContent>
        </Card>

        <ReflectionJournal unitTitle="Milestone 2 Reflection (CAP)" />

        <PhaseFooter unit={unit02Data} lesson={lesson09Data} phase={currentPhase} phases={lesson09Phases} />
      </div>
    </div>
  )
}

