import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank";
import { lesson02Data, unit07Data, lesson02Phases } from "../lesson-data";

const currentPhase = lesson02Phases[1]; // Introduction phase

const depreciationSentences = [
  {
    id: "concept-1",
    text: "Depreciation is a way of {blank} the cost of a long-term asset over the years it will be used.",
    answer: "spreading",
    hint: "Like butter on toast - you distribute it evenly",
    category: "Core Concept"
  },
  {
    id: "concept-2", 
    text: "The {blank} method spreads the cost evenly over the asset's useful life.",
    answer: "Straight-Line",
    hint: "Think of a straight, even line on a graph",
    category: "SLN Method"
  },
  {
    id: "formula-1",
    text: "The Straight-Line formula is: Annual Depreciation = (Cost - {blank} Value) ÷ Useful Life",
    answer: "Salvage",
    hint: "The value you expect to get when you sell or dispose of the asset",
    category: "SLN Formula"
  },
  {
    id: "concept-3",
    text: "The {blank} Balance method charges more depreciation in the early years of an asset's life.",
    answer: "Double-Declining",
    hint: "This accelerated method declines rapidly at first",
    category: "DDB Method"
  },
  {
    id: "excel-1",
    text: "In Excel, the function {blank} calculates Straight-Line depreciation.",
    answer: "SLN",
    hint: "Three letters that stand for Straight-Line",
    category: "Excel Functions"
  },
  {
    id: "excel-2",
    text: "The Excel function {blank} calculates Double-Declining Balance depreciation.",
    answer: "DDB", 
    hint: "Three letters that match the method name",
    category: "Excel Functions"
  },
  {
    id: "business-1",
    text: "Depreciation helps match the cost of the asset to the {blank} it helps generate.",
    answer: "income",
    hint: "What businesses earn from their operations",
    category: "Business Principle"
  },
  {
    id: "tax-1",
    text: "Depreciation reduces a company's taxable income each year, which means they pay {blank} in taxes.",
    answer: "less",
    hint: "The opposite of more",
    category: "Tax Impact"
  }
];

export default function Unit07Lesson02Phase2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit07Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />

      <div className="max-w-4xl mx-auto px-4 pb-8 space-y-8">
        
        {/* Core Concept Introduction */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl text-blue-800">
              📊 Understanding Depreciation: Spreading the Cost
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed text-blue-900">
              When Sarah bought $18,000 worth of new equipment for TechStart Solutions, it was a big expense. 
              But Jennifer, her CPA, explained that it's not like buying a coffee. That equipment will last 
              for many years and help TechStart earn money over that time. So, instead of counting the whole 
              $18,000 as an expense in one go, businesses <strong>depreciate</strong> these long-term assets.
            </p>
            
            <p className="text-lg leading-relaxed text-blue-900">
              Depreciation is basically a way of spreading the cost of a long-term asset (like a building, 
              machine, or computer) over the years it will be used. Think of it like a car. You don't pay 
              for the entire car's "usefulness" in the first month. Instead, its value slowly decreases as 
              you use it over several years. Depreciation matches this idea – it recognizes that an asset's 
              value is used up over time.
            </p>

            <div className="bg-white p-4 rounded-lg border border-blue-300">
              <h3 className="font-semibold text-blue-800 mb-3">Why do businesses depreciate assets?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="space-y-2">
                  <Badge variant="outline" className="bg-green-100 text-green-800">Matching Principle</Badge>
                  <p className="text-blue-800">
                    It helps match the cost of the asset to the income it helps generate. If a machine 
                    helps you make products for five years, it makes sense to spread its cost over those five years.
                  </p>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="bg-purple-100 text-purple-800">Tax Benefits</Badge>
                  <p className="text-blue-800">
                    Depreciation reduces a company's taxable income each year, which means they pay less 
                    in taxes. This directly improves their <strong>cash flow</strong> – how much cash they have available.
                  </p>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="bg-orange-100 text-orange-800">Company Value</Badge>
                  <p className="text-blue-800">
                    It helps show the true value of a company's assets on its financial statements, 
                    which is important for investors and lenders.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Straight-Line Method */}
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-xl text-green-800">
              📏 Straight-Line (SLN) Depreciation: The Simple Method
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed text-green-900">
              The <strong>Straight-Line method</strong> is the simplest way to calculate depreciation. 
              It spreads the cost evenly over the asset's useful life, like dividing a pizza into equal slices.
            </p>

            <div className="bg-white p-4 rounded-lg border border-green-300">
              <h4 className="font-semibold text-green-800 mb-3">The Formula:</h4>
              <div className="text-center bg-gray-100 p-3 rounded text-lg font-mono">
                Annual Depreciation = (Cost - Salvage Value) ÷ Useful Life
              </div>
              <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <strong className="text-green-800">Cost:</strong> How much the asset originally cost.
                </div>
                <div>
                  <strong className="text-green-800">Salvage Value:</strong> What the asset is expected 
                  to be worth at the end of its useful life (like trade-in value).
                </div>
                <div>
                  <strong className="text-green-800">Useful Life:</strong> How many years the business 
                  expects to use the asset.
                </div>
              </div>
            </div>

            <div className="bg-blue-100 p-4 rounded-lg border border-blue-300">
              <h4 className="font-semibold text-blue-800 mb-2">TechStart Example:</h4>
              <p className="text-blue-800 mb-2">
                If TechStart buys a computer system for $3,000, expects it to be worth $300 after 3 years, 
                and plans to use it for 3 years, the calculation would be:
              </p>
              <div className="text-center bg-white p-2 rounded font-mono text-sm">
                Annual Depreciation = ($3,000 - $300) ÷ 3 = $900
              </div>
              <p className="text-blue-800 mt-2 text-sm">
                And for monthly depreciation: $900 ÷ 12 = $75 per month
              </p>
            </div>

            <p className="text-green-900">
              Straight-Line depreciation gives a <strong>predictable, steady expense</strong> each year, 
              making it easy for budgeting and financial planning.
            </p>
          </CardContent>
        </Card>

        {/* Double-Declining Balance Method */}
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-xl text-purple-800">
              ⚡ Double-Declining Balance (DDB): The Accelerated Method
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed text-purple-900">
              The <strong>Double-Declining Balance method</strong> is "accelerated," meaning it charges 
              more depreciation expense in the early years of an asset's life and less in later years. 
              This can be good for taxes because it means higher tax deductions sooner, improving cash flow.
            </p>

            <div className="bg-white p-4 rounded-lg border border-purple-300">
              <h4 className="font-semibold text-purple-800 mb-3">How it works:</h4>
              <p className="text-purple-800 mb-3">
                This method uses <strong>double</strong> the straight-line rate and applies it to the 
                asset's current book value (not the original cost). The depreciation amount gets smaller 
                each year as the book value decreases.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <Badge variant="outline" className="bg-green-100 text-green-800">Year 1</Badge>
                  <p className="text-purple-800">Highest depreciation expense</p>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800">Later Years</Badge>
                  <p className="text-purple-800">Decreasing depreciation expense</p>
                </div>
              </div>
            </div>

            <div className="bg-green-100 p-4 rounded-lg border border-green-300">
              <h4 className="font-semibold text-green-800 mb-2">Business Benefits:</h4>
              <ul className="text-green-800 space-y-1 text-sm">
                <li>• <strong>Maximum tax benefits early</strong> - reduces taxes when cash flow is most needed</li>
                <li>• <strong>Improved cash flow</strong> - more money available for business growth</li>
                <li>• <strong>Matches reality</strong> - many assets lose value quickly in early years (like technology)</li>
                <li>• <strong>Conservative approach</strong> - recognizes that newer assets are more productive</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Excel Integration */}
        <Card className="border-orange-200 bg-orange-50">
          <CardHeader>
            <CardTitle className="text-xl text-orange-800">
              💻 Excel Functions: Professional Depreciation Calculations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg leading-relaxed text-orange-900">
              In Excel, there are built-in functions to help you with these calculations, making it easy 
              to build professional depreciation schedules. Sarah will use these functions to create 
              investor-ready financial models.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-blue-300">
                <h4 className="font-semibold text-blue-800 mb-2">SLN Function</h4>
                <div className="bg-gray-100 p-2 rounded font-mono text-sm mb-2">
                  =SLN(cost, salvage, life)
                </div>
                <p className="text-blue-800 text-sm">
                  Example: =SLN(15000, 1000, 10) calculates straight-line depreciation 
                  for a $15,000 asset with $1,000 salvage value over 10 years.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-purple-300">
                <h4 className="font-semibold text-purple-800 mb-2">DDB Function</h4>
                <div className="bg-gray-100 p-2 rounded font-mono text-sm mb-2">
                  =DDB(cost, salvage, life, period)
                </div>
                <p className="text-purple-800 text-sm">
                  Example: =DDB(15000, 1000, 10, 1) calculates first-year double-declining 
                  balance depreciation for the same asset.
                </p>
              </div>
            </div>

            <p className="text-orange-900">
              You'll get hands-on practice building depreciation schedules in Excel for sample equipment, 
              comparing how the two methods affect the annual expense. You'll see how SLN gives an even 
              number each year, while DDB starts high and then goes down.
            </p>
          </CardContent>
        </Card>

        {/* Fill in the Blank Exercise */}
        <FillInTheBlank
          sentences={depreciationSentences}
          title="Depreciation Concepts Mastery"
          description="Fill in the blanks to complete these key depreciation relationships and demonstrate your understanding."
          showWordList={true}
          randomizeWordOrder={true}
          showHints={true}
        />

        {/* Why This Matters */}
        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-800">Why This Matters for TechStart Solutions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-amber-800 mb-4">
              Sarah's choice between Straight-Line and Double-Declining Balance depreciation for her $18,000 
              equipment purchase will affect her business in multiple ways:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Cash Flow Impact:</h4>
                <p className="text-amber-700">
                  DDB provides larger tax deductions early, improving cash flow when the business needs 
                  it most for growth and expansion.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-amber-800 mb-2">Investor Perspective:</h4>
                <p className="text-amber-700">
                  Understanding depreciation methods shows investors that Sarah can make sophisticated 
                  financial decisions and optimize her business's tax strategy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>

      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit07Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  );
}