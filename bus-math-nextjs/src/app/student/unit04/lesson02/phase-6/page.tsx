'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";
import { ArrowRight, TrendingUp, CheckCircle } from "lucide-react";
import { lesson02Data, lesson02Phases, unit04Data } from "../lesson-data";

export default function Phase6Page() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 6)!;

  const dataCleaningReflectionPrompts = [
    {
      id: 'courage-data-cleaning',
      category: 'courage' as const,
      prompt: 'Data cleaning can be intimidating when you first see a messy dataset with thousands of rows. Describe a moment during this lesson when you had to take a courageous approach to tackle complex, messy data that initially seemed overwhelming.',
      placeholder: 'Think about when you first saw the complex café data with multiple problems in every column. How did you find the courage to work through it systematically rather than giving up? What helped you push through the initial intimidation of working with real, messy business data?'
    },
    {
      id: 'adaptability-data-cleaning',
      category: 'adaptability' as const,
      prompt: 'Real-world data rarely behaves the way textbook examples suggest. How did you adapt your approach when the data cleaning exercises presented unexpected challenges or when your first attempt at using Excel functions didn\'t work as planned?',
      placeholder: 'Reflect on times when you had to change your strategy—maybe when TRIM didn\'t solve all the spacing issues, or when Remove Duplicates found more problems than expected. How did you adjust your methods to handle the complexity of authentic business data?'
    },
    {
      id: 'persistence-data-cleaning',
      category: 'persistence' as const,
      prompt: 'Professional data cleaning requires meticulous attention to detail and the persistence to work through each problem systematically. Describe a specific moment when you wanted to skip steps or rush through the process, but instead chose to persist with thorough, professional-quality work.',
      placeholder: 'Think about when the data cleaning seemed tedious or repetitive. What motivated you to maintain high standards? How does knowing that Sarah Chen and other professionals spend 60-80% of their time on data cleaning help you understand the importance of persistence in this work?'
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
          {/* Closing Introduction */}
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-2xl text-indigo-800 flex items-center gap-2">
                🌟 Closing: From Messy Data to Professional Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-indigo-800 text-lg leading-relaxed">
                Congratulations! You've just completed your initiation into the world of professional 
                data analysis. The skills you've mastered today—Text-to-Columns, TRIM, and Remove 
                Duplicates—are the same techniques that data analysts use at Fortune 500 companies, 
                startups, non-profits, and government agencies around the world.
              </p>
              
              <p className="text-indigo-700">
                More importantly, you've developed the professional mindset that separates amateur 
                spreadsheet users from skilled data analysts: the understanding that clean, reliable 
                data is the foundation of every good business decision. This is exactly what helped 
                Sarah Chen transform TechStart Solutions from a struggling startup to a data-driven success story.
              </p>

              <div className="bg-white p-4 rounded-lg border border-indigo-200 mt-6">
                <h3 className="font-semibold text-indigo-900 mb-2">What You've Accomplished Today:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Badge className="bg-indigo-100 text-indigo-800 mb-2">Technical Mastery</Badge>
                    <ul className="text-indigo-700 text-sm space-y-1">
                      <li>• Text-to-Columns for data separation</li>
                      <li>• TRIM function for space standardization</li>
                      <li>• Remove Duplicates for data integrity</li>
                      <li>• Professional validation techniques</li>
                    </ul>
                  </div>
                  <div>
                    <Badge className="bg-indigo-100 text-indigo-800 mb-2">Professional Judgment</Badge>
                    <ul className="text-indigo-700 text-sm space-y-1">
                      <li>• Understanding business impact of data quality</li>
                      <li>• Systematic problem-solving approach</li>
                      <li>• Documentation and validation practices</li>
                      <li>• Career-ready analytical thinking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What's Next Preview */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <ArrowRight className="h-5 w-5" />
                Preview: Where Your Data Cleaning Skills Lead
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800 text-lg leading-relaxed mb-4">
                Now that you can clean messy data like a professional, you're ready to unlock the real 
                power of data analysis. In our next lessons, you'll learn to find hidden patterns, 
                create compelling visualizations, and build predictive models that help businesses 
                make million-dollar decisions.
              </p>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <TrendingUp className="h-6 w-6 text-green-600 mb-2" />
                  <h4 className="font-semibold text-green-900 mb-2">Statistical Analysis</h4>
                  <p className="text-green-700 text-sm">
                    Use your clean data to calculate means, medians, and standard deviations that 
                    reveal business insights and identify outliers.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <CheckCircle className="h-6 w-6 text-green-600 mb-2" />
                  <h4 className="font-semibold text-green-900 mb-2">Data Visualization</h4>
                  <p className="text-green-700 text-sm">
                    Transform your cleaned datasets into powerful charts and graphs that tell 
                    compelling stories to business stakeholders.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <ArrowRight className="h-6 w-6 text-green-600 mb-2" />
                  <h4 className="font-semibold text-green-900 mb-2">Predictive Modeling</h4>
                  <p className="text-green-700 text-sm">
                    Build regression models that help businesses forecast sales, optimize inventory, 
                    and make data-driven strategic decisions.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CAP Framework Reflection */}
          <ReflectionJournal
            unitTitle="Data Cleaning Fundamentals: Reflection & Growth"
            prompts={dataCleaningReflectionPrompts}
            onSave={(responses) => {
              console.log('Data cleaning reflections saved:', responses);
              // In a real application, this would save to a learning management system
            }}
          />

          {/* Connection to Bigger Picture */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800">Connecting to the Data-Driven Café Challenge</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-800 text-lg leading-relaxed mb-4">
                The data cleaning skills you've mastered today are the essential first step in solving 
                the café's bigger challenge: reducing food waste from 8-12% down to 3% while maintaining 
                customer satisfaction and profitability.
              </p>

              <div className="bg-white p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">The Path Ahead</h4>
                <p className="text-purple-700 mb-3">
                  With clean, reliable data in hand, you'll be able to:
                </p>
                <ul className="text-purple-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span><strong>Identify patterns:</strong> Discover which items sell best at specific times and days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span><strong>Find outliers:</strong> Spot unusual sales events that indicate special circumstances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span><strong>Build forecasts:</strong> Predict demand to optimize inventory orders and reduce waste</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 mt-1 flex-shrink-0" />
                    <span><strong>Create recommendations:</strong> Develop a data-driven plan that saves money and improves operations</span>
                  </li>
                </ul>
              </div>

              <p className="text-purple-700 mt-4 font-medium">
                Remember: Without the clean, reliable data foundation you've built today, none of these 
                advanced analyses would be possible. You've taken the crucial first step on the path 
                to becoming a data-driven decision maker!
              </p>
            </CardContent>
          </Card>

          {/* Final Encouragement */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800">Your Data Analysis Journey Continues</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-amber-800 text-lg leading-relaxed">
                  Today you've proven that you have what it takes to work with real, messy business data 
                  and transform it into something valuable. This is exactly the skill set that employers 
                  value and that will serve you well regardless of your future career path.
                </p>

                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-900 mb-2">Key Mindset Shifts You've Made:</h4>
                  <ul className="text-amber-800 space-y-2">
                    <li>• From avoiding messy data to systematically cleaning it</li>
                    <li>• From accepting data "as is" to applying professional quality standards</li>
                    <li>• From seeing Excel as just a calculator to using it as a powerful analytical tool</li>
                    <li>• From individual tasks to understanding business impact and career relevance</li>
                  </ul>
                </div>

                <p className="text-amber-700 font-medium">
                  Sarah Chen's journey from struggling with notebook-based tracking to building a 
                  successful data-driven business started with mastering exactly these foundational 
                  skills. Your journey as a data-literate professional has begun!
                </p>
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