'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Target, ArrowRightCircle } from "lucide-react"

export default function Phase4Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-amber-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-amber-100 text-amber-800 text-lg px-4 py-2">✨ Phase 4: Polish and Transfer Practice</Badge>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-amber-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <CheckCircle className="w-6 h-6 text-amber-700" /> Polish the Shared Workbook
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-left">
                  <p className="text-gray-800 leading-relaxed">
                    Now it's your turn to polish the shared rehearsal workbook. Complete these steps to make it investor-ready!
                  </p>

                  <ol className="list-decimal list-inside space-y-4">
                    <li>
                      <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-amber-900 mb-2">Step 1: Audit the Controls</h4>
                        <p className="text-amber-900">Test at least two controls. Record the test change, the expected result, and the actual result. Undo each test change.</p>
                      </div>
                    </li>
                    <li>
                      <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Step 2: Write the Recommendation</h4>
                        <p className="text-blue-900">In the Executive Summary sheet, write a clear recommendation with:</p>
                        <ul className="list-disc list-inside text-blue-900 mt-2 space-y-1">
                          <li>One clear claim</li>
                          <li>Three cited numbers from the workbook</li>
                          <li>One risk or limitation</li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">Step 3: Identify Transfer Items</h4>
                        <p className="text-purple-900">List 3 specific things your group will reuse in the real project (e.g., sheet structure, error check formula, recommendation format).</p>
                      </div>
                    </li>
                  </ol>

                  <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-900 flex items-center gap-2 mb-2">
                      <Target className="w-5 h-5" /> Done Checklist
                    </h4>
                    <ul className="list-disc list-inside text-green-900 space-y-1">
                      <li>All 4 sheets are complete and linked</li>
                      <li>Recommendation has 1 claim + 3 numbers + 1 risk</li>
                      <li>2+ control tests recorded</li>
                      <li>3 transfer items listed</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-indigo-900 flex items-center gap-2">
                    <ArrowRightCircle className="w-5 h-5" /> What Changes in the Real Project?
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-900">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Same:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Sheet structure (4 tabs)</li>
                        <li>Definition of Done</li>
                        <li>Error check patterns</li>
                        <li>Recommendation format</li>
                      </ul>
                    </div>
                    <div className="bg-pink-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Different:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Your group's own dataset</li>
                        <li>More independent work</li>
                        <li>Your own business scenario</li>
                        <li>Final investor presentation</li>
                      </ul>
                    </div>
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
