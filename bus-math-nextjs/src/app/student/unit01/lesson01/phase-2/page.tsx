import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { BusinessTransactionCategorization } from "@/components/drag-drop/BusinessTransactionCategorization"
import FillInTheBlank from "@/components/exercises/FillInTheBlank"
import { lesson01Data, unit01Data, lesson01Phases } from "../lesson-data"

export default function Phase2Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 2)!

  const businessModelQuestions = [
    {
      id: 'q1',
      question: 'What services does TechStart Solutions offer to clients?',
      answers: [
        'Website design, social media setup, and SEO work',
        'Only website development',
        'Software programming and app development',
        'Digital advertising and email marketing'
      ],
      explanation: 'TechStart Solutions offers three main services: website design (like the $2,200 bakery project), social media setup (like the $650 pet grooming project), and SEO work (like the $1,100 dental office project).'
    },
    {
      id: 'q2',
      question: 'What was Sarah\'s main problem with her record-keeping system?',
      answers: [
        'She tracked everything by hand in notebooks',
        'She used too many different software programs',
        'She forgot to invoice her clients',
        'She didn\'t understand her business expenses'
      ],
      explanation: 'Sarah was tracking every payment, invoice, and subscription by scribbling it down in notebooks, thinking she could keep it all straight in her head, which quickly became overwhelming.'
    },
    {
      id: 'q3',
      question: 'Why is having "clean books" essential for investor confidence?',
      answers: [
        'It shows the business owner is organized and trustworthy',
        'Investors want to see neat handwriting',
        'Clean books are required by law',
        'It makes the business look more profitable'
      ],
      explanation: 'Clean books demonstrate that the business owner is organized, detail-oriented, and have established proper financial controls, which gives investors confidence in the business\'s credibility and management.'
    }
  ]

  const vocabularySentences = [
    {
      id: 'vocab1',
      text: "A {blank} is any business event that involves money and affects the company's financial position.",
      answer: 'transaction',
      hint: "A business exchange or activity involving money"
    },
    {
      id: 'vocab2',
      text: "{blank} refers to having organized, accurate, and trustworthy financial records that can be easily understood by accountants and investors.",
      answer: 'Clean books',
      hint: "Professional, organized financial records"
    },
    {
      id: 'vocab3',  
      text: "Sarah's driving question is: How can we design a {blank} ledger that would convince a potential angel investor we keep clean books from day 1?",
      answer: 'self-auditing',
      hint: "A system that automatically checks its own accuracy"
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
          {/* Complete Sarah's Story - Textbook Content */}
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-600 text-white">Core Concepts</Badge>
                <CardTitle className="text-blue-800 dark:text-blue-200">
                  The Foundation of Business Success: Building Trust Through Financial Systems
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed">
                  Welcome to the world of business operations! It's a place where a great idea needs a great plan to succeed. 
                  This unit is all about building one of the most important parts of that plan: a trustworthy system for managing money. 
                  To guide us, we'll follow the story of a new entrepreneur named Sarah Chen, the founder of a digital marketing startup called TechStart Solutions.
                </p>

                <h3 className="text-xl font-semibold text-blue-800 mt-8">Sarah's Initial Success</h3>
                <p className="text-lg leading-relaxed">
                  When Sarah first launched her company, the feeling was incredible. She was passionate and talented, and clients noticed. 
                  She landed three projects back-to-back: a new website for a local bakery worth $2,200, a social media setup for a pet grooming service for $650, 
                  and search engine optimization (SEO) work for a dental office for $1,100. The money was coming in, and it felt like her dream was becoming a reality.
                </p>

                <div className="bg-white p-6 rounded-lg border-2 border-blue-300 my-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-4">TechStart Solutions' Services & Revenue</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                      <h5 className="font-semibold text-green-800">Website Design</h5>
                      <p className="text-sm text-green-600">Local Bakery Project</p>
                      <p className="text-2xl font-bold text-green-800">$2,200</p>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                      <h5 className="font-semibold text-orange-800">Social Media Setup</h5>
                      <p className="text-sm text-orange-600">Pet Grooming Service</p>
                      <p className="text-2xl font-bold text-orange-800">$650</p>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                      <h5 className="font-semibold text-purple-800">SEO Optimization</h5>
                      <p className="text-sm text-purple-600">Dental Office Project</p>
                      <p className="text-2xl font-bold text-purple-800">$1,100</p>
                    </div>
                  </div>
                  <div className="text-center mt-4 p-3 bg-blue-100 rounded-lg">
                    <p className="text-lg font-bold text-blue-800">Total Revenue: $3,950</p>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-blue-800 mt-8">The Hidden Crisis</h3>
                <p className="text-lg leading-relaxed">
                  But as Sarah herself admits, there was chaos behind the curtain. While she was focused on delivering great work for her clients, 
                  her own business records were a disaster. She was tracking every payment, every invoice, and every small software subscription by 
                  scribbling it down in a notebook. She thought she could keep it all straight in her head, but she quickly felt overwhelmed.
                </p>

                <p className="text-lg leading-relaxed">
                  The real wake-up call came when she started thinking about taxes. Looking at her stack of notebooks, a wave of panic hit her. 
                  How could she possibly pull accurate numbers from that mess? If an accountant asked for a specific receipt, would it take her a week to find it? 
                  She realized her system wasn't just messy; it was a huge risk to her business.
                </p>

                <h3 className="text-xl font-semibold text-blue-800 mt-8">Our Challenge</h3>
                <p className="text-lg leading-relaxed">
                  This is the exact challenge we are taking on. Our driving question for this entire unit is this: 
                  <strong>"How can we design a self-auditing ledger that would convince a potential angel investor we keep 'clean books' from day 1?"</strong> 
                  Sarah's story is our case study. We are going to step in and help her build the system she needs.
                </p>

                <p className="text-lg leading-relaxed">
                  Before you can build, however, you must understand the fundamental language of business. The disconnect between Sarah's operational success 
                  and her financial chaos illustrates a critical truth: even the most talented entrepreneurs can face serious business risks without proper 
                  financial systems. This is why investors, lenders, and business partners all look for evidence of "clean books" before they're willing 
                  to trust their money with a business.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* The Financial Credibility Challenge */}
          <Card className="border-red-200 bg-red-50 dark:bg-red-950/10">
            <CardHeader>
              <CardTitle className="text-red-800 dark:text-red-200">
                The Financial Credibility Crisis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-red max-w-none">
                <p className="text-lg leading-relaxed">
                  Sarah's wake-up call came when she realized her notebook system wasn't just messy—it was a huge risk to her business. 
                  Think about what happens when you need to demonstrate financial credibility:
                </p>

                <div className="bg-white p-6 rounded-lg border-2 border-red-300 my-6">
                  <h4 className="text-lg font-semibold text-red-800 mb-4">Critical Questions Every Business Must Answer:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Tax Preparation:</strong> How can you calculate accurate tax liability from scattered notebook entries?</li>
                    <li>• <strong>Investor Presentations:</strong> What numbers would you show a potential investor or lender?</li>
                    <li>• <strong>Financial Decision-Making:</strong> How do you know if you're actually profitable?</li>
                    <li>• <strong>Audit Readiness:</strong> Can you quickly find specific receipts and supporting documentation?</li>
                  </ul>
                </div>

                <p className="text-lg leading-relaxed">
                  This is why our driving question for the entire unit is: <strong>"How can we design a self-auditing ledger 
                  that would convince a potential angel investor we keep 'clean books' from day 1?"</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Business Transaction Categorization Exercise */}
          <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
            <CardHeader>
              <CardTitle className="text-green-800 dark:text-green-200">
                Interactive Exercise: Categorize TechStart's Business Transactions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg mb-4">
                Practice identifying and categorizing the types of business transactions that Sarah needs to track in her Smart Ledger:
              </p>
              <BusinessTransactionCategorization />
            </CardContent>
          </Card>

          {/* Comprehension Check */}
          <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950/10">
            <CardHeader>
              <CardTitle className="text-amber-800 dark:text-amber-200">
                Comprehension Check: TechStart Solutions Business Model
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ComprehensionCheck questions={businessModelQuestions} />
            </CardContent>
          </Card>

          {/* Vocabulary Building */}
          <Card className="border-indigo-200 bg-indigo-50 dark:bg-indigo-950/10">
            <CardHeader>
              <CardTitle className="text-indigo-800 dark:text-indigo-200">
                Key Business Vocabulary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FillInTheBlank 
                sentences={vocabularySentences}
                title="Key Vocabulary Practice"
                description="Fill in the blanks to complete these important accounting terms and concepts"
              />
            </CardContent>
          </Card>

          {/* Turn and Talk Discussion */}
          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
            <CardHeader>
              <CardTitle className="text-purple-800 dark:text-purple-200">
                Turn and Talk: Connect to Real Experience
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg">
                  Discuss with a partner using these business-focused prompts:
                </p>
                <div className="grid gap-4">
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">Business Credibility:</h4>
                    <p className="text-sm">If you were an investor considering giving Sarah $50,000, what financial information would you want to see? Why would organized records matter to you?</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border">
                    <h4 className="font-semibold mb-2">Transaction Tracking:</h4>
                    <p className="text-sm">Think of a business you know (restaurant, store, service provider). What kinds of transactions do they need to track daily? How might poor record-keeping hurt their business?</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Looking Ahead */}
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
            <CardHeader>
              <CardTitle className="text-blue-800 dark:text-blue-200">
                Building Toward the Solution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-blue max-w-none">
                <p className="text-lg leading-relaxed">
                  You now understand TechStart Solutions' business model and the critical importance of financial credibility. 
                  In the next phase, we'll begin building the foundation Sarah needs by exploring how business transactions 
                  should be properly categorized and tracked in a professional ledger system.
                </p>
                <p className="text-lg leading-relaxed">
                  Remember: Sarah's success isn't just about delivering great work to clients—it's about building systems 
                  that can support growth, attract investment, and demonstrate professional business management.
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