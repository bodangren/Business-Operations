'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowLeft, FileText, Target, BookOpen, Calculator } from 'lucide-react'

// Import exercise components
import { DragAndDrop } from '@/components/exercises/DragAndDrop'
import { FillInTheBlank } from '@/components/exercises/FillInTheBlank'
import ComprehensionCheck from '@/components/exercises/ComprehensionCheck'
import RatioMatching from '@/components/drag-drop-exercises/RatioMatching'
// TODO: Add other exercise components when they're created
// import { ReflectionJournal } from '@/components/exercises/ReflectionJournal'

// Sample data for testing DragAndDrop component
const vocabularyItems = [
  { 
    id: '1', 
    content: 'Assets', 
    matchId: '2', 
    category: 'Accounting Terms',
    hint: 'Things a business owns that have value',
    description: 'Resources controlled by the business'
  },
  { 
    id: '2', 
    content: 'Resources owned by business that have economic value', 
    matchId: '1',
    category: 'Definitions',
    hint: 'Examples include cash, equipment, inventory'
  },
  { 
    id: '3', 
    content: 'Liabilities', 
    matchId: '4',
    category: 'Accounting Terms',
    hint: 'Debts or obligations owed by the business',
    description: 'Claims against business assets'
  },
  { 
    id: '4', 
    content: 'Debts and obligations owed to others', 
    matchId: '3',
    category: 'Definitions',
    hint: 'Examples include accounts payable, loans'
  },
  { 
    id: '5', 
    content: 'Revenue', 
    matchId: '6',
    category: 'Accounting Terms',
    hint: 'Money earned from business operations',
    description: 'Income generated from business activities'
  },
  { 
    id: '6', 
    content: 'Money earned by providing goods or services', 
    matchId: '5',
    category: 'Definitions',
    hint: 'Increases owner\'s equity'
  },
  { 
    id: '7', 
    content: 'Expenses', 
    matchId: '8',
    category: 'Accounting Terms',
    hint: 'Costs incurred to generate revenue',
    description: 'Costs of doing business'
  },
  { 
    id: '8', 
    content: 'Costs incurred in the process of earning revenue', 
    matchId: '7',
    category: 'Definitions',
    hint: 'Examples include rent, salaries, utilities'
  }
]

const journalEntryItems = [
  { 
    id: '1', 
    content: 'Received $5,000 cash from customer for services', 
    matchId: '2',
    category: 'Transaction',
    hint: 'Cash increases, revenue increases',
    description: 'Service revenue transaction'
  },
  { 
    id: '2', 
    content: 'Debit Cash $5,000, Credit Service Revenue $5,000', 
    matchId: '1',
    category: 'Journal Entry',
    hint: 'Assets increase with debits, revenue increases with credits'
  },
  { 
    id: '3', 
    content: 'Purchased equipment for $3,000 on account', 
    matchId: '4',
    category: 'Transaction',
    hint: 'Equipment increases, accounts payable increases',
    description: 'Asset purchase on credit'
  },
  { 
    id: '4', 
    content: 'Debit Equipment $3,000, Credit Accounts Payable $3,000', 
    matchId: '3',
    category: 'Journal Entry',
    hint: 'Assets increase with debits, liabilities increase with credits'
  },
  { 
    id: '5', 
    content: 'Paid $1,200 cash for rent expense', 
    matchId: '6',
    category: 'Transaction',
    hint: 'Rent expense increases, cash decreases',
    description: 'Monthly expense payment'
  },
  { 
    id: '6', 
    content: 'Debit Rent Expense $1,200, Credit Cash $1,200', 
    matchId: '5',
    category: 'Journal Entry',
    hint: 'Expenses increase with debits, assets decrease with credits'
  }
]

const businessConceptItems = [
  { 
    id: '1', 
    content: 'Break-even Point', 
    matchId: '2',
    category: 'Business Term',
    hint: 'When total revenue equals total costs',
    description: 'Critical business milestone'
  },
  { 
    id: '2', 
    content: 'The point where total revenue equals total costs and profit is zero', 
    matchId: '1',
    category: 'Definition',
    hint: 'Neither profit nor loss at this point'
  },
  { 
    id: '3', 
    content: 'Cash Flow', 
    matchId: '4',
    category: 'Business Term',
    hint: 'Movement of money in and out of business',
    description: 'Liquidity measure'
  },
  { 
    id: '4', 
    content: 'The movement of money into and out of a business over time', 
    matchId: '3',
    category: 'Definition',
    hint: 'Critical for business survival'
  },
  { 
    id: '5', 
    content: 'ROI (Return on Investment)', 
    matchId: '6',
    category: 'Business Term',
    hint: 'Measures investment efficiency',
    description: 'Profitability ratio'
  },
  { 
    id: '6', 
    content: 'A measure of the gain or loss generated on an investment', 
    matchId: '5',
    category: 'Definition',
    hint: 'Usually expressed as a percentage'
  }
]

// Sample data for ComprehensionCheck component
const basicAccountingQuestions = [
  {
    id: 'q1',
    question: 'What is the fundamental accounting equation?',
    answers: [
      'Assets = Liabilities + Owner\'s Equity',
      'Assets = Revenue - Expenses',
      'Assets + Liabilities = Owner\'s Equity',
      'Assets - Liabilities = Revenue'
    ],
    explanation: 'The accounting equation must always balance. Assets (what you own) equals Liabilities (what you owe) plus Owner\'s Equity (your ownership stake).'
  },
  {
    id: 'q2',
    question: 'Which financial statement shows a company\'s profitability over a period of time?',
    answers: [
      'Income Statement',
      'Balance Sheet',
      'Statement of Cash Flows',
      'Statement of Retained Earnings'
    ],
    explanation: 'The Income Statement (also called Profit & Loss Statement) shows revenues and expenses over a specific time period to determine net income or loss.'
  },
  {
    id: 'q3',
    question: 'What does a debit entry do to an asset account?',
    answers: [
      'Increases the asset account',
      'Decreases the asset account',
      'Has no effect on the asset account',
      'Closes the asset account'
    ],
    explanation: 'In the double-entry system, debits increase asset accounts. Remember: Assets and Expenses increase with debits, while Liabilities, Equity, and Revenue increase with credits.'
  }
];

const businessMathQuestions = [
  {
    id: 'q1',
    question: 'If a product costs $80 to make and is sold for $120, what is the markup percentage?',
    answers: [
      '50%',
      '40%',
      '33.33%',
      '66.67%'
    ],
    explanation: 'Markup % = (Selling Price - Cost) / Cost × 100 = ($120 - $80) / $80 × 100 = 50%'
  },
  {
    id: 'q2',
    question: 'What is the break-even point in units if fixed costs are $10,000, variable cost per unit is $15, and selling price per unit is $25?',
    answers: [
      '1,000 units',
      '667 units',
      '400 units',
      '1,500 units'
    ],
    explanation: 'Break-even = Fixed Costs / (Selling Price - Variable Cost) = $10,000 / ($25 - $15) = $10,000 / $10 = 1,000 units'
  },
  {
    id: 'q3',
    question: 'If sales increase by 20% and the contribution margin ratio is 40%, by how much will operating income increase?',
    answers: [
      '8% of the sales increase',
      '20% of the sales increase',
      '40% of the sales increase',
      '60% of the sales increase'
    ],
    explanation: 'The increase in operating income equals the contribution margin ratio times the sales increase: 40% × 20% sales increase = 8% of total sales, or 40% of the sales increase amount.'
  }
];

const techStartQuestions = [
  {
    id: 'q1',
    question: 'Based on Sarah\'s TechStart Solutions case study, what was her biggest challenge in Month 1?',
    answers: [
      'Managing cash flow while waiting for client payments',
      'Finding enough clients to work with',
      'Hiring additional staff members',
      'Purchasing expensive equipment'
    ],
    explanation: 'Sarah had three major contracts but faced a 30-day payment cycle, creating cash flow challenges while she had immediate expenses for equipment and supplies.'
  },
  {
    id: 'q2',
    question: 'Which Excel feature would be most useful for Sarah to track multiple client projects?',
    answers: [
      'Excel Tables with filtering and sorting',
      'Basic cell formatting only',
      'Chart creation tools',
      'Macro programming'
    ],
    explanation: 'Excel Tables provide structured data organization, built-in filtering, sorting, and automatic formula expansion - perfect for tracking multiple clients and projects.'
  },
  {
    id: 'q3',
    question: 'Why is it important for Sarah to separate business and personal expenses?',
    answers: [
      'To maintain accurate financial records for tax purposes and investor presentations',
      'To make her accounting more complicated',
      'To impress her friends and family',
      'To spend more money on business items'
    ],
    explanation: 'Professional accounting practices require separation of business and personal expenses for accurate tax reporting, financial analysis, and credible investor presentations.'
  }
];

// Sample data for FillInTheBlank component
const accountingEquationSentences = [
  {
    id: '1',
    text: 'Assets = {blank} + Owner\'s Equity',
    answer: 'Liabilities',
    hint: 'What the business owes to creditors',
    category: 'Accounting Equation'
  },
  {
    id: '2',
    text: 'Revenue - Expenses = {blank}',
    answer: 'Net Income',
    alternativeAnswers: ['Net Profit', 'Profit'],
    hint: 'The bottom line on an income statement',
    category: 'Income Statement'
  },
  {
    id: '3',
    text: 'Current Assets / Current Liabilities = {blank}',
    answer: 'Current Ratio',
    hint: 'Measures liquidity and ability to pay short-term debts',
    category: 'Financial Ratios'
  },
  {
    id: '4',
    text: 'Fixed Costs / (Selling Price - Variable Cost) = {blank}',
    answer: 'Break-even Point',
    alternativeAnswers: ['Break-even Units', 'BEP'],
    hint: 'Where total revenue equals total costs',
    category: 'Cost Analysis'
  }
];

const businessFormulaSentences = [
  {
    id: '1',
    text: 'Markup Percentage = ({blank} - Cost) / Cost × 100',
    answer: 'Selling Price',
    alternativeAnswers: ['Sale Price', 'Price'],
    hint: 'The amount customers pay for the product',
    category: 'Pricing'
  },
  {
    id: '2',
    text: 'Gross Profit Margin = (Revenue - {blank}) / Revenue × 100',
    answer: 'Cost of Goods Sold',
    alternativeAnswers: ['COGS', 'Cost of Sales'],
    hint: 'Direct costs of producing goods or services',
    category: 'Profitability'
  },
  {
    id: '3',
    text: 'Inventory Turnover = Cost of Goods Sold / Average {blank}',
    answer: 'Inventory',
    alternativeAnswers: ['Stock', 'Inventory Value'],
    hint: 'The value of goods held for sale',
    category: 'Efficiency Ratios'
  },
  {
    id: '4',
    text: 'Working Capital = Current Assets - Current {blank}',
    answer: 'Liabilities',
    alternativeAnswers: ['Debts'],
    hint: 'Short-term obligations due within one year',
    category: 'Liquidity'
  }
];

const techStartSentences = [
  {
    id: '1',
    text: 'Sarah\'s biggest challenge in Month 1 was managing {blank} while waiting for client payments.',
    answer: 'cash flow',
    alternativeAnswers: ['Cash Flow', 'liquidity'],
    hint: 'The movement of money in and out of the business',
    category: 'TechStart Case Study'
  },
  {
    id: '2',
    text: 'The most useful Excel feature for tracking multiple clients would be {blank} with filtering capabilities.',
    answer: 'Excel Tables',
    alternativeAnswers: ['Tables', 'Data Tables'],
    hint: 'Structured data organization with built-in sorting and filtering',
    category: 'Excel Skills'
  },
  {
    id: '3',
    text: 'Separating business and personal expenses is important for accurate {blank} reporting and investor presentations.',
    answer: 'tax',
    alternativeAnswers: ['Tax', 'financial'],
    hint: 'Required by government agencies for business compliance',
    category: 'Accounting Practices'
  }
];

export default function ExercisesDebugPage() {
  return (
    <div className="container mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="sm" asChild>
          <Link href="/debug" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Debug Home
          </Link>
        </Button>
      </div>

      <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-blue-50">
        <CardHeader>
          <CardTitle className="text-3xl flex items-center gap-2">
            <FileText className="w-8 h-8 text-purple-600" />
            Exercise Components Debug Page
          </CardTitle>
          <CardDescription className="text-lg">
            Test and debug generic exercise components including DragAndDrop matching, 
            ComprehensionCheck quizzes, and ReflectionJournal activities.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* DragAndDrop Component Tests */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-purple-600" />
            Generic DragAndDrop Component
          </CardTitle>
          <CardDescription>
            Flexible matching component that can handle vocabulary terms, accounting entries, business concepts, and more.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Test 1: Accounting Vocabulary */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Test 1: Accounting Vocabulary Matching</h3>
            <DragAndDrop 
              items={vocabularyItems}
              title="Accounting Vocabulary Match"
              description="Match each accounting term with its correct definition"
              leftColumnTitle="Accounting Terms"
              rightColumnTitle="Definitions"
              showHints={true}
              shuffleItems={true}
              onComplete={(score) => console.log('Vocabulary test completed with score:', score)}
            />
          </div>

          <Separator />

          {/* Test 2: Journal Entries */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Test 2: Journal Entry Matching</h3>
            <DragAndDrop 
              items={journalEntryItems}
              title="Journal Entry Builder"
              description="Match each business transaction with its correct journal entry"
              leftColumnTitle="Business Transactions"
              rightColumnTitle="Journal Entries"
              showHints={true}
              shuffleItems={true}
              onComplete={(score) => console.log('Journal entry test completed with score:', score)}
            />
          </div>

          <Separator />

          {/* Test 3: Business Concepts */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-800">Test 3: Business Concept Matching (Shuffled)</h3>
            <DragAndDrop 
              items={businessConceptItems}
              title="Business Concepts"
              description="Match each business term with its definition"
              leftColumnTitle="Business Terms"
              rightColumnTitle="Definitions"
              showHints={true}
              shuffleItems={true}
              onComplete={(score) => console.log('Business concepts test completed with score:', score)}
            />
          </div>

        </CardContent>
      </Card>

      {/* ComprehensionCheck Component Tests */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-green-600" />
            ComprehensionCheck Component
          </CardTitle>
          <CardDescription>
            Multiple choice quiz component with randomized answers, scoring, explanations, and retry functionality.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Test 1: Basic Accounting */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-800">Test 1: Basic Accounting Knowledge</h3>
            <ComprehensionCheck 
              title="Accounting Fundamentals Quiz"
              description="Test your understanding of basic accounting principles and financial statements."
              questions={basicAccountingQuestions}
              showExplanations={true}
              allowRetry={true}
              onComplete={(score, total) => console.log(`Accounting quiz completed: ${score}/${total}`)}
            />
          </div>

          <Separator />

          {/* Test 2: Business Math */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Test 2: Business Math Calculations</h3>
            <ComprehensionCheck 
              title="Business Math Challenge"
              description="Practice markup, break-even analysis, and contribution margin calculations."
              questions={businessMathQuestions}
              showExplanations={true}
              allowRetry={true}
              onComplete={(score, total) => console.log(`Business math quiz completed: ${score}/${total}`)}
            />
          </div>

          <Separator />

          {/* Test 3: Case Study Application */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Test 3: TechStart Solutions Case Study</h3>
            <ComprehensionCheck 
              title="TechStart Case Study Analysis"
              description="Apply your knowledge to Sarah's startup scenario from Unit 1."
              questions={techStartQuestions}
              showExplanations={true}
              allowRetry={true}
              onComplete={(score, total) => console.log(`TechStart quiz completed: ${score}/${total}`)}
            />
          </div>

        </CardContent>
      </Card>

      {/* FillInTheBlank Component Tests */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-6 h-6 text-orange-600" />
            FillInTheBlank Component
          </CardTitle>
          <CardDescription>
            Gap-fill exercise component with toggle-able word bank, randomized word order, and green/red visual feedback.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          
          {/* Test 1: Accounting Equations */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-orange-800">Test 1: Accounting Equations & Formulas</h3>
            <FillInTheBlank 
              sentences={accountingEquationSentences}
              title="Accounting Equation Practice"
              description="Fill in the blanks to complete these fundamental accounting relationships"
              showWordList={true}
              randomizeWordOrder={true}
              showHints={true}
              onComplete={(score) => console.log('Accounting equations completed with score:', score)}
            />
          </div>

          <Separator />

          {/* Test 2: Business Formulas */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-800">Test 2: Business Math Formulas</h3>
            <FillInTheBlank 
              sentences={businessFormulaSentences}
              title="Business Formula Challenge"
              description="Complete these essential business and financial formulas"
              showWordList={true}
              randomizeWordOrder={true}
              showHints={false}
              onComplete={(score) => console.log('Business formulas completed with score:', score)}
            />
          </div>

          <Separator />

          {/* Test 3: Case Study Application */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-purple-800">Test 3: TechStart Case Study (No Word Bank)</h3>
            <FillInTheBlank 
              sentences={techStartSentences}
              title="TechStart Solutions Knowledge Check"
              description="Apply your understanding of Sarah's startup scenario"
              showWordList={false}
              randomizeWordOrder={false}
              showHints={true}
              onComplete={(score) => console.log('TechStart case study completed with score:', score)}
            />
          </div>

        </CardContent>
      </Card>

      {/* RatioMatching Component Test */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            RatioMatching Component (Unit 3)
          </CardTitle>
          <CardDescription>
            Financial ratio matching exercise for Unit 3: Three-Statement Storyboard. Match ratios to their formulas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <RatioMatching />
        </CardContent>
      </Card>

      {/* TODO: Add ReflectionJournal when created */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-800">
            <Calculator className="w-6 h-6" />
            Coming Soon: ReflectionJournal Component
          </CardTitle>
          <CardDescription className="text-yellow-700">
            Self-reflection and learning journal component will be added here once created.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-yellow-700">
            <div>• <strong>ReflectionJournal:</strong> Self-reflection and learning journal component for CAP development</div>
          </div>
        </CardContent>
      </Card>

      {/* Component Usage Guide */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">💡 Component Usage Guide</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6 text-blue-700">
            <div>
              <h4 className="font-semibold">DragAndDrop Component:</h4>
              <p className="text-sm">
                Pass an array of MatchingItem objects with id, content, matchId, and optional category/hint/description. 
                The component automatically creates matching pairs and handles all drag-drop interactions.
              </p>
              <code className="text-xs bg-blue-100 p-2 rounded block mt-2">
                {`<DragAndDrop items={matchingData} title="Exercise Title" description="..." />`}
              </code>
              <div className="bg-blue-100 p-3 rounded mt-2">
                <h5 className="font-semibold text-sm">DragAndDrop Props:</h5>
                <ul className="text-xs mt-2 space-y-1">
                  <li>• <code>items</code>: MatchingItem[] (required)</li>
                  <li>• <code>title</code>: string (required)</li>
                  <li>• <code>description</code>: string (required)</li>
                  <li>• <code>leftColumnTitle</code>: string (optional, default: "Items")</li>
                  <li>• <code>rightColumnTitle</code>: string (optional, default: "Matches")</li>
                  <li>• <code>showHints</code>: boolean (optional, default: false)</li>
                  <li>• <code>shuffleItems</code>: boolean (optional, default: true)</li>
                  <li>• <code>onComplete</code>: (score: number) =&gt; void (optional)</li>
                </ul>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold">ComprehensionCheck Component:</h4>
              <p className="text-sm">
                Pass an array of multiple choice questions where the first answer is always correct. 
                The component automatically randomizes answer order and provides scoring with explanations.
              </p>
              <code className="text-xs bg-blue-100 p-2 rounded block mt-2">
                {`<ComprehensionCheck questions={mcqData} title="Quiz Title" description="..." />`}
              </code>
              <div className="bg-blue-100 p-3 rounded mt-2">
                <h5 className="font-semibold text-sm">ComprehensionCheck Props:</h5>
                <ul className="text-xs mt-2 space-y-1">
                  <li>• <code>questions</code>: MultipleChoiceQuestion[] (required)</li>
                  <li>• <code>title</code>: string (optional, default: "Comprehension Check")</li>
                  <li>• <code>description</code>: string (optional)</li>
                  <li>• <code>showExplanations</code>: boolean (optional, default: true)</li>
                  <li>• <code>allowRetry</code>: boolean (optional, default: true)</li>
                  <li>• <code>onComplete</code>: (score: number, total: number) =&gt; void (optional)</li>
                </ul>
                <div className="mt-2 text-xs">
                  <strong>Question Format:</strong> {`{ id: string, question: string, answers: string[], explanation?: string }`}
                  <br />
                  <strong>Key Feature:</strong> First answer in array is always the correct one - component randomizes display order.
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold">FillInTheBlank Component:</h4>
              <p className="text-sm">
                Pass an array of sentences with {'{blank}'} placeholders. Students type answers directly into input fields
                with real-time green/red visual feedback. Includes toggle-able word bank and hint system.
              </p>
              <code className="text-xs bg-blue-100 p-2 rounded block mt-2">
                {`<FillInTheBlank sentences={blankData} title="Exercise Title" description="..." />`}
              </code>
              <div className="bg-blue-100 p-3 rounded mt-2">
                <h5 className="font-semibold text-sm">FillInTheBlank Props:</h5>
                <ul className="text-xs mt-2 space-y-1">
                  <li>• <code>sentences</code>: BlankSentence[] (required)</li>
                  <li>• <code>title</code>: string (required)</li>
                  <li>• <code>description</code>: string (required)</li>
                  <li>• <code>showWordList</code>: boolean (optional, default: true)</li>
                  <li>• <code>randomizeWordOrder</code>: boolean (optional, default: true)</li>
                  <li>• <code>showHints</code>: boolean (optional, default: false)</li>
                  <li>• <code>onComplete</code>: (score: number) =&gt; void (optional)</li>
                </ul>
                <div className="mt-2 text-xs">
                  <strong>Sentence Format:</strong> {`{ id: string, text: string, answer: string, hint?: string, alternativeAnswers?: string[], category?: string }`}
                  <br />
                  <strong>Key Features:</strong> Use {'{blank}'} in text for input placement. Supports alternative correct answers and case-insensitive matching.
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}