import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Target, TrendingUp } from "lucide-react";
import { lesson02Data, unit08Data, lesson02Phases } from "../lesson-data";

const currentPhase = lesson02Phases[4]; // Assessment phase

const assessmentQuestions = [
  {
    id: "a1",
    question: "In Sarah's integrated financial model, what is the primary reason that her Balance Sheet must always balance (Assets = Liabilities + Equity) even when she changes growth assumptions?",
    answers: [
      "The fundamental accounting equation represents the mathematical foundation that validates the model's integrity regardless of scenario changes",
      "Investors expect to see the same total on both sides of the balance sheet",
      "Excel automatically forces the equation to balance when you use formulas", 
      "The balance sheet only balances if you enter the numbers in the correct order"
    ],
    explanation: "The accounting equation isn't just a formatting requirement - it's a mathematical proof that your model correctly tracks how resources (assets) are financed (liabilities and equity). An integrated model that maintains this balance demonstrates technical competence and business understanding."
  },
  {
    id: "a2",
    question: "When Sarah's model shows that increasing revenue by 25% actually decreases her cash flow in the short term, which integration principle best explains this counterintuitive result?",
    answers: [
      "Working capital changes can consume cash even during profitable growth because higher sales create higher accounts receivable",
      "The model has an error because revenue growth should always increase cash flow",
      "This happens because tax expenses increase proportionally with revenue",
      "Higher revenue always requires more inventory, which reduces cash"
    ],
    explanation: "This demonstrates the power of integrated thinking. When you sell more on credit, revenue goes up (Income Statement) and A/R goes up (Balance Sheet), but cash doesn't increase until customers pay. The cash flow statement shows this as an operating cash outflow, explaining why growth can strain cash flow."
  },
  {
    id: "a3",
    question: "Which formula structure best demonstrates professional cross-sheet linking with proper reference integrity for connecting Net Income to Retained Earnings?",
    answers: [
      "=Previous_Retained_Earnings + Income_Statement!$B$25 where B25 contains Net Income with absolute references",
      "=Previous_Retained_Earnings + 15000 using a hard-coded profit number",
      "=Previous_Retained_Earnings + B25 using a relative reference within the same sheet",
      "=Retained_Earnings + Net_Income using named ranges without sheet references"
    ],
    explanation: "Professional models use absolute references ($B$25) for fixed cell locations and explicit sheet references (Income_Statement!) to create clear, maintainable formulas. This prevents errors when copying formulas and makes the model transparent to reviewers."
  },
  {
    id: "a4",
    question: "In Sarah's integrated model, why would a venture capitalist specifically look for the validation that 'Cash Flow Statement ending cash = Balance Sheet cash balance'?",
    answers: [
      "This mathematical check proves that all cash movements are properly tracked and the model's three statements are truly integrated",
      "It shows that Sarah understands basic Excel functions",
      "Investors want to see that cash flow is always positive",
      "This check ensures that the company has enough cash to operate"
    ],
    explanation: "This validation is the ultimate integrity test for integrated models. If the cash reconciles, it proves that every dollar of cash flow change is properly explained and connected across all three statements. It's a technical competence signal that investors use to assess model quality."
  },
  {
    id: "a5",
    question: "When Sarah changes her customer payment terms from 30 days to 45 days, how should her integrated model reflect this change across all three statements?",
    answers: [
      "Income Statement unchanged, Balance Sheet shows higher A/R, Cash Flow shows reduced operating cash due to A/R increase",
      "All three statements should show proportional decreases because customers are paying later",
      "Only the Cash Flow Statement changes because this is purely a cash timing issue",
      "Revenue should decrease on the Income Statement because collection is slower"
    ],
    explanation: "This tests understanding of accrual vs. cash accounting within integration. Revenue recognition (when earned) is separate from cash collection (when received). The integrated model shows this relationship clearly: same profits, different cash timing."
  },
  {
    id: "a6", 
    question: "What is the most significant advantage of using named ranges (like 'Growth_Rate') instead of cell references (like 'B5') in Sarah's cross-sheet formulas?",
    answers: [
      "Named ranges make formulas self-documenting and create more robust models that are easier for investors to understand and validate",
      "Named ranges calculate faster than cell references in Excel",
      "You can use longer names which look more professional",
      "Named ranges automatically update all formulas when you change the input"
    ],
    explanation: "Named ranges transform formulas like '=B5*C7' into '=Monthly_Revenue*Growth_Rate', making models transparent and professional. This clarity builds investor confidence and makes models easier to audit, modify, and understand - critical factors in due diligence."
  },
  {
    id: "a7",
    question: "In Sarah's startup model, if she purchases $20,000 of equipment with cash, which statement shows the CORRECT integrated impact?",
    answers: [
      "Income Statement: Depreciation expense over time; Balance Sheet: Equipment +$20K, Cash -$20K; Cash Flow: Investing activity -$20K",
      "Income Statement: Equipment expense $20K immediately; Balance Sheet: No change; Cash Flow: Operating expense $20K",
      "All three statements show a $20K expense in the current period",
      "Only the Cash Flow Statement is affected by this equipment purchase"
    ],
    explanation: "Equipment purchases are capital expenditures, not immediate expenses. The integrated model shows: Balance Sheet captures the asset and cash reduction, Cash Flow shows the investing outflow, and Income Statement spreads the cost over time through depreciation."
  },
  {
    id: "a8",
    question: "Why would Sarah's model be considered more sophisticated than a competitor's model that shows the same profit projections but uses separate, unlinked spreadsheets?",
    answers: [
      "Sarah's integrated model can instantly test different scenarios and assumptions while maintaining mathematical consistency across all statements",
      "Integrated models always show higher profits than separate models",
      "Sarah's model uses more complex Excel functions",
      "Integrated models take longer to build, showing more effort"
    ],
    explanation: "Integration enables scenario analysis - the holy grail for investors. When Sarah can answer 'what if customer acquisition costs double?' instantly with mathematically consistent results across all statements, she demonstrates strategic thinking and technical competence that separate models cannot match."
  },
  {
    id: "a9",
    question: "Which business insight becomes most apparent only when viewing Sarah's three financial statements as an integrated system rather than separately?",
    answers: [
      "How operational decisions (like growth rate or payment terms) create complex, interconnected effects on profitability, cash flow, and financial position",
      "Which expenses are the highest on the income statement",
      "How much cash the company has at any point in time", 
      "Whether the company is profitable in each month"
    ],
    explanation: "Integration reveals the interconnected nature of business decisions. A single change (faster growth) affects revenue (Income Statement), working capital (Balance Sheet), and cash flow timing - insights that are invisible when viewing statements separately but critical for strategic management."
  },
  {
    id: "a10",
    question: "From an investor's perspective, what does Sarah's ability to build and maintain formula integrity across three integrated statements signal about her capabilities as an entrepreneur?",
    answers: [
      "Systems thinking, attention to detail, and the technical competence to build scalable business processes - all critical CEO skills",
      "That she's good with Excel but may not understand business strategy",
      "That she can handle the bookkeeping for a small company",
      "That she follows instructions well and pays attention to formatting"
    ],
    explanation: "Investors see integrated modeling as a proxy for entrepreneurial sophistication. Building systems that maintain integrity under different scenarios demonstrates the systematic thinking, process orientation, and technical leadership that investors want in CEOs they're betting millions on."
  }
];

export default function Unit08Lesson02Phase5() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit08Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />

      {/* Main Content */}
      <div className="space-y-8">
        
        {/* Assessment Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Assessment: Three-Statement Integration Mastery
          </h2>
          
          <p className="text-lg leading-relaxed mb-6">
            This assessment evaluates your comprehensive understanding of three-statement integration - 
            both the technical skills and the strategic business thinking that impressed investors in 
            Sarah's pitch meeting. You'll need to demonstrate mastery of formula integrity, cross-sheet 
            linking principles, and the business logic that makes integrated models so powerful.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            The questions combine technical knowledge with practical application, mirroring the kinds 
            of integration challenges that professional financial modelers face when building 
            investor-ready business models. Take your time and think through each scenario carefully.
          </p>
        </div>

        {/* Learning Objectives Reminder */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-4 text-xl flex items-center gap-2">
            <Target className="h-5 w-5" />
            Assessment Coverage: Learning Objectives
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-blue-900">Primary Objective</h4>
              </div>
              <p className="text-blue-800 mb-2 font-medium">
                Link income statement, balance sheet, and cash flow with formula integrity
              </p>
              <p className="text-blue-700 text-sm">
                Questions assess your ability to understand and apply the connections between 
                statements, including how changes in one statement automatically affect others 
                through proper formula construction.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <h4 className="font-semibold text-blue-900">Secondary Objective</h4>
              </div>
              <p className="text-blue-800 mb-2 font-medium">
                Build dynamic cross-sheet references that maintain integrity
              </p>
              <p className="text-blue-700 text-sm">
                Questions test your knowledge of professional reference techniques, validation 
                methods, and the technical standards that make models robust and investor-ready.
              </p>
            </div>
          </div>
        </div>

        {/* Performance Standards */}
        <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h3 className="font-semibold text-yellow-900 mb-4 text-xl flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Performance Standards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <div className="text-center mb-2">
                <div className="bg-green-100 text-green-800 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-2">
                  A
                </div>
                <h4 className="font-semibold text-yellow-900">Mastery (90-100%)</h4>
              </div>
              <p className="text-yellow-800 text-sm">
                Demonstrates comprehensive understanding of integration principles, formula integrity, 
                and business applications. Ready for advanced modeling work.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <div className="text-center mb-2">
                <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-2">
                  B
                </div>
                <h4 className="font-semibold text-yellow-900">Proficient (80-89%)</h4>
              </div>
              <p className="text-yellow-800 text-sm">
                Solid grasp of integration concepts with minor gaps. Can apply principles 
                effectively in most scenarios.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-yellow-200">
              <div className="text-center mb-2">
                <div className="bg-orange-100 text-orange-800 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-2">
                  C
                </div>
                <h4 className="font-semibold text-yellow-900">Developing (&lt;80%)</h4>
              </div>
              <p className="text-yellow-800 text-sm">
                Basic understanding present but needs additional practice with integration 
                concepts and formula construction.
              </p>
            </div>
          </div>
        </div>

        {/* Assessment Questions */}
        <ComprehensionCheck
          title="Integration Mastery Assessment"
          description="Demonstrate your comprehensive understanding of three-statement integration principles, technical implementation, and business applications."
          questions={assessmentQuestions}
          showExplanations={true}
          allowRetry={true}
        />

        {/* Assessment Reflection Prompts */}
        <div className="bg-gray-50 p-6 rounded-lg border">
          <h3 className="font-semibold text-gray-900 mb-4 text-xl">Post-Assessment Reflection</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            After completing the assessment, take a few minutes to reflect on your learning journey. 
            Consider these questions as you review your results:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800 text-lg">Technical Mastery</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-2">
                <p>• Which integration concepts felt most natural to you?</p>
                <p>• Where do you still need additional practice?</p>
                <p>• How comfortable are you with cross-sheet reference syntax?</p>
                <p>• Can you explain why validation checks are critical?</p>
              </CardContent>
            </Card>
            
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="text-gray-800 text-lg">Business Application</CardTitle>
              </CardHeader>
              <CardContent className="text-gray-700 text-sm space-y-2">
                <p>• How does integration thinking change your view of business decisions?</p>
                <p>• What investor benefits of integrated models are most compelling?</p>
                <p>• How would you explain integration value to a non-technical founder?</p>
                <p>• What integration skills will you prioritize developing further?</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Next Steps Preview */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-900 mb-3 text-xl">Looking Ahead: Building Your Integrated Model</h3>
          <p className="text-green-800 leading-relaxed mb-4">
            You've mastered the theoretical foundation of three-statement integration. In the upcoming lessons, 
            you'll put these principles into practice by building Sarah's complete integrated financial model 
            from scratch. You'll experience firsthand how the integration techniques you've learned create the 
            dynamic, professional-grade models that win investor confidence.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-green-800 text-sm">
            <div className="bg-white p-3 rounded border border-green-300">
              <strong>Lesson 3:</strong> Complete Balance Sheet integration with working capital models
            </div>
            <div className="bg-white p-3 rounded border border-green-300">
              <strong>Lesson 4:</strong> Advanced scenario analysis using integrated models
            </div>
            <div className="bg-white p-3 rounded border border-green-300">
              <strong>Lessons 5-8:</strong> Professional model refinement and investor presentation prep
            </div>
          </div>
        </div>

      </div>

      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  );
}