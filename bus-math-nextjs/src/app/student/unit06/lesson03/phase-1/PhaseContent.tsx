import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, AlertTriangle } from "lucide-react";

 // Hook phase

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-br from-orange-50 to-red-50">
      <div className="space-y-8">

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Hook Introduction */}
          <Card className="border-orange-200 bg-white shadow-lg">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <AlertTriangle className="w-8 h-8 text-orange-600" />
              </div>
              <CardTitle className="text-3xl font-bold text-orange-800 mb-2">
                Sarah's Pricing Puzzle
              </CardTitle>
              <Badge variant="secondary" className="text-sm">
                The Profit Paradox
              </Badge>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 mb-6">
                <p className="text-lg leading-relaxed text-orange-900 mb-4">
                  Sarah stared at her TechStart Solutions financial reports with growing concern. 
                  Something didn't make sense. Last month, she had landed her biggest client yet—a 
                  $5,000 website project for a local real estate company. Her total revenue was 
                  up 40% from the previous month.
                </p>
                <p className="text-lg leading-relaxed text-orange-900 mb-4">
                  But her profit? Down 15%.
                </p>
                <p className="text-lg leading-relaxed text-orange-900">
                  "How is this possible?" she asked her CPA, Jennifer Kim. "I'm bringing in more 
                  money than ever, but I'm keeping less of it. The math doesn't make sense!"
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  The Hidden Problem
                </h3>
                <p className="text-blue-800 mb-4">
                  Jennifer smiled knowingly. "Sarah, you're experiencing what many growing businesses 
                  face. You understand revenue, but you don't understand your cost structure. 
                  Some of your costs stay the same no matter how much work you do—like your office 
                  rent and insurance. But other costs grow with every project."
                </p>
                <p className="text-blue-800">
                  "You need to build a <strong>Cost-Volume-Profit model</strong>. It will show you 
                  exactly how your costs behave and help you set prices that actually make money."
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-2">Why This Matters</h3>
                <p className="text-green-800">
                  Understanding Cost-Volume-Profit (CVP) relationships isn't just about following 
                  formulas—it's about building a sustainable business. When Sarah shows investors 
                  her CVP model, they immediately see that she understands the fundamental economics 
                  of her business and can make data-driven pricing decisions.
                </p>
              </div>
            </CardContent>
          </Card>

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
                Think about Sarah's situation where revenue is up but profit is down. 
                Share with a partner:
              </p>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li>What specific costs might be growing faster than her revenue?</li>
                <li>How could understanding fixed vs. variable costs help her pricing?</li>
                <li>Why is break-even analysis crucial before expanding her business?</li>
              </ul>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card className="border-gray-200 bg-gray-50">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold text-gray-800 mb-2">Coming Up Next</h3>
              <p className="text-gray-700">
                In the Introduction phase, we'll learn the key concepts of Cost-Volume-Profit analysis 
                and understand how fixed costs, variable costs, and pricing work together to determine 
                profitability and break-even points.
              </p>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}