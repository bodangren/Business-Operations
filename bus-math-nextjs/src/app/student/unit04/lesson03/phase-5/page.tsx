import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson03Data, unit04Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[4]

const assessmentQuestions = [
  {
    id: "assess-q1",
    question: "Sarah calculates that the café's weekend transactions have a mean of $8.50 and a standard deviation of $3.20. A transaction of $18.10 has what z-score?",
    answers: [
      "3.0",
      "2.5",
      "1.8", 
      "4.2"
    ],
    explanation: "z = (18.10 - 8.50) / 3.20 = 9.60 / 3.20 = 3.0. This is a significant outlier requiring investigation since z > 2."
  },
  {
    id: "assess-q2",
    question: "In Excel's Analysis ToolPak, which tool generates mean, median, standard deviation, and other key statistics in one comprehensive report?",
    answers: [
      "Descriptive Statistics",
      "Regression Analysis",
      "Histogram",
      "Sampling"
    ],
    explanation: "Descriptive Statistics provides a comprehensive summary including all central tendency and variability measures that data analysts need for professional reports."
  },
  {
    id: "assess-q3",
    question: "Sarah finds a $0.01 transaction in the café data with a z-score of -2.8. What should she do with this outlier?",
    answers: [
      "Investigate as a likely data entry error and consider removing it",
      "Include it in analysis since all data is valuable",
      "Ignore z-scores for small amounts",
      "Change the transaction amount to match the mean"
    ],
    explanation: "A z-score of -2.8 indicates this is statistically unusual. A $0.01 transaction doesn't make business sense for any café item, suggesting a data entry error that should be investigated and likely removed."
  },
  {
    id: "assess-q4", 
    question: "The café's transaction data shows: Beverages (mean=$4.20), Food (mean=$9.80), Pastries (mean=$3.50). What insight can Sarah provide to management?",
    answers: [
      "Food items generate the highest average revenue per transaction and should be promoted",
      "All categories perform equally and need no changes",
      "Pastries are overpriced and should be eliminated",
      "Only beverage sales matter for profitability"
    ],
    explanation: "Food items generate more than double the revenue of other categories. Sarah should recommend promoting food items, analyzing their profit margins, and potentially expanding food offerings during peak hours."
  },
  {
    id: "assess-q5",
    question: "When Sarah uses =AVERAGEIF(E:E,'Beverage',D:D) in Excel, what is she calculating?",
    answers: [
      "The average transaction amount for all beverage purchases",
      "The total number of beverage transactions", 
      "The highest beverage price in the dataset",
      "The median beverage transaction amount"
    ],
    explanation: "AVERAGEIF calculates the mean of values in column D where the corresponding value in column E equals 'Beverage'. This gives the average spending per beverage transaction."
  },
  {
    id: "assess-q6",
    question: "Sarah discovers that removing outliers changes the mean from $8.50 to $7.20. What does this tell her about the outliers?",
    answers: [
      "The outliers were unusually high values that inflated the original mean", 
      "The outliers were unusually low values that reduced the original mean",
      "The outliers had no impact on central tendency",
      "The analysis is incorrect since means shouldn't change"
    ],
    explanation: "When removing outliers decreases the mean significantly, it indicates the outliers were unusually high values pulling the average upward. This is why professionals also report median, which is less affected by outliers."
  },
  {
    id: "assess-q7",
    question: "A professional data consultant needs to explain outliers to a café manager who isn't trained in statistics. What's the best approach?",
    answers: [
      "Use business context: 'These are transactions that don't fit typical customer patterns and need investigation'",
      "Show the z-score formula and mathematical calculations", 
      "List all statistical measures and let the manager decide",
      "Focus only on the mean and ignore outliers entirely"
    ],
    explanation: "Effective consultants translate statistical concepts into business language. Focusing on business impact and actionable insights helps non-technical stakeholders understand and act on findings."
  },
  {
    id: "assess-q8",
    question: "Sarah finds that 90% of café transactions fall between $2-15, but 5% are above $20. What business strategy should she recommend?",
    answers: [
      "Investigate high-value transactions to understand customer segments and create targeted promotions",
      "Remove all transactions above $20 as statistical errors",
      "Focus only on the 90% majority and ignore outliers",
      "Increase all menu prices to match the high-value transactions"
    ],
    explanation: "High-value transactions might represent catering orders, group purchases, or premium customers. Understanding these segments could lead to new revenue opportunities through targeted marketing or expanded catering services."
  },
  {
    id: "assess-q9", 
    question: "In statistical analysis for business, why is standard deviation more useful than just knowing the mean?",
    answers: [
      "Standard deviation shows customer behavior variability, helping predict demand consistency",
      "Standard deviation is easier to calculate than other measures",
      "Standard deviation always equals the mean in good datasets", 
      "Standard deviation is only used for academic purposes"
    ],
    explanation: "Standard deviation reveals whether customers have consistent spending patterns (low std dev) or highly variable behavior (high std dev). This impacts inventory planning, staffing, and pricing strategies."
  },
  {
    id: "assess-q10",
    question: "Sarah's final recommendation states: 'Based on z-score analysis, we identified 3 data errors and 2 legitimate catering orders.' This demonstrates what professional skill?",
    answers: [
      "Combining statistical analysis with business judgment to make actionable recommendations",
      "Using complex formulas to impress clients with technical knowledge",
      "Applying statistics without considering business context",
      "Focusing on mathematical accuracy over practical insights"
    ],
    explanation: "The best data consultants combine statistical rigor with business understanding. Sarah's ability to distinguish between errors and legitimate business events shows professional-level analytical thinking."
  }
]

export default function Phase5Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PhaseHeader 
        lesson={lesson03Data}
        unit={unit04Data}  
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
        {/* Assessment Introduction */}
        <div className="prose prose-lg max-w-none">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-900 text-2xl">Demonstrate Your Data Analysis Mastery</CardTitle>
            </CardHeader>
            <CardContent className="text-orange-800">
              <p className="text-lg leading-relaxed">
                It's time to show what you've learned! Sarah has been impressed with your statistical detective 
                work throughout this lesson. Now she wants to see if you can apply these skills independently 
                and think like a professional data consultant.
              </p>
              
              <p className="text-lg leading-relaxed">
                This comprehensive assessment covers all the key concepts you've mastered: descriptive statistics, 
                z-score calculations, outlier detection, Excel Analysis ToolPak usage, and most importantly, 
                combining statistical analysis with business judgment to create actionable recommendations.
              </p>

              <div className="bg-white p-4 rounded-lg border border-orange-200 mt-4">
                <h3 className="font-semibold text-orange-900 mb-2">🎯 What You'll Demonstrate</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  <ul className="list-disc list-inside text-orange-800 space-y-1 text-sm">
                    <li>Statistical calculation accuracy</li>
                    <li>Excel Analysis ToolPak proficiency</li>
                    <li>Professional outlier investigation skills</li>
                    <li>Z-score interpretation and application</li>
                  </ul>
                  <ul className="list-disc list-inside text-orange-800 space-y-1 text-sm">
                    <li>Business context decision-making</li>
                    <li>Category analysis using AVERAGEIF</li>
                    <li>Client communication strategies</li>
                    <li>Actionable recommendation development</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comprehensive Assessment */}
        <ComprehensionCheck
          title="Statistical Analysis & Business Intelligence Assessment"
          description="Demonstrate your mastery of statistical concepts and professional data analysis skills"
          questions={assessmentQuestions}
          showExplanations={true}
          allowRetry={true}
        />

        {/* Performance Analysis */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-blue-900 text-xl">Understanding Your Performance</CardTitle>
          </CardHeader>
          <CardContent className="text-blue-800 space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">90-100% Score</h4>
                <p className="text-sm text-blue-800 mb-2">
                  <strong>Exceptional Mastery:</strong> You demonstrate professional-level understanding of 
                  statistical analysis and business applications.
                </p>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>• Ready for advanced data analysis challenges</li>
                  <li>• Can work independently on consulting projects</li>
                  <li>• Strong foundation for predictive modeling</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">80-89% Score</h4>
                <p className="text-sm text-blue-800 mb-2">
                  <strong>Strong Competency:</strong> You understand core concepts well and can apply them 
                  effectively with minimal guidance.
                </p>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>• Solid statistical foundation established</li>
                  <li>• Ready for guided practice on complex datasets</li>
                  <li>• Focus on strengthening business judgment</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-900 mb-2">70-79% Score</h4>
                <p className="text-sm text-blue-800 mb-2">
                  <strong>Developing Understanding:</strong> You grasp fundamental concepts but need more 
                  practice connecting statistics to business decisions.
                </p>
                <ul className="text-xs text-blue-800 space-y-1">
                  <li>• Review z-score calculation and interpretation</li>
                  <li>• Practice Excel Analysis ToolPak functions</li>
                  <li>• Focus on outlier investigation strategies</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-4 rounded border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Key Areas for Continued Growth</h4>
              <p className="text-blue-800 text-sm mb-2">
                Regardless of your score, consider these next steps to deepen your data analysis expertise:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium text-blue-900 text-sm">Technical Skills</h5>
                  <ul className="text-xs text-blue-800 space-y-1 mt-1">
                    <li>• Master additional Analysis ToolPak tools (Regression, Correlation)</li>
                    <li>• Practice with larger, messier datasets</li>
                    <li>• Learn advanced Excel functions (INDEX/MATCH, SUMIFS)</li>
                    <li>• Explore data visualization best practices</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium text-blue-900 text-sm">Business Application</h5>
                  <ul className="text-xs text-blue-800 space-y-1 mt-1">
                    <li>• Study real business case studies in data analysis</li>
                    <li>• Practice translating statistics for non-technical audiences</li>
                    <li>• Develop hypothesis-driven analysis approaches</li>
                    <li>• Build experience with actionable recommendation writing</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Connection to Unit Goals */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-900 text-xl">Your Role in the Café's Success Story</CardTitle>
          </CardHeader>
          <CardContent className="text-green-800">
            <p className="text-lg leading-relaxed">
              Congratulations! You've successfully completed the statistical analysis foundation that Sarah 
              needs for the café consulting project. Your mastery of descriptive statistics, outlier detection, 
              and Excel Analysis ToolPak puts you on the same level as professional data analysts.
            </p>

            <div className="bg-white p-4 rounded-lg border border-green-200 mt-4">
              <h3 className="font-semibold text-green-900 mb-2">What You've Accomplished</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-green-900 text-sm">Statistical Mastery</h4>
                  <ul className="text-xs text-green-800 space-y-1 mt-1">
                    <li>✓ Calculate and interpret descriptive statistics</li>
                    <li>✓ Identify outliers using z-score analysis</li>
                    <li>✓ Distinguish data errors from business insights</li>
                    <li>✓ Apply professional Analysis ToolPak workflows</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-900 text-sm">Business Intelligence</h4>
                  <ul className="text-xs text-green-800 space-y-1 mt-1">
                    <li>✓ Analyze customer spending patterns by category</li>
                    <li>✓ Create actionable business recommendations</li>
                    <li>✓ Communicate findings to non-technical stakeholders</li>
                    <li>✓ Build foundation for waste reduction strategies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-100 p-4 rounded-lg border border-green-200 mt-4">
              <h4 className="font-semibold text-green-900 mb-2">Looking Ahead: The Complete Data Story</h4>
              <p className="text-green-800 text-sm">
                In the remaining lessons of this unit, you'll build on today's statistical foundation to create 
                data visualizations, develop forecasting models, and deliver the complete analysis that helps 
                the café achieve their 3% waste reduction goal. Today's work is the cornerstone of that success!
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Career Connection */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-purple-900 text-xl">Skills That Open Doors</CardTitle>
          </CardHeader>
          <CardContent className="text-purple-800">
            <p className="text-lg leading-relaxed mb-4">
              The statistical analysis skills you've mastered today are in high demand across every industry. 
              From marketing analytics to financial modeling, operations optimization to quality control, 
              professionals who can find insights in data command respect and higher salaries.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded border border-purple-200">
                <h4 className="font-semibold text-purple-900 text-sm">Career Opportunities</h4>
                <ul className="text-xs text-purple-800 space-y-1 mt-2">
                  <li>• Business Analyst</li>
                  <li>• Data Consultant</li>
                  <li>• Operations Research Analyst</li>
                  <li>• Financial Analyst</li>
                  <li>• Quality Assurance Specialist</li>
                  <li>• Marketing Analytics Coordinator</li>
                </ul>
              </div>
              <div className="bg-white p-3 rounded border border-purple-200">
                <h4 className="font-semibold text-purple-900 text-sm">Key Transferable Skills</h4>
                <ul className="text-xs text-purple-800 space-y-1 mt-2">
                  <li>• Problem-solving with quantitative methods</li>
                  <li>• Professional-grade Excel proficiency</li>
                  <li>• Statistical thinking and interpretation</li>
                  <li>• Business communication of technical concepts</li>
                  <li>• Data quality assessment and improvement</li>
                  <li>• Evidence-based recommendation development</li>
                </ul>
              </div>
            </div>

            <p className="text-purple-800 text-sm mt-4">
              <strong>Remember:</strong> Every major business decision today relies on data analysis. 
              By mastering these skills in high school, you're preparing for a future where you'll be 
              the person others turn to for answers hidden in numbers.
            </p>
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