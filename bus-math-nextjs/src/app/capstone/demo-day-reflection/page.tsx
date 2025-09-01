"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DemoDayReflectionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4 py-8 max-w-5xl text-center space-y-4">
          <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">Capstone · Week 13</Badge>
          <h1 className="text-3xl md:text-4xl font-bold">Demo Day & Final Reflection</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Deliver your live pitch and a short model‑tour video. Then write a thoughtful reflection
            on how you grew in Courage, Adaptability, and Persistence (CAP).
          </p>
          <p className="text-sm">Final scoring follows the capstone <Link href="/capstone/rubrics" className="underline">Rubrics</Link>.</p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-10 max-w-5xl space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>What to submit</CardTitle>
            <CardDescription>Professional and reflective</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Live pitch delivered in class (with Q&A).</li>
              <li>Model‑tour video (≤ 3 minutes) showing key linkages.</li>
              <li>500‑word reflection citing specific challenges and fixes.</li>
              <li>Short note: the single most important lesson you learned.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Model‑Tour Video Guide</CardTitle>
            <CardDescription>3 minutes, clear linkages</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Show the inputs sheet; change one input and watch results flow.</li>
              <li>Open I/S, B/S, C/F to show the link between net income and cash.</li>
              <li>Display validation checks turning green when balanced.</li>
              <li>Speak simply and keep a steady pace; rehearse once.</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Reflection Prompt (CAP)</CardTitle>
            <CardDescription>Courage, Adaptability, Persistence</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Describe one moment you wanted to quit. What kept you going?</li>
              <li>Which feedback changed your model the most? What did you revise?</li>
              <li>What skill do you now have that you didn’t before? Evidence?</li>
              <li>What would you tackle differently if you had two more weeks?</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
