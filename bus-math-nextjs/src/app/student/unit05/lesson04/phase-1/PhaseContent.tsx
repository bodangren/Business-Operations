import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Clock, AlertTriangle, MessageCircle } from "lucide-react"

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-amber-50">
      
      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-amber-100 text-amber-800 text-lg px-4 py-2">
              Phase 1: The Timing Gap
            </Badge>
            
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-amber-900 mb-4">
                  Payroll Clears the Bank Days After You Record It
                </h2>
                <p className="text-lg leading-relaxed">
                  In Lesson 03, you learned how to take gross pay and calculate deductions to arrive at net pay—the money employees actually take home. But here is the twist that keeps Sarah up at night: <strong>the register shows the money as owed on payday, but the bank does not actually send it out until the direct deposit processes.</strong>
                </p>
                <p className="text-lg leading-relaxed">
                  This timing gap creates a window where the company owes the money (it is a liability on the books) but the cash is still in the bank. Sarah needs to understand this gap to avoid paying out more than she has, especially with rent due in ten days.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 my-6 space-y-3">
                <h3 className="font-semibold text-amber-900 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  The Timing Problem
                </h3>
                <ul className="list-disc list-inside text-amber-800 space-y-2">
                  <li><strong>Monday:</strong> Pay period ends. Register shows $8,400 in wages owed.</li>
                  <li><strong>Wednesday:</strong> Sarah runs payroll. Register shows liability.</li>
                  <li><strong>Friday:</strong> Direct deposits actually leave the bank account.</li>
                  <li><strong>Gap:</strong> For 4 days, the books and bank disagree by $8,400.</li>
                </ul>
              </div>

              <Card className="border-amber-200 bg-amber-50">
                <CardHeader>
                  <CardTitle className="text-amber-800 flex items-center gap-2">
                    <MessageCircle className="h-5 w-5" />
                    Turn and Talk
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="text-amber-800 space-y-2">
                      <p className="font-medium">3-minute discussion:</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Why would a company want to record wages on Monday when they do not actually pay until Friday?</li>
                        <li>What could go wrong if Sarah does not track this timing gap?</li>
                        <li>How does this timing problem connect to the cash-crunch story from Lesson 01?</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Alert className="border-amber-200 bg-amber-50 my-6">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-amber-800">
                  <strong>Key distinction:</strong> Recording the payroll liability on payday is required by generally accepted accounting principles (GAAP). The timing of the actual cash payment is a separate cash-management decision.
                </AlertDescription>
              </Alert>

            </div>
          </div>
        </section>
      </div>

    </div>
  )
}