import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb } from "lucide-react"

export default function Phase6Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              🧭 Phase 6: Closing — From Ledger to Trust
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">
              Investor-Ready Summary: Your Trust Signal
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Summarize what you built: a summary layer that turns a working ledger into an investor-ready document.
              Prepare for the project rehearsal lesson where you'll practice with shared data.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-4">
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                Synthesis & Preview
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900 text-sm">
              You built an investor-facing summary layer that shows ledger accuracy, error-checking status, and key metrics in a clean, professional format.
              In Lesson 07 (Project Rehearsal), you'll use a shared teacher dataset to practice the exact structure you'll need for your group project.
            </CardContent>
          </Card>
        </section>

      </div>

    </div>
  )
}
