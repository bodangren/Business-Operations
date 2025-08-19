import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users } from "lucide-react";
import { lesson04Data, unit03Data, lesson04Phases } from "../lesson-data";

const currentPhase = lesson04Phases[0]; // Hook phase

const hookQuestions = [
  {
    id: "hook-q1",
    question: "Why did Jennifer Kim insist that Sarah replace all VLOOKUP functions with INDEX/MATCH in her financial model?",
    answers: [
      "INDEX/MATCH is more flexible and won't break when columns are moved, making it essential for professional financial models that investors will scrutinize",
      "INDEX/MATCH is faster than VLOOKUP in all situations",
      "INDEX/MATCH has better formatting options for financial statements",
      "INDEX/MATCH is required by accounting standards for all businesses"
    ],
    explanation: "Professional financial models need to be robust and maintainable. INDEX/MATCH won't break when columns are inserted or moved, can look in any direction, and is the industry standard for dynamic financial reporting that investors expect."
  },
  {
    id: "hook-q2", 
    question: "What specific problem occurred when Sarah's VLOOKUP-based Income Statement failed during the investor meeting?",
    answers: [
      "New trial balance columns caused all VLOOKUP formulas to return incorrect values, making her profit appear inflated",
      "The VLOOKUP formulas were too slow for the investor's laptop",
      "VLOOKUP couldn't handle negative numbers properly",
      "The investor's Excel version didn't support VLOOKUP functions"
    ],
    explanation: "VLOOKUP functions broke when new columns were added to Sarah's trial balance, causing formulas to pull from wrong columns and showing incorrect financial data. This is exactly why professionals use INDEX/MATCH instead."
  },
  {
    id: "hook-q3",
    question: "How do named ranges improve the professionalism and reliability of financial models?",
    answers: [
      "Named ranges make formulas easier to read, audit, and maintain while reducing errors in complex financial models",
      "Named ranges automatically format cells with professional colors",
      "Named ranges are required by the IRS for all business spreadsheets",
      "Named ranges make Excel files smaller and faster"
    ],
    explanation: "Named ranges like 'TrialBalance_Revenue' or 'BS_Assets' make formulas self-documenting and easier to audit. Instead of cryptic cell references, formulas become readable and professional, reducing errors in complex models."
  },
  {
    id: "hook-q4",
    question: "What makes a financial model 'dynamic' and why is this crucial for investor confidence?",
    answers: [
      "Dynamic models automatically update all financial statements when new transactions are added, ensuring reports always show current, accurate data",
      "Dynamic models can change colors automatically based on profit levels",
      "Dynamic models can send emails to investors when profits increase",
      "Dynamic models work faster than static models in all situations"
    ],
    explanation: "A dynamic model maintains live connections between trial balance data and financial statements. When new transactions are entered, all reports update automatically, ensuring investors always see current, accurate financial information."
  }
];

export default function Unit03Lesson04Phase1() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit03Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              🎯 Phase 1: Sarah's INDEX/MATCH Challenge
            </Badge>
            
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                When VLOOKUP Fails Investors: Sarah's Excel Crisis
              </h1>
              
              <div className="bg-gradient-to-r from-red-100 to-pink-100 p-6 rounded-lg border border-red-200 mb-8">
                <p className="text-lg leading-relaxed text-red-900">
                  Sarah felt confident walking into her biggest investor meeting yet. Her Income Statement looked perfect, 
                  her numbers were solid, and Jennifer Kim had helped her prepare a compelling financial story. But 15 minutes 
                  into her presentation, disaster struck. The investor asked to see updated numbers with the latest month's data, 
                  and when Sarah added new trial balance columns, every VLOOKUP formula in her financial statements broke.
                </p>
                
                <p className="text-lg leading-relaxed text-red-900 mt-4">
                  Her reported revenue jumped from $8,400 to $15,600 overnight—not because business was booming, but because 
                  her VLOOKUP formulas were now pulling from the wrong columns. The investor immediately noticed the impossible 
                  numbers. "These financial statements aren't professional grade," he said, closing his laptop. "Come back when 
                  you have a model that actually works."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-800 text-lg">The VLOOKUP Problem</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-red-700 space-y-2 text-sm">
                      <li>Breaks when columns are inserted or moved</li>
                      <li>Only looks to the right (limited flexibility)</li>
                      <li>Hard-coded column numbers cause errors</li>
                      <li>Not accepted by professional investors</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-800 text-lg">The INDEX/MATCH Solution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-green-700 space-y-2 text-sm">
                      <li>Robust against column changes</li>
                      <li>Can look in any direction</li>
                      <li>Uses flexible search criteria</li>
                      <li>Industry standard for financial models</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Jennifer's Emergency Training Session
              </h3>
              
              <p className="text-lg leading-relaxed mb-6">
                That evening, a devastated Sarah called Jennifer Kim for an emergency session. "I thought I had mastered Excel," 
                Sarah said. Jennifer's response was firm but encouraging: "You know the basics, but investors expect professional-grade 
                models. Let me teach you the functions that Wall Street analysts use every day."
              </p>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                <h4 className="font-semibold text-blue-900 mb-3 text-xl">The Two-Function Power Combo</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-2">INDEX Function:</h5>
                    <p className="text-blue-700 text-sm">Returns a value from a specific position in a range. Like asking "What's in row 5, column 2 of this table?"</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-800 mb-2">MATCH Function:</h5>
                    <p className="text-blue-700 text-sm">Finds the position of a value in a range. Like asking "Which row contains 'Revenue' in column A?"</p>
                  </div>
                </div>
                <p className="text-blue-800 mt-4 font-medium">
                  Combined: INDEX(MATCH()) = "Find 'Revenue' and give me its value from the Amount column"
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-8">
                <h4 className="font-semibold text-purple-900 mb-3 text-xl">Named Ranges: The Professional Touch</h4>
                <p className="text-purple-800 leading-relaxed mb-3">
                  Jennifer also introduced Sarah to **named ranges**—instead of writing cryptic formulas like 
                  `=INDEX(B2:B50,MATCH("Revenue",A2:A50,0))`, professionals create meaningful names like 
                  `TrialBalance_Accounts` and `TrialBalance_Amounts`.
                </p>
                <p className="text-purple-800 leading-relaxed">
                  This transforms formulas into readable instructions: `=INDEX(TrialBalance_Amounts,MATCH("Revenue",TrialBalance_Accounts,0))`. 
                  Now anyone can understand exactly what the formula does, making the model audit-ready for investors.
                </p>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 mb-8">
                <h3 className="font-semibold text-amber-900 mb-2 text-xl">Why This Matters</h3>
                <p className="text-amber-800 leading-relaxed">
                  Today, you'll master the same INDEX/MATCH and named range techniques that saved Sarah's investor relationship. 
                  You'll build a dynamic Income Statement that automatically updates when new data is added, using formulas that 
                  are both powerful and professional. This isn't just about Excel—it's about building investor confidence through 
                  reliable, maintainable financial models that can handle real-world business complexity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <ComprehensionCheck
          title="Understanding Sarah's Excel Crisis"
          description="Test your understanding of why professional financial models require INDEX/MATCH and named ranges."
          questions={hookQuestions}
          showExplanations={true}
        />

        <Card className="border-blue-200 bg-blue-50 max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-blue-800 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Turn and Talk
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium text-blue-900 mb-2">
              Discussion Prompt (3 minutes):
            </p>
            <p className="text-blue-800 mb-2">
              Think about Sarah's crisis when her VLOOKUP formulas failed during the investor meeting. 
              Share with a partner:
            </p>
            <ul className="list-disc list-inside space-y-1 text-blue-800">
              <li>Why might investors lose confidence in a financial model that breaks when data is updated?</li>
              <li>How would you feel if you were the investor watching Sarah's numbers change impossibly during the presentation?</li>
              <li>What does it say about a business owner's attention to detail when their Excel model fails under scrutiny?</li>
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