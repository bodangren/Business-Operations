import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Target, Users } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson04Data, lesson04Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson04Phases[0] // Hook phase

const hookQuestions = [
  {
    id: "hook-1",
    question: "What could happen if Sarah's payroll calculator allows someone to enter negative hours?",
    answers: [
      "The system could generate incorrect paychecks and damage employee trust", 
      "Nothing serious - Excel will automatically fix the error",
      "The negative hours would just be ignored by the system",
      "It would only affect the display, not the actual calculations"
    ],
    explanation: "Allowing invalid data like negative hours could result in incorrect paychecks, overpayments, or system crashes, potentially costing thousands and destroying employee confidence in the payroll system."
  },
  {
    id: "hook-2", 
    question: "Why do professional payroll systems need to be 'bulletproof' rather than just accurate?",
    answers: [
      "They must prevent mistakes before they happen, not just calculate correctly",
      "They need to work faster than manual calculations", 
      "They must be password-protected from unauthorized access",
      "They need to automatically backup data to the cloud"
    ],
    explanation: "Professional systems need error prevention - data validation and conditional formatting that stops mistakes before they become costly payroll errors affecting real employees."
  },
  {
    id: "hook-3",
    question: "What type of mistake would be most costly for Sarah's growing business?",
    answers: [
      "Overpaying an employee due to unchecked overtime calculation errors",
      "Using the wrong font in her Excel spreadsheet",
      "Forgetting to save her work before closing Excel", 
      "Not having a colorful enough spreadsheet design"
    ],
    explanation: "Overpaying employees due to calculation errors could cost hundreds or thousands of dollars per pay period, especially with overtime miscalculations that compound over time."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit05Data} 
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              🎯 Phase 1: Sarah's Data Validation Crisis
            </Badge>
            
            <div className="max-w-4xl mx-auto">
              {/* Hook Story */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-red-900 mb-4">
                  The $3,200 Mistake
                </h2>
                
                <p className="text-lg leading-relaxed">
                  Sarah thought her payroll calculator was perfect. She had tested it with Alex's salary, 
                  and the numbers looked right. Gross pay: $2,500 for two weeks. Federal taxes: $312. 
                  State taxes: $125. FICA: $191.25. Net pay: $1,871.75. Everything balanced perfectly.
                </p>

                <p className="text-lg leading-relaxed">
                  Then disaster struck. While rushing to process payroll for her second employee, Maria, 
                  Sarah accidentally typed "80" instead of "8" in the overtime hours cell. The calculator 
                  dutifully computed 80 hours of overtime at time-and-a-half, generating a paycheck for 
                  $3,200 instead of $320.
                </p>

                <p className="text-lg leading-relaxed">
                  Sarah didn't notice the error until Maria called, confused about the massive deposit 
                  in her account. By then, the damage was done—Sarah had to explain the mistake, ask 
                  for the money back, and deal with the payroll tax complications. Worse, she realized 
                  her "perfect" calculator was actually a disaster waiting to happen.
                </p>
              </div>

              {/* Business Crisis Alert */}
              <Alert className="border-red-200 bg-red-50 my-6">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>The Real Cost:</strong> This single typo cost Sarah over $2,800 in overpayment, 
                  plus additional hours fixing tax withholdings, and potential damage to her professional 
                  reputation. A "bulletproof" system with data validation would have prevented this entirely.
                </AlertDescription>
              </Alert>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed">
                  That night, Sarah researched professional payroll systems and discovered they all had 
                  one thing in common: they were designed to prevent mistakes, not just calculate accurately. 
                  They used something called "data validation" to stop impossible entries before they 
                  could cause damage.
                </p>

                <p className="text-lg leading-relaxed">
                  Sarah realized her calculator needed to be more than correct—it needed to be 
                  <strong> bulletproof</strong>. It should refuse to accept 80 overtime hours for someone 
                  who only worked 40 regular hours. It should highlight suspicious numbers in red. 
                  It should guide users toward correct entries and away from costly mistakes.
                </p>
              </div>

              {/* Why This Matters */}
              <div className="bg-red-50 p-6 rounded-lg border border-red-200 my-6">
                <h3 className="font-semibold text-red-900 mb-3 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Why This Matters
                </h3>
                <p className="text-red-800">
                  Today you'll transform your basic payroll calculator into a professional, bulletproof 
                  system using Excel's Data Validation and Conditional Formatting features. You'll learn 
                  to prevent errors before they happen, create visual alerts for suspicious data, and 
                  build the kind of robust financial tool that actual businesses depend on. This isn't 
                  just about Excel skills—it's about professional system design and error prevention.
                </p>
              </div>

              {/* Think-Pair-Share */}
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-800 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Turn and Talk
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-red-900 mb-2">
                    Discussion Prompt (3 minutes):
                  </p>
                  <p className="text-red-800 mb-2">
                    Think about Sarah's $3,200 mistake and how it could have been prevented. Share with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-red-800">
                    <li>What Excel features could automatically catch impossible data entries?</li>
                    <li>How might visual alerts help prevent costly payroll errors?</li>
                    <li>What other types of payroll mistakes could data validation prevent?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Comprehension Check */}
              <div className="mt-8">
                <ComprehensionCheck
                  title="Understanding Data Validation Importance"
                  description="Test your understanding of why bulletproof systems matter in business."
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