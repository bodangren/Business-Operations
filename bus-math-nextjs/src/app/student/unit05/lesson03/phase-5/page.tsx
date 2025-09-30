import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, TrendingUp } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson03Data, lesson03Phases, unit05Data } from "../lesson-data"
import { drawUnit05Phase5ComprehensionCheckItems } from "@/data/question-banks/unit05-phase5"

const currentPhase = lesson03Phases[4] // Assessment phase
const assessmentQuestions = drawUnit05Phase5ComprehensionCheckItems(10, { lessonIds: ["lesson03"] })

export default function Phase5Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit05Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />

      <div className="space-y-8">
        {/* Assessment Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Demonstrate Your Payroll Mastery
          </h2>
          
          <p className="text-lg leading-relaxed">
            Time to show what you've learned about building professional payroll systems. This assessment 
            covers both the technical Excel skills and business understanding you need to help entrepreneurs 
            like Sarah make confident hiring decisions.
          </p>
        </div>

        {/* Assessment Context */}
        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-purple-100">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-purple-900 text-lg mb-2">
                  Assessment Focus Areas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-purple-800">
                  <div>
                    <h4 className="font-medium mb-2">Technical Skills:</h4>
                    <ul className="space-y-1">
                      <li>• Complex IF statement construction</li>
                      <li>• Gross-to-net pay calculations</li>
                      <li>• Error handling and data validation</li>
                      <li>• Named ranges and formula optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Business Application:</h4>
                    <ul className="space-y-1">
                      <li>• Cash flow planning and management</li>
                      <li>• Employee cost analysis</li>
                      <li>• Strategic hiring decisions</li>
                      <li>• Payroll compliance understanding</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Criteria */}
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-green-100">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-900 text-lg mb-2">
                  Performance Standards
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-green-800">
                  <div>
                    <h4 className="font-medium text-green-900 mb-2">Proficient (70-79%)</h4>
                    <p>Demonstrates solid understanding of payroll calculations and basic Excel functions for business use.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-900 mb-2">Advanced (80-89%)</h4>
                    <p>Shows mastery of complex formulas and strong business application of payroll systems.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-900 mb-2">Expert (90-100%)</h4>
                    <p>Demonstrates sophisticated understanding of both technical and strategic aspects of payroll management.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comprehensive Assessment */}
        <ComprehensionCheck
          title="Payroll Calculator Assessment"
          description="Test your mastery of payroll calculations, Excel formulas, and business applications. This assessment covers the technical skills and strategic thinking needed for professional payroll management."
          questions={assessmentQuestions}
          showExplanations={true}
          allowRetry={true}
        />

        {/* Next Steps Preview */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-3">Looking Ahead</h3>
          <p className="text-blue-800 mb-3">
            You've built the foundation for Sarah's payroll system, but there's more to consider. In our next lesson, 
            we'll explore how to scale this calculator for multiple employees, add advanced features like different 
            pay frequencies, and integrate with other business systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-blue-900 mb-2">Coming Up:</h4>
              <ul className="text-blue-800 space-y-1">
                <li>• Multi-employee payroll registers</li>
                <li>• XLOOKUP for employee databases</li>
                <li>• Bilingual pay stub templates</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-900 mb-2">Real-World Connection:</h4>
              <ul className="text-blue-800 space-y-1">
                <li>• Bank reconciliation systems</li>
                <li>• Cash flow forecasting</li>
                <li>• Compliance and record keeping</li>
              </ul>
            </div>
          </div>
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