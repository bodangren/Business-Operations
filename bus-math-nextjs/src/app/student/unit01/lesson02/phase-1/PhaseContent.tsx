import { Badge } from "@/components/ui/badge"

export default function Phase1Content() {

  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      
      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-blue-100 text-blue-800 text-lg px-4 py-2">
              Phase 1: Recycle and Introduce
            </Badge>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                🔄 From Lesson 01 to Today
              </h2>
              
              <p className="text-lg leading-relaxed text-blue-800 mb-4">
                Last lesson, you discovered that Sarah's TechStart Solutions operates under one unbreakable 
                rule: <strong className="text-blue-900">Assets = Liabilities + Equity</strong>. You saw 
                how the bakery payment, pet grooming work, and dental office project all fit into this 
                perfect balance.
              </p>
              
              <p className="text-lg leading-relaxed text-blue-800 mb-4">
                But here's the challenge Sarah faces now: Her business is having complex events every day. 
                She's buying equipment, taking on small debts, receiving payments, and paying expenses. 
                How can she track <strong>exactly how each event</strong> affects the equation?
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-xl font-bold text-yellow-900 mb-4">🤔 The New Problem</h3>
              
              <p className="text-lg leading-relaxed text-yellow-800 mb-4">
                Consider Sarah's situation this week:
              </p>
              
              <div className="bg-white p-4 rounded border border-yellow-300 mb-4 space-y-2">
                <p className="font-semibold text-yellow-900">Sarah's Events:</p>
                <ul className="space-y-1 text-yellow-800">
                  <li>• Bought a $1,200 computer for design work</li>
                  <li>• Took out a $500 small business loan</li>
                  <li>• Received $2,200 payment from bakery client</li>
                  <li>• Paid $300 for monthly software subscriptions</li>
                  <li>• Bought a $600 printer (agreed to pay next month)</li>
                </ul>
              </div>
              
              <p className="text-yellow-800 mb-3">
                <strong>Think about it:</strong> For each event, which parts of the accounting equation change? 
                Do assets go up? Do liabilities increase? Does equity change?
              </p>
              
              <p className="text-yellow-800">
                Sarah can't just write "money in, money out" anymore. She needs to know <strong>which 
                specific accounts</strong> are affected and <strong>how the equation stays balanced</strong> 
                through every single business event.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border-2 border-green-400 shadow-sm">
              <h3 className="text-xl font-bold text-green-900 mb-4">🎯 Today's Learning Focus</h3>
              
              <p className="text-lg leading-relaxed text-green-800 mb-4">
                We're going to solve Sarah's tracking problem by learning to:
              </p>
              
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">1</span>
                  <span><strong>Classify transactions</strong> into assets, liabilities, and equity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">2</span>
                  <span><strong>Show exactly how each business event</strong> moves the accounting equation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center font-bold text-green-700">3</span>
                  <span><strong>Verify the equation stays balanced</strong> after every transaction</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-xl font-bold text-purple-900 mb-3">💡 Why This Matters</h3>
              <p className="text-purple-800">
                Investors ask Sarah about every financial decision. When she can explain <strong>exactly how 
                each business event</strong> affects her accounting equation, she demonstrates that she 
                understands her financial picture deeply. This builds the investor confidence that "clean books" 
                are all about.
              </p>
            </div>

          </div>
        </section>
      </div>
      
    </div>
  )
}
