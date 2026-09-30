import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Target, ArrowRight, Trophy } from "lucide-react"

export default function Phase6Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-indigo-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">Phase 6: Wrap & Reflect</Badge>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-indigo-900 mb-4">You Now See the Full Payroll Picture</h2>
                <p className="text-lg leading-relaxed">
                  In Lessons 02-03, you learned to calculate gross pay and deductions to arrive at net pay. Today you learned that net pay is only half the story—the timing of when cash actually moves creates a liability window that Sarah must manage.
                </p>
              </div>

              <Card className="border-indigo-200 bg-indigo-50">
                <CardHeader>
                  <CardTitle className="text-indigo-800 flex items-center gap-2">
                    <Trophy className="h-5 w-5" />
                    What You Now Understand
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-900 text-sm space-y-1">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Timing gap:</strong> Payroll is recorded as a liability on payday, but cash leaves days later when direct deposits clear</li>
                    <li><strong>Employee deductions:</strong> Money held temporarily and passed through to agencies—liabilities</li>
                    <li><strong>Employer taxes:</strong> Real company costs (7.65% of wages) in addition to employee taxes</li>
                    <li><strong>Cash float:</strong> The usable cash between recording the liability and the actual bank outflow</li>
                    <li><strong>Reconciliation:</strong> Comparing register totals to bank records to find timing differences</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 bg-indigo-50">
                <CardHeader>
                  <CardTitle className="text-indigo-800 flex items-center gap-2">
                    <ArrowRight className="h-5 w-5" />
                    Preview: Lessons 05-06
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-900 text-sm space-y-1">
                  <ul className="list-disc list-inside space-y-1">
                    <li><strong>Lesson 05:</strong> Build a payroll calculator in Excel that pulls data from an employee list and calculates gross pay, deductions, net pay, and employer taxes automatically</li>
                    <li><strong>Lesson 06:</strong> Add validation, error checks, and bilingual stub output so the workbook catches mistakes and produces professional pay records</li>
                  </ul>
                  <p className="mt-3 text-indigo-800">
                    The timing and liability concepts you learned today will become the foundation for the Excel automation. Understanding WHY the calculations matter makes BUILDING the workbook much easier.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-indigo-200 bg-indigo-50">
                <CardHeader>
                  <CardTitle className="text-indigo-800 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Final To-Do List
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-indigo-900 text-sm space-y-1">
                  <ul className="list-disc list-inside space-y-1">
                    <li>Review your Phase 4 mastery problems—keep the formula reference somewhere accessible</li>
                    <li>Be ready to explain to a partner why the payroll register and bank statement can disagree temporarily</li>
                    <li>Write down one real-world scenario where timing gaps could cause a cash crisis (e.g., rent due before payroll clears)</li>
                  </ul>
                </CardContent>
              </Card>

              <Alert className="border-indigo-200 bg-indigo-50">
                <AlertDescription className="text-indigo-800">
                  <strong>Connection to cash-crunch:</strong> Remember Sarah's rent problem from Lesson 01? Now you understand why she cannot just wait for payroll to clear—she needs to plan for the timing gap or risk an overdraft. This is the real-world pressure that makes payroll timing knowledge valuable.
                </AlertDescription>
              </Alert>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}