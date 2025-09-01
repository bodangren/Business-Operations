"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FundingStrategyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4 py-8 max-w-5xl text-center space-y-4">
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">Capstone · Week 5</Badge>
          <h1 className="text-3xl md:text-4xl font-bold">Funding Strategy</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Compare equity and debt. Show an amortization schedule and link interest expense
            into your Income Statement.
          </p>
          <p className="text-sm">See the capstone <Link href="/capstone/rubrics" className="underline">Rubrics</Link> for scoring.</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10 max-w-5xl space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>What to include</CardTitle>
            <CardDescription>Tradeoffs and links</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Cap table snapshot for equity option.</li>
              <li>Loan terms and amortization table for debt option.</li>
              <li>Link interest to I/S and ending balance to B/S.</li>
              <li>Short note: pros and cons for your choice.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Excel Requirements</CardTitle>
            <CardDescription>Cap table and loan schedule formulas</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Equity: owners, shares, price per share, ownership %, and post‑money valuation.</li>
              <li>Debt: use <code>PMT</code>/<code>IPMT</code>/<code>PPMT</code> to build a monthly amortization table.</li>
              <li>Feed interest expense to the Income Statement; feed ending principal to the Balance Sheet.</li>
              <li>Show a side‑by‑side summary (monthly payment vs. ownership % given up).</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quality Checks</CardTitle>
            <CardDescription>Sound math and clean links</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Amortization totals reconcile: sum of principal equals loan amount.</li>
              <li>Interest line in I/S changes when rate or term changes.</li>
              <li>Cap table ownership % sums to 100%.</li>
              <li>No hard‑coded totals; all values reference inputs or formulas.</li>
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
              <li>Excel file with cap table, amortization sheet, and linked statements.</li>
              <li>Short write‑up comparing equity vs. debt (5–7 sentences).</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
