'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Smile, AlertTriangle, Wallet } from "lucide-react"

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 2
})

export interface PaystubDeduction {
  label: string
  amount: number
  description: string
  type?: "tax" | "benefit" | "other"
}

interface PaystubPreviewProps {
  employeeName: string
  role: string
  firstJobNote: string
  payPeriodLabel: string
  grossPay: number
  employerTaxes: number
  netPay: number
  accountBalanceAfterBills: number
  emotionalSummary: {
    expectation: string
    reality: string
  }
  deductions: PaystubDeduction[]
}

export function PaystubPreview({
  employeeName,
  role,
  firstJobNote,
  payPeriodLabel,
  grossPay,
  employerTaxes,
  netPay,
  accountBalanceAfterBills,
  emotionalSummary,
  deductions
}: PaystubPreviewProps) {
  const totalDeductions = deductions.reduce((sum, deduction) => sum + deduction.amount, 0)

  return (
    <Card className="border-blue-200 shadow-lg bg-white">
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-semibold text-blue-900">TechStart Solutions Payroll</CardTitle>
            <p className="text-xs uppercase tracking-wide text-blue-700">Pay Statement</p>
          </div>
          <Badge className="bg-blue-100 text-blue-900 border border-blue-300">{payPeriodLabel}</Badge>
        </div>
        <div className="text-sm text-blue-800 grid gap-1 md:grid-cols-2">
          <p><strong>Employee:</strong> {employeeName}</p>
          <p><strong>Position:</strong> {role}</p>
          <p><strong>Status:</strong> {firstJobNote}</p>
          <p><strong>Deposit Date:</strong> {payPeriodLabel.split("·").pop()}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="overflow-x-auto border border-slate-200 rounded-lg">
          <table className="min-w-full text-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="py-2 px-3 text-left">Earnings / Deductions</th>
                <th className="py-2 px-3 text-right">Amount</th>
                <th className="py-2 px-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2 px-3 font-semibold text-slate-900">Gross Pay</td>
                <td className="py-2 px-3 text-right font-semibold text-slate-900">{currency.format(grossPay)}</td>
                <td className="py-2 px-3 text-slate-600">Hours × rate after overtime adjustments</td>
              </tr>
              {deductions.map(deduction => (
                <tr key={deduction.label} className="border-t">
                  <td className="py-2 px-3 text-slate-800">{deduction.label}</td>
                  <td className="py-2 px-3 text-right text-rose-700">-{currency.format(deduction.amount)}</td>
                  <td className="py-2 px-3 text-slate-600">{deduction.description}</td>
                </tr>
              ))}
              <tr className="border-t bg-slate-50">
                <td className="py-2 px-3 font-semibold text-slate-900">Total Deductions</td>
                <td className="py-2 px-3 text-right font-semibold text-rose-700">-{currency.format(totalDeductions)}</td>
                <td className="py-2 px-3 text-slate-600">Federal + state taxes, FICA, benefits</td>
              </tr>
              <tr className="border-t bg-emerald-50">
                <td className="py-2 px-3 font-semibold text-emerald-900">Net Pay</td>
                <td className="py-2 px-3 text-right font-semibold text-emerald-900">{currency.format(netPay)}</td>
                <td className="py-2 px-3 text-slate-600">Direct deposit amount</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-4 space-y-1">
            <p className="text-xs uppercase tracking-wide text-blue-700">Employer payroll taxes</p>
            <p className="text-xl font-bold text-blue-900">{currency.format(employerTaxes)}</p>
            <p className="text-xs text-blue-700">Sarah must hold this cash in addition to Alex's deposit.</p>
          </div>
          <div className="rounded-lg border border-indigo-100 bg-indigo-50 p-4 space-y-2">
            <div className="flex items-center gap-2 text-indigo-900 font-semibold">
              <Smile className="h-4 w-4" />
              Expectation vs Reality
            </div>
            <p className="text-xs text-indigo-900"><strong>Expectation:</strong> {emotionalSummary.expectation}</p>
            <p className="text-xs text-indigo-900"><strong>Reality:</strong> {emotionalSummary.reality}</p>
          </div>
          <div className="rounded-lg border border-rose-100 bg-rose-50 p-4 space-y-2">
            <div className="flex items-center gap-2 text-rose-900 font-semibold">
              <AlertTriangle className="h-4 w-4" />
              Cash After Bills
            </div>
            <p className="text-xs text-rose-900">
              After fixed expenses, Alex keeps <strong>{currency.format(accountBalanceAfterBills)}</strong> this period.
            </p>
            <div className="flex items-center gap-2 text-xs text-rose-900">
              <Wallet className="h-3.5 w-3.5" />
              Use this figure when advising Alex on savings goals.
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
