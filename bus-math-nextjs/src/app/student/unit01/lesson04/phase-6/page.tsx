import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Lightbulb, ArrowRight, TrendingUp, Target } from "lucide-react"
import { lesson04Data, unit01Data, lesson04Phases } from "../lesson-data"

const currentPhase = lesson04Phases[5]

export default function Phase6Page() {

  const reflectionPrompts = [
    {
      id: "courage-excel",
      category: "courage" as const,
      prompt: "What was the most challenging Excel concept that required you to step outside your comfort zone and push through initial confusion?",
      placeholder: "Think about moments when SUMIF formulas seemed impossible, when Excel Table structure felt overwhelming, or when you had to rebuild something that wasn't working..."
    },
    {
      id: "adaptability-approach", 
      category: "adaptability" as const,
      prompt: "How did you adjust your learning approach when your first attempts at building Excel Tables or SUMIF formulas didn't work as expected?",
      placeholder: "Describe times when you switched strategies, tried different formula syntax, or changed your problem-solving approach based on feedback or errors..."
    },
    {
      id: "persistence-breakthrough",
      category: "persistence" as const, 
      prompt: "Describe a moment when you wanted to give up on the Excel challenges but kept working through the frustration. What breakthrough moment made it worth the effort?",
      placeholder: "Think about times when formulas kept showing errors, when the logic didn't click immediately, or when you felt overwhelmed by the complexity..."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      <PhaseHeader 
        lesson={lesson04Data}
        unit={unit01Data} 
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Closing Header */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-indigo-100 text-indigo-800 text-lg px-4 py-2">
              🎯 Phase 6: Closing
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Excel Mastery Complete: Building Your Future
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sarah closes her laptop with satisfaction. The Excel Tables and SUMIF system you 
              helped her build has transformed her TechStart Solutions from chaos to clarity. 
              She's no longer spending hours manually calculating account balances—instead, 
              she can generate any financial insight in seconds with perfect accuracy.
            </p>
          </div>
        </section>

        {/* Sarah's Success Story */}
        <section className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              More importantly, she now has the foundation of a self-auditing ledger that will 
              scale with her business growth and impress potential investors. Every new transaction 
              automatically updates her entire financial picture, and the system catches errors 
              before they become problems.
            </p>
          </div>
        </section>

        {/* Learning Synthesis */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <Target className="h-5 w-5" />
              What You've Accomplished Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-green-900 mb-2">Technical Mastery</h4>
                <ul className="text-green-800 space-y-1 list-disc list-inside text-sm">
                  <li>Created professional Excel Tables with structured references</li>
                  <li>Built sophisticated SUMIF formulas for automated calculations</li>
                  <li>Designed scalable systems that grow with business needs</li>
                  <li>Implemented error-checking and validation systems</li>
                  <li>Applied professional formatting and documentation standards</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-900 mb-2">Business Impact</h4>
                <ul className="text-green-800 space-y-1 list-disc list-inside text-sm">
                  <li>Reduced financial reporting time from hours to minutes</li>
                  <li>Eliminated manual calculation errors and inconsistencies</li>
                  <li>Created investor-ready financial control systems</li>
                  <li>Built foundation for business scaling and growth</li>
                  <li>Demonstrated systematic approach to financial management</li>
                </ul>
              </div>
            </div>
          </CardContent>
          </Card>
        </section>

        {/* Connection to Unit Challenge */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Your Progress Toward the Smart Ledger Launch</h3>
          <p className="text-blue-800 mb-4">
            Remember our driving question: <em>"How can we design a self-auditing ledger that would 
            convince a potential angel investor we keep 'clean books' from day 1?"</em>
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold text-blue-900 mb-2">✅ Foundation Complete</h4>
              <p className="text-blue-700 text-sm">
                You've mastered Excel Tables and SUMIF—the automation backbone that makes 
                a ledger "smart" and self-updating.
              </p>
            </div>
            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold text-blue-900 mb-2">🔄 Next: Error Detection</h4>
              <p className="text-blue-700 text-sm">
                Lesson 5 will add conditional formatting and "red flag" systems that make 
                your ledger truly self-auditing.
              </p>
            </div>
            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold text-blue-900 mb-2">🎯 Goal: Investor Pitch</h4>
              <p className="text-blue-700 text-sm">
                By unit's end, you'll present a complete smart ledger system to a panel 
                of finance professionals.
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* Reflection Journal */}
        <section className="max-w-4xl mx-auto">
          <ReflectionJournal
          unitTitle="Lesson 4 Reflection: Excel Tables & SUMIF Mastery"
          prompts={reflectionPrompts}
          />
        </section>

        {/* Looking Ahead */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Looking Ahead: Building on Your Excel Foundation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-purple-800 mb-4">
              Your Excel Tables and SUMIF mastery opens doors to advanced financial modeling 
              techniques that will serve you throughout your business career.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-purple-900">Lesson 5: Conditional Formatting & Error Checking</h4>
                  <p className="text-purple-700 text-sm">
                    Transform your ledger into a true self-auditing system with visual error detection 
                    and automated "red flag" alerts. You'll build the trial balance auto-check that 
                    gives investors ultimate confidence.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-purple-900">Professional Development Path</h4>
                  <p className="text-purple-700 text-sm">
                    The Excel automation skills you've developed are foundational for roles in 
                    financial analysis, business consulting, investment banking, and entrepreneurship. 
                    You're building a portfolio of professional-grade technical skills.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <ArrowRight className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-purple-900">Real-World Application</h4>
                  <p className="text-purple-700 text-sm">
                    Every business, from startup to Fortune 500, relies on the same systematic 
                    financial controls you're building. You're learning the tools that power 
                    modern business decision-making.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          </Card>
        </section>

        {/* Celebrating Success */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Lightbulb className="h-8 w-8 text-yellow-600" />
            <h3 className="text-2xl font-bold text-yellow-900">Congratulations!</h3>
          </div>
          <p className="text-yellow-800 text-lg mb-2">
            You've successfully mastered Excel Tables and SUMIF functions—essential tools for 
            professional financial management.
          </p>
          <p className="text-yellow-700">
            Sarah's TechStart Solutions is now equipped with the automated foundation of a 
            Smart Ledger system. Your next challenge: making it truly self-auditing with 
            advanced error detection and conditional formatting!
          </p>
          </div>
        </section>
      </main>

      <PhaseFooter 
        lesson={lesson04Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  )
}