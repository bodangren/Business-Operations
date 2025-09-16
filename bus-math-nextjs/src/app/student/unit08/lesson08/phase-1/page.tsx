"use client"

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

import { lesson08Data, unit08Data, lesson08Phases } from "../lesson-data"

const phase = lesson08Phases[0]

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <PhaseHeader unit={unit08Data as any} lesson={lesson08Data as any} phase={phase as any} phases={lesson08Phases as any} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="text-base px-3 py-1">Phase 1 of 1 — Introduction</Badge>
            <h1 className="text-2xl font-semibold">PBL Milestone 1: Project Definition</h1>
            <p className="max-w-4xl mx-auto text-muted-foreground">
              Sarah’s team needs a clean plan before they build the full model. Today you’ll define the problem, list your data sources, and design your Excel workbook. This makes your work faster and more reliable later.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Business Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Link three statements to show a complete business story</li>
                  <li>Model realistic risks with clear assumptions and evidence</li>
                  <li>Explain choices to an investor in simple, precise language</li>
                  <li>Use peer feedback to improve structure and clarity</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Excel Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Cross-sheet linking across Income, Balance Sheet, Cash Flow</li>
                  <li>Scenario Manager for best, worst, and realistic cases</li>
                  <li>Data tables for sensitivity analysis of key drivers</li>
                  <li>Data validation and error checks to prevent mistakes</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Why This Matters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>
                Investors look for models that are clear, accurate, and honest. A strong plan reduces errors, makes your work faster, and helps people trust your results.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Milestone Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Problem statement, project scope, stakeholders, and success metrics</li>
                <li>Data inventory and source plan with file naming convention</li>
                <li>Excel model plan (tabs, validations, scenario switching, dashboards)</li>
                <li>Risks and assumptions with mitigation ideas</li>
                <li>Evidence prepared: brief outline + workbook skeleton started</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Workflow Today (45–60 min)</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2">
                <li>Plan your scope, stakeholders, and success metrics</li>
                <li>Sketch your workbook tabs and validations</li>
                <li>Download your group dataset and inspect columns</li>
                <li>Build a clean workbook skeleton; save with versioned name</li>
                <li>Check in with your teacher for a quick review</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resources — Group Datasets (Download)</CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <a
                  key={i}
                  className="text-blue-700 hover:underline"
                  href={`/resources/unit08-pbl-year1-startup-model-g${i + 1}.csv`}
                  download
                >
                  Download: unit08-pbl-year1-startup-model-g{i + 1}.csv
                </a>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Submission Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>1–2 page planning brief (PDF)</li>
                <li>Workbook skeleton with tabs named and linked placeholders</li>
                <li>File names follow your convention (team, date, version)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Standard Rubric (Capstone‑Aligned)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Technical Accuracy: 50% — formulas, links, validations</li>
                <li>Strategic Rationale: 20% — business logic and trade‑offs</li>
                <li>Communication & Clarity: 15% — story and visuals</li>
                <li>Time Management: 10% — pacing and transitions</li>
                <li>Q&A Readiness: 5% — concise, confident responses</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reflection</CardTitle>
            </CardHeader>
            <CardContent>
              <ReflectionJournal
                unitTitle="Reflection"
                prompts={[
                  {
                    id: 'u08-l08-reflect-1',
                    category: 'adaptability',
                    prompt: 'What part of your plan will most improve trust in your model? How will you prove it works?',
                    placeholder: 'Describe your plan change and the evidence you will use...'
                  }
                ]}
              />
            </CardContent>
          </Card>
        </section>
      </main>
      <PhaseFooter unit={unit08Data as any} lesson={lesson08Data as any} phase={phase as any} phases={lesson08Phases as any} />
    </div>
  )
}
