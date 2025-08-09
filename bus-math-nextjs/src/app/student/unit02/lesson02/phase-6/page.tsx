import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb, ArrowRight, BookOpen, Code } from "lucide-react"
import { lesson02Data, unit02Data, lesson02Phases } from "../lesson-data"

export default function Unit02Lesson02Phase6() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 6)!
  
  const reflectionPrompts = [
    {
      id: "foundation",
      category: "courage" as const,
      prompt: "Explain how understanding adjusting entries gives you the courage to tackle Excel automation. What would happen if you tried to automate without this foundation?",
      placeholder: "Think about the relationship between accounting logic and automation logic..."
    },
    {
      id: "connection", 
      category: "adaptability" as const,
      prompt: "How can you adapt Sarah's four-scenario blueprint to different types of businesses? What patterns will remain the same?",
      placeholder: "Consider how accruals, deferrals, and depreciation apply across industries..."
    },
    {
      id: "persistence",
      category: "persistence" as const,
      prompt: "Describe the most challenging concept from this lesson and how you worked through it. What strategies helped you persist?",
      placeholder: "Reflect on your learning process and breakthrough moments..."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit02Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="prose prose-lg max-w-none">
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200 mb-8">
            <h2 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
              <Lightbulb className="h-6 w-6" />
              Foundation Complete: Ready for Automation
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Congratulations! You've mastered the essential building blocks that make month-end 
              automation possible. Just like Sarah, you now understand the logical foundation 
              that will power your Month-End Wizard.
            </p>

            <div className="bg-white p-4 rounded border-l-4 border-green-400">
              <p className="font-bold text-green-900 mb-2">Key Achievement:</p>
              <p className="text-green-800">
                You can now analyze any month-end scenario and map out the exact adjusting 
                entries required. This blueprint becomes the logical core of any automation 
                system you build.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  What You Mastered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-blue-700">
                  <li>• Accrual accounting principles and timing</li>
                  <li>• Deferred revenue recognition rules</li>
                  <li>• Straight-line depreciation calculations</li>
                  <li>• Closing entries process and purpose</li>
                  <li>• GAAP-compliant adjusting entry logic</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800 flex items-center gap-2">
                  <ArrowRight className="h-5 w-5" />
                  Sarah's Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-purple-700 mb-3">
                  Sarah now has her peer-reviewed blueprint of the four essential scenarios. 
                  She's ready to transform repetitive manual tasks into automated efficiency.
                </p>
                <p className="text-xs text-purple-600 italic">
                  "I understand the 'what' and 'why' behind every entry. Now I can teach 
                  the computer to do it for me!"
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Coming Next
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-orange-700 mb-2">
                  <strong>Lesson 3: Macro Magic</strong>
                </p>
                <p className="text-xs text-orange-600">
                  Learn to build Excel macros and VBA code that transform your 
                  logical blueprint into automated month-end processing.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-8">
            <h3 className="text-xl font-bold text-yellow-900 mb-3">🧠 The Logic-to-Automation Bridge</h3>
            <p className="text-yellow-800 mb-4">
              Understanding accounting logic isn't just about following rules—it's about building 
              the foundation for intelligent automation. Every "if-then" statement in your future 
              VBA code will be based on the scenarios you mapped today.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-2">Accounting Logic:</h4>
                <p className="text-yellow-800 text-sm">
                  "If revenue is earned but not invoiced, then record accrued revenue."
                </p>
              </div>
              <div className="bg-white p-4 rounded border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-2">Automation Logic:</h4>
                <p className="text-yellow-800 text-sm">
                  "If [condition], then automatically debit A/R and credit revenue."
                </p>
              </div>
            </div>
          </div>

          <ReflectionJournal 
            prompts={reflectionPrompts}
            unitTitle="Lesson Reflection: Building Blocks Mastered"
          />

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mt-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">🔮 The Automation Preview</h3>
            <p className="text-blue-800 mb-4">
              The concepts you mastered today aren't just academic—they're the building blocks 
              of real business value. Consider this transformation:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-100 p-4 rounded border border-red-200">
                <h4 className="font-semibold text-red-900 mb-2">❌ Before (Sarah's Nightmare):</h4>
                <ul className="text-red-800 text-sm space-y-1">
                  <li>• Entire weekend spent on month-end</li>
                  <li>• Dozens of errors from manual entry</li>
                  <li>• Time wasted hunting down mistakes</li>
                  <li>• Frustration and business inefficiency</li>
                </ul>
              </div>
              
              <div className="bg-green-100 p-4 rounded border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">✅ After (With Automation):</h4>
                <ul className="text-green-800 text-sm space-y-1">
                  <li>• One-click execution of all adjusting entries</li>
                  <li>• Perfect accuracy through logical rules</li>
                  <li>• Hours of time returned to Sarah</li>
                  <li>• Professional, investor-ready results</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-6">
            <h3 className="text-xl font-bold text-green-900 mb-3">🚀 You're Ready for the Next Level</h3>
            <p className="text-green-800">
              Every successful automation project starts exactly where you are now: with deep 
              understanding of the underlying logic and business rules. You've built the 
              intellectual foundation. Next, you'll learn to translate that understanding 
              into Excel macros, VBA code, and user-friendly automation tools.
            </p>
          </div>
        </div>
      </div>
      
      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit02Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}