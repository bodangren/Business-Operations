"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function StartupBudgetPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4 py-8 max-w-5xl text-center space-y-4">
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">Capstone · Week 4</Badge>
          <h1 className="text-3xl md:text-4xl font-bold">Start‑up Budget</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Sort your costs: CapEx vs. OpEx. Build a clean expense log that rolls into a
            monthly budget. Use drop‑downs for category codes.
          </p>
          <p className="text-sm">Grading follows the capstone <Link href="/capstone/rubrics" className="underline">Rubrics</Link>.</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10 max-w-5xl space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>What to include</CardTitle>
            <CardDescription>Accuracy and structure</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Expense log: date, vendor, amount, category, notes.</li>
              <li>Validation: flag if category is missing or invalid.</li>
              <li>Roll‑up: monthly totals by category.</li>
              <li>Short note: top three cost drivers to watch.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Excel Requirements</CardTitle>
            <CardDescription>Categories, validation, and roll‑ups</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Create a category list with codes (e.g., CAPEX‑EQUIP, OPEX‑RENT).</li>
              <li>Use data validation drop‑downs for category in the log.</li>
              <li>Use <code>SUMIF/SUMIFS</code> to roll up by month and category.</li>
              <li>Add a simple error flag column if category cell is blank.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quality Checks</CardTitle>
            <CardDescription>Numbers you can trust</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Totals in the roll‑up match the log (spot‑check a few items).</li>
              <li>Categories are consistent and labeled; no “misc” catch‑all.</li>
              <li>Formatting is clear: currency, dates, and headings are readable.</li>
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
              <li>Excel file with expense log, category list, and monthly roll‑up.</li>
              <li>Short write‑up (3–5 sentences) on biggest cost drivers and any risks.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
