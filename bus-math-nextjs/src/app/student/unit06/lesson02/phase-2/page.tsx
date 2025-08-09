import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, TrendingUp, AlertCircle, BookOpen, DollarSign } from "lucide-react";
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank";
import { lesson02Data, lesson02Phases, unit06Data } from "../lesson-data";

const currentPhase = lesson02Phases[1]; // Phase 2: Introduction

const fillInBlankSentences = [
  {
    id: "1",
    text: "Markup looks at profit as a percentage of your {blank}.",
    answer: "cost",
    hint: "The original amount you paid to acquire or create the product/service",
    alternativeAnswers: ["costs"]
  },
  {
    id: "2", 
    text: "Margin looks at profit as a percentage of your {blank}.",
    answer: "selling price",
    hint: "The final amount the customer pays for the product/service",
    alternativeAnswers: ["sales price", "revenue"]
  },
  {
    id: "3",
    text: "The markup formula is: ({blank} - Cost) ÷ Cost × 100%",
    answer: "Selling Price",
    hint: "What the customer pays minus what it cost you",
    alternativeAnswers: ["Sales Price", "Price"]
  },
  {
    id: "4",
    text: "The margin formula is: (Selling Price - Cost) ÷ {blank} × 100%",
    answer: "Selling Price",
    hint: "The denominator uses what the customer pays",
    alternativeAnswers: ["Sales Price", "Price"]
  },
  {
    id: "5",
    text: "If you buy a t-shirt for $10 and sell it for $20, the markup is {blank}%.",
    answer: "100",
    hint: "($20 - $10) ÷ $10 × 100% = $10 ÷ $10 × 100%",
    alternativeAnswers: ["100%", "one hundred"]
  },
  {
    id: "6",
    text: "If you buy a t-shirt for $10 and sell it for $20, the margin is {blank}%.",
    answer: "50",
    hint: "($20 - $10) ÷ $20 × 100% = $10 ÷ $20 × 100%",
    alternativeAnswers: ["50%", "fifty"]
  },
  {
    id: "7",
    text: "Businesses usually care more about {blank} because it tells them how much of each sales dollar they keep as profit.",
    answer: "margin",
    hint: "This percentage shows what portion of each dollar earned becomes profit",
    alternativeAnswers: ["margins"]
  },
  {
    id: "8",
    text: "Financial reports almost always use {blank} rather than markup.",
    answer: "margin",
    hint: "The standard way businesses report profitability to investors",
    alternativeAnswers: ["margins"]
  }
];

export default function Unit06Lesson02Phase2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson02Data}
          unit={unit06Data} 
          phase={currentPhase}
          phases={lesson02Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Core Concepts Introduction */}
          <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-cyan-50">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Core Concepts: Markup vs. Margin
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg leading-relaxed space-y-4">
                <p>
                  Sarah's big "aha!" moment was realizing she was pricing to cover costs, not for <em>value</em>. 
                  Part of that problem often comes from confusing two very important business words: 
                  <strong>markup</strong> and <strong>margin</strong>. They both sound like they're about profit, 
                  but they measure it in different ways, and mixing them up can cost a business a lot of money.
                </p>

                <p>
                  Let's clear up this common confusion with a simple example. Imagine Sarah buys website hosting 
                  services for a client at $100 and charges the client $200 for the complete hosting setup.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-green-800 flex items-center gap-2 text-lg">
                        <TrendingUp className="h-5 w-5" />
                        Markup Calculation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-green-700">
                        <strong>Markup</strong> looks at profit as a percentage of your <strong>cost</strong>.
                      </p>
                      <div className="bg-white p-3 rounded border border-green-200">
                        <p className="text-sm">In Sarah's example:</p>
                        <p className="text-sm">• Cost: $100</p>
                        <p className="text-sm">• Selling Price: $200</p>
                        <p className="text-sm">• Profit: $200 - $100 = $100</p>
                      </div>
                      <div className="bg-green-100 p-3 rounded font-mono text-center">
                        <p className="text-sm text-green-700">Markup = ($200 - $100) ÷ $100 × 100%</p>
                        <p className="text-lg font-bold text-green-800">= 100% markup</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 bg-purple-50">
                    <CardHeader>
                      <CardTitle className="text-purple-800 flex items-center gap-2 text-lg">
                        <DollarSign className="h-5 w-5" />
                        Margin Calculation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-purple-700">
                        <strong>Margin</strong> looks at profit as a percentage of your <strong>selling price</strong>.
                      </p>
                      <div className="bg-white p-3 rounded border border-purple-200">
                        <p className="text-sm">In the same example:</p>
                        <p className="text-sm">• Cost: $100</p>
                        <p className="text-sm">• Selling Price: $200</p>
                        <p className="text-sm">• Profit: $200 - $100 = $100</p>
                      </div>
                      <div className="bg-purple-100 p-3 rounded font-mono text-center">
                        <p className="text-sm text-purple-700">Margin = ($200 - $100) ÷ $200 × 100%</p>
                        <p className="text-lg font-bold text-purple-800">= 50% margin</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="border-orange-200 bg-orange-50">
                  <CardContent className="p-4">
                    <p className="text-orange-800 font-medium flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      See the difference? Same $100 profit, but 100% markup is very different from 50% margin!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>

          {/* Why Margin Matters More */}
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-800 flex items-center gap-2">
                <Calculator className="h-5 w-5" />
                Why Businesses Focus on Margin
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-indigo-700 leading-relaxed">
                Businesses usually care more about <strong>margin</strong> because it tells them how much of each 
                sales dollar they get to keep as profit before other expenses. Financial reports almost always 
                use margin because it gives investors and managers a clearer picture of efficiency.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h3 className="font-semibold text-indigo-900 mb-2">Sarah's TechStart Solutions Example</h3>
                <p className="text-sm text-indigo-800 mb-2">
                  When Sarah quotes a $5,000 website project that costs her $2,000 to deliver:
                </p>
                <ul className="text-sm text-indigo-700 space-y-1">
                  <li>• <strong>Markup:</strong> 150% (sounds huge, might scare clients)</li>
                  <li>• <strong>Margin:</strong> 60% (shows she keeps 60¢ of every dollar earned)</li>
                  <li>• <strong>Business insight:</strong> Margin shows this is a healthy, sustainable profit level</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Mathematical Formulas Reference */}
          <Card className="border-gray-200 bg-gray-50">
            <CardHeader>
              <CardTitle className="text-gray-800">Key Formulas to Remember</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border">
                  <h3 className="font-semibold mb-2">Markup Formula</h3>
                  <p className="text-sm font-mono bg-gray-100 p-2 rounded mb-2">
                    Markup = (Selling Price - Cost) ÷ Cost × 100%
                  </p>
                  <p className="text-xs text-gray-600">Profit as % of what you paid</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <h3 className="font-semibold mb-2">Margin Formula</h3>
                  <p className="text-sm font-mono bg-gray-100 p-2 rounded mb-2">
                    Margin = (Selling Price - Cost) ÷ Selling Price × 100%
                  </p>
                  <p className="text-xs text-gray-600">Profit as % of what customer pays</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Fill in the Blank Exercise */}
          <FillInTheBlank
            title="Master the Markup vs. Margin Vocabulary"
            description="Complete these sentences to reinforce your understanding of markup and margin concepts"
            sentences={fillInBlankSentences}
            showWordList={true}
            randomizeWordOrder={true}
            showHints={true}
          />
        </div>

        <PhaseFooter 
          lesson={lesson02Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson02Phases}
        />
      </div>
    </div>
  );
}