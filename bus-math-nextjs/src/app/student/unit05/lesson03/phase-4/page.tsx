import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, ClipboardCheck, Download, Keyboard, ListChecks, Target } from "lucide-react"
import { lesson03Data, lesson03Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson03Phases[3] // Independent Practice phase

export default function Phase4Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit05Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />

      <div className="space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-blue-900 mb-3">
            Independent Build: Mini Tax Table Calculator
          </h2>
          <p className="text-lg leading-relaxed">
            You now have one class period to create a clean worksheet that lets Sarah choose the right tax table, 
            enter a taxable income, and display the yearly tax. Keep it polished enough to screenshot and send to a client.
          </p>
        </div>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center gap-2">
              <Target className="h-5 w-5" />
              Deliverable by the Bell
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-green-900">
            <p>By the end of this phase you should have:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>A selector (drop-down) that lists the approved tax tables.</li>
              <li>A taxable income input with accompanying math shown nearby.</li>
              <li>A lookup output that clearly labels the yearly tax being displayed.</li>
              <li>A short note that explains which tax year and filing status the data covers.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <Keyboard className="h-5 w-5" />
              Step-by-Step Build Sequence
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-blue-900">
            <div className="flex items-start gap-3">
              <Badge className="bg-blue-100 text-blue-800">1</Badge>
              <div>
                <p className="font-semibold">Create the layout</p>
                <p className="text-sm">Row 2 = title. Row 4 = selector. Row 6 = taxable income (include calculation), Row 7 = yearly tax output.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="bg-blue-100 text-blue-800">2</Badge>
              <div>
                <p className="font-semibold">Build the bracket table</p>
                <p className="text-sm">Columns A–D = lower bound, upper bound, base tax, % over lower. Copy numbers from the IRS chart exactly and write the row formula <code>=MAX(TaxableIncome - Lower,0)*Rate + Base</code>.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="bg-blue-100 text-blue-800">3</Badge>
              <div>
                <p className="font-semibold">Name your tax table ranges</p>
                <p className="text-sm">Highlight each Lesson 2 table → Formulas → Define Name. Keep names simple, e.g., <span className="font-mono">Fed_Single_2024</span>.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="bg-blue-100 text-blue-800">4</Badge>
              <div>
                <p className="font-semibold">Build the selector</p>
                <p className="text-sm">Use data validation to tie cell B4 to your named list of tables. Add an info icon or note describing each option.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Badge className="bg-blue-100 text-blue-800">5</Badge>
              <div>
                <p className="font-semibold">Write the lookup formula</p>
                <p className="text-sm">Cell B7 returns yearly tax with your preferred lookup method (<span className="font-mono">XLOOKUP</span> or <span className="font-mono">INDEX/MATCH</span>). Reference the selector with <code>INDIRECT($B$4)</code> so changing the drop-down swaps tables automatically, and include a friendly message if there is no match.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-900 flex items-center gap-2">
              <ListChecks className="h-5 w-5" />
              Quick Test Cases
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-purple-900">
            <p>Use these scenarios to verify your selector and lookup:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="bg-white p-3 rounded border">
                <h4 className="font-semibold mb-1">Scenario A – Federal Single</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Taxable income: $65,000</li>
                  <li>Expected bracket: 22%</li>
                  <li>Expected yearly tax: ~$12,117 (use your table's number)</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded border">
                <h4 className="font-semibold mb-1">Scenario B – California Married</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Taxable income: $95,000</li>
                  <li>Expected bracket: 9.3%</li>
                  <li>Expected yearly tax: value from CA table</li>
                </ul>
              </div>
            </div>
            <p className="text-sm">
              Record whether each scenario returned the correct row, and note how you confirmed the source table.
            </p>
          </CardContent>
        </Card>

        <Card className="border-slate-200">
          <CardHeader>
            <CardTitle className="text-slate-900 flex items-center gap-2">
              <ClipboardCheck className="h-5 w-5" />
              Peer Snapshot
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-slate-800">
            <p>Before you move on, grab a 30-second walkthrough with a partner.</p>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Show them your selector and explain how you know it points to the right table.</li>
              <li>Have them change the taxable income and confirm the lookup updates.</li>
              <li>Write down one suggestion they give you; you’ll need it for the assessment phase.</li>
            </ol>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-900 flex items-center gap-2">
              <Download className="h-5 w-5" />
              Submission Snapshot
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-amber-900">
            <p>Capture proof of your build before closing your laptop.</p>
            <ul className="list-disc list-inside text-sm space-y-1">
              <li>Take a screenshot showing the selector, taxable income, and lookup output.</li>
              <li>Filename: <span className="font-mono">LastName_TaxTableSelector.png</span>.</li>
              <li>Upload to the LMS assignment or drop it in the class Teams channel.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Real-World Connection
          </h3>
          <p className="text-blue-800">
            Sarah can now answer the question every investor asks: “What will payroll taxes cost you this year?” 
            A 30-second selector + lookup demo shows she can defend her numbers, even without a full payroll engine.
          </p>
        </div>
      </div>

      <PhaseFooter
        lesson={lesson03Data}
        unit={unit05Data}
        phase={currentPhase} 
        phases={lesson03Phases}
      />
    </div>
  )
}
