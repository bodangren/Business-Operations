"use client"

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson08Data, lesson08Phases, unit02Data } from "../lesson-data"

export default function Page() {
  const currentPhase = lesson08Phases[0]

  // Shared resources slug and files (g1–g6)
  const slug = "month-end-wizard"
  const groups = [1,2,3,4,5,6]

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <PhaseHeader unit={unit02Data} lesson={lesson08Data} phase={currentPhase} phases={lesson08Phases} />

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge variant="secondary">PBL Milestone 1</Badge>
              <CardTitle>Project Definition: Build a Plan Investors Trust</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed">
              Sarah at TechStart Solutions learned a hard truth: month‑end can eat your entire weekend
              if it isn’t automated. Your team’s mission is to define a clear plan for a Month‑End Wizard
              that cuts closing time from two days to two hours while staying GAAP‑accurate. Today you
              will set your scope, organize your data, and design a realistic Excel model plan.
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
                <li>Reduce month‑end closing time without sacrificing accuracy</li>
                <li>Design a simple interface that non‑experts can operate</li>
                <li>Document success metrics and risks for stakeholder confidence</li>
                <li>Demonstrate professional standards suitable for clients/investors</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Excel Objectives</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Plan XLOOKUP mapping and SWITCH/IFS method routing</li>
                <li>Define named ranges and data validation rules</li>
                <li>Outline tabs: data, mapping, journal, reports, dashboard</li>
                <li>Identify error checks and audit flags for reliability</li>
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
              Executive audiences care about speed, accuracy, and trust. A clear plan with strong
              controls earns confidence. Your investors, clients, or school showcase audience should
              be able to see how your model avoids errors and saves time.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Badge variant="outline">Acceptance Criteria</Badge>
              <CardTitle>Milestone 1 Checklist</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Problem statement, scope, stakeholders, and success metrics</li>
              <li>Data inventory + source plan + file naming convention</li>
              <li>Excel model plan: tabs, validations, method switching, dashboards</li>
              <li>Risks/assumptions documented with mitigation plan</li>
              <li>Evidence started: 1‑page brief + workbook skeleton</li>
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
            <CardTitle>Workflow Today (45–60 minutes)</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Plan: write problem statement, scope, metrics</li>
              <li>Skeleton: create workbook tabs and named ranges</li>
              <li>Dataset: download your group file (g1–g6) below</li>
              <li>Check‑in: quick review against acceptance criteria</li>
            </ol>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Group Datasets (g1–g6)</CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <p>Use the same dataset for Lessons 08–10:</p>
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
            <CardTitle>Submission Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Brief: 1 page (PDF or Google Doc link)</li>
              <li>Workbook: skeleton with tabs and named ranges</li>
              <li>Evidence: risk list + mitigation notes</li>
            </ul>
          </CardContent>
        </Card>

        <ReflectionJournal unitTitle="Milestone 1 Reflection (CAP)" />

        <PhaseFooter unit={unit02Data} lesson={lesson08Data} phase={currentPhase} phases={lesson08Phases} />
      </div>
    </div>
  )
}

