import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { VideoPlayer } from "@/components/ui/video-player"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, MessageCircle } from "lucide-react"
import { lesson01Data, unit05Data, lesson01Phases } from "../lesson-data"

export default function Phase1Page() {
  const currentPhase = lesson01Phases[0] // Hook phase
  
  // Video data from intro-videos.json
  const videoData = {
    title: "The First Hire: The Weight and Wisdom of Payroll",
    description: "Success creates a new problem for Sarah: she has too much work for one person. The decision to hire her first employee, Alex, brings excitement and a terrifying new level of responsibility. Follow her process of creating a 'Payday Simulator' to forecast payroll costs and manage cash flow, a critical step before becoming an employer.",
    youtubeId: "FZo-q8LRWtk",
    duration: "4:32",
    transcript: "(Sarah is on camera. She looks a bit tired but also energized, like someone who has been through a challenging growth spurt.)\n\nSo, the data-driven approach was working. Maybe a little too well. I was winning bigger contracts, and my revenue was climbing, but I was completely maxed out. I was consistently working over 60 hours a week for six consecutive weeks. The breaking point came when a $25,000 project opportunity came across my desk, and I had to turn it down. I just physically did not have the time to do the work. It was a painful decision.\n\nI knew I had hit a wall. The business couldn't grow anymore if it was just me. So, the next logical step was to hire someone. But that thought was honestly terrifying. It's so much more than just paying a salary. Suddenly you're dealing with payroll obligations, taxes, and thinking about new expenses. It's a huge new level of complexity and financial responsibility. My cash flow was still pretty irregular because of my project-based work, and now I was about to add a major fixed cost to my books every single month.\n\nThe 'aha' moment here was less about a business tactic and more about a shift in mindset. I realized that the company's financial health wasn't just about my own livelihood anymore. I was about to be responsible for someone else's. The fear of one day not being able to make payroll was a powerful motivator. I understood that my business growth was completely stalled by my own capacity limitations, and the only way forward was to expand the team, but I had to do it the right way.\n\nThis is where the idea of a 'Payday Simulator' becomes so critical. The driving question for me was, how can a small business owner predict these new payroll cash-outs and still make rent on time?. I had to build a detailed model that didn't just account for the employee's salary, but for all the other costs—the employer taxes and other payroll obligations. It allowed me to simulate the impact on my cash flow for months into the future, so I could hire with confidence, not just hope.\n\nAfter all that planning, I finally did it. I hired my first employee, a talented part-time developer named Alex Chen. And with Alex on the team, our capacity shot up, and our revenue started climbing again. But I started to notice a disturbing trend in my financial reports. Even though we were bringing in more money than ever, our profit margin was actually going down. And that scary problem—working harder for less profit—is what forced me to take a hard look at our pricing strategy, which I think is where you're headed next."
  }

  // Comprehension questions
  const comprehensionQuestions = [
    {
      id: "q1",
      question: "What was the main reason Sarah had to turn down the $25,000 project?",
      answers: [
        "She didn't have the necessary skills",
        "The client wasn't trustworthy", 
        "She didn't have enough time to do the work herself",
        "The project wasn't profitable enough"
      ],
      explanation: "Sarah had reached her personal capacity limit, working over 60 hours a week. The business couldn't grow further without additional help."
    },
    {
      id: "q2", 
      question: "What made the idea of hiring an employee 'terrifying' for Sarah?",
      answers: [
        "She wasn't sure about Alex's qualifications",
        "It meant taking on payroll obligations and financial responsibility for someone else",
        "She was worried about losing control of her business",
        "She didn't have enough office space"
      ],
      explanation: "Sarah realized that hiring meant she would be responsible for someone else's livelihood, with regular payroll obligations and complex tax requirements."
    },
    {
      id: "q3",
      question: "What is the main purpose of Sarah's 'Payday Simulator'?",
      answers: [
        "To calculate employee satisfaction scores",
        "To predict payroll cash needs and manage cash flow timing",
        "To determine the best candidates to hire",
        "To automate the hiring process"
      ],
      explanation: "The Payday Simulator helps predict when payroll cash will be needed, allowing business owners to plan ahead and avoid cash flow crises."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <PhaseHeader 
        lesson={lesson01Data}
        unit={unit05Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />
      
      <div className="max-w-4xl mx-auto space-y-8 pb-8">
        {/* Welcome to PayDay Simulator */}
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed">
            Welcome to the next stage of your business journey. So far, you've learned how to track your transactions, automate your books, and even tell your financial story to investors. Your business is growing, and with growth comes one of the most exciting, and sometimes scary, steps an entrepreneur can take: hiring your first employee.
          </p>
          
          <p className="text-base leading-relaxed text-gray-700">
            In this unit, we'll follow our friend Sarah from TechStart Solutions as she confronts this very challenge. Success has brought her to a breaking point; she has too much work for one person and had to turn down a major project. She knows that to grow, she must hire help. But hiring someone is more than just agreeing on a salary. It's a huge new responsibility. Sarah's biggest fear is the one that keeps many small business owners up at night: the dread of not having enough cash in the bank on payday.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            This brings us to our essential question for this unit: <strong>How can a small business owner predict payroll cash-outs and still make rent on time?</strong> To answer this, you will build a "Payday Simulator"—a complete payroll system in Excel. You'll learn how to calculate paychecks accurately, manage taxes, and, most importantly, forecast your cash needs so you can hire with confidence, not just hope.
          </p>
        </div>

        {/* Sarah's Story Video */}
        <VideoPlayer video={videoData} />

        {/* The Payroll Cash Crunch Story */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Payroll Cash Crunch</h2>
          
          <p className="text-base leading-relaxed text-gray-700">
            Every business owner's nightmare is running out of money. It's a terrible feeling, especially when you have people depending on you. Let's start with a short story about a café owner named Maria.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            Maria's café was doing well. Her employees were happy, and customers loved her coffee. On Friday, she ran payroll, just like she always did. She saw the money leave her business account to pay her team. Over the weekend, the café was busy, and she made a lot of cash sales. But when she checked her bank account on Monday morning, she was shocked to see it was overdrawn. The payroll checks she had written were bouncing.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            What went wrong? The problem wasn't that Maria didn't have the money. The problem was <em>timing</em>. The money for her payroll left her account instantly on Friday, but the cash she earned over the weekend hadn't been deposited yet. Now, Maria was in a crisis. Does she let her employees' paychecks bounce, breaking their trust? Or does she take out a high-interest emergency loan to cover the gap?
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            This exact scenario is what keeps Sarah, the founder of TechStart Solutions, from sleeping well at night. Her business is booming after she started using data to make better decisions. In fact, she's so busy that she was recently forced to turn down a $25,000 project because she simply didn't have the time to do the work herself. The realization was clear: if she wanted her business to grow, she couldn't do it alone anymore.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            The thought of hiring her first employee, a developer named Alex, is both exciting and terrifying. It's not just about paying a salary. It means she's responsible for someone else's livelihood. Her cash flow is still irregular because she works on a project basis, and now she's thinking about adding a big, fixed cost to her books every single month. The fear of facing a "Friday Crisis" like Maria's is very real.
          </p>

          <p className="text-base leading-relaxed text-gray-700">
            This is why we're going to build a <strong>Payday Simulator</strong>. This tool will help you, and Sarah, do more than just calculate pay. It will help you see into the future of your bank account. You'll build a system that can predict when payroll cash is needed, so you can avoid the timing traps that put Maria's business in danger. First, you'll need to master the math behind every single paycheck.
          </p>
        </div>

        {/* Comprehension Check */}
        <ComprehensionCheck
          questions={comprehensionQuestions}
          title="Understanding the Payroll Challenge"
          description="Test your understanding of Sarah's hiring dilemma and the challenges facing small business owners when expanding their team."
          showExplanations={true}
        />

        {/* Turn and Talk */}
        <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
          <CardHeader>
            <CardTitle className="text-blue-900 dark:text-blue-200 flex items-center gap-2">
              <Users className="h-5 w-5" />
              Turn and Talk
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <MessageCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="font-medium text-blue-900 dark:text-blue-200 mb-2">
                  Discussion Prompt (3 minutes):
                </p>
                <p className="text-blue-800 dark:text-blue-300">
                  Think about times when you've earned money but couldn't access it immediately (like waiting for a paycheck, gift money, or payment for work). How did that timing gap affect your planning?
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-blue-800 dark:text-blue-300">
                  <li>How might this problem be magnified for a business owner who needs to pay employees?</li>
                  <li>What systems or strategies could prevent Maria's "Friday Crisis"?</li>
                  <li>Why do you think Sarah finds the idea of hiring both "exciting and terrifying"?</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Transition to Next Phase */}
        <div className="prose prose-lg max-w-none">
          <p className="text-base leading-relaxed text-gray-700">
            Now that you understand the real stakes of payroll management, you're ready to dive into the fundamentals. In the next phase, we'll explore the difference between gross pay and net pay, and begin building the mathematical foundation for your Payday Simulator. Remember, this isn't just about the math—it's about building a system that gives business owners the confidence to grow their teams responsibly.
          </p>
        </div>
      </div>

      <PhaseFooter 
        lesson={lesson01Data}
        unit={unit05Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />
    </div>
  )
}
