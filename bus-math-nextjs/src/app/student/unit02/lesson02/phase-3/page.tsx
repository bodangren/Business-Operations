import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import BusinessTransactionCategorization from "@/components/drag-drop/BusinessTransactionCategorization"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MapPin, CheckSquare, Star } from "lucide-react"
import { lesson02Data, unit02Data, lesson02Phases } from "../lesson-data"

export default function Unit02Lesson02Phase3() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 3)!
  
  const mappingQuestions = [
    {
      id: "map1",
      question: "For accrued revenue of $500 (work completed but not yet invoiced), the correct journal entry is:",
      answers: [
        "Debit Accounts Receivable $500, Credit Service Revenue $500",
        "Debit Service Revenue $500, Credit Accounts Receivable $500",
        "Debit Cash $500, Credit Service Revenue $500",
        "Wait until the invoice is sent to record anything"
      ]
    },
    {
      id: "map2",
      question: "When recording $75 monthly depreciation on equipment, the journal entry is:",
      answers: [
        "Debit Depreciation Expense $75, Credit Accumulated Depreciation $75",
        "Debit Equipment $75, Credit Depreciation Expense $75",
        "Debit Accumulated Depreciation $75, Credit Equipment $75",
        "Debit Depreciation Expense $75, Credit Equipment $75"
      ]
    },
    {
      id: "map3",
      question: "For deferred revenue, when Sarah earns $100 of a prepaid service package, she records:",
      answers: [
        "Debit Deferred Revenue $100, Credit Service Revenue $100",
        "Debit Service Revenue $100, Credit Deferred Revenue $100",
        "Debit Cash $100, Credit Service Revenue $100",
        "Debit Service Revenue $100, Credit Cash $100"
      ]
    }
  ]

  const adjustingEntryItems = [
    { id: '1', content: 'Debit Accounts Receivable $500', category: 'Accrued Revenue' },
    { id: '2', content: 'Credit Service Revenue $500', category: 'Accrued Revenue' },
    { id: '3', content: 'Debit Deferred Revenue $100', category: 'Deferred Revenue Adjustment' },
    { id: '4', content: 'Credit Service Revenue $100', category: 'Deferred Revenue Adjustment' },
    { id: '5', content: 'Debit Depreciation Expense $75', category: 'Depreciation Entry' },
    { id: '6', content: 'Credit Accumulated Depreciation $75', category: 'Depreciation Entry' },
    { id: '7', content: 'Debit Service Revenue $4,000', category: 'Closing Entry - Revenue' },
    { id: '8', content: 'Credit Retained Earnings $4,000', category: 'Closing Entry - Revenue' }
  ]

  const categories = [
    'Accrued Revenue',
    'Deferred Revenue Adjustment', 
    'Depreciation Entry',
    'Closing Entry - Revenue'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit02Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="prose prose-lg max-w-none">
          
          <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-lg border border-green-200 mb-8">
            <h2 className="text-2xl font-bold text-green-900 mb-4 flex items-center gap-2">
              <MapPin className="h-6 w-6" />
              Creating the Blueprint: Mapping the Four Scenarios
            </h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Before Sarah could build her automation, she needed a clear blueprint. In accounting, 
              a blueprint means knowing exactly what journal entries are required for every possible 
              situation. If the logic is wrong here, any automation built on top will also be wrong.
            </p>

            <div className="bg-white p-4 rounded border-l-4 border-green-400">
              <p className="font-bold text-green-900 mb-2">The Critical First Step:</p>
              <p className="text-green-800">
                Mapping out the debits and credits for every type of adjusting entry she would 
                face at month-end. This manual mapping process ensures the automation logic 
                will be absolutely correct.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800 flex items-center gap-2">
                  <CheckSquare className="h-5 w-5" />
                  Scenario 1: Accrued Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 mb-3">
                  <strong>Situation:</strong> At month-end, Sarah finished a $500 SEO audit 
                  but won't invoice until next month.
                </p>
                <div className="bg-white p-3 rounded border border-blue-200 font-mono text-sm">
                  <p className="text-blue-900">Debit: Accounts Receivable $500</p>
                  <p className="text-blue-900">Credit: Service Revenue $500</p>
                </div>
                <p className="text-blue-700 text-sm mt-2">
                  This correctly shows March performance, even though cash hasn't arrived.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800 flex items-center gap-2">
                  <CheckSquare className="h-5 w-5" />
                  Scenario 2: Deferred Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-800 mb-3">
                  <strong>Situation:</strong> Client paid $1,200 for six months. By month-end, 
                  Sarah earned half a month ($100).
                </p>
                <div className="bg-white p-3 rounded border border-purple-200 font-mono text-sm">
                  <p className="text-purple-900">Debit: Deferred Revenue $100</p>
                  <p className="text-purple-900">Credit: Service Revenue $100</p>
                </div>
                <p className="text-purple-700 text-sm mt-2">
                  Reduces liability and recognizes the portion she has earned.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-orange-800 flex items-center gap-2">
                  <CheckSquare className="h-5 w-5" />
                  Scenario 3: Depreciation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-800 mb-3">
                  <strong>Situation:</strong> Monthly depreciation on Sarah's computer 
                  equipment is $75.
                </p>
                <div className="bg-white p-3 rounded border border-orange-200 font-mono text-sm">
                  <p className="text-orange-900">Debit: Depreciation Expense $75</p>
                  <p className="text-orange-900">Credit: Accumulated Depreciation $75</p>
                </div>
                <p className="text-orange-700 text-sm mt-2">
                  Records the expense while keeping original asset cost on books.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-red-800 flex items-center gap-2">
                  <CheckSquare className="h-5 w-5" />
                  Scenario 4: Closing Entries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-800 mb-3">
                  <strong>Situation:</strong> Reset temporary accounts. $4,000 revenue, 
                  $1,500 expenses.
                </p>
                <div className="bg-white p-3 rounded border border-red-200 font-mono text-sm">
                  <p className="text-red-900">Debit: Service Revenue $4,000</p>
                  <p className="text-red-900">Credit: Retained Earnings $4,000</p>
                  <p className="text-red-900 mt-1">Debit: Retained Earnings $1,500</p>
                  <p className="text-red-900">Credit: Various Expenses $1,500</p>
                </div>
                <p className="text-red-700 text-sm mt-2">
                  Net effect: $2,500 profit moves to equity.
                </p>
              </CardContent>
            </Card>
          </div>

          <ComprehensionCheck 
            questions={mappingQuestions}
            title="Journal Entry Logic Check"
            showExplanations={true}
          />

          <BusinessTransactionCategorization />

          <Card className="border-yellow-200 bg-yellow-50 mt-8">
            <CardHeader>
              <CardTitle className="text-yellow-800 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Turn and Talk: Peer Review
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-yellow-900 mb-2">
                Discussion Prompt (5 minutes):
              </p>
              <p className="text-yellow-800 mb-3">
                Compare your mapping results with a partner. For each scenario, discuss:
              </p>
              <ul className="list-disc list-inside space-y-1 text-yellow-800 mb-4">
                <li>Why does this debit/credit combination make logical sense?</li>
                <li>How does this entry follow the accounting equation (A = L + E)?</li>
                <li>What would happen if we reversed the debit and credit?</li>
              </ul>
              
              <div className="bg-white p-4 rounded border border-yellow-200">
                <p className="text-yellow-900 font-medium mb-2 flex items-center gap-2">
                  <Star className="h-4 w-4" />
                  Peer Review Goal:
                </p>
                <p className="text-yellow-800 text-sm">
                  Ensure your blueprint logic is solid before moving to the gallery walk. 
                  Catching errors now saves hours of debugging automation later!
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200 mt-6">
            <h3 className="text-xl font-bold text-green-900 mb-3">🎯 Milestone Achievement</h3>
            <p className="text-green-800">
              You've successfully mapped the four essential scenarios for month-end automation. 
              This blueprint becomes the logical foundation for the Month-End Wizard you'll build. 
              In the next phase, you'll get peer feedback to ensure this foundation is rock-solid!
            </p>
          </div>
        </div>
      </div>
      
      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit02Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}