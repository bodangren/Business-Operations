import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calculator, DollarSign, FileSpreadsheet, AlertCircle } from "lucide-react"
import { lesson03Data, lesson03Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson03Phases[1] // Introduction phase

export default function Phase2Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit05Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />

      <div className="space-y-8">
        {/* Core Concept: From Gross to Net */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            From Gross to Net: The Payroll Calculation Journey
          </h2>
          
          <p className="text-lg leading-relaxed">
            When Sarah offers Alex a $65,000 salary, that's his <strong>gross pay</strong>—the total 
            amount before any deductions. But Alex won't see $65,000 in his bank account. The actual 
            amount he receives is called <strong>net pay</strong>, and it's what's left after taxes 
            and other deductions are subtracted.
          </p>

          <p className="text-lg leading-relaxed">
            Understanding this difference is crucial for Sarah. If she budgets only for gross pay, 
            she'll underestimate her total payroll costs. The government requires employers to 
            withhold taxes and contribute to programs like Social Security and Medicare. Getting 
            these calculations wrong can lead to penalties, angry employees, or both.
          </p>
        </div>

        {/* The Three Employee Types */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-900 flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              The Three Types of Employees
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">
                  <Badge className="bg-purple-100 text-purple-800 mr-2">Hourly</Badge>
                </h4>
                <p className="text-sm text-purple-800 mb-2">
                  Paid by the hour, often with overtime (1.5× rate) for hours &gt; 40 per week.
                </p>
                <p className="text-xs text-purple-700 font-mono">
                  Formula: Hours × Rate (+ Overtime if applicable)
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">
                  <Badge className="bg-purple-100 text-purple-800 mr-2">Salaried</Badge>
                </h4>
                <p className="text-sm text-purple-800 mb-2">
                  Fixed yearly amount divided by number of pay periods.
                </p>
                <p className="text-xs text-purple-700 font-mono">
                  Formula: Annual Salary ÷ Pay Periods
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">
                  <Badge className="bg-purple-100 text-purple-800 mr-2">Tipped</Badge>
                </h4>
                <p className="text-sm text-purple-800 mb-2">
                  Lower base wage plus tips, must meet minimum wage requirements.
                </p>
                <p className="text-xs text-purple-700 font-mono">
                  Formula: MAX(Base + Tips, Min Wage × Hours)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Excel Formulas Section */}
        <div className="prose prose-lg max-w-none">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Building the Logic in Excel
          </h3>
          
          <p className="text-lg leading-relaxed">
            Sarah needs Excel formulas that can handle all three employee types automatically. 
            This is where <strong>IF statements</strong> become powerful tools for business logic.
          </p>
        </div>

        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center gap-2">
              <FileSpreadsheet className="h-5 w-5" />
              Excel Formula Patterns for Payroll
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Hourly Formula */}
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-green-900 mb-2">Hourly Employee with Overtime</h4>
              <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                =IF(Hours&gt;40, 40*Rate + (Hours-40)*Rate*1.5, Hours*Rate)
              </div>
              <p className="text-sm text-green-800 mt-2">
                <strong>Logic:</strong> If hours exceed 40, calculate 40 regular hours plus overtime hours at 1.5× rate. 
                Otherwise, calculate regular hours only.
              </p>
            </div>

            {/* Salaried Formula */}
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-green-900 mb-2">Salaried Employee</h4>
              <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                =Annual_Salary/Pay_Periods_Per_Year
              </div>
              <p className="text-sm text-green-800 mt-2">
                <strong>Logic:</strong> Divide annual salary by number of pay periods (26 for bi-weekly, 12 for monthly).
              </p>
            </div>

            {/* Tipped Formula */}
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-green-900 mb-2">Tipped Employee</h4>
              <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                =MAX(Hours*Min_Wage, Hours*Tipped_Rate + Tips_Reported)
              </div>
              <p className="text-sm text-green-800 mt-2">
                <strong>Logic:</strong> Calculate both minimum wage earnings and base wage plus tips, 
                then use MAX to ensure legal compliance.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Deductions Section */}
        <div className="prose prose-lg max-w-none">
          <h3 className="text-xl font-bold text-blue-900 mb-4">
            Calculating Deductions
          </h3>
          
          <p className="text-lg leading-relaxed">
            Once Sarah calculates gross pay, she must determine how much to withhold for taxes and other deductions. 
            The two main categories are <strong>taxes</strong> (required by law) and <strong>voluntary deductions</strong> 
            (chosen by the employee).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Required Taxes */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-red-900 text-lg">Required Taxes (FICA)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-white p-3 rounded border">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-red-800">Social Security</span>
                  <Badge className="bg-red-100 text-red-800">6.2%</Badge>
                </div>
                <div className="bg-gray-100 p-2 rounded font-mono text-xs mt-2">
                  =Gross_Pay * 0.062
                </div>
              </div>
              
              <div className="bg-white p-3 rounded border">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-red-800">Medicare</span>
                  <Badge className="bg-red-100 text-red-800">1.45%</Badge>
                </div>
                <div className="bg-gray-100 p-2 rounded font-mono text-xs mt-2">
                  =Gross_Pay * 0.0145
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Income Tax */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-900 text-lg">Income Tax Withholding</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-3 rounded border">
                <p className="text-sm text-orange-800 mb-2">
                  Federal and state income tax amounts depend on:
                </p>
                <ul className="list-disc list-inside text-xs text-orange-700 space-y-1">
                  <li>Employee's W-4 form selections</li>
                  <li>Gross pay amount</li>
                  <li>Filing status and dependents</li>
                  <li>Official IRS withholding tables</li>
                </ul>
                <div className="bg-gray-100 p-2 rounded font-mono text-xs mt-2">
                  =VLOOKUP(Gross_Pay, Tax_Table, 2, TRUE)
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final Formula */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center gap-2">
              <Calculator className="h-5 w-5" />
              The Master Formula
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white p-4 rounded border text-center">
              <div className="text-2xl font-bold text-blue-900 mb-2">
                Net Pay = Gross Pay - Total Deductions
              </div>
              <div className="bg-gray-100 p-3 rounded font-mono text-sm">
                =Gross_Pay - (Social_Security + Medicare + Federal_Tax + State_Tax + Other_Deductions)
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Professional Best Practices */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-900 flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Excel Best Practices for Payroll
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-amber-800">
              <li><strong>Named Ranges:</strong> Use "Overtime_Rate" instead of 1.5 for clarity</li>
              <li><strong>Data Validation:</strong> Prevent impossible entries (negative hours, etc.)</li>
              <li><strong>Error Handling:</strong> Use IFERROR to handle division by zero</li>
              <li><strong>Formatting:</strong> Format currency to two decimal places consistently</li>
              <li><strong>Documentation:</strong> Add comments explaining complex formulas</li>
            </ul>
          </CardContent>
        </Card>

        {/* Why This Matters */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-3">Why This Matters</h3>
          <p className="text-blue-800">
            Building a reliable payroll calculator isn't just about getting the math right—it's about 
            creating a system Sarah can trust as she grows her business. Every formula you build, every 
            validation rule you add, and every error check you implement helps prevent the kind of 
            payroll mistakes that can damage employee relationships and create legal problems. This 
            technical precision is what separates successful businesses from those that struggle with 
            basic operational challenges.
          </p>
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