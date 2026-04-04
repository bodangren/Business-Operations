"use client"

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, FileSpreadsheet, Target, Users } from "lucide-react"

import { lesson09Data, unit08Data, lesson09Phases } from "../lesson-data"

const phase = lesson09Phases[0]

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50">
      <PhaseHeader unit={unit08Data as any} lesson={lesson09Data as any} phase={phase as any} phases={lesson09Phases as any} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-violet-100 text-violet-800 text-base px-3 py-1">Phase 1 — Hook: Milestone 2 Launch</Badge>
            <h1 className="text-2xl font-semibold text-slate-900">Complete the Workbook and Defend Your Recommendation</h1>
            <p className="max-w-3xl mx-auto text-slate-700">
              Last lesson your team opened the correct workbook and started the asset register. Today you finish every sheet, test your formulas, and write a depreciation recommendation backed by workbook evidence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-violet-200 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-violet-900">
                  <FileSpreadsheet className="h-5 w-5" />
                  Workbook Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-slate-800">
                  <li>Finish the Depreciation Schedule with linked formulas for all assets</li>
                  <li>Complete the Method Comparison sheet with side-by-side SL and DDB calculations</li>
                  <li>Verify Book Value = Cost − Accumulated Depreciation on every sheet</li>
                  <li>Add at least one workbook check that flags impossible values</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-indigo-900">
                  <Target className="h-5 w-5" />
                  Recommendation Objectives
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-slate-800">
                  <li>Write a clear claim about which depreciation method best fits your scenario</li>
                  <li>Cite at least three numbers from your workbook as evidence</li>
                  <li>Identify one risk or limitation of your recommended method</li>
                  <li>Prepare to explain your reasoning to another team</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-emerald-200 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-emerald-900">
                <CheckCircle2 className="h-5 w-5" />
                Milestone 2 Acceptance Criteria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-slate-800">
                <li>Depreciation Schedule complete for all assets with correct annual expense, accumulated depreciation, and book value</li>
                <li>Method Comparison sheet shows SL and DDB side by side with statement impact explained</li>
                <li>Recommendation has claim, evidence (3+ cited workbook numbers), and risk/limitation</li>
                <li>Peer critique completed with at least one strength and one improvement noted</li>
                <li>Evidence: complete workbook file + recommendation draft + peer feedback notes</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-sky-200 bg-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sky-900">
                <Users className="h-5 w-5" />
                Group Datasets — Use Your Assigned File Only
              </CardTitle>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <a
                  key={i}
                  className="text-blue-700 hover:underline"
                  href={`/resources/unit08-group${i + 1}-fixed-assets.xlsx`}
                  download
                >
                  Download: unit08-group{i + 1}-fixed-assets.xlsx
                </a>
              ))}
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-white">
            <CardHeader>
              <CardTitle className="text-amber-900">Today&apos;s Pacing Guide</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-800">
              <div className="flex items-start gap-3">
                <Badge className="bg-amber-100 text-amber-800 shrink-0">~15 min</Badge>
                <p>Recap Lesson 08 progress and confirm Milestone 2 requirements with your team</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-amber-100 text-amber-800 shrink-0">~20 min</Badge>
                <p>Finish the Depreciation Schedule and Method Comparison sheets</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-amber-100 text-amber-800 shrink-0">~10 min</Badge>
                <p>Write the recommendation with claim, evidence, and risk</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-amber-100 text-amber-800 shrink-0">~10 min</Badge>
                <p>Peer critique and revision with another team</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-amber-100 text-amber-800 shrink-0">~5 min</Badge>
                <p>Save, submit, and preview Lesson 10 presentation requirements</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-rose-200 bg-white">
            <CardHeader>
              <CardTitle className="text-rose-900">Common Pitfall to Avoid</CardTitle>
            </CardHeader>
            <CardContent className="text-slate-800">
              <p className="mb-2">
                <strong>Do not change the sheet structure from Lesson 07.</strong> Your workbook must keep the same four-sheet architecture: Asset Register, Depreciation Schedule, Method Comparison, and Recommendation. If you added or removed sheets, fix it now before the teacher check-in.
              </p>
              <p>
                Also remember: <strong>Book Value = Cost − Accumulated Depreciation</strong> must hold for every asset in every year. If your check column shows a mismatch, trace the formula back to its source before moving on.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
      <PhaseFooter unit={unit08Data as any} lesson={lesson09Data as any} phase={phase as any} phases={lesson09Phases as any} />
    </div>
  )
}
