'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-red-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">Phase 1: Rehearsal Purpose</Badge>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="border-red-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-red-900">Why We Rehearse Before the Real Project</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-red-900">
                  <p>
                    Today is a <strong>guided rehearsal</strong>—not the real project. Every group in this class is working with the same data on purpose. This means you can compare your reasoning, your evidence chain, and your workbook quality directly with other teams.
                  </p>
                  <p className="mt-4">
                    In Lessons 08–10, your team will receive its own unique scenario and dataset. You will work more independently. Today's rehearsal exists so you can see exactly what a complete project workbook looks like before you build your own.
                  </p>
                  <p className="mt-4"><strong>What you should learn from today:</strong></p>
                  <ul className="list-disc list-inside">
                    <li>The exact structure every project workbook must follow</li>
                    <li>How to trace a recommendation back to supporting evidence</li>
                    <li>What the Definition of Done looks like in practice</li>
                    <li>Which checks and communication moves your team must carry into the real project</li>
                  </ul>
                  <p className="mt-4">
                    Sarah at TechStart Solutions needs a reliable month-end close system. Today you rehearse the quality standard. In the project, you will own it.
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
