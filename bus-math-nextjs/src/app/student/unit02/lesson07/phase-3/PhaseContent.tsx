'use client'

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, AlertTriangle, CheckCircle } from "lucide-react"

export default function Phase3Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-green-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">Phase 3: Guided Audit</Badge>
            <div className="max-w-4xl mx-auto space-y-8">

              <Card className="border-green-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center gap-2">
                    <Search className="w-5 h-5" />
                    How to Audit a Workbook
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-green-900">
                  <p>
                    Auditing a workbook means tracing every claim back to its source. A recommendation is only as strong as the evidence that supports it. Follow this routine:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 mt-4">
                    <li><strong>Read the recommendation first.</strong> What is the workbook claiming?</li>
                    <li><strong>Find the cited numbers.</strong> Which sheet do they come from? Do they match?</li>
                    <li><strong>Check the logic chain.</strong> Does the evidence actually support the claim, or is there a gap?</li>
                    <li><strong>Look for red flags.</strong> Missing links, stale dates, hard-coded outputs, or unexplained assumptions.</li>
                    <li><strong>Ask: would I trust this?</strong> If a manager or investor read this workbook, would they feel confident in the recommendation?</li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-900 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    What Makes an Artifact Weak?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-amber-900 space-y-3">
                  <p className="font-medium">Discuss with your group. Which of these would make a workbook feel weak, confusing, or untrustworthy?</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                    {[
                      { text: "Recommendation cites numbers that do not appear on any sheet", weak: true },
                      { text: "All formulas use structured references that auto-expand", weak: false },
                      { text: "The Assumptions sheet has no date or version number", weak: true },
                      { text: "Trial balance debits and credits match exactly", weak: false },
                      { text: "A chart is based on a static A1:C10 range that will not update", weak: true },
                      { text: "Each adjusting entry has a clear reason written next to it", weak: false },
                    ].map((item, i) => (
                      <div key={i} className={`p-3 rounded-lg border ${item.weak ? 'border-red-300 bg-red-50' : 'border-green-300 bg-green-50'}`}>
                        <div className="flex items-start gap-2">
                          {item.weak ? (
                            <AlertTriangle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                          ) : (
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          )}
                          <span className="text-sm">{item.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </div>

    </div>
  )
}
