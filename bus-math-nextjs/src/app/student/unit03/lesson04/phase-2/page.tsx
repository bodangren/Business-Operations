import FillInTheBlank from "@/components/exercises/FillInTheBlank";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Lightbulb } from "lucide-react";
import { lesson04Data, unit03Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[1]; // Introduction phase

const fillInBlankSentences = [
  {
    id: "fill-1",
    text: "The {blank} function returns a value from a specific position in a range, while the {blank} function finds the position of a value in a range.",
    answer: "INDEX",
    hint: "Think about what each function does individually - one finds positions, one returns values"
  },
  {
    id: "fill-2", 
    text: "Instead of using cryptic cell references like B2:B50, professional financial models use {blank} to make formulas readable and audit-ready.",
    answer: "named ranges",
    hint: "What makes formulas easier to understand and maintain?"
  },
  {
    id: "fill-3",
    text: "The formula =INDEX(TrialBalance_Amounts,MATCH(\"Revenue\",TrialBalance_Accounts,{blank})) uses exact match to create dynamic lookup formulas.",
    answer: "0",
    hint: "What match_type parameter creates exact matches in MATCH functions?"
  },
  {
    id: "fill-4",
    text: "When columns are inserted into a spreadsheet, {blank} formulas break because they use hard-coded column numbers, but INDEX/MATCH formulas continue working.",
    answer: "VLOOKUP",
    hint: "Which lookup function is fragile and breaks when columns change?"
  }
];

const conceptQuestions = [
  {
    id: "concept-q1",
    question: "What is the correct syntax for an INDEX/MATCH formula that looks up 'Rent Expense' in the TrialBalance_Accounts range and returns the corresponding value from TrialBalance_Amounts?",
    answers: [
      "=INDEX(TrialBalance_Amounts,MATCH(\"Rent Expense\",TrialBalance_Accounts,0))",
      "=MATCH(TrialBalance_Amounts,INDEX(\"Rent Expense\",TrialBalance_Accounts,0))",
      "=VLOOKUP(\"Rent Expense\",TrialBalance_Accounts:TrialBalance_Amounts,2,0)",
      "=INDEX(\"Rent Expense\",MATCH(TrialBalance_Amounts,TrialBalance_Accounts,0))"
    ],
    explanation: "The correct syntax is INDEX(return_array, MATCH(lookup_value, lookup_array, match_type)). INDEX returns the value from TrialBalance_Amounts at the position found by MATCH in TrialBalance_Accounts."
  },
  {
    id: "concept-q2",
    question: "Why do professional financial analysts prefer INDEX/MATCH over VLOOKUP for building investor-ready models?",
    answers: [
      "INDEX/MATCH is more flexible, won't break when columns are moved, and can look in any direction",
      "INDEX/MATCH is always faster than VLOOKUP in every situation",
      "INDEX/MATCH automatically formats cells with professional colors",
      "INDEX/MATCH is required by GAAP accounting standards"
    ],
    explanation: "INDEX/MATCH is preferred because it's robust (won't break when columns change), flexible (can look left or right), and maintainable - all crucial qualities for financial models that investors will scrutinize."
  },
  {
    id: "concept-q3",
    question: "When creating named ranges for a trial balance, which naming convention is most professional and clear?",
    answers: [
      "TrialBalance_Accounts and TrialBalance_Amounts with descriptive, consistent naming",
      "TB_A and TB_B for brevity and speed",
      "Data1 and Data2 for simplicity",
      "AccountList and ValueList for basic clarity"
    ],
    explanation: "Professional naming conventions use descriptive, consistent names like TrialBalance_Accounts that clearly indicate what data the range contains, making formulas self-documenting."
  },
  {
    id: "concept-q4",
    question: "What makes a financial model 'dynamic' and why is this essential for investor confidence?",
    answers: [
      "Dynamic models automatically update all calculations when source data changes, ensuring reports always reflect current business reality",
      "Dynamic models change colors automatically based on profit levels",
      "Dynamic models can email investors when key metrics change",
      "Dynamic models run faster than static models"
    ],
    explanation: "A dynamic model maintains live connections between data sources and reports. When new transactions are added to the trial balance, all financial statements update automatically, ensuring accuracy and currency."
  }
];

export default function Unit03Lesson04Phase2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader 
        unit={unit03Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
              📚 Phase 2: INDEX/MATCH & Named Ranges: The Professional Foundation
            </Badge>
            
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Building Dynamic Financial Models That Investors Trust
              </h1>
              
              <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg border border-green-200 mb-8">
                <p className="text-lg leading-relaxed text-green-900">
                  After her Excel crisis, Sarah learned that professional financial modeling isn't just about getting the right 
                  numbers—it's about building systems that remain accurate and reliable as businesses grow and change. Jennifer Kim 
                  taught her the two advanced Excel techniques that separate amateur spreadsheets from investment-grade financial models: 
                  <strong>INDEX/MATCH functions</strong> and <strong>named ranges</strong>.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Understanding the INDEX Function
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                The INDEX function is like a GPS coordinate system for your spreadsheet. Just as you can find any location with 
                latitude and longitude, INDEX lets you retrieve any value by specifying its row and column position within a range.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-semibold text-blue-900 mb-3 text-xl">INDEX Function Syntax</h3>
                <div className="bg-white p-4 rounded border font-mono text-sm mb-4">
                  =INDEX(array, row_num, [column_num])
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">array:</h4>
                    <p className="text-blue-700 text-sm">The range of cells you want to search in (like B2:B50)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">row_num:</h4>
                    <p className="text-blue-700 text-sm">Which row position within the array (like row 5)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">column_num:</h4>
                    <p className="text-blue-700 text-sm">Which column (optional if array is single column)</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Understanding the MATCH Function
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                While INDEX retrieves values by position, MATCH does the opposite—it finds the position of a specific value. 
                Think of MATCH as a detective that searches through a list and reports back: "I found 'Revenue' at position 3."
              </p>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6">
                <h3 className="font-semibold text-purple-900 mb-3 text-xl">MATCH Function Syntax</h3>
                <div className="bg-white p-4 rounded border font-mono text-sm mb-4">
                  =MATCH(lookup_value, lookup_array, [match_type])
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">lookup_value:</h4>
                    <p className="text-purple-700 text-sm">What you're looking for (like "Revenue")</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">lookup_array:</h4>
                    <p className="text-purple-700 text-sm">Where to search (like A2:A50)</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">match_type:</h4>
                    <p className="text-purple-700 text-sm">Use 0 for exact match (most common)</p>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                The Power of INDEX/MATCH Combined
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                When you combine INDEX and MATCH, you create a flexible lookup system that's far superior to VLOOKUP. 
                Instead of being limited to looking right and counting columns, INDEX/MATCH can look in any direction 
                and uses smart searching instead of column counting.
              </p>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-6">
                <h3 className="font-semibold text-amber-900 mb-3 text-xl">INDEX/MATCH in Action</h3>
                <p className="text-amber-800 mb-3">
                  To find Sarah's revenue from her trial balance, instead of using VLOOKUP:
                </p>
                <div className="bg-white p-4 rounded border font-mono text-sm mb-3">
                  =INDEX(B2:B50, MATCH("Revenue", A2:A50, 0))
                </div>
                <p className="text-amber-800 text-sm">
                  This formula says: "Search for 'Revenue' in column A (A2:A50), find its position, 
                  then return the value from that same position in column B (B2:B50)."
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Named Ranges: Making Formulas Professional
              </h2>
              
              <p className="text-lg leading-relaxed mb-6">
                Named ranges transform cryptic cell references into meaningful, readable formulas. Instead of seeing 
                =INDEX(B2:B50,MATCH("Revenue",A2:A50,0)), an investor can read 
                =INDEX(TrialBalance_Amounts,MATCH("Revenue",TrialBalance_Accounts,0)) and immediately understand 
                what the formula does.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-800 text-lg">❌ Without Named Ranges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-mono text-xs bg-white p-2 rounded border mb-2">
                      =INDEX(B2:B50,MATCH("Revenue",A2:A50,0))
                    </div>
                    <p className="text-red-700 text-sm">Hard to read, hard to audit, prone to errors when ranges change.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-800 text-lg">✅ With Named Ranges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="font-mono text-xs bg-white p-2 rounded border mb-2">
                      =INDEX(TrialBalance_Amounts,MATCH("Revenue",TrialBalance_Accounts,0))
                    </div>
                    <p className="text-green-700 text-sm">Self-documenting, professional, easy to audit and maintain.</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-lg border border-blue-200 mb-8">
                <h3 className="font-semibold text-blue-900 mb-3 text-xl flex items-center gap-2">
                  <Lightbulb className="h-5 w-5" />
                  Professional Standards and Investor Expectations
                </h3>
                <p className="text-blue-800 leading-relaxed">
                  Wall Street analysts and professional investors expect financial models to be maintainable, auditable, and robust. 
                  When you use INDEX/MATCH with named ranges, you're following the same standards used by investment banks, 
                  consulting firms, and Fortune 500 companies. This attention to technical excellence signals to investors that 
                  you approach all aspects of your business with the same level of professionalism and care.
                </p>
              </div>
            </div>
          </div>
        </section>

        <FillInTheBlank
          title="INDEX/MATCH and Named Ranges Mastery"
          description="Complete these statements about professional Excel techniques for financial modeling."
          sentences={fillInBlankSentences}
          showHints={true}
        />

        <ComprehensionCheck
          title="Professional Excel Functions Assessment"
          description="Test your understanding of INDEX/MATCH and named ranges for dynamic financial models."
          questions={conceptQuestions}
          showExplanations={true}
        />

        <Card className="border-green-200 bg-green-50 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Key Takeaways from Unit 3 Content
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800 mb-3">
              From the unit text, we learned that dynamic financial models create "live links" between trial balance data 
              and financial statements. When Sarah uses INDEX/MATCH formulas, her Income Statement automatically updates 
              whenever new transactions are added to her ledger.
            </p>
            <ul className="list-disc list-inside space-y-1 text-green-700 text-sm">
              <li>Dynamic formulas ensure reports always reflect the true state of the business</li>
              <li>Professional formatting and reliable formulas build investor confidence</li>
              <li>INDEX/MATCH creates the foundation for integrated financial statement models</li>
              <li>Named ranges make complex formulas audit-ready and maintainable</li>
            </ul>
          </CardContent>
        </Card>
      </main>

      <PhaseFooter 
        unit={unit03Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  );
}