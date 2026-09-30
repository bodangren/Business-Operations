'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, ArrowRight, TrendingUp } from "lucide-react"

export default function Phase6Content() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-fuchsia-100">

      <div className="space-y-8">
        <section className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-200 text-indigo-900 rounded-full text-sm font-medium">
            <Lightbulb className="h-4 w-4" />
            Reflection & Next Moves
          </div>
          <h2 className="text-4xl font-bold text-slate-900">Own the Paystub Story</h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto">
            Today you decoded a real paystub, built tax-table references for every filing status, and practiced filling the
            deduction columns with and without hints. Those skills power Sarah's confidence—and Alex's trust—when payroll
            hits the bank. Take a minute to lock in what worked and what still feels shaky.
          </p>
        </section>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Carry this into Lesson 03
            </CardTitle>
          </CardHeader>
          <CardContent className="text-green-900 text-sm space-y-2">
            <ul className="list-disc list-inside space-y-1">
              <li>Keep your tax-table references handy—we will embed them into an Excel dropdown + XLOOKUP combo.</li>
              <li>Turn the deduction checklist into conditional formatting rules so errors glow red.</li>
              <li>Document the employer-cost math so Sarah can see cash needs two pay periods ahead.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-900 flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              Next Lesson Preview
            </CardTitle>
          </CardHeader>
          <CardContent className="text-amber-900 text-sm space-y-2">
            <p>
              Lesson 03 focuses on validation and error-checking systems. Everything you learned today will feed those
              checks: we will build data validation for filing status, SUMIFS cross-checks for net pay, and conditional
              formatting that shouts when FICA or state tax is missing.
            </p>
          </CardContent>
        </Card>

      </div>

    </div>
  )
}
