"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PayrollPlanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4 py-8 max-w-5xl text-center space-y-4">
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">Capstone · Week 7</Badge>
          <h1 className="text-3xl md:text-4xl font-bold">Payroll Plan</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Set wage bands with lookups and compute gross to net using tax tables.
            Provide weekly and monthly summaries.
          </p>
          <p className="text-sm">Scoring is on the capstone <Link href="/capstone/rubrics" className="underline">Rubrics</Link>.</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10 max-w-5xl space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>What to include</CardTitle>
            <CardDescription>Clear logic and totals</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Wage bands and XLOOKUP (or VLOOKUP) for pay rates.</li>
              <li>Tax tables and formulas for deductions.</li>
              <li>Register with per‑employee detail and totals.</li>
              <li>Short note: assumptions that affect payroll most.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Excel Requirements</CardTitle>
            <CardDescription>Lookups, deductions, and summaries</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Employee table: name, role, band, hourly rate (via XLOOKUP on band table).</li>
              <li>Gross pay: hours × rate; apply overtime rules if used.</li>
              <li>Deductions: use tax brackets or a table; compute net pay = gross − deductions.</li>
              <li>Weekly and monthly summaries by employee and by role (use <code>SUMIF/SUMIFS</code>).</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quality Checks</CardTitle>
            <CardDescription>Accuracy and fairness</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Rates pull correctly from the wage band table.</li>
              <li>Tax math is consistent; spot‑check one employee across weeks.</li>
              <li>Totals match across weekly and monthly summaries.</li>
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
              <li>Excel file with wage bands, payroll register, and summaries.</li>
              <li>Short note (3–5 sentences) on payroll risks or edge cases.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
