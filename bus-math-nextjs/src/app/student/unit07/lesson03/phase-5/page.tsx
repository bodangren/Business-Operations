import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { getUnit07Phase5ComprehensionCheckItems } from "@/data/question-banks/unit07-phase5"
import { CheckCircle, Award, TrendingUp, Calculator, Briefcase } from "lucide-react"
import { lesson03Data, unit07Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[4] // Assessment phase

const assessmentQuestions = getUnit07Phase5ComprehensionCheckItems({ lessonIds: ["lesson03"] })

export default function Phase5Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <PhaseHeader lesson={lesson03Data} unit={unit07Data} phase={currentPhase} phases={lesson03Phases} />
      
      <div className="space-y-8">
        {/* Assessment Introduction */}
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-800 flex items-center gap-2">
              <Award className="h-6 w-6" />
              Comprehensive Assessment: FIFO & LIFO Mastery
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-indigo-900">
              <p className="mb-4">
                Time to demonstrate your mastery of inventory valuation methods! This comprehensive assessment covers 
                everything you've learned about FIFO and LIFO, from basic calculations to strategic business applications.
              </p>
              
              <p className="mb-4">
                The questions below will test your ability to:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Technical Skills
                  </h3>
                  <ul className="text-sm text-indigo-800 space-y-1">
                    <li>• Calculate COGS using both FIFO and LIFO methods</li>
                    <li>• Determine ending inventory values</li>
                    <li>• Understand financial statement impacts</li>
                    <li>• Apply methods to realistic business scenarios</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Strategic Thinking
                  </h3>
                  <ul className="text-sm text-indigo-800 space-y-1">
                    <li>• Recommend methods for different business types</li>
                    <li>• Explain tax and cash flow implications</li>
                    <li>• Understand industry-specific considerations</li>
                    <li>• Connect to real-world business decisions</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h3 className="font-semibold text-indigo-900 mb-2">Assessment Tips</h3>
                <p className="text-indigo-800">
                  Take your time with calculations, consider the business context for each scenario, and remember 
                  that the "best" inventory method often depends on the company's specific situation and goals. 
                  Good luck!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comprehensive Assessment */}
        <ComprehensionCheck
          title="FIFO & LIFO: Comprehensive Knowledge Assessment"
          description="Demonstrate your mastery of inventory valuation methods through calculations, analysis, and strategic thinking."
          questions={assessmentQuestions}
          showExplanations={true}
          allowRetry={true}
        />

        {/* Performance Standards */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              Performance Standards & Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-green-900">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg border border-green-300">
                  <h3 className="font-semibold text-green-800 mb-2">Mastery Level (90-100%)</h3>
                  <p className="text-sm text-green-700 mb-2">Outstanding performance!</p>
                  <ul className="text-xs text-green-600 space-y-1">
                    <li>• Ready for advanced inventory modeling</li>
                    <li>• Can advise businesses on method selection</li>
                    <li>• Understands complex strategic implications</li>
                    <li>• Prepared for Unit 7's Excel applications</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-yellow-300">
                  <h3 className="font-semibold text-yellow-800 mb-2">Proficient Level (70-89%)</h3>
                  <p className="text-sm text-yellow-700 mb-2">Solid understanding with room to grow</p>
                  <ul className="text-xs text-yellow-600 space-y-1">
                    <li>• Review complex calculation scenarios</li>
                    <li>• Practice business strategy connections</li>
                    <li>• Strengthen understanding of tax impacts</li>
                    <li>• Ready to continue with support</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-red-300">
                  <h3 className="font-semibold text-red-800 mb-2">Developing Level (&lt;70%)</h3>
                  <p className="text-sm text-red-700 mb-2">Need additional practice and review</p>
                  <ul className="text-xs text-red-600 space-y-1">
                    <li>• Revisit FIFO vs LIFO basic concepts</li>
                    <li>• Practice calculation methods</li>
                    <li>• Work through guided examples again</li>
                    <li>• Seek additional support before advancing</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">Career Relevance</h3>
                <p className="text-green-800">
                  <strong>Why This Matters:</strong> Inventory method knowledge is essential for financial analysts, 
                  business consultants, accountants, and entrepreneurs. Whether you're analyzing a company's financial 
                  statements, advising clients on tax strategy, or making decisions for your own business, understanding 
                  FIFO and LIFO impacts gives you a significant professional advantage.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Looking Ahead */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Looking Ahead: Building on Your Success
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-purple-900">
              <p className="mb-4">
                Congratulations on completing this comprehensive assessment of FIFO and LIFO concepts! Your 
                understanding of inventory valuation methods positions you well for the advanced topics coming 
                in Unit 7.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-2">What's Coming Next in Unit 7</h3>
                <ul className="text-purple-800 space-y-1">
                  <li>• <strong>Excel Array Formulas:</strong> Build sophisticated FIFO and LIFO calculators</li>
                  <li>• <strong>Dynamic Modeling:</strong> Create models that switch between methods with dropdowns</li>
                  <li>• <strong>Depreciation Integration:</strong> Combine asset depreciation with inventory management</li>
                  <li>• <strong>Strategic Analysis:</strong> Present recommendations to real business leaders</li>
                  <li>• <strong>Professional Presentations:</strong> Pitch inventory strategies to a board of directors</li>
                </ul>
              </div>
              
              <p className="text-purple-800">
                In the final closing phase, you'll reflect on your learning journey and prepare for the exciting 
                technical applications ahead. You're building the exact skills that Sarah uses with her clients 
                every day!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <PhaseFooter lesson={lesson03Data} unit={unit07Data} phase={currentPhase} phases={lesson03Phases} />
    </div>
  )
}
