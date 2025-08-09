import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users } from "lucide-react";
import { lesson02Data, unit08Data, lesson02Phases } from "../lesson-data";

const currentPhase = lesson02Phases[0]; // Hook phase

const engagementQuestions = [
  {
    id: "q1",
    question: "When Sarah first built her individual financial statements (income statement, balance sheet, cash flow statement), what was the main problem with keeping them separate?",
    answers: [
      "Investors couldn't see how the statements connected to tell one coherent story",
      "The statements took too long to create individually", 
      "Sarah didn't have enough data to fill out each statement",
      "The formatting wasn't professional enough"
    ],
    explanation: "Individual statements are useful, but investors need to see how they connect - how revenue flows from the income statement to retained earnings on the balance sheet, and how both connect to cash flows."
  },
  {
    id: "q2", 
    question: "What does 'three-statement integration' mean in the context of Sarah's business model?",
    answers: [
      "Linking the income statement, balance sheet, and cash flow statement so they automatically update together",
      "Creating three different versions of each financial statement",
      "Having three separate Excel files for different time periods", 
      "Getting approval from three different investors"
    ],
    explanation: "Three-statement integration means the statements are connected with formulas so when you change one assumption (like sales growth), all three statements update automatically, showing investors a dynamic, connected financial model."
  },
  {
    id: "q3",
    question: "Why would a venture capitalist (VC) immediately lose confidence in Sarah's pitch if her financial model had 'hard-coded numbers' instead of formulas?",
    answers: [
      "Hard-coded numbers suggest the model can't adapt to different scenarios and lacks sophistication",
      "VCs prefer to see very large numbers in financial projections",
      "Hard-coded numbers are always inaccurate",
      "It means Sarah doesn't understand basic Excel functions"
    ],
    explanation: "VCs want to see that entrepreneurs can think dynamically about their business. Hard-coded numbers suggest inflexibility and an inability to test different scenarios, which are critical for business planning and risk assessment."
  }
];

export default function Unit08Lesson02Phase1() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <PhaseHeader 
        lesson={lesson02Data}
        unit={unit08Data} 
        phase={currentPhase}
        phases={lesson02Phases}
      />

      {/* Main Content */}
      <div className="space-y-8">
        
        {/* Hook Introduction */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            The Million-Dollar Question: Can Your Model Tell One Story?
          </h2>
          
          <p className="text-lg leading-relaxed mb-6">
            Picture this: Sarah Chen sits across from three venture capitalists in a gleaming conference room. 
            On her laptop screen are three beautiful financial statements - an income statement showing healthy profits, 
            a balance sheet with growing assets, and a cash flow statement tracking every dollar. She's spent months 
            perfecting each one individually.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Then one investor asks a simple question: "Sarah, if your customer acquisition costs go up by 25%, 
            how does that affect your cash position in month 18?" Sarah's heart sinks. She realizes that while 
            her individual statements look great, they don't talk to each other. To answer this question, 
            she'd need to manually recalculate numbers across all three statements.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            In that moment, Sarah learned the difference between having financial statements and having a 
            <strong> financial model</strong>. The investor wasn't just testing her math - they were testing 
            whether she understood how all the pieces of her business fit together.
          </p>
        </div>

        {/* Why This Matters Section */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="font-semibold text-blue-900 mb-3 text-xl">Why This Matters: The Integration Advantage</h3>
          <p className="text-blue-800 text-lg leading-relaxed mb-4">
            Professional financial models aren't just about accurate numbers - they're about showing investors 
            that you understand the dynamic relationships in your business. When revenue changes, how does it 
            affect cash? When you hire new employees, how does it impact your balance sheet? 
          </p>
          <p className="text-blue-800 text-lg leading-relaxed">
            Three-statement integration demonstrates to investors that you can think strategically, adapt to changes, 
            and build systems that grow with your business. It's the difference between looking like a bookkeeper 
            and looking like a CEO.
          </p>
        </div>

        {/* Business Context */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="font-semibold text-gray-900 mb-4 text-xl">The Stakes: $500,000 Investment Round</h3>
          <p className="text-gray-800 leading-relaxed mb-4">
            Sarah's TechStart Solutions has reached a crucial milestone. She has proven her concept with early 
            clients, but to scale, she needs serious funding. The three VCs across the table represent her 
            path to growth, but they've seen hundreds of pitches from entrepreneurs who don't understand the 
            financial fundamentals.
          </p>
          <p className="text-gray-800 leading-relaxed">
            Today's lesson focuses on the technical skills that separate sophisticated entrepreneurs from 
            amateurs: cross-sheet linking, formula integrity, and dynamic modeling. These aren't just Excel 
            tricks - they're the foundation of strategic business thinking.
          </p>
        </div>

        {/* Comprehension Check */}
        <ComprehensionCheck
          title="Understanding the Challenge"
          description="Test your grasp of why integrated financial models matter for serious entrepreneurs."
          questions={engagementQuestions}
          showExplanations={true}
        />

        {/* Turn and Talk Discussion */}
        <Card className="border-blue-200 bg-blue-50">
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
            <p className="text-blue-800 mb-4">
              Think about Sarah's experience in the investor meeting. Share with a partner:
            </p>
            <ul className="list-disc list-inside space-y-2 text-blue-800">
              <li>What specific advantages would Sarah gain from having an integrated financial model?</li>
              <li>How might integrated statements help Sarah make better business decisions day-to-day?</li>
              <li>What would you want to see in a financial model if you were investing $500,000 of your own money?</li>
            </ul>
          </CardContent>
        </Card>

        {/* Preview of Learning */}
        <div className="bg-green-50 p-6 rounded-lg border border-green-200">
          <h3 className="font-semibold text-green-900 mb-3 text-xl">What You'll Master Today</h3>
          <p className="text-green-800 leading-relaxed mb-4">
            By the end of this lesson, you'll understand the technical principles behind three-statement 
            integration and practice the cross-sheet linking techniques that create dynamic financial models. 
            You'll learn how changes in one statement automatically update the others, creating the kind of 
            sophisticated modeling that impresses investors and supports strategic decision-making.
          </p>
          <p className="text-green-800 leading-relaxed">
            Most importantly, you'll see how these technical skills serve the bigger picture: building 
            Sarah's credibility as an entrepreneur who thinks systematically about her business's financial future.
          </p>
        </div>

      </div>

      <PhaseFooter 
        lesson={lesson02Data}
        unit={unit08Data}
        phase={currentPhase}
        phases={lesson02Phases}
      />
    </div>
  );
}