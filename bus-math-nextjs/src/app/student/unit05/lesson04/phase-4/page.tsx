import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Rocket, Target, CheckCircle, Users } from "lucide-react"
import { payrollTemplate } from "@/components/spreadsheet/SpreadsheetTemplates"
import { lesson04Data, lesson04Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson04Phases[3] // Independent Practice phase

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader 
        unit={unit05Data} 
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">
              🚀 Phase 4: Advanced Data Validation Mastery Challenges
            </Badge>
            
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-orange-900 mb-4">
                  Building Enterprise-Grade Validation Systems
                </h2>
                
                <p className="text-lg leading-relaxed">
                  Sarah's payroll system is working, but now she's thinking bigger. As TechStart Solutions 
                  grows, she'll need to handle more complex scenarios: employees in different states with 
                  different tax rates, contractors vs. full-time employees, and seasonal workers with 
                  varying schedules. Each new complexity requires more sophisticated error-checking.
                </p>

                <p className="text-lg leading-relaxed">
                  In this independent practice, you'll tackle three escalating challenges that mirror 
                  real-world business situations. These aren't simple exercises—they're the kinds of 
                  problems that separate basic spreadsheet users from professional business analysts.
                </p>
              </div>

              {/* Challenge 1 */}
              <Card className="border-orange-200 bg-orange-50 my-6">
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Challenge 1: Multi-Employee Validation Matrix
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-orange-800 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Scenario:</h4>
                    <p>
                      Sarah now has 5 employees: 2 hourly workers, 2 salaried employees, and 1 contractor. 
                      Each has different validation rules. Design a system that automatically applies the 
                      correct validation based on employee type.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>Hourly Workers:</strong> 0-60 hours/week, $12-50/hour, overtime calculations</li>
                      <li><strong>Salaried:</strong> Fixed annual salary $30K-120K, no hourly rate needed</li>
                      <li><strong>Contractors:</strong> Project-based rates $25-200/hour, no tax withholdings</li>
                      <li><strong>Cross-Validation:</strong> Total weekly labor costs can't exceed $15,000</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Challenge 2 */}
              <Card className="border-orange-200 bg-orange-50 my-6">
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Challenge 2: Cash Flow Impact Validation
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-orange-800 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Scenario:</h4>
                    <p>
                      Sarah needs to ensure her payroll decisions don't create cash flow problems. Create 
                      validation rules that check whether proposed payroll amounts align with available 
                      cash and upcoming revenue.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Business Rules to Validate:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>Cash Safety:</strong> Payroll can't exceed 60% of current cash balance</li>
                      <li><strong>Revenue Ratio:</strong> Total payroll should be 35-45% of monthly revenue</li>
                      <li><strong>Growth Limits:</strong> Payroll increases &gt; 20% month-over-month need approval</li>
                      <li><strong>Emergency Fund:</strong> Must maintain $10K cash buffer after payroll</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Challenge 3 */}
              <Card className="border-orange-200 bg-orange-50 my-6">
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Challenge 3: Compliance & Audit Trail System
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-orange-800 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Scenario:</h4>
                    <p>
                      Sarah's accountant warns that the business might be audited. Create a validation 
                      system that ensures all payroll data meets legal requirements and creates an 
                      audit trail for compliance.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compliance Checks Needed:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>Minimum Wage:</strong> No employee paid below federal/state minimums</li>
                      <li><strong>Overtime Laws:</strong> Non-exempt employees get 1.5x pay after 40 hours</li>
                      <li><strong>Tax Withholding:</strong> All calculations match IRS withholding tables</li>
                      <li><strong>Record Keeping:</strong> All entries have timestamps and approval signatures</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Spreadsheet Practice */}
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-bold text-orange-900 mb-3">
                  Hands-On Practice: Build Your Payroll Validation System
                </h3>
                
                <p className="text-lg leading-relaxed">
                  Now it's time to apply your data validation knowledge. Using the payroll template below, 
                  you'll implement the advanced validation rules needed for Sarah's growing business. 
                  Practice with the sample employee data and test your validation system with edge cases.
                </p>
              </div>

              <div className="my-8">
                <Card className="border-orange-200 bg-orange-50">
                  <CardHeader>
                    <CardTitle className="text-orange-800">
                      {payrollTemplate.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-orange-800 mb-4">{payrollTemplate.description}</p>
                    <Alert className="border-blue-200 bg-blue-50">
                      <AlertDescription className="text-blue-800">
                        <strong>Practice Instructions:</strong> Use this template structure to build your 
                        own validation system. Add data validation rules to prevent errors and conditional 
                        formatting to highlight issues. Test with the sample data provided.
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              </div>

              {/* Sample Data Resources */}
              <Alert className="border-orange-200 bg-orange-50 my-6">
                <Target className="h-4 w-4 text-orange-600" />
                <AlertDescription className="text-orange-800">
                  <strong>Practice Data Available:</strong> Download the sample payroll datasets from 
                  <a href="/resources/unit05-validation-practice.csv" download className="text-orange-600 underline hover:text-orange-800">
                    <code>/resources/unit05-validation-practice.csv</code>
                  </a> to test your validation rules 
                  with realistic employee scenarios including edge cases and common data entry mistakes.
                </AlertDescription>
              </Alert>

              {/* Self-Assessment Checklist */}
              <Card className="border-orange-200 bg-orange-50 my-6">
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    Self-Assessment Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-orange-800 space-y-3">
                  <p className="font-semibold mb-2">Before moving to the next phase, verify you can:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <h4 className="font-semibold mb-1">Technical Skills:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Create complex data validation rules</li>
                        <li>Build conditional formatting with multiple criteria</li>
                        <li>Design dropdown lists for consistent data entry</li>
                        <li>Test validation systems with edge cases</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Business Understanding:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Identify critical business rules to validate</li>
                        <li>Understand cash flow implications of payroll</li>
                        <li>Recognize compliance and legal requirements</li>
                        <li>Design user-friendly error prevention systems</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Creative Application Challenge */}
              <div className="prose prose-lg max-w-none">
                <h3 className="text-xl font-bold text-orange-900 mb-3">
                  Creative Application: Design Your Own Validation System
                </h3>
                
                <p className="text-lg leading-relaxed">
                  Choose one of the three challenges above and create your own advanced validation 
                  system. Think like a professional software developer: What could go wrong? How 
                  would you prevent it? What would make this system truly bulletproof?
                </p>

                <p className="text-lg leading-relaxed">
                  Document your design decisions and be prepared to explain why you chose specific 
                  validation rules. Remember, the goal isn't just to prevent errors—it's to create 
                  a system that builds confidence and supports business growth.
                </p>
              </div>

              {/* Peer Discussion */}
              <Card className="border-orange-200 bg-orange-50 my-6">
                <CardHeader>
                  <CardTitle className="text-orange-800 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Peer Collaboration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-orange-900 mb-2">
                    Team Challenge (10 minutes):
                  </p>
                  <p className="text-orange-800 mb-2">
                    Share your validation system design with a partner and discuss:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-orange-800">
                    <li>What business risks does your system address?</li>
                    <li>How did you balance user-friendliness with error prevention?</li>
                    <li>What real-world scenarios might break your validation rules?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Professional Connection */}
              <Alert className="border-orange-200 bg-orange-50 my-6">
                <Rocket className="h-4 w-4 text-orange-600" />
                <AlertDescription className="text-orange-800">
                  <strong>Career Connection:</strong> The advanced validation skills you're practicing 
                  are exactly what employers look for in business analysts, financial modelers, and 
                  operations managers. Being able to anticipate problems and build preventative 
                  systems demonstrates strategic thinking that goes far beyond basic Excel knowledge.
                </AlertDescription>
              </Alert>
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