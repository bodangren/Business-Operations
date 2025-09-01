'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ComprehensionCheck from '@/components/exercises/ComprehensionCheck'
import { FillInTheBlank } from '@/components/exercises/FillInTheBlank'
import ReflectionJournal from '@/components/exercises/ReflectionJournal'
import { CashFlowChallenge } from '@/components/business-simulations/CashFlowChallenge'
import { BookOpen, CalendarDays, Rocket, School, Target, Users, CheckCircle2, Lightbulb } from 'lucide-react'

export default function PrefacePage() {
  // Mini syllabus comprehension check
  const introQuiz = [
    {
      id: 'q1',
      question: 'Which tool will you use most to build models in this course?',
      answers: ['Excel', 'Python', 'Google Slides', 'Photoshop'],
      explanation: 'We use Excel for modeling, automation, and dashboards.'
    },
    {
      id: 'q2',
      question: 'How is your course grade balanced?',
      answers: ['60% formative, 40% summative', '100% tests', '50% homework, 50% participation', '30% formative, 70% summative'],
      explanation: 'Formative checkpoints are 60%; summative capstone artifacts are 40%.'
    },
    {
      id: 'q3',
      question: 'What is a key deliverable for the Semester 2 capstone?',
      answers: ['An investor pitch and a linked Excel model', 'A group poster about history', 'A coding project in Java', 'A lab report on chemistry'],
      explanation: 'You will present a VC-style pitch and demo a linked workbook.'
    }
  ]

  const vocabSentences = [
    { id: 's1', text: 'Assets = {blank} + Equity', answer: 'Liabilities', hint: 'Money the business owes' },
    { id: 's2', text: 'A CVP model studies Cost–Volume–{blank}.', answer: 'Profit', hint: 'The “P” in CVP' },
    { id: 's3', text: "Excel's {blank} Manager lets you compare best, base, and worst cases.", answer: 'Scenario', hint: 'Used for what‑if analysis' }
  ]

  const phaseList = [
    { n: 1, name: 'Hook', color: 'red', icon: '▶' },
    { n: 2, name: 'Introduction', color: 'blue', icon: '📘' },
    { n: 3, name: 'Guided Practice', color: 'green', icon: '👥' },
    { n: 4, name: 'Independent Practice', color: 'purple', icon: '🎯' },
    { n: 5, name: 'Assessment', color: 'orange', icon: '✅' },
    { n: 6, name: 'Closing', color: 'indigo', icon: '💡' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          <div className="text-center space-y-4">
            <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
              <BookOpen className="inline-block mr-2 h-4 w-4" /> Preface: Welcome & Syllabus
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold">Math for Business Operations: Applied Accounting with Excel</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              This course turns spreadsheets into decision tools. You will build working Excel models,
              present to real audiences, and finish with a capstone that shows investor‑level thinking.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 space-y-10 max-w-6xl">
        {/* Course Snapshot */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" /> Course Snapshot
              </CardTitle>
              <CardDescription>Your first‑day overview at a glance</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-2">What you'll learn</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Core accounting (ledger → statements → KPIs)</li>
                  <li>Excel automation (tables, SUMIF/SUMIFS, Goal Seek, data tables, macros)</li>
                  <li>Decision skills (pricing, forecasting, cash flow)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">How the class runs</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Six‑phase lessons with frequent checks for understanding</li>
                  <li>Team projects with public‑facing demos</li>
                  <li>Realistic datasets and authentic scenarios</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">How you're graded</h3>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Formative: 60% (benchmarks, peer reviews, weekly reflections)</li>
                  <li>Summative: 40% (capstone workbook, pitch, model‑tour video)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Six‑Phase Lesson Structure */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <Badge className="bg-blue-100 text-blue-800">Lesson Flow</Badge>
            <h2 className="text-2xl font-semibold">Our Six‑Phase Structure</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Each lesson follows a clear rhythm so you always know what's next. You'll read short explanations,
              try a focused task, check your understanding, and reflect on what you learned.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {phaseList.map((p) => (
              <Card key={p.n}>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <span>{p.icon}</span>
                    Phase {p.n}: {p.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {p.name === 'Hook' && 'A fast scenario or short video that pulls you into the problem.'}
                    {p.name === 'Introduction' && 'Plain‑language teaching with examples that connect to real business.'}
                    {p.name === 'Guided Practice' && 'We build together. You get feedback as you go.'}
                    {p.name === 'Independent Practice' && 'You try it solo to show skill growth and confidence.'}
                    {p.name === 'Assessment' && 'Quick checks for understanding. Fix mistakes while they are small.'}
                    {p.name === 'Closing' && 'Reflect, summarize, and preview what comes next.'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Units Overview */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <Badge className="bg-blue-100 text-blue-800">Course Map</Badge>
            <h2 className="text-2xl font-semibold">Eight Hands‑On Units</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Semester 1 builds solid accounting and Excel skills. Semester 2 assembles a full startup model and prepares you for the capstone.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Units 1–4: Foundations + Automation</CardTitle>
                <CardDescription>Ledger integrity, month‑end automation, three statements, and forecasting</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li><strong>Unit 1: Smart Ledger Launch</strong> — Self‑auditing ledger and trial balance.</li>
                  <li><strong>Unit 2: Month‑End Wizard</strong> — Adjusting entries and macro‑powered close.</li>
                  <li><strong>Unit 3: Three‑Statement Storyboard</strong> — Linked I/S, B/S, C/F + KPI dashboard.</li>
                  <li><strong>Unit 4: Data‑Driven Café</strong> — Clean POS data, analyze, and forecast demand.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Units 5–8: Operations + Strategy</CardTitle>
                <CardDescription>Payroll, pricing, assets/inventory, and a Year‑1 startup model</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li><strong>Unit 5: PayDay Simulator</strong> — Payroll logic and reconciliation.</li>
                  <li><strong>Unit 6: PriceLab Challenge</strong> — CVP, Goal Seek, and sensitivity tables.</li>
                  <li><strong>Unit 7: Asset & Inventory Tracker</strong> — SLN/DDB, FIFO/LIFO with KPIs.</li>
                  <li><strong>Unit 8: Year‑1 Startup Model</strong> — Fully linked statements and scenarios.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Capstone Emphasis */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <Badge className="bg-blue-100 text-blue-800">Capstone</Badge>
            <h2 className="text-2xl font-semibold">Second‑Semester Capstone: Investor‑Ready</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Over 13 weeks you will extend your best mini‑projects into one investor‑ready business plan with a linked Excel workbook.
              You'll deliver a 10‑slide pitch, a 3‑minute model‑tour video, and a self‑auditing dashboard.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2"><CalendarDays className="h-4 w-4" /> Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Weeks 1–2: Proposal + research</li>
                  <li>Weeks 3–8: Build revenue, budget, payroll, inventory tabs</li>
                  <li>Weeks 9–11: Integrate 3 statements + scenarios</li>
                  <li>Weeks 12–13: Pitch, model tour, final reflection</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2"><Users className="h-4 w-4" /> Deliverables</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Linked Excel model with validation checks</li>
                  <li>10‑slide investor pitch (+ Q&A)</li>
                  <li>3‑minute model‑tour video</li>
                  <li>Weekly CAP reflections + peer reviews</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> How it's graded</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Model fidelity & automation (10)</li>
                  <li>Analytic insight (10)</li>
                  <li>Documentation & sourcing (5)</li>
                  <li>Pitch quality (10) + peer critique (2)</li>
                </ul>
                <p className="text-xs text-muted-foreground mt-2">See Capstone guidelines and rubrics for full details.</p>
                <p className="text-xs mt-1">
                  <Link href="/capstone" className="underline">Capstone Overview</Link>
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Try It: Interactive Demos */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <Badge className="bg-blue-100 text-blue-800">Try It</Badge>
            <h2 className="text-2xl font-semibold">How learning feels in this course</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">A quick taste of our interactive checks and business simulations.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-start">
            <div className="space-y-6">
              <ComprehensionCheck 
                questions={introQuiz}
                title="Getting Started Quiz"
                description="Check your understanding of the course structure and capstone."
                showExplanations={true}
              />
              <FillInTheBlank 
                sentences={vocabSentences}
                title="Business Math Vocabulary Warm‑Up"
                description="Fill the blanks to preview key ideas we'll use often."
                showWordList={true}
                randomizeWordOrder={true}
                showHints={true}
              />
            </div>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2"><Rocket className="h-4 w-4" /> 60‑Second Simulation</CardTitle>
                  <CardDescription>Keep your startup cash‑positive for a month.</CardDescription>
                </CardHeader>
                <CardContent>
                  <CashFlowChallenge />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Expectations & Support */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <Badge className="bg-blue-100 text-blue-800">Expectations</Badge>
            <h2 className="text-2xl font-semibold">How to succeed here</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2"><School className="h-4 w-4" /> Daily Habits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Bring your laptop and keep files organized</li>
                  <li>Build every day; small steps add up</li>
                  <li>Ask questions early and often</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2"><Users className="h-4 w-4" /> Teamwork</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Share roles: modeler, designer, auditor</li>
                  <li>Give kind, specific, helpful feedback</li>
                  <li>Document sources and formulas</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2"><Lightbulb className="h-4 w-4" /> Academic Integrity</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>No hard‑coded totals—formulas must show your reasoning</li>
                  <li>Cite data sources; summarize AI help you used</li>
                  <li>Keep a clear change‑log for major edits</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Reflection Touchpoint */}
        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Reflection</CardTitle>
              <CardDescription>Set goals for the semester using the CAP framework.</CardDescription>
            </CardHeader>
            <CardContent>
              <ReflectionJournal unitTitle="My Starting Goals" />
            </CardContent>
          </Card>
        </section>

        {/* Next Steps */}
        <section className="space-y-3 text-center">
          <p className="text-muted-foreground">Ready to start?</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link href="/student/unit01" className="underline">Jump to Unit 1</Link>
            <span>•</span>
            <Link href="/capstone" className="underline">Preview the Capstone</Link>
          </div>
        </section>
      </main>
    </div>
  )
}
