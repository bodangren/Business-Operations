"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function RevenueStreamsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4 py-8 max-w-5xl text-center space-y-4">
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">Capstone · Week 3</Badge>
          <h1 className="text-3xl md:text-4xl font-bold">Revenue Streams</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Build a clear unit‑economics table. Use Goal Seek to hit a target margin and
            explain what price or volume you need.
          </p>
          <p className="text-sm">Check expectations on <Link href="/capstone/rubrics" className="underline">Rubrics</Link>.</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10 max-w-5xl space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>What to include</CardTitle>
            <CardDescription>Make the math visible</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Assumptions: price, variable cost, fixed cost.</li>
              <li>Outputs: margin %, break‑even units, key drivers.</li>
              <li>Goal Seek: snapshot of inputs and the goal you solved for.</li>
              <li>Short note: what change improves margin the most?</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Excel Requirements</CardTitle>
            <CardDescription>Dynamic unit‑economics and break‑even</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Set up inputs for price, variable cost per unit, and monthly fixed cost.</li>
              <li>Compute contribution margin per unit and margin %.</li>
              <li>Compute break‑even units = fixed cost ÷ contribution per unit.</li>
              <li>Use Goal Seek to hit a target margin % by changing price or cost.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quality Checks</CardTitle>
            <CardDescription>Reliable numbers that update</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Inputs are clearly labeled; outputs change when inputs change.</li>
              <li>Break‑even formula is correct and uses references to inputs.</li>
              <li>Goal Seek notes show both the target and the changing cell.</li>
              <li>No hard‑coded totals; all key values come from formulas.</li>
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
              <li>Excel file with inputs, outputs, and a note about Goal Seek results.</li>
              <li>Short written explanation (4–6 sentences) of your main driver.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
