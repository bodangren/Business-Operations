import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Wrench, Users, CheckSquare } from "lucide-react"
import ErrorCheckingSystem from "@/components/business-simulations/ErrorCheckingSystem"
import { lesson04Data, lesson04Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson04Phases[2] // Guided Practice phase

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader 
        unit={unit05Data} 
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              🔧 Phase 3: Building Sarah's Bulletproof Payroll System
            </Badge>
            
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-purple-900 mb-4">
                  From Calculator to Professional System
                </h2>
                
                <p className="text-lg leading-relaxed">
                  Now that you understand the theory behind data validation and conditional formatting, 
                  it's time to get hands-on. Sarah needs to transform her basic payroll calculator into 
                  a professional system that can prevent the kind of $3,200 mistake that nearly damaged 
                  her business reputation.
                </p>

                <p className="text-lg leading-relaxed">
                  In this guided practice, you'll work step-by-step to build the same error-checking 
                  features that professional payroll companies use. You'll create validation rules that 
                  stop impossible data at the door, and conditional formatting that immediately alerts 
                  users to potential problems.
                </p>
              </div>

              {/* System Requirements */}
              <Card className="border-purple-200 bg-purple-50 my-6">
                <CardHeader>
                  <CardTitle className="text-purple-800 flex items-center gap-2">
                    <CheckSquare className="h-5 w-5" />
                    Professional Standards for Sarah's System
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-purple-800 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Must Prevent These Common Errors:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>Impossible Hours:</strong> No one can work 200 hours in a week</li>
                      <li><strong>Negative Pay Rates:</strong> Businesses can't pay employees negative wages</li>
                      <li><strong>Blank Required Fields:</strong> Missing employee names or pay rates</li>
                      <li><strong>Unrealistic Overtime:</strong> More than 40 hours of overtime per week</li>
                      <li><strong>Tax Calculation Errors:</strong> Net pay that equals or exceeds gross pay</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Must Provide Visual Alerts For:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>High Pay Amounts:</strong> Weekly pay exceeding $3,000 (review needed)</li>
                      <li><strong>Low Pay Amounts:</strong> Weekly pay below $200 (check calculations)</li>
                      <li><strong>Missing Information:</strong> Any blank cells in required fields</li>
                      <li><strong>Calculation Success:</strong> Green indicators when everything looks correct</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Exercise */}
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-bold text-purple-900 mb-3">
                  Interactive Exercise: Build Your Error-Checking System
                </h3>
                
                <p className="text-lg leading-relaxed">
                  Use the interactive tool below to practice building the exact validation rules and 
                  conditional formatting that Sarah's payroll system needs. You'll work through 
                  real payroll scenarios and learn to construct the Excel formulas that prevent 
                  costly mistakes.
                </p>
              </div>

              {/* Error Checking System Component */}
              <div className="my-8">
                <ErrorCheckingSystem />
              </div>

              {/* Think-Pair-Share */}
              <Card className="border-purple-200 bg-purple-50 my-6">
                <CardHeader>
                  <CardTitle className="text-purple-800 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Collaborative Reflection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-purple-900 mb-2">
                    Discussion Prompt (5 minutes):
                  </p>
                  <p className="text-purple-800 mb-2">
                    After working with the error-checking system, discuss with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-purple-800">
                    <li>Which validation rule would have prevented Sarah's $3,200 mistake?</li>
                    <li>What other business processes could benefit from similar error-checking?</li>
                    <li>How might these features help when Sarah presents to investors?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Professional Implementation Tips */}
              <Alert className="border-purple-200 bg-purple-50 my-6">
                <Wrench className="h-4 w-4 text-purple-600" />
                <AlertDescription className="text-purple-800">
                  <strong>Pro Tip:</strong> When implementing these features in your own payroll 
                  calculator, start with the most critical validations first (like preventing 
                  negative hours), then add visual alerts. Test your system with intentionally 
                  wrong data to make sure your error-checking actually works before processing 
                  real payroll.
                </AlertDescription>
              </Alert>

              {/* Next Steps Preview */}
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-bold text-purple-900 mb-3">
                  Preparing for Independent Practice
                </h3>
                
                <p className="text-lg leading-relaxed">
                  You've now learned the core techniques for building bulletproof Excel systems. 
                  In the next phase, you'll apply these skills independently to create your own 
                  advanced payroll validation system. You'll face more complex scenarios and learn 
                  to design custom error-checking rules for unique business situations.
                </p>
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