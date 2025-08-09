'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Award, TrendingUp, Calculator } from "lucide-react"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson02Data, lesson02Phases, unit03Data } from "../lesson-data"

const assessmentQuestions = [
  {
    id: 'assessment-1',
    question: 'Sarah needs to show her bank that TechStart Solutions is profitable. Which financial statement tells this part of her business story?',
    answers: [
      'Income Statement - it shows whether revenues exceed expenses over a time period',
      'Balance Sheet - it shows what she owns versus what she owes',
      'Statement of Cash Flows - it shows how cash moves through the business',
      'Trial Balance - it shows all account balances'
    ],
    explanation: 'The Income Statement is the financial statement that reveals profitability by comparing revenues to expenses, making it the "plot" of the business story.'
  },
  {
    id: 'assessment-2',
    question: 'Why does Jennifer Kim recommend using INDEX/MATCH instead of copying and pasting numbers into the Income Statement?',
    answers: [
      'INDEX/MATCH creates dynamic formulas that automatically update when new transactions are added to the ledger',
      'INDEX/MATCH is faster to type than copying and pasting',
      'Banks require the use of complex formulas for loan approval',
      'INDEX/MATCH prevents all calculation errors'
    ],
    explanation: 'Dynamic formulas like INDEX/MATCH create live links between the trial balance and financial statements, ensuring automatic updates and maintaining data integrity.'
  },
  {
    id: 'assessment-3',
    question: 'If Sarah\'s Service Revenue account shows $8,500 and her total Operating Expenses are $4,200, what is her Net Income and what does this tell investors?',
    answers: [
      'Net Income is $4,300, showing the business is profitable and generating positive returns',
      'Net Income is $12,700, calculated by adding revenue and expenses',
      'Net Income cannot be determined without more information',
      'Net Income is negative, indicating the business is losing money'
    ],
    explanation: 'Net Income = Revenues - Expenses = $8,500 - $4,200 = $4,300. Positive Net Income demonstrates profitability, which is a key indicator investors look for.'
  },
  {
    id: 'assessment-4',
    question: 'In the accounting equation (Assets = Liabilities + Equity), which accounts from the trial balance flow into the Income Statement?',
    answers: [
      'Revenue and Expense accounts flow into the Income Statement to calculate Net Income',
      'Asset and Liability accounts are used to build the Income Statement',
      'Only Equity accounts appear on the Income Statement',
      'All trial balance accounts are included in the Income Statement'
    ],
    explanation: 'Only Revenue and Expense accounts from the trial balance flow into the Income Statement. Assets, Liabilities, and Equity accounts appear on the Balance Sheet.'
  },
  {
    id: 'assessment-5',
    question: 'What happens to Sarah\'s Income Statement if she adds a new client project worth $3,000 to her trial balance and her statements are built with INDEX/MATCH formulas?',
    answers: [
      'The Income Statement automatically updates to include the new revenue and recalculates Net Income',
      'She must manually add the $3,000 to her Income Statement',
      'The Income Statement shows an error until she rebuilds it completely',
      'Nothing changes until she updates her Excel formulas'
    ],
    explanation: 'Dynamic INDEX/MATCH formulas create live links, so when new transactions are added to the trial balance, the Income Statement automatically reflects these changes.'
  },
  {
    id: 'assessment-6',
    question: 'Why is it crucial for Sarah to categorize her Rent Expense correctly in the trial balance when building her Income Statement?',
    answers: [
      'Incorrect categorization could misstate her business expenses and mislead investors about her true profitability',
      'Rent is the largest expense so it matters most',
      'The bank specifically looks at rent expenses when making loan decisions',
      'Excel formulas won\'t work if categories are wrong'
    ],
    explanation: 'Proper categorization ensures accurate financial reporting. Misclassifying expenses could make the business appear more or less profitable than it actually is, misleading investors and lenders.'
  },
  {
    id: 'assessment-7',
    question: 'Jennifer Kim describes the three financial statements as a "storyboard." In this analogy, what specific story does the Income Statement tell?',
    answers: [
      'The plot: whether the business made or lost money during a specific period',
      'The setting: what the business owns and what it owes at a moment in time',
      'The action: how cash actually moved in and out of the business',
      'The ending: predictions about future business performance'
    ],
    explanation: 'The Income Statement tells the "plot" by revealing whether the business was profitable over a specific time period, answering the fundamental question: did the business make money?'
  },
  {
    id: 'assessment-8',
    question: 'A potential investor asks Sarah, "How do I know your business can consistently generate profit?" Which aspect of Income Statement construction best addresses this question?',
    answers: [
      'Dynamic formulas that automatically update monthly Income Statements showing consistent profitability trends',
      'A single Income Statement showing one profitable month',
      'The total amount of revenue without considering expenses',
      'A detailed list of all business assets'
    ],
    explanation: 'Consistent profitability over time is best demonstrated through a series of Income Statements that automatically update with dynamic formulas, showing sustainable profit generation rather than a one-time result.'
  }
]

export default function Phase5Page() {
  const currentPhase = lesson02Phases[4] // Assessment phase

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="space-y-8">
        {/* Assessment Introduction */}
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-orange-800 text-2xl flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6" />
              Assessment: Income Statement Construction Mastery
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                You've journeyed through the same learning process that transformed Sarah from someone 
                struggling with spreadsheet chaos to a confident financial storyteller. Now it's time 
                to demonstrate your mastery of Income Statement construction principles and their 
                critical role in business success.
              </p>

              <p className="text-lg leading-relaxed">
                This assessment evaluates not just your technical knowledge, but your understanding 
                of <em>why</em> these skills matter for real business decisions. Remember: you're 
                not just answering questions—you're showing that you can think like the financial 
                professionals who help businesses secure funding and make strategic decisions.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">🎯 Assessment Focus Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-blue-800 mb-1">Technical Skills</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Income Statement formula application</li>
                    <li>• INDEX/MATCH dynamic linking</li>
                    <li>• Account categorization principles</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800 mb-1">Business Understanding</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Financial storytelling concepts</li>
                    <li>• Investor and lender perspectives</li>
                    <li>• Professional decision-making impact</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sarah's Success Story Reminder */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <Award className="h-5 w-5" />
              Remember Sarah's Transformation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              <p>
                Before this unit, Sarah walked into the bank with confidence but left disappointed 
                when her internal spreadsheets weren't enough. After mastering Income Statement 
                construction with dynamic formulas, she returned with professional financial 
                statements that told a compelling story of profitability and growth.
              </p>

              <div className="bg-white p-4 rounded-lg border-2 border-green-400 my-4">
                <h4 className="font-semibold text-green-800 mb-2">✅ Sarah's Results</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• ✅ Secured business line of credit</li>
                    <li>• ✅ Landed major retail client project</li>
                    <li>• ✅ Built investor confidence</li>
                  </ul>
                  <ul className="text-green-700 space-y-1 text-sm">
                    <li>• ✅ Automated financial reporting</li>
                    <li>• ✅ Professional credibility established</li>
                    <li>• ✅ Foundation for business growth</li>
                  </ul>
                </div>
              </div>

              <p>
                Your assessment performance reflects the same skills that enabled Sarah's success. 
                Take your time, think through each question carefully, and demonstrate the mastery 
                you've built throughout this lesson.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Comprehensive Assessment */}
        <ComprehensionCheck
          title="Comprehensive Income Statement Assessment"
          description="Demonstrate your mastery of Income Statement construction, dynamic Excel techniques, and their business applications. This assessment covers both technical skills and strategic understanding."
          questions={assessmentQuestions}
          showExplanations={true}
        />

        {/* Performance Standards */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Understanding Your Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-green-600">90-100%</Badge>
                    <h4 className="font-semibold text-green-800">Mastery Level</h4>
                  </div>
                  <p className="text-green-700 text-sm">
                    Excellent understanding of Income Statement construction and business applications. 
                    Ready for advanced financial modeling challenges.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-600">75-89%</Badge>
                    <h4 className="font-semibold text-blue-800">Proficient Level</h4>
                  </div>
                  <p className="text-blue-700 text-sm">
                    Strong grasp of core concepts with room for refinement. Well-prepared for 
                    upcoming Balance Sheet and Cash Flow lessons.
                  </p>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-amber-600">60-74%</Badge>
                    <h4 className="font-semibold text-amber-800">Developing Level</h4>
                  </div>
                  <p className="text-amber-700 text-sm">
                    Foundational understanding established. Consider reviewing guided practice 
                    activities before moving to the next lesson.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-purple-400">
                <h4 className="font-semibold text-purple-800 mb-2">📊 What Your Score Means for Future Success</h4>
                <p className="text-purple-700">
                  Your performance on this assessment directly predicts your readiness for the advanced 
                  financial modeling work in your capstone project. Students who master Income Statement 
                  construction typically excel at building the integrated three-statement models that 
                  impress real investors and business professionals.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps Preview */}
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-800 flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              Looking Ahead: Building the Complete Storyboard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none">
              <p>
                You've mastered the "plot" of the financial storyboard—the Income Statement that 
                shows profitability. But remember Jennifer Kim's complete vision: a three-statement 
                storyboard where all parts work together to tell one unified story.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-green-600">✅ Completed</Badge>
                    <h4 className="font-semibold text-green-800">The Plot</h4>
                  </div>
                  <p className="text-green-700 text-sm">
                    <strong>Income Statement:</strong> You can now build dynamic Income Statements 
                    that tell compelling profitability stories to investors and lenders.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-blue-600">🔜 Next</Badge>
                    <h4 className="font-semibold text-blue-800">The Setting</h4>
                  </div>
                  <p className="text-blue-700 text-sm">
                    <strong>Balance Sheet:</strong> Learn to show what the business owns versus 
                    what it owes, and connect it to your Income Statement through Retained Earnings.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-indigo-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-purple-600">🔜 Future</Badge>
                    <h4 className="font-semibold text-purple-800">The Action</h4>
                  </div>
                  <p className="text-purple-700 text-sm">
                    <strong>Cash Flow Statement:</strong> Master the final piece by tracking how 
                    cash actually moves, completing your integrated financial model.
                  </p>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border-2 border-indigo-400">
                <h4 className="font-semibold text-indigo-800 mb-2">🌟 Your Growing Expertise</h4>
                <p className="text-indigo-700">
                  Each lesson builds on the previous one, developing your ability to create the kind 
                  of integrated financial models that set successful entrepreneurs apart. The 
                  Income Statement skills you've mastered today are the foundation for everything 
                  that follows.
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