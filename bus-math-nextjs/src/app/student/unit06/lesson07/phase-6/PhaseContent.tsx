'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Stars, ArrowRight } from "lucide-react"

export default function Phase6Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">🧭 Phase 6: Closing</Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-indigo-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-indigo-900 flex items-center gap-2"><Stars className="w-5 h-5" /> From Rehearsal to Real Project</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <p className="text-indigo-900">
                    Today&apos;s workbook gave you a full guided preview of the project expectations. You practiced the same
                    seven-sheet structure, the same evidence chain, and the same dashboard standard your group will need next.
                  </p>
                  <p className="text-indigo-900">
                    The business case will change in Lesson 08, but the logic should not. That is the real lesson of Production Studio.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2"><ArrowRight className="w-5 h-5" /> Preview: Lesson 08</CardTitle>
                </CardHeader>
                <CardContent className="text-blue-900">
                  In Lesson 08, your group gets a new business scenario and its own workbook. You will use today&apos;s structure
                  to plan the model, sort costs, and build the first project sheets with much less teacher scaffolding.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}
