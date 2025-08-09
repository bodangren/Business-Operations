'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Lightbulb, ArrowRight, Star, TrendingUp } from "lucide-react"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson02Data, lesson02Phases, unit03Data } from "../lesson-data"

const incomeStatementReflectionPrompts = [
  {
    id: 'courage-income',
    category: 'courage' as const,
    prompt: 'Building Income Statements with dynamic formulas required stepping outside your comfort zone. What was the most challenging part of learning INDEX/MATCH techniques, and how did you push through when the concepts felt overwhelming?',
    placeholder: 'Describe a specific moment when you had to take a risk with complex Excel formulas or tackle unfamiliar accounting concepts...'
  },
  {
    id: 'adaptability-income',
    category: 'adaptability' as const,
    prompt: 'Sarah had to adapt when her internal spreadsheets weren\'t sufficient for professional use. How did you adjust your approach when moving from simple account categorization to complex dynamic financial statement construction?',
    placeholder: 'Think about times when you had to change your strategy for understanding Income Statement construction or modify your approach to Excel formulas...'
  },
  {
    id: 'persistence-income',
    category: 'persistence' as const,
    prompt: 'Mastering the connection between trial balances and Income Statements takes sustained effort and practice. Describe a moment when you wanted to give up on a challenging concept but kept working. What motivated you to persist?',
    placeholder: 'Reflect on your perseverance when working through difficult drag-drop exercises, complex business scenarios, or challenging assessment questions...'
  }
]

export default function Phase6Page() {
  const currentPhase = lesson02Phases[5] // Closing phase

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="space-y-8">
        {/* Lesson Closing */}
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-800 text-2xl flex items-center gap-2">
              <Lightbulb className="h-6 w-6" />
              Closing: From Spreadsheet Chaos to Financial Storytelling
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                Today you've accomplished something remarkable. You started this lesson understanding 
                the frustration Sarah felt when her internal spreadsheets weren't enough for professional 
                use. Now you've mastered the same Income Statement construction skills that transformed 
                her business prospects and opened the door to major opportunities.
              </p>

              <p className="text-lg leading-relaxed">
                More importantly, you've learned to think like a financial professional. You understand 
                that behind every number is a story, and behind every formula is a business decision 
                that can shape a company's future. This perspective—this ability to see the human 
                impact of financial modeling—is what separates true business leaders from those who 
                simply follow procedures.
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border-2 border-indigo-400">
              <h3 className="font-semibold text-indigo-800 mb-2">🎯 What You've Achieved Today</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-indigo-700 mb-2">Technical Mastery</h4>
                  <ul className="text-indigo-600 text-sm space-y-1">
                    <li>• Income Statement formula: Revenues - Expenses = Net Income</li>
                    <li>• Dynamic INDEX/MATCH formula construction</li>
                    <li>• Professional account categorization principles</li>
                    <li>• Live-updating financial statement creation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-indigo-700 mb-2">Business Understanding</h4>
                  <ul className="text-indigo-600 text-sm space-y-1">
                    <li>• Financial storytelling for investors and lenders</li>
                    <li>• Professional financial statement presentation</li>
                    <li>• Business decision impact on financial reports</li>
                    <li>• Integrated financial modeling foundations</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Journey Reflection */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <Star className="h-5 w-5" />
              Your Learning Journey: From Confusion to Confidence
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              <p>
                Think back to the beginning of this lesson, when you first learned about Sarah's 
                challenge at the bank. The concepts that might have seemed intimidating then—dynamic 
                formulas, professional financial statements, investor storytelling—are now tools 
                in your growing expertise.
              </p>

              <div className="bg-white p-4 rounded-lg border border-green-200 my-4">
                <h4 className="font-semibold text-green-800 mb-2">📈 Your Growth Trajectory</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Badge className="bg-red-600 text-xs">Phase 1</Badge>
                    <p className="text-green-700 text-sm">Engaged with Sarah's challenge and understood the need for professional financial statements</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-blue-600 text-xs">Phase 2</Badge>
                    <p className="text-green-700 text-sm">Learned Income Statement structure and INDEX/MATCH formula principles</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-green-600 text-xs">Phase 3</Badge>
                    <p className="text-green-700 text-sm">Practiced foundational skills through guided account categorization exercises</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-purple-600 text-xs">Phase 4</Badge>
                    <p className="text-green-700 text-sm">Applied advanced skills to complex business scenarios independently</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-orange-600 text-xs">Phase 5</Badge>
                    <p className="text-green-700 text-sm">Demonstrated mastery through comprehensive assessment</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge className="bg-indigo-600 text-xs">Phase 6</Badge>
                    <p className="text-green-700 text-sm">Reflected on learning and prepared for advanced financial modeling challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CAP Framework Reflection */}
        <ReflectionJournal
          unitTitle="Income Statement Construction: Reflection on Learning"
          prompts={incomeStatementReflectionPrompts}
        />

        {/* Looking Forward */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-800 flex items-center gap-2">
              <ArrowRight className="h-5 w-5" />
              Looking Forward: The Complete Financial Storyboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              <p>
                Remember Jennifer Kim's vision: the three financial statements work together as a 
                "storyboard" to tell one complete business story. You've mastered the first critical 
                piece—the Income Statement that reveals profitability. But the story isn't complete yet.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="bg-green-100 p-4 rounded-lg border-2 border-green-400">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-green-600">✅ Mastered</Badge>
                    <h4 className="font-semibold text-green-800">The Plot</h4>
                  </div>
                  <p className="text-green-700 text-sm">
                    <strong>Income Statement:</strong> You can build dynamic profitability reports 
                    that tell compelling stories about business performance over time.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-2 border-blue-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-600">🔜 Next</Badge>
                    <h4 className="font-semibold text-blue-800">The Setting</h4>
                  </div>
                  <p className="text-blue-700 text-sm">
                    <strong>Balance Sheet:</strong> Learn to show financial position—what the 
                    business owns versus what it owes—and connect it to your Income Statement.
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-600">🔮 Future</Badge>
                    <h4 className="font-semibold text-purple-800">The Action</h4>
                  </div>
                  <p className="text-purple-700 text-sm">
                    <strong>Cash Flow Statement:</strong> Complete the storyboard by tracking 
                    how cash actually moves through the business operations.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-amber-400">
                <h4 className="font-semibold text-amber-800 mb-2">🔗 The Integration Challenge</h4>
                <p className="text-amber-700">
                  In upcoming lessons, you'll discover how these three statements connect. The Net Income 
                  from your Income Statement flows into the Balance Sheet through Retained Earnings. 
                  The Balance Sheet provides the foundation for the Cash Flow Statement. When you master 
                  this integration, you'll have the same complete financial modeling skills that helped 
                  Sarah secure her business loan and attract investors.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final Inspiration */}
        <Card className="border-2 border-indigo-400 bg-gradient-to-br from-indigo-50 to-purple-50">
          <CardHeader>
            <CardTitle className="text-indigo-800 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Your Financial Modeling Journey Continues
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                Sarah's story didn't end when she got her business loan. With her professional 
                financial statements in hand, she secured the major retail client, expanded her 
                services, and built TechStart Solutions into the successful consultancy she had 
                always envisioned. The Income Statement skills you've mastered today were the 
                foundation that made all of this possible.
              </p>

              <p className="text-lg leading-relaxed font-medium text-indigo-800">
                Your story is just beginning. The skills you've built today—dynamic formula 
                construction, professional financial statement creation, business storytelling 
                through numbers—are the same skills that will help you succeed in whatever 
                business venture you pursue.
              </p>

              <div className="bg-white p-4 rounded-lg border-2 border-indigo-400 mt-4 text-center">
                <p className="text-indigo-800 font-bold text-lg">
                  🌟 Congratulations on mastering the "plot" of your business story! 🌟
                </p>
                <p className="text-indigo-700 mt-2">
                  You're ready to move forward with confidence, knowing you can build the financial 
                  statements that turn business ideas into investment-ready opportunities.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}