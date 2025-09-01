"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ConceptProposalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4 py-8 max-w-5xl text-center space-y-4">
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">Capstone · Week 1</Badge>
          <h1 className="text-3xl md:text-4xl font-bold">Concept Proposal</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            State the problem you care about, your solution, and roles. Keep it concrete and
            readable. Aim for a one‑page proposal plus a simple project timeline.
          </p>
          <p className="text-sm">Grading uses the capstone rubric. See <Link href="/capstone/rubrics" className="underline">Rubrics</Link>.</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10 max-w-5xl space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>What to include</CardTitle>
            <CardDescription>Clear and simple is best</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Problem: one paragraph with a real example from your community.</li>
              <li>Solution: what you will build or offer and why it helps.</li>
              <li>Team: roles tied to strengths (modeler, designer, analyst, etc.).</li>
              <li>Timeline: key steps you will take in Weeks 1–4.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Excel Requirements</CardTitle>
            <CardDescription>Simple timeline using spreadsheet skills</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Create a basic task table: task, owner, start date, end date, status.</li>
              <li>Add a conditional‑formatting bar or simple Gantt (fill cells between start and end).</li>
              <li>Use data validation (drop‑down) for status values (e.g., Not started, In progress, Done).</li>
              <li>Auto‑count tasks by status with <code>COUNTIF</code> to show progress.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quality Checks</CardTitle>
            <CardDescription>How to keep your plan strong</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Problem and solution match. The solution clearly solves the problem stated.</li>
              <li>Roles are balanced and tied to strengths (who will do modeling, research, design).</li>
              <li>Timeline is realistic and covers Week 1–4 steps.</li>
              <li>Sources cited for any outside facts or data you include.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Common Pitfalls</CardTitle>
            <CardDescription>Avoid these early mistakes</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Vague problem statement without a real example.</li>
              <li>Solution that is too broad or tries to do everything at once.</li>
              <li>No clear owner for tasks; timeline without dates.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Submission</CardTitle>
            <CardDescription>What to turn in</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>One‑page proposal (PDF or doc) with problem, solution, team, and roles.</li>
              <li>Excel file with your simple timeline and status summary.</li>
              <li>Links to any sources used.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
