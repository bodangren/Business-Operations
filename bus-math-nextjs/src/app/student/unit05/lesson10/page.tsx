import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson10Phases } from "./lesson-data"

const _currentPhase = lesson10Phases[0]

export default function Lesson10Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-purple-100">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <section className="text-center space-y-4">
          <Badge className="bg-purple-100 text-purple-900 text-lg px-4 py-2">
            🚀 Milestone 3: Final Presentation & Submission
          </Badge>
          <h1 className="text-3xl font-bold text-slate-900">
            Present Your Payroll System & Reflect
          </h1>
          <p className="text-lg text-slate-700 max-w-4xl mx-auto">
            This is the final presentation milestone. Your team presents its complete payroll system,
            demonstrates how it solves the business scenario, and reflects on what makes a payroll system trustworthy.
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
                Present the complete payroll system you built for your assigned scenario. Be ready to
                explain the business problem, your solution, and why the system is trustworthy.
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

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900">
                Presentation Flow (40 minutes)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-amber-900 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li>5 min setup and transitions</li>
                <li>Six groups × ~5 minutes each</li>
                <li>5 min final wrap and next steps</li>
                <li>Presenter order will be posted at the start of class</li>
              </ul>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-slate-200 bg-white/90">
              <CardHeader>
                <CardTitle className="text-slate-900">Business Objectives</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-800 text-sm">
                <ul className="list-disc list-inside space-y-1">
                  <li>Demonstrate accurate payroll modeling for your scenario</li>
                  <li>Explain the business problem and your solution</li>
                  <li>Present your recommendation with cited evidence</li>
                  <li>Discuss risks, limitations, and cash-flow impact</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white/90">
              <CardHeader>
                <CardTitle className="text-slate-900">Excel Objectives</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-800 text-sm">
                <ul className="list-disc list-inside space-y-1">
                  <li>Show validated formulas and error-handling</li>
                  <li>Demonstrate dashboard and summary views</li>
                  <li>Walk through the evidence chain from data to recommendation</li>
                  <li>Highlight controls that prevent payroll mistakes</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900">
                Milestone 3 — Presentation Acceptance Criteria
              </CardTitle>
            </CardHeader>
            <CardContent className="text-red-900 text-sm space-y-2">
              <p>Complete these items for your presentation:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Final workbook with all 8 sheets complete and accurate</li>
                <li>4–5 minute presentation covering: problem, solution, evidence, recommendation</li>
                <li>Dashboard tells a clear story with accurate totals</li>
                <li>Recommendation includes 1 claim + 3 cited numbers + 1 risk statement</li>
                <li>Ready to answer audience questions about your system</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">
                What to Include in Your Presentation
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 text-sm space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Problem Statement:</strong> What payroll challenge does your scenario face?</li>
                <li><strong>Solution Overview:</strong> How does your workbook solve it?</li>
                <li><strong>Key Features:</strong> Validations, lookups, reconciliation, dashboard</li>
                <li><strong>Evidence Chain:</strong> Show the flow from Employee data → Calculations → Dashboard</li>
                <li><strong>Recommendation:</strong> Your main claim with cited numbers from the workbook</li>
                <li><strong>Risks & Limitations:</strong> What could go wrong or needs more data?</li>
                <li><strong>Q&A Readiness:</strong> Be prepared for questions about your system</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">
                Audience Review
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 text-sm space-y-4">
              <p>Audience members should provide feedback using this rubric:</p>
              <PeerCritiqueForm projectTitle="PayDay Final Presentation" unitNumber={5} />
              <div className="bg-white/60 rounded-lg p-4 border border-green-200">
                <h4 className="font-semibold mb-2">Feedback Focus Areas</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Technical accuracy of payroll calculations</li>
                  <li>Clarity of the evidence chain</li>
                  <li>Strength of recommendation and cited evidence</li>
                  <li>Quality of dashboard and visual communication</li>
                  <li>Q&A readiness and confidence</li>
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
                <li>Final workbook: PayrollProject-Group[X]-LastNames.xlsx</li>
                <li>All 8 sheets complete with working formulas and validations</li>
                <li>Documentation sheet with test scenarios and assumptions</li>
                <li>Presentation slides or notes (if applicable)</li>
                <li>Peer review feedback submitted</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900">
                Rubric (used by reviewers)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-900 text-sm">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Technical Accuracy — 50%</strong>: Correct modeling, formulas, validations</li>
                <li><strong>Strategic Rationale — 20%</strong>: Aligns to business goals and trade-offs</li>
                <li><strong>Communication & Clarity — 15%</strong>: Concise story, visuals, audience fit</li>
                <li><strong>Time Management — 10%</strong>: Pacing, clean transitions</li>
                <li><strong>Q&A Readiness — 5%</strong>: Confident, concise responses</li>
              </ul>
            </CardContent>
          </Card>

          <ReflectionJournal unitTitle="Post-Presentation Reflection" />
        </section>
      </div>
    </div>
  )
}
