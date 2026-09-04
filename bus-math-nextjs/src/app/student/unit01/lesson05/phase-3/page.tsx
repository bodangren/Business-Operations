"use client"

import { useMemo, useState } from "react"
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react"

import { PhaseFooter } from "@/components/student/PhaseFooter"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { calculateAccountTotals, type LedgerRow } from "@/lib/accounting/unit01-practice"
import { lesson05Data, lesson05Phases, unit01Data } from "../lesson-data"

const currentPhase = lesson05Phases[2]

const PRACTICE_ROWS: LedgerRow[] = [
  { transactionId: "T001", account: "Cash", debit: 2_200, credit: 0 },
  { transactionId: "T001", account: "Service Revenue", debit: 0, credit: 2_200 },
  { transactionId: "T002", account: "Software Expense", debit: 52.99, credit: 0 },
  { transactionId: "T002", account: "Cash", debit: 0, credit: 52.99 },
  { transactionId: "T003", account: "Accounts Receivable", debit: 650, credit: 0 },
  { transactionId: "T003", account: "Service Revenue", debit: 0, credit: 650 },
]

const PRACTICE_ACCOUNTS = ["Cash", "Service Revenue", "Accounts Receivable"]

const formatMoney = (amount: number) =>
  amount.toLocaleString("en-US", { style: "currency", currency: "USD" })

/** Render safe SUMIF rehearsal before students edit the live workbook. */
export default function Phase3Page() {
  const [round, setRound] = useState(0)
  const [debitAnswer, setDebitAnswer] = useState("")
  const [creditAnswer, setCreditAnswer] = useState("")
  const [explanation, setExplanation] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const account = PRACTICE_ACCOUNTS[round]
  const expected = useMemo(() => calculateAccountTotals(PRACTICE_ROWS, account), [account])
  const correct =
    Math.abs(Number(debitAnswer) - expected.debits) < 0.005 &&
    Math.abs(Number(creditAnswer) - expected.credits) < 0.005

  const nextRound = () => {
    setRound((current) => (current + 1) % PRACTICE_ACCOUNTS.length)
    setDebitAnswer("")
    setCreditAnswer("")
    setExplanation("")
    setSubmitted(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader lesson={lesson05Data} unit={unit01Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="text-center space-y-4">
          <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
            Phase 3: Safe SUMIF Rehearsal
          </Badge>
          <h1 className="text-3xl font-bold text-gray-900">Trace the Rows That Each Formula Adds</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Use the sample ledger to calculate debit and credit totals for one account. This task mirrors
            the two SUMIF formulas that you will build in Excel.
          </p>
        </section>

        <section className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-6">
          <Card className="border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-900">Sample LedgerTable Rows</CardTitle>
            </CardHeader>
            <CardContent className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-blue-100">
                    <th className="p-2 text-left">ID</th>
                    <th className="p-2 text-left">Account</th>
                    <th className="p-2 text-right">Debit</th>
                    <th className="p-2 text-right">Credit</th>
                  </tr>
                </thead>
                <tbody>
                  {PRACTICE_ROWS.map((row, index) => (
                    <tr key={`${row.transactionId}-${index}`} className={row.account === account ? "bg-yellow-50" : "border-t"}>
                      <td className="p-2">{row.transactionId}</td>
                      <td className="p-2">{row.account}</td>
                      <td className="p-2 text-right">{row.debit ? formatMoney(row.debit) : "—"}</td>
                      <td className="p-2 text-right">{row.credit ? formatMoney(row.credit) : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>

          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-900">Round {round + 1}: Total {account}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="space-y-2 text-sm text-purple-900">
                <p><code>=SUMIF(LedgerTable[Account], A2, LedgerTable[Debit])</code></p>
                <p><code>=SUMIF(LedgerTable[Account], A2, LedgerTable[Credit])</code></p>
                <p className="text-purple-700">For this round, cell A2 contains <strong>{account}</strong>.</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <label className="text-sm font-medium text-gray-800">
                  Total debits
                  <input
                    type="number"
                    step="0.01"
                    value={debitAnswer}
                    onChange={(event) => setDebitAnswer(event.target.value)}
                    disabled={submitted}
                    className="mt-2 w-full rounded border border-purple-300 p-2"
                  />
                </label>
                <label className="text-sm font-medium text-gray-800">
                  Total credits
                  <input
                    type="number"
                    step="0.01"
                    value={creditAnswer}
                    onChange={(event) => setCreditAnswer(event.target.value)}
                    disabled={submitted}
                    className="mt-2 w-full rounded border border-purple-300 p-2"
                  />
                </label>
              </div>

              <label className="block text-sm font-medium text-gray-800">
                Explain which rows the formula includes.
                <textarea
                  value={explanation}
                  onChange={(event) => setExplanation(event.target.value)}
                  disabled={submitted}
                  rows={3}
                  className="mt-2 w-full rounded border border-purple-300 p-2"
                  placeholder={`The formula includes rows where Account equals ${account}...`}
                />
              </label>

              {!submitted ? (
                <Button onClick={() => setSubmitted(true)} disabled={!debitAnswer || !creditAnswer || !explanation.trim()}>
                  Check Totals
                </Button>
              ) : (
                <div className={`rounded-lg border-2 p-4 ${correct ? "border-green-300 bg-green-50" : "border-red-300 bg-red-50"}`}>
                  <div className="flex items-start gap-3">
                    {correct ? <CheckCircle2 className="text-green-700" /> : <XCircle className="text-red-700" />}
                    <div>
                      <p className={`font-bold ${correct ? "text-green-900" : "text-red-900"}`}>
                        {correct ? "Correct totals" : "Check the highlighted rows"}
                      </p>
                      <p className="text-sm mt-1">
                        Expected debit total: {formatMoney(expected.debits)}. Expected credit total: {formatMoney(expected.credits)}.
                      </p>
                      <p className="text-sm mt-2">
                        SUMIF checks the Account column for {account}. It adds only the matching values from the Debit or Credit column.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {submitted && (
                <Button onClick={nextRound} variant="outline">
                  Next Account <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              )}
            </CardContent>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader><CardTitle className="text-indigo-900">Bridge to Phase 4</CardTitle></CardHeader>
            <CardContent className="text-indigo-900 text-sm">
              In Excel, the account name supplies the criterion. The two SUMIF formulas return the debit and credit totals.
              The trial-balance formulas then convert those totals into one net debit balance or one net credit balance.
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter lesson={lesson05Data} unit={unit01Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}
