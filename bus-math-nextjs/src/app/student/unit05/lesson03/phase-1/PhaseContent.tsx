import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, Wallet, Calculator } from "lucide-react"

export default function Phase1Content() {
  return (
    <div className="max-w-4xl mx-auto">

      <div className="space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-blue-900">Hook: The Gap Between Gross and Net</h2>
          <p>
            Lesson 02 showed Sarah how to calculate Alex's gross pay: $52,000 annual salary ÷ 26 pay periods = $2,000 bi-weekly.
            But when Alex asks, "What will I actually see in my bank account?" Sarah can't just give that number.
          </p>
        </div>

        <Alert className="border-orange-200 bg-orange-50">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800">
            Today answers the question: <strong>What does the employee actually take home?</strong> This gap between gross and net 
            is where most payroll mistakes happen.
          </AlertDescription>
        </Alert>

        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              The Two Numbers Every Business Must Track
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-blue-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-800">Employee Focus: Net Pay</h4>
                <p className="text-sm">What lands in the employee's bank account after all deductions.</p>
                <p className="text-lg font-bold mt-2">$2,000 - deductions = ?</p>
              </div>
              <div className="bg-white p-4 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-800">Employer Focus: Total Cost</h4>
                <p className="text-sm">What the business actually pays, including employer taxes.</p>
                <p className="text-lg font-bold mt-2">$2,000 + employer taxes = ?</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Predict: What Does Sarah Need to Calculate?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-green-900">
            <p>Before we learn the procedure, predict what information Sarah needs to find:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Which deductions come OUT of Alex's paycheck?</li>
              <li>How does Sarah know the correct withholding amounts?</li>
              <li>What's the formula that gets from gross to net?</li>
            </ul>
          </CardContent>
        </Card>

      </div>

    </div>
  )
}