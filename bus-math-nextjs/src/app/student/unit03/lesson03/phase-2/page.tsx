import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { lesson03Data, unit03Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[1]; // Introduction phase

const introductionQuestions = [
  {
    id: "intro-q1",
    question: "In the Income Statement formula: Revenues - Expenses = Net Income, which represents the famous 'bottom line'?",
    answers: [
      "Net Income - this is the profit left after subtracting all expenses from revenues",
      "Revenues - this shows how much money the business earned",
      "Expenses - this shows how much money the business spent", 
      "The subtraction symbol - this shows the mathematical operation"
    ],
    explanation: "Net Income is called the 'bottom line' because it appears at the bottom of the Income Statement and represents the final profit after all expenses are deducted from revenues."
  },
  {
    id: "intro-q2",
    question: "What is the main advantage of using INDEX/MATCH over VLOOKUP when building professional Income Statements?",
    answers: [
      "INDEX/MATCH can look in any direction and doesn't break when columns are moved, making it more flexible for complex models",
      "INDEX/MATCH is always faster than VLOOKUP in every situation",
      "INDEX/MATCH automatically formats numbers as currency",
      "INDEX/MATCH can only be used for financial statements, making it more specialized"
    ],
    explanation: "INDEX/MATCH's flexibility to look in any direction and resistance to column changes makes it the professional standard for building robust financial models that won't break when the underlying data structure changes."
  },
  {
    id: "intro-q3",
    question: "When Sarah builds her Income Statement with dynamic formulas, what happens when she adds a new client transaction to her trial balance?",
    answers: [
      "The Income Statement automatically updates to include the new revenue, showing current profitability",
      "Sarah must manually update every number on the Income Statement",
      "The Income Statement deletes all previous data and starts over",
      "Nothing happens because Income Statements are static documents"
    ],
    explanation: "Dynamic formulas create 'living documents' - when new transactions are added to the trial balance, the INDEX/MATCH formulas automatically pull the updated data into the Income Statement."
  },
  {
    id: "intro-q4",
    question: "In Excel's INDEX/MATCH formula structure: =INDEX(return_array, MATCH(lookup_value, lookup_array, 0)), what does the '0' at the end specify?",
    answers: [
      "It specifies an exact match - the formula will only return results for perfect matches",
      "It tells the formula to start searching from the first row",
      "It formats the result as a whole number with no decimals", 
      "It makes the formula case-sensitive for text matches"
    ],
    explanation: "The '0' in MATCH specifies exact match mode, ensuring the formula only returns results when it finds a perfect match for the lookup value, which is crucial for accurate financial reporting."
  },
  {
    id: "intro-q5",
    question: "Why do investors and banks require formal Income Statements instead of just looking at Sarah's detailed ledger?",
    answers: [
      "Income Statements present the financial story in a standardized format that allows easy comparison and professional evaluation",
      "Income Statements are required by law for all businesses regardless of size",
      "Income Statements are easier to read because they use simpler language",
      "Income Statements automatically calculate taxes owed"
    ],
    explanation: "Standardized financial statements allow investors and banks to quickly evaluate a business's performance and compare it to other opportunities using familiar formats and industry-standard presentations."
  }
];

export default function Unit03Lesson03Phase2() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Building the Plot: Income Statement Architecture
          </h2>
          
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg border border-green-200 mb-8">
            <p className="text-lg leading-relaxed text-green-900">
              Jennifer Kim taught Sarah that the Income Statement is the "plot" of any business story because it answers 
              the fundamental question every investor asks: <strong>"Is this business profitable?"</strong> Unlike the 
              detailed transaction records in her ledger, the Income Statement presents a clean, professional narrative 
              that external stakeholders can quickly understand and evaluate.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            The Universal Business Formula
          </h3>
          
          <div className="bg-white p-6 rounded-lg border-2 border-blue-200 mb-6 text-center">
            <div className="text-3xl font-bold text-blue-900 mb-4">
              Revenues - Expenses = Net Income
            </div>
            <p className="text-blue-700 text-lg">
              This simple formula drives every business decision and tells the complete profitability story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">📈 Revenues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-sm">
                  All money earned from sales of products or services. For Sarah's TechStart Solutions: 
                  website development ($2,200), social media setup ($650), SEO work ($1,100).
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-800">📉 Expenses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-700 text-sm">
                  All costs of running the business: software subscriptions, contractor payments, 
                  marketing costs, office rent, utilities—everything needed to generate revenue.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">💰 Net Income</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 text-sm">
                  The famous "bottom line"—profit remaining after all expenses. This number flows 
                  directly into the Balance Sheet as Retained Earnings.
                </p>
              </CardContent>
            </Card>
          </div>

          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Professional Excel: INDEX/MATCH Mastery
          </h3>
          
          <p className="text-lg leading-relaxed mb-6">
            Jennifer showed Sarah why professionals use <strong>INDEX/MATCH</strong> instead of basic lookup functions. 
            This combination is more flexible and reliable for building dynamic financial models that don't break when 
            data structures change.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg border mb-6">
            <h4 className="font-semibold text-gray-800 mb-4 text-xl">INDEX/MATCH Formula Structure:</h4>
            <div className="bg-white p-4 rounded border font-mono text-sm mb-4">
              =INDEX(return_array, MATCH(lookup_value, lookup_array, 0))
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">📍 INDEX Function:</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li><strong>return_array:</strong> The column containing values to return</li>
                  <li><strong>position:</strong> Which row position to return from</li>
                  <li>Think: "Give me the value from this column at this position"</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-gray-800 mb-2">🔍 MATCH Function:</h5>
                <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                  <li><strong>lookup_value:</strong> What to search for</li>
                  <li><strong>lookup_array:</strong> Where to search</li>
                  <li><strong>0:</strong> Exact match required</li>
                  <li>Think: "Find the position of this item"</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
            <h4 className="font-semibold text-blue-900 mb-3 text-lg">💼 Professional Example:</h4>
            <p className="text-blue-800 mb-3">
              To pull "Service Revenue" from her trial balance into the Income Statement, Sarah would write:
            </p>
            <div className="bg-white p-3 rounded border font-mono text-sm mb-3">
              =INDEX(TrialBalance[Amount], MATCH("Service Revenue", TrialBalance[Account], 0))
            </div>
            <p className="text-blue-700 text-sm">
              This formula says: "Find 'Service Revenue' in the Account column, then return the corresponding 
              Amount value." When Sarah adds new service revenue, this formula automatically updates her Income Statement.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-blue-800 mb-4">
            Why Dynamic Linking Matters
          </h3>
          
          <p className="text-lg leading-relaxed mb-6">
            The difference between amateur and professional financial models is automation. When Sarah's Income Statement 
            uses dynamic formulas, her financial story stays current without manual updates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 text-lg">✅ Professional Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-green-700 space-y-2 text-sm">
                  <li>• Dynamic formulas that auto-update</li>
                  <li>• Live connection to source data</li>
                  <li>• Always shows current financial position</li>
                  <li>• Builds investor confidence</li>
                  <li>• Saves time on updates</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800 text-lg">❌ Amateur Approach</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-red-700 space-y-2 text-sm">
                  <li>• Hard-coded numbers</li>
                  <li>• Manual updates required</li>
                  <li>• Risk of outdated information</li>
                  <li>• Prone to human error</li>
                  <li>• Time-consuming maintenance</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="border-blue-200 bg-blue-50 mb-6">
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
                Think about Sarah's challenge of transforming her detailed ledger into an investor-ready Income Statement. 
                Share with a partner:
              </p>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li>What specific advantages does INDEX/MATCH give Sarah for building professional financial reports?</li>
                <li>How would dynamic formulas help Sarah when she lands more clients and grows TechStart Solutions?</li>
                <li>Why is the "bottom line" (Net Income) so important to investors evaluating her business?</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <ComprehensionCheck
          title="Income Statement Architecture & Excel Mastery"
          description="Verify your understanding of Income Statement construction and professional Excel techniques."
          questions={introductionQuestions}
          showExplanations={true}
        />

        <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
          <h3 className="font-semibold text-amber-900 mb-2 text-lg">🎯 Phase 2 Learning Target</h3>
          <p className="text-amber-800">
            You should now understand the Income Statement's role as the business "plot," the INDEX/MATCH formula 
            structure for dynamic data retrieval, and why professional financial models use live connections to 
            source data rather than static numbers.
          </p>
        </div>
      </div>

      <PhaseFooter 
        lesson={lesson03Data}
        unit={unit03Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />
    </div>
  );
}