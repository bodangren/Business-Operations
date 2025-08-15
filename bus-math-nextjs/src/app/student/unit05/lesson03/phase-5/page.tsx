import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, TrendingUp } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson03Data, lesson03Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson03Phases[4] // Assessment phase

const assessmentQuestions = [
  {
    id: "assessment-1",
    question: "Sarah hires Alex at $65,000 annually, paid bi-weekly. What's his gross pay per paycheck?",
    answers: [
      "$2,500 (calculated as $65,000 ÷ 26 pay periods)", 
      "$5,416.67 (calculated as $65,000 ÷ 12 months)",
      "$1,250 (calculated as $65,000 ÷ 52 weeks)",
      "$31.25 per hour for 40 hours"
    ],
    explanation: "Bi-weekly pay means 26 pay periods per year (52 weeks ÷ 2). Annual salary divided by pay periods: $65,000 ÷ 26 = $2,500 per paycheck."
  },
  {
    id: "assessment-2", 
    question: "Which Excel formula correctly calculates overtime pay for an hourly employee working 45 hours at $25/hour?",
    answers: [
      "=IF(45>40, 40*25+(45-40)*25*1.5, 45*25)",
      "=45*25*1.5", 
      "=IF(45>40, 45*25*1.5, 45*25)",
      "=40*25+(45*25*1.5)"
    ],
    explanation: "The formula checks if hours exceed 40, then calculates 40 regular hours plus overtime hours at 1.5× rate. For 45 hours: 40×$25 + 5×$25×1.5 = $1,000 + $187.50 = $1,187.50."
  },
  {
    id: "assessment-3",
    question: "A tipped employee works 30 hours at $3.00/hour base wage and earns $180 in tips. If minimum wage is $7.25, what's their gross pay?",
    answers: [
      "$217.50 (30 hours × $7.25 minimum wage)",
      "$270 (30 × $3.00 + $180 tips)", 
      "$90 (30 × $3.00 only)",
      "$180 (tips only)"
    ],
    explanation: "Use MAX function logic: Compare (30×$3.00 + $180) = $270 vs (30×$7.25) = $217.50. The employee earns the higher amount: $270."
  },
  {
    id: "assessment-4",
    question: "What's the primary business purpose of FICA taxes (Social Security and Medicare) from an employer's perspective?",
    answers: [
      "Required federal contributions to employee retirement and healthcare systems",
      "Optional benefits that employers can choose to provide",
      "State-level taxes that vary by location", 
      "Profit-sharing payments to the government"
    ],
    explanation: "FICA taxes are mandatory federal withholdings that fund Social Security (6.2%) and Medicare (1.45%) programs. Employers must withhold these from employee paychecks and match the contributions."
  },
  {
    id: "assessment-5",
    question: "Sarah's payroll calculator shows an employee's net pay as negative. What Excel function should prevent this display issue?",
    answers: [
      "IFERROR to show 0 or error message instead of negative values",
      "VLOOKUP to find correct tax rates",
      "SUM to add up all deductions",
      "IF to check employee type"
    ],
    explanation: "IFERROR wraps formulas to handle calculation errors gracefully. A negative net pay indicates a formula error (perhaps dividing by zero or missing data) that should display as 0 or an error message."
  },
  {
    id: "assessment-6",
    question: "Why should Sarah use named ranges (like 'Overtime_Rate') instead of typing 1.5 directly in formulas?",
    answers: [
      "Makes formulas easier to understand and allows central updates to rates",
      "Named ranges calculate faster than numbers",
      "Excel requires named ranges for overtime calculations", 
      "Named ranges automatically format as currency"
    ],
    explanation: "Named ranges improve formula readability and maintainability. If overtime rates change, Sarah updates one named range instead of finding and changing every formula that uses 1.5."
  },
  {
    id: "assessment-7",
    question: "If Sarah's total weekly payroll is $3,200 gross and $2,400 net, what percentage goes to taxes and deductions?",
    answers: [
      "25% ($800 in taxes and deductions)",
      "75% (the net pay percentage)",
      "33% (roughly one-third)", 
      "Cannot determine without individual tax rates"
    ],
    explanation: "Deduction percentage = ($3,200 - $2,400) ÷ $3,200 = $800 ÷ $3,200 = 0.25 = 25%. This helps Sarah understand her total employment costs beyond gross wages."
  },
  {
    id: "assessment-8",
    question: "What's the main cash flow advantage of Sarah's Excel payroll calculator over manual calculations?",
    answers: [
      "Predicts exact cash needs in advance, preventing Friday payroll crises",
      "Eliminates the need to pay any taxes",
      "Automatically deposits money into employee accounts",
      "Reduces employee salaries to save money"
    ],
    explanation: "The calculator helps Sarah predict exactly how much cash she needs and when, preventing the timing mismatches that caused Maria's café crisis. Accurate forecasting enables better cash flow management."
  },
  {
    id: "assessment-9",
    question: "Sarah wants to give Alex a $5,000 annual raise. How should she use Excel to determine the impact on her weekly cash flow?",
    answers: [
      "Update Alex's annual salary and check how weekly net pay increases",
      "Add $5,000 to this week's gross pay calculation", 
      "Multiply $5,000 by the tax rate to get the cost",
      "Divide $5,000 by 12 months for monthly impact"
    ],
    explanation: "Increase Alex's annual salary from $65,000 to $70,000 in the calculator. The formulas will automatically recalculate weekly gross pay ($70,000 ÷ 26 = $2,692.31) and show the new weekly cash requirement."
  },
  {
    id: "assessment-10",
    question: "Which scenario best demonstrates the business value of Sarah's payroll calculator system?",
    answers: [
      "Confidently bidding on a 6-month project knowing exact weekly payroll costs for the new hire",
      "Never having to pay taxes on employee wages again",
      "Paying employees less than competitors while maintaining quality",
      "Avoiding the need to hire employees by doing all work herself"
    ],
    explanation: "The calculator enables strategic business decisions. Sarah can bid on the $75,000 project knowing her exact weekly costs (payroll + taxes), ensuring profitable pricing and adequate cash reserves."
  }
]

export default function Phase5Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit05Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />

      <div className="space-y-8">
        {/* Assessment Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Demonstrate Your Payroll Mastery
          </h2>
          
          <p className="text-lg leading-relaxed">
            Time to show what you've learned about building professional payroll systems. This assessment 
            covers both the technical Excel skills and business understanding you need to help entrepreneurs 
            like Sarah make confident hiring decisions.
          </p>
        </div>

        {/* Assessment Context */}
        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-purple-100">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-purple-900 text-lg mb-2">
                  Assessment Focus Areas
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-purple-800">
                  <div>
                    <h4 className="font-medium mb-2">Technical Skills:</h4>
                    <ul className="space-y-1">
                      <li>• Complex IF statement construction</li>
                      <li>• Gross-to-net pay calculations</li>
                      <li>• Error handling and data validation</li>
                      <li>• Named ranges and formula optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Business Application:</h4>
                    <ul className="space-y-1">
                      <li>• Cash flow planning and management</li>
                      <li>• Employee cost analysis</li>
                      <li>• Strategic hiring decisions</li>
                      <li>• Payroll compliance understanding</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Success Criteria */}
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-green-100">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-green-900 text-lg mb-2">
                  Performance Standards
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-green-800">
                  <div>
                    <h4 className="font-medium text-green-900 mb-2">Proficient (70-79%)</h4>
                    <p>Demonstrates solid understanding of payroll calculations and basic Excel functions for business use.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-900 mb-2">Advanced (80-89%)</h4>
                    <p>Shows mastery of complex formulas and strong business application of payroll systems.</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-900 mb-2">Expert (90-100%)</h4>
                    <p>Demonstrates sophisticated understanding of both technical and strategic aspects of payroll management.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comprehensive Assessment */}
        <ComprehensionCheck
          title="Payroll Calculator Assessment"
          description="Test your mastery of payroll calculations, Excel formulas, and business applications. This assessment covers the technical skills and strategic thinking needed for professional payroll management."
          questions={assessmentQuestions}
          showExplanations={true}
          allowRetry={true}
        />

        {/* Next Steps Preview */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-3">Looking Ahead</h3>
          <p className="text-blue-800 mb-3">
            You've built the foundation for Sarah's payroll system, but there's more to consider. In our next lesson, 
            we'll explore how to scale this calculator for multiple employees, add advanced features like different 
            pay frequencies, and integrate with other business systems.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium text-blue-900 mb-2">Coming Up:</h4>
              <ul className="text-blue-800 space-y-1">
                <li>• Multi-employee payroll registers</li>
                <li>• XLOOKUP for employee databases</li>
                <li>• Bilingual pay stub templates</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-blue-900 mb-2">Real-World Connection:</h4>
              <ul className="text-blue-800 space-y-1">
                <li>• Bank reconciliation systems</li>
                <li>• Cash flow forecasting</li>
                <li>• Compliance and record keeping</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <PhaseFooter
        lesson={lesson03Data}
        unit={unit05Data}
        phase={currentPhase} 
        phases={lesson03Phases}
      />
    </div>
  )
}