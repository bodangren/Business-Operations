'use client';

import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson04Data, unit08Data, lesson04Phases } from "../lesson-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, AlertTriangle, TrendingUp, Users } from "lucide-react";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";

const currentPhase = lesson04Phases[0]; // Hook phase

const hookQuestions = [
  {
    id: "hook-1",
    question: "Sarah's VC pitch was going perfectly until Marcus asked: 'What if your customer growth is only half what you projected?' Sarah froze. What tool should she have prepared?",
    answers: [
      "Excel Scenario Manager to show optimistic, realistic, and pessimistic cases",
      "A calculator to quickly redo the math",
      "Multiple printed versions of her model",
      "A PowerPoint slide with different charts"
    ],
    explanation: "Scenario Manager allows you to instantly switch between different sets of assumptions, showing investors you've prepared for various outcomes."
  },
  {
    id: "hook-2",
    question: "Why do venture capitalists specifically ask 'What if?' questions during startup pitches?",
    answers: [
      "They want to test if entrepreneurs understand risks and have planned for different outcomes",
      "They're trying to trick entrepreneurs into making mistakes",
      "They prefer pessimistic business projections",
      "They don't trust any financial models"
    ],
    explanation: "VCs invest in uncertain futures. They need to see that entrepreneurs have thought through various scenarios and can adapt their business model."
  },
  {
    id: "hook-3",
    question: "In Sarah's SaaS business, which variable would have the BIGGEST impact on her 5-year revenue projection?",
    answers: [
      "Monthly recurring revenue growth rate - compound growth over 5 years creates massive differences",
      "The color of her website design",
      "Her office location rent",
      "The type of computer she uses"
    ],
    explanation: "In recurring revenue businesses, small changes in growth rates compound dramatically over time. A 20% vs 30% monthly growth rate can mean millions in difference."
  },
  {
    id: "hook-4",
    question: "What's the difference between 'hard-coded' numbers and dynamic formulas in financial models?",
    answers: [
      "Hard-coded numbers are typed in and don't change; dynamic formulas automatically update when assumptions change",
      "Hard-coded numbers are more accurate than formulas",
      "Dynamic formulas are only for advanced users",
      "There's no real difference for business purposes"
    ],
    explanation: "Professional financial models use formulas so that when you test different scenarios (like changing growth rates), all connected numbers update automatically."
  }
];

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
      <PhaseHeader 
        unit={unit08Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              🎯 Phase 1: Hook
            </Badge>
            <div className="max-w-4xl mx-auto space-y-8">
              
              {/* Hook Introduction */}
              <Card className="border-red-200 bg-white shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-red-800 mb-2">
                    Sarah's Scenario Manager Challenge
                  </CardTitle>
                  <Badge variant="secondary" className="text-sm">
                    The $500K Freeze
                  </Badge>
                </CardHeader>
                <CardContent className="prose prose-lg max-w-none">
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-6">
                    <p className="text-lg leading-relaxed text-red-900 mb-4">
                      Sarah Chen stands in front of three venture capitalists, her TechStart Solutions pitch deck 
                      glowing on the screen behind her. She's just finished presenting her beautiful financial 
                      model—every formula linked, every number flowing perfectly from her assumptions. The room 
                      feels electric with possibility.
                    </p>
                    <p className="text-lg leading-relaxed text-red-900 mb-4">
                      "Impressive work, Sarah," says Marcus, the lead investor, leaning forward. "Your model 
                      shows strong growth potential. But I have a question." He pauses dramatically. "What if 
                      your customer acquisition costs are 50% higher than projected? What if the market adoption 
                      is slower? What if your churn rate doubles?"
                    </p>
                    <p className="text-lg leading-relaxed text-red-900">
                      Sarah's confidence evaporates. She knows her base-case numbers by heart, but she hasn't 
                      prepared for these "what if" scenarios. She stammers, "Well, I could... I could recalculate 
                      those numbers and get back to you..." Marcus exchanges glances with his colleagues. 
                      In the VC world, this is a red flag.
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                    <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      The Scenario Manager Solution
                    </h3>
                    <p className="text-blue-800 mb-4">
                      Professional investors don't just want to see your best-case scenario—they want to 
                      understand how your business performs under different conditions. Excel's Scenario 
                      Manager lets you instantly switch between optimistic, realistic, and pessimistic 
                      assumptions, showing investors you've thoroughly analyzed risks and opportunities.
                    </p>
                    <p className="text-blue-800">
                      With Scenario Manager, Sarah could have immediately answered: "Under our pessimistic 
                      scenario with higher acquisition costs and slower growth, we still reach profitability 
                      by month 18" — and switched to show the exact numbers instantly.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">Why This Matters</h3>
                    <p className="text-green-800">
                      Scenario Manager isn't just about convenience—it's about professional credibility. When 
                      Sarah can answer complex "what-if" questions instantly during investor presentations, 
                      she demonstrates sophisticated analytical thinking that separates funded startups from 
                      rejected pitches.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Comprehension Check */}
              <ComprehensionCheck
                title="Understanding Sarah's Scenario Challenge"
                description="Test your understanding of why professional investors demand scenario analysis."
                questions={hookQuestions}
                showExplanations={true}
              />

              {/* Turn and Talk */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Turn and Talk
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-blue-900 mb-2">
                    Discussion Prompt (3 minutes):
                  </p>
                  <p className="text-blue-800 mb-2">
                    Think about Sarah's situation and discuss with a partner:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-blue-800">
                    <li>Why do investors specifically ask "what if" questions instead of just accepting the base case?</li>
                    <li>What could happen to a business if entrepreneurs only plan for their best-case scenario?</li>
                    <li>How might Excel's Scenario Manager help Sarah regain the investors' confidence?</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Preview */}
              <Card className="border-gray-200 bg-gray-50">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-gray-800 mb-2">Coming Up Next</h3>
                  <p className="text-gray-700">
                    In the Introduction phase, we'll master Scenario Manager mechanics: changing cells, 
                    result cells, and scenario creation. You'll learn to build professional dynamic 
                    models that can instantly switch between different business conditions.
                  </p>
                </CardContent>
              </Card>
              
            </div>
          </div>
        </section>
      </main>
      
      <PhaseFooter 
        unit={unit08Data} 
        lesson={lesson04Data} 
        phase={currentPhase} 
        phases={lesson04Phases} 
      />
    </div>
  );
}