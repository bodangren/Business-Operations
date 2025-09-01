"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function IntegratedModelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4 py-8 max-w-5xl text-center space-y-4">
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">Capstone · Week 10</Badge>
          <h1 className="text-3xl md:text-4xl font-bold">Integrated Model</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Assemble 12‑month Income Statement, Balance Sheet, and Cash Flow. Add validation checks
            to catch errors and confirm linkages.
          </p>
          <p className="text-sm">Scoring uses the capstone <Link href="/capstone/rubrics" className="underline">Rubrics</Link>.</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10 max-w-5xl space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>What to include</CardTitle>
            <CardDescription>Balance and integrity</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Linked statements with no manual plugs.</li>
              <li>Validation checks with clear traffic‑light signals.</li>
              <li>Notes on any assumptions that drive results.</li>
              <li>Short note: remaining gaps and next steps.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Excel Requirements</CardTitle>
            <CardDescription>Three statements and a validation dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Income Statement: revenue, COGS, gross profit, OpEx, interest, taxes, net income.</li>
              <li>Balance Sheet: assets, liabilities, equity; must balance every month.</li>
              <li>Cash Flow: start cash, operating, investing, financing, end cash (ties to B/S).</li>
              <li>Validation: flags for B/S balance, links working, and missing inputs.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quality Checks</CardTitle>
            <CardDescription>Everything must tie out</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Balance Sheet balances every period (Assets = Liabilities + Equity).</li>
              <li>Cash Flow ending cash equals Balance Sheet cash for each month.</li>
              <li>No circular references unless intentionally controlled; document if used.</li>
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
              <li>Excel file with all three statements and validation checks visible.</li>
              <li>Short note (4–6 sentences) on model limitations and next fixes.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
