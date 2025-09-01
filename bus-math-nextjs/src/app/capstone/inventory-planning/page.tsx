"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function InventoryPlanningPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4 py-8 max-w-5xl text-center space-y-4">
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">Capstone · Week 8</Badge>
          <h1 className="text-3xl md:text-4xl font-bold">Inventory Planning</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Implement FIFO and LIFO logic for at least three purchase and sales lots.
            Show turnover and days on hand.
          </p>
          <p className="text-sm">Use the capstone <Link href="/capstone/rubrics" className="underline">Rubrics</Link> to guide quality.</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10 max-w-5xl space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>What to include</CardTitle>
            <CardDescription>Logic and KPIs</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>FIFO/LIFO process with clear steps.</li>
              <li>COGS and ending inventory calculation.</li>
              <li>KPIs: inventory turnover and days on hand.</li>
              <li>Short note: risk of stockouts or excess stock.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Excel Requirements</CardTitle>
            <CardDescription>Track lots; compute COGS and ending stock</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Inventory log: date, action (purchase/sale), qty, unit cost (for purchases), and notes.</li>
              <li>Create a lot tracker: for FIFO, consume oldest lots first; for LIFO, newest first.</li>
              <li>Compute COGS and ending inventory value for each method.</li>
              <li>KPIs: turnover = COGS ÷ average inventory; days on hand = 365 ÷ turnover.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quality Checks</CardTitle>
            <CardDescription>Transparent, step‑by‑step logic</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>COGS and ending inventory match the lot movements.</li>
              <li>Method toggle (FIFO/LIFO) updates all dependent totals.</li>
              <li>KPIs use correct period and units; labels are clear.</li>
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
              <li>Excel file with log, lot tracker, COGS/ending inventory, and KPIs.</li>
              <li>Short note (3–5 sentences) on inventory risks and mitigation ideas.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
