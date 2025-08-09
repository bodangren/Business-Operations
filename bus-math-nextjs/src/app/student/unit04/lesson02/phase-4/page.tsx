'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, AlertTriangle, TrendingUp } from "lucide-react";
import DataCleaningExercise from "@/components/data-cleaning/DataCleaningExercise";
import { SpreadsheetWrapper } from "@/components/spreadsheet/SpreadsheetWrapper";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson02Data, lesson02Phases, unit04Data } from "../lesson-data";

export default function Phase4Page() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 4)!;

  // More complex messy data scenario - Full weekend data sample
  const complexMessyData = [
    [
      { value: "TransactionID-DateTime", readOnly: true },
      { value: "Item_Category", readOnly: true },
      { value: "Amount", readOnly: true },
      { value: "PaymentMethod", readOnly: true },
      { value: "CustomerType", readOnly: true }
    ],
    [
      { value: "T001-2023-10-14 08:30:15", readOnly: true },
      { value: " Espresso_Beverage ", readOnly: true },
      { value: "3.00", readOnly: true },
      { value: "credit card", readOnly: true },
      { value: " Student", readOnly: true }
    ],
    [
      { value: "T002-2023-10-14 08:45:22", readOnly: true },
      { value: "croissant_PASTRY", readOnly: true },
      { value: "3.25", readOnly: true },
      { value: "CASH", readOnly: true },
      { value: "Faculty ", readOnly: true }
    ],
    [
      { value: "T002-2023-10-14 08:45:22", readOnly: true },
      { value: "croissant_PASTRY", readOnly: true },
      { value: "3.25", readOnly: true },
      { value: "CASH", readOnly: true },
      { value: "Faculty ", readOnly: true }
    ],
    [
      { value: "T003-2023-10-14 09:15:33", readOnly: true },
      { value: "LATTE_beverage", readOnly: true },
      { value: "4.50", readOnly: true },
      { value: " Credit Card", readOnly: true },
      { value: "visitor", readOnly: true }
    ],
    [
      { value: "T004-2023-10-14 10:00:44", readOnly: true },
      { value: " muffin _Pastry ", readOnly: true },
      { value: "2.75", readOnly: true },
      { value: "cash ", readOnly: true },
      { value: "STUDENT ", readOnly: true }
    ],
    [
      { value: "T005-2023-10-14 10:30:55", readOnly: true },
      { value: "americano_BEVERAGE", readOnly: true },
      { value: "3.50", readOnly: true },
      { value: "Credit card", readOnly: true },
      { value: " faculty", readOnly: true }
    ]
  ];

  // Clean version showing professional data structure
  const complexCleanData = [
    [
      { value: "TransactionID", readOnly: true },
      { value: "Date", readOnly: true },
      { value: "Time", readOnly: true },
      { value: "Item", readOnly: true },
      { value: "Category", readOnly: true },
      { value: "Amount", readOnly: true },
      { value: "PaymentMethod", readOnly: true },
      { value: "CustomerType", readOnly: true }
    ],
    [
      { value: "T001", readOnly: true },
      { value: "2023-10-14", readOnly: true },
      { value: "08:30:15", readOnly: true },
      { value: "Espresso", readOnly: true },
      { value: "Beverage", readOnly: true },
      { value: 3.00, readOnly: true },
      { value: "Credit Card", readOnly: true },
      { value: "Student", readOnly: true }
    ],
    [
      { value: "T002", readOnly: true },
      { value: "2023-10-14", readOnly: true },
      { value: "08:45:22", readOnly: true },
      { value: "Croissant", readOnly: true },
      { value: "Pastry", readOnly: true },
      { value: 3.25, readOnly: true },
      { value: "Cash", readOnly: true },
      { value: "Faculty", readOnly: true }
    ],
    [
      { value: "T003", readOnly: true },
      { value: "2023-10-14", readOnly: true },
      { value: "09:15:33", readOnly: true },
      { value: "Latte", readOnly: true },
      { value: "Beverage", readOnly: true },
      { value: 4.50, readOnly: true },
      { value: "Credit Card", readOnly: true },
      { value: "Visitor", readOnly: true }
    ],
    [
      { value: "T004", readOnly: true },
      { value: "2023-10-14", readOnly: true },
      { value: "10:00:44", readOnly: true },
      { value: "Muffin", readOnly: true },
      { value: "Pastry", readOnly: true },
      { value: 2.75, readOnly: true },
      { value: "Cash", readOnly: true },
      { value: "Student", readOnly: true }
    ],
    [
      { value: "T005", readOnly: true },
      { value: "2023-10-14", readOnly: true },
      { value: "10:30:55", readOnly: true },
      { value: "Americano", readOnly: true },
      { value: "Beverage", readOnly: true },
      { value: 3.50, readOnly: true },
      { value: "Credit Card", readOnly: true },
      { value: "Faculty", readOnly: true }
    ]
  ];

  const advancedCleaningSteps = [
    "Separate TransactionID from DateTime using Text-to-Columns",
    "Split Item_Category into separate Item and Category columns",
    "Apply TRIM to remove all extra spaces around text",
    "Standardize capitalization across all text fields",
    "Remove duplicate transactions (T002 appears twice)",
    "Convert Amount column to proper number format",
    "Validate data consistency and create analysis-ready dataset"
  ];

  // Example of what students can do with clean data
  const analysisPreview = [
    [
      { value: "Analysis Summary", readOnly: true },
      { value: "Value", readOnly: true }
    ],
    [
      { value: "Total Revenue", readOnly: true },
      { value: "=SUM(F2:F6)", readOnly: false }
    ],
    [
      { value: "Average Transaction", readOnly: true },
      { value: "=AVERAGE(F2:F6)", readOnly: false }
    ],
    [
      { value: "Most Popular Category", readOnly: true },
      { value: "=MODE(E2:E6)", readOnly: false }
    ],
    [
      { value: "Cash vs Card Ratio", readOnly: true },
      { value: "=COUNTIF(G2:G6,\"Cash\")/COUNTA(G2:G6)", readOnly: false }
    ]
  ];

  const independentPracticeQuestions = [
    {
      id: "complex-1",
      question: "In the complex dataset shown above, what would happen if you tried to calculate total sales by customer type without cleaning the 'CustomerType' column first?",
      answers: [
        "You would get incorrect totals because ' Student' and 'STUDENT ' would be counted separately",
        "Excel would automatically fix the spacing and capitalization",
        "Only the first customer type would be counted",
        "The calculation would fail completely"
      ],
      explanation: "Different variations like ' Student', 'STUDENT ', and 'Student' would be treated as separate categories, splitting the student purchases across multiple groups and giving wrong totals."
    },
    {
      id: "complex-2",
      question: "Why is it crucial to separate the 'TransactionID-DateTime' column before doing time-based analysis?",
      answers: [
        "You need separate Date and Time columns to analyze sales patterns by hour and day",
        "Combined data takes up less storage space",
        "It looks more professional in reports",
        "Excel requires all data to be in separate columns"
      ],
      explanation: "Time-based analysis (like finding rush hours or comparing weekday vs weekend sales) requires separate Date and Time columns so you can group and filter transactions by specific time periods."
    },
    {
      id: "complex-3",
      question: "What business decision could be affected by the duplicate transaction T002 in this dataset?",
      answers: [
        "Inventory orders might be wrong because croissant sales appear doubled",
        "The cash register would break from processing duplicates",
        "Customer satisfaction would decrease",
        "The café would have to refund the duplicate charge"
      ],
      explanation: "If croissant sales appear doubled due to the duplicate entry, the café manager might order twice as many croissants as actually needed, leading to waste and lost money."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson02Data}
          unit={unit04Data}
          phase={currentPhase}
          phases={lesson02Phases}
        />

        <div className="max-w-6xl mx-auto space-y-8">
          {/* Independent Practice Introduction */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Independent Practice: Complex Data Cleaning Challenge
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-purple-800 text-lg leading-relaxed">
                Now you're ready to work like a professional data analyst! The café manager has given you 
                a more complex sample of their weekend data—and it's a real nightmare. This dataset has 
                <strong>multiple problems in every column</strong>: combined data fields, inconsistent 
                spacing, mixed capitalization, duplicate entries, and inconsistent formatting.
              </p>
              
              <p className="text-purple-700">
                This is exactly the kind of challenge Sarah faced when she started analyzing client data 
                for TechStart Solutions. The difference between amateur and professional work is methodically 
                working through each problem, documenting your steps, and creating a clean dataset that 
                can be trusted for business decisions.
              </p>

              <div className="bg-white p-4 rounded-lg border border-purple-200 mt-6">
                <h3 className="font-semibold text-purple-900 mb-2 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Your Mission
                </h3>
                <p className="text-purple-800">
                  Transform this messy dataset into a clean, analysis-ready format that the café manager 
                  can use to make informed decisions about inventory, staffing, and customer service. 
                  Every step must be documented and every problem systematically solved.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Complex Data Cleaning Exercise */}
          <DataCleaningExercise
            title="Advanced Weekend Data Cleaning Challenge"
            description="This complex dataset has multiple issues in every field. Apply all your data cleaning skills to create a professional, analysis-ready dataset."
            messyData={complexMessyData}
            cleanData={complexCleanData}
            cleaningSteps={advancedCleaningSteps}
          />

          {/* What Clean Data Enables */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  What Clean Data Enables
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 mb-4">
                  Once your data is clean, the café manager can instantly calculate meaningful business insights:
                </p>
                <SpreadsheetWrapper
                  initialData={analysisPreview}
                  readOnly={false}
                  className="border border-green-200"
                />
                <p className="text-green-600 text-sm mt-3">
                  <strong>Try it:</strong> These formulas work because the cleaned data has consistent formats 
                  and no extra spaces or duplicates to throw off the calculations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800">Business Impact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-white p-3 rounded-lg border border-blue-200">
                  <Badge className="bg-blue-100 text-blue-800 mb-2">Revenue Analysis</Badge>
                  <p className="text-blue-700 text-sm">
                    Clean data reveals that beverages generate 68% of revenue, helping optimize menu placement.
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-blue-200">
                  <Badge className="bg-blue-100 text-blue-800 mb-2">Customer Insights</Badge>
                  <p className="text-blue-700 text-sm">
                    Students prefer cash, faculty use cards - informing payment system investments.
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg border border-blue-200">
                  <Badge className="bg-blue-100 text-blue-800 mb-2">Time Patterns</Badge>
                  <p className="text-blue-700 text-sm">
                    Peak hours are 8:30-10:30 AM - critical for staffing and inventory decisions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Understanding Complex Scenarios */}
          <ComprehensionCheck
            title="Independent Practice: Complex Data Challenges"
            description="Test your understanding of how data quality issues affect real business decisions in complex scenarios."
            questions={independentPracticeQuestions}
            showExplanations={true}
          />

          {/* Professional Validation */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                🏆 Professional Data Analyst Checkpoint
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-800 text-lg leading-relaxed mb-4">
                You've just completed the same type of data cleaning challenge that professional analysts 
                face every day. Companies pay data analysts $60,000-$100,000+ annually because they can 
                take messy, unreliable data and transform it into actionable business intelligence.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-900 mb-3">Skills You've Mastered:</h4>
                  <ul className="space-y-2 text-amber-800 text-sm">
                    <li>✅ Text-to-Columns for complex data separation</li>
                    <li>✅ TRIM function for space standardization</li>
                    <li>✅ Remove Duplicates for data integrity</li>
                    <li>✅ Data validation and quality checking</li>
                    <li>✅ Professional documentation practices</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-900 mb-3">Ready for Next Level:</h4>
                  <ul className="space-y-2 text-amber-800 text-sm">
                    <li>🎯 Statistical analysis with clean data</li>
                    <li>🎯 Creating professional data visualizations</li>
                    <li>🎯 Building predictive models</li>
                    <li>🎯 Advanced Excel functions and automation</li>
                    <li>🎯 Business intelligence reporting</li>
                  </ul>
                </div>
              </div>

              <p className="text-amber-700 mt-4 font-medium">
                Remember: Sarah's success with TechStart Solutions started with mastering exactly these 
                fundamental skills. Clean data is the foundation of every good business decision!
              </p>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter 
          lesson={lesson02Data}
          unit={unit04Data}
          phase={currentPhase}
          phases={lesson02Phases}
        />
      </div>
    </div>
  );
}