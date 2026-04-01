import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { lesson08Data, unit05Data, lesson08Phases } from "./lesson-data"

const currentPhase = lesson08Phases[0]

export default function Lesson08Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <section className="text-center space-y-4">
          <Badge className="bg-purple-100 text-purple-900 text-lg px-4 py-2">
            🚀 Phase 1: Project Kickoff
          </Badge>
          <h1 className="text-3xl font-bold text-slate-900">
            Launch Your Team's Payroll Project
          </h1>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto">
            Today marks the real start of your group project. Each team takes ownership of its own payroll scenario,
            dataset, and business challenge. Your workbook must match the Lesson 07 rehearsal structure exactly.
          </p>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900">
                Your Team's Payroll Scenario
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-purple-900">
              <p>
                Each team has been assigned a unique business scenario with specific constraints and challenges.
                Your job is to build a payroll system that solves your scenario's problems while following the
                exact structure practiced in Lesson 07.
              </p>
              <div className="bg-white/60 rounded-lg p-4 border border-purple-200">
                <h4 className="font-semibold mb-2">Team Scenario Assignment</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>Group 1:</strong> Harbor Market (grocery) — Seasonal hiring surge</li>
                  <li><strong>Group 2:</strong> TechStart Solutions — Remote team payroll</li>
                  <li><strong>Group 3:</strong> Riverside Café — Tipped employee focus</li>
                  <li><strong>Group 4:</strong> Metro Delivery — Gig worker classification</li>
                  <li><strong>Group 5:</strong> Westside Auto — Mixed hourly/salaried</li>
                  <li><strong>Group 6:</strong> GreenLeaf Nursery — Agricultural/seasonal</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-slate-200 bg-white/90">
              <CardHeader>
                <CardTitle className="text-slate-900">Business Objectives</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-800 text-sm">
                <ul className="list-disc list-inside space-y-1">
                  <li>Calculate accurate gross → net pay for your scenario's employee types</li>
                  <li>Apply appropriate tax tables and compute withholdings</li>
                  <li>Reconcile payroll with bank to spot timing issues</li>
                  <li>Forecast cash needs for your business's payroll cycles</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white/90">
              <CardHeader>
                <CardTitle className="text-slate-900">Excel Objectives</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-800 text-sm">
                <ul className="list-disc list-inside space-y-1">
                  <li>XLOOKUP for employee data and tax tables</li>
                  <li>IF logic for deductions and overtime</li>
                  <li>SUMIFS and conditional formatting</li>
                  <li>Data validation for clean inputs</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900">
                Download Your Group Dataset
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900 text-sm">
              <p className="mb-3">
                Download <strong>only your assigned file</strong>. Each dataset matches your team's scenario.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                <a
                  href="/resources/unit05-pbl-payroll-cashflow-g1.csv"
                  download
                  className="block text-center py-2 px-3 bg-white border border-amber-300 rounded hover:bg-amber-100 transition-colors"
                >
                  Group 1 — Harbor Market
                </a>
                <a
                  href="/resources/unit05-pbl-payroll-cashflow-g2.csv"
                  download
                  className="block text-center py-2 px-3 bg-white border border-amber-300 rounded hover:bg-amber-100 transition-colors"
                >
                  Group 2 — TechStart
                </a>
                <a
                  href="/resources/unit05-pbl-payroll-cashflow-g3.csv"
                  download
                  className="block text-center py-2 px-3 bg-white border border-amber-300 rounded hover:bg-amber-100 transition-colors"
                >
                  Group 3 — Riverside Café
                </a>
                <a
                  href="/resources/unit05-pbl-payroll-cashflow-g4.csv"
                  download
                  className="block text-center py-2 px-3 bg-white border border-amber-300 rounded hover:bg-amber-100 transition-colors"
                >
                  Group 4 — Metro Delivery
                </a>
                <a
                  href="/resources/unit05-pbl-payroll-cashflow-g5.csv"
                  download
                  className="block text-center py-2 px-3 bg-white border border-amber-300 rounded hover:bg-amber-100 transition-colors"
                >
                  Group 5 — Westside Auto
                </a>
                <a
                  href="/resources/unit05-pbl-payroll-cashflow-g6.csv"
                  download
                  className="block text-center py-2 px-3 bg-white border border-amber-300 rounded hover:bg-amber-100 transition-colors"
                >
                  Group 6 — GreenLeaf Nursery
                </a>
              </div>
              <p className="mt-3 text-xs">
                <strong>Important:</strong> Use ONLY your assigned file. Teams must work with their own dataset
                throughout Lessons 08–10.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900">
                Milestone 1 — Kickoff Acceptance Criteria
              </CardTitle>
            </CardHeader>
            <CardContent className="text-red-900 text-sm space-y-2">
              <p>Complete these items by end of class:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Workbook opened and named: <code className="bg-white/60 px-1 rounded">PayrollProject-Group[X]-LastNames.xlsx</code></li>
                <li>All required sheets created matching Lesson 07 structure</li>
                <li>Your group dataset imported into the Employee sheet</li>
                <li>Problem statement written (1–2 sentences on the business problem)</li>
                <li>One early direction statement (preliminary recommendation or hypothesis)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">
                Workbook Structure (Must Match Lesson 07)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 text-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="bg-white/60 p-2 rounded text-center">Employees</div>
                <div className="bg-white/60 p-2 rounded text-center">PayrollRegister</div>
                <div className="bg-white/60 p-2 rounded text-center">TaxTables</div>
                <div className="bg-white/60 p-2 rounded text-center">PayStubs</div>
                <div className="bg-white/60 p-2 rounded text-center">BankReconciliation</div>
                <div className="bg-white/60 p-2 rounded text-center">CashFlow</div>
                <div className="bg-white/60 p-2 rounded text-center">Dashboard</div>
                <div className="bg-white/60 p-2 rounded text-center">Documentation</div>
              </div>
              <p className="mt-3">
                Keep sheet names and order identical to Lesson 07. This allows comparison across teams
                and ensures consistent grading.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">
                What Makes a Strong Kickoff
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 text-sm space-y-2">
              <p>Your team's kickoff should demonstrate:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Clear problem statement:</strong> What specific payroll challenge does your scenario face?</li>
                <li><strong>Appropriate data usage:</strong> Employee types, pay rates, and constraints match your scenario</li>
                <li><strong>Early direction:</strong> A preliminary hypothesis about what the data will show</li>
                <li><strong>Clean workbook setup:</strong> Sheet structure matches Lesson 07 exactly</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-slate-50">
            <CardHeader>
              <CardTitle className="text-slate-900">
                Submission Checklist
              </CardTitle>
            </CardHeader>
            <CardContent className="text-slate-800 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>Correctly named workbook file</li>
                <li>All 8 sheets created with proper names</li>
                <li>Group dataset imported to Employees sheet</li>
                <li>Problem statement (1–2 sentences)</li>
                <li>Early direction statement (preliminary recommendation)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900">
                Rubric Alignment
              </CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-900 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Technical Accuracy — 50%</strong>: Formulas, validations, structure</li>
                <li><strong>Strategic Rationale — 20%</strong>: Business alignment</li>
                <li><strong>Communication — 15%</strong>: Clear documentation</li>
                <li><strong>Time Management — 10%</strong>: Pacing and completion</li>
                <li><strong>Q&A Readiness — 5%</strong>: Understanding of your scenario</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
