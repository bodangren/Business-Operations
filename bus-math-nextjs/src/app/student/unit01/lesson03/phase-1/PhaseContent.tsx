import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Lightbulb } from 'lucide-react'
import { TAccountSimple } from "@/components/accounting/TAccountSimple"

const cashTAccount = {
  accountName: "Cash",
  accountType: "asset" as const,
  debits: [
    {
      id: "debit-1",
      date: "Jan 5",
      description: "Service Revenue - Bakery website",
      amount: 2200,
      reference: "Invoice #001"
    }
  ],
  credits: [
    {
      id: "credit-1", 
      date: "Jan 8",
      description: "Rent Expense",
      amount: 800,
      reference: "Check #101"
    }
  ]
}

export default function Phase1Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-blue-50">
      
      <div className="space-y-8">
        {/* Hook Introduction */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-red-100 text-red-800 text-lg px-4 py-2">
              🎯 Phase 1: Hook
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900">
              The Logic Behind Left and Right
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sarah's been learning about the accounting equation, but now she's confused by all the 
              "Dr." and "Cr." markings in her accounting examples. Let's discover the elegant system 
              that accountants have used for centuries to keep perfect financial records.
            </p>
          </div>

          {/* Sarah's Dilemma */}
          <Card className="border-orange-200 bg-orange-50 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-orange-900 flex items-center gap-2">
                <Lightbulb className="h-6 w-6" />
                Sarah's T-Account Discovery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-orange-800">
                <p>
                  Sarah sits at her desk, staring at her accounting textbook with a puzzled expression. 
                  She understands that <strong>Assets = Liabilities + Equity</strong>, but now every 
                  example shows these strange T-shaped diagrams with "Dr." and "Cr." written everywhere.
                </p>
                <p>
                  "What do these abbreviations even mean?" she wonders. "And why does everything have 
                  to be split into left and right sides? There must be some logic to this system that 
                  makes it so universally used by accountants."
                </p>
                <p>
                  Little does Sarah know, she's about to discover one of the most elegant organizational 
                  systems ever created for business—one that will transform her messy notebook tracking 
                  into a professional, self-auditing ledger system.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* T-Account Visualization */}
          <div className="max-w-4xl mx-auto">
            <TAccountSimple 
              {...cashTAccount}
              title="Sarah's Cash Account Example"
              showBalance={true}
              showFormulas={true}
            />
          </div>

          {/* Why This Matters */}
          <Card className="border-blue-200 bg-blue-50 max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-blue-900">Why This Matters</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 text-lg leading-relaxed">
                Understanding debits and credits isn't just about following accounting rules—it's about 
                building the systematic thinking that investors and lenders look for in entrepreneurs. 
                When Sarah can explain why every transaction has two sides and demonstrate this with 
                T-accounts, she shows that she truly understands how money flows through her business. 
                This foundational knowledge will allow her to build Excel models that automatically 
                catch errors and maintain the perfect balance that gives investors confidence.
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
                Look at Sarah's Cash T-Account above and discuss with a partner:
              </p>
              <ul className="list-disc list-inside space-y-1 text-purple-800">
                <li>Why do you think the $2,200 from the bakery is on the left side?</li>
                <li>Why is the $800 rent payment on the right side?</li>
                <li>What pattern do you notice between "receiving money" versus "spending money"?</li>
                <li>How might this left/right system help Sarah catch errors in her records?</li>
              </ul>
              <div className="mt-4 p-3 bg-purple-100 rounded border border-purple-200">
                <p className="text-sm text-purple-700">
                  <strong>Discussion Goal:</strong> Students should begin to see that there's a logical 
                  pattern to the left/right placement that relates to increases and decreases in different 
                  types of accounts.
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
                In the next phase, we'll uncover the systematic rules that determine which side of the 
                T-account each transaction belongs on. You'll learn the DEA LER acronym that professional 
                accountants use to remember debit and credit rules, and see how Sarah can apply these 
                rules to confidently record any business transaction.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
      
    </div>
  )
}