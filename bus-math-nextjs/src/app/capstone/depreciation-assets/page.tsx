"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DepreciationAssetsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4 py-8 max-w-5xl text-center space-y-4">
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">Capstone · Week 9</Badge>
          <h1 className="text-3xl md:text-4xl font-bold">Depreciation & Asset Management</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Build SLN and DDB schedules and let the user toggle methods. Link results to the
            Balance Sheet and Income Statement.
          </p>
          <p className="text-sm">Review expectations on <Link href="/capstone/rubrics" className="underline">Rubrics</Link>.</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10 max-w-5xl space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>What to include</CardTitle>
            <CardDescription>Clarity and linkage</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Inputs: cost, salvage, life.</li>
              <li>Schedules for SLN and DDB methods.</li>
              <li>Toggle that feeds I/S and B/S correctly.</li>
              <li>Short note: which method fits your business and why.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Excel Requirements</CardTitle>
            <CardDescription>Straight‑line vs. double‑declining balance</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>SLN: annual depreciation = (cost − salvage) ÷ life; compute by period.</li>
              <li>DDB: rate = 2 ÷ life; depreciation = rate × beginning book value (stop at salvage).</li>
              <li>Link depreciation expense to the I/S; link ending net book value to the B/S.</li>
              <li>Method toggle: a single selector that drives which schedule feeds the statements.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quality Checks</CardTitle>
            <CardDescription>Math and links must reconcile</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Total SLN depreciation equals cost minus salvage over the full life.</li>
              <li>DDB never depreciates below salvage; final period adjusts if needed.</li>
              <li>I/S and B/S update correctly when switching methods.</li>
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
              <li>Excel file with SLN and DDB schedules, toggle, and linked statements.</li>
              <li>Short note (3–5 sentences) explaining your chosen method.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
