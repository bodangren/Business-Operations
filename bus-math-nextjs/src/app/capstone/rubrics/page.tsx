'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function CapstoneRubricsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4 py-6 max-w-6xl text-center space-y-4">
          <Badge className="bg-emerald-100 text-emerald-800 text-lg px-4 py-2">
            Capstone Assessment Rubrics
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold">How Your Capstone Is Evaluated</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Use these criteria while you build. Aim for clarity, auditability, and data‑driven decisions.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 space-y-8 max-w-6xl">
        {/* Model Fidelity & Automation (10) */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Model Fidelity & Automation (10)</CardTitle>
              <CardDescription>Link integrity, refresh, and validation</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold">Exceeds</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>All sheets linked; no manual plugs</li>
                  <li>Macro/button refresh; clean validation dashboard</li>
                  <li>Clear documentation of assumptions</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Meets</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Statements linked; ≤ 2 manual plugs</li>
                  <li>Minor validation warnings addressed</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Emerging</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Broken links or manual totals</li>
                  <li>Missing validation or major errors</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Analytic Insight (10) */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Analytic Insight & Decision Quality (10)</CardTitle>
              <CardDescription>Use sensitivity and scenarios to drive strategy</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold">Exceeds</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Tornado chart ranks top 5 drivers</li>
                  <li>Scenario results justify a clear pivot</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Meets</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Scenarios present; limited strategic discussion</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Emerging</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Calculations present but not interpreted</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Documentation & Sourcing (5) */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Documentation & Sourcing (5)</CardTitle>
              <CardDescription>Make your work readable and verifiable</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold">Exceeds</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>MLA citations; cell comments on key formulas</li>
                  <li>AI/tool usage logged transparently</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Meets</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Basic citation list; partial formula notes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Emerging</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Missing citations or opaque formulas</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Investor Pitch (10) */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Investor Pitch (10)</CardTitle>
              <CardDescription>Narrative clarity, visuals, and timing</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold">Exceeds</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Compelling story; visuals reinforce numbers</li>
                  <li>On-time delivery with confident Q&A</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Meets</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Clear flow; minor design or timing issues</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Emerging</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Disjointed narrative or off‑time</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Peer‑Critique Quality (2) */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Peer‑Critique Quality (2)</CardTitle>
              <CardDescription>Help others find root‑cause issues</CardDescription>
            </CardHeader>
            <CardContent className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <h3 className="font-semibold">Exceeds</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Flags root causes; offers specific fixes</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Meets</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Accurately identifies surface issues</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Emerging</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Minimal or perfunctory feedback</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Links */}
        <section className="text-center text-sm">
          <Link href="/capstone/guidelines" className="underline">Back to Capstone Guidelines</Link>
        </section>
      </main>
    </div>
  )
}

