import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"
import { lesson01Data, unit01Data, lesson01Phases } from "../lesson-data"

export default function Phase5Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 5)!

  const assessmentQuestions = [
    {
      id: 'q1',
      question: 'Which statement best explains why Sarah\'s notebook system creates a credibility problem with potential investors?',
      answers: [
        'Investors cannot quickly verify the accuracy, completeness, or mathematical consistency of financial records',
        'Notebooks look unprofessional compared to digital systems',
        'Handwritten records take too long to read through',
        'The notebook pages might get lost or damaged'
      ],
      explanation: 'Investor credibility requires verifiable, accurate, and mathematically sound financial records. A notebook system cannot provide the instant verification, error-checking, and organized presentation that investors need for due diligence.'
    },
    {
      id: 'q2',
      question: 'What is the primary business risk that Sarah faces by continuing to use her current record-keeping system as TechStart Solutions grows?',
      answers: [
        'She will be unable to make informed business decisions or demonstrate financial competence to stakeholders',
        'Her handwriting will become illegible over time',
        'She will need to buy more notebooks and pens',
        'Her clients will expect digital invoices instead of handwritten ones'
      ],
      explanation: 'The core business risk is decision-making paralysis and stakeholder confidence loss. Without organized, accurate financial data, Sarah cannot make informed strategic decisions, prepare for taxes, secure funding, or demonstrate professional business management.'
    },
    {
      id: 'q3',
      question: 'How does a "self-auditing" ledger system address the fundamental challenges Sarah faces?',
      answers: [
        'It automatically organizes transactions, checks mathematical accuracy, and provides instant financial insights that build investor confidence',
        'It makes Sarah\'s business look more modern and technological',
        'It reduces the physical storage space needed for business records',
        'It allows Sarah to work from anywhere without carrying notebooks'
      ],
      explanation: 'A self-auditing system solves the core problems: automatic organization eliminates chaos, mathematical checking prevents errors, and instant insights enable informed decision-making while demonstrating professional financial management to investors.'
    },
    {
      id: 'q4',
      question: 'Based on what you\'ve learned about TechStart Solutions, what would be the most convincing evidence to show an angel investor that Sarah keeps "clean books"?',
      answers: [
        'Instantly accessible financial reports with automatic error-checking that shows mathematical accuracy and complete transaction tracking',
        'Neat, handwritten ledger books with color-coded sections',
        'Digital photos of all receipts organized in folders',
        'A simple spreadsheet with transaction dates and amounts'
      ],
      explanation: 'Clean books require three key elements: instant accessibility (for quick due diligence), automatic error-checking (for mathematical accuracy), and complete transaction tracking (for comprehensive financial picture). This demonstrates professional financial control systems.'
    },
    {
      id: 'q5',
      question: 'What business transaction understanding is essential for building any professional ledger system?',
      answers: [
        'Every transaction must be properly categorized and tracked to provide accurate financial insights and support business decision-making',
        'All transactions should be recorded in chronological order',
        'Digital transactions are more important than cash transactions',
        'Revenue transactions are more important than expense transactions'
      ],
      explanation: 'Professional ledger systems require proper categorization and tracking of all transactions to provide accurate, comprehensive financial insights. This enables informed business decisions and builds stakeholder confidence in the financial management system.'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader 
          lesson={lesson01Data}
          unit={unit01Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Assessment Introduction */}
          <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-orange-600 text-white">Assessment</Badge>
                <CardTitle className="text-orange-800 dark:text-orange-200">
                  Demonstrate Your Understanding: Business Transaction Categorization and Investment Readiness
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-orange max-w-none">
                <p className="text-lg leading-relaxed">
                  This assessment evaluates your understanding of the core concepts from today's lesson: 
                  TechStart Solutions' business model, the challenges of manual record-keeping, and the 
                  importance of financial credibility for investor confidence.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Demonstrate that you can analyze business scenarios from both an operational and investor 
                  perspective, and explain why Sarah needs a Smart Ledger system to build a successful, 
                  investment-ready business.
                </p>

                <div className="bg-white p-4 rounded-lg border-2 border-orange-300 mt-6">
                  <h4 className="font-semibold text-orange-800 mb-2">Assessment Focus Areas:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Understanding TechStart Solutions' business model and transaction types</li>
                    <li>• Analyzing the challenges and risks of manual record-keeping systems</li>
                    <li>• Explaining investor credibility requirements and "clean books" concept</li>
                    <li>• Connecting business transaction categorization to professional financial management</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Assessment Questions */}
          <Card className="border-red-200 bg-red-50 dark:bg-red-950/10">
            <CardHeader>
              <CardTitle className="text-red-800 dark:text-red-200">
                Formative Assessment: Business Analysis and Financial Credibility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-lg">
                  Answer these questions thoughtfully, drawing on everything you've learned about Sarah's challenge 
                  and the business requirements for investor-ready financial systems.
                </p>
              </div>
              <ComprehensionCheck 
                questions={assessmentQuestions}
                title="Unit 1 Lesson 1 Assessment"
                description="Demonstrate your understanding of business transactions, financial credibility, and professional ledger systems"
                showExplanations={true}
              />
            </CardContent>
          </Card>

          {/* Peer Review Assessment */}
          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
            <CardHeader>
              <CardTitle className="text-purple-800 dark:text-purple-200">
                Peer Assessment: Business Scenario Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg">
                  Work with a partner to evaluate each other's understanding of the key concepts. 
                  Use this structured peer review process:
                </p>

                <div className="bg-white p-6 rounded-lg border">
                  <h4 className="font-semibold mb-3 text-purple-800">Partner Discussion Scenarios</h4>
                  <p className="text-sm mb-4">
                    Take turns explaining these scenarios to your partner. Your partner should evaluate 
                    your explanations using the criteria below.
                  </p>
                  
                  <div className="grid gap-4">
                    <div className="bg-purple-100 p-4 rounded">
                      <h5 className="font-semibold text-purple-800">Scenario A:</h5>
                      <p className="text-sm">
                        Explain to your partner why Sarah's notebook system would fail an investor due diligence review. 
                        Include specific examples of what investors need and why notebooks can't provide it.
                      </p>
                    </div>
                    
                    <div className="bg-purple-100 p-4 rounded">
                      <h5 className="font-semibold text-purple-800">Scenario B:</h5>
                      <p className="text-sm">
                        Describe what makes a ledger system "self-auditing" and explain how this addresses Sarah's 
                        core business challenges. Give specific examples of automatic features that would help.
                      </p>
                    </div>
                  </div>
                </div>

                <PeerCritiqueForm 
                  projectTitle="Smart Ledger Analysis"
                  peerName="Peer Name"
                  unitNumber={1}
                />
              </div>
            </CardContent>
          </Card>

          {/* Self-Assessment Reflection */}
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
            <CardHeader>
              <CardTitle className="text-blue-800 dark:text-blue-200">
                Self-Assessment: Learning Reflection
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg">
                  Complete this self-assessment to reflect on your learning and identify areas for continued growth:
                </p>
                
                <div className="grid gap-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2 text-blue-800">Confidence Check</h4>
                    <p className="text-sm mb-2">Rate your confidence (1-5 scale) in these areas:</p>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• Understanding TechStart Solutions' business model and services</li>
                      <li>• Explaining why manual record-keeping creates business risks</li>
                      <li>• Analyzing scenarios from an investor's perspective</li>
                      <li>• Connecting transaction categorization to professional financial management</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2 text-blue-800">Key Insights</h4>
                    <p className="text-sm">What was the most important thing you learned about business financial management today?</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2 text-blue-800">Application Thinking</h4>
                    <p className="text-sm">How might these concepts apply to other businesses you know about (restaurants, stores, services)?</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Assessment Summary */}
          <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200">
                Assessment Complete: Ready for Next Steps
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-green max-w-none">
                <p className="text-lg leading-relaxed">
                  You have successfully demonstrated your understanding of the foundational concepts that drive 
                  this entire unit. You understand Sarah's business challenge, can analyze it from multiple perspectives, 
                  and recognize why professional financial management systems are essential for business success.
                </p>
                <p className="text-lg leading-relaxed">
                  In the final phase of today's lesson, we'll synthesize these learnings and preview the exciting 
                  journey ahead as we help Sarah build her Smart Ledger system step by step.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <PhaseFooter 
          lesson={lesson01Data}
          unit={unit01Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}