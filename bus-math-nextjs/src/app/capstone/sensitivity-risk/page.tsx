"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SensitivityRiskPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4 py-8 max-w-5xl text-center space-y-4">
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">Capstone · Week 11</Badge>
          <h1 className="text-3xl md:text-4xl font-bold">Sensitivity & Risk</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Build a scenario dashboard (best, base, worst) and a tornado chart that ranks the
            top drivers of cash flow or profit.
          </p>
          <p className="text-sm">Judged using the capstone <Link href="/capstone/rubrics" className="underline">Rubrics</Link>.</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10 max-w-5xl space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>What to include</CardTitle>
            <CardDescription>Clarity for decisions</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Scenario inputs and a summary table.</li>
              <li>Tornado chart ranking at least five drivers.</li>
              <li>Short note: what you would change and why.</li>
              <li>Link back to the integrated statements.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Excel Requirements</CardTitle>
            <CardDescription>Scenario Manager and tornado chart workflow</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Define three scenarios (best, base, worst) for key inputs (price, volume, cost, etc.).</li>
              <li>Use Scenario Manager or separate input blocks to generate a summary.</li>
              <li>Create a tornado chart by measuring the change in profit or cash for each driver.</li>
              <li>Rank drivers by impact; label the chart clearly.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quality Checks</CardTitle>
            <CardDescription>Useful, honest risk view</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Scenarios actually change the linked statements; results make sense.</li>
              <li>Tornado bars are scaled from the same base and use the same metric.</li>
              <li>Takeaways are practical: what to watch, and what to adjust first.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Submission</CardTitle>
            <CardDescription>What to turn in</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Excel file with scenarios and a tornado chart.</li>
              <li>Short paragraph (5–7 sentences) on the top three drivers and your response plan.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
