import { SpreadsheetWrapper } from "@/components/spreadsheet/SpreadsheetWrapper";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, FileSpreadsheet, CheckCircle, TrendingUp, Calculator, AlertTriangle } from "lucide-react";
import { lesson03Data, unit03Data, lesson03Phases } from "../lesson-data";

const currentPhase = lesson03Phases[3]; // Independent Practice phase

// Sample trial balance data for the assignment
const sampleTrialBalance = [
  [
    { value: "Account Name", readOnly: true },
    { value: "Account Type", readOnly: true },
    { value: "Amount", readOnly: true }
  ],
  [
    { value: "Website Development Revenue", readOnly: true },
    { value: "Revenue", readOnly: true },
    { value: 8500, readOnly: true }
  ],
  [
    { value: "SEO Consulting Revenue", readOnly: true },
    { value: "Revenue", readOnly: true },
    { value: 4200, readOnly: true }
  ],
  [
    { value: "Social Media Management", readOnly: true },
    { value: "Revenue", readOnly: true },
    { value: 3800, readOnly: true }
  ],
  [
    { value: "Software Subscriptions", readOnly: true },
    { value: "Expense", readOnly: true },
    { value: 450, readOnly: true }
  ],
  [
    { value: "Contractor Payments", readOnly: true },
    { value: "Expense", readOnly: true },
    { value: 2800, readOnly: true }
  ],
  [
    { value: "Marketing & Advertising", readOnly: true },
    { value: "Expense", readOnly: true },
    { value: 750, readOnly: true }
  ],
  [
    { value: "Office Rent", readOnly: true },
    { value: "Expense", readOnly: true },
    { value: 1200, readOnly: true }
  ],
  [
    { value: "Utilities", readOnly: true },
    { value: "Expense", readOnly: true },
    { value: 180, readOnly: true }
  ],
  [
    { value: "Professional Development", readOnly: true },
    { value: "Expense", readOnly: true },
    { value: 320, readOnly: true }
  ]
];

export default function Unit03Lesson03Phase4() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit03Data} 
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">
            Independent Practice: Build Your Professional Income Statement
          </h2>
          
          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-6 rounded-lg border border-purple-200 mb-8">
            <p className="text-lg leading-relaxed text-purple-900">
              Now it's your turn to build a professional Income Statement using INDEX/MATCH formulas. You'll work with 
              expanded data from Sarah's TechStart Solutions to create a dynamic financial report that automatically 
              updates when source data changes. This is your chance to demonstrate mastery of professional Excel techniques.
            </p>
          </div>

          <h3 className="text-2xl font-semibold text-purple-800 mb-4">
            Sample Data: TechStart Solutions Trial Balance
          </h3>
          
          <p className="text-lg leading-relaxed mb-6">
            Below is Sarah's expanded trial balance data for Q2 2024. You'll use this data to build your Income Statement 
            with professional INDEX/MATCH formulas. Notice the mix of revenue streams and expense categories—this reflects 
            her growing business.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border-2 border-purple-300 shadow-lg mb-8">
          <h3 className="text-xl font-semibold text-purple-800 mb-4">
            TechStart Solutions - Q2 2024 Trial Balance
          </h3>
          <SpreadsheetWrapper 
            initialData={sampleTrialBalance}
            className="border rounded-lg"
            readOnly={true}
          />
          
          <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-2">Data Insights:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-purple-700">
                  <strong>Total Revenue:</strong> $16,500 (Website Development: $8,500 + SEO: $4,200 + Social Media: $3,800)
                </p>
              </div>
              <div>
                <p className="text-purple-700">
                  <strong>Total Expenses:</strong> $5,700 (Various operational costs from software to rent)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            📊 Excel Assignment: Professional Income Statement Construction
          </h2>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 shadow-lg">
          <h3 className="font-semibold text-blue-900 mb-4 text-xl flex items-center gap-2">
            <FileSpreadsheet className="h-6 w-6" />
            Excel Assignment: Dynamic Income Statement Builder
          </h3>
          
          <div className="space-y-6">
            <Card className="bg-white border border-blue-200">
              <CardHeader>
                <CardTitle className="font-medium text-blue-900 mb-2 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Step 1: Workbook Setup (2 minutes)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-blue-800 text-sm space-y-2">
                  <li>Open Excel Online (Office 365) and create a new workbook named "TechStart-Income-Statement"</li>
                  <li>Create two worksheets: "Trial Balance" and "Income Statement"</li>
                  <li>In the "Trial Balance" sheet, recreate the data table shown above (with headers in Row 1)</li>
                  <li>Format the data as a Table (Ctrl+T) and name it "TrialBalanceData"</li>
                </ul>
                <div className="mt-3 p-3 bg-blue-100 rounded border border-blue-300">
                  <p className="text-blue-800 text-xs font-medium">
                    💡 Pro Tip: Named tables make INDEX/MATCH formulas more readable and professional
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-green-200">
              <CardHeader>
                <CardTitle className="font-medium text-green-900 mb-2 flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Step 2: Income Statement Structure (3 minutes)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-green-800 text-sm space-y-2">
                  <li>Switch to the "Income Statement" sheet</li>
                  <li>In A1, type "TECHSTART SOLUTIONS" (bold, 14pt)</li>
                  <li>In A2, type "Income Statement" (bold, 12pt)</li>
                  <li>In A3, type "For the Quarter Ended June 30, 2024" (italic, 10pt)</li>
                  <li>Leave A4 blank, then create sections for REVENUES (A5), EXPENSES (A11), and NET INCOME (A18)</li>
                  <li>Format section headers with bold, underline, and appropriate colors</li>
                </ul>
                <div className="mt-3 p-3 bg-green-100 rounded border border-green-300">
                  <p className="text-green-800 text-xs font-medium">
                    💼 Professional formatting creates credibility with investors and bankers
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-purple-200">
              <CardHeader>
                <CardTitle className="font-medium text-purple-900 mb-2 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Step 3: Revenue Section with INDEX/MATCH (4 minutes)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-purple-800 text-sm space-y-2">
                  <li>In A6, type "Website Development Revenue"</li>
                  <li>In B6, create this INDEX/MATCH formula:</li>
                </ul>
                <div className="bg-gray-100 p-2 rounded font-mono text-xs mt-2 mb-2">
                  =INDEX('Trial Balance'[Amount], MATCH("Website Development Revenue", 'Trial Balance'[Account Name], 0))
                </div>
                <ul className="list-disc list-inside text-purple-800 text-sm space-y-2">
                  <li>Copy this approach for SEO Consulting Revenue (A7) and Social Media Management (A8)</li>
                  <li>In A9, type "Total Revenues" (bold)</li>
                  <li>In B9, use =SUM(B6:B8) to calculate total revenue</li>
                  <li>Format all revenue amounts as currency with 2 decimal places</li>
                </ul>
                <div className="mt-3 p-3 bg-purple-100 rounded border border-purple-300">
                  <p className="text-purple-800 text-xs font-medium">
                    🔗 These formulas create live links—when trial balance changes, Income Statement updates automatically
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-red-200">
              <CardHeader>
                <CardTitle className="font-medium text-red-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Step 4: Expense Section with Advanced Formulas (5 minutes)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-red-800 text-sm space-y-2">
                  <li>Create expense line items from A12-A16 for each expense in the trial balance</li>
                  <li>Use INDEX/MATCH formulas in column B to pull each expense amount</li>
                  <li>In A17, type "Total Expenses" (bold)</li>
                  <li>In B17, use =SUM(B12:B16) to calculate total expenses</li>
                  <li>Add conditional formatting: expenses &gt; $1000 should be highlighted in light red</li>
                </ul>
                <div className="bg-gray-100 p-2 rounded font-mono text-xs mt-2 mb-2">
                  Example: =INDEX('Trial Balance'[Amount], MATCH("Software Subscriptions", 'Trial Balance'[Account Name], 0))
                </div>
                <div className="mt-3 p-3 bg-red-100 rounded border border-red-300">
                  <p className="text-red-800 text-xs font-medium">
                    📊 Conditional formatting helps identify significant expense categories for management attention
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-orange-200">
              <CardHeader>
                <CardTitle className="font-medium text-orange-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5" />
                  Step 5: Net Income & Validation (3 minutes)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-orange-800 text-sm space-y-2">
                  <li>In A19, type "NET INCOME" (bold, larger font, border above and below)</li>
                  <li>In B19, create formula: =B9-B17 (Total Revenues minus Total Expenses)</li>
                  <li>Format Net Income with bold font, double underline, and green/red conditional formatting</li>
                  <li>Add a validation check in A21: "Manual Calculation Check:"</li>
                  <li>In B21, calculate: =16500-5700 to verify your formula matches expected result</li>
                  <li>In A22, add: "Formula vs Manual:" and in B22: =IF(B19=B21,"✓ CORRECT","❌ ERROR")</li>
                </ul>
                <div className="mt-3 p-3 bg-orange-100 rounded border border-orange-300">
                  <p className="text-orange-800 text-xs font-medium">
                    ✅ Professional models always include validation checks to ensure accuracy
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border border-indigo-200">
              <CardHeader>
                <CardTitle className="font-medium text-indigo-900 mb-2 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Step 6: Professional Touches (3 minutes)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-indigo-800 text-sm space-y-2">
                  <li>Add a text box with: "Prepared by: [Your Name]" and "Date: [Today's Date]"</li>
                  <li>Insert a simple column chart showing Revenue vs Expenses</li>
                  <li>Create a summary box showing key metrics:</li>
                  <ul className="list-disc list-inside text-indigo-700 text-xs ml-4 space-y-1">
                    <li>Gross Profit Margin: =B19/B9 (formatted as percentage)</li>
                    <li>Largest Expense: =MAX(B12:B16)</li>
                    <li>Revenue Mix: Show percentage breakdown of revenue streams</li>
                  </ul>
                  <li>Apply consistent formatting: fonts, colors, alignment, borders</li>
                  <li>Test your model: Change a value in the trial balance and verify the Income Statement updates</li>
                </ul>
                <div className="mt-3 p-3 bg-indigo-100 rounded border border-indigo-300">
                  <p className="text-indigo-800 text-xs font-medium">
                    🎨 Professional presentation builds credibility and demonstrates attention to detail
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-300">
            <h4 className="font-semibold text-yellow-900 mb-3 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Success Criteria Checklist
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h5 className="font-medium text-yellow-800">Technical Requirements:</h5>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>☐ All revenue and expense amounts use INDEX/MATCH formulas</li>
                  <li>☐ Named table references ('Trial Balance'[Column]) instead of cell ranges</li>
                  <li>☐ SUM formulas for totals (not manual addition)</li>
                  <li>☐ Validation check confirms accuracy</li>
                  <li>☐ Model updates when trial balance data changes</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium text-yellow-800">Professional Standards:</h5>
                <ul className="text-yellow-700 text-sm space-y-1">
                  <li>☐ Professional formatting and structure</li>
                  <li>☐ Consistent fonts, colors, and alignment</li>
                  <li>☐ Currency formatting for all monetary values</li>
                  <li>☐ Clear section headers and organization</li>
                  <li>☐ Chart visualization of key data</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="prose prose-lg max-w-none mt-8">
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h3 className="font-semibold text-green-900 mb-2 text-lg">🎯 Independent Practice Success</h3>
            <p className="text-green-800">
              You've successfully completed independent practice when your Income Statement uses professional INDEX/MATCH 
              formulas, updates automatically when source data changes, and demonstrates the technical and presentation 
              standards expected by investors and financial professionals.
            </p>
            <p className="text-green-700 text-sm mt-3">
              <strong>Expected Result:</strong> Net Income of $10,800 ($16,500 revenue - $5,700 expenses)
            </p>
          </div>
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