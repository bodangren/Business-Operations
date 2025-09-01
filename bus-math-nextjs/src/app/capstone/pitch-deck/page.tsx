"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PitchDeckPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4 py-8 max-w-5xl text-center space-y-4">
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">Capstone · Week 12</Badge>
          <h1 className="text-3xl md:text-4xl font-bold">Pitch Deck</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Create a 10‑slide investor pitch. Tell a clear story from problem to solution to
            financials. Use simple, readable visuals.
          </p>
          <p className="text-sm">For scoring details, see <Link href="/capstone/rubrics" className="underline">Rubrics</Link>.</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10 max-w-5xl space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>What to include</CardTitle>
            <CardDescription>Keep it tight and visual</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Arc: Problem → Solution → Market → Financials → Ask.</li>
              <li>Visuals that match the numbers in your model.</li>
              <li>Backup slides for questions you expect.</li>
              <li>Short note: where feedback changed your story.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Slide Guide</CardTitle>
            <CardDescription>10 slides, 10 strong messages</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-decimal list-inside space-y-1 text-sm">
              <li>Title + tagline</li>
              <li>Problem (with real example)</li>
              <li>Solution (what you do)</li>
              <li>Market (who buys, how many)</li>
              <li>Business model (how you make money)</li>
              <li>Traction or research (evidence)</li>
              <li>Financials snapshot (from your model)</li>
              <li>Competition (your edge)</li>
              <li>Team (roles and strengths)</li>
              <li>Ask (what you need next)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quality Checks</CardTitle>
            <CardDescription>Clear, honest, and on time</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Slides are readable from the back row; minimal text per slide.</li>
              <li>Every chart number matches your workbook.</li>
              <li>Rehearsed timing: 9–11 minutes, leave time for questions.</li>
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
              <li>Slide deck (PDF or link) that follows the arc above.</li>
              <li>Two backup charts you can pull up for Q&A.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
