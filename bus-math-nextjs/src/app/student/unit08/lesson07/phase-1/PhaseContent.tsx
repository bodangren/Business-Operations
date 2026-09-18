'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Phase1Content() {

  return (
    <div className="bg-gradient-to-br from-slate-50 to-red-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">🎯 Phase 1: Rehearsal Purpose</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-red-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-red-900">Why We Rehearse Before the Real Project</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-left text-slate-800">
                  <p>
                    Today is your final guided rehearsal before the real depreciation project.
                    Every group in the class is working with the <strong>same shared dataset</strong> —
                    and that is intentional.
                  </p>
                  <p>
                    When everyone uses the same numbers, you can compare workbook quality,
                    reasoning, and clarity directly. You will see what a strong recommendation
                    looks like, trace it back to categories, the asset register, and statements, and practice
                    the peer-audit routine you will need next lesson.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900">Today vs. The Real Project</CardTitle>
                </CardHeader>
                <CardContent className="text-slate-800">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-900 mb-2">Today — Rehearsal</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Shared teacher dataset</li>
                        <li>High teacher guidance</li>
                        <li>Practice the workbook structure</li>
                        <li>Learn the Definition of Done</li>
                        <li>Peer audit with same data</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-900 mb-2">Next Lesson — Real Project</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Group-specific dataset</li>
                        <li>Independent group work</li>
                        <li>Apply the same structure</li>
                        <li>Meet the same quality standard</li>
                        <li>Defend your own recommendation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900">Turn and Talk</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li>What would make a depreciation workbook feel weak or untrustworthy to a manager?</li>
                    <li>Which part of the workbook structure do you feel least confident about right now?</li>
                    <li>How can depreciation change both profit and the balance sheet at the same time?</li>
                    <li>What does &quot;tracing a recommendation back to statement evidence&quot; mean in your own words?</li>
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
