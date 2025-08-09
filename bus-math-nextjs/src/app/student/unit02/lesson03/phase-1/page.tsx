import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Calendar, DollarSign } from "lucide-react"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { lesson03Data, unit02Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[0] // Phase 1

const hookQuestions = [
  {
    id: "hook1",
    question: "Why would a business like TechStart Solutions need to record revenue before sending an invoice?",
    answers: [
      "To match revenue with the period when the work was actually completed",
      "To increase the company's profits artificially",
      "To avoid paying taxes on the revenue",
      "To simplify bookkeeping by reducing the number of entries"
    ],
    explanation: "Accrual accounting requires matching revenue with the period when services are performed, not when cash is received. This provides a more accurate picture of business performance."
  },
  {
    id: "hook2", 
    question: "What accounting challenge does Sarah face when a client pays for 6 months of services in advance?",
    answers: [
      "She cannot count all the money as revenue immediately because she hasn't done all the work yet",
      "She must return the money to the client immediately",
      "She should record it all as an expense",
      "She needs to put the money in a separate bank account"
    ],
    explanation: "When payment is received for future services, it creates a liability called deferred revenue. The business owes services to the customer, not money."
  },
  {
    id: "hook3",
    question: "Why doesn't Sarah record her entire computer purchase ($3,000) as an expense in the month she bought it?",
    answers: [
      "The computer will help generate revenue over several years, so the cost should be spread over its useful life",
      "She doesn't have enough cash to cover the expense",
      "Computers are not considered business expenses",
      "She plans to sell the computer next month"
    ],
    explanation: "Depreciation matches the cost of long-term assets with the periods they help generate revenue. This provides a more accurate measure of monthly profitability."
  }
]

export default function Phase1Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <PhaseHeader 
          lesson={lesson03Data}
          unit={unit02Data} 
          phase={currentPhase}
          phases={lesson03Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Hook: The Complexity Behind Success */}
          <Card className="border-red-200 bg-red-50">
            <CardHeader>
              <CardTitle className="text-2xl text-red-800 flex items-center gap-2">
                <AlertCircle className="h-6 w-6" />
                The Moment Everything Got Complicated
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-lg max-w-none text-red-900">
                <p>
                  Sarah's TechStart Solutions was finally hitting its stride. Three months after launching with her "Smart Ledger" 
                  from Unit 1, she had landed her first monthly retainer client—a local fitness studio that needed ongoing social 
                  media management. The $1,200 monthly fee was a game-changer for her cash flow predictability.
                </p>
                
                <p>
                  But as March 31st approached, Sarah faced four situations that her basic ledger system wasn't designed to handle:
                </p>

                <div className="grid md:grid-cols-2 gap-4 not-prose">
                  <Card className="border-amber-200 bg-amber-50">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-amber-600" />
                        <Badge className="bg-amber-200 text-amber-800">Scenario 1</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-amber-900 mb-2">Work Done, Invoice Pending</h4>
                      <p className="text-sm text-amber-800">
                        Sarah completed a $500 SEO audit for a client on March 29th, but she wouldn't send the invoice 
                        until April 5th. Should this count as March revenue?
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-5 w-5 text-blue-600" />
                        <Badge className="bg-blue-200 text-blue-800">Scenario 2</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-blue-900 mb-2">Payment for Future Work</h4>
                      <p className="text-sm text-blue-800">
                        A new client paid $1,200 upfront on March 15th for six months of social media services. 
                        Can she count this as $1,200 in March revenue?
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-green-200 bg-green-50">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-green-600" />
                        <Badge className="bg-green-200 text-green-800">Scenario 3</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-green-900 mb-2">The Computer Dilemma</h4>
                      <p className="text-sm text-green-800">
                        Sarah bought a $3,000 computer system in March. Recording it all as a March expense would make 
                        her look unprofitable, but the computer will help her business for years.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border-purple-200 bg-purple-50">
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-purple-600" />
                        <Badge className="bg-purple-200 text-purple-800">Scenario 4</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-purple-900 mb-2">Month-End Reset</h4>
                      <p className="text-sm text-purple-800">
                        At month-end, she needed to "close the books"—transfer her profit to equity and reset 
                        her revenue and expense accounts to zero for April.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h3 className="font-semibold text-red-900 mb-2">Why This Matters</h3>
                  <p className="text-red-800">
                    These aren't just accounting technicalities—they're the foundation of accurate financial reporting. 
                    When Sarah eventually approaches investors or applies for business loans, they'll scrutinize her financial 
                    statements. Getting these "adjusting entries" right is what separates amateur bookkeeping from 
                    professional-grade financial records that investors can trust.
                  </p>
                </div>

                <p>
                  Each of these scenarios requires a special type of journal entry called an <strong>adjusting entry</strong>. 
                  These entries ensure Sarah's financial statements accurately reflect what really happened in March, 
                  following the accounting principles that investors and lenders expect to see.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Comprehension Check */}
          <ComprehensionCheck
            title="Understanding the Challenge"
            description="Test your understanding of why these scenarios require special accounting treatment."
            questions={hookQuestions}
            showExplanations={true}
          />

          {/* Business Impact */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800">The Stakes: Why Perfect Adjusting Entries Matter</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-lg max-w-none text-blue-900">
                <p>
                  Sarah's mentor Marcus was clear: "Investors don't just look at your revenue numbers—they look at 
                  <em>when</em> you recognize revenue and expenses. They want to see that you understand accrual accounting, 
                  because it shows you're thinking like a serious business owner, not just tracking cash in your pocket."
                </p>
                
                <p>
                  Professional financial statements require these four types of adjusting entries:
                </p>
                
                <ul className="text-blue-800">
                  <li><strong>Accruals</strong>: Recording transactions when they occur, not when cash changes hands</li>
                  <li><strong>Deferrals</strong>: Properly timing revenue and expenses across accounting periods</li>
                  <li><strong>Depreciation</strong>: Spreading asset costs over their useful lives</li>
                  <li><strong>Closing Entries</strong>: Transferring period results to permanent accounts</li>
                </ul>
                
                <p>
                  Master these concepts, and you'll have the foundation for the automated "Month-End Wizard" that can 
                  cut Sarah's closing time from days to hours—our ultimate goal for Unit 2.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>

        <PhaseFooter 
          lesson={lesson03Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson03Phases}
        />
      </div>
    </div>
  )
}