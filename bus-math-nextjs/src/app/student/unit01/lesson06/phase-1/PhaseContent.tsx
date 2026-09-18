import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Clock, TrendingUp, Users } from "lucide-react"

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-red-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              ⏰ Phase 1: Hook — 2 Minutes to Prove Reliability
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">
              From Working Ledger to Investor-Ready Summary
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Sarah Chen sits down with a potential investor. Her ledger is accurate and her error
              checks catch mistakes, but the presentation is messy. The investor asks: <strong>"How do you know
              your books are clean?"</strong> Sarah has 4 minutes to explain the evidence and its limits.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto grid gap-6">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                The Pressure Test
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-red-900 space-y-3">
              <p>
                Sarah needs to show that her accounting system is trustworthy. The investor doesn't want to
                audit 50 transactions—they want to see:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>A clear status</strong> — Are the books balanced or not?</li>
                <li><strong>Visible safeguards</strong> — What error checks are in place?</li>
                <li><strong>Plain language</strong> — What does this mean for the business?</li>
                <li><strong>Next steps</strong> — What action should be taken?</li>
              </ul>
              <div className="bg-white border border-red-200 rounded p-3 mt-3">
                <p className="font-semibold text-red-800">The Problem</p>
                <p className="mt-1">
                  Sarah's current workbook has all the right formulas, but there's no summary layer.
                  She has to scroll through multiple sheets to answer basic questions. Under time pressure,
                  this looks disorganized and raises doubts.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Before vs After
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-amber-900 space-y-2">
              <div className="bg-white border border-amber-200 rounded p-3 space-y-2">
                <p className="font-semibold">Before: Scattered, Technical</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Debits = Credits hidden in Trial Balance sheet</li>
                  <li>Error checks only visible on specific tabs</li>
                  <li>Formulas exposed but status unclear</li>
                  <li>No single view for quick assessment</li>
                </ul>
              </div>
              <div className="bg-white border border-amber-200 rounded p-3 space-y-2">
                <p className="font-semibold">After: Clear, Investor-Ready</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Dedicated Summary sheet with key metrics</li>
                  <li>Visual status indicators (green/red/yellow)</li>
                  <li>Plain language explanations</li>
                  <li>Evidence chain visible in one place</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Why This Matters
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-blue-900">
              <p>
                Professional accounting systems don't just calculate correctly—they communicate
                reliability. Investors, auditors, and stakeholders need to trust your books without
                digging into the details. Today you'll build that trust signal.
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Think-Pair-Share
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900 text-sm space-y-2">
              <p>
                With a partner, discuss: What three pieces of information would you put on a one-page
                summary to prove your ledger is trustworthy?
              </p>
              <p className="mt-2">
                Be ready to share one idea with the class.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>

    </div>
  )
}
