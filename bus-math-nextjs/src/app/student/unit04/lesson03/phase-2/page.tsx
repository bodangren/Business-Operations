import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"
import { lesson03Data, unit04Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[1]

const statisticalVocabulary = [
  {
    id: "stats-1",
    text: "The {blank} is the average of all values in a dataset, calculated by adding all numbers and dividing by the count.",
    answer: "mean",
    hint: "Also called the average",
    category: "Central Tendency"
  },
  {
    id: "stats-2", 
    text: "The {blank} is the middle value when all numbers are arranged from smallest to largest.",
    answer: "median",
    hint: "The value that splits the data in half",
    category: "Central Tendency"
  },
  {
    id: "stats-3",
    text: "The {blank} measures how spread out the data is from the mean.",
    answer: "standard deviation",
    alternativeAnswers: ["standard deviation", "std dev"],
    hint: "Shows variability around the average",
    category: "Variability"
  },
  {
    id: "stats-4",
    text: "A {blank} is an unusual data point that differs significantly from other values in the dataset.",
    answer: "outlier",
    hint: "These unusual points need investigation",
    category: "Data Quality"
  },
  {
    id: "stats-5",
    text: "The {blank} tells us how many standard deviations away from the mean a specific value is.",
    answer: "z-score",
    alternativeAnswers: ["z-score", "z score"],
    hint: "A 'weirdness score' for data points",
    category: "Statistical Analysis"
  },
  {
    id: "stats-6",
    text: "Excel's {blank} provides comprehensive statistical analysis including mean, median, and standard deviation.",
    answer: "Analysis ToolPak",
    alternativeAnswers: ["Analysis ToolPak", "Analysis Toolpak"],
    hint: "Excel add-in for advanced statistics",
    category: "Excel Tools"
  }
]

export default function Phase2Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit04Data}  
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Introduction Content */}
        <div className="prose prose-lg max-w-none">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 text-2xl">Understanding Data: From Chaos to Insights</CardTitle>
            </CardHeader>
            <CardContent className="text-purple-800">
              <p className="text-lg leading-relaxed">
                Sarah stares at the café's spreadsheet containing 15,000+ transactions. At first glance, it looks like 
                complete chaos - just endless rows of numbers, dates, and menu items. But Sarah knows that hidden within 
                this data are the answers to the café's problems. She needs to transform this raw information into 
                actionable business intelligence.
              </p>
              
              <p className="text-lg leading-relaxed">
                The first step in any professional data analysis is understanding what "normal" looks like. Think about 
                it this way: if you want to spot something unusual, you first need to know what's typical. This is where 
                descriptive statistics become Sarah's detective tools.
              </p>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 text-xl">The Three Pillars of Descriptive Statistics</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-800 space-y-4">
              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">1. Mean (Average)</h3>
                <p className="text-blue-800 mb-2">
                  The mean is what most people call the "average." Sarah calculates this by adding all transaction 
                  amounts and dividing by the number of transactions. If the café has $3,600 in sales from 300 
                  transactions, the mean is $12.00 per transaction.
                </p>
                <p className="text-sm text-blue-700 bg-blue-100 p-2 rounded">
                  <strong>Business Application:</strong> The mean helps Sarah understand typical customer spending 
                  and set realistic sales targets.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">2. Median (Middle Value)</h3>
                <p className="text-blue-800 mb-2">
                  The median is the middle value when all transactions are arranged from smallest to largest. 
                  Unlike the mean, the median isn't affected by extremely high or low values. If Sarah has 
                  transaction amounts of $3, $7, $8, $12, $15, $18, $125, the median is $12.
                </p>
                <p className="text-sm text-blue-700 bg-blue-100 p-2 rounded">
                  <strong>Why This Matters:</strong> When data has outliers (like that $125 transaction), the 
                  median often gives a better picture of what a "typical" customer spends.
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">3. Standard Deviation (Spread)</h3>
                <p className="text-blue-800 mb-2">
                  Standard deviation tells Sarah how much transaction amounts vary from the average. A small standard 
                  deviation means most customers spend close to the average. A large standard deviation means there's 
                  a wide range of spending patterns.
                </p>
                <p className="text-sm text-blue-700 bg-blue-100 p-2 rounded">
                  <strong>Business Insight:</strong> High variability might indicate the café serves different 
                  customer segments (quick coffee buyers vs. full meal customers) that need different strategies.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-900 text-xl">The Z-Score: Your Data Detective Tool</CardTitle>
            </CardHeader>
            <CardContent className="text-orange-800 space-y-4">
              <p className="text-lg leading-relaxed">
                Once Sarah knows the mean and standard deviation, she can calculate a "weirdness score" for every 
                single transaction. This is called a z-score, and it's calculated using this formula:
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-orange-200 text-center">
                <p className="text-xl font-mono text-orange-900">
                  z = (x - μ) / σ
                </p>
                <div className="text-sm text-orange-700 mt-2 space-y-1">
                  <p><strong>x</strong> = the individual transaction amount</p>
                  <p><strong>μ</strong> (mu) = the mean of all transactions</p>
                  <p><strong>σ</strong> (sigma) = the standard deviation</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded border border-orange-200">
                  <h4 className="font-semibold text-orange-900">Z-Score Interpretation</h4>
                  <ul className="text-sm text-orange-800 space-y-1 mt-2">
                    <li><strong>z &gt; 2:</strong> Unusually HIGH value</li>
                    <li><strong>z &lt; -2:</strong> Unusually LOW value</li>
                    <li><strong>-2 ≤ z ≤ 2:</strong> Normal range</li>
                  </ul>
                </div>
                <div className="bg-white p-3 rounded border border-orange-200">
                  <h4 className="font-semibold text-orange-900">Real Example</h4>
                  <p className="text-sm text-orange-800 mt-2">
                    If mean = $12, std dev = $4, then a $25 transaction has z = (25-12)/4 = 3.25. 
                    This is definitely an outlier requiring investigation!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 text-xl">Excel's Analysis ToolPak: Your Statistical Powerhouse</CardTitle>
            </CardHeader>
            <CardContent className="text-green-800 space-y-4">
              <p className="text-lg leading-relaxed">
                Sarah doesn't calculate these statistics by hand. She uses Excel's Analysis ToolPak, a powerful 
                add-in that provides professional-grade statistical analysis. Here's how she accesses it:
              </p>

              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">Activating Analysis ToolPak</h4>
                <ol className="list-decimal list-inside text-green-800 space-y-1">
                  <li>Go to File → Options → Add-ins</li>
                  <li>Select "Excel Add-ins" and click "Go"</li>
                  <li>Check "Analysis ToolPak" and click "OK"</li>
                  <li>Find "Data Analysis" on the Data tab ribbon</li>
                </ol>
              </div>

              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">Key Analysis ToolPak Features Sarah Uses</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  <div>
                    <p className="font-medium text-green-900">Descriptive Statistics</p>
                    <p className="text-sm text-green-800">Generates mean, median, standard deviation, and more in one report</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-900">Histogram</p>
                    <p className="text-sm text-green-800">Creates visual distribution charts to spot patterns</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-900">Regression</p>
                    <p className="text-sm text-green-800">Finds relationships between variables (like weather and sales)</p>
                  </div>
                  <div>
                    <p className="font-medium text-green-900">Sampling</p>
                    <p className="text-sm text-green-800">Selects representative data subsets for analysis</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">Why This Matters for Business</h4>
                <p className="text-green-800">
                  Professional data analysts rely on Analysis ToolPak because it provides standardized, accurate 
                  calculations that meet industry standards. When Sarah presents her findings to the café manager, 
                  she can confidently say her analysis follows professional best practices.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fill in the Blank Exercise */}
        <FillInTheBlank
          sentences={statisticalVocabulary}
          title="Master Your Statistical Vocabulary"
          description="Fill in the blanks to complete these key statistical concepts that Sarah uses in her café analysis"
          showWordList={true}
          randomizeWordOrder={true}
          showHints={true}
        />

        {/* Connection to Next Phase */}
        <Card className="border-indigo-200 bg-indigo-50">
          <CardHeader>
            <CardTitle className="text-indigo-900 text-xl">Next: Putting Theory into Practice</CardTitle>
          </CardHeader>
          <CardContent className="text-indigo-800">
            <p className="text-lg leading-relaxed">
              Now that Sarah understands descriptive statistics and z-scores, she's ready to apply these tools to 
              the café's actual data. In the next phase, you'll work alongside Sarah to calculate statistics, 
              identify outliers, and make the critical decisions that separate data errors from valuable business 
              insights.
            </p>
            
            <div className="bg-white p-4 rounded-lg border border-indigo-200 mt-4">
              <h4 className="font-semibold text-indigo-900 mb-2">Coming Up</h4>
              <ul className="text-indigo-800 space-y-1">
                <li>• Use Analysis ToolPak to analyze real café transaction data</li>
                <li>• Calculate z-scores to identify suspicious transactions</li>
                <li>• Make detective decisions about outliers: error or insight?</li>
                <li>• Build the foundation for the café's waste reduction plan</li>
              </ul>
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