"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function CapstonePage() {
  const deliverables = [
    { href: "/capstone/concept-proposal", title: "Concept Proposal", week: "Week 1", blurb: "State the problem, your solution, and team roles." },
    { href: "/capstone/market-research", title: "Market Research", week: "Week 2", blurb: "Collect real data and summarize what it tells you." },
    { href: "/capstone/revenue-streams", title: "Revenue Streams", week: "Week 3", blurb: "Build unit economics and use Goal Seek for target margin." },
    { href: "/capstone/startup-budget", title: "Start‑up Budget", week: "Week 4", blurb: "List CapEx vs. OpEx and roll into a monthly budget." },
    { href: "/capstone/funding-strategy", title: "Funding Strategy", week: "Week 5", blurb: "Compare equity vs. debt and link interest to statements." },
    { href: "/capstone/pricing-forecast", title: "Pricing & Forecast", week: "Week 6", blurb: "Use a 2‑variable data table and chart CVP results." },
    { href: "/capstone/payroll-plan", title: "Payroll Plan", week: "Week 7", blurb: "Design wage bands and compute gross→net with tax tables." },
    { href: "/capstone/inventory-planning", title: "Inventory Planning", week: "Week 8", blurb: "Code FIFO/LIFO logic and show turnover KPIs." },
    { href: "/capstone/depreciation-assets", title: "Depreciation & Assets", week: "Week 9", blurb: "Compare SLN vs. DDB schedules and link to Balance Sheet." },
    { href: "/capstone/integrated-model", title: "Integrated Model", week: "Week 10", blurb: "Assemble linked I/S, B/S, C/F with validation checks." },
    { href: "/capstone/sensitivity-risk", title: "Sensitivity & Risk", week: "Week 11", blurb: "Build scenarios and a tornado chart to rank drivers." },
    { href: "/capstone/pitch-deck", title: "Pitch Deck", week: "Week 12", blurb: "Tell a clear, data‑driven story in 10 slides." },
    { href: "/capstone/demo-day-reflection", title: "Demo Day & Reflection", week: "Week 13", blurb: "Deliver your pitch and write a final reflection." },
  ]

  const timeline = [
    { w: "1", text: "Proposal and roles: define the problem and your solution." },
    { w: "2", text: "Market data: collect and summarize what the numbers say." },
    { w: "3", text: "Revenue: unit economics and target margin with Goal Seek." },
    { w: "4", text: "Budget: CapEx vs. OpEx with clear categories." },
    { w: "5", text: "Funding: compare equity and debt; build a loan schedule." },
    { w: "6", text: "Pricing & forecast: explore price‑volume tradeoffs and CVP." },
    { w: "7", text: "Payroll: wage bands and taxes; weekly and monthly views." },
    { w: "8", text: "Inventory: FIFO/LIFO logic; turnover and days on hand." },
    { w: "9", text: "Depreciation: SLN vs. DDB; link to statements." },
    { w: "10", text: "Integrate: 12‑month I/S, B/S, C/F with checks." },
    { w: "11", text: "Scenarios: best/base/worst + tornado chart." },
    { w: "12", text: "Pitch deck draft and feedback." },
    { w: "13", text: "Live pitch, model tour, final reflection." },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4 py-8 max-w-6xl text-center space-y-4">
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">Capstone Overview</Badge>
          <h1 className="text-3xl md:text-4xl font-bold">Investor‑Ready Capstone Project</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Over 13 weeks, you will build an investor‑ready business plan and a linked Excel workbook.
            Your model should be self‑auditing, traceable, and free of hard‑coded totals. The capstone
            shows how your skills from all 8 units connect into one story.
          </p>
          <p className="text-sm">
            See detailed expectations on <Link href="/capstone/guidelines" className="underline">Guidelines</Link> and scoring on <Link href="/capstone/rubrics" className="underline">Rubrics</Link>.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 space-y-10 max-w-6xl">
        {/* What success looks like */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>End Goal</CardTitle>
              <CardDescription>What a strong capstone delivers</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Linked Excel model with validation checks and clear formulas.</li>
                <li>Scenario dashboard that explains best, base, and worst cases.</li>
                <li>10‑slide investor pitch that tells a clear, data‑driven story.</li>
                <li>3‑minute model‑tour video that shows how sheets connect.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Timeline */}
        <section className="space-y-4">
          <div className="text-center space-y-2">
            <Badge className="bg-blue-100 text-blue-800">Timeline</Badge>
            <h2 className="text-2xl font-semibold">13 Weeks at a Glance</h2>
            <p className="text-muted-foreground">Each week builds one piece of your model and story.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {timeline.map((t) => (
              <Card key={t.w}>
                <CardHeader>
                  <CardTitle className="text-base">Week {t.w}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">{t.text}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Deliverables */}
        <section className="space-y-4">
          <div className="text-center space-y-2">
            <Badge className="bg-blue-100 text-blue-800">Deliverables</Badge>
            <h2 className="text-2xl font-semibold">Milestones & Pages</h2>
            <p className="text-muted-foreground">Open each page for instructions and submission details.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((d) => (
              <Card key={d.href}>
                <CardHeader>
                  <CardTitle className="text-base">{d.title}</CardTitle>
                  <CardDescription>{d.week}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">{d.blurb}</p>
                  <Link className="underline text-sm" href={d.href}>Open page</Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center text-sm">
            <p>
              Grading uses the capstone rubric. Review <Link href="/capstone/rubrics" className="underline">Rubrics</Link> before submitting.
            </p>
          </div>
        </section>

        {/* Expectations */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle>Quality Standards</CardTitle>
              <CardDescription>Simple practices that keep your model strong</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>No hard‑coded totals—use formulas so thinking is visible.</li>
                <li>Document sources and note key formulas with brief comments.</li>
                <li>Keep sheets clean: clear labels, units, and consistent formats.</li>
                <li>Use validation checks to catch errors early.</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
