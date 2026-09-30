import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Calculator, Users, Lightbulb } from "lucide-react"

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-red-50">
      
      <div className="space-y-8">
        {/* Hook Introduction */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              🎯 Phase 1: Hook
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">
              Sarah's Excel Tables Challenge
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sarah stares at her computer screen, frustrated. She's been trying to calculate 
              her total cash balance for the past 20 minutes, manually adding up dozens of 
              transactions from her growing TechStart Solutions business. Every time she gets 
              a different answer.
            </p>
          </div>
        </section>

        {/* Sarah's Dilemma */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-900 flex items-center gap-2">
                <Lightbulb className="h-6 w-6" />
                The Manual Ledger Problem
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-orange-800">
                <p>
                  "There has to be a better way," she mutters, rubbing her temples. Her notebook ledger 
                  was fine when Tech had three transactions a month. Now she has thirty—and the volume is 
                  growing fast. Every time she tries to verify her work, she gets a different answer.
                </p>
                <p>
                  Next week, Sarah meets with an angel investor. He wants to see her books. Her notebook 
                  ledger will look amateurish at best—and impossible to verify without hours of cross-checking 
                  at worst. She needs professional structure, yesterday.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Before vs After Demonstration */}
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Manual Ledger vs. Excel Table: The Transformation
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-red-200">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Manual Notebook Ledger
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2 text-red-700">
                  <li>• No built-in structure or validation</li>
                  <li>• Easy to skip or duplicate entries</li>
                  <li>• No way to verify trial balance automatically</li>
                  <li>• Handwriting can be hard to read</li>
                  <li>• Looks amateurish to investors</li>
                  <li>• <strong>Result:</strong> Risky, unverifiable, unprofessional</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Excel Table Structure
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm">
                <ul className="space-y-2 text-green-700">
                  <li>• Professional headers, consistent formatting</li>
                  <li>• Built-in column filtering and sorting</li>
                  <li>• Automatic expansion when adding rows</li>
                  <li>• Structured references instead of cell addresses</li>
                  <li>• Clear, readable structure for verification</li>
                  <li>• <strong>Result:</strong> Verifiable, professional, scalable</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why This Matters */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Why This Matters for Investor Trust</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 text-lg leading-relaxed">
                Sarah's angel investor wants to see "clean books"—financial records that are 
                systematic, verifiable, and professional. Her manual notebook ledger fails on all three counts.
              </p>
              <p className="text-blue-800 text-lg leading-relaxed mt-4">
                By moving her transaction data into an Excel Table, Sarah creates the foundation of a 
                ledger that an investor can review in minutes, not hours. The structure signals serious 
                financial control. The clarity allows instant verification. This is how trust begins.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Turn and Talk Discussion */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-purple-900 mb-2">
                Discussion Prompt (3 minutes):
              </p>
              <p className="text-purple-800 mb-2">
                Think about Sarah's investor meeting next week. Share with a partner:
              </p>
              <ul className="list-disc list-inside space-y-1 text-purple-800">
                <li>Would you trust a founder who kept a handwritten notebook ledger? Why or why not?</li>
                <li>What three things does an investor need to see to feel confident about financial controls?</li>
                <li>How would moving to an Excel Table address all three investor concerns?</li>
              </ul>
              <div className="mt-4 p-3 bg-purple-100 rounded border border-purple-200">
                <p className="text-sm text-purple-700">
                  <strong>Discussion Goal:</strong> Students should connect professional Excel structure 
                  directly to investor trust and financial control standards.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Preview of Next Phase */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-gray-200 bg-gray-50">
            <CardHeader>
              <CardTitle className="text-gray-700">Coming Up Next: Introduction</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                In the next phase, you will learn the parts of an Excel Table. Lesson 5 will add SUMIF formulas.
                You'll learn the technical skills that transform Sarah's manual calculations 
                into automated precision, building the foundation of her smart ledger system.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
      
    </div>
  )
}
