import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import MethodRecommendationStudio from "../MethodRecommendationStudio"
import { Briefcase, TrendingUp, Users } from "lucide-react"
import { lesson03Data, unit07Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[3] // Independent Practice phase

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <PhaseHeader lesson={lesson03Data} unit={unit07Data} phase={currentPhase} phases={lesson03Phases} />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-purple-100 text-purple-800 text-lg px-4 py-2">
              Phase 4: Independent Practice
            </Badge>
            <h1 className="text-3xl font-bold text-slate-900">Inventory Valuation Challenge</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Now you'll apply what you've learned about FIFO and LIFO to a new scenario — independently, with minimal guidance. This is your chance to demonstrate mastery.
            </p>
          </div>
        </section>

        {/* Business Context */}
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="text-slate-900 flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              New Scenario: Sarah's Software Training Kits
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700">
              Sarah has expanded her business to offer software installation and training packages for premium clients. 
              Over the past month, she's tracked her inventory purchases carefully. Each purchase came at a different cost as demand increased.
            </p>
            <p className="text-slate-700">
              Now she needs to calculate her Cost of Goods Sold and Ending Inventory for the month. She's considering 
              which inventory method would be best for an upcoming investor presentation.
            </p>
            <div className="bg-slate-50 p-4 rounded border border-slate-200">
              <p className="text-sm text-slate-600">
                <strong>Your task:</strong> Calculate both FIFO and LIFO values independently, then make a recommendation 
                for which method Sarah should use when presenting to investors.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Key Reminders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-green-200 bg-green-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-green-900 text-base flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                FIFO Reminder
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-green-800">
                First-In, First-Out: Assign the <strong>oldest costs first</strong> to COGS. Work from the earliest 
                purchase to the latest until you've accounted for all units sold.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-red-200 bg-red-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-red-900 text-base flex items-center gap-2">
                <TrendingUp className="h-4 w-4 rotate-180" />
                LIFO Reminder
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-red-800">
                Last-In, First-Out: Assign the <strong>newest costs first</strong> to COGS. Work from the latest 
                purchase backward until you've accounted for all units sold.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Interactive Worksheet */}
        <MethodRecommendationStudio />

        {/* Professional Context */}
        <Card className="border-slate-200 bg-white">
          <CardHeader>
            <CardTitle className="text-slate-900 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Why This Matters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700">
              The method you recommend for Sarah depends on her goals. In real businesses, accountants and managers 
              make these decisions based on multiple factors:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-blue-50 rounded border border-blue-200">
                <h4 className="font-semibold text-blue-900 text-sm">For Investors</h4>
                <p className="text-sm text-blue-800">
                  Higher profits and higher inventory values often make the business appear more valuable 
                  and financially healthy.
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded border border-green-200">
                <h4 className="font-semibold text-green-900 text-sm">For Taxes</h4>
                <p className="text-sm text-green-800">
                  Lower reported profits mean lower taxable income, which can preserve cash for 
                  reinvestment in the business.
                </p>
              </div>
              <div className="p-3 bg-purple-50 rounded border border-purple-200">
                <h4 className="font-semibold text-purple-900 text-sm">For Cash Flow</h4>
                <p className="text-sm text-purple-800">
                  The actual cash spent on inventory doesn't change—only how it's reported. 
                  Both methods track the same real cash outflows.
                </p>
              </div>
              <div className="p-3 bg-amber-50 rounded border border-amber-200">
                <h4 className="font-semibold text-amber-900 text-sm">For Consistency</h4>
                <p className="text-sm text-amber-800">
                  Once a business chooses a method, they must use it consistently year after year 
                  (with rare exceptions).
                </p>
              </div>
            </div>
            <p className="text-slate-600 text-sm italic">
              Note: LIFO is not permitted under International Financial Reporting Standards (IFRS). 
              It's only allowed under U.S. GAAP.
            </p>
          </CardContent>
        </Card>
      </main>
      
      <PhaseFooter lesson={lesson03Data} unit={unit07Data} phase={currentPhase} phases={lesson03Phases} />
    </div>
  )
}