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
      prompt: "What was the most challenging Excel Table concept that required you to step outside your comfort zone and push through initial confusion?",
      placeholder: "Think about moments when table structure seemed unclear, when the headers checkbox was confusing, or when you had to troubleshoot formatting issues..."
    },
    {
      id: "adaptability-approach", 
      category: "adaptability" as const,
      prompt: "How did you adjust your approach when your first attempts at building the Excel Table didn't work as expected?",
      placeholder: "Describe times when you switched strategies, tried different naming conventions, or changed your problem-solving approach based on Excel errors..."
    },
    {
      id: "persistence-breakthrough",
      category: "persistence" as const, 
      prompt: "Describe a moment when you wanted to give up on Excel Table challenges but kept working through frustration. What breakthrough moment made it worth the effort?",
      placeholder: "Think about times when tables wouldn't format correctly, when formulas broke, or when you felt overwhelmed by professional standards..."
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
              🎯 Phase 6: Reflection and Handoff
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Excel Table Mastery Complete: Foundation for Automation
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sarah closes her laptop with satisfaction. The professional Excel Table structure 
              you helped her build has transformed her chaotic notebook into an organized, 
              investor-ready ledger system.
            </p>
          </div>
        </section>

        {/* Sarah's Success Story */}
        <section className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relracted">
              More importantly, she now has the foundation of a smart ledger that will support 
              automated formulas in the next lesson. Every new transaction she enters automatically 
              inherits professional formatting and structure. Her table is ready for growth.
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
                    <li>Created professional Excel Table from transaction data</li>
                    <li>Applied consistent currency formatting and structure</li>
                    <li>Named table for structured references in future formulas</li>
                    <li>Implemented professional formatting and presentation standards</li>
                    <li>Verified table features: filtering, expansion, styling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Business Impact</h4>
                  <ul className="text-green-800 space-y-1 list-disc list-inside text-sm">
                    <li>Built investor-ready ledger structure in one session</li>
                    <li>Created systematic approach that scales with business growth</li>
                    <li>Established foundation for automated calculations in Lesson 05</li>
                    <li>Signaled professional financial controls through structure</li>
                    <li>Prepared ledger for instant verification and analysis</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Connection to Unit Challenge */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Your Progress Toward Self-Auditing Ledger</h3>
            <p className="text-blue-800 mb-4">
              Remember our driving question: <em>"How can we design a self-auditing ledger that would 
              convince a potential angel investor we keep 'clean books' from day 1?"</em>
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-blue-900 mb-2">✅ Structure Complete</h4>
                <p className="text-blue-700 text-sm">
                  You've built Sarah's professional Excel Table—the structured foundation that 
                  makes a ledger reliable and scalable.
                </p>
              </div>
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-blue-900 mb-2">🔄 Next: Automated Formulas</h4>
                <p className="text-blue-700 text-sm">
                  Lesson 05 will add self-auditing formulas, totals, and error flags 
                  that make Sarah's ledger truly automated.
                </p>
              </div>
              <div className="bg-white p-4 rounded border">
                <h4 className="font-semibold text-blue-900 mb-2">🎯 Goal: Investor-Ready</h4>
                <p className="text-blue-700 text-sm">
                  By unit's end, you'll present a complete self-auditing ledger 
                  to a panel of finance professionals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection Journal */}
        <section className="max-w-4xl mx-auto">
          <ReflectionJournal
            unitTitle="Lesson 4 Reflection: Excel Table Structure Mastery"
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
                Your Excel Table mastery opens the door to automated formulas and professional 
                financial systems. The professional structure you've built today is the foundation 
                for everything that follows.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-purple-900">Lesson 05: Self-Auditing Formulas</h4>
                    <p className="text-purple-700 text-sm">
                      Build automated formulas, totals, and error flags that make Sarah's 
                      ledger truly self-auditing. You'll learn SUMIF, trial balance checks, 
                      and red-flag systems for investor confidence.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-purple-900">Professional Development Path</h4>
                    <p className="text-purple-700 text-sm">
                      The Excel structure skills you've developed are foundational for roles in 
                      financial analysis, business operations, and entrepreneurship. You're building 
                      professional-grade technical skills that scale.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-purple-900">Real-World Application</h4>
                    <p className="text-purple-700 text-sm">
                      Every business, from startup to Fortune 500, relies on structured 
                      financial data systems like the one you've built today. You're learning 
                      the tools that power modern business decision-making.
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
              You've successfully built Sarah's professional Excel Table structure—the 
              foundation of her investor-ready smart ledger system.
            </p>
            <p className="text-yellow-700">
              Sarah's TechStart Solutions is now equipped with structured, professional 
              financial data ready for automated formulas. Your next challenge: building 
              self-auditing calculations and error detection systems!
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
