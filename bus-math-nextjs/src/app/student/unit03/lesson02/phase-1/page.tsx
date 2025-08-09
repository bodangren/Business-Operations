'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson02Data, lesson02Phases, unit03Data } from "../lesson-data"

const hookQuestions = [
  {
    id: 'hook-1',
    question: 'Sarah has her automated ledger working perfectly. What problem does she face when trying to get a business loan?',
    answers: [
      'The bank wants to see "real financial statements" instead of her internal ledger',
      'Her ledger has calculation errors',
      'She doesn\'t have enough money in her business',
      'Her CPA Jennifer Kim won\'t help her'
    ],
    explanation: 'Banks and investors need standardized financial statements that follow accounting principles, not just internal tracking systems.'
  },
  {
    id: 'hook-2',
    question: 'What does Jennifer Kim call the three financial statements?',
    answers: [
      'A "storyboard" for the business',
      'A "financial report card"',
      'A "money tracking system"',
      'A "business summary"'
    ],
    explanation: 'Jennifer describes the financial statements as a storyboard because they tell a complete narrative about the business\'s financial health.'
  },
  {
    id: 'hook-3',
    question: 'The Income Statement tells which part of the business story?',
    answers: [
      'The plot - is the business profitable?',
      'The setting - what the business owns',
      'The action - how cash moves',
      'The ending - future predictions'
    ],
    explanation: 'The Income Statement reveals the "plot" by showing whether the business made or lost money over a period of time.'
  }
]

export default function Phase1Page() {
  const currentPhase = lesson02Phases[0] // Hook phase

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="space-y-8">
        {/* Opening Hook */}
        <Card className="border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-800 text-2xl">The Day the Spreadsheet Wasn't Enough</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">
                Sarah walked into the bank with complete confidence. Her automated ledger from Unit 2 was 
                working perfectly—every transaction tracked, every formula calculating correctly, and her 
                month-end chaos was finally under control. This massive e-commerce project could put 
                TechStart Solutions on the map, but she needed a business line of credit to handle the 
                additional resources.
              </p>

              <p className="text-lg leading-relaxed">
                After reviewing Sarah's detailed spreadsheet, the loan officer said something that stopped 
                her in her tracks: <strong>"This is nice, but where are your financial statements?"</strong>
              </p>

              <p className="text-lg leading-relaxed">
                At almost the same moment, her mentor introduced her to a potential investor who asked 
                the exact same question. Sarah realized that her internal records, as accurate as they 
                were, were for <em>her</em>. The rest of the professional world needed to see the official 
                story of her company's health through three specific documents.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-900 mb-2">Why This Matters</h3>
              <p className="text-blue-800">
                Understanding how to build professional financial statements isn't just about following 
                accounting rules—it's about speaking the language that investors, banks, and business 
                partners understand. When you can present your financial story clearly, you unlock 
                opportunities for funding, partnerships, and growth.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* The Financial Storyboard Concept */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Jennifer's Financial Storyboard</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose prose-lg max-w-none space-y-4">
              <p>
                Jennifer Kim, Sarah's CPA, described the three financial statements as a <strong>"storyboard" 
                for the business"</strong>. This became Sarah's central challenge: <strong>How do today's journal 
                entries flow into a narrative of profit, solvency, and cash health that investors can trust?</strong>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-800 text-lg flex items-center gap-2">
                      📈 The Income Statement
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-700 text-sm">
                      <strong>The Plot:</strong> Is the business profitable? This shows revenues minus 
                      expenses over a specific time period.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-blue-800 text-lg flex items-center gap-2">
                      ⚖️ The Balance Sheet
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-700 text-sm">
                      <strong>The Setting:</strong> What does the business own versus what does it owe? 
                      This shows the financial position at one moment in time.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-purple-800 text-lg flex items-center gap-2">
                      💰 Statement of Cash Flows
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-700 text-sm">
                      <strong>The Action:</strong> How is cash actually moving through the business? 
                      This tracks real money flow, not just accounting profits.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p>
                Today we'll focus on the first part of this storyboard—learning how to build an Income 
                Statement that dynamically pulls from Sarah's ledger data. This is where the plot of 
                her business story begins to unfold.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Comprehension Check */}
        <ComprehensionCheck
          title="Hook: Understanding the Challenge"
          description="Test your understanding of why Sarah needed to move beyond her internal spreadsheet."
          questions={hookQuestions}
          showExplanations={true}
        />

        {/* Preview of What's Coming */}
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-800">What We'll Learn Today</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge className="bg-indigo-600">1</Badge>
                <p className="text-indigo-700">How to structure an Income Statement using the formula: Revenues - Expenses = Net Income</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-indigo-600">2</Badge>
                <p className="text-indigo-700">How to use INDEX/MATCH formulas to create dynamic links between your ledger and financial statements</p>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-indigo-600">3</Badge>
                <p className="text-indigo-700">How to build professional financial reports that automatically update when new transactions are added</p>
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