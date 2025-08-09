import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ArrowRight, Lightbulb } from 'lucide-react'
import ReflectionJournal from "@/components/exercises/ReflectionJournal"
import { lesson03Data, unit01Data, lesson03Phases } from "../lesson-data"

const currentPhase = lesson03Phases[5]

const capReflectionPrompts = [
  {
    id: 'courage-debit-credit',
    category: 'courage' as const,
    prompt: 'What was the most challenging part of learning debit and credit rules that required you to step outside your comfort zone? How did you push through initial confusion or frustration?',
    placeholder: 'Think about moments when the DEA LER system felt overwhelming, or when complex transactions seemed impossible to figure out...'
  },
  {
    id: 'adaptability-debit-credit',
    category: 'adaptability' as const,
    prompt: 'How did you adjust your learning approach when debit and credit rules didn\'t click immediately? What strategies did you develop for tackling complex transactions?',
    placeholder: 'Consider how you changed your study methods, used different visual aids, or found new ways to remember the rules...'
  },
  {
    id: 'persistence-debit-credit',
    category: 'persistence' as const,
    prompt: 'Describe a specific moment during this lesson when you wanted to give up on understanding T-accounts or journal entries. What motivated you to keep practicing until it made sense?',
    placeholder: 'Reflect on the breakthrough moment when the systematic logic of debits and credits finally clicked for you...'
  }
]

export default function Phase6Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
      <PhaseHeader
        lesson={lesson03Data}
        unit={unit01Data}
        phase={currentPhase}
        phases={lesson03Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Closing Header */}
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-teal-100 text-teal-800 text-lg px-4 py-2">
              🔄 Phase 6: Closing
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900">
              Reflection & Excel Preview
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              You've mastered the systematic logic of debit and credit rules—the foundation 
              of professional accounting worldwide. Now let's reflect on your learning journey 
              and preview how these skills will enable Sarah's Excel automation.
            </p>
          </div>
        </section>

        {/* Sarah's Achievement */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-teal-200 bg-teal-50">
            <CardHeader>
              <CardTitle className="text-teal-900 flex items-center gap-2">
                <BookOpen className="h-6 w-6" />
                Sarah's Breakthrough Moment
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-teal-800">
                <p>
                  Sarah closes her textbook and looks at her neat rows of T-accounts with satisfaction. 
                  What once seemed like mysterious abbreviations and confusing rules now makes 
                  perfect logical sense. Every transaction tells a complete story, and the 
                  double-entry system ensures perfect balance every time.
                </p>
                <p>
                  "Now I understand why investors trust businesses that follow these rules," 
                  she thinks. "This isn't just record-keeping—it's a systematic approach that 
                  prevents errors and builds credibility. And the best part? This logic can 
                  be automated in Excel."
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-teal-200">
                <h4 className="font-semibold text-teal-900 mb-2">What Sarah Has Gained:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <ul className="text-teal-800 space-y-1">
                    <li>✓ Systematic approach to transaction analysis</li>
                    <li>✓ Confidence in debit and credit rules</li>
                    <li>✓ Ability to maintain perfect balance</li>
                    <li>✓ Professional credibility with investors</li>
                  </ul>
                  <ul className="text-teal-800 space-y-1">
                    <li>✓ Foundation for Excel automation</li>
                    <li>✓ Error detection capabilities</li>
                    <li>✓ Understanding of business logic</li>
                    <li>✓ Preparation for advanced topics</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Key Learning Synthesis */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Lesson 3 Learning Synthesis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-blue-800 text-lg">
                This lesson transformed abstract accounting rules into practical business tools. 
                Here's what you've accomplished:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-blue-900">Conceptual Mastery</h4>
                  <div className="bg-white p-4 rounded-lg border border-blue-200 space-y-2">
                    <p className="text-blue-800 text-sm"><strong>DEA LER System:</strong> Memorized the systematic rules for when to debit vs. credit different account types</p>
                    <p className="text-blue-800 text-sm"><strong>T-Account Logic:</strong> Understand how the left/right structure organizes financial information</p>
                    <p className="text-blue-800 text-sm"><strong>Balance Principle:</strong> Internalized why debits must equal credits in every transaction</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-blue-900">Practical Application</h4>
                  <div className="bg-white p-4 rounded-lg border border-blue-200 space-y-2">
                    <p className="text-blue-800 text-sm"><strong>Transaction Analysis:</strong> Can break down complex business scenarios into proper journal entries</p>
                    <p className="text-blue-800 text-sm"><strong>Error Detection:</strong> Recognize when entries don't balance and identify the problem</p>
                    <p className="text-blue-800 text-sm"><strong>Professional Communication:</strong> Use correct accounting terminology and format</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-yellow-800">
                  <strong>Career Insight:</strong> These systematic thinking skills transfer directly to 
                  data analysis, process improvement, and technology roles where logical frameworks 
                  and error-checking are essential.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Excel Preview */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900 flex items-center gap-2">
                <Lightbulb className="h-6 w-6" />
                Preview: Excel Implementation Coming Next
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-green-800">
                <p>
                  The systematic rules you've mastered are perfect for automation. In the next lesson, 
                  Sarah will translate these debit and credit principles into Excel formulas that can:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">Automated Functions</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• SUMIF formulas to calculate account totals</li>
                    <li>• Conditional formatting to flag imbalanced entries</li>
                    <li>• Data validation to ensure proper account names</li>
                    <li>• Trial balance auto-calculation</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">Self-Auditing Features</h4>
                  <ul className="text-green-800 text-sm space-y-1">
                    <li>• Instant balance verification (green/red indicators)</li>
                    <li>• Error highlighting for incomplete entries</li>
                    <li>• Automatic account categorization</li>
                    <li>• Professional report generation</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-blue-800 text-sm">
                  <strong>The Power of Systematic Thinking:</strong> Because you understand the logical 
                  rules behind debits and credits, you'll be able to create Excel formulas that think 
                  like an accountant—automatically applying the same rules you've practiced manually.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* CAP Framework Reflection */}
        <section className="max-w-4xl mx-auto">
          <ReflectionJournal
            unitTitle="Lesson 3: Debit & Credit Rules Reflection"
            prompts={capReflectionPrompts}
          />
        </section>

        {/* Learning Journey Connection */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900 flex items-center gap-2">
                <ArrowRight className="h-6 w-6" />
                Your Learning Journey: From Confusion to Mastery
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="prose prose-lg max-w-none text-purple-800">
                <p>
                  Think about where you started this lesson—perhaps confused by "Dr." and "Cr." 
                  abbreviations, uncertain about which accounts increase with debits or credits. 
                  Now you can systematically analyze any business transaction and create proper 
                  journal entries with confidence.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">Beginning</h4>
                  <p className="text-purple-800 text-sm">Confused by accounting terminology and rules</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">Learning</h4>
                  <p className="text-purple-800 text-sm">Practiced systematic application of DEA LER rules</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-2">Mastery</h4>
                  <p className="text-purple-800 text-sm">Can analyze complex transactions independently</p>
                </div>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <p className="text-orange-800">
                  <strong>Growth Mindset Achievement:</strong> You've proven that systematic practice 
                  and persistence can turn seemingly complex concepts into routine skills. This same 
                  approach will serve you well in Excel modeling, data analysis, and any career that 
                  requires logical problem-solving.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Next Lesson Preview */}
        <section className="max-w-4xl mx-auto">
          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-700">Next: Lesson 4 - Excel Tables & SUMIF Functions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-indigo-600">
                With debit and credit rules mastered, you're ready to help Sarah build the Excel 
                foundation of her self-auditing ledger. In Lesson 4, you'll learn to create 
                professional Excel Tables with structured references and build SUMIF formulas 
                that automatically calculate account totals—the first step toward full automation.
              </p>
              
              <div className="bg-white p-4 rounded-lg border border-indigo-200">
                <h4 className="font-semibold text-indigo-900 mb-2">Coming Up:</h4>
                <ul className="text-indigo-800 text-sm space-y-1">
                  <li>• Excel Table creation and structured references</li>
                  <li>• SUMIF function syntax and applications</li>
                  <li>• Professional data organization techniques</li>
                  <li>• Foundation for automated calculations</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
      
      <PhaseFooter 
        lesson={lesson03Data}
        unit={unit01Data}
        phase={currentPhase} 
        phases={lesson03Phases}
      />
    </div>
  )
}