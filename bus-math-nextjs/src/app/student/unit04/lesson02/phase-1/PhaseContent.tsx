'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Phase1Content() {

  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="space-y-8">

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hook - Connect to Lesson 01 and Surface Friction */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-2xl text-amber-800 flex items-center gap-2">
                🔍 The "What's Normal?" Problem
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <p className="text-amber-800 text-lg leading-relaxed">
                In the last lesson, you helped Sarah see that the campus café faces a real problem: 
                they're throwing away 8-12% of weekend inventory while trying to serve students fairly.
              </p>
              
              <p className="text-amber-700">
                Now the manager has given Sarah a full month of weekend sales data—48 Saturdays and Sundays 
                worth of transactions. She can see that sales vary wildly from weekend to weekend. But she 
                needs to answer one simple question: <strong>What's a "normal" weekend?</strong>
              </p>

              <div className="bg-white p-4 rounded-lg border border-amber-200 mt-4">
                <h3 className="font-semibold text-amber-900 mb-2">The Friction Point</h3>
                <p className="text-amber-800">
                  Sarah can't just look at the numbers and know what's typical. She has 48 data points, 
                  and they don't all line up neatly. She needs <strong>descriptive statistics</strong>—a 
                  mathematical way to summarize what "normal" actually looks like.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Launch Move: Notice and Wonder */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900 flex items-center gap-2">
                🤔 Turn and Talk: What Do You Notice?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 mb-4">
                Here are last month's weekend sales totals (in dollars):
              </p>
              
              <div className="bg-white p-6 rounded-lg border border-blue-200 mb-6 font-mono text-lg text-center">
                <div className="grid grid-cols-6 gap-2">
                  <span>485</span><span>520</span><span>495</span><span>510</span><span>470</span><span>530</span>
                  <span>445</span><span>505</span><span>515</span><span>2,180</span><span>490</span><span>480</span>
                  <span>500</span><span>475</span><span>525</span><span>505</span><span>460</span><span>515</span>
                  <span>490</span><span>510</span><span>485</span><span>505</span><span>495</span><span>470</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">What do you notice?</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Some values are close together</li>
                    <li>• One value is much higher</li>
                    <li>• Numbers range from low 400s to over 2,000</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">What do you wonder?</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• What's a "typical" weekend?</li>
                    <li>• Why is one weekend so much higher?</li>
                    <li>• How can we summarize all 48 numbers?</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Why Statistics Matter */}
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                📊 Why We Need Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800 text-lg leading-relaxed">
                Descriptive statistics are the tools that let us take a pile of numbers and turn them into 
                something we can actually understand and use for decisions.
              </p>
              
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <Badge className="bg-green-100 text-green-800 mb-2">Mean</Badge>
                  <p className="text-green-700 text-sm">
                    The arithmetic average—sum all values, divide by count. Tells us the "balancing point" of the data.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <Badge className="bg-green-100 text-green-800 mb-2">Median</Badge>
                  <p className="text-green-700 text-sm">
                    The middle value when sorted—half above, half below. Resistant to outliers that distort the mean.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <Badge className="bg-green-100 text-green-800 mb-2">Spread</Badge>
                  <p className="text-green-700 text-sm">
                    How spread out the values are. A narrow spread means values cluster near the center.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

      </div>
    </div>
  );
}