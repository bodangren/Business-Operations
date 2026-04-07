import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileSpreadsheet, CheckCircle } from "lucide-react"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson07Data, unit05Data, lesson07Phases } from "../lesson-data"

const currentPhase = lesson07Phases[1]

const workbookStructure = [
  { sheet: "Employee_Data", purpose: "Raw employee hours, rates, and tax info", evidence: "Input zone - validates hours, rates, dates" },
  { sheet: "Payroll_Calculations", purpose: "Gross pay, deductions, net pay per employee", evidence: "Core calculations - links to Employee_Data" },
  { sheet: "Tax_Tables", purpose: "Federal and state tax brackets", evidence: "Lookup source for deductions" },
  { sheet: "Bank_Reconciliation", purpose: "Compare payroll register to bank statement", evidence: "Tie-out proof - differences explained" },
  { sheet: "Dashboard", purpose: "Executive summary with KPI thresholds", evidence: "Decision-ready output - recommendation + risk" }
]

const vocabSentences = [
  {
    id: 'u05l07-v1',
    text: 'The {blank} shows what the workbook is supposed to prove to stakeholders.',
    answer: 'evidence chain',
    hint: 'Link from calculations to recommendation'
  },
  {
    id: 'u05l07-v2',
    text: 'When payroll register and bank statement disagree, we perform {blank} to explain the difference.',
    answer: 'reconciliation',
    hint: 'Tie-out process'
  },
  {
    id: 'u05l07-v3',
    text: 'The {blank} sheet provides a quick decision-ready summary for stakeholders.',
    answer: 'Dashboard',
    hint: 'Executive summary sheet'
  },
  {
    id: 'u05l07-v4',
    text: 'Each sheet should have a clear purpose and {blank} that proves its calculations are correct.',
    answer: 'evidence',
    hint: 'What the sheet proves'
  },
  {
    id: 'u05l07-v5',
    text: 'The {blank} defines what a complete, submission-ready project workbook looks like.',
    answer: 'Definition of Done',
    hint: 'Quality checklist'
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="max-w-full whitespace-normal text-center leading-tight bg-green-100 text-green-800 text-lg px-4 py-2 sm:w-fit sm:whitespace-nowrap">Phase 2: Shared Artifact Orientation</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Your Shared Payroll Workbook</h1>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Download the shared teacher workbook. Every group uses this same file today so we can compare
              audit findings. Your job is to understand the structure, then trace evidence from calculations to recommendation.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-green-200 bg-white">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download: Shared Workbook
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-4">
              <p>
                <a href="/resources/unit05-lesson07-student.xlsx" download className="underline text-green-700 font-semibold">
                  Download: unit05-lesson07-student.xlsx
                </a>
              </p>
              <p className="text-sm">
                This is the same workbook every group uses today. The teacher workbook has complete solutions.
                Focus on understanding the structure and evidence chain, not just matching answers.
              </p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5" />
                Workbook Map: What Each Sheet Proves
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-green-200">
                      <th className="text-left py-2 pr-4">Sheet</th>
                      <th className="text-left py-2 pr-4">Purpose</th>
                      <th className="text-left py-2">Evidence It Provides</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workbookStructure.map((row) => (
                      <tr key={row.sheet} className="border-b border-green-100">
                        <td className="py-2 pr-4 font-medium">{row.sheet}</td>
                        <td className="py-2 pr-4">{row.purpose}</td>
                        <td className="py-2">{row.evidence}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Definition of Done
              </CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900">
              <p className="mb-3 font-medium">A complete, submission-ready project workbook includes:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Payroll calculations accurate for all 10 employees</li>
                <li>Reconciliation tie‑outs pass (register = bank within $0.01)</li>
                <li>Executive summary states one clear recommendation with supporting evidence</li>
                <li>Validation rules catch invalid inputs (negative hours, rates greater than 100%, stale dates)</li>
                <li>Charts bind to Tables using structured references</li>
                <li>Clear error messages on lookup failures (IFNA/IFERROR)</li>
              </ul>
            </CardContent>
          </Card>

          <FillInTheBlank 
            sentences={vocabSentences}
            title="Vocabulary for Workbook Audit"
            description="Lock in key terms for today's rehearsal."
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />
        </section>
      </main>

      <PhaseFooter unit={unit05Data} lesson={lesson07Data} phase={currentPhase} phases={lesson07Phases} />
    </div>
  )
}
