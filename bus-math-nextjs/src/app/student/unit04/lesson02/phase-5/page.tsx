'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { lesson02Data, lesson02Phases, unit04Data } from "../lesson-data";

export default function Phase5Page() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 5)!;

  const assessmentQuestions = [
    {
      id: "assess-1",
      question: "What is the definition of the mean in statistics?",
      answers: [
        "The sum of all values divided by the number of values",
        "The middle value when data is sorted",
        "The most frequently occurring value",
        "The difference between the highest and lowest values"
      ],
      explanation: "The mean (arithmetic average) is calculated by adding up all values and dividing by the count. It represents the balancing point of the data."
    },
    {
      id: "assess-2",
      question: "Why might the median be preferred over the mean when analyzing data with outliers?",
      answers: [
        "The median is resistant to extreme values and better represents the typical value",
        "The median is always higher than the mean",
        "The median uses all the data points equally",
        "The median requires more complex calculations"
      ],
      explanation: "The median is 'resistant' to outliers—it won't change dramatically from one extreme value. The mean can be pulled way off by just one outlier."
    },
    {
      id: "assess-3",
      question: "What does the range of a dataset tell you?",
      answers: [
        "How spread out the data is from minimum to maximum",
        "The average value in the dataset",
        "The middle value of the data",
        "How many values are in the dataset"
      ],
      explanation: "Range = Maximum - Minimum. It tells you the full span of the data but is sensitive to outliers—it doesn't tell you how the data is distributed in between."
    },
    {
      id: "assess-4",
      question: "You have this data: 45, 52, 48, 51, 49, 55, 53. What is the median?",
      answers: [
        "51",
        "50",
        "52",
        "49"
      ],
      explanation: "First sort: 45, 48, 49, 51, 52, 53, 55. With 7 values, the middle (4th) is 51."
    },
    {
      id: "assess-5",
      question: "A café owner looks at 10 weekends of sales and sees: $500, $510, $495, $520, $505, $500, $515, $505, $490, $5,200. Which measure better represents 'typical' weekend sales?",
      answers: [
        "Median, because the $5,200 outlier would distort the mean",
        "Mean, because it uses all 10 data points",
        "Mode, because $500 appears most often",
        "Range, because it shows the spread"
      ],
      explanation: "With the outlier, mean = $622, but NO weekend had $622 in sales. Median = $502.50, which is much closer to what most weekends actually earned."
    },
    {
      id: "assess-6",
      question: "What signal tells you to use the median instead of the mean?",
      answers: [
        "When the data has one or more extreme outliers",
        "When you want to use every single data point",
        "When the data forms a perfect bell curve",
        "When you need the quickest calculation"
      ],
      explanation: "Outliers are the main signal: if one or two values are dramatically different from the rest, the median will give a more reliable picture of 'typical.'"
    },
    {
      id: "assess-7",
      question: "In the café data from this lesson, we calculated that the mean and median were both around $495 for many weeks. What did this tell us about the data?",
      answers: [
        "The data was roughly symmetric with no major outliers distorting either measure",
        "There were no customers that week",
        "The calculations must be wrong",
        "The range was zero"
      ],
      explanation: "When mean ≈ median, it's a clue that the data is fairly symmetric—that is, not heavily skewed by outliers. Both measures are telling us the same story."
    },
    {
      id: "assess-8",
      question: "If Sarah wants to order inventory for a 'typical' weekend, which question should she ask?",
      answers: [
        "What does a typical weekend look like? (use median or mean)",
        "What was the best weekend ever? (use maximum)",
        "What was the worst weekend ever? (use minimum)",
        "How different are the weekends from each other? (use range)"
      ],
      explanation: "For inventory planning, she wants to know what's typical. Mean or median (depending on outliers) is the right tool—max/min give extreme values, range gives spread but not center."
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
          {/* Assessment Introduction */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-2xl text-orange-800 flex items-center gap-2">
                📝 Exit Ticket: Descriptive Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-orange-800 text-lg leading-relaxed">
                Demonstrate your understanding of descriptive statistics—mean, median, and range—and 
                when to use each measure in real business situations.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-orange-200 mt-4">
                <h3 className="font-semibold text-orange-900 mb-2">Assessment Focus:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Badge className="bg-orange-100 text-orange-800 mb-2">Definitions</Badge>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• What is mean? What is median?</li>
                      <li>• How is range calculated?</li>
                    </ul>
                  </div>
                  <div>
                    <Badge className="bg-orange-100 text-orange-800 mb-2">Application</Badge>
                    <ul className="text-orange-700 text-sm space-y-1">
                      <li>• When to use mean vs. median</li>
                      <li>• What outliers do to statistics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Assessment */}
          <ComprehensionCheck
            title="Descriptive Statistics Assessment"
            description="Answer each question based on what you've learned about finding 'typical' values in business data."
            questions={assessmentQuestions}
            showExplanations={true}
            allowRetry={true}
          />

          {/* Success Criteria */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">How Did You Do?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-green-200 text-center">
                  <p className="text-green-600 text-sm mb-1">8/8</p>
                  <p className="text-green-800 font-medium">Expert</p>
                  <p className="text-green-600 text-xs">Ready to learn about outliers</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200 text-center">
                  <p className="text-blue-600 text-sm mb-1">6-7/8</p>
                  <p className="text-blue-800 font-medium">Proficient</p>
                  <p className="text-blue-600 text-xs">Strong foundation, review explanations</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200 text-center">
                  <p className="text-amber-600 text-sm mb-1">Below 6</p>
                  <p className="text-amber-800 font-medium">Developing</p>
                  <p className="text-amber-600 text-xs">Review phases 2-3 before moving on</p>
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