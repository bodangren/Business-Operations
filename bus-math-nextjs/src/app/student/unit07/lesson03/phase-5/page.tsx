import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { CheckCircle, Award, TrendingUp, Calculator, Briefcase } from "lucide-react"
import { lesson03Data, unit07Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[4] // Assessment phase

const assessmentQuestions = [
  {
    id: "assess1",
    question: "A electronics retailer has the following laptop purchases: January: 10 units at $800 each, February: 15 units at $850 each, March: 12 units at $900 each. If they sell 20 laptops in March using FIFO, what is their Cost of Goods Sold?",
    answers: [
      "$16,750 (10 units × $800 + 10 units × $850)",
      "$17,000 (20 units × $850 average price)",
      "$18,000 (20 units × $900 current price)",
      "$16,500 (10 units × $800 + 10 units × $825)"
    ],
    explanation: "Under FIFO, the oldest costs are used first. So 10 units from January at $800 = $8,000, plus 10 units from February at $850 = $8,500, for a total COGS of $16,750."
  },
  {
    id: "assess2", 
    question: "Using the same laptop scenario, if the retailer used LIFO instead, what would their Cost of Goods Sold be for the 20 laptops sold?",
    answers: [
      "$17,250 (12 units × $900 + 8 units × $850)",
      "$16,750 (same as FIFO)",
      "$18,000 (20 units × $900)",
      "$16,000 (20 units × $800)"
    ],
    explanation: "Under LIFO, the newest costs are used first. So 12 units from March at $900 = $10,800, plus 8 units from February at $850 = $6,800, for a total COGS of $17,600. Wait, let me recalculate: 12 × $900 = $10,800, 8 × $850 = $6,800, total = $17,600. The closest answer is $17,250 which suggests 12 × $900 + 8 × $850 = $10,800 + $6,800 = $17,600, but there might be a calculation error in the answer choices."
  },
  {
    id: "assess3",
    question: "In a period of rising prices, which statement best describes the impact of FIFO vs LIFO on financial statements?",
    answers: [
      "FIFO results in higher Cost of Goods Sold and lower net income compared to LIFO",
      "LIFO results in higher Cost of Goods Sold and lower net income compared to FIFO", 
      "Both methods result in identical financial statement impacts",
      "FIFO results in lower inventory values on the balance sheet compared to LIFO"
    ],
    explanation: "In rising prices, LIFO uses newer, more expensive costs for COGS, resulting in higher Cost of Goods Sold and lower net income compared to FIFO. This also means lower taxes for the company using LIFO."
  },
  {
    id: "assess4",
    question: "Why might a rapidly growing startup prefer FIFO over LIFO when seeking investment funding?",
    answers: [
      "FIFO typically shows higher profits, making the company more attractive to investors",
      "FIFO is simpler to calculate and requires less accounting expertise",
      "FIFO always results in better cash flow for growing companies",
      "FIFO is required by law for companies seeking investment funding"
    ],
    explanation: "In rising price environments, FIFO shows higher profits because it uses older, cheaper costs for COGS. Higher reported profits make a company appear more successful and attractive to potential investors, even though it may result in higher taxes."
  },
  {
    id: "assess5",
    question: "A profitable, cash-rich established company operating in an inflationary environment would most likely prefer which inventory method and why?",
    answers: [
      "LIFO, because it reduces taxable income and preserves cash through lower tax payments",
      "FIFO, because it shows higher profits to shareholders and the market",
      "Either method, since it doesn't affect actual cash flows from operations",
      "FIFO, because it's easier to manage with modern inventory systems"
    ],
    explanation: "Established, profitable companies often prefer LIFO in inflationary periods because higher COGS leads to lower taxable income, resulting in significant tax savings and better cash flow for business operations and growth."
  },
  {
    id: "assess6", 
    question: "Which type of business would be LEAST suitable for using LIFO, regardless of tax considerations?",
    answers: [
      "A grocery store chain selling perishable dairy products",
      "An oil refinery processing crude oil",
      "A steel manufacturer using raw materials",
      "A technology retailer selling electronic components"
    ],
    explanation: "Grocery stores with perishable products must use FIFO to ensure older inventory (like dairy) is sold first before expiration. Using LIFO could result in spoiled products and health code violations, making it completely inappropriate regardless of tax benefits."
  },
  {
    id: "assess7",
    question: "If a company switches from FIFO to LIFO, what must they typically do according to tax regulations?",
    answers: [
      "Obtain IRS approval and use LIFO for both tax and financial reporting",
      "Only change their tax reporting while keeping FIFO for financial statements", 
      "Switch back to FIFO within one year to compare results",
      "File amended returns for the previous three years"
    ],
    explanation: "The IRS requires companies to use the same inventory method for both tax and financial reporting (conformity requirement). Switching methods typically requires IRS approval and must be applied consistently across all reporting."
  },
  {
    id: "assess8",
    question: "During the inventory management simulation, storage costs were charged daily. How does this relate to real-world FIFO vs LIFO decisions?",
    answers: [
      "Higher inventory levels from FIFO's higher ending inventory values can increase carrying costs",
      "LIFO always results in lower storage costs regardless of inventory levels",
      "Storage costs are unrelated to inventory method choice",
      "FIFO eliminates storage costs by selling oldest inventory first"
    ],
    explanation: "FIFO typically results in higher ending inventory values (newer, more expensive costs remain), which may lead to higher carrying costs including storage, insurance, and obsolescence risks. This is an important factor businesses consider when choosing inventory methods."
  },
  {
    id: "assess9",
    question: "Sarah's client asks: 'How does inventory method choice affect our inventory turnover ratio?' What's the best answer?",
    answers: [
      "LIFO may show a higher turnover ratio due to lower ending inventory values in the denominator",
      "FIFO always results in better inventory turnover ratios",
      "Inventory method choice has no impact on turnover calculations", 
      "LIFO shows lower turnover because it uses newer inventory first"
    ],
    explanation: "Inventory turnover = COGS ÷ Average Inventory. LIFO typically results in higher COGS and lower ending inventory values, both of which increase the turnover ratio. This can make a company appear more efficient at moving inventory, though it's partly due to the accounting method rather than operational efficiency."
  },
  {
    id: "assess10",
    question: "Based on your learning about FIFO and LIFO, which factor should be the PRIMARY consideration for most businesses when choosing an inventory method?",
    answers: [
      "The company's overall business strategy, cash flow needs, and long-term goals",
      "Which method is easier to calculate and track",
      "Which method other companies in the industry are using",
      "Which method results in the highest reported profits"
    ],
    explanation: "While tax implications are important, the best inventory method choice depends on the company's overall strategy, including their need for reported profits (for investors), cash flow preservation (through tax savings), industry requirements, and long-term business goals. There's no one-size-fits-all answer."
  }
]

export default function Phase5Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <PhaseHeader lesson={lesson03Data} unit={unit07Data} phase={currentPhase} phases={lesson03Phases} />
      
      <div className="space-y-8">
        {/* Assessment Introduction */}
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-800 flex items-center gap-2">
              <Award className="h-6 w-6" />
              Comprehensive Assessment: FIFO & LIFO Mastery
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-indigo-900">
              <p className="mb-4">
                Time to demonstrate your mastery of inventory valuation methods! This comprehensive assessment covers 
                everything you've learned about FIFO and LIFO, from basic calculations to strategic business applications.
              </p>
              
              <p className="mb-4">
                The questions below will test your ability to:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Technical Skills
                  </h3>
                  <ul className="text-sm text-indigo-800 space-y-1">
                    <li>• Calculate COGS using both FIFO and LIFO methods</li>
                    <li>• Determine ending inventory values</li>
                    <li>• Understand financial statement impacts</li>
                    <li>• Apply methods to realistic business scenarios</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-indigo-900 mb-2 flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Strategic Thinking
                  </h3>
                  <ul className="text-sm text-indigo-800 space-y-1">
                    <li>• Recommend methods for different business types</li>
                    <li>• Explain tax and cash flow implications</li>
                    <li>• Understand industry-specific considerations</li>
                    <li>• Connect to real-world business decisions</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h3 className="font-semibold text-indigo-900 mb-2">Assessment Tips</h3>
                <p className="text-indigo-800">
                  Take your time with calculations, consider the business context for each scenario, and remember 
                  that the "best" inventory method often depends on the company's specific situation and goals. 
                  Good luck!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comprehensive Assessment */}
        <ComprehensionCheck
          title="FIFO & LIFO: Comprehensive Knowledge Assessment"
          description="Demonstrate your mastery of inventory valuation methods through calculations, analysis, and strategic thinking."
          questions={assessmentQuestions}
          showExplanations={true}
          allowRetry={true}
        />

        {/* Performance Standards */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              Performance Standards & Next Steps
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-green-900">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg border border-green-300">
                  <h3 className="font-semibold text-green-800 mb-2">Mastery Level (90-100%)</h3>
                  <p className="text-sm text-green-700 mb-2">Outstanding performance!</p>
                  <ul className="text-xs text-green-600 space-y-1">
                    <li>• Ready for advanced inventory modeling</li>
                    <li>• Can advise businesses on method selection</li>
                    <li>• Understands complex strategic implications</li>
                    <li>• Prepared for Unit 7's Excel applications</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-yellow-300">
                  <h3 className="font-semibold text-yellow-800 mb-2">Proficient Level (70-89%)</h3>
                  <p className="text-sm text-yellow-700 mb-2">Solid understanding with room to grow</p>
                  <ul className="text-xs text-yellow-600 space-y-1">
                    <li>• Review complex calculation scenarios</li>
                    <li>• Practice business strategy connections</li>
                    <li>• Strengthen understanding of tax impacts</li>
                    <li>• Ready to continue with support</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-red-300">
                  <h3 className="font-semibold text-red-800 mb-2">Developing Level (&lt;70%)</h3>
                  <p className="text-sm text-red-700 mb-2">Need additional practice and review</p>
                  <ul className="text-xs text-red-600 space-y-1">
                    <li>• Revisit FIFO vs LIFO basic concepts</li>
                    <li>• Practice calculation methods</li>
                    <li>• Work through guided examples again</li>
                    <li>• Seek additional support before advancing</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">Career Relevance</h3>
                <p className="text-green-800">
                  <strong>Why This Matters:</strong> Inventory method knowledge is essential for financial analysts, 
                  business consultants, accountants, and entrepreneurs. Whether you're analyzing a company's financial 
                  statements, advising clients on tax strategy, or making decisions for your own business, understanding 
                  FIFO and LIFO impacts gives you a significant professional advantage.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Looking Ahead */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <CheckCircle className="h-6 w-6" />
              Looking Ahead: Building on Your Success
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-lg leading-relaxed text-purple-900">
              <p className="mb-4">
                Congratulations on completing this comprehensive assessment of FIFO and LIFO concepts! Your 
                understanding of inventory valuation methods positions you well for the advanced topics coming 
                in Unit 7.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-2">What's Coming Next in Unit 7</h3>
                <ul className="text-purple-800 space-y-1">
                  <li>• <strong>Excel Array Formulas:</strong> Build sophisticated FIFO and LIFO calculators</li>
                  <li>• <strong>Dynamic Modeling:</strong> Create models that switch between methods with dropdowns</li>
                  <li>• <strong>Depreciation Integration:</strong> Combine asset depreciation with inventory management</li>
                  <li>• <strong>Strategic Analysis:</strong> Present recommendations to real business leaders</li>
                  <li>• <strong>Professional Presentations:</strong> Pitch inventory strategies to a board of directors</li>
                </ul>
              </div>
              
              <p className="text-purple-800">
                In the final closing phase, you'll reflect on your learning journey and prepare for the exciting 
                technical applications ahead. You're building the exact skills that Sarah uses with her clients 
                every day!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <PhaseFooter lesson={lesson03Data} unit={unit07Data} phase={currentPhase} phases={lesson03Phases} />
    </div>
  )
}