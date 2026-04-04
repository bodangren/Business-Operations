'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { ArrowRight, TrendingUp, AlertTriangle } from "lucide-react";
import { lesson02Data, lesson02Phases, unit04Data } from "../lesson-data";

export default function Phase6Page() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 6)!;

  const reflectionPrompts = [
    {
      id: 'confidence-stats',
      category: 'confidence' as const,
      prompt: 'How confident do you feel calculating mean, median, and range? Where do you feel strongest and where might you need more practice?',
      placeholder: 'Think about which measure (mean, median, or range) feels clearest to you. Which calculation steps are automatic for you, and which still require you to pause and think through?'
    },
    {
      id: 'business-interpretation',
      category: 'adaptability' as const,
      prompt: 'Sarah needs to decide whether to use mean or median for planning café inventory. How would you explain the difference to her in business terms?',
      placeholder: 'Consider what a business owner actually needs to know. Would she want to plan for the "average" weekend, or the "typical" weekend? What\'s the difference in inventory implications?'
    },
    {
      id: 'statistical-thinking',
      category: 'persistence' as const,
      prompt: 'What does it mean to "think statistically" about business data? How is it different from just looking at numbers and making a guess?',
      placeholder: 'Think about how statistics gives you a systematic way to summarize data and make decisions. What did you learn about letting the data tell you the story rather than forcing a story onto the data?'
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
          {/* Closing Introduction */}
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-800 flex items-center gap-2">
                🌟 Closing: What "Normal" Looks Like in Data
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-indigo-800 text-lg leading-relaxed">
                You've just learned the foundational tools that professional data analysts use every day. 
                Mean, median, and range aren't just abstract math—they're the tools that let Sarah answer 
                "What's a typical weekend?" with real numbers instead of guesses.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-indigo-200 mt-4">
                <h3 className="font-semibold text-indigo-900 mb-2">What You Can Now Do:</h3>
                <ul className="text-indigo-700 space-y-2">
                  <li>• <strong>Calculate mean:</strong> Add all values, divide by count</li>
                  <li>• <strong>Find median:</strong> Sort data, find middle value</li>
                  <li>• <strong>Compute range:</strong> Maximum minus minimum</li>
                  <li>• <strong>Choose the right measure:</strong> Mean for symmetric data, median when outliers are present</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Key Takeaways */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Key Takeaways
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-900">Statistical Thinking</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>Statistics summarize large datasets into understandable numbers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>Different measures tell different stories—choose the one that fits your data</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>Mean ≈ median suggests symmetric data; large gap suggests outliers</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-900">Business Application</h4>
                  <ul className="space-y-2 text-green-700 text-sm">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>"Typical" means different things depending on data shape</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>Outliers can drastically change the mean but not the median</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                      <span>Range tells you about consistency, not center</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Reflection Journal */}
          <ReflectionJournal
            unitTitle="Descriptive Statistics: Reflection & Growth"
            prompts={reflectionPrompts}
            onSave={(responses) => {
              console.log('Statistics reflections saved:', responses);
            }}
          />

          {/* Preview */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" />
                Preview: Next Lesson
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-800 mb-4">
                In the next lesson, we'll tackle a problem we saw in this lesson's data: 
                <strong> What do we do with outliers?</strong>
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-amber-200">
                <h4 className="font-semibold text-amber-900 mb-2">Lesson 03 Preview:</h4>
                <ul className="text-amber-700 space-y-2 text-sm">
                  <li>• How do we identify what counts as an "outlier"?</li>
                  <li>• Should outliers be removed, adjusted, or kept?</li>
                  <li>• What does an outlier tell us about the business?</li>
                  <li>• How do we make defensible data-quality decisions?</li>
                </ul>
              </div>

              <p className="text-amber-700 mt-4">
                Remember that $2,100 weekend from our data? That outlier is trying to tell us something. 
                In the next lesson, we'll learn how to listen.
              </p>
            </CardContent>
          </Card>

          {/* Connection Back to Unit Problem */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800">
                🔗 Connecting to the Café's Weekend Challenge
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-800 mb-4">
                You started this unit by learning about the café's problem: they're throwing away too much 
                inventory on weekends. Now you have your first tool for solving it.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">How Statistics Helps:</h4>
                <ul className="text-purple-700 space-y-2">
                  <li>• Know what's "typical" so you can plan the right amount of inventory</li>
                  <li>• Understand how consistent (or variable) weekend sales are</li>
                  <li>• Identify which weeks are truly special vs. normal variation</li>
                  <li>• Make inventory decisions based on evidence, not guesses</li>
                </ul>
              </div>
              
              <p className="text-purple-700 mt-4 font-medium">
                Next lesson, we'll learn what to do when the data includes values that seem "wrong"—
                and why those wrong values might actually contain important business insights.
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