"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingForecastPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4 py-8 max-w-5xl text-center space-y-4">
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">Capstone · Week 6</Badge>
          <h1 className="text-3xl md:text-4xl font-bold">Pricing & Forecast</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Explore price and volume with a 2‑variable data table. Build a CVP chart that updates
            when assumptions change.
          </p>
          <p className="text-sm">Quality is judged by the capstone <Link href="/capstone/rubrics" className="underline">Rubrics</Link>.</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10 max-w-5xl space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>What to include</CardTitle>
            <CardDescription>Connect model to visuals</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Assumptions table that feeds the data table.</li>
              <li>2‑variable data table exploring price and volume.</li>
              <li>CVP chart tied to the same cells.</li>
              <li>Short note: your best current price and why.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Excel Requirements</CardTitle>
            <CardDescription>Data tables and chart linkage</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Set up a base case: price, volume, variable cost, fixed cost.</li>
              <li>Create a 2‑variable data table (price as rows, volume as columns) returning profit.</li>
              <li>Build a CVP chart (lines for revenue, total cost, and profit break‑even).</li>
              <li>Ensure both the data table and chart update when base inputs change.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quality Checks</CardTitle>
            <CardDescription>Readable, defensible pricing work</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Axis labels and units are clear; chart is not cluttered.</li>
              <li>Profit direction makes sense (higher volume improves profit when margin is positive).</li>
              <li>Any “best price” claim is tied to the data table results.</li>
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
              <li>Excel file with assumptions, 2‑variable table, and CVP chart.</li>
              <li>Short paragraph (4–6 sentences) on your pricing decision and tradeoffs.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
