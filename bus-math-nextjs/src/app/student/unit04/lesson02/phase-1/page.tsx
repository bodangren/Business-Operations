'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson02Data, lesson02Phases, unit04Data } from "../lesson-data";

export default function Phase1Page() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 1)!;

  const hookQuestions = [
    {
      id: "messy-data-1",
      question: "When Sarah first started TechStart Solutions, she tracked client payments in notebooks. What problem would this create when trying to analyze her business performance?",
      answers: [
        "Information would be inconsistent and hard to search through",
        "Notebooks are more expensive than digital systems",
        "Clients prefer digital payment tracking",
        "Notebooks take up too much office space"
      ],
      explanation: "Handwritten data is often inconsistent, has typos, and can't be easily searched or analyzed. This makes it nearly impossible to spot patterns or make data-driven decisions."
    },
    {
      id: "messy-data-2", 
      question: "The café manager gives you 15,000 transactions from their POS system. What would be the FIRST step before trying to find business insights?",
      answers: [
        "Clean and organize the data to make it reliable",
        "Create charts and graphs immediately",
        "Calculate the average transaction amount",
        "Look for the highest-selling items"
      ],
      explanation: "Real-world data is always messy. Before any analysis can be trusted, the data must be cleaned to remove errors, duplicates, and inconsistencies."
    },
    {
      id: "messy-data-3",
      question: "What would happen if you tried to analyze data that had extra spaces around product names (like 'Coffee ' vs 'Coffee')?",
      answers: [
        "Excel would treat them as different products, giving wrong totals",
        "The analysis would automatically fix the spacing",
        "Only the first version would be counted",
        "The spaces wouldn't affect the analysis"
      ],
      explanation: "Excel sees 'Coffee ' and 'Coffee' as completely different items. This would split your coffee sales between two categories, making your analysis incorrect."
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
          {/* Opening Hook */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-2xl text-red-800 flex items-center gap-2">
                🚨 The Data Detective's First Case
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-red-800 text-lg leading-relaxed">
                Picture this: You walk into the campus café on Monday morning, and the manager looks completely stressed. 
                They hand you a USB drive and say, "This has two years of our weekend sales data—over 15,000 transactions. 
                I need to know why we're throwing away so much food, but every time I try to look at this data, 
                it's a complete mess!"
              </p>
              
              <p className="text-red-700">
                You open the file and immediately see the problem. Product names are inconsistent: "Latte", " Latte ", 
                "LATTE", and "latte" all appear as separate items. Timestamps are jumbled together with dates. 
                Some transactions appear twice because a cashier accidentally double-clicked. There are even entries 
                for "-$2.50" where someone had to process a refund.
              </p>

              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h3 className="font-semibold text-red-900 mb-2">The Challenge</h3>
                <p className="text-red-800">
                  This is exactly what Sarah Chen faced when she realized her notebook system wasn't working. 
                  Just like Sarah learned to build systems that could handle real business complexity, you need to 
                  master the art of <strong>data cleaning</strong>—transforming messy, real-world data into something 
                  you can actually analyze and trust.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Why This Matters */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                💡 Why This Matters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 text-lg leading-relaxed">
                Data cleaning isn't just a boring technical skill—it's the foundation that separates successful 
                data analysts from those who make costly mistakes. When Sarah started making data-driven decisions 
                for TechStart Solutions, the first thing she learned was that <strong>garbage data in equals 
                garbage decisions out</strong>.
              </p>
              
              <p className="text-blue-700 mt-4">
                Every Fortune 500 company, every successful startup, and every data analyst you'll ever work with 
                spends 60-80% of their time cleaning data. Master this skill, and you'll have the foundation to 
                make decisions that can save businesses thousands of dollars and help them serve customers better.
              </p>
            </CardContent>
          </Card>

          {/* Engagement Questions */}
          <ComprehensionCheck
            title="Hook: Understanding the Data Challenge"
            description="Test your understanding of why data cleaning is the crucial first step in any analysis project."
            questions={hookQuestions}
            showExplanations={true}
          />

          {/* Preview of Learning */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                🎯 What You'll Learn Today
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <Badge className="bg-green-100 text-green-800 mb-2">Text-to-Columns</Badge>
                  <p className="text-green-700 text-sm">
                    Split messy data that's crammed together into organized, separate columns you can actually work with.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <Badge className="bg-green-100 text-green-800 mb-2">TRIM Function</Badge>
                  <p className="text-green-700 text-sm">
                    Remove invisible spaces that make Excel think "Coffee" and "Coffee " are different products.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <Badge className="bg-green-100 text-green-800 mb-2">Remove Duplicates</Badge>
                  <p className="text-green-700 text-sm">
                    Find and eliminate duplicate entries that would throw off your totals and analysis.
                  </p>
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