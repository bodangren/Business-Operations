'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson02Data, lesson02Phases, unit04Data } from "../lesson-data";

export default function Phase5Page() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 5)!;

  const assessmentQuestions = [
    {
      id: "assessment-1",
      question: "A café manager discovers that their POS system exports data with product names like ' Latte', 'Latte ', and 'LATTE' all appearing as separate items. What Excel function should they use FIRST to fix this problem?",
      answers: [
        "TRIM to remove extra spaces, then standardize capitalization",
        "Remove Duplicates to eliminate identical entries",
        "Text-to-Columns to separate the data",
        "VLOOKUP to find correct product names"
      ],
      explanation: "The TRIM function removes leading and trailing spaces, which is the first step before standardizing capitalization. This ensures 'Latte', ' Latte', and 'Latte ' all become 'Latte' before addressing case differences."
    },
    {
      id: "assessment-2",
      question: "Sarah's client gives her a dataset where timestamps appear as '2023-10-15T14:30:22'. She needs separate Date and Time columns for her analysis. Which Excel tool would be most efficient?",
      answers: [
        "Text-to-Columns using 'T' as the delimiter",
        "Find and Replace to remove the 'T'",
        "Manual copy and paste for each entry",
        "Delete the entire timestamp column"
      ],
      explanation: "Text-to-Columns can split the timestamp at the 'T' delimiter, automatically creating separate Date and Time columns in one operation. This is much more efficient than manual methods."
    },
    {
      id: "assessment-3",
      question: "You're analyzing sales data and find that removing duplicates reduced your dataset from 15,000 to 14,850 transactions. What should your next step be?",
      answers: [
        "Investigate why 150 duplicates existed to prevent future data quality issues",
        "Assume the POS system is working correctly and continue analysis",
        "Add the duplicates back to avoid losing data",
        "Report the issue to IT but continue with current analysis"
      ],
      explanation: "Finding 150 duplicate transactions (1% of data) suggests a systematic problem with the data collection process. A professional analyst investigates root causes to prevent recurring data quality issues."
    },
    {
      id: "assessment-4",
      question: "A business analyst notices that their cleaned dataset still shows unusual patterns: 'Coffee' sales spike dramatically at 3 AM on weekends. What's the most likely explanation?",
      answers: [
        "The timestamp cleaning process may have errors that need validation",
        "The café is busier at 3 AM than during normal hours",
        "Coffee is more popular on weekends",
        "The cleaning process worked perfectly"
      ],
      explanation: "Unusual patterns like 3 AM sales spikes often indicate data cleaning errors, possibly in timestamp processing or timezone conversions. Always validate cleaned data against logical business patterns."
    },
    {
      id: "assessment-5",
      question: "Which of the following scenarios would cause the MOST severe business impact if data cleaning is skipped?",
      answers: [
        "Inventory system ordering double the needed pastries due to duplicate sales entries",
        "Customer names having inconsistent capitalization in the database",
        "Product descriptions having extra spaces that don't affect calculations",
        "Date formats being displayed differently in reports"
      ],
      explanation: "Duplicate sales entries directly impact financial calculations and inventory decisions. Ordering double the pastries leads to waste, spoilage, and direct financial loss, making this the most severe business impact."
    },
    {
      id: "assessment-6",
      question: "You're preparing café data for statistical analysis and discover entries like 'Iced Coffee', 'IcedCoffee', 'Iced_Coffee', and 'ICED COFFEE'. How should a professional data analyst handle this?",
      answers: [
        "Standardize all variations to one format (e.g., 'Iced Coffee') and document the decision",
        "Keep all variations to preserve original data integrity",
        "Remove all entries that don't match the most common format",
        "Use only the first occurrence and delete the rest"
      ],
      explanation: "Professional data cleaning requires standardization to ensure accurate analysis while documenting decisions for transparency. All variations should be converted to one standard format with clear documentation."
    },
    {
      id: "assessment-7",
      question: "TechStart Solutions' client provides transaction data where amounts appear as '$4.50', '4.5', '4.50', and '$04.50'. What's the best approach for analysis?",
      answers: [
        "Convert all to consistent number format (4.50) removing symbols and leading zeros",
        "Leave as text format to preserve original appearance",
        "Use only entries that are already in number format",
        "Replace all with the most common format"
      ],
      explanation: "For numerical analysis, amounts must be converted to a consistent number format. Removing currency symbols and standardizing decimal places ensures calculations work correctly while maintaining data integrity."
    },
    {
      id: "assessment-8",
      question: "After cleaning a large dataset, what's the most important validation step before beginning analysis?",
      answers: [
        "Compare key statistics (totals, counts, ranges) between original and cleaned data to ensure integrity",
        "Check that the file size has decreased after cleaning",
        "Verify that all text entries use the same capitalization",
        "Confirm that the number of columns has increased"
      ],
      explanation: "Data integrity validation is crucial. Comparing key statistics ensures the cleaning process didn't introduce errors or accidentally remove legitimate data. This professional practice prevents analysis based on corrupted cleaned data."
    },
    {
      id: "assessment-9",
      question: "The café manager asks: 'How do I know if my cleaned data is analysis-ready?' What's the best professional response?",
      answers: [
        "Clean data has consistent formats, no duplicates, standardized categories, and passes validation checks against business logic",
        "All text is properly capitalized and there are no spaces",
        "The data looks neat and organized in the spreadsheet",
        "Excel can open the file without error messages"
      ],
      explanation: "Analysis-ready data meets multiple professional standards: consistent formatting, no duplicates, standardized categories, and logical validation. This comprehensive definition ensures reliable analysis results."
    },
    {
      id: "assessment-10",
      question: "Sarah learns that 60-80% of data analysts' time is spent on cleaning data. Why is this such a critical skill in modern business?",
      answers: [
        "Real-world data is inherently messy, and business decisions require reliable, clean data for accuracy",
        "Data cleaning is the most difficult part of analysis work",
        "Cleaning data impresses clients more than analysis results",
        "It's a requirement for all data analyst certifications"
      ],
      explanation: "Data cleaning is critical because real-world data from various sources (POS systems, sensors, forms) is inherently messy. Business decisions based on dirty data can be catastrophically wrong, making cleaning a crucial professional skill."
    }
  ];

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