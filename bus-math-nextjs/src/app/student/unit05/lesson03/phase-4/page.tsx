import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Download, CheckCircle, AlertCircle, FileSpreadsheet, Calculator } from "lucide-react"
import { lesson03Data, lesson03Phases, unit05Data } from "../lesson-data"

const currentPhase = lesson03Phases[3] // Independent Practice phase

export default function Phase4Page() {
  return (
    <div className="max-w-4xl mx-auto">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit05Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />

      <div className="space-y-8">
        {/* Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Build Your Professional Payroll Calculator
          </h2>
          
          <p className="text-lg leading-relaxed">
            Time to build the tool that will give Sarah the confidence to hire Alex and grow TechStart Solutions. 
            You'll create a professional-grade payroll calculator in Excel that handles complex scenarios, 
            prevents errors, and provides the reliability a growing business needs.
          </p>
        </div>

        {/* Assignment Overview */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 flex items-center gap-2">
              <Target className="h-5 w-5" />
              Assignment Goal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-800 mb-4">
              Create a comprehensive payroll calculator that demonstrates advanced Excel skills while solving 
              a real business problem. Your calculator must handle multiple employee types, include error 
              checking, and provide professional formatting suitable for business use.
            </p>
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-green-900 mb-2">Success Criteria:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Complex IF statements for employee types</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Data validation for error prevention</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Named ranges for formula clarity</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span>Professional formatting and documentation</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Excel Assignment 1: Basic Calculator Setup */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-4 text-xl flex items-center gap-2">
            <FileSpreadsheet className="h-5 w-5" />
            Excel Assignment 1: Foundation Setup
          </h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">Step 1: Workbook Creation</h4>
              <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                <li>Open Excel and create a new workbook named "TechStart_Payroll_Calculator"</li>
                <li>Create three worksheets: "Calculator", "Employee_Data", "Tax_Tables"</li>
                <li>Save the file to your desktop or student folder</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">Step 2: Calculator Sheet Setup</h4>
              <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                <li>In cell A1, type "TechStart Solutions Payroll Calculator" and format as title (size 16, bold)</li>
                <li>In cell A2, type "Weekly Payroll - [Today's Date]"</li>
                <li>Create column headers in row 4: Employee Name (A4), Employee Type (B4), Hours/Salary (C4), Rate (D4), Gross Pay (E4), Tax Rate (F4), Tax Amount (G4), Net Pay (H4)</li>
                <li>Format the header row with bold text and blue background</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">Step 3: Employee Type Validation</h4>
              <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                <li>In cells B5:B10, create data validation dropdown lists with options: "Hourly", "Salary", "Tipped"</li>
                <li>Go to Data &gt; Data Validation, select "List" and enter: Hourly,Salary,Tipped</li>
                <li>Add input message: "Select employee payment type" and error alert: "Please select a valid employee type"</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">Step 4: Named Ranges Creation</h4>
              <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                <li>Create named range "Overtime_Rate" = 1.5 (for overtime calculations)</li>
                <li>Create named range "Standard_Hours" = 40 (for regular work week)</li>
                <li>Create named range "Min_Wage" = 7.25 (for tipped employee calculations)</li>
                <li>Use Formulas &gt; Name Manager to verify all named ranges are created correctly</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Excel Assignment 2: Complex Formulas */}
        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h3 className="font-semibold text-purple-900 mb-4 text-xl flex items-center gap-2">
            <Calculator className="h-5 w-5" />
            Excel Assignment 2: Advanced Formula Construction
          </h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border border-purple-200">
              <h4 className="font-medium text-purple-900 mb-2">Step 1: Multi-Conditional Gross Pay Formula</h4>
              <p className="text-purple-800 text-sm mb-2">In column E (Gross Pay), create a complex IF statement that handles all three employee types:</p>
              <div className="bg-gray-100 p-3 rounded font-mono text-xs mb-2">
                =IF(B5="Hourly", IF(C5&gt;Standard_Hours, Standard_Hours*D5+(C5-Standard_Hours)*D5*Overtime_Rate, C5*D5), IF(B5="Salary", D5/52, IF(B5="Tipped", MAX(C5*Min_Wage, C5*D5+0), 0)))
              </div>
              <ul className="list-disc list-inside text-purple-800 text-sm space-y-1">
                <li>Test with Alex: Type "Hourly" in B5, 40 in C5, 31.25 in D5</li>
                <li>Test overtime: Change C5 to 45 hours and verify overtime calculation</li>
                <li>Test salary: Change B5 to "Salary", put 65000 in D5 (annual salary)</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border border-purple-200">
              <h4 className="font-medium text-purple-900 mb-2">Step 2: Dynamic Tax Rate Assignment</h4>
              <p className="text-purple-800 text-sm mb-2">In column F (Tax Rate), use VLOOKUP to assign tax rates based on gross pay brackets:</p>
              <div className="bg-gray-100 p-3 rounded font-mono text-xs mb-2">
                =IF(E5=0, 0, IF(E5&lt;200, 0.15, IF(E5&lt;500, 0.22, IF(E5&lt;1000, 0.25, 0.28))))
              </div>
              <ul className="list-disc list-inside text-purple-800 text-sm space-y-1">
                <li>This creates progressive tax brackets: 15% for gross &lt; $200, 22% for $200-499, 25% for $500-999, 28% for $1000+</li>
                <li>Test different gross pay amounts to verify correct tax rate assignment</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border border-purple-200">
              <h4 className="font-medium text-purple-900 mb-2">Step 3: Error-Resistant Calculations</h4>
              <p className="text-purple-800 text-sm mb-2">Wrap all formulas with IFERROR to handle invalid inputs gracefully:</p>
              <div className="bg-gray-100 p-3 rounded font-mono text-xs mb-2">
                Tax Amount (G5): =IFERROR(E5*F5, 0)<br/>
                Net Pay (H5): =IFERROR(E5-G5, 0)
              </div>
              <ul className="list-disc list-inside text-purple-800 text-sm space-y-1">
                <li>Test error handling by leaving required cells blank</li>
                <li>Verify formulas show 0 instead of #DIV/0! or #VALUE! errors</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Excel Assignment 3: Professional Enhancement */}
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
          <h3 className="font-semibold text-orange-900 mb-4 text-xl">
            Excel Assignment 3: Professional Polish &amp; Business Features
          </h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border border-orange-200">
              <h4 className="font-medium text-orange-900 mb-2">Step 1: Conditional Formatting for Visual Alerts</h4>
              <ul className="list-disc list-inside text-orange-800 text-sm space-y-1">
                <li>Select the Net Pay column (H5:H10) and apply conditional formatting</li>
                <li>Create rule: "Greater than $1000" = Green fill (high earners)</li>
                <li>Create rule: "Less than $200" = Red fill (verify calculations)</li>
                <li>Create rule: "Between $200-$999" = Yellow fill (standard range)</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border border-orange-200">
              <h4 className="font-medium text-orange-900 mb-2">Step 2: Summary Dashboard</h4>
              <ul className="list-disc list-inside text-orange-800 text-sm space-y-1">
                <li>In row 12, create summary labels: "Total Employees:", "Total Gross:", "Total Taxes:", "Total Net:", "Average Pay:"</li>
                <li>Use COUNTA, SUM, and AVERAGE functions to calculate summary statistics</li>
                <li>Format all currency values with $ symbol and 2 decimal places</li>
                <li>Add a "Payroll Budget Alert" that turns red if total gross exceeds $3,000</li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded border border-orange-200">
              <h4 className="font-medium text-orange-900 mb-2">Step 3: Data Protection &amp; Documentation</h4>
              <ul className="list-disc list-inside text-orange-800 text-sm space-y-1">
                <li>Add comments to complex formula cells explaining the business logic</li>
                <li>Create an "Instructions" section explaining how to use the calculator</li>
                <li>Protect the worksheet (Review &gt; Protect Sheet) but allow users to edit input cells only</li>
                <li>Add your name and date as the creator in a footer</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Test Scenarios */}
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-900">
              Testing Your Calculator
            </CardTitle>
            <p className="text-indigo-800 text-sm">
              Verify your calculator works correctly with these real-world scenarios:
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-indigo-900 mb-2">Test Case 1: Sarah's Core Team</h4>
                <ul className="text-sm text-indigo-800 space-y-1">
                  <li><strong>Alex Rodriguez:</strong> Hourly, 40 hrs, $31.25/hr</li>
                  <li><strong>Maria Designer:</strong> Hourly, 25 hrs, $28.00/hr</li>
                  <li><strong>Contract Writer:</strong> Hourly, 15 hrs, $35.00/hr</li>
                </ul>
                <p className="text-xs text-indigo-700 mt-2">
                  <strong>Expected Results:</strong> Total weekly gross should be ~$2,475
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border">
                <h4 className="font-semibold text-indigo-900 mb-2">Test Case 2: Overtime Scenario</h4>
                <ul className="text-sm text-indigo-800 space-y-1">
                  <li><strong>Alex Rodriguez:</strong> Hourly, 50 hrs, $31.25/hr</li>
                  <li><strong>Deadline Crunch:</strong> 10 hours overtime at 1.5× rate</li>
                </ul>
                <p className="text-xs text-indigo-700 mt-2">
                  <strong>Expected Results:</strong> Gross should include overtime premium
                </p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border">
              <h4 className="font-semibold text-indigo-900 mb-2">Quality Checklist</h4>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>All formulas calculate correctly</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>Data validation prevents errors</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>Conditional formatting highlights issues</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>Professional appearance and layout</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>Named ranges used appropriately</span>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="h-4 w-4" />
                  <span>Documentation and comments included</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Submission Instructions */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-900 flex items-center gap-2">
              <Download className="h-5 w-5" />
              Assignment Submission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge className="bg-amber-100 text-amber-800">1</Badge>
                <div>
                  <p className="font-medium text-amber-900">Save Your Work</p>
                  <p className="text-sm text-amber-800">Save as "LastName_FirstName_Payroll_Calculator.xlsx"</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-amber-100 text-amber-800">2</Badge>
                <div>
                  <p className="font-medium text-amber-900">Test All Features</p>
                  <p className="text-sm text-amber-800">Verify all formulas, validations, and formatting work correctly</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge className="bg-amber-100 text-amber-800">3</Badge>
                <div>
                  <p className="font-medium text-amber-900">Upload to Learning Management System</p>
                  <p className="text-sm text-amber-800">Submit through your course portal by the specified deadline</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Business Impact */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            Real-World Impact
          </h3>
          <p className="text-blue-800">
            The tool you've built solves Sarah's real business challenge. With accurate payroll calculations 
            and built-in error prevention, she can confidently hire Alex knowing exactly what her weekly 
            cash flow requirements will be. This type of systematic approach to business operations—using 
            Excel to automate complex calculations while preventing errors—is exactly what separates 
            successful growing businesses from those that struggle with basic operational challenges.
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