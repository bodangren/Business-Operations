'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Phase6Content() {

  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🧭 Phase 6: Reflection and Project Handoff</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-indigo-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-indigo-900">What This Rehearsal Clarified</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left text-slate-800">
                  <p>
                    Today was your practice run. You worked with the same data as every other group,
                    categorized basic business entries, traced depreciation from the asset register into
                    full simple statements, and practiced the peer audit routine. You now know exactly
                    what the project workbook must look like.
                  </p>
                  <p>
                    Save your reflection below. It will help you remember what matters when you start
                    the real project next lesson.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 bg-indigo-50">
                <CardHeader>
                  <CardTitle className="text-indigo-900">What Changes Next Lesson</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <div className="space-y-3">
                    <div className="p-4 bg-white rounded-lg border border-indigo-200">
                      <h4 className="font-semibold text-indigo-900 mb-2">What Stays the Same</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Full evidence-chain workbook structure</li>
                        <li>Basic entry categorization</li>
                        <li>Definition of Done checklist</li>
                        <li>Recommendation format (claim, evidence, risk)</li>
                        <li>Peer audit routine</li>
                        <li>Quality standard for professional formatting</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-indigo-200">
                      <h4 className="font-semibold text-indigo-900 mb-2">What Changes</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Each group gets a unique fixed-asset dataset</li>
                        <li>Your team works more independently</li>
                        <li>You make your own method-choice decisions</li>
                        <li>You defend your own recommendation to the class</li>
                        <li>Teacher guidance shifts from direct to consultative</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50">
                <CardHeader>
                  <CardTitle className="text-emerald-900">Project Handoff Checklist</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <p className="mb-4">Before you leave today, confirm your group is ready for the real project:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Every group member can name the major workbook sheets and their purpose</li>
                    <li>Every group member can classify basic entries as income statement or balance sheet items</li>
                    <li>Every group member can explain how depreciation affects net income and net fixed assets</li>
                    <li>Your group knows that the balance sheet check must equal zero</li>
                    <li>Your group knows how to write a claim-evidence-risk recommendation</li>
                    <li>Your group understands the peer audit criteria</li>
                    <li>You know what changes next lesson and what stays the same</li>
                  </ul>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </div>

    </div>
  )
}
