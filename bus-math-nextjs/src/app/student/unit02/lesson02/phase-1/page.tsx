import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, AlertTriangle, Users } from "lucide-react"
import { lesson02Data, unit02Data, lesson02Phases } from "../lesson-data"

export default function Unit02Lesson02Phase1() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 1)!
  const hookQuestions = [
    {
      id: "hook1",
      question: "What was the main problem Sarah faced with her month-end closing process?",
      answers: [
        "It took her entire weekend and was full of errors",
        "She couldn't afford accounting software",
        "Her clients weren't paying on time",
        "She didn't understand basic accounting"
      ]
    },
    {
      id: "hook2", 
      question: "According to Marcus, what was Sarah's most valuable business asset?",
      answers: [
        "Her time",
        "Her computer equipment", 
        "Her client relationships",
        "Her technical skills"
      ]
    },
    {
      id: "hook3",
      question: "What is Sarah's goal for her Month-End Wizard automation?",
      answers: [
        "Cut closing time from two days to two hours",
        "Eliminate all manual bookkeeping",
        "Replace her accountant completely",
        "Process transactions in real-time"
      ]
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
          
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200 mb-8">
            <h2 className="text-2xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6" />
              The Weekend Nightmare
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Sarah thought she had solved her bookkeeping problems with her "Smart Ledger" from Unit 1. 
              Her business was growing, she landed her first monthly retainer client, and life was good. 
              But then came her first real month-end closing...
            </p>

            <div className="bg-white p-4 rounded border-l-4 border-red-400 mb-4">
              <p className="text-red-800 font-medium mb-2">The Complete Nightmare:</p>
              <p className="text-red-700">
                Sarah spent her entire weekend hunched over her laptop, cross-referencing every transaction. 
                She found dozens of tiny errors—typos, missed subscription fees, small mistakes that threw 
                off her totals. Each error sent her on long, frustrating hunts for the source of the problem.
              </p>
            </div>

            <p className="text-lg leading-relaxed">
              Her "smart" ledger was still completely manual, eating up her most valuable resource: time. 
              She had solved one problem only to create another.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
            <h3 className="text-xl font-bold text-blue-900 mb-3">💡 The Mentor's Wake-Up Call</h3>
            <p className="text-blue-800 mb-4">
              Frustrated, Sarah vented to her mentor, Marcus Rodriguez, about wasting a whole weekend 
              on administrative work. Marcus was direct and transformative in his response.
            </p>
            
            <div className="bg-white p-4 rounded border border-blue-200">
              <p className="text-blue-800 italic mb-2">
                "Your time is the most valuable asset in your business, and you're wasting it on tasks 
                that a machine could do better and more accurately."
              </p>
              <p className="text-blue-700 text-sm">
                — Marcus Rodriguez, Sarah's Business Mentor
              </p>
            </div>

            <p className="text-blue-800 mt-4">
              Marcus pushed Sarah to stop thinking about just <em>recording</em> her finances and start 
              thinking about <em>automating</em> them. Those "little" errors weren't so little—they could 
              have serious consequences down the road.
            </p>
          </div>

          <Card className="border-green-200 bg-green-50 mb-8">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                The Essential Question
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center p-4 bg-white rounded border border-green-200">
                <p className="text-xl font-bold text-green-900 mb-2">
                  "What automation can cut our month-end closing time from 
                  two days to two hours without sacrificing GAAP accuracy?"
                </p>
                <p className="text-green-700 text-sm">
                  This conversation sparked the goal that drives our entire Unit 2 project.
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-8">
            <h3 className="text-xl font-bold text-yellow-900 mb-3">📦 Your Challenge: The Shoebox Receipt Challenge</h3>
            <p className="text-yellow-800 mb-4">
              Before you can build your own solution, you need to understand the problem firsthand. 
              Your team will experience the same bottlenecks and frustrations that Sarah did.
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 rounded border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-2">📋 The Task</h4>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• Sort a pile of mock receipts</li>
                  <li>• Categorize each transaction</li>
                  <li>• Process them manually</li>
                  <li>• Time yourselves throughout</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded border border-yellow-200">
                <h4 className="font-semibold text-yellow-900 mb-2">🎯 The Goal</h4>
                <ul className="text-sm text-yellow-800 space-y-1">
                  <li>• Feel the pain of manual processing</li>
                  <li>• Understand why automation matters</li>
                  <li>• Experience the time bottlenecks</li>
                  <li>• Identify improvement opportunities</li>
                </ul>
              </div>
            </div>

            <p className="text-yellow-800">
              Once you've experienced this frustration, you'll form project teams and choose an 
              automation focus area—accruals, deferrals, or depreciation—to begin building your 
              own Month-End Wizard.
            </p>
          </div>

          <ComprehensionCheck 
            questions={hookQuestions}
            title="Understanding the Problem"
            showExplanations={true}
          />

          <Card className="border-purple-200 bg-purple-50 mt-8">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-purple-900 mb-2">
                Discussion Prompt (3 minutes):
              </p>
              <p className="text-purple-800 mb-2">
                Think about Sarah's "weekend nightmare" experience. Share with a partner:
              </p>
              <ul className="list-disc list-inside space-y-1 text-purple-800">
                <li>What specific problems do you see with manual month-end processing?</li>
                <li>How might these time-consuming processes affect a growing business?</li>
                <li>What would convince you that automation is worth the effort to build?</li>
              </ul>
            </CardContent>
          </Card>
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