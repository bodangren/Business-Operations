'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, MessageCircle, ArrowRight } from "lucide-react";
import DataCleaningExercise from "@/components/data-cleaning/DataCleaningExercise";
import { lesson02Data, lesson02Phases, unit04Data } from "../lesson-data";

export default function Phase3Page() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 3)!;

  // Sample messy café POS data with common problems
  const messyPOSData = [
    [
      { value: "DateTime", readOnly: true },
      { value: "Item", readOnly: true },
      { value: "Price", readOnly: true },
      { value: "Category", readOnly: true }
    ],
    [
      { value: "2023-10-15 09:30:22", readOnly: true },
      { value: " Latte ", readOnly: true },
      { value: 4.50, readOnly: true },
      { value: "Beverage", readOnly: true }
    ],
    [
      { value: "2023-10-15 09:31:15", readOnly: true },
      { value: "CROISSANT", readOnly: true },
      { value: 3.25, readOnly: true },
      { value: " Pastry ", readOnly: true }
    ],
    [
      { value: "2023-10-15 09:31:15", readOnly: true },
      { value: "CROISSANT", readOnly: true },
      { value: 3.25, readOnly: true },
      { value: " Pastry ", readOnly: true }
    ],
    [
      { value: "2023-10-15 09:35:44", readOnly: true },
      { value: "latte", readOnly: true },
      { value: 4.50, readOnly: true },
      { value: "beverage ", readOnly: true }
    ],
    [
      { value: "2023-10-15 10:15:33", readOnly: true },
      { value: " Espresso", readOnly: true },
      { value: 3.00, readOnly: true },
      { value: "Beverage", readOnly: true }
    ]
  ];

  // Clean version showing proper data organization
  const cleanPOSData = [
    [
      { value: "Date", readOnly: true },
      { value: "Time", readOnly: true },
      { value: "Item", readOnly: true },
      { value: "Price", readOnly: true },
      { value: "Category", readOnly: true }
    ],
    [
      { value: "2023-10-15", readOnly: true },
      { value: "09:30:22", readOnly: true },
      { value: "Latte", readOnly: true },
      { value: 4.50, readOnly: true },
      { value: "Beverage", readOnly: true }
    ],
    [
      { value: "2023-10-15", readOnly: true },
      { value: "09:31:15", readOnly: true },
      { value: "Croissant", readOnly: true },
      { value: 3.25, readOnly: true },
      { value: "Pastry", readOnly: true }
    ],
    [
      { value: "2023-10-15", readOnly: true },
      { value: "09:35:44", readOnly: true },
      { value: "Latte", readOnly: true },
      { value: 4.50, readOnly: true },
      { value: "Beverage", readOnly: true }
    ],
    [
      { value: "2023-10-15", readOnly: true },
      { value: "10:15:33", readOnly: true },
      { value: "Espresso", readOnly: true },
      { value: 3.00, readOnly: true },
      { value: "Beverage", readOnly: true }
    ]
  ];

  const cleaningSteps = [
    "Use Text-to-Columns to separate Date and Time",
    "Apply TRIM function to remove extra spaces",
    "Standardize text case (proper capitalization)",
    "Use Remove Duplicates to eliminate identical entries",
    "Verify data consistency and completeness"
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
          {/* Guided Practice Introduction */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-2xl text-green-800 flex items-center gap-2">
                👥 Guided Practice: Cleaning Real Café Data
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-green-800 text-lg leading-relaxed">
                You've learned the theory—now it's time to apply it! The café manager has given you a sample 
                of their actual weekend POS data, and as expected, it's a complete mess. You'll work through 
                each cleaning step methodically, just like Sarah learned to do when building reliable systems 
                for TechStart Solutions.
              </p>
              
              <p className="text-green-700">
                Look carefully at the "messy data" below. Can you spot the problems? Date and time are crammed 
                together, there are extra spaces around product names, inconsistent capitalization, and even 
                duplicate entries. These are exactly the kinds of issues that would make analysis impossible.
              </p>
            </CardContent>
          </Card>

          {/* Interactive Data Cleaning Exercise */}
          <DataCleaningExercise
            title="Café POS Data Cleaning Challenge"
            description="Follow each step to transform messy point-of-sale data into clean, analyzable format using professional Excel techniques."
            messyData={messyPOSData}
            cleanData={cleanPOSData}
            cleaningSteps={cleaningSteps}
          />

          {/* Think-Pair-Share Discussion */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="font-medium text-blue-900 mb-2">
                  Discussion Prompt (5 minutes):
                </p>
                <p className="text-blue-800 mb-4">
                  You've just seen how messy data can completely throw off business analysis. 
                  Think about the café's situation and discuss with a partner:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">🤔 Think About:</h4>
                    <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                      <li>Which data problem would cause the biggest business impact?</li>
                      <li>How would extra spaces around "Latte " vs "Latte" affect sales totals?</li>
                      <li>What happens if duplicate entries aren't removed?</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">💬 Discuss:</h4>
                    <ul className="list-disc list-inside space-y-1 text-blue-800 text-sm">
                      <li>Why is the Date/Time separation so important for analysis?</li>
                      <li>How could these problems lead to wrong inventory decisions?</li>
                      <li>What would happen if the café manager made decisions based on dirty data?</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Application */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                🏢 Real-World Application
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-purple-800 text-lg leading-relaxed">
                  The data cleaning steps you just practiced are used every day by data analysts at companies 
                  like Amazon, Netflix, and local businesses across the country. When Sarah expanded TechStart 
                  Solutions, she had to clean client data, project timelines, and financial records using 
                  these exact techniques.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <Badge className="bg-purple-100 text-purple-800 mb-2">E-commerce</Badge>
                    <h4 className="font-semibold text-purple-900 mb-2">Online Retail</h4>
                    <p className="text-purple-700 text-sm">
                      Product names with extra spaces could split inventory counts, leading to stockouts 
                      or overordering that costs thousands of dollars.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <Badge className="bg-purple-100 text-purple-800 mb-2">Healthcare</Badge>
                    <h4 className="font-semibold text-purple-900 mb-2">Patient Records</h4>
                    <p className="text-purple-700 text-sm">
                      Duplicate patient entries could lead to incorrect medical histories, 
                      affecting patient safety and insurance billing.
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-purple-200">
                    <Badge className="bg-purple-100 text-purple-800 mb-2">Finance</Badge>
                    <h4 className="font-semibold text-purple-900 mb-2">Banking</h4>
                    <p className="text-purple-700 text-sm">
                      Inconsistent date/time formats could cause transaction processing errors, 
                      affecting customer accounts and regulatory compliance.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Takeaways */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                💡 Key Takeaways from Guided Practice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-amber-900">What You've Mastered:</h4>
                  <ul className="space-y-2 text-amber-800">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>Text-to-Columns splits combined data into usable formats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>TRIM removes invisible spaces that cause categorization errors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>Remove Duplicates prevents double-counting in analysis</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-amber-900">Next Steps:</h4>
                  <ul className="space-y-2 text-amber-800">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>Apply these skills to larger, more complex datasets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>Learn to validate your cleaned data for accuracy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>Build confidence working with messy real-world data</span>
                    </li>
                  </ul>
                </div>
              </div>
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