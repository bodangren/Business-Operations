import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson10Data, unit06Data, lesson10Phases } from "../lesson-data"
import { projectGroups } from "../../project-workbooks"

export default function Page() {
  const phases = lesson10Phases
  const currentPhase = phases[0]

  return (
    <div className="min-h-screen bg-white">
      <PhaseHeader unit={unit06Data as any} lesson={lesson10Data as any} phase={currentPhase as any} phases={phases as any} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge>
              Phase 1: Practice + Present
            </Badge>
            <h1 className="text-2xl font-semibold">Milestone 3 - Practice, Present, and Defend Your Recommendation</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Business Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Explain the pricing problem and final recommendation clearly</li>
                  <li>Show how your analysis supports the business decision</li>
                  <li>Answer questions about risk, break-even, and target profit</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Excel Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Use the final workbook dashboard as your evidence center</li>
                  <li>Show at least one supporting sheet such as the sensitivity table or profit matrix</li>
                  <li>Keep formulas, labels, and notes readable for an outside audience</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Presentation Flow (45 minutes)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li>First, do a short partner or table-group practice round</li>
                <li>Then move into full-class presentations</li>
                <li>Each team should aim for 4-5 minutes plus brief questions</li>
                <li>Presenter order is posted; stay on the time limit</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Final workbook and dashboard are complete and readable</li>
                <li>Presentation includes claim, evidence, risk, and recommendation</li>
                <li>Each team cites actual workbook numbers, not guesses</li>
                <li>Questions are answered with reasoning, not just opinion</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>What to Show During the Presentation</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-1">
                <li>Introduce the business scenario and its main limit: capacity or target profit</li>
                <li>Show the recommended option on the <strong>Dashboard</strong></li>
                <li>Use one supporting sheet to prove the decision, usually <strong>PriceSensitivity</strong> or <strong>ProfitMatrix</strong></li>
                <li>Name one downside risk and explain why the team still supports the choice</li>
                <li>Finish with a direct recommendation sentence</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Rubric (used by reviewers)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Technical Accuracy — 50%</strong>: Correct modeling, formulas, validations</li>
                <li><strong>Strategic Rationale — 20%</strong>: Aligns to business goals and trade‑offs</li>
                <li><strong>Communication & Clarity — 15%</strong>: Concise story, visuals, audience fit</li>
                <li><strong>Time Management — 10%</strong>: Pacing, clean transitions</li>
                <li><strong>Q&amp;A Readiness — 5%</strong>: Confident, concise responses</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Audience Review Form</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <PeerCritiqueForm projectTitle="PriceLab Final Presentation" unitNumber={6} />
              <p className="text-sm text-muted-foreground">Reviewers: submit feedback mapped to rubric categories.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Need to Recover Your Workbook?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                {projectGroups.map((group) => (
                  <li key={group.id}>
                    <strong>{group.label} - {group.businessName}</strong> -
                    {" "}
                    <a className="underline" href={group.workbookPath} download>
                      {group.workbookFile}
                    </a>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <ReflectionJournal unitTitle="Post‑Presentation Reflection (CAP)" />
        </section>
      </main>
      <PhaseFooter unit={unit06Data as any} lesson={lesson10Data as any} phase={currentPhase as any} phases={phases as any} />
    </div>
  )
}
