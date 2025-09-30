'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson02Data, lesson02Phases, unit04Data } from "../lesson-data";
import { getUnit04Phase5ComprehensionCheckItems } from "@/data/question-banks/unit04-phase5";

export default function Phase5Page() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 5)!;
  const assessmentQuestions = getUnit04Phase5ComprehensionCheckItems({ lessonIds: ["lesson02"] });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson02Data}
          unit={unit04Data}
          phase={currentPhase}
          phases={lesson02Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Assessment Introduction */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-800 flex items-center gap-2">
                📊 Assessment: Data Cleaning Fundamentals
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-orange-800 text-lg leading-relaxed">
                Time to demonstrate your mastery of professional data cleaning techniques! This assessment 
                covers both the technical skills you've learned and your understanding of how data quality 
                impacts real business decisions.
              </p>
              
              <p className="text-orange-700">
                Remember, you're not just learning Excel functions—you're developing the critical thinking 
                skills that separate professional data analysts from amateur users. Every question connects 
                back to authentic business scenarios that Sarah Chen faced while building TechStart Solutions 
                and that you'll encounter in your career.
              </p>

              <div className="bg-white p-4 rounded-lg border border-orange-200 mt-6">
                <h3 className="font-semibold text-orange-900 mb-2">Assessment Focus Areas:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Badge className="bg-orange-100 text-orange-800 mb-2">Technical Skills</Badge>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Text-to-Columns applications</li>
                      <li>• TRIM function usage</li>
                      <li>• Remove Duplicates strategy</li>
                      <li>• Data validation techniques</li>
                    </ul>
                  </div>
                  <div>
                    <Badge className="bg-orange-100 text-orange-800 mb-2">Business Impact</Badge>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• Cost of poor data quality</li>
                      <li>• Professional standards</li>
                      <li>• Decision-making implications</li>
                      <li>• Career relevance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Assessment */}
          <ComprehensionCheck
            title="Master Assessment: Data Cleaning Fundamentals"
            description="This comprehensive assessment evaluates your understanding of professional data cleaning techniques and their business applications. Take your time and think through each scenario carefully."
            questions={assessmentQuestions}
            showExplanations={true}
            allowRetry={true}
          />

          {/* Assessment Success Criteria */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                🎯 Professional Standards & Success Criteria
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-green-800 text-lg leading-relaxed">
                  Your performance on this assessment reflects your readiness to handle real-world data 
                  challenges in professional settings. Here's how your score translates to career readiness:
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <Badge className="bg-green-100 text-green-800 mb-2">90-100%: Expert Level</Badge>
                    <p className="text-green-700 text-sm">
                      Ready for entry-level data analyst positions. You understand both the technical 
                      skills and business implications of data quality.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <Badge className="bg-blue-100 text-blue-800 mb-2">80-89%: Proficient</Badge>
                    <p className="text-blue-700 text-sm">
                      Strong foundation with minor gaps. You're ready for advanced data analysis 
                      topics and have good professional judgment.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-green-200">
                    <Badge className="bg-amber-100 text-amber-800 mb-2">70-79%: Developing</Badge>
                    <p className="text-amber-700 text-sm">
                      Good basic understanding. Review key concepts and practice with additional 
                      examples to reach professional standards.
                    </p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200 mt-6">
                  <h4 className="font-semibold text-green-900 mb-2">Next Steps Based on Your Performance:</h4>
                  <ul className="text-green-700 space-y-2">
                    <li><strong>High Performers (90%+):</strong> Ready to tackle statistical analysis and 
                    advanced Excel functions in the next unit</li>
                    <li><strong>Good Performance (80-89%):</strong> Continue to the next unit with 
                    confidence, review any missed concepts</li>
                    <li><strong>Need Review (Below 80%):</strong> Take time to practice with additional 
                    messy datasets before moving forward</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Connection to Career Success */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Why This Assessment Matters for Your Future</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 text-lg leading-relaxed mb-4">
                Every question in this assessment is based on real challenges that data professionals 
                face daily. Companies like Google, Amazon, local startups, and non-profits all deal 
                with messy data that requires exactly these skills.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Career Relevance</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Data Analyst: $65,000+ starting salary</li>
                    <li>• Business Analyst: $70,000+ starting salary</li>
                    <li>• Marketing Analyst: $60,000+ starting salary</li>
                    <li>• Operations Analyst: $68,000+ starting salary</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">Transferable Skills</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Critical thinking and problem-solving</li>
                    <li>• Attention to detail and quality standards</li>
                    <li>• Understanding of business impact</li>
                    <li>• Professional documentation practices</li>
                  </ul>
                </div>
              </div>

              <p className="text-blue-700 mt-4 font-medium">
                Sarah Chen's success story started with mastering exactly these foundational skills. 
                The same attention to data quality that helped her build TechStart Solutions will 
                serve you well in any career path that involves data-driven decision making.
              </p>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter 
          lesson={lesson02Data}
          unit={unit04Data}
          phase={currentPhase}
          phases={lesson02Phases}
        />
      </div>
    </div>
  );
}