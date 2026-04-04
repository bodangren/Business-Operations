import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Clock, AlertTriangle, MessageCircle } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson04Data, lesson04Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson04Phases[0]

const hookQuestions = [
  {
    id: "hook-1",
    question: "Why does Sarah's bank account show a different balance than her payroll register on payday?",
    answers: [
      "Payroll register records wages when earned, but the bank processes the actual transfer days later",
      "The bank stole money from the account",
      "Employees forgot to cash their checks",
      "The register has a math error"
    ],
    explanation: "The register records wages as a liability when the pay period ends, but the actual cash leaves the bank only when the direct deposit processes—which can be days later."
  },
  {
    id: "hook-2",
    question: "What is a payroll liability?",
    answers: [
      "Money the company owes employees or tax agencies but has not paid yet",
      "The total gross pay for the period",
      "The employee's take-home pay",
      "A late fee from the bank"
    ],
    explanation: "A liability represents money owed that has not yet been paid. For payroll, this includes employee deductions being held and employer taxes that will be remitted later."
  },
  {
    id: "hook-3",
    question: "Why does TechStart need to track when each payroll item will clear the bank?",
    answers: [
      "To avoid overdrafts and plan cash flow for rent and other bills",
      "To impress investors with fast calculations",
      "To calculate more deductions",
      "To reduce the employee count"
    ],
    explanation: "Knowing the timing window between when wages are earned and when cash actually leaves the account helps Sarah plan for other obligations like rent, supplies, and taxes."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50">
      <PhaseHeader 
        unit={unit05Data} 
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
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

              <div className="mt-8">
                <ComprehensionCheck
                  title="Why Does Payroll Timing Matter?"
                  description="Confirm your understanding of the timing gap and why liabilities exist."
                  questions={hookQuestions}
                  showExplanations={true}
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <PhaseFooter
        unit={unit05Data}
        lesson={lesson04Data}
        phase={currentPhase} 
        phases={lesson04Phases}
      />
    </div>
  )
}