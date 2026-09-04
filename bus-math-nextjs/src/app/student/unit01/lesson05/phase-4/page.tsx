import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Download, ShieldCheck } from "lucide-react"
import { withBasePath } from "@/lib/paths"
import { lesson05Data, lesson05Phases, unit01Data } from "../lesson-data"

const currentPhase = lesson05Phases[3]

const trialBalanceFormulas = [
  ["Total Debits", "=SUMIF(LedgerTable[Account],A2,LedgerTable[Debit])"],
  ["Total Credits", "=SUMIF(LedgerTable[Account],A2,LedgerTable[Credit])"],
  ["Debit Balance", "=MAX(B2-C2,0)"],
  ["Credit Balance", "=MAX(C2-B2,0)"],
]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader lesson={lesson05Data} unit={unit01Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="text-center space-y-4">
          <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">Phase 4: Workbook Sprint</Badge>
          <h1 className="text-3xl font-bold text-gray-900">Build the Trial Balance and Error Checks</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Use SUMIF and SUMIFS formulas to summarize the ledger. Then build four controls that identify records for review.
          </p>
        </section>

        <section className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2"><Download className="h-5 w-5" />Starting Workbook</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-blue-900">
              <p>Open your Lesson 04 workbook. If you need a clean copy, use this file. It contains LedgerTable and the two template sheets.</p>
              <a href={withBasePath("/resources/unit01-lesson05-student.xlsx")} download="unit01-lesson05-student.xlsx" className="inline-flex">
                <Button className="bg-blue-600 hover:bg-blue-700">Download Lesson 05 Workbook</Button>
              </a>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto space-y-6">
          <Card>
            <CardHeader><CardTitle>1. Add a transaction-level control</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-gray-800">
              <p>Add a column named <strong>Entry Difference</strong> to LedgerTable. Enter this calculated-column formula:</p>
              <p className="font-mono text-sm bg-slate-100 rounded p-3 overflow-x-auto">
                =SUMIFS(LedgerTable[Debit],LedgerTable[Transaction ID],[@[Transaction ID]])-SUMIFS(LedgerTable[Credit],LedgerTable[Transaction ID],[@[Transaction ID]])
              </p>
              <p>Each transaction ID must have an Entry Difference of 0. A zero does not prove that the accounts are correct. It only confirms that the entry has equal debit and credit amounts.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>2. Complete the Trial Balance sheet</CardTitle></CardHeader>
            <CardContent className="space-y-4 text-gray-800">
              <p>Use these five columns: Account, Total Debits, Total Credits, Debit Balance, and Credit Balance.</p>
              <div className="grid md:grid-cols-2 gap-3">
                {trialBalanceFormulas.map(([label, formula]) => (
                  <div key={label} className="border rounded p-3">
                    <p className="font-semibold">{label}</p>
                    <p className="font-mono text-xs mt-1 break-all">{formula}</p>
                  </div>
                ))}
              </div>
              <p>Copy the formulas down. Sum the Debit Balance and Credit Balance columns. Their totals must match.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle>3. Complete the Error Checks sheet</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-gray-800">
              <p>Build these four controls. Give each control a value and a status of Pass or Review.</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Global debit-credit difference</li>
                <li>Rows that belong to an unbalanced transaction ID</li>
                <li>Blank account cells</li>
                <li>Rows that contain both a debit and a credit, or neither amount</li>
              </ul>
              <p>Use conditional formatting. Show Pass in green and Review in red.</p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader><CardTitle className="text-green-900 flex items-center gap-2"><CheckCircle2 className="h-5 w-5" />Definition of Done</CardTitle></CardHeader>
            <CardContent className="text-green-900">
              <ul className="list-disc list-inside space-y-2">
                <li>The workbook has Transactions, Trial Balance, and Error Checks sheets.</li>
                <li>All Trial Balance account totals use SUMIF formulas.</li>
                <li>Total debit balances equal total credit balances.</li>
                <li>All four controls show Pass for the clean data.</li>
                <li>You tested one changed amount and saw at least one control change to Review.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="pt-6 flex gap-3 text-amber-900">
              <ShieldCheck className="h-6 w-6 flex-shrink-0" />
              <p>A balanced trial balance is an arithmetic check. It does not detect every wrong account, omitted transaction, or duplicated balanced entry.</p>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter lesson={lesson05Data} unit={unit01Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}
