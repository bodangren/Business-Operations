'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson04Data, unit08Data, lesson04Phases } from "../lesson-data";
import DDBComparisonMastery from "@/components/exercises/DDBComparisonMastery";

const phase4 = lesson04Phases.find(p => p.sequence === 4)!;

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-orange-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <PhaseHeader lesson={lesson04Data} unit={unit08Data} phase={phase4} phases={lesson04Phases} />

        <div className="space-y-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Deliberate Practice: DDB and Method Comparison</h2>

            <p className="text-lg leading-relaxed">
              Practice calculating DDB depreciation and comparing it with straight-line. Each round 
              gives you a new asset. Your job is to enter the DDB expense, ending book value, and 
              the difference from straight-line for a specific year.
            </p>

            <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
              <p className="text-purple-800 m-0">
                <strong>Target:</strong> Get 5 consecutive correct rounds. Use "Show Schedule" only when you need the full DDB vs straight-line schedule before you submit.
              </p>
            </div>
          </div>

          <DDBComparisonMastery />
        </div>

        <PhaseFooter lesson={lesson04Data} unit={unit08Data} phase={phase4} phases={lesson04Phases} />
      </div>
    </div>
  );
}
