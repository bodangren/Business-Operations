import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle, TrendingUp, Users } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson03Data, lesson03Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson03Phases[5] // Closing phase

const reflectionPrompts = [
  {
    id: "courage-payroll",
    category: "courage" as const,
    prompt: "Building a payroll calculator requires tackling complex Excel formulas that might seem intimidating at first. Describe a specific moment in today's lesson when you had to push through uncertainty or take on a challenging technical task. What gave you the courage to keep working through the difficulty?",
    placeholder: "Think about times when you faced complex IF statements, had to troubleshoot formula errors, or felt overwhelmed by the technical requirements..."
  },
  {
    id: "adaptability-formulas",
    category: "adaptability" as const,
    prompt: "Excel formulas don't always work correctly on the first try, and business requirements often change as you build a system. How did you adapt your approach when formulas produced unexpected results or when you discovered new requirements for the payroll calculator? What strategies did you develop for handling formula errors or changing business needs?",
    placeholder: "Consider how you adjusted when formulas didn't work, when you had to handle different employee types, or when you realized you needed additional features..."
  },
  {
    id: "persistence-complexity",
    category: "persistence" as const,
    prompt: "Creating a professional-grade payroll system involves many interconnected pieces: formulas, validation, formatting, and testing. There were likely moments when you wanted to give up or settle for a simpler solution. Describe a time during this lesson when you persisted through complexity or frustration. What motivated you to complete the full system rather than giving up?",
    placeholder: "Reflect on challenging moments with nested IF statements, error handling, testing different scenarios, or formatting requirements that seemed overwhelming..."
  }
]

export default function Phase6Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit05Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />

      <div className="space-y-8">
        {/* Lesson Summary */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            From Fear to Confidence: Sarah's (and Your) Journey
          </h2>
          
          <p className="text-lg leading-relaxed">
            At the beginning of today's lesson, Sarah was afraid to hire Alex despite her business success. 
            She feared the unknown—not knowing exactly how much cash she'd need or when payroll would hit 
            her account. By building a comprehensive payroll calculator, you've given her (and yourself) 
            the tools to transform that fear into confidence.
          </p>

          <p className="text-lg leading-relaxed">
            Your Excel calculator does more than crunch numbers. It predicts cash needs, prevents errors, 
            and provides the reliable foundation Sarah needs to grow her business. This is the power of 
            systematic thinking applied to real business challenges.
          </p>
        </div>

        {/* Key Accomplishments */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              What You've Accomplished
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Technical Excel Skills:</h4>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Complex nested IF statements for multi-conditional logic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Named ranges for professional formula documentation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Data validation to prevent user input errors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Error handling with IFERROR functions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Professional formatting and conditional highlighting</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-3">Business Applications:</h4>
                <ul className="space-y-2 text-green-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Gross-to-net pay calculations for three employee types</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Overtime logic and tipped employee compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Tax withholding and deduction management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Cash flow forecasting for hiring decisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Strategic business planning with accurate cost data</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Unit Connection */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-900 flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              Connecting to the Bigger Picture
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-purple-800">
                This lesson is a crucial stepping stone in Sarah's journey to build a complete 
                <strong> Payday Simulator</strong>. You've created the mathematical foundation—the accurate 
                calculator that handles individual employees. But Sarah's ultimate challenge is bigger: 
                avoiding the "Friday Crisis" that destroys businesses.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">What's Next in the PayDay Simulator:</h4>
                <ul className="text-sm text-purple-800 space-y-1">
                  <li>• <strong>Multi-Employee Systems:</strong> Scale your calculator for entire teams using XLOOKUP</li>
                  <li>• <strong>Cash Flow Timing:</strong> Predict exactly when money leaves the bank account</li>
                  <li>• <strong>Bank Reconciliation:</strong> Match payroll records with actual bank transactions</li>
                  <li>• <strong>Professional Communication:</strong> Create systems that work in real business environments</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Career Connections */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Professional Skills Development
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-800 mb-4">
              The skills you've developed today are directly applicable to numerous career paths and will 
              serve you whether you become an entrepreneur, work in finance, or join any business that 
              manages employees.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-blue-900 mb-2">For Future Entrepreneurs:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Confident hiring and team scaling</li>
                  <li>• Accurate business cost modeling</li>
                  <li>• Systems thinking for operational challenges</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-blue-900 mb-2">For Corporate Careers:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Advanced Excel skills valued by employers</li>
                  <li>• Understanding of payroll and HR systems</li>
                  <li>• Problem-solving with complex business logic</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reflection Journal */}
        <ReflectionJournal
          unitTitle="Unit 5 Lesson 3: Building the Prototype Calculator"
          prompts={reflectionPrompts}
        />

        {/* Preview of Next Lesson */}
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-900 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Looking Ahead to Lesson 4
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-orange-800 mb-3">
              Sarah's single-employee calculator works perfectly, but she knows TechStart Solutions will 
              grow beyond just Alex. In our next lesson, you'll help her build a bulletproof system 
              that can handle an entire team while preventing the costly errors that plague manual payroll.
            </p>
            
            <div className="bg-white p-4 rounded-lg border border-orange-200">
              <h4 className="font-semibold text-orange-900 mb-2">Lesson 4 Preview: Making Your Calculator Bulletproof</h4>
              <ul className="text-sm text-orange-800 space-y-1">
                <li>• Data validation techniques to prevent impossible entries</li>
                <li>• Conditional formatting for visual error alerts</li>
                <li>• Professional user interface design principles</li>
                <li>• Quality assurance and testing methodologies</li>
              </ul>
            </div>
          </CardContent>
        </Card>
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