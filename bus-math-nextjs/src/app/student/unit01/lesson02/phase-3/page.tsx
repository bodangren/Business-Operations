import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { DragAndDrop } from "@/components/exercises/DragAndDrop"
import AccountCategorization from "@/components/drag-drop-exercises/AccountCategorization"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"
import { lesson02Data, unit01Data, lesson02Phases } from "../lesson-data"

export default function Unit01Lesson02Phase3() {
  const currentPhase = lesson02Phases.find(p => p.sequence === 3)!
  const practiceQuestions = [
    {
      id: "q1",
      question: "Sarah buys a $1,200 computer and pays cash. How does this transaction affect the accounting equation?",
      answers: [
        "One asset (cash) decreases by $1,200, another asset (computer) increases by $1,200",
        "Assets increase by $1,200, equation goes out of balance",
        "Liabilities increase by $1,200",
        "Equity decreases by $1,200"
      ],
      explanation: "This is an asset-to-asset transaction. Cash (asset) decreases by $1,200 while Computer Equipment (asset) increases by $1,200. Total assets remain the same, so the equation stays balanced."
    },
    {
      id: "q2",
      question: "If Sarah takes out a $5,000 business loan and deposits it into her business account, what happens?",
      answers: [
        "Assets increase by $5,000 and liabilities increase by $5,000",
        "Only assets increase",
        "Equity increases by $5,000", 
        "The equation becomes unbalanced"
      ],
      explanation: "Cash (assets) increases by $5,000 because money entered the business account. Bank Loan Payable (liabilities) also increases by $5,000 because the business now owes this money. Both sides of the equation increase equally."
    }
  ]

  const dragDropItems = [
    { id: "cash", content: "Cash in Bank Account", category: "Assets" },
    { id: "computer", content: "Computer Equipment", category: "Assets" },
    { id: "receivables", content: "Money Clients Owe Us", category: "Assets" },
    { id: "loan", content: "Bank Loan", category: "Liabilities" },
    { id: "printer-debt", content: "Amount Owed on Printer", category: "Liabilities" },
    { id: "subscription", content: "Software Subscription Due", category: "Liabilities" },
    { id: "owner-investment", content: "Sarah's Initial Investment", category: "Equity" },
    { id: "business-profits", content: "Accumulated Profits", category: "Equity" }
  ]

  const categories = ["Assets", "Liabilities", "Equity"]

  return (
    <div className="min-h-screen bg-gray-50">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="prose prose-lg max-w-none">
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-8">
            <h2 className="text-2xl font-bold text-green-900 mb-4">🎯 Practice with Sarah's Business</h2>
            
            <p className="text-lg leading-relaxed mb-4">
              Now that we understand the three components of the accounting equation, let's practice 
              identifying them in Sarah's TechStart Solutions. Remember:
            </p>

            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-white p-3 rounded border">
                <p className="font-bold text-green-700">Assets</p>
                <p className="text-sm">What we OWN</p>
              </div>
              <div className="bg-white p-3 rounded border">
                <p className="font-bold text-red-700">Liabilities</p>
                <p className="text-sm">What we OWE</p>
              </div>
              <div className="bg-white p-3 rounded border">
                <p className="font-bold text-purple-700">Equity</p>
                <p className="text-sm">Owner's STAKE</p>
              </div>
            </div>
          </div>

          <AccountCategorization />

          <Card className="border-blue-200 bg-blue-50 mb-6">
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
                Work with a partner to discuss these scenarios:
              </p>
              <ul className="list-disc list-inside space-y-1 text-blue-800">
                <li>Sarah receives $1,100 from the dental office. What changes and why?</li>
                <li>Sarah buys $200 worth of design software and agrees to pay next month. What happens to each component?</li>
                <li>How would you explain the "perfect balance" concept to someone who has never heard of accounting?</li>
              </ul>
            </CardContent>
          </Card>

          <DragAndDrop
            title="Categorize TechStart's Financial Elements"
            items={dragDropItems}
            categories={categories}
            instructions="Drag each item to the correct category in the accounting equation. Think about whether Sarah's business owns it, owes it, or if it represents her ownership stake."
          />

          <ComprehensionCheck 
            questions={practiceQuestions}
            title="Guided Practice Check"
            showExplanations={true}
          />

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-bold text-yellow-900 mb-3">🔑 Key Insight</h3>
            <p className="text-yellow-800">
              Every transaction affects <strong>at least two</strong> components of the equation, 
              but the equation <strong>always stays balanced</strong>. This is why it's called 
              "double-entry" bookkeeping - there are always two sides to every financial story.
            </p>
          </div>
        </div>
      </div>
      
      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  )
}