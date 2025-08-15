import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import SpreadsheetWrapper from "@/components/spreadsheet/SpreadsheetWrapper"
import { Target, BarChart3, TrendingUp, AlertCircle } from "lucide-react"
import { lesson03Data, unit04Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[3]

// Extended café dataset for independent analysis
const extendedCafeData = [
  [
    { value: "Day", readOnly: true },
    { value: "Time", readOnly: true },
    { value: "Item", readOnly: true },
    { value: "Amount", readOnly: true },
    { value: "Category", readOnly: true }
  ],
  [
    { value: "Saturday", readOnly: true },
    { value: "8:15 AM", readOnly: true },
    { value: "Coffee", readOnly: false },
    { value: 4.25, readOnly: false },
    { value: "Beverage", readOnly: false }
  ],
  [
    { value: "Saturday", readOnly: true },
    { value: "8:22 AM", readOnly: true },
    { value: "Muffin", readOnly: false },
    { value: 2.75, readOnly: false },
    { value: "Pastry", readOnly: false }
  ],
  [
    { value: "Saturday", readOnly: true },
    { value: "8:45 AM", readOnly: true },
    { value: "Breakfast Sandwich", readOnly: false },
    { value: 6.95, readOnly: false },
    { value: "Food", readOnly: false }
  ],
  [
    { value: "Saturday", readOnly: true },
    { value: "9:10 AM", readOnly: true },
    { value: "Catering Order", readOnly: false },
    { value: 127.50, readOnly: false },
    { value: "Special", readOnly: false }
  ],
  [
    { value: "Saturday", readOnly: true },
    { value: "9:33 AM", readOnly: true },
    { value: "Latte", readOnly: false },
    { value: 5.25, readOnly: false },
    { value: "Beverage", readOnly: false }
  ],
  [
    { value: "Saturday", readOnly: true },
    { value: "10:15 AM", readOnly: true },
    { value: "Error Entry", readOnly: false },
    { value: 0.05, readOnly: false },
    { value: "Unknown", readOnly: false }
  ],
  [
    { value: "Saturday", readOnly: true },
    { value: "10:45 AM", readOnly: true },
    { value: "Lunch Combo", readOnly: false },
    { value: 12.95, readOnly: false },
    { value: "Food", readOnly: false }
  ],
  [
    { value: "Saturday", readOnly: true },
    { value: "11:20 AM", readOnly: true },
    { value: "Tea", readOnly: false },
    { value: 3.75, readOnly: false },
    { value: "Beverage", readOnly: false }
  ],
  [
    { value: "Saturday", readOnly: true },
    { value: "11:55 AM", readOnly: true },
    { value: "Salad", readOnly: false },
    { value: 8.50, readOnly: false },
    { value: "Food", readOnly: false }
  ],
  [
    { value: "Saturday", readOnly: true },
    { value: "12:30 PM", readOnly: true },
    { value: "Coffee", readOnly: false },
    { value: 4.25, readOnly: false },
    { value: "Beverage", readOnly: false }
  ]
]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit04Data}  
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Independent Practice Introduction */}
        <div className="prose prose-lg max-w-none">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 text-2xl flex items-center gap-2">
                <Target className="h-6 w-6" />
                Independent Analysis Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="text-purple-800">
              <p className="text-lg leading-relaxed">
                Sarah has been impressed with your statistical detective work! Now she's ready to hand over 
                the analysis to you. Using Excel's Analysis ToolPak and your newfound skills, you'll conduct 
                a comprehensive analysis of the café's weekend transaction patterns.
              </p>
              
              <p className="text-lg leading-relaxed">
                Your mission: Create a professional statistical report that identifies outliers, analyzes 
                spending patterns by category, and provides actionable recommendations for the café management. 
                This is exactly the type of analysis that data consultants deliver to clients.
              </p>

              <div className="bg-white p-4 rounded-lg border border-purple-200 mt-4">
                <h3 className="font-semibold text-purple-900 mb-2">🎯 Success Criteria</h3>
                <ul className="list-disc list-inside text-purple-800 space-y-1">
                  <li>Use Analysis ToolPak to generate descriptive statistics</li>
                  <li>Identify and investigate all statistical outliers</li>
                  <li>Calculate category-specific spending patterns</li>
                  <li>Create professional recommendations based on findings</li>
                  <li>Document your methodology for client presentation</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Excel Assignment */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-4 text-xl flex items-center gap-2">
            <BarChart3 className="h-5 w-5" />
            Excel Assignment: Comprehensive Statistical Analysis
          </h3>
          
          <div className="space-y-6">
            <div className="bg-white p-4 rounded border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">📊 Step 1: Data Preparation &amp; Import</h4>
              <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                <li>Open Excel and create a new workbook named "Cafe_Statistical_Analysis"</li>
                <li>Create three worksheets: "Raw_Data", "Analysis", "Summary_Report"</li>
                <li>In the Raw_Data sheet, recreate the transaction dataset shown below</li>
                <li>Apply professional formatting: headers in bold, currency format for amounts</li>
                <li>Use data validation to ensure category consistency</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">🧮 Step 2: Analysis ToolPak Statistical Report</h4>
              <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                <li>Navigate to Data → Data Analysis → Descriptive Statistics</li>
                <li>Select the Amount column (D2:D11) as your input range</li>
                <li>Check "Summary statistics" and "Confidence Level for Mean"</li>
                <li>Output the results to the Analysis worksheet starting at cell A1</li>
                <li>Add clear labels and professional formatting to your statistical summary</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">🎯 Step 3: Z-Score Calculation &amp; Outlier Detection</h4>
              <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                <li>In column F of Raw_Data, calculate z-scores using: =(D2-$D$12)/$D$13</li>
                <li>Reference the mean and standard deviation from your Analysis ToolPak results</li>
                <li>In column G, use =IF(ABS(F2)&gt;2,"OUTLIER","NORMAL") to flag outliers</li>
                <li>Use conditional formatting to highlight outliers in red</li>
                <li>Create a summary table showing all identified outliers with business context</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">📈 Step 4: Category Analysis Using AVERAGEIF</h4>
              <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                <li>Create a category summary table in the Analysis worksheet</li>
                <li>Use =AVERAGEIF(E:E,"Beverage",D:D) to calculate average spending by category</li>
                <li>Use =COUNTIF(E:E,"Beverage") to count transactions per category</li>
                <li>Calculate total revenue per category using =SUMIF(E:E,"Beverage",D:D)</li>
                <li>Add a column calculating each category's percentage of total sales</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">📊 Step 5: Professional Visualization</h4>
              <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                <li>Create a column chart showing average spending by category</li>
                <li>Add a histogram of transaction amounts using Analysis ToolPak</li>
                <li>Create a scatter plot showing transaction amounts over time</li>
                <li>Apply professional chart formatting with clear titles and axis labels</li>
                <li>Add trendlines where appropriate to show patterns</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">📋 Step 6: Executive Summary Report</h4>
              <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                <li>In the Summary_Report worksheet, create a professional one-page summary</li>
                <li>Include key statistics: mean, median, standard deviation, total revenue</li>
                <li>Document your outlier investigation findings and recommendations</li>
                <li>Provide specific recommendations for each identified outlier</li>
                <li>Format as a professional consultant report with clear headers and white space</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">✅ Step 7: Quality Assurance &amp; Validation</h4>
              <ul className="list-disc list-inside text-blue-800 text-sm space-y-1">
                <li>Verify all formulas calculate correctly and update automatically</li>
                <li>Check that your z-score calculations match expected outliers</li>
                <li>Ensure all charts display properly and tell a clear story</li>
                <li>Test data validation rules and error handling</li>
                <li>Save your workbook and create a backup copy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sample Dataset for Practice */}
        <Card className="border-gray-200">
          <CardHeader>
            <CardTitle className="text-gray-900 text-lg">Café Transaction Dataset for Analysis</CardTitle>
            <p className="text-gray-700 text-sm mt-2">
              Use this data in your Excel analysis. Copy it exactly to maintain data integrity.
            </p>
          </CardHeader>
          <CardContent>
            <SpreadsheetWrapper
              initialData={extendedCafeData}
              readOnly={true}
              className="border border-gray-300 rounded"
            />
          </CardContent>
        </Card>

        {/* Professional Standards Guide */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-900 text-xl flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Professional Analysis Standards
            </CardTitle>
          </CardHeader>
          <CardContent className="text-amber-800 space-y-4">
            <p className="text-lg leading-relaxed">
              Remember, you're creating a deliverable that Sarah will present to the café manager. 
              Follow these professional standards that real consulting firms use:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border border-amber-200">
                <h4 className="font-semibold text-amber-900 mb-2">📊 Statistical Rigor</h4>
                <ul className="text-sm text-amber-800 space-y-1">
                  <li>• Use established statistical measures (mean, median, std dev)</li>
                  <li>• Apply consistent outlier detection criteria (z &gt; 2)</li>
                  <li>• Document assumptions and methodology clearly</li>
                  <li>• Validate calculations with multiple approaches</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded border border-amber-200">
                <h4 className="font-semibold text-amber-900 mb-2">💼 Business Relevance</h4>
                <ul className="text-sm text-amber-800 space-y-1">
                  <li>• Connect every statistic to actionable insights</li>
                  <li>• Consider operational implications of findings</li>
                  <li>• Provide specific, implementable recommendations</li>
                  <li>• Quantify potential impact where possible</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded border border-amber-200">
                <h4 className="font-semibold text-amber-900 mb-2">📋 Documentation Excellence</h4>
                <ul className="text-sm text-amber-800 space-y-1">
                  <li>• Label all formulas and calculations clearly</li>
                  <li>• Include data sources and collection methods</li>
                  <li>• Note any limitations or assumptions made</li>
                  <li>• Create reproducible analysis workflows</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded border border-amber-200">
                <h4 className="font-semibold text-amber-900 mb-2">🎨 Professional Presentation</h4>
                <ul className="text-sm text-amber-800 space-y-1">
                  <li>• Use consistent formatting and color schemes</li>
                  <li>• Create charts that tell clear stories</li>
                  <li>• Write executive summaries for non-technical readers</li>
                  <li>• Ensure all work is print-ready and professional</li>
                </ul>
              </div>
            </div>

            <div className="bg-amber-100 p-4 rounded border border-amber-200">
              <h4 className="font-semibold text-amber-900 mb-2 flex items-center gap-2">
                <AlertCircle className="h-4 w-4" />
                Quality Check Questions
              </h4>
              <p className="text-amber-800 text-sm mb-2">
                Before submitting your analysis, ask yourself:
              </p>
              <ul className="text-sm text-amber-800 space-y-1">
                <li>• Would I be confident presenting this analysis to a business owner?</li>
                <li>• Are my recommendations specific enough to implement immediately?</li>
                <li>• Have I thoroughly investigated every outlier with business context?</li>
                <li>• Does my executive summary tell a compelling, data-driven story?</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Success Indicators */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 text-xl">Measuring Your Success</CardTitle>
          </CardHeader>
          <CardContent className="text-green-800">
            <p className="text-lg leading-relaxed mb-4">
              You'll know you've mastered statistical analysis when your Excel workbook demonstrates:
            </p>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold text-green-900 text-sm">Technical Mastery</h4>
                <ul className="text-xs text-green-800 mt-1 space-y-1">
                  <li>✓ Correct statistical calculations</li>
                  <li>✓ Proper z-score interpretation</li>
                  <li>✓ Effective use of Analysis ToolPak</li>
                  <li>✓ Professional Excel formatting</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold text-green-900 text-sm">Business Insight</h4>
                <ul className="text-xs text-green-800 mt-1 space-y-1">
                  <li>✓ Outliers properly investigated</li>
                  <li>✓ Category patterns identified</li>
                  <li>✓ Actionable recommendations</li>
                  <li>✓ Revenue optimization ideas</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded border border-green-200">
                <h4 className="font-semibold text-green-900 text-sm">Professional Delivery</h4>
                <ul className="text-xs text-green-800 mt-1 space-y-1">
                  <li>✓ Clear executive summary</li>
                  <li>✓ Professional visualizations</li>
                  <li>✓ Reproducible methodology</li>
                  <li>✓ Client-ready presentation</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-white rounded border border-green-200">
              <p className="text-green-800 text-sm">
                <strong>Remember:</strong> This analysis will serve as the foundation for Sarah's final 
                recommendations to the café. The quality of your statistical work directly impacts the 
                business decisions that follow. Take pride in creating consulting-grade deliverables!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <PhaseFooter 
        lesson={lesson03Data}
        unit={unit04Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />
    </div>
  )
}