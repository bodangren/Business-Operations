import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson09Data, unit06Data, lesson09Phases } from "../lesson-data"
import { projectGroups } from "../../project-workbooks"

export default function Page() {
  const phases = lesson09Phases
  const currentPhase = phases[0]

  return (
    <div className="min-h-screen bg-white">
      <PhaseHeader unit={unit06Data as any} lesson={lesson09Data as any} phase={currentPhase as any} phases={phases as any} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge>
              Phase 1: Build + Rehearsal
            </Badge>
            <h1 className="text-2xl font-semibold">Milestone 2 - Finish the Workbook and Rehearse the Pitch</h1>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Business Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Turn your early analysis into one clear pricing recommendation</li>
                  <li>Test whether that recommendation still works under different price and volume conditions</li>
                  <li>Prepare to explain the trade-offs to classmates acting as stakeholders</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Excel Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1">
                  <li>Continue using the same group workbook from Lesson 8</li>
                  <li>Complete <strong>TargetProfit</strong>, <strong>PriceSensitivity</strong>, <strong>ProfitMatrix</strong>, and <strong>Dashboard</strong></li>
                  <li>Use manual formulas and clean labels in Excel Online</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Continue the Same Workbook</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>
                Do not start a new file today. Reopen the workbook your team saved in Lesson 8. If your file is
                missing, re-download your assigned starter workbook and rebuild quickly from yesterday&apos;s notes.
              </p>
              <ul className="list-disc list-inside space-y-2">
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

          <Card>
            <CardHeader>
              <CardTitle>What Your Team Builds Today</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>TargetProfit</strong> - solve for the price or units needed to hit the group target</li>
                <li><strong>PriceSensitivity</strong> - hold units constant and test how profit changes as price changes</li>
                <li><strong>ProfitMatrix</strong> - build the full price-by-volume grid manually</li>
                <li><strong>Dashboard</strong> - state the final recommendation, downside risk, and short explanation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Timeboxing</CardTitle>
            </CardHeader>
            <CardContent>
              <p>About 25 minutes to finish the workbook, 10 minutes to organize presentation notes, and 10 minutes to rehearse with peer feedback.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Simple Pitch Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-1">
                <li><strong>Claim:</strong> name the option your team recommends</li>
                <li><strong>Evidence:</strong> cite projected profit, break-even units, and capacity fit</li>
                <li><strong>Risk:</strong> explain one weakness or downside case from the sensitivity work</li>
                <li><strong>Close:</strong> explain why this option is still the best business choice</li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Peer Review</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <PeerCritiqueForm projectTitle="PriceLab Prototype Review" unitNumber={6} />
              <p className="text-sm text-muted-foreground">Use rubric categories below to guide feedback.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Standard Rubric (Capstone‑Aligned)</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Technical Accuracy — 50%</strong>: Correct modeling, formulas, validations</li>
                <li><strong>Strategic Rationale — 20%</strong>: Aligns to business goals and trade‑offs</li>
                <li><strong>Communication & Clarity — 15%</strong>: Concise story, visuals, audience fit</li>
                <li><strong>Time Management — 10%</strong>: Pacing, clean transitions</li>
                <li><strong>Q&A Readiness — 5%</strong>: Confident, concise responses</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Milestone 2 - Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1">
                <li>All seven workbook tabs are complete and readable</li>
                <li>The dashboard names one final recommendation</li>
                <li>The team can cite at least three numbers from the workbook as evidence</li>
                <li>A practice rehearsal has happened and peer feedback is recorded</li>
              </ul>
            </CardContent>
          </Card>

          <ReflectionJournal unitTitle="Milestone 2 Reflection (CAP)" />
        </section>
      </main>
      <PhaseFooter unit={unit06Data as any} lesson={lesson09Data as any} phase={currentPhase as any} phases={phases as any} />
    </div>
  )
}
