import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Trophy, Target, AlertTriangle } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson02Data, unit07Data, lesson02Phases } from "../lesson-data";

const currentPhase = lesson02Phases[4]; // Assessment phase

const assessmentQuestions = [
  {
    id: "technical-1",
    question: "A company purchases equipment for $60,000 with a salvage value of $6,000 and useful life of 9 years. What is the annual straight-line depreciation expense?",
    answers: [
      "$6,000 per year",
      "$6,667 per year", 
      "$5,400 per year",
      "$7,333 per year"
    ],
    explanation: "Using SLN formula: ($60,000 - $6,000) ÷ 9 years = $54,000 ÷ 9 = $6,000 per year. The depreciable base is cost minus salvage value."
  },
  {
    id: "excel-1",
    question: "Which Excel formula would correctly calculate the third year depreciation for a $45,000 asset with $3,000 salvage value and 6-year life using Double-Declining Balance?",
    answers: [
      "=DDB(45000,3000,6,3)",
      "=DDB(45000,3000,3,6)",
      "=SLN(45000,3000,6)*2",
      "=DDB(42000,3000,6,3)"
    ],
    explanation: "The DDB function syntax is =DDB(cost, salvage, life, period). The period parameter (3) specifies we want the third year's depreciation."
  },
  {
    id: "business-1",
    question: "Why might a rapidly growing technology company prefer Double-Declining Balance over Straight-Line depreciation for computer equipment?",
    answers: [
      "DDB provides larger tax deductions in early years, improving cash flow for reinvestment in growth",
      "DDB spreads costs evenly, making budgeting more predictable for new companies",
      "DDB increases the asset's book value over time, improving the balance sheet",
      "DDB is required by law for all technology equipment purchases"
    ],
    explanation: "DDB accelerates depreciation, creating larger tax deductions early when growing companies most need cash flow for expansion. It also better matches the rapid obsolescence of technology assets."
  },
  {
    id: "comparison-1", 
    question: "For an asset costing $80,000 with 4-year life and $8,000 salvage value, how much MORE depreciation would DDB provide in Year 1 compared to SLN?",
    answers: [
      "$22,000 more with DDB",
      "$18,000 more with DDB", 
      "$15,000 more with DDB",
      "$12,000 more with DDB"
    ],
    explanation: "SLN Year 1: ($80,000-$8,000)÷4 = $18,000. DDB Year 1: $80,000×(2÷4) = $40,000. Difference: $40,000-$18,000 = $22,000 more with DDB."
  },
  {
    id: "strategic-1",
    question: "A manufacturing company with variable seasonal production is considering different depreciation methods for new equipment. Which combination would be most appropriate?",
    answers: [
      "Consider Units of Production method to match depreciation with actual equipment usage patterns",
      "Always use Straight-Line method because manufacturing requires predictable expenses",
      "Use DDB method to maximize early tax benefits regardless of usage patterns",
      "Switch between methods each year based on production levels"
    ],
    explanation: "Units of Production method matches depreciation expense with actual asset usage, making it ideal for equipment with variable production patterns. This provides the most accurate cost allocation."
  },
  {
    id: "financial-1",
    question: "How does the choice between SLN and DDB depreciation methods affect a company's financial statements in the first year?",
    answers: [
      "DDB shows lower net income and lower asset book value compared to SLN",
      "DDB shows higher net income and higher asset book value compared to SLN",
      "Both methods show identical financial statement impacts in all periods",
      "DDB affects only the cash flow statement, not the income statement or balance sheet"
    ],
    explanation: "DDB creates higher depreciation expense in early years, reducing net income. Higher accumulated depreciation also reduces the asset's book value on the balance sheet compared to SLN."
  },
  {
    id: "investor-1",
    question: "When presenting to potential investors, why might a company's depreciation method choice matter?",
    answers: [
      "It demonstrates management's understanding of tax strategy and financial optimization",
      "Investors only care about the total amount of depreciation, not the timing",
      "Depreciation method choice has no impact on investor decision-making",
      "All companies are required to use the same depreciation method for comparability"
    ],
    explanation: "Sophisticated investors analyze depreciation choices as indicators of management's financial acumen and strategic thinking about tax optimization and cash flow management."
  },
  {
    id: "cash-flow-1",
    question: "A startup company has $100,000 equipment with 5-year life and $10,000 salvage value. If their tax rate is 30%, how much additional cash will DDB save them in taxes during Year 1 compared to SLN?",
    answers: [
      "$9,000 more cash from tax savings",
      "$6,000 more cash from tax savings",
      "$12,000 more cash from tax savings", 
      "$3,000 more cash from tax savings"
    ],
    explanation: "SLN Year 1: $18,000 depreciation. DDB Year 1: $40,000 depreciation. Extra depreciation: $22,000. Tax savings: $22,000 × 30% = $6,600. (Closest answer is $6,000)"
  },
  {
    id: "professional-1",
    question: "In a professional audit or business valuation context, what is the primary advantage of consistent depreciation method application?",
    answers: [
      "It provides comparability across periods and supports reliable financial analysis",
      "It maximizes the company's reported profits in all accounting periods", 
      "It minimizes the work required by accountants and auditors",
      "It automatically optimizes tax benefits without additional planning"
    ],
    explanation: "Consistency in accounting methods is a fundamental principle that ensures financial statements can be compared across periods, enabling meaningful trend analysis and reliable business valuations."
  },
  {
    id: "application-1",
    question: "Sarah at TechStart Solutions is analyzing her $18,000 equipment purchase. Given that she wants to maximize early cash flow for business growth while maintaining investor confidence, which approach should she take?",
    answers: [
      "Use DDB for tax purposes and clearly explain the strategic rationale to investors",
      "Use SLN method exclusively to show consistent, conservative financial management",
      "Switch between methods quarterly based on current cash flow needs",
      "Expense the full $18,000 immediately to minimize complexity"
    ],
    explanation: "Using DDB for legitimate tax optimization while transparently explaining the strategy demonstrates sophisticated financial management to investors. The key is clear communication of the business rationale."
  }
];

export default function Unit07Lesson02Phase5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit07Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="max-w-4xl mx-auto px-4 pb-8 space-y-8">
        
        {/* Assessment Introduction */}
        <Card className="border-emerald-200 bg-emerald-50">
          <CardHeader>
            <CardTitle className="text-2xl text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="h-6 w-6" />
              Depreciation Techniques Assessment
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed text-emerald-900">
              Time to demonstrate your mastery of depreciation techniques! This comprehensive assessment 
              evaluates both your technical calculation skills and your understanding of strategic business 
              applications. You'll be tested on straight-line and double-declining balance methods, Excel 
              functions, and real-world decision-making scenarios.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-emerald-300 text-center">
                <Trophy className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                <h4 className="font-semibold text-emerald-800 mb-1">Technical Mastery</h4>
                <p className="text-sm text-emerald-700">Calculate depreciation using both SLN and DDB methods</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-emerald-300 text-center">
                <Target className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                <h4 className="font-semibold text-emerald-800 mb-1">Strategic Thinking</h4>
                <p className="text-sm text-emerald-700">Apply methods to real business scenarios and decision-making</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-emerald-300 text-center">
                <AlertTriangle className="h-8 w-8 mx-auto mb-2 text-emerald-600" />
                <h4 className="font-semibold text-emerald-800 mb-1">Professional Standards</h4>
                <p className="text-sm text-emerald-700">Demonstrate understanding of accounting principles and Excel proficiency</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Assessment Guidelines */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-800">📋 Assessment Guidelines</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">What You'll Be Assessed On:</h4>
                <ul className="text-blue-800 space-y-1 text-sm">
                  <li>• Straight-Line depreciation calculations and Excel functions</li>
                  <li>• Double-Declining Balance method application</li>
                  <li>• Business impact analysis and strategic reasoning</li>
                  <li>• Cash flow and tax implications understanding</li>
                  <li>• Professional communication and investor perspective</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-800 mb-2">Success Criteria:</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-green-100 text-green-800 text-xs">85%+</Badge>
                    <span className="text-blue-800 text-sm">Mastery - Ready for advanced applications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-yellow-100 text-yellow-800 text-xs">70-84%</Badge>
                    <span className="text-blue-800 text-sm">Proficient - Solid understanding demonstrated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-red-100 text-red-800 text-xs">&lt;70%</Badge>
                    <span className="text-blue-800 text-sm">Developing - Review concepts and retry</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comprehensive Assessment */}
        <ComprehensionCheck
          questions={assessmentQuestions}
          title="Depreciation Techniques Comprehensive Assessment"
          description="Demonstrate your mastery of depreciation calculations, Excel functions, and strategic business applications. Read each question carefully and select the best answer."
          showExplanations={true}
          allowRetry={true}
        />

        {/* Assessment Context */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-800">🎯 Career Relevance & Next Steps</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-amber-800 mb-4">
              The skills you've demonstrated in this assessment are directly applicable to professional 
              roles in accounting, finance, business analysis, and entrepreneurship. Your ability to 
              calculate depreciation and understand its strategic implications is valued by employers 
              and essential for business success.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border border-amber-300">
                <h4 className="font-semibold text-amber-800 mb-2">Professional Applications:</h4>
                <ul className="text-amber-700 text-sm space-y-1">
                  <li>• <strong>Financial Analyst:</strong> Build depreciation models for investment analysis</li>
                  <li>• <strong>Business Owner:</strong> Optimize tax strategies and cash flow timing</li>
                  <li>• <strong>Accountant:</strong> Ensure compliance and advise on method selection</li>
                  <li>• <strong>Consultant:</strong> Help businesses improve financial performance</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-amber-300">
                <h4 className="font-semibold text-amber-800 mb-2">Unit 7 Progression:</h4>
                <ul className="text-amber-700 text-sm space-y-1">
                  <li>• <strong>Next Lesson:</strong> Inventory Methods Introduction (FIFO/LIFO)</li>
                  <li>• <strong>Building Toward:</strong> Integrated Asset & Inventory Tracker</li>
                  <li>• <strong>Final Goal:</strong> Board presentation with strategic recommendations</li>
                  <li>• <strong>Real Impact:</strong> Advise local businesses on financial optimization</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg border">
              <h4 className="font-semibold text-gray-800 mb-2">🌟 Excellence Indicators</h4>
              <p className="text-gray-800 text-sm">
                Students demonstrating mastery of this content typically excel in advanced business courses, 
                secure competitive internships in finance and accounting, and show strong performance in 
                college-level business programs. Your depreciation analysis skills are building blocks for 
                sophisticated financial modeling and strategic business thinking.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Performance Reflection */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800">💭 Post-Assessment Reflection</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-purple-800 mb-4">
              After completing your assessment, take a moment to reflect on your learning journey:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-800">Self-Assessment Questions:</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Which depreciation method do you feel most confident calculating?</li>
                  <li>• What business scenario challenged your thinking the most?</li>
                  <li>• How has your understanding of cash flow and taxes evolved?</li>
                  <li>• What connections do you see to Sarah's TechStart journey?</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-purple-800">Growth Planning:</h4>
                <ul className="text-purple-700 space-y-1">
                  <li>• Areas where you want additional practice or clarification</li>
                  <li>• How you'll apply this knowledge to future business scenarios</li>
                  <li>• Questions you want to explore in upcoming inventory lessons</li>
                  <li>• Ways this learning connects to your career interests</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit07Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  );
}