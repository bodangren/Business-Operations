'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson03Data, unit08Data, lesson03Phases } from "../lesson-data";
import StraightLineMastery from "@/components/exercises/StraightLineMastery";

const phase4 = lesson03Phases.find(p => p.sequence === 4)!;

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase4}
          phases={lesson03Phases}
        />

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

        <PhaseFooter
          lesson={lesson03Data}
          unit={unit08Data}
          phase={phase4}
          phases={lesson03Phases}
        />
      </div>
    </div>
  );
}
