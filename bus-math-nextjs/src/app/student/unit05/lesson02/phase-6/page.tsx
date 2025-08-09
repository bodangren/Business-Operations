import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson02Data, lesson02Phases, unit05Data } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, ArrowRight, TrendingUp } from "lucide-react"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"

const currentPhase = lesson02Phases[5] // Phase 6: Closing

const reflectionPrompts = [
  {
    id: 'courage-payroll',
    category: 'courage' as const,
    prompt: 'What was the most intimidating aspect of learning payroll calculations, and how did you push through your initial confusion or uncertainty?',
    placeholder: 'Think about moments when the math seemed overwhelming or when you had to tackle complex scenarios like overtime calculations. How did you find the courage to keep working through the challenges?'
  },
  {
    id: 'adaptability-calculations',
    category: 'adaptability' as const,
    prompt: 'How did you adjust your thinking when you discovered the difference between gross pay, net pay, and total employer costs?',
    placeholder: 'Describe how your understanding evolved from simple hourly wages to complex payroll systems. What surprised you, and how did you adapt your approach to learning these interconnected concepts?'
  },
  {
    id: 'persistence-mastery',
    category: 'persistence' as const,
    prompt: 'Describe a specific moment when you wanted to give up on mastering these payroll concepts. What motivated you to persist until you understood?',
    placeholder: 'Think about challenging calculations, complex scenarios, or moments of frustration. What kept you going, and how do you feel now that you\'ve developed this expertise?'
  }
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100">
      <PhaseHeader
        lesson={lesson02Data}
        unit={unit05Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
      
      <main className="max-w-4xl mx-auto px-6 pb-8 space-y-8">
        {/* Closing Content */}
        <div className="space-y-6">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
              <Lightbulb className="h-4 w-4" />
              Reflection & Next Steps
            </div>
            <h1 className="text-4xl font-bold text-gray-900 leading-tight">
              From Fear to Confidence
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              You've just mastered the mathematical foundation that transforms business owners 
              from payroll-anxious to payroll-confident. Sarah can now hire Alex with complete understanding.
            </p>
          </div>

          {/* Achievement Summary */}
          <Card className="border-2 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 text-2xl flex items-center gap-2">
                🎉 What You've Accomplished
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-green-800">
              <p className="text-lg leading-relaxed">
                Today, you've built the precise mathematical skills that separate successful employers 
                from those who struggle with payroll management:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                  <h3 className="font-bold mb-2 text-green-900">Technical Mastery</h3>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Gross-to-net pay calculations for all employee types</li>
                    <li>✓ FICA tax calculations (Social Security & Medicare)</li>
                    <li>✓ Overtime pay formulas and their cash impact</li>
                    <li>✓ True employer costs beyond gross wages</li>
                  </ul>
                </div>
                <div className="bg-green-100 p-4 rounded-lg border border-green-300">
                  <h3 className="font-bold mb-2 text-green-900">Business Understanding</h3>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Why cash flow timing matters more than totals</li>
                    <li>✓ How to predict payroll cash requirements</li>
                    <li>✓ The connection between payroll accuracy and employee trust</li>
                    <li>✓ Strategic implications of hourly vs. salary decisions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sarah's Transformation */}
          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 text-2xl">Sarah's Journey: Before and After</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-blue-800">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-100 p-4 rounded-lg border border-red-300">
                  <h3 className="font-bold mb-2 text-red-900">Before This Lesson</h3>
                  <ul className="space-y-2 text-red-800">
                    <li>😰 Terrified of hiring because of payroll unknowns</li>
                    <li>❓ Confused about true costs beyond hourly wages</li>
                    <li>😟 Worried about cash flow timing like Maria's crisis</li>
                    <li>🤔 Uncertain about setting proper expectations with Alex</li>
                  </ul>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
                  <h3 className="font-bold mb-2 text-blue-900">After This Lesson</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li>💪 Confident in exact payroll cost calculations</li>
                    <li>📊 Clear understanding of gross vs. net vs. total cost</li>
                    <li>🎯 Equipped to build a Payday Simulator system</li>
                    <li>🤝 Ready to hire Alex with complete transparency</li>
                  </ul>
                </div>
              </div>
              <div className="bg-blue-100 p-4 rounded-lg border border-blue-300 text-center">
                <p className="font-bold text-blue-900 text-lg">
                  Sarah can now say: "I know exactly what Alex will cost me, when I'll need the cash, 
                  and how to build systems that prevent payroll crises."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Looking Forward */}
          <Card className="border-2 border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 text-2xl flex items-center gap-2">
                <TrendingUp className="h-6 w-6" />
                Building the Complete Payday Simulator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-purple-800">
              <p className="text-lg leading-relaxed">
                You've mastered the mathematical foundation, but Sarah's Payday Simulator needs more 
                to become a bulletproof system. In the upcoming lessons, you'll build:
              </p>
              <div className="grid md:grid-cols-1 gap-4">
                <div className="bg-purple-100 p-4 rounded-lg border border-purple-300">
                  <h3 className="font-bold mb-2 text-purple-900">Next: Professional Error-Checking Systems</h3>
                  <p className="text-sm">
                    Learn to build conditional formatting rules and data validation that catch mistakes 
                    before they become costly payroll errors. Create "bulletproof" spreadsheets 
                    that prevent the data entry mistakes that can break payroll systems.
                  </p>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg border border-purple-300">
                  <h3 className="font-bold mb-2 text-purple-900">Then: Multi-Employee Payroll Registers</h3>
                  <p className="text-sm">
                    Scale up from single-employee calculations to handle entire teams using XLOOKUP 
                    functions. Build systems that can process payroll for 5, 10, or 50 employees 
                    with the same accuracy and speed.
                  </p>
                </div>
                <div className="bg-purple-100 p-4 rounded-lg border border-purple-300">
                  <h3 className="font-bold mb-2 text-purple-900">Finally: Bank Reconciliation and Cash Flow Forecasting</h3>
                  <p className="text-sm">
                    Complete the Payday Simulator with bank reconciliation systems that track when 
                    payroll actually hits your bank account, giving you the timing intelligence 
                    to avoid Maria's Friday Crisis forever.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preview Connection */}
          <Card className="border-2 border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-900 text-2xl flex items-center gap-2">
                <ArrowRight className="h-6 w-6" />
                The Bigger Picture
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-amber-800">
              <p className="text-lg leading-relaxed">
                This lesson is the first step in Sarah's transformation from solopreneur to confident team leader. 
                The payroll mathematics you've mastered today becomes the foundation for:
              </p>
              <div className="bg-amber-100 p-4 rounded-lg border border-amber-300">
                <h3 className="font-bold mb-2 text-amber-900">Unit 5 Capstone: The Complete Payday Simulator</h3>
                <p className="text-sm">
                  By the end of this unit, you'll present a complete Excel-based payroll system to real business owners, 
                  demonstrating how mathematical precision creates business confidence. Your system will help entrepreneurs 
                  make hiring decisions based on data, not fear.
                </p>
              </div>
              <p className="text-center font-semibold text-amber-900">
                Today's math + Professional systems = Business growth with confidence
              </p>
            </CardContent>
          </Card>

          {/* CAP Reflection */}
          <ReflectionJournal
            unitTitle="Lesson 2 Reflection: Mastering Payroll Mathematics"
            prompts={reflectionPrompts}
          />
        </div>
      </main>

      <PhaseFooter
        lesson={lesson02Data}
        unit={unit05Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}