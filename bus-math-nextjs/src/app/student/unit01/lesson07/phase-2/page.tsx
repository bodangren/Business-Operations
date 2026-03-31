'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson07Data, unit01Data, lesson07Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ClipboardList, FileSpreadsheet, Download, Target } from "lucide-react"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"

const currentPhase = lesson07Phases[1]

const vocabSentences = [
  { id: 'v1', text: 'The {blank} shows where each number comes from and what it proves.', answer: 'evidence chain', hint: 'Links recommendation to supporting data' },
  { id: 'v2', text: 'Every project workbook must have a clear {blank} that lists what success looks like.', answer: 'Definition of Done', hint: 'Quality checklist' },
  { id: 'v3', text: 'Today we use {blank} data so everyone can compare the same quality bar.', answer: 'shared', hint: 'Same for teacher and all students' },
  { id: 'v4', text: 'Each {blank} in the workbook has a specific job in the evidence chain.', answer: 'sheet', hint: 'Tab in Excel' },
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <PhaseHeader unit={unit01Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-emerald-100 text-emerald-800 text-lg px-4 py-2">📚 Phase 2: Shared Artifact Orientation</Badge>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <Card className="border-emerald-200 bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <FileSpreadsheet className="w-6 h-6 text-emerald-700" /> Shared Workbook Map
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-left">
                  <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-lg">
                    <p className="text-emerald-900 leading-relaxed mb-4">
                      Download the shared rehearsal workbook below. This is exactly the structure your group will use in the real project—just with different data!
                    </p>
                    <a
                      href="/resources/unit01-rehearsal-workbook.xlsx"
                      download
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-semibold"
                    >
                      <Download className="w-5 h-5" />
                      Download Shared Rehearsal Workbook
                    </a>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="border-blue-200 bg-blue-50">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-blue-800">Sheet: Transactions</CardTitle>
                      </CardHeader>
                      <CardContent className="text-blue-900">
                        <p><strong>Job:</strong> Records every business event with debits and credits</p>
                        <p><strong>Proves:</strong> All transactions are captured consistently</p>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-200 bg-purple-50">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-purple-800">Sheet: Trial Balance</CardTitle>
                      </CardHeader>
                      <CardContent className="text-purple-900">
                        <p><strong>Job:</strong> Sums debits and credits by account</p>
                        <p><strong>Proves:</strong> The ledger is mathematically balanced</p>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200 bg-orange-50">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-orange-800">Sheet: Error Checks</CardTitle>
                      </CardHeader>
                      <CardContent className="text-orange-900">
                        <p><strong>Job:</strong> Flags invalid entries and imbalances</p>
                        <p><strong>Proves:</strong> The workbook catches mistakes automatically</p>
                      </CardContent>
                    </Card>

                    <Card className="border-pink-200 bg-pink-50">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold text-pink-800">Sheet: Executive Summary</CardTitle>
                      </CardHeader>
                      <CardContent className="text-pink-900">
                        <p><strong>Job:</strong> Shows key numbers and recommendation clearly</p>
                        <p><strong>Proves:</strong> The business story is easy for investors to understand</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-yellow-900 flex items-center gap-2">
                    <Target className="w-5 h-5" /> Definition of Done
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-yellow-900">
                  <ul className="list-disc list-inside space-y-2">
                    <li>All four sheets are complete and linked correctly</li>
                    <li>Trial balance shows "Balanced" when debits = credits</li>
                    <li>Error Checks sheet flags at least 3 types of issues</li>
                    <li>Executive Summary has a clear recommendation and 3 cited numbers</li>
                    <li>One risk or limitation is clearly stated</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-indigo-900">Vocabulary Check</CardTitle>
                </CardHeader>
                <CardContent>
                  <FillInTheBlank 
                    sentences={vocabSentences as any}
                    title="Rehearsal Vocabulary"
                    description="Fill in the blanks to reinforce key terms for the project."
                    showWordList={true}
                    randomizeWordOrder={true}
                    showHints={true}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit01Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
