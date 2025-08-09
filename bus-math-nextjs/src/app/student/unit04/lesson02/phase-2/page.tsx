'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank";
import { lesson02Data, lesson02Phases, unit04Data } from "../lesson-data";

export default function Phase2Page() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 2)!;

  const dataCleaningVocabulary = [
    {
      id: "vocab-1",
      text: "The {blank} function removes extra spaces at the beginning and end of text entries, ensuring consistency in data categories.",
      answer: "TRIM",
      hint: "This Excel function tidies up text by removing unwanted spaces",
      category: "Excel Functions"
    },
    {
      id: "vocab-2", 
      text: "The {blank} tool splits data that's crammed together in one column into separate, organized columns.",
      answer: "Text-to-Columns",
      hint: "This tool helps separate combined data like 'DateTimeStamp' into 'Date' and 'Time'",
      alternativeAnswers: ["Text to Columns"],
      category: "Data Tools"
    },
    {
      id: "vocab-3",
      text: "The {blank} feature automatically finds and eliminates identical rows in your dataset that could throw off your analysis.",
      answer: "Remove Duplicates",
      hint: "This prevents counting the same transaction twice",
      category: "Data Tools"
    },
    {
      id: "vocab-4",
      text: "When raw data is exported from POS systems, it's almost always {blank} and requires cleaning before analysis.",
      answer: "messy",
      hint: "Real-world data is never perfect and organized",
      alternativeAnswers: ["dirty", "inconsistent", "unorganized"],
      category: "Data Concepts"
    },
    {
      id: "vocab-5",
      text: "Data {blank} is the process of transforming raw, messy data into a reliable format ready for analysis.",
      answer: "cleaning",
      hint: "This is the essential first step of any data analysis project",
      alternativeAnswers: ["preparation", "processing"],
      category: "Data Concepts"
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

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Core Concepts Introduction */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800 flex items-center gap-2">
                🧹 Cleaning Up the Mess
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-blue-800 text-lg leading-relaxed">
                Before you can find any brilliant insights, you have to face a universal truth of data analysis: 
                <strong>real-world data is always messy</strong>. Think back to Sarah's early days with her notebooks—that 
                was a messy system. Digital data can be just as chaotic.
              </p>
              
              <p className="text-blue-700">
                The raw data from the café's POS system might have extra spaces, inconsistent names for menu items, 
                or even accidental duplicate entries from a cashier hitting a button twice. If you try to analyze 
                messy data, you'll get messy results. It's like trying to build a house on a crooked foundation.
              </p>

              <div className="bg-white p-4 rounded-lg border border-blue-200 mt-6">
                <h3 className="font-semibold text-blue-900 mb-3">Why Data Cleaning Matters</h3>
                <p className="text-blue-800">
                  Data cleaning is the essential first step of every professional analysis project. It's the process 
                  of transforming raw, messy data into a clean, organized, and reliable format that's ready for analysis. 
                  This is exactly what separates amateur work from professional-grade analysis.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* The Three Essential Tools */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                🛠️ Your Data Cleaning Arsenal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800 text-lg leading-relaxed mb-6">
                We're going to use three powerful Excel tools to clean the café's messy data. These are the exact 
                techniques data analysts use every day in professional settings.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg border border-green-200">
                  <Badge className="bg-green-100 text-green-800 mb-3">Text-to-Columns</Badge>
                  <h4 className="font-semibold text-green-900 mb-2">Split Combined Data</h4>
                  <p className="text-green-700 text-sm mb-3">
                    Sometimes, data gets clumped together. For example, the date and time of a transaction 
                    might be in a single cell like "2023-10-15 14:30:22".
                  </p>
                  <p className="text-green-600 text-xs">
                    <strong>Solution:</strong> Text-to-Columns lets you easily split that one column into two 
                    separate, usable columns: one for the date and one for the time.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-green-200">
                  <Badge className="bg-green-100 text-green-800 mb-3">TRIM Function</Badge>
                  <h4 className="font-semibold text-green-900 mb-2">Remove Extra Spaces</h4>
                  <p className="text-green-700 text-sm mb-3">
                    This is your data-tidying superhero. Often, exported data has extra, invisible spaces 
                    at the beginning or end of text.
                  </p>
                  <p className="text-green-600 text-xs">
                    <strong>Problem:</strong> "Espresso " and "Espresso" look the same to you, but Excel sees them 
                    as two different things. TRIM fixes this automatically.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-green-200">
                  <Badge className="bg-green-100 text-green-800 mb-3">Remove Duplicates</Badge>
                  <h4 className="font-semibold text-green-900 mb-2">Eliminate Copies</h4>
                  <p className="text-green-700 text-sm mb-3">
                    This powerful tool scans your dataset and eliminates any rows that are exact copies of each other.
                  </p>
                  <p className="text-green-600 text-xs">
                    <strong>Critical:</strong> This prevents you from accidentally counting the same sale twice, 
                    which would throw off all your totals and analysis.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Best Practice */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                ⚡ Professional Best Practice
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <h3 className="font-semibold text-amber-900 mb-2">Always Work on a Copy</h3>
                <p className="text-amber-800 text-lg leading-relaxed">
                  Remember what the pros do: <strong>always work on a copy of the original data</strong>. 
                  This way, you can always go back to the original file if you make a mistake. Follow a checklist, 
                  document your steps, and soon you'll have a sparkling clean dataset—the solid foundation you 
                  need to build your analysis.
                </p>
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-900 mb-2">✅ The Right Way</h4>
                  <ul className="text-amber-700 text-sm space-y-1">
                    <li>• Save a backup copy first</li>
                    <li>• Document each cleaning step</li>
                    <li>• Check your work at each stage</li>
                    <li>• Use consistent naming conventions</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-900 mb-2">❌ What to Avoid</h4>
                  <ul className="text-amber-700 text-sm space-y-1">
                    <li>• Working directly on original files</li>
                    <li>• Skipping documentation steps</li>
                    <li>• Rushing through the cleaning process</li>
                    <li>• Ignoring data validation checks</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vocabulary Practice */}
          <FillInTheBlank
            title="Master the Data Cleaning Vocabulary"
            description="Fill in the blanks to complete these essential data cleaning concepts. This vocabulary is used in every professional data analysis project."
            sentences={dataCleaningVocabulary}
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />

          {/* Why This Matters Connection */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                🎯 Connecting to Sarah's Success
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-800 text-lg leading-relaxed">
                When Sarah moved from her messy notebook system to building TechStart Solutions' smart ledger, 
                the first thing she had to master was data cleaning. Every time she imported client information, 
                expense receipts, or project timelines, she faced the same challenge you're learning to solve now.
              </p>
              
              <p className="text-purple-700 mt-4">
                By mastering these three tools—Text-to-Columns, TRIM, and Remove Duplicates—Sarah was able to 
                build reliable systems that impressed her clients and investors. These aren't just academic exercises; 
                they're the building blocks of data-driven business success.
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