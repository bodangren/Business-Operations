"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function MarketResearchPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4 py-8 max-w-5xl text-center space-y-4">
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">Capstone · Week 2</Badge>
          <h1 className="text-3xl md:text-4xl font-bold">Market Research</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Collect real numbers. Compare prices, features, and customer needs. Your goal is to
            understand how people choose and what gaps you can fill.
          </p>
          <p className="text-sm">Use the capstone <Link href="/capstone/rubrics" className="underline">Rubrics</Link> to guide quality.</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10 max-w-5xl space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>What to include</CardTitle>
            <CardDescription>Data first, then insight</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Sources: at least three with proper citations.</li>
              <li>Stats: mean, median, and standard deviation on key prices or usage.</li>
              <li>Visuals: one simple chart that explains your main finding.</li>
              <li>Insight: 3–4 sentences on what this means for your plan.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Excel Requirements</CardTitle>
            <CardDescription>Organize, analyze, and highlight outliers</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Table of competitor data (name, price, features, notes, source).</li>
              <li>Use <code>AVERAGE</code>, <code>MEDIAN</code>, and <code>STDEV.S</code> on key numeric fields.</li>
              <li>Apply conditional formatting to highlight outliers (e.g., price &gt; mean + 1σ).</li>
              <li>Make one clear chart (bar or line) that supports your main point.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quality Checks</CardTitle>
            <CardDescription>Trustworthy and useful research</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Sources are credible and recent. Each data point has a source.</li>
              <li>Stats match the data; chart labels and units are clear.</li>
              <li>Insight explains what the data means for pricing or features.</li>
              <li>No copy‑pasted claims without context or citation.</li>
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
              <li>250‑word research memo (PDF or doc) summarizing findings.</li>
              <li>Excel file with your data table, stats, and chart.</li>
              <li>Reference list with links or citations.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
