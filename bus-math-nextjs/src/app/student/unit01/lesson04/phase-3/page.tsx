import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import TableStructureSimulator from "@/components/accounting/TableStructureSimulator"
import { Users, Lightbulb, Target } from "lucide-react"
import { lesson04Data, unit01Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[2]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        lesson={lesson04Data}
        unit={unit01Data} 
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Guided Practice Header */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🔧 Phase 3: Safe Rehearsal
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Building Sarah's Excel Table Structure
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Before you open Excel and build the real workbook, you'll practice key decisions 
              and patterns here in a safe environment. This rehearsal will help you avoid common 
              mistakes and understand exactly why professional structure matters for investor trust.
            </p>
          </div>
        </section>

        {/* Bridge to Phase 4 */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <div className="flex items-start gap-3">
              <Target className="h-6 w-6 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-900 mb-2">Why Rehearse Before Building?</h3>
                <p className="text-blue-800 text-sm">
                  Creating Excel Tables seems simple, but three critical decisions determine whether Sarah's 
                  ledger is investor-ready or amateur. Practice these decisions here with immediate feedback, 
                  then apply them in Phase 4 with confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Simulator */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Safe Practice: Excel Table Structure Decisions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-purple-700 mb-4">
                Practice the three key decisions you'll make when building Sarah's ledger table. 
                Each step gives immediate feedback so you learn from mistakes before they matter.
              </p>
              <TableStructureSimulator />
            </CardContent>
          </Card>
        </section>

        {/* Key Decisions Explanation */}
        <section className="max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Three Decisions That Determine Success</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-sm text-blue-800">1. Column Structure</CardTitle>
              </CardHeader>
              <CardContent className="text-xs">
                <p className="text-blue-700 mb-2">
                  Define clear, consistent columns that make data easy to read and verify.
                </p>
                <p className="font-medium text-blue-900">
                  Required: Date | Description | Account | Type | Debit | Credit
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-sm text-green-800">2. Professional Formatting</CardTitle>
              </CardHeader>
              <CardContent className="text-xs">
                <p className="text-green-700 mb-2">
                  Apply consistent currency formatting so values are immediately readable.
                </p>
                <p className="font-medium text-green-900">
                  Format: $1,234.00 with 2 decimal places, comma separators
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200">
              <CardHeader>
                <CardTitle className="text-sm text-orange-800">3. Clear Table Name</CardTitle>
              </CardHeader>
              <CardContent className="text-xs">
                <p className="text-orange-700 mb-2">
                  Name your table clearly for structured references in future formulas.
                </p>
                <p className="font-medium text-orange-900">
                  Standard: "LedgerTable" (or similar descriptive name)
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Think-Pair-Share Discussion */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk: Why Structure Matters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-purple-900 mb-2">
                Discussion Prompt (5 minutes):
              </p>
              <p className="text-purple-800 mb-4">
                After practicing table structure decisions, discuss with a partner:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">Investor Perspective:</h4>
                  <ul className="list-disc list-inside space-y-1 text-purple-800 text-sm">
                    <li>Why would an investor prefer structured columns over random formatting?</li>
                    <li>What does consistent currency formatting signal about financial controls?</li>
                    <li>How does a clear table name affect future audit work?</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">Error Prevention:</h4>
                  <ul className="list-disc list-inside space-y-1 text-purple-800 text-sm">
                    <li>What mistakes happen when columns are inconsistent?</li>
                    <li>How does proper formatting catch data entry errors early?</li>
                    <li>Why would a confusing table name break formulas later?</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Common Mistakes */}
        <section className="max-w-4xl mx-auto space-y-4">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-orange-600" />
            Common Excel Table Mistakes to Avoid
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-sm text-red-800">Mistake 1: Mixed Column Headers</CardTitle>
              </CardHeader>
              <CardContent className="text-xs">
                <div className="space-y-2">
                  <p className="text-red-700">
                    <strong>Problem:</strong> One row says "Date" next row says "Transaction Date"
                  </p>
                  <p className="text-red-900">
                    <strong>Result:</strong> Excel can't create proper table, formulas break
                  </p>
                  <p className="text-red-800">
                    <strong>Fix:</strong> Use consistent header row, single naming convention
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-sm text-red-800">Mistake 2: Skipping Headers Checkbox</CardTitle>
              </CardHeader>
              <CardContent className="text-xs">
                <div className="space-y-2">
                  <p className="text-red-700">
                    <strong>Problem:</strong> Forgetting to check "My table has headers" in Ctrl+T dialog
                  </p>
                  <p className="text-red-900">
                    <strong>Result:</strong> First data row becomes header, data lost
                  </p>
                  <p className="text-red-800">
                    <strong>Fix:</strong> ALWAYS confirm headers checkbox before creating table
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-sm text-red-800">Mistake 3: Spaces in Table Name</CardTitle>
              </CardHeader>
              <CardContent className="text-xs">
                <div className="space-y-2">
                  <p className="text-red-700">
                    <strong>Problem:</strong> Naming table "Ledger Table" with space
                  </p>
                  <p className="text-red-900">
                    <strong>Result:</strong> Structured references break, Excel errors
                  </p>
                  <p className="text-red-800">
                    <strong>Fix:</strong> Use CamelCase: "LedgerTable" not "Ledger Table"
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-sm text-red-800">Mistake 4: Inconsistent Formatting</CardTitle>
              </CardHeader>
              <CardContent className="text-xs">
                <div className="space-y-2">
                  <p className="text-red-700">
                    <strong>Problem:</strong> Some cells currency, some plain numbers
                  </p>
                  <p className="text-red-900">
                    <strong>Result:</strong> Unprofessional appearance, hard to read
                  </p>
                  <p className="text-red-800">
                    <strong>Fix:</strong> Select entire columns, apply format once
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Bridge to Phase 4 */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Ready for Phase 4: Workbook Sprint</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-900 mb-4">
                After this safe rehearsal, you'll build Sarah's real Excel ledger table. You'll know:
              </p>
              <ul className="text-green-800 space-y-2 text-sm">
                <li>✓ Exactly which columns to create and in what order</li>
                <li>✓ Which formatting to apply and why it matters</li>
                <li>✓ What to name your table for future formula use</li>
                <li>✓ Common mistakes to avoid before they happen</li>
              </ul>
              <div className="mt-4 p-3 bg-white rounded border border-green-300">
                <p className="text-sm font-medium text-green-900">
                  In Phase 4, you'll download a starter workbook, apply these decisions, 
                  and produce a professional ledger table ready for automated formulas.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter 
        lesson={lesson04Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  )
}
