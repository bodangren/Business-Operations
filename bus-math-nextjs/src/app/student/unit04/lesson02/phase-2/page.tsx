'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calculator, Users } from "lucide-react";
import { lesson02Data, lesson02Phases, unit04Data } from "../lesson-data";

export default function Phase2Page() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 2)!;

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
          {/* Explicit Instruction Introduction */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800 flex items-center gap-2">
                📐 Explicit Instruction: Finding "Typical" with Statistics
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-blue-800 text-lg leading-relaxed">
                When Sarah asks "What's a typical weekend?" she needs more than a gut feeling. 
                Statistics gives her three reliable ways to answer that question. Let's walk through each one.
              </p>
            </CardContent>
          </Card>

          {/* Mean - The Balance Point */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Mean: The Arithmetic Average
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800 mb-4">
                The mean is what most people think of when they hear "average." You add up all the values 
                and divide by how many there are.
              </p>

              <div className="bg-white p-6 rounded-lg border border-green-200 mb-6">
                <h4 className="font-semibold text-green-900 mb-4">Worked Example: Last 5 weekends</h4>
                <div className="font-mono text-lg mb-4">
                  Weekend sales: $480, $520, $495, $510, $470
                </div>
                
                <div className="space-y-2 text-green-700">
                  <p><strong>Step 1:</strong> Add up all the values</p>
                  <p className="pl-4">$480 + $520 + $495 + $510 + $470 = <strong>$2,475</strong></p>
                  
                  <p><strong>Step 2:</strong> Count how many values</p>
                  <p className="pl-4">5 weekends</p>
                  
                  <p><strong>Step 3:</strong> Divide sum by count</p>
                  <p className="pl-4">$2,475 ÷ 5 = <strong className="text-green-900 text-xl">$495</strong></p>
                </div>

                <div className="mt-6 p-4 bg-green-100 rounded-lg">
                  <p className="text-green-800 font-medium">
                    The mean of $495 means: if the sales were spread out evenly across all 5 weekends, 
                    each weekend would have made $495.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">✅ When Mean Works Well</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Data is roughly symmetric (no extreme outliers)</li>
                    <li>• You want to use every data point</li>
                    <li>• The data represents a rate or ratio</li>
                  </ul>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-900 mb-2">⚠️ When Mean Gets Distorted</h4>
                  <ul className="text-amber-700 text-sm space-y-1">
                    <li>• One extreme value pulls the average up or down</li>
                    <li>• Data is highly skewed</li>
                    <li>• You have outliers (like that $2,100 weekend!)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Median - The Middle Value */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Median: The Middle Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-800 mb-4">
                The median is the value exactly in the middle when you sort all values from smallest to largest.
                Half the data is above it, half is below it.
              </p>

              <div className="bg-white p-6 rounded-lg border border-purple-200 mb-6">
                <h4 className="font-semibold text-purple-900 mb-4">Worked Example: Same 5 weekends</h4>
                <div className="font-mono text-lg mb-4">
                  Weekend sales: $480, $520, $495, $510, $470
                </div>
                
                <div className="space-y-2 text-purple-700">
                  <p><strong>Step 1:</strong> Sort the values from smallest to largest</p>
                  <p className="pl-4">$470, $480, $495, $510, $520</p>
                  
                  <p><strong>Step 2:</strong> Find the middle position</p>
                  <p className="pl-4">5 values → middle is position 3</p>
                  
                  <p><strong>Step 3:</strong> Read the middle value</p>
                  <p className="pl-4">$470, $480, <strong>$495</strong>, $510, $520</p>
                  
                  <p className="mt-4"><strong>Median = $495</strong></p>
                </div>

                <div className="mt-6 p-4 bg-purple-100 rounded-lg">
                  <p className="text-purple-800 font-medium">
                    The median tells us: half the weekends made less than $495, and half made more. 
                    It's not affected by one extreme value.
                  </p>
                </div>
              </div>

              {/* Odd vs Even Example */}
              <div className="bg-white p-6 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-4">What if there's an even number of values?</h4>
                <p className="text-purple-700 mb-4">
                  6 weekends: $480, $520, $495, $510, $470, $460
                </p>
                <p className="text-purple-700">
                  Sort: $460, $470, $480, $495, $510, $520
                </p>
                <p className="text-purple-700 mt-2">
                  With 6 values, there are two middle positions (3 and 4). Take their average:
                </p>
                <p className="text-purple-800 font-mono mt-2">
                  ($480 + $495) ÷ 2 = $487.50
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Spread - The Variability */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                📏 Spread: How Much Do Values Vary?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-amber-800 mb-4">
                Knowing the "typical" value isn't enough. Sarah also needs to know how consistent the data is.
                Is sales pretty much the same every weekend, or does it jump around wildly?
              </p>

              <div className="bg-white p-6 rounded-lg border border-amber-200 mb-6">
                <h4 className="font-semibold text-amber-900 mb-4">Two cafés, same average, very different</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="font-semibold text-amber-800 mb-2">Café A (Low Spread)</p>
                    <p className="text-amber-700 text-sm mb-2">Weekends: $490, $500, $495, $505, $510</p>
                    <p className="text-amber-700 text-sm">Mean: $500 | Range: $20</p>
                    <p className="text-amber-600 text-sm mt-2">
                      Predictable! Can plan inventory closely.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-amber-800 mb-2">Café B (High Spread)</p>
                    <p className="text-amber-700 text-sm mb-2">Weekends: $200, $300, $500, $700, $900</p>
                    <p className="text-amber-700 text-sm">Mean: $500 | Range: $700</p>
                    <p className="text-amber-600 text-sm mt-2">
                      Wild variation! Harder to plan inventory.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-900 mb-2">Range</h4>
                  <p className="text-amber-700 text-sm">
                    <strong>Maximum - Minimum</strong><br/>
                    Quick measure of spread. Tells you the full span, but sensitive to outliers.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-amber-200">
                  <h4 className="font-semibold text-amber-900 mb-2">Interpreting Spread</h4>
                  <p className="text-amber-700 text-sm">
                    <strong>Low spread</strong> = values cluster near center, easier to predict<br/>
                    <strong>High spread</strong> = values scatter widely, harder to forecast
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Reference Table */}
          <Card className="border-slate-200 bg-slate-50">
            <CardHeader>
              <CardTitle className="text-slate-800">📋 Quick Reference</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-3 text-left">Measure</th>
                    <th className="p-3 text-left">What It Tells You</th>
                    <th className="p-3 text-left">Best When...</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3 font-medium">Mean</td>
                    <td className="p-3">Balancing point of all data</td>
                    <td className="p-3">Data is symmetric, no outliers</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Median</td>
                    <td className="p-3">True middle value</td>
                    <td className="p-3">Data has outliers or is skewed</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Range</td>
                    <td className="p-3">Full span from min to max</td>
                    <td className="p-3">Quick check, no outliers</td>
                  </tr>
                </tbody>
              </table>
            </CardContent>
          </Card>

          {/* Connection to Business */}
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-800 flex items-center gap-2">
                🎯 Sarah's Business Decision
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-indigo-800 mb-4">
                Now Sarah can answer her "What's normal?" question with real statistics:
              </p>
              <div className="bg-white p-4 rounded-lg border border-indigo-200 mb-4">
                <ul className="text-indigo-700 space-y-2">
                  <li><strong>Mean:</strong> $495 (but remember that $2,100 outlier!)</li>
                  <li><strong>Median:</strong> $495 (same as mean here—coincidence?)</li>
                  <li><strong>Range:</strong> $1,715 (from $445 to $2,160)</li>
                </ul>
              </div>
              <p className="text-indigo-700">
                The median and mean being equal is a clue—the outlier might be pulling the mean up. 
                In the next lesson, we'll learn what to do when a value seems "wrong."
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