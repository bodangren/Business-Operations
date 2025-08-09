import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import FinancialStatementMatching from "@/components/drag-drop-exercises/FinancialStatementMatching"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Users, Star, ArrowRight } from "lucide-react"
import { lesson02Data, unit02Data, lesson02Phases } from "../lesson-data"

export default function Unit02Lesson02Phase4() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 4)!
  
  const practiceQuestions = [
    {
      id: "practice1",
      question: "In the Gallery Walk, what makes feedback most valuable?",
      answers: [
        "Being specific, actionable, and kind",
        "Finding as many errors as possible",
        "Complimenting everything you see",
        "Focusing only on major problems"
      ]
    },
    {
      id: "practice2", 
      question: "The 'Stars and Steps' feedback framework means:",
      answers: [
        "Stars = what they did well, Steps = specific improvements",
        "Stars = rating their work, Steps = counting their entries",
        "Stars = perfect answers, Steps = wrong answers",
        "Stars = easy parts, Steps = difficult parts"
      ]
    },
    {
      id: "practice3",
      question: "Why is getting feedback BEFORE building automation crucial?",
      answers: [
        "It prevents building on a flawed logical foundation",
        "It's required by GAAP accounting standards",
        "It makes the final product look more professional",
        "It helps teams work faster during development"
      ]
    }
  ]

  const feedbackBlanks = [
    {
      id: "feedback1",
      text: "When giving 'Stars' feedback, point out {blank} strengths that teams should continue doing.",
      answer: "specific",
      hint: "Avoid generic praise like 'it looks good'"
    },
    {
      id: "feedback2",
      text: "When giving 'Steps' feedback, offer {blank} suggestions for improvement, not just criticism.",
      answer: "actionable",
      hint: "Give them something concrete they can actually do to improve"
    },
    {
      id: "feedback3",
      text: "Getting feedback early and often saves a huge amount of {blank} and prevents building on flawed foundations.",
      answer: "time",
      hint: "Think about what resource Sarah values most in her business"
    }
  ]

  const galleryWalkItems = [
    { id: '1', content: 'Crystal clear depreciation calculation', category: 'Stars (Strengths)' },
    { id: '2', content: 'Well-organized closing entries layout', category: 'Stars (Strengths)' },
    { id: '3', content: 'Clarify the deferred revenue calculation', category: 'Steps (Improvements)' },
    { id: '4', content: 'Fix account name in accrual entry', category: 'Steps (Improvements)' },
    { id: '5', content: 'Excellent use of T-accounts for visualization', category: 'Stars (Strengths)' },
    { id: '6', content: 'Add dollar signs to all monetary amounts', category: 'Steps (Improvements)' },
    { id: '7', content: 'Perfect balance in accounting equation', category: 'Stars (Strengths)' },
    { id: '8', content: 'Include date in journal entry header', category: 'Steps (Improvements)' }
  ]

  const categories = ['Stars (Strengths)', 'Steps (Improvements)']

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
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200 mb-8">
            <h2 className="text-2xl font-bold text-purple-900 mb-4 flex items-center gap-2">
              <Eye className="h-6 w-6" />
              The Power of a Second Opinion
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              In business and technology, great things are never built in isolation. Even with 
              Sarah's carefully planned blueprint, she needed a second pair of eyes on her logic. 
              Getting feedback early and often prevents building on flawed foundations.
            </p>

            <div className="bg-white p-4 rounded border-l-4 border-purple-400 mb-4">
              <p className="font-bold text-purple-900 mb-2">Why This Matters:</p>
              <p className="text-purple-800">
                Before spending hours trying to automate the process, Sarah needed to verify 
                her logic was perfect. This is normal and essential in developing any new tool 
                or system—just like software development teams do during "design reviews."
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-100 p-3 rounded border border-green-200">
                <p className="font-semibold text-green-900 mb-1">✓ The Benefit</p>
                <p className="text-green-800 text-sm">
                  Saves huge amounts of time and prevents automation built on wrong logic
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded border border-blue-200">
                <p className="font-semibold text-blue-900 mb-1">🎯 The Process</p>
                <p className="text-blue-800 text-sm">
                  Structured Gallery Walk with peer feedback using "Stars and Steps" framework
                </p>
              </div>
            </div>
          </div>

          <Card className="border-blue-200 bg-blue-50 mb-8">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Star className="h-5 w-5" />
                The Gallery Walk Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">📋 How It Works</h4>
                  <ol className="list-decimal list-inside space-y-2 text-blue-800">
                    <li>Each team posts their four scenario mappings at a station around the room</li>
                    <li>Teams rotate through stations, observing others' work</li>
                    <li>Provide constructive feedback using the "Stars and Steps" framework</li>
                    <li>Return to your station to review feedback received</li>
                  </ol>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                    <h5 className="font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                      ⭐ Stars (Strengths)
                    </h5>
                    <p className="text-yellow-800 text-sm mb-2">What did this team do really well?</p>
                    <ul className="text-xs text-yellow-700 space-y-1">
                      <li>• Crystal clear depreciation logic?</li>
                      <li>• Well-organized closing entries?</li>
                      <li>• Perfect account naming?</li>
                      <li>• Easy-to-follow layout?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded border border-green-200">
                    <h5 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                      📈 Steps (Improvements)
                    </h5>
                    <p className="text-green-800 text-sm mb-2">What specific steps could make it better?</p>
                    <ul className="text-xs text-green-700 space-y-1">
                      <li>• Clarify confusing calculations?</li>
                      <li>• Fix incorrect account names?</li>
                      <li>• Improve visual organization?</li>
                      <li>• Add missing details?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <ComprehensionCheck 
            questions={practiceQuestions}
            title="Gallery Walk Preparation"
            showExplanations={true}
          />

          <FinancialStatementMatching
            items={galleryWalkItems}
            categories={categories}
            title="Practice: Giving Quality Feedback"
            description="Sort these feedback examples into 'Stars' (strengths to celebrate) or 'Steps' (specific improvements). This prepares you to give valuable feedback during the Gallery Walk."
          />

          <FillInTheBlank 
            sentences={feedbackBlanks}
            title="Feedback Quality Check"
            description="Complete these statements about giving effective peer feedback"
            showHints={true}
          />

          <Card className="border-orange-200 bg-orange-50 mt-8">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Gallery Walk Instructions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border border-orange-200">
                  <h4 className="font-semibold text-orange-900 mb-3">🎯 Your Mission</h4>
                  <p className="text-orange-800 mb-3">
                    Visit each station and provide constructive feedback on their four scenario 
                    mappings. Your goal: help every team build a solid foundation for automation.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="bg-orange-50 p-3 rounded border">
                      <p className="font-medium text-orange-900 mb-1">✓ DO:</p>
                      <ul className="text-sm text-orange-800 space-y-1">
                        <li>• Be specific and actionable</li>
                        <li>• Point out clear strengths</li>
                        <li>• Suggest concrete improvements</li>
                        <li>• Focus on logic and accuracy</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-3 rounded border border-red-200">
                      <p className="font-medium text-red-900 mb-1">✗ AVOID:</p>
                      <ul className="text-sm text-red-800 space-y-1">
                        <li>• Generic comments like "looks good"</li>
                        <li>• Just finding fault without solutions</li>
                        <li>• Ignoring obvious strengths</li>
                        <li>• Focusing on handwriting/neatness</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded border border-orange-200">
                  <p className="font-medium text-orange-900 mb-2 flex items-center gap-2">
                    <ArrowRight className="h-4 w-4" />
                    After the Gallery Walk:
                  </p>
                  <p className="text-orange-800 text-sm">
                    Return to your station to review the feedback you received. Use it to refine 
                    your mappings before the next phase. Remember: this feedback ensures your 
                    Month-End Wizard blueprint is absolutely solid!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-6">
            <h3 className="text-xl font-bold text-green-900 mb-3">🔍 The Quality Check</h3>
            <p className="text-green-800">
              This Gallery Walk is your chance to catch small errors, learn new approaches from 
              classmates, and ensure your logical blueprint is perfect before building automation. 
              Just like Sarah needed Marcus's perspective, you need your peers' insights!
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