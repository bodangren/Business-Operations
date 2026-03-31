'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, FileSpreadsheet, Download, Target, ClipboardList, CheckCircle2 } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

export default function Lesson08Page() {
  const groups = [
    {
      id: "g1",
      name: "Food Truck Venture",
      datasetUrl: "/resources/unit01-group1-foodtruck.csv",
      workbookUrl: "/resources/unit01-group1-starter.xlsx"
    },
    {
      id: "g2",
      name: "E-commerce Business",
      datasetUrl: "/resources/unit01-group2-ecommerce.csv",
      workbookUrl: "/resources/unit01-group2-starter.xlsx"
    },
    {
      id: "g3",
      name: "Tutoring Service",
      datasetUrl: "/resources/unit01-group3-tutoring.csv",
      workbookUrl: "/resources/unit01-group3-starter.xlsx"
    },
    {
      id: "g4",
      name: "Custom Startup",
      datasetUrl: "/resources/unit01-group4-custom.csv",
      workbookUrl: "/resources/unit01-group4-starter.xlsx"
    }
  ]

  const milestone1Criteria = [
    "Team has downloaded and renamed the correct group workbook",
    "Transactions sheet has at least 10 transactions from group dataset entered",
    "Trial Balance sheet shows correct SUMIF formulas for debits and credits",
    "Team has drafted one clear claim about the business's financial state",
    "Team has assigned roles for the rest of the project"
  ]

  const reflectionPrompts = [
    {
      id: 'milestone1-easiest',
      category: 'persistence' as const,
      prompt: 'What part of the workbook setup felt easiest today?',
      placeholder: 'Describe what went smoothly and why...'
    },
    {
      id: 'milestone1-hardest',
      category: 'adaptability' as const,
      prompt: 'What part of the workbook setup felt hardest, and how will your team address it tomorrow?',
      placeholder: 'Explain the challenge and your plan to overcome it...'
    },
    {
      id: 'milestone1-remember',
      category: 'courage' as const,
      prompt: 'What is one thing your team must remember from Lesson 07\'s rehearsal as you continue building?',
      placeholder: 'Reflect on the key takeaway from the rehearsal...'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <main className="container mx-auto px-4 py-12 space-y-10">
        <section className="text-center space-y-4">
          <Badge className="bg-blue-100 text-blue-800 text-xl px-6 py-3">🚀 Unit 1 • Lesson 08</Badge>
          <h1 className="text-4xl font-extrabold text-gray-900">
            Project Milestone 1: Kickoff & Workbook Setup
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Time to take what you rehearsed in Lesson 07 and apply it to your own team's startup!
          </p>
        </section>

        <section className="space-y-6">
          <Card className="border-blue-200 bg-white shadow-xl">
            <CardHeader className="text-center pb-2">
              <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-10 h-10 text-blue-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-blue-800">
                Your Group & Assigned Files
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-lg text-gray-700 text-center">
                Find your group below and download <strong>only your assigned files</strong>.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {groups.map((group) => (
                  <Card key={group.id} className="border-slate-200 bg-slate-50">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold text-slate-800">
                        {group.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <a
                        href={group.datasetUrl}
                        download
                        className="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white px-3 py-2 rounded-md font-medium"
                      >
                        <Download className="w-4 h-4" />
                        Download Group Dataset
                      </a>
                      <a
                        href={group.workbookUrl}
                        download
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md font-medium"
                      >
                        <FileSpreadsheet className="w-4 h-4" />
                        Download Starter Workbook
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <Card className="border-indigo-200 bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-indigo-800 flex items-center gap-2">
                <FileSpreadsheet className="w-6 h-6" />
                Workbook Structure Reminder
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-gray-700">
                Your starter workbook uses the <strong>exact same structure</strong> as the shared rehearsal workbook from Lesson 07!
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-blue-800">Sheets You Must Keep</CardTitle>
                  </CardHeader>
                  <CardContent className="text-blue-900 space-y-1">
                    <p>• Transactions</p>
                    <p>• Trial Balance</p>
                    <p>• Error Checks</p>
                    <p>• Executive Summary</p>
                  </CardContent>
                </Card>
                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-purple-800">Naming Convention</CardTitle>
                  </CardHeader>
                  <CardContent className="text-purple-900 space-y-1">
                    <p>Rename your workbook immediately:</p>
                    <p className="font-mono text-sm">Unit01_Group[X]_SmartLedger.xlsx</p>
                    <p className="text-sm">Example: Unit01_Group1_SmartLedger.xlsx</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <Card className="border-green-200 bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-800 flex items-center gap-2">
                <Target className="w-6 h-6" />
                Milestone 1 Acceptance Criteria
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg text-gray-700">
                Before the end of class today, your team should complete all of the following:
              </p>
              <ul className="space-y-3">
                {milestone1Criteria.map((criterion, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-800">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-lg">{criterion}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <Card className="border-yellow-200 bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-yellow-800 flex items-center gap-2">
                <ClipboardList className="w-6 h-6" />
                Today's Workflow (90 Minutes)
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4 text-gray-800">
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="font-semibold text-yellow-900 mb-1">0–15 minutes: Get set up</p>
                  <p className="text-yellow-800">
                    Find your group, download your files, rename your workbook, and assign team roles.
                  </p>
                </div>
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <p className="font-semibold text-orange-900 mb-1">15–60 minutes: Enter transactions</p>
                  <p className="text-orange-800">
                    Enter your group's first 10 transactions and verify the Trial Balance sheet is working correctly.
                  </p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="font-semibold text-green-900 mb-1">60–90 minutes: Draft first claim & reflect</p>
                  <p className="text-green-800">
                    Write your team's first draft claim about the business's financial state and complete the reflection below.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-6">
          <Card className="border-indigo-200 bg-white shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-indigo-800">
                End-of-Lesson Reflection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ReflectionJournal
                prompts={reflectionPrompts}
                unitTitle="Milestone 1 Reflection"
              />
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
