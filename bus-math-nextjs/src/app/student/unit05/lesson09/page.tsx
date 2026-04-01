import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson09Data, unit05Data, lesson09Phases } from "./lesson-data"

const currentPhase = lesson09Phases[0]

export default function Lesson09Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <section className="text-center space-y-4">
          <Badge className="bg-purple-100 text-purple-900 text-lg px-4 py-2">
            🚀 Milestone 2: Completion + Rehearsal
          </Badge>
          <h1 className="text-3xl font-bold text-slate-900">
            Complete Your Payroll System & Rehearse the Demo
          </h1>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto">
            This is the build completion milestone. Your team finishes the core analysis, tests edge cases,
            and prepares a recommendation with cited evidence. You'll also rehearse your presentation and
            incorporate peer feedback before the final presentation.
          </p>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900">
                Your Team's Business Scenario
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-purple-900">
              <p>
                Continue working with your assigned scenario from Lesson 08. Focus on completing the payroll
                system, testing realistic scenarios, and preparing your recommendation for the final presentation.
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
                  <li>Complete all payroll calculations for your scenario's employees</li>
                  <li>Run test scenarios (edge cases, high-volume periods, etc.)</li>
                  <li>Document findings and identify risks or limitations</li>
                  <li>Prepare a recommendation with supporting evidence</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white/90">
              <CardHeader>
                <CardTitle className="text-slate-900">Excel Objectives</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-800 text-sm">
                <ul className="list-disc list-inside space-y-1">
                  <li>Finalize all workbook sheets matching Lesson 07 structure</li>
                  <li>Complete dashboard with summary views and charts</li>
                  <li>Add validation rules and conditional formatting checks</li>
                  <li>Document assumptions and error-handling behaviors</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900">
                Milestone 2 — Completion & Rehearsal Acceptance Criteria
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900 text-sm space-y-2">
              <p>Complete these items by end of class:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>All 8 sheets complete with formulas, validations, and formatting</li>
                <li>At least 3 test scenarios documented (normal, edge case, stress test)</li>
                <li>Dashboard displays accurate totals and key metrics</li>
                <li>Recommendation draft: 1 claim + 3 cited workbook numbers + 1 risk statement</li>
                <li>Presentation rehearsal complete with peer feedback incorporated</li>
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
                Keep sheet names and order identical to Lesson 07. Every group uses the same structure
                for direct comparison and consistent grading.
              </p>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900">
                Recommendation Structure
              </CardTitle>
            </CardHeader>
            <CardContent className="text-red-900 text-sm space-y-2">
              <p>Your team's recommendation must include:</p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>1 Clear Claim:</strong> What should the business do or understand?</li>
                <li><strong>3+ Cited Numbers:</strong>引用 workbook 中的具体数据 (e.g., total payroll cost, cash flow impact)</li>
                <li><strong>1 Risk/Limitation:</strong> What's a downside or uncertainty in your recommendation?</li>
                <li><strong>Evidence Chain:</strong> Show how data flows from Employee → PayrollRegister → Dashboard → Recommendation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">
                Peer Feedback & Revision
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 text-sm space-y-4">
              <p>After your rehearsal, gather feedback from another team:</p>
              <PeerCritiqueForm projectTitle="PayDay Milestone 2 Review" unitNumber={5} />
              <div className="bg-white/60 rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold mb-2">Revision Priorities</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Address at least one concrete suggestion from peer feedback</li>
                  <li>Verify all formulas calculate correctly</li>
                  <li>Ensure dashboard tells a clear story</li>
                  <li>Check that recommendation is backed by workbook evidence</li>
                </ul>
              </div>
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
                <li>All 8 sheets complete with working formulas</li>
                <li>3+ test scenarios documented in Documentation sheet</li>
                <li>Dashboard displays accurate totals and key metrics</li>
                <li>Recommendation: claim + 3 cited numbers + 1 risk</li>
                <li>Peer feedback received and at least one revision made</li>
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

          <ReflectionJournal unitTitle="Milestone 2 Reflection" />
        </section>
      </div>
    </div>
  )
}
