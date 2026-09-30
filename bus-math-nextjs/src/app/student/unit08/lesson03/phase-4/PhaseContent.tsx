'use client';

import StraightLineMastery from "@/components/exercises/StraightLineMastery";


export default function Phase4Content() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-8">

        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Deliberate Practice: Straight-Line Schedules</h2>

            <p className="text-lg leading-relaxed">
              Now it is time to practice until the method feels automatic. Each round gives you a 
              new asset with different numbers. Your job is to enter the annual expense,
              accumulated depreciation, and book value for a specific year.
            </p>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-blue-800 m-0">
                <strong>Target:</strong> Get 5 consecutive correct rounds to show mastery of 
                straight-line depreciation. Use "Show Example" only if you need the step sequence before you submit.
              </p>
            </div>
          </div>

          <StraightLineMastery />
        </div>

      </div>
    </div>
  );
}
