'use client'

import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, FileSpreadsheet, CheckSquare, ArrowRight } from "lucide-react"
import { lesson07Data, unit02Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[1]

const workbookSheets = [
  {
    name: "Data",
    purpose: "Raw transaction and adjustment data for TechStart's month-end close",
    proves: "The source numbers that every other sheet depends on"
  },
  {
    name: "Adjustments",
    purpose: "All adjusting entries—accruals, deferrals, depreciation, supplies used",
    proves: "That every recurring month-end adjustment has been identified and recorded"
  },
  {
    name: "Trial Balance",
    purpose: "Unadjusted and adjusted trial balance with debit/credit verification",
    proves: "That debits equal credits after adjustments (accounting integrity)"
  },
  {
    name: "Financial Statements",
    purpose: "Income statement, statement of retained earnings, and balance sheet",
    proves: "That the adjusted numbers produce a complete and accurate financial picture"
  },
  {
    name: "Closing Entries",
    purpose: "Revenue, expense, and dividend closing entries with Income Summary",
    proves: "That temporary accounts are reset to zero for the next period"
  },
  {
    name: "Recommendation",
    purpose: "Final recommendation statement with supporting evidence and risk acknowledgment",
    proves: "That the workbook tells a clear business story backed by numbers"
  },
  {
    name: "Assumptions",
    purpose: "Date/version, scenario drivers, and notes about data sources",
    proves: "That the workbook is auditable—someone else can understand how it was built"
  }
]

const definitionOfDone = [
  "All adjusting entries are recorded and labeled with a clear reason",
  "Trial balance debits equal credits after adjustments",
  "Financial statements pull from the adjusted trial balance (no hard-coded numbers)",
  "Closing entries zero out all temporary accounts correctly",
  "Post-closing trial balance contains only permanent accounts",
  "Recommendation statement cites specific workbook numbers as evidence",
  "At least one risk or limitation is acknowledged",
  "Assumptions sheet includes date, version, and data source notes",
  "No broken formulas or #REF! errors anywhere in the workbook"
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <PhaseHeader unit={unit02Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">Phase 2: Shared Artifact Orientation</Badge>
            <div className="max-w-4xl mx-auto space-y-8">

              <Alert className="border-blue-300 bg-blue-50 text-left">
                <AlertCircle className="h-4 w-4 text-blue-700" />
                <AlertTitle className="text-blue-900">Shared Data Notice</AlertTitle>
                <AlertDescription className="text-blue-800">
                  Every group in this class is working with the <strong>same teacher-provided dataset</strong>. The workbook you download is identical to the teacher's reference workbook. This lets the whole class compare reasoning, evidence chains, and workbook quality directly.
                </AlertDescription>
              </Alert>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2">
                    <FileSpreadsheet className="w-5 h-5" />
                    Download the Shared Rehearsal Workbook
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-blue-900 space-y-4">
                  <p>
                    Download the rehearsal workbook before continuing. This is the same data every group will use today.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="/resources/unit02-lesson07-teacher.xlsx" download className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                      <FileSpreadsheet className="w-4 h-4" />
                      Download: unit02-lesson07-teacher.xlsx
                    </a>
                    <a href="/resources/unit02-lesson07-tutorial.md" className="inline-flex items-center gap-2 px-4 py-2 border border-blue-300 text-blue-700 rounded-md hover:bg-blue-100 transition-colors">
                      View Tutorial Guide
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Workbook Map: What Each Sheet Proves</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none text-blue-900">
                  <p>
                    A strong project workbook does not just contain numbers—it builds an <strong>evidence chain</strong>. Each sheet has a job. It must prove something that supports the final recommendation. Below is the map for today's rehearsal workbook. Your project workbook in Lessons 08–10 will follow the same structure.
                  </p>
                  <div className="space-y-4 mt-6">
                    {workbookSheets.map((sheet, i) => (
                      <div key={sheet.name} className="p-4 border border-blue-200 rounded-lg bg-blue-50">
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {i + 1}
                          </span>
                          <div>
                            <h4 className="font-semibold text-blue-900">{sheet.name}</h4>
                            <p className="text-sm text-blue-700 mt-1">{sheet.purpose}</p>
                            <p className="text-sm text-blue-600 mt-1 font-medium">Proves: {sheet.proves}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center gap-2">
                    <CheckSquare className="w-5 h-5" />
                    Definition of Done: Rehearsal Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-blue-900">
                  <p className="mb-4">
                    This is the quality standard. Every project workbook in Lessons 08–10 must meet these criteria. Today you will check the shared workbook against this list.
                  </p>
                  <ul className="list-none space-y-2">
                    {definitionOfDone.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-5 h-5 border-2 border-blue-400 rounded mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-green-900 flex items-center gap-2">
                    <ArrowRight className="w-5 h-5" />
                    What Success Looks Like Today
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-green-900 space-y-3">
                  <p>By the end of this rehearsal lesson, you should be able to:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Name each major sheet in the workbook and explain what it proves</li>
                    <li>Trace the recommendation on the Recommendation sheet back to specific numbers in Adjustments and Financial Statements</li>
                    <li>Identify at least one weakness or risk in the shared workbook's evidence chain</li>
                    <li>List the structures your team must recreate independently in the real project</li>
                  </ul>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>
      </main>

      <PhaseFooter unit={unit02Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
