import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import { Settings, Target, Workflow } from "lucide-react"
import { lesson05Data, unit01Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader
        lesson={lesson05Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🔧 Phase 3: Guided Practice — Building Sarah’s System
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Posting Validator + Dynamic Trial Balance
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Follow these steps to build a reliable control system. Your goal is to catch
              problems early and show clear, professional messages.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-4">
          <Card className="border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-800 flex items-center gap-2">
                <Workflow className="h-5 w-5" />
                Step-by-Step Build
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-800 space-y-2">
              <ol className="list-decimal list-inside space-y-1">
                <li>Create Tables: <strong>Transactions</strong>(Date, DocNo, AccountID, Debit, Credit, EarnedDate, ReceivedDate) and <strong>Accounts</strong>(AccountID, AccountName, Type).</li>
                <li>Account mapping: <code>=IFERROR(XLOOKUP([@AccountID], Accounts[AccountID], Accounts[AccountName], "Missing ID"), "Missing ID")</code></li>
                <li>Posting control: per account, compute <code>SUMIFS(Transactions[Debit], Transactions[AccountID], [@AccountID])</code> and credits; difference = should be 0.</li>
                <li>Global trial balance: compare total debits vs credits. Show <em>Balanced</em> or <em>Out of Balance</em> with color.</li>
                <li>Method switch: use a <strong>Settings</strong> Table with <em>Method</em>. Choose Cash vs Accrual to set recognition date.</li>
                <li>Data validation: block negative amounts for Debit/Credit and enforce AccountID format (e.g., ACC###).</li>
                <li>Document: add a short note next to each control explaining its purpose.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Safeguards and Gotchas
              </CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 text-sm space-y-1">
              <ul className="list-disc list-inside space-y-1">
                <li>Always use Table columns; never fixed ranges that miss new rows.</li>
                <li>Wrap lookups with IFERROR to show clear messages.</li>
                <li>Test with missing IDs, stale dates, and duplicates.</li>
                <li>Make warnings visible—do not hide with white text or filters.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-4xl mx-auto">
          <ErrorCheckingSystem />
        </section>
      </main>

      <PhaseFooter 
        lesson={lesson05Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson05Phases}
      />
    </div>
  )
}

