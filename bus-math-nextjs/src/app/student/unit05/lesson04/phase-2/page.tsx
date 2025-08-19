import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { BookOpen, CheckCircle, AlertTriangle } from "lucide-react"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson04Data, lesson04Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson04Phases[1] // Introduction phase

const dataValidationSentences = [
  {
    id: "dv-1",
    text: "Excel's {blank} feature controls what kind of data can be entered into a cell, preventing impossible entries like negative hours or blank pay rates.",
    answer: "Data Validation",
    hint: "This feature sets rules for what users can enter"
  },
  {
    id: "dv-2", 
    text: "When setting up {blank} for hours worked, you would typically set a minimum of 0 and maximum of 80 to prevent unrealistic entries.",
    answer: "input restrictions",
    hint: "These prevent users from entering invalid numbers"
  },
  {
    id: "dv-3",
    text: "Excel's {blank} feature changes the appearance of cells based on their values, like highlighting negative net pay in red.",
    answer: "Conditional Formatting",
    hint: "This feature creates visual alerts based on cell values"
  },
  {
    id: "dv-4",
    text: "A {blank} list in Excel provides users with predetermined options, eliminating typing errors for fields like employee type or pay frequency.",
    answer: "dropdown",
    hint: "Users can select from a list instead of typing"
  },
  {
    id: "dv-5",
    text: "Professional payroll systems use {blank} checking to ensure that calculated results fall within expected ranges before processing payments.",
    answer: "range",
    hint: "This validates that numbers are realistic and reasonable"
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader 
        unit={unit05Data} 
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              📚 Phase 2: Data Validation & Conditional Formatting - The Professional Foundation
            </Badge>
            
            <div className="max-w-4xl mx-auto">
              {/* Core Concept Introduction */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-green-900 mb-4">
                  Building Bulletproof Systems: The Excel Professional's Toolkit
                </h2>
                
                <p className="text-lg leading-relaxed">
                  After Sarah's $3,200 mistake, she discovered that every professional payroll system 
                  has two critical features that prevent errors before they happen: <strong>Data Validation</strong> 
                  and <strong>Conditional Formatting</strong>. These aren't just nice-to-have features—they're 
                  the difference between a hobby calculator and a business-grade financial tool.
                </p>

                <p className="text-lg leading-relaxed">
                  Think of Data Validation as a bouncer at a club. It checks every piece of information 
                  trying to enter your spreadsheet and only allows valid data through the door. Want to 
                  enter 200 hours of work in a week? The bouncer says "Sorry, that's impossible." 
                  Trying to leave the pay rate blank? "Not allowed—every employee needs a pay rate."
                </p>

                <p className="text-lg leading-relaxed">
                  Conditional Formatting is like having a smart warning system. It automatically changes 
                  colors, adds icons, or highlights cells when something looks suspicious. If someone's 
                  net pay calculates to a negative number, it immediately turns red and catches your attention.
                </p>
              </div>

              {/* Technical Deep Dive */}
              <Card className="border-green-200 bg-green-50 my-6">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Data Validation in Action
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-green-800 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Setting Input Restrictions:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>Hours Worked:</strong> Allow only whole numbers between 0 and 80</li>
                      <li><strong>Pay Rate:</strong> Allow only currency values between $7.25 and $100.00</li>
                      <li><strong>Employee Type:</strong> Create dropdown with "Hourly," "Salary," "Contractor"</li>
                      <li><strong>Pay Period:</strong> Create dropdown with "Weekly," "Bi-weekly," "Monthly"</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Creating Error Messages:</h4>
                    <p>
                      When someone tries to enter invalid data, Excel can display custom messages like 
                      "Hours worked must be between 0 and 80" or "Please select an employee type from the dropdown."
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-green-200 bg-green-50 my-6">
                <CardHeader>
                  <CardTitle className="text-green-800 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5" />
                    Conditional Formatting for Visual Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-green-800 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Red Alert Conditions:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>Negative Net Pay:</strong> Something's wrong with the calculations</li>
                      <li><strong>Overtime &gt; 40 Hours:</strong> Unusual but not impossible—needs review</li>
                      <li><strong>Blank Required Fields:</strong> Missing data that could cause errors</li>
                      <li><strong>Extreme Pay Amounts:</strong> Weekly pay over $5,000 or under $100</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Green Success Indicators:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>Balanced Calculations:</strong> All formulas working correctly</li>
                      <li><strong>Complete Records:</strong> All required information present</li>
                      <li><strong>Reasonable Results:</strong> Pay amounts within expected ranges</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Business Benefits */}
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-bold text-green-900 mb-3">
                  Why Investors Love Bulletproof Systems
                </h3>
                
                <p className="text-lg leading-relaxed">
                  When Sarah eventually presents her payroll system to potential investors, they won't 
                  just look at whether the math is correct—they'll examine whether her systems are 
                  <strong> professional and reliable</strong>. Investors have seen too many startups 
                  fail because of "small" operational mistakes that snowballed into major problems.
                </p>

                <p className="text-lg leading-relaxed">
                  A payroll system with data validation and conditional formatting demonstrates that 
                  Sarah thinks like a professional business owner. She's not just building tools that 
                  work—she's building tools that prevent problems. This kind of systematic thinking 
                  gives investors confidence that she can scale her operations without costly mistakes.
                </p>
              </div>

              {/* Why This Matters */}
              <Alert className="border-green-200 bg-green-50 my-6">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  <strong>Professional Standard:</strong> Every business-grade financial system includes 
                  error prevention features. Learning to build these into your Excel models isn't just 
                  about avoiding mistakes—it's about demonstrating professional system design skills 
                  that employers and investors value highly.
                </AlertDescription>
              </Alert>

              {/* Fill in the Blank Exercise */}
              <div className="mt-8">
                <FillInTheBlank
                  sentences={dataValidationSentences}
                  title="Master the Vocabulary: Data Validation & Conditional Formatting"
                  description="Complete these sentences to reinforce key concepts about building bulletproof Excel systems."
                  showWordList={true}
                  randomizeWordOrder={true}
                  showHints={true}
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