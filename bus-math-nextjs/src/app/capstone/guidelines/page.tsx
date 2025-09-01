'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CalendarDays, FileSpreadsheet, Presentation, Video, BookOpen, CheckCircle2 } from 'lucide-react'

export default function CapstoneGuidelinesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4 py-6 max-w-6xl text-center space-y-4">
          <Badge className="bg-amber-100 text-amber-800 text-lg px-4 py-2">
            Capstone Guidelines & Timeline
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold">Investor‑Ready Startup Capstone (13 Weeks)</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Extend your best mini‑projects into one linked Excel model and a clear, professional pitch. This page summarizes the timeline, deliverables, and expectations.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 space-y-8 max-w-6xl">
        {/* Timeline */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><CalendarDays className="h-5 w-5" /> 13‑Week Timeline</CardTitle>
              <CardDescription>Milestones align with our weekly checkpoints</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Week 1: Concept proposal & roles</li>
                  <li>Week 2: Market research sheet</li>
                  <li>Week 3: Unit‑economics table (break‑even)</li>
                  <li>Week 4: CapEx/OpEx budget + codes</li>
                  <li>Week 5: Funding strategy (loan/cap table)</li>
                  <li>Week 6: PriceLab v2 + CVP chart</li>
                  <li>Week 7: Payroll register (gross→net)</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Week 8: Inventory macro demo (FIFO/LIFO)</li>
                  <li>Week 9: Depreciation schedule (SLN/DDB)</li>
                  <li>Week 10: Integrated 3‑statement draft</li>
                  <li>Week 11: Scenario dashboard + tornado</li>
                  <li>Week 12: Pitch deck draft (10 slides)</li>
                  <li>Week 13: Live pitch + model‑tour video</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Deliverables */}
        <section className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2"><FileSpreadsheet className="h-4 w-4" /> Linked Excel Model</CardTitle>
              <CardDescription>Evidence of automation and integrity</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>All three statements linked; no hard‑coded totals</li>
                <li>Validation dashboard (traffic lights)</li>
                <li>Scenario Manager and sensitivity table</li>
                <li>Macro or button to refresh statements (optional)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2"><Presentation className="h-4 w-4" /> Investor Pitch</CardTitle>
              <CardDescription>10 slides, concise and visual</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Problem → Solution → Market → Financials arc</li>
                <li>KPI visuals that match the model</li>
                <li>On‑time delivery, 8–11 minutes + Q&A</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center gap-2"><Video className="h-4 w-4" /> Model‑Tour Video</CardTitle>
              <CardDescription>≤ 3 minutes, clear link showcase</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Show sheet linkages, not just totals</li>
                <li>Explain top 2–3 assumptions and risks</li>
                <li>Audio clear; cursor highlights formulas</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Assessment weights */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><BookOpen className="h-5 w-5" /> Assessment Plan</CardTitle>
              <CardDescription>How this project affects your grade</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h3 className="font-semibold mb-2">Formative (60%)</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Benchmark tasks (Weeks 1–11)</li>
                  <li>Peer‑review checklists (Weeks 2, 4, 6, 10)</li>
                  <li>Weekly CAP reflections</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Summative (40%)</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Final business plan & Excel model</li>
                  <li>Investor pitch (slides + live)</li>
                  <li>Model‑tour video & peer‑critique quality</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Expectations */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5" /> Expectations & Best Practices</CardTitle>
              <CardDescription>Professional standards for investor‑readiness</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Document all formulas and cite sources</li>
                  <li>No hard‑coded numbers in statements</li>
                  <li>Use validation and error flags to self‑audit</li>
                  <li>Keep a change‑log for major edits</li>
                </ul>
              </div>
              <div>
                <ul className="list-disc list-inside space-y-1">
                  <li>Run at least three scenarios (best/base/worst)</li>
                  <li>Explain sensitivity drivers with visuals</li>
                  <li>Practice your pitch timing and transitions</li>
                  <li>Be ready to answer “How do you know?”</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Links */}
        <section className="text-center">
          <div className="text-sm">
            <Link href="/capstone/rubrics" className="underline">View Capstone Rubrics</Link>
            <span className="mx-2">•</span>
            <Link href="/frontmatter/preface" className="underline">Return to Preface</Link>
          </div>
        </section>
      </main>
    </div>
  )
}

