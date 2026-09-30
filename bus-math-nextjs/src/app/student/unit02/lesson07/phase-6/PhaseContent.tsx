'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Target, ListChecks } from "lucide-react"

export default function Phase6Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">Phase 6: Reflection and Project Handoff</Badge>
            <div className="max-w-4xl mx-auto space-y-8">

              <Card className="border-indigo-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-indigo-900 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    What This Rehearsal Clarified
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-indigo-900">
                  <p>
                    Today was not the real project. It was a <strong>guided rehearsal</strong> — a chance to see the quality bar up close before your team works independently. You should now know:
                  </p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>The exact seven-sheet structure every project workbook must follow</li>
                    <li>How to trace a recommendation back to specific numbers on other sheets</li>
                    <li>What a strong evidence chain looks like — and what a broken one looks like</li>
                    <li>How to write a recommendation statement with a claim, evidence, and risk</li>
                    <li>How to run a peer audit using explicit criteria, not vague impressions</li>
                    <li>What the Definition of Done checklist requires before a workbook is complete</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 bg-indigo-50">
                <CardHeader>
                  <CardTitle className="text-indigo-900 flex items-center gap-2">
                    <ListChecks className="w-5 h-5" />
                    What Must Carry Into the Project
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-900 space-y-3">
                  <p className="font-medium">Your team must bring these into Lessons 08–10:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>The <strong>seven-sheet workbook structure</strong> — same tabs, same purpose for each sheet</li>
                    <li>The <strong>evidence-tracing habit</strong> — every claim must cite specific numbers</li>
                    <li>The <strong>Definition of Done checklist</strong> — use it before you call your workbook complete</li>
                    <li>The <strong>peer audit routine</strong> — evaluate each other's work against explicit criteria</li>
                    <li>The <strong>recommendation format</strong> — claim, evidence, risk — on every project workbook</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5" />
                    What Changes in Lesson 08
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-blue-900 space-y-3">
                  <p>
                    In Lesson 08, the training wheels come off. Here is what changes:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="p-4 bg-white rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-2">Today (Rehearsal)</h4>
                      <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
                        <li>Same data for every group</li>
                        <li>High teacher guidance</li>
                        <li>Practice recommendation writing</li>
                        <li>Focus on learning the structure</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-2">Lesson 08 (Project)</h4>
                      <ul className="text-sm text-blue-700 space-y-1 list-disc list-inside">
                        <li>Your group gets its own unique dataset</li>
                        <li>Your team works independently</li>
                        <li>Your recommendation must be original</li>
                        <li>Focus on applying the structure to new data</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-4">
                    The structure stays the same. The data changes. Your team's job is to recreate the workbook from scratch using a scenario you have not seen before.
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </div>

    </div>
  )
}
