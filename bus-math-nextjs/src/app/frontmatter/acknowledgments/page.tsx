'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { BookOpen, Heart, Handshake, User, Sparkles, Cpu, CalendarDays } from 'lucide-react'

export default function AcknowledgmentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <header className="border-b bg-white/70 backdrop-blur">
        <div className="container mx-auto px-4 py-6 max-w-6xl">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-100 text-emerald-800 text-lg px-4 py-2">
              <Heart className="inline-block mr-2 h-4 w-4" /> Acknowledgments & Author
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold">Gratitude, Transparency, and the Story Behind This Course</h1>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              This course reflects years of classroom practice, a full redesign for project‑based learning, and the support of open‑source communities and modern AI tools.
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 space-y-10 max-w-6xl">
        {/* Author */}
        <section>
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" /> About the Author
              </CardTitle>
              <CardDescription>Context for why this course looks and feels the way it does</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose max-w-none">
                <p className="text-lg leading-relaxed">
                  Hi, I'm <strong>Daniel Bo</strong>. I grew up in <strong>Hawaii, USA</strong> and have spent <strong>25 years teaching</strong> students how to think clearly, build confidently, and present their work with pride. Before teaching, I served as a <strong>linguist for the U.S. Department of Defense</strong>. I’ve also started <strong>three businesses</strong>—including a current <strong>AI education company in Thailand</strong> with distribution to over <strong>100 schools</strong>.
                </p>
                <p>
                  My classroom north star is simple: make learning practical, honest, and empowering. That’s why this course is project‑based, Excel‑heavy, and focused on real decisions businesses make every day.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Development Journey */}
        <section className="space-y-4">
          <div className="text-center space-y-2">
            <Badge className="bg-emerald-100 text-emerald-800">Journey</Badge>
            <h2 className="text-2xl font-semibold">How This Course Was Built</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">From paper notes to a modern, interactive textbook</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2"><BookOpen className="h-4 w-4" /> Three Years in the Classroom</CardTitle>
                <CardDescription>Moving steadily from a traditional text to PBL</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  I taught this course for <strong>three years</strong> using a standard textbook, rewriting units to be more hands‑on each semester. By the end, the textbook was mostly a reference—the work happened in teams, spreadsheets, and presentations.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2"><Sparkles className="h-4 w-4" /> Ground‑Up Redesign</CardTitle>
                <CardDescription>Project‑Based Learning + Excel automation at the core</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  I <strong>redesigned the course from scratch</strong> to center PBL, financial storytelling, and Excel automation (tables, SUMIF/SUMIFS, Goal Seek, scenarios, and more). Every unit builds toward the capstone.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2"><CalendarDays className="h-4 w-4" /> Planning Milestones</CardTitle>
                <CardDescription>From paper to pitch‑ready</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li><strong>Fall 2024:</strong> Planned the <strong>capstone</strong> (artifacts, rubrics, and timeline).</li>
                  <li><strong>Early Spring 2025:</strong> Wrote scripts and long‑form text for a paper textbook.</li>
                  <li><strong>Late Spring 2025:</strong> Planned the <strong>8 units</strong> of instruction in detail.</li>
                  <li><strong>Summer 2025:</strong> Rewrote everything as an <strong>interactive Next.js course</strong>.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2"><Cpu className="h-4 w-4" /> Interactive Rebuild</CardTitle>
                <CardDescription>From paper notes to a living web application</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  The result is what you see here: a structured, <strong>online textbook</strong> with interactive checks, realistic datasets, and a clean path from first lesson to investor‑ready capstone.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* AI Use Transparency */}
        <section className="space-y-4">
          <div className="text-center space-y-2">
            <Badge className="bg-emerald-100 text-emerald-800">Transparency</Badge>
            <h2 className="text-2xl font-semibold">How AI Helped Build This App</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">Honest credit where it’s due</p>
          </div>

          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-base">AI Assistants and Agentic Tools</CardTitle>
              <CardDescription>Used extensively for coding and refactoring</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p>
                I relied heavily on AI coding assistants during development—<strong>Google Gemini</strong>, <strong>OpenAI ChatGPT</strong>, and <strong>Anthropic Claude</strong>—along with agentic tools like <strong>Roo Cline</strong>, <strong>Claude Code</strong>, <strong>OpenAI Codex</strong>, and <strong>Gemini CLI</strong>.
              </p>
              <p className="text-sm text-emerald-900/90">
                While the <em>course</em> (curriculum design, learning sequence, and assessments) was created by me, <strong>very little of the online application code was typed directly by me</strong>. My role was to architect, review, and integrate—using AI tools to speed up implementation while keeping the vision consistent.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Thanks */}
        <section className="space-y-4">
          <div className="text-center space-y-2">
            <Badge className="bg-emerald-100 text-emerald-800">Thanks</Badge>
            <h2 className="text-2xl font-semibold">Acknowledgments</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Students and Colleagues</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To my students—thank you for your curiosity, honest feedback, and high standards. To fellow teachers and mentors—your advice shaped the pacing, tone, and clarity of this work.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Open‑Source Communities</CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="list-disc list-inside space-y-1">
                  <li>Next.js and the React ecosystem</li>
                  <li>Tailwind CSS and <code>shadcn/ui</code> (with Radix primitives)</li>
                  <li>Recharts and data‑viz libraries</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator />

        {/* Navigation */}
        <section className="text-center space-y-2">
          <p className="text-muted-foreground">Continue exploring</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link href="/frontmatter/preface" className="underline">Back to Preface</Link>
            <span>•</span>
            <Link href="/" className="underline">Home</Link>
          </div>
        </section>
      </main>
    </div>
  )
}
