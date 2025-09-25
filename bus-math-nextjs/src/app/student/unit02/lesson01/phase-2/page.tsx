import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson01Data, unit02Data, lesson01Phases } from "../lesson-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { FillInTheBlank } from "@/components/exercises/FillInTheBlank"

export default function Phase2Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 2)!

  const comprehensionQuestions = [
    {
      id: 'q1',
      question: 'What specific business milestone created new complexity for Sarah in Unit 2?',
      answers: ['Landing her first monthly retainer client (fitness studio)', 'Getting her first $10,000 project', 'Hiring her first employee', 'Opening a business bank account'],
      explanation: 'Sarah landed her first monthly retainer client, a local fitness studio, which meant consistent revenue but also more transactions, more data entry, and more complexity in her month-end processes.'
    },
    {
      id: 'q2',
      question: 'What was the core problem with Sarah\'s "smart" ledger during her first month-end closing?',
      answers: ['It was still completely manual, leading to time-consuming error hunts', 'It couldn\'t connect to her bank account', 'It was too expensive to maintain', 'It didn\'t support multiple clients'],
      explanation: 'Sarah\'s "smart" ledger was still completely manual. As she cross-referenced every transaction, she found dozens of tiny errors that threw her totals off, sending her on long, frustrating hunts for the source of problems.'
    },
    {
      id: 'q3',
      question: 'According to Marcus Rodriguez, what was Sarah\'s most valuable business asset that she was wasting?',
      answers: ['Her time', 'Her money', 'Her client relationships', 'Her technical skills'],
      explanation: 'Marcus told Sarah that her time was the most valuable asset in her business, and she was wasting it on tasks that a machine could do better and more accurately.'
    }
  ]

  const fillInBlankSentences = [
    {
      id: '1',
      text: 'Sarah\'s driving question became: "What automation can cut our month-end closing time from {blank} to two hours without sacrificing GAAP accuracy?"',
      answer: 'two days',
      hint: 'The time reduction goal from weekend nightmare to manageable task'
    },
    {
      id: '2',  
      text: 'The {blank} Challenge will help you experience the same bottlenecks and frustrations that Sarah did.',
      answer: 'Shoebox Receipt',
      hint: 'A hands-on activity using mock receipts to simulate manual processing'
    },
    {
      id: '3',
      text: 'Marcus pointed out that small errors weren\'t so little; they could have serious {blank} down the road.',
      answer: 'consequences',
      hint: 'Future problems that could result from accounting mistakes'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
      <PhaseHeader 
        lesson={lesson01Data}
        unit={unit02Data}
        phase={currentPhase}  
        phases={lesson01Phases}
      />
      
        <div className="max-w-4xl mx-auto space-y-8">
        {/* Complete Section 1 Content */}
        <Card className="border-green-200 bg-white shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white">
            <CardTitle className="text-2xl">Section 1: The Weekend Nightmare: Why Automation Matters</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed mb-6">
                After launching TechStart Solutions, Sarah had her "Smart Ledger" from Unit 1, and for a while, she was feeling pretty good. Her business was growing, and she even landed her first monthly retainer client, a local fitness studio. This meant more consistent revenue, but it also meant more transactions, more data entry, and more complexity. And that's when she hit the next wall.
              </p>

              <p className="text-base leading-relaxed mb-6">
                It happened at the end of the month. Sarah sat down to do her first real "month-end closing," the process of finalizing her books and reconciling them with her bank account. It turned into what she later called a "complete nightmare." She spent her entire weekend hunched over her laptop. Her "smart" ledger was still completely manual, and as she cross-referenced every transaction, she found dozens of tiny errors—a typo in one number, a missed software subscription fee in another. Each small mistake threw her totals off, sending her on long, frustrating hunts for the source of the problem. She thought she had solved her bookkeeping problem, but she realized she had just created a new one: a process that was eating up her most valuable resource—time.
              </p>

              <p className="text-base leading-relaxed mb-6">
                Frustrated, she vented to her mentor, Marcus Rodriguez, about how she had wasted a whole weekend on administrative work. Marcus was direct. He told her that her time was the most valuable asset in her business, and she was wasting it on tasks that a machine could do better and more accurately. He pointed out that those little errors weren't so little; they could have serious consequences down the road. He was the one who pushed her to stop thinking about just <em>recording</em> her finances and start thinking about <em>automating</em> them.
              </p>

              <p className="text-base leading-relaxed mb-6">
                This conversation sparked a new goal for Sarah, which has become the essential question for our unit. She asked herself, <strong>"What automation can cut our month-end closing time from two days to two hours without sacrificing GAAP accuracy?"</strong> Before you can build your own solution to this problem, it's important to understand the challenge firsthand. Your first task is the "Shoebox Receipt Challenge," where your team will be given a pile of mock receipts to sort, categorize, and process manually. You'll time yourselves and experience the same bottlenecks and frustrations that Sarah did. This will help you understand <em>why</em> businesses are so eager to find automation solutions. Once you've felt the pain of the manual process, you will form your project teams and choose an automation focus area—like accruals, deferrals, or depreciation—to begin your journey of building your own "Month-End Wizard."
              </p>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                <h3 className="text-xl font-semibold text-green-800 mb-3">Why This Matters for Your Business Future</h3>
                <p className="text-green-700 leading-relaxed">
                  Sarah's story demonstrates that business growth isn't just about getting more customers—it's about building systems that can scale efficiently. Every successful entrepreneur faces this same challenge: the transition from doing everything manually to building automated systems that free up time for strategic work. The automation skills you'll develop in this unit are exactly what employers and investors look for in today's business leaders.
                </p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8">
                <h3 className="text-xl font-semibold text-orange-800 mb-3">The Real Cost of Manual Processes</h3>
                <p className="text-orange-700 leading-relaxed">
                  Marcus was right about the hidden costs of manual work. Beyond the time wasted, manual processes introduce human error, create inconsistencies, prevent real-time decision making, and ultimately limit how much a business can grow. When Sarah automated her month-end close, she didn't just save time—she gained the confidence that comes with knowing her numbers are accurate and her systems are reliable.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comprehension Check */}
        <Card className="border-green-200 shadow-lg">
          <CardContent className="p-6">
            <ComprehensionCheck
              title="Understanding Sarah's Challenge"
              description="Test your comprehension of the key concepts from Section 1"
              questions={comprehensionQuestions}
              showExplanations={true}
              allowRetry={true}
            />
          </CardContent>
        </Card>

        {/* Fill in the Blank Exercise */}
        <Card className="border-green-200 shadow-lg">
          <CardContent className="p-6">
            <FillInTheBlank
              title="Key Terms and Concepts"
              description="Complete these important statements from Sarah's automation journey"
              sentences={fillInBlankSentences}
              showHints={true}
              showWordList={false}
            />
          </CardContent>
        </Card>

        {/* Turn and Talk Discussion */}
        <Card className="border-amber-200 bg-amber-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-amber-800 flex items-center gap-2">
              💬 Turn and Talk: Business Process Reflection
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-amber-700 font-medium">
                Discuss with a partner (3 minutes each person):
              </p>
              <ul className="space-y-2 text-amber-700">
                <li>• <strong>Personal Experience:</strong> Describe a time when you or someone you know spent way too much time on a repetitive task that could have been automated or made more efficient.</li>
                <li>• <strong>Error Analysis:</strong> What mistakes or problems occurred because of the manual process? How did these errors impact the final result?</li>
                <li>• <strong>Technology Solutions:</strong> What specific technology or automation could have helped solve this problem?</li>
                <li>• <strong>Business Connection:</strong> How does your example connect to Sarah's month-end closing challenge and the need for business automation?</li>
              </ul>
              <div className="bg-amber-100 p-4 rounded-lg mt-4">
                <p className="text-amber-800 text-sm font-medium">
                  💡 <strong>Key Insight:</strong> Every successful business faces the transition from manual processes to automated systems. The entrepreneurs who master this transition are the ones who can scale their businesses effectively and compete in today's fast-paced market.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        </div>

        <PhaseFooter 
          lesson={lesson01Data}
          unit={unit02Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}
