import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { BarChart3, Award, TrendingUp, Users } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson04Data, lesson04Phases, unit05Data } from "../lesson-data"
import { drawUnit05Phase5ComprehensionCheckItems } from "@/data/question-banks/unit05-phase5"

const currentPhase = lesson04Phases[4] // Assessment phase
const assessmentQuestions = drawUnit05Phase5ComprehensionCheckItems(8, { lessonIds: ["lesson04"] })

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit05Data} 
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              📊 Phase 5: Data Validation & Error Detection - Professional Mastery Assessment
            </Badge>
            
            <div className="max-w-4xl mx-auto">
              {/* Assessment Introduction */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-yellow-900 mb-4">
                  Demonstrating Your Professional System Design Skills
                </h2>
                
                <p className="text-lg leading-relaxed">
                  You've learned to build bulletproof payroll systems using Excel's most powerful 
                  error-prevention features. Now it's time to demonstrate your mastery of both the 
                  technical skills and the business thinking that separates professional system 
                  designers from basic spreadsheet users.
                </p>

                <p className="text-lg leading-relaxed">
                  This assessment evaluates not just your knowledge of Data Validation and Conditional 
                  Formatting, but your understanding of why these features matter in real business 
                  operations and how they contribute to professional system reliability.
                </p>
              </div>

              {/* Performance Standards */}
              <Card className="border-yellow-200 bg-yellow-50 my-6">
                <CardHeader>
                  <CardTitle className="text-yellow-800 flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Professional Mastery Standards
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-yellow-800 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-green-700">Exemplary (90-100%)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Demonstrates comprehensive understanding of validation strategies</li>
                        <li>Connects technical features to business risk management</li>
                        <li>Explains professional standards and investor expectations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-blue-700">Proficient (75-89%)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Shows solid grasp of data validation and conditional formatting</li>
                        <li>Understands basic business applications and error prevention</li>
                        <li>Can explain how features solve common payroll problems</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-orange-700">Developing (&lt;75%)</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Basic understanding of Excel validation features</li>
                        <li>Limited connection to real-world business applications</li>
                        <li>May need additional practice with complex scenarios</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Career Connections */}
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-bold text-yellow-900 mb-3">
                  Career Impact: Why These Skills Matter
                </h3>
                
                <p className="text-lg leading-relaxed">
                  The validation and error-prevention skills you've mastered are exactly what 
                  employers seek in business analysts, financial modelers, operations managers, 
                  and consultants. These roles require people who don't just solve problems—they 
                  anticipate and prevent them.
                </p>
              </div>

              <Card className="border-yellow-200 bg-yellow-50 my-6">
                <CardHeader>
                  <CardTitle className="text-yellow-800 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Professional Applications
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-yellow-800 space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">Business Analyst:</h4>
                      <p className="text-sm">Design validation systems for financial models, ensuring data integrity in revenue forecasts and budget planning.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Operations Manager:</h4>
                      <p className="text-sm">Build bulletproof operational dashboards with error-checking for inventory, scheduling, and performance metrics.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Financial Consultant:</h4>
                      <p className="text-sm">Create robust client financial planning tools with validation that prevents costly calculation errors.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Project Manager:</h4>
                      <p className="text-sm">Develop project tracking systems with validation to ensure accurate timeline and budget management.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Assessment */}
              <div className="mt-8">
                <ComprehensionCheck
                  title="Professional Mastery Assessment: Data Validation & Error Detection"
                  description="Demonstrate your understanding of building bulletproof business systems with advanced Excel validation features."
                  questions={assessmentQuestions}
                  showExplanations={true}
                />
              </div>

              {/* Next Steps Based on Performance */}
              <Alert className="border-yellow-200 bg-yellow-50 my-6">
                <BarChart3 className="h-4 w-4 text-yellow-600" />
                <AlertDescription className="text-yellow-800">
                  <strong>Next Steps:</strong> Based on your assessment results, prepare for the next 
                  lesson where you'll learn to scale these validation techniques to multi-employee 
                  payroll systems using XLOOKUP and advanced formulas. Strong performance here 
                  indicates readiness for enterprise-level Excel modeling.
                </AlertDescription>
              </Alert>

              {/* Reflection Preparation */}
              <Card className="border-yellow-200 bg-yellow-50 my-6">
                <CardHeader>
                  <CardTitle className="text-yellow-800 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Preparation for Reflection
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-yellow-900 mb-2">
                    Consider these questions for the closing reflection:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-yellow-800">
                    <li>How has learning data validation changed your approach to building Excel systems?</li>
                    <li>What connections do you see between error prevention and professional business management?</li>
                    <li>How might these skills help you in future academic or career situations?</li>
                  </ul>
                </CardContent>
              </Card>
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