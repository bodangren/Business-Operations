import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Users, ShieldCheck } from "lucide-react"

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-red-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              Phase 1: Tool Pressure
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">Sarah&apos;s Investor Meeting: The Three-Statement Problem</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sarah built three separate statements in Lessons 02–04. Now an investor asks:
              &ldquo;If I change one assumption, how does the whole picture shift?&rdquo;
              Without cross-sheet links, Sarah has to update every statement by hand—and risk errors.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                The Problem: Three Separate Workbooks
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-red-900">
              <p className="text-sm">
                Sarah has three tabs: <strong>Income Statement</strong>, <strong>Balance Sheet</strong>, and <strong>Cash Flow</strong>.
                Each one was built independently. When she updates revenue from $16,500 to $18,000:
              </p>
              <ul className="list-disc list-inside text-red-800 text-sm space-y-1">
                <li>Net Income changes on the Income Statement—but Retained Earnings on the Balance Sheet does not update</li>
                <li>Ending Cash on the Balance Sheet stays the same even though cash flow changed</li>
                <li>She has to recalculate and re-enter numbers on two other tabs by hand</li>
                <li>One typo and the Balance Sheet no longer balances—and nobody notices</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5" />
                The Solution: Cross-Sheet Links
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-green-900">
              <p className="text-sm">
                With cross-sheet references, one change flows everywhere:
              </p>
              <ul className="list-disc list-inside text-green-800 text-sm space-y-1">
                <li>Net Income on the Income Statement <strong>links to</strong> Retained Earnings on the Balance Sheet</li>
                <li>Ending Cash on the Balance Sheet <strong>links to</strong> the Cash Flow Statement</li>
                <li>Integrity checks flag any mismatch automatically</li>
                <li>One update, three statements, zero manual re-entry</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-800 mb-2 font-medium">Discussion Prompt (3 minutes):</p>
              <ul className="list-disc list-inside space-y-1 text-purple-800">
                <li>What happens to investor trust if Sarah&apos;s statements don&apos;t tie together?</li>
                <li>Which two numbers must flow between statements for the model to be credible?</li>
                <li>What would you check first if the Balance Sheet suddenly didn&apos;t balance?</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>

    </div>
  )
}
