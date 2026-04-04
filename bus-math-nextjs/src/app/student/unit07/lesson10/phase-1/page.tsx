import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson10Data, unit07Data, lesson10Phases } from "../lesson-data"

export default function Page() {
  const phases = lesson10Phases
  const currentPhase = phases[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      <PhaseHeader unit={unit07Data} lesson={lesson10Data} phase={currentPhase} phases={phases} />
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge variant="outline" className="bg-amber-100 text-amber-800 border-amber-200">Phase 1: Final Presentation & Submission</Badge>
            <h1 className="text-3xl font-bold">Milestone 3 — Present Your Inventory Recommendation</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Today your team presents the final inventory analysis to an executive audience. Every claim must come from your workbook. Every number must be defensible.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Project Context</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>
                Across Lessons 8 and 9, your team built a complete inventory valuation workbook for your assigned business. You calculated ending inventory and COGS using all four methods, compared the results, tested scenarios, and wrote a recommendation. Today is the moment to share that work with an audience that needs to make a real decision.
              </p>
              <p>
                Your presentation should answer one question: <strong>Which inventory valuation method best serves this business, and why?</strong> The answer must come from your workbook evidence, not opinion.
              </p>
            </CardContent>
          </Card>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Business Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Tell a clear story: problem → analysis → recommendation</li>
                  <li>Cite at least three exact numbers from your group's workbook</li>
                  <li>Explain how your chosen method affects COGS, ending inventory, and reported profit</li>
                  <li>Name one risk or limitation and explain why the recommendation still holds</li>
                  <li>Respond to audience questions with workbook evidence</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Workbook Objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Final workbook is complete, accurate, and well-formatted</li>
                  <li>All four methods (FIFO, LIFO, Specific ID, Weighted Average) are calculated correctly</li>
                  <li>Checks sheet shows no unresolved errors</li>
                  <li>Dashboard displays method comparison clearly</li>
                  <li>Recommendation sheet includes claim, evidence, and risk statement</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Presentation Flow (40 minutes)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">5 min</Badge>
                  <span>Setup: teams open final workbooks, confirm presentation order</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">~6 min each</Badge>
                  <span>Four groups present (4–5 min presentation + 1–2 min Q&A)</span>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">5 min</Badge>
                  <span>Wrap-up: submission confirmation, reflection, and next steps</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Group Dataset Assignments</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-3 text-sm text-muted-foreground">
                Each group uses only their assigned dataset. Do not switch files or use another group's data.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Group 1:</strong> <a className="underline text-blue-600" href="/resources/unit07-pbl-asset-inventory-g1.csv" download>unit07-pbl-asset-inventory-g1.csv</a></li>
                <li><strong>Group 2:</strong> <a className="underline text-blue-600" href="/resources/unit07-pbl-asset-inventory-g2.csv" download>unit07-pbl-asset-inventory-g2.csv</a></li>
                <li><strong>Group 3:</strong> <a className="underline text-blue-600" href="/resources/unit07-pbl-asset-inventory-g3.csv" download>unit07-pbl-asset-inventory-g3.csv</a></li>
                <li><strong>Group 4:</strong> <a className="underline text-blue-600" href="/resources/unit07-pbl-asset-inventory-g4.csv" download>unit07-pbl-asset-inventory-g4.csv</a></li>
              </ul>
              <p className="mt-3 text-sm text-amber-700 bg-amber-50 p-2 rounded">
                <strong>Missing workbook?</strong> Re-download your assigned starter file and rebuild from your Lesson 09 notes. Do not use another group's file.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Acceptance Criteria</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li>Final workbook is complete with all required sheets and accurate calculations</li>
                <li>Recommendation includes a clear claim, at least three cited workbook numbers, and one risk statement</li>
                <li>Presentation is 4–5 minutes with a clear story arc and visible workbook evidence</li>
                <li>Team responds to at least one audience question using specific workbook data</li>
                <li>Final workbook, recommendation artifact, and peer reviews are submitted</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Submission Checklist</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-none space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1">☐</span>
                  <span>Final workbook file saved with correct naming convention: <code className="bg-muted px-1 py-0.5 rounded">Unit07_GroupX_Inventory.xlsx</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">☐</span>
                  <span>Recommendation artifact (slide, brief, or memo) submitted</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">☐</span>
                  <span>Peer critique forms completed for all presenting groups</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">☐</span>
                  <span>Reflection journal completed individually</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">☐</span>
                  <span>All files uploaded to the submission folder or LMS</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Evaluation Rubric</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-slate-50 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <strong>Technical Accuracy</strong>
                    <Badge variant="outline">50%</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">All inventory valuations are mathematically correct. Formulas handle edge cases. Checks sheet shows no unresolved errors.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <strong>Strategic Rationale</strong>
                    <Badge variant="outline">20%</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Recommendation clearly aligns with business objectives. Demonstrates understanding of how method choice affects COGS, ending inventory, and profit.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <strong>Communication & Clarity</strong>
                    <Badge variant="outline">15%</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Concise story with a clear problem → analysis → recommendation arc. Visuals support the message. Audience-appropriate language.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <strong>Q&A Readiness</strong>
                    <Badge variant="outline">10%</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Confident, concise responses that cite specific workbook numbers. Team can defend their recommendation under questioning.</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg">
                  <div className="flex justify-between items-center mb-1">
                    <strong>Professionalism & Time Management</strong>
                    <Badge variant="outline">5%</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Presentation fits the timebox. Clean transitions. Professional delivery.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Peer Review (Audience)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                As an audience member, evaluate each presentation using the rubric categories above. Provide at least one concrete strength and one concrete revision target for each team.
              </p>
              <PeerCritiqueForm projectTitle="Unit 07 Final Presentations" unitNumber={7} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Final Reflection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                After your presentation, complete this reflection individually. Think about what made your recommendation believable — and what you would do differently next time.
              </p>
              <ReflectionJournal 
                unitTitle="Unit 07 Project Reflection" 
                prompts={[
                  {
                    id: 'method-choice',
                    category: 'understanding',
                    prompt: "What was your team's recommended inventory method, and what workbook evidence made it the strongest choice?",
                    placeholder: 'Describe your recommendation and cite the specific workbook numbers that support it...'
                  },
                  {
                    id: 'confidence',
                    category: 'confidence',
                    prompt: 'Which part of your workbook are you most confident about? Which part would you improve if you had more time?',
                    placeholder: 'Reflect on the strengths and weaknesses of your final workbook...'
                  },
                  {
                    id: 'method-impact',
                    category: 'application',
                    prompt: 'How did your team\'s method choice affect COGS and ending inventory compared to the other methods?',
                    placeholder: 'Compare your chosen method to at least one other method using specific numbers...'
                  },
                  {
                    id: 'business-connection',
                    category: 'transfer',
                    prompt: 'What did you learn about the connection between inventory accounting and business decision-making?',
                    placeholder: 'Think about how inventory choices affect real business outcomes like profit, taxes, and cash flow...'
                  },
                  {
                    id: 'advice-to-sarah',
                    category: 'understanding',
                    prompt: 'If you were advising Sarah Chen (from Lesson 01) on inventory tracking, what is the most important thing you would tell her now?',
                    placeholder: 'Connect everything you learned in Unit 07 back to the founder problem that started this unit...'
                  }
                ]}
              />
            </CardContent>
          </Card>
        </section>
      </main>
      <PhaseFooter unit={unit07Data} lesson={lesson10Data} phase={currentPhase} phases={phases} />
    </div>
  )
}
