'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Award, TrendingUp, Calculator } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { getUnit03Phase5ComprehensionCheckItems } from "@/data/question-banks/unit03-phase5"

const assessmentQuestions = getUnit03Phase5ComprehensionCheckItems({ lessonIds: ["lesson02"] }).slice(0, 5)

export default function Phase5Content() {
   // Assessment phase

  return (
    <div className="max-w-4xl space-y-8">

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

    </div>
  )
}