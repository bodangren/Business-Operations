import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import SpreadsheetWrapper from "@/components/spreadsheet/SpreadsheetWrapper"
import { Users } from "lucide-react"
import { lesson03Data, unit04Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[2]

// Sample café transaction data for guided practice
const cafeTransactionData = [
  [
    { value: "Transaction", readOnly: true },
    { value: "Amount", readOnly: true },
    { value: "Mean", readOnly: true },
    { value: "Std Dev", readOnly: true },
    { value: "Z-Score", readOnly: true },
    { value: "Outlier?", readOnly: true }
  ],
  [
    { value: "Coffee #1", readOnly: true },
    { value: 4.25, readOnly: false },
    { value: "=AVERAGE($B$2:$B$11)", readOnly: false },
    { value: "=STDEV.S($B$2:$B$11)", readOnly: false },
    { value: "=(B2-C2)/D2", readOnly: false },
    { value: "=IF(ABS(E2)&gt;2,\"YES\",\"NO\")", readOnly: false }
  ],
  [
    { value: "Coffee #2", readOnly: true },
    { value: 3.75, readOnly: false },
    { value: "=AVERAGE($B$2:$B$11)", readOnly: false },
    { value: "=STDEV.S($B$2:$B$11)", readOnly: false },
    { value: "=(B3-C3)/D3", readOnly: false },
    { value: "=IF(ABS(E3)&gt;2,\"YES\",\"NO\")", readOnly: false }
  ],
  [
    { value: "Pastry #1", readOnly: true },
    { value: 2.50, readOnly: false },
    { value: "=AVERAGE($B$2:$B$11)", readOnly: false },
    { value: "=STDEV.S($B$2:$B$11)", readOnly: false },
    { value: "=(B4-C4)/D4", readOnly: false },
    { value: "=IF(ABS(E4)&gt;2,\"YES\",\"NO\")", readOnly: false }
  ],
  [
    { value: "Lunch #1", readOnly: true },
    { value: 12.95, readOnly: false },
    { value: "=AVERAGE($B$2:$B$11)", readOnly: false },
    { value: "=STDEV.S($B$2:$B$11)", readOnly: false },
    { value: "=(B5-C5)/D5", readOnly: false },
    { value: "=IF(ABS(E5)&gt;2,\"YES\",\"NO\")", readOnly: false }
  ],
  [
    { value: "Coffee #3", readOnly: true },
    { value: 4.50, readOnly: false },
    { value: "=AVERAGE($B$2:$B$11)", readOnly: false },
    { value: "=STDEV.S($B$2:$B$11)", readOnly: false },
    { value: "=(B6-C6)/D6", readOnly: false },
    { value: "=IF(ABS(E6)&gt;2,\"YES\",\"NO\")", readOnly: false }
  ],
  [
    { value: "Catering Order", readOnly: true },
    { value: 127.50, readOnly: false },
    { value: "=AVERAGE($B$2:$B$11)", readOnly: false },
    { value: "=STDEV.S($B$2:$B$11)", readOnly: false },
    { value: "=(B7-C7)/D7", readOnly: false },
    { value: "=IF(ABS(E7)&gt;2,\"YES\",\"NO\")", readOnly: false }
  ],
  [
    { value: "Coffee #4", readOnly: true },
    { value: 5.25, readOnly: false },
    { value: "=AVERAGE($B$2:$B$11)", readOnly: false },
    { value: "=STDEV.S($B$2:$B$11)", readOnly: false },
    { value: "=(B8-C8)/D8", readOnly: false },
    { value: "=IF(ABS(E8)&gt;2,\"YES\",\"NO\")", readOnly: false }
  ],
  [
    { value: "Pastry #2", readOnly: true },
    { value: 3.25, readOnly: false },
    { value: "=AVERAGE($B$2:$B$11)", readOnly: false },
    { value: "=STDEV.S($B$2:$B$11)", readOnly: false },
    { value: "=(B9-C9)/D9", readOnly: false },
    { value: "=IF(ABS(E9)&gt;2,\"YES\",\"NO\")", readOnly: false }
  ],
  [
    { value: "Data Error?", readOnly: true },
    { value: 0.05, readOnly: false },
    { value: "=AVERAGE($B$2:$B$11)", readOnly: false },
    { value: "=STDEV.S($B$2:$B$11)", readOnly: false },
    { value: "=(B10-C10)/D10", readOnly: false },
    { value: "=IF(ABS(E10)&gt;2,\"YES\",\"NO\")", readOnly: false }
  ],
  [
    { value: "Lunch #2", readOnly: true },
    { value: 15.75, readOnly: false },
    { value: "=AVERAGE($B$2:$B$11)", readOnly: false },
    { value: "=STDEV.S($B$2:$B$11)", readOnly: false },
    { value: "=(B11-C11)/D11", readOnly: false },
    { value: "=IF(ABS(E11)&gt;2,\"YES\",\"NO\")", readOnly: false }
  ]
]

export default function Phase3Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit04Data}  
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Guided Practice Introduction */}
        <div className="prose prose-lg max-w-none">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 text-2xl">Sarah's First Data Investigation</CardTitle>
            </CardHeader>
            <CardContent className="text-green-800">
              <p className="text-lg leading-relaxed">
                Sarah opens the café's POS data and selects a sample of 10 transactions from last Saturday morning. 
                She knows that before diving into 15,000+ transactions, she needs to practice her statistical 
                detective skills on a smaller, manageable dataset. This is exactly how professional data analysts 
                work - they start small to test their methods.
              </p>
              
              <p className="text-lg leading-relaxed">
                In the spreadsheet below, you'll work alongside Sarah to calculate the mean, standard deviation, 
                and z-scores for each transaction. Then you'll make the critical decision: which unusual values 
                are data errors versus legitimate business events?
              </p>

              <div className="bg-white p-4 rounded-lg border border-green-200 mt-4">
                <h3 className="font-semibold text-green-900 mb-2">Your Mission</h3>
                <ol className="list-decimal list-inside text-green-800 space-y-1">
                  <li>Calculate the mean and standard deviation for all transaction amounts</li>
                  <li>Compute z-scores to identify which transactions are unusual (z &gt; 2 or z &lt; -2)</li>
                  <li>Use your business judgment to decide which outliers need investigation</li>
                  <li>Prepare recommendations for handling suspicious data points</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Spreadsheet */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 text-xl">Café Transaction Analysis Spreadsheet</CardTitle>
            <p className="text-blue-800 mt-2">
              Work with Sarah to analyze this sample of café transactions. The formulas are set up - 
              watch how they calculate z-scores automatically!
            </p>
          </CardHeader>
          <CardContent>
            <div className="bg-white p-4 rounded border border-blue-200">
              <SpreadsheetWrapper
                initialData={cafeTransactionData}
                className="border border-gray-300 rounded"
              />
            </div>
            
            <div className="mt-4 grid md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">Formula Explanations</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li><strong>=AVERAGE(range):</strong> Calculates the mean</li>
                  <li><strong>=STDEV.S(range):</strong> Sample standard deviation</li>
                  <li><strong>=(Value-Mean)/StdDev:</strong> Z-score calculation</li>
                  <li><strong>=IF(ABS(z)&gt;2,"YES","NO"):</strong> Outlier detection</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">What to Look For</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li><strong>High Z-Scores:</strong> Values much larger than typical</li>
                  <li><strong>Low Z-Scores:</strong> Values much smaller than typical</li>
                  <li><strong>Business Context:</strong> Does the outlier make sense?</li>
                  <li><strong>Data Quality:</strong> Could this be an input error?</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Think-Pair-Share Discussion */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-800 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Turn and Talk: Data Detective Decisions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-medium text-purple-900 mb-2">
              Discussion Prompt (5 minutes):
            </p>
            <p className="text-purple-800 mb-4">
              Look at the transactions that show "YES" in the Outlier column. Sarah needs your help 
              making detective decisions about each one:
            </p>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">Investigate These Questions:</h4>
                <ul className="list-disc list-inside space-y-2 text-purple-800">
                  <li>Which outliers are likely legitimate business transactions?</li>
                  <li>Which outliers might be data entry errors?</li>
                  <li>What additional information would help you decide?</li>
                  <li>How would each decision affect the café's analysis?</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">Consider Business Context:</h4>
                <ul className="list-disc list-inside space-y-2 text-purple-800">
                  <li>Could $127.50 be a large catering order?</li>
                  <li>Does $0.05 make sense for any menu item?</li>
                  <li>What's the café's typical price range?</li>
                  <li>How do outliers affect statistical calculations?</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-4 bg-purple-100 rounded border border-purple-200">
              <h4 className="font-semibold text-purple-900 mb-2">Share Your Findings</h4>
              <p className="text-purple-800">
                After your discussion, be prepared to share your team's recommendations for handling 
                each outlier. Remember: in real consulting work, these decisions directly impact the 
                accuracy of business recommendations and financial planning.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Analysis ToolPak Connection */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-900 text-xl">Professional Practice: Analysis ToolPak Workflow</CardTitle>
          </CardHeader>
          <CardContent className="text-amber-800 space-y-4">
            <p className="text-lg leading-relaxed">
              While you've been calculating statistics manually, Sarah knows that professional analysts use 
              Excel's Analysis ToolPak for efficiency and accuracy. Here's how she would analyze this same 
              data using professional tools:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded border border-amber-200">
                <h4 className="font-semibold text-amber-900 mb-2">Analysis ToolPak Steps</h4>
                <ol className="list-decimal list-inside text-amber-800 space-y-1 text-sm">
                  <li>Data → Data Analysis → Descriptive Statistics</li>
                  <li>Select transaction amount column as input range</li>
                  <li>Check "Summary statistics" box</li>
                  <li>Choose output location for results</li>
                  <li>Click OK to generate comprehensive report</li>
                </ol>
              </div>
              <div className="bg-white p-4 rounded border border-amber-200">
                <h4 className="font-semibold text-amber-900 mb-2">What You Get</h4>
                <ul className="list-disc list-inside text-amber-800 space-y-1 text-sm">
                  <li>Mean, Median, Mode automatically calculated</li>
                  <li>Standard Deviation and Variance</li>
                  <li>Range, Minimum, Maximum values</li>
                  <li>Confidence intervals</li>
                  <li>Professional formatting ready for reports</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-4 rounded border border-amber-200">
              <h4 className="font-semibold text-amber-900 mb-2">Why Professionals Use Analysis ToolPak</h4>
              <p className="text-amber-800">
                Sarah chooses Analysis ToolPak over manual calculations because it eliminates human error, 
                provides standardized industry formats, and generates comprehensive reports that clients 
                expect from professional consultants. When presenting to the café manager, Sarah can 
                confidently state that her analysis follows established statistical standards.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Transition to Independent Practice */}
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-900 text-xl">Ready for Independent Analysis</CardTitle>
          </CardHeader>
          <CardContent className="text-indigo-800">
            <p className="text-lg leading-relaxed">
              Excellent work! You've successfully identified outliers and made professional judgments about 
              data quality alongside Sarah. In the next phase, you'll take the lead on analyzing a larger 
              dataset using Excel's Analysis ToolPak to generate comprehensive statistical reports.
            </p>
            
            <div className="bg-white p-4 rounded-lg border border-indigo-200 mt-4">
              <h4 className="font-semibold text-indigo-900 mb-2">Skills You've Mastered</h4>
              <div className="grid md:grid-cols-2 gap-3">
                <ul className="text-indigo-800 space-y-1 text-sm">
                  <li>✓ Calculate mean and standard deviation</li>
                  <li>✓ Compute z-scores for outlier detection</li>
                  <li>✓ Apply business judgment to data quality</li>
                </ul>
                <ul className="text-indigo-800 space-y-1 text-sm">
                  <li>✓ Use professional statistical formulas</li>
                  <li>✓ Distinguish errors from legitimate outliers</li>
                  <li>✓ Prepare data for deeper analysis</li>
                </ul>
              </div>
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