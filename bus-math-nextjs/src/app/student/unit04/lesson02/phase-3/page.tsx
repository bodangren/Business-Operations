'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, ArrowRight, AlertTriangle } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson02Data, lesson02Phases, unit04Data } from "../lesson-data";

export default function Phase3Page() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 3)!;

  const choiceQuestions = [
    {
      id: "choice-1",
      question: "You're analyzing café data for the past 8 weeks. The weekend sales are: $510, $520, $495, $505, $500, $515, $505, $3,200. The owner asks: 'What's a typical weekend?' What measure of center would you recommend and why?",
      answers: [
        "Median, because the $3,200 outlier would heavily distort the mean",
        "Mean, because it's the standard measure of typical",
        "Mode, because the most common value is most typical",
        "Range, because it shows the full spread"
      ],
      explanation: "The median is resistant to the outlier. The mean would be ($5,050 ÷ 8) = $631.25, which is not representative of any actual weekend except the outlier."
    },
    {
      id: "choice-2",
      question: "A different café reports these daily sandwich sales for a week: $120, $125, $130, $135, $140, $145, $500. The mean is $185, median is $135. Which is more useful for ordering inventory?",
      answers: [
        "Median, because it represents what most days are actually like",
        "Mean, because it uses all the data",
        "Mode, because customers buy the most popular item",
        "Neither, because the data is too variable"
      ],
      explanation: "The median ($135) better represents what a typical day looks like. Using the mean would lead to over-ordering since only one day was exceptional."
    },
    {
      id: "choice-3",
      question: "The campus café wants to know if their weekend revenue is consistent enough to predict next month's supplies. What additional measure would help them most?",
      answers: [
        "Range, to understand how much revenue varies",
        "Mode, to see the most common value",
        "Median, to find the middle value",
        "Sum, to calculate total revenue"
      ],
      explanation: "Range tells them how spread out the data is. A small range means consistent sales (easier to predict). A large range means high variability (harder to forecast)."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson02Data}
          unit={unit04Data}
          phase={currentPhase}
          phases={lesson02Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Phase 3 Introduction */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-2xl text-purple-800 flex items-center gap-2">
                📈 Guided Practice: Making Statistical Choices
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-purple-800 text-lg leading-relaxed">
                Now you have the tools. Let's practice making decisions about which measure to use 
                and what the results actually mean for the café's business.
              </p>
            </CardContent>
          </Card>

          {/* Complication: The Outlier Problem */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Complication: When Outliers Change Everything
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-800 mb-4">
                In the real world, data is rarely clean. Let's see what happens when we add one outlier to a typical dataset.
              </p>

              <div className="bg-white p-6 rounded-lg border border-amber-200 mb-6">
                <h4 className="font-semibold text-amber-900 mb-4">Compare these two scenarios</h4>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-medium text-amber-800 mb-2">Weekends 1-7 (no outlier):</p>
                    <p className="font-mono text-amber-700 mb-2">$480, $495, $510, $505, $490, $500, $515</p>
                    <p className="text-amber-700 text-sm">Mean = $499.29</p>
                    <p className="text-amber-700 text-sm">Median = $500</p>
                    <p className="text-amber-600 text-sm mt-2">Difference: Only $0.71—nearly identical!</p>
                  </div>
                  <div>
                    <p className="font-medium text-amber-800 mb-2">Weekends 1-8 (with outlier):</p>
                    <p className="font-mono text-amber-700 mb-2">$480, $495, $510, $505, $490, $500, $515, $2,100</p>
                    <p className="text-amber-700 text-sm">Mean = $636.88</p>
                    <p className="text-amber-700 text-sm">Median = $502.50</p>
                    <p className="text-amber-600 text-sm mt-2">Difference: $134.38—huge gap!</p>
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">What does this mean for the café?</h4>
                <p className="text-purple-800">
                  If Sarah uses the <strong>mean</strong> ($636.88) to plan inventory, she'll expect to sell $637 worth 
                  of goods every weekend—except NO weekend actually hit that number except the one special event. 
                  If she uses the <strong>median</strong> ($502.50), she gets a number that actually represents what 
                  most weekends are like.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* More Complex Data - Rounding */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center gap-2">
                🔢 Complication: Precision and Rounding
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 mb-4">
                Real business data often involves decimals and rounding. How do we handle this in statistics?
              </p>

              <div className="bg-white p-6 rounded-lg border border-blue-200 mb-6">
                <h4 className="font-semibold text-blue-900 mb-4">Example: Daily traffic counts</h4>
                <p className="font-mono text-blue-800 mb-4">125, 143, 132, 156, 128, 147, 139</p>
                
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium text-blue-900 mb-2">Mean calculation:</p>
                    <p className="text-blue-700">Sum = 1,070</p>
                    <p className="text-blue-700">Count = 7</p>
                    <p className="text-blue-700">Mean = 1,070 ÷ 7 = 152.857...</p>
                    <p className="text-blue-700 font-medium">Rounded: 153 customers/day</p>
                  </div>
                  <div>
                    <p className="font-medium text-blue-900 mb-2">Median calculation:</p>
                    <p className="text-blue-700">Sorted: 125, 128, 132, 139, 143, 147, 156</p>
                    <p className="text-blue-700">Middle (4th): 139</p>
                    <p className="text-blue-700 font-medium">Median = 139 customers/day</p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-blue-100 rounded-lg">
                  <p className="text-blue-800 font-medium">
                    The mean (153) is slightly higher than the median (139). This slight right skew comes from 
                    the two higher values (156, 147) pulling the average up. For business planning, Sarah might 
                    use the median (139) as her "typical day" but note that most days range from 128-147.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Guided Practice: Choosing the Right Measure */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Guided Practice: Which Measure Should You Use?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800 mb-4">
                Practice deciding between mean and median based on the data characteristics.
              </p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <p className="font-medium text-green-900 mb-2">Scenario A: Regular weekdays</p>
                  <p className="text-green-700 text-sm mb-2">Customer counts: 42, 45, 48, 51, 44, 46, 50, 43, 47, 49</p>
                  <p className="text-green-600 text-sm">
                    <strong>Recommendation:</strong> Mean works well here—data is fairly symmetric, no extreme outliers.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <p className="font-medium text-green-900 mb-2">Scenario B: Monthly catering orders</p>
                  <p className="text-green-700 text-sm mb-2">Orders in dollars: $2,500, $3,100, $2,800, $15,000, $2,900, $3,200</p>
                  <p className="text-green-600 text-sm">
                    <strong>Recommendation:</strong> Median ($3,000) is better—the $15,000 outlier would skew the mean to $4,917.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <p className="font-medium text-green-900 mb-2">Scenario C: Hourly tip amounts</p>
                  <p className="text-green-700 text-sm mb-2">Tips per hour ($): 12, 15, 18, 22, 25, 28, 32, 85</p>
                  <p className="text-green-600 text-sm">
                    <strong>Recommendation:</strong> Median ($25) is better—the $85 tip (likely from a large party) distorts the mean.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Thinking About Choices */}
          <ComprehensionCheck
            title="Guided Practice: Making Statistical Decisions"
            description="Apply your understanding of when to use mean vs. median in real business scenarios."
            questions={choiceQuestions}
            showExplanations={true}
          />
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