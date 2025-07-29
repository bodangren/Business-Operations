import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  Lightbulb, 
  Target,
  ArrowRight,
  BookOpen,
  Users,
  MessageSquare,
  Clock
} from "lucide-react"

export default function PBLMethodologyPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Project-Based Learning Methodology Guide</h1>
        <p className="text-lg text-muted-foreground">
          Transform business mathematics education through authentic, hands-on learning experiences 
          that prepare students for real-world success.
        </p>
      </div>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Why Project-Based Learning for Business Mathematics?</h2>
        
        <Card className="mb-4 border-red-200 bg-red-50 dark:bg-red-950/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2 text-red-800 dark:text-red-200">
              <AlertTriangle className="h-5 w-5" />
              The Traditional Problem
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-red-700 dark:text-red-300">
              Traditional business mathematics courses often teach skills in isolation, leaving students 
              unable to apply their knowledge to real business situations. Students learn formulas but 
              struggle to identify when and how to use them in authentic contexts.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-6 border-green-200 bg-green-50 dark:bg-green-950/10">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2 text-green-800 dark:text-green-200">
              <CheckCircle className="h-5 w-5" />
              The PBL Solution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 dark:text-green-300">
              Project-Based Learning anchors all skill development in authentic business challenges. 
              Students learn Excel formulas <em>because</em> they need them to solve Sarah's cash flow problem. 
              They master financial statements <em>because</em> they're preparing for an investor presentation.
            </p>
          </CardContent>
        </Card>

        <h3 className="text-xl font-semibold mb-3">Core PBL Principles in This Course</h3>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <Target className="h-5 w-5 mt-0.5 text-primary" />
            <div>
              <strong>Authentic Context:</strong> Every lesson connects to Sarah's TechStart Solutions journey
            </div>
          </li>
          <li className="flex items-start gap-2">
            <MessageSquare className="h-5 w-5 mt-0.5 text-primary" />
            <div>
              <strong>Driving Questions:</strong> Real business challenges motivate all learning
            </div>
          </li>
          <li className="flex items-start gap-2">
            <Users className="h-5 w-5 mt-0.5 text-primary" />
            <div>
              <strong>Student Voice & Choice:</strong> Multiple pathways to demonstrate mastery
            </div>
          </li>
          <li className="flex items-start gap-2">
            <BookOpen className="h-5 w-5 mt-0.5 text-primary" />
            <div>
              <strong>Public Products:</strong> Presentations and portfolios showcase real achievements
            </div>
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="h-5 w-5 mt-0.5 text-primary" />
            <div>
              <strong>Reflection & Revision:</strong> Continuous improvement through feedback cycles
            </div>
          </li>
        </ul>
      </section>

      {/* Two-Semester Structure */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Two-Semester PBL Structure</h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
            <CardHeader>
              <CardTitle className="text-lg text-blue-800 dark:text-blue-200">
                Semester 1: Foundation Building Through Authentic Context
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-700 dark:text-blue-300">
                Students follow Sarah's entrepreneurial journey through 8 units, each representing 2 weeks 
                of her business development. Students learn business mathematics and Excel skills as Sarah 
                encounters real challenges that require these competencies.
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950/10">
            <CardHeader>
              <CardTitle className="text-lg text-purple-800 dark:text-purple-200">
                Semester 2: Authentic Capstone Project
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-purple-700 dark:text-purple-300">
                Students develop their own business plan and financial model over 13 weeks, applying all 
                skills learned in Semester 1 to create investor-ready presentations and comprehensive Excel workbooks.
              </p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-semibold mb-3">How the Textbook Supports PBL</h3>
        <p className="mb-3">The interactive textbook is <strong>not</strong> the course—it's a resource that provides:</p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-start gap-2">
            <Clock className="h-5 w-5 mt-0.5 text-primary" />
            <div><strong>Just-in-time instruction</strong> when students need specific skills</div>
          </li>
          <li className="flex items-start gap-2">
            <Target className="h-5 w-5 mt-0.5 text-primary" />
            <div><strong>Scaffolded practice</strong> to build confidence before authentic application</div>
          </li>
          <li className="flex items-start gap-2">
            <BookOpen className="h-5 w-5 mt-0.5 text-primary" />
            <div><strong>Reference materials</strong> students can return to during projects</div>
          </li>
          <li className="flex items-start gap-2">
            <ArrowRight className="h-5 w-5 mt-0.5 text-primary" />
            <div><strong>Narrative continuity</strong> that maintains engagement across all learning</div>
          </li>
        </ul>
      </section>

      {/* 2-Week Unit Cycle */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">The 2-Week Unit Cycle Structure</h2>
        
        <p className="mb-6">
          Each Semester 1 unit follows a proven 2-week cycle that balances direct instruction, 
          skill building, and authentic application:
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              Week 1: Problem Introduction & Skill Building
              <Badge variant="secondary">Days 1-5</Badge>
            </h3>
            
            <div className="grid gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Day 1: Authentic Problem Introduction</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Sarah's Challenge:</strong> Introduce the business problem Sarah faces</p>
                  <p><strong>Driving Question:</strong> What does Sarah need to solve this challenge?</p>
                  <p><strong>Learning Objectives:</strong> Connect skills to authentic needs</p>
                  <p><strong>Project Planning:</strong> Students plan their approach to helping Sarah</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Day 2: Excel Skills Workshop</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Targeted Instruction:</strong> Just-in-time Excel skills needed for Sarah's challenge</p>
                  <p><strong>Guided Practice:</strong> Hands-on practice with business data</p>
                  <p><strong>Skill Assessment:</strong> Quick competency check</p>
                  <p><strong>Differentiation:</strong> Support for various skill levels</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Day 3: Concept Exploration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Interactive Textbook:</strong> Students work through concepts section</p>
                  <p><strong>Business Theory:</strong> Why these concepts matter in real business</p>
                  <p><strong>Collaborative Discussion:</strong> Students share insights and questions</p>
                  <p><strong>Application Planning:</strong> How will these concepts help Sarah?</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Day 4: Guided Practice & Mini-Project Planning</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Worked Examples:</strong> Teacher-guided problem solving</p>
                  <p><strong>Practice Activities:</strong> Students try similar problems</p>
                  <p><strong>Mini-Project Introduction:</strong> Students design their own solution</p>
                  <p><strong>Planning Time:</strong> Individual or team project planning</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Day 5: Individual/Team Work Time</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Project Work:</strong> Students work on their mini-project</p>
                  <p><strong>Teacher Conferencing:</strong> Individual or team check-ins</p>
                  <p><strong>Peer Collaboration:</strong> Students help each other problem-solve</p>
                  <p><strong>Progress Monitoring:</strong> Students track their advancement</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              Week 2: Project Application & Portfolio Development
              <Badge variant="secondary">Days 6-10</Badge>
            </h3>
            
            <div className="grid gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Day 6: Mini-Project Work Session</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Focused Work Time:</strong> Students refine their projects</p>
                  <p><strong>Troubleshooting:</strong> Teacher provides targeted support</p>
                  <p><strong>Quality Checking:</strong> Students use rubrics for self-assessment</p>
                  <p><strong>Documentation:</strong> Students explain their reasoning and methods</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Day 7: Peer Collaboration & Review</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Peer Review Protocol:</strong> Structured feedback on projects</p>
                  <p><strong>Collaborative Problem-Solving:</strong> Students help each other overcome challenges</p>
                  <p><strong>Best Practice Sharing:</strong> Students demonstrate effective techniques</p>
                  <p><strong>Revision Planning:</strong> Students plan improvements based on feedback</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Day 8: Excel Model Refinement</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Professional Standards:</strong> Students apply business formatting standards</p>
                  <p><strong>Formula Optimization:</strong> Improving efficiency and accuracy</p>
                  <p><strong>Error Checking:</strong> Students validate their calculations</p>
                  <p><strong>Documentation:</strong> Clear explanations of formulas and logic</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Day 9: Presentation Preparation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Storytelling:</strong> How to present solutions to business challenges</p>
                  <p><strong>Visual Design:</strong> Effective charts and data visualization</p>
                  <p><strong>Professional Communication:</strong> Business presentation skills</p>
                  <p><strong>Practice Time:</strong> Students rehearse their presentations</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">Day 10: Showcase & Reflection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p><strong>Mini-Presentations:</strong> Students share their solutions</p>
                  <p><strong>Portfolio Addition:</strong> Students add work to their semester portfolio</p>
                  <p><strong>Reflection Writing:</strong> Students analyze their learning and growth</p>
                  <p><strong>Next Unit Preview:</strong> Connection to Sarah's next business challenge</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher's Role */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Role as a PBL Facilitator</h2>

        <Card className="mb-6 border-blue-200 bg-blue-50 dark:bg-blue-950/10">
          <CardHeader>
            <CardTitle className="text-lg text-blue-800 dark:text-blue-200">
              From Sage on the Stage to Guide on the Side
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-700 dark:text-blue-300">
              In project-based learning, your role shifts from delivering information to facilitating discovery. 
              You become a coach, mentor, and learning partner rather than the primary source of all knowledge.
            </p>
          </CardContent>
        </Card>

        <h3 className="text-xl font-semibold mb-4">Key Facilitation Strategies</h3>

        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-medium mb-2">1. Ask Driving Questions</h4>
            <ul className="space-y-1 ml-4">
              <li>• "What would Sarah need to know to solve this problem?"</li>
              <li>• "How might a real business owner approach this challenge?"</li>
              <li>• "What evidence would convince an investor?"</li>
              <li>• "How could you check if your solution is working?"</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-2">2. Provide Just-in-Time Instruction</h4>
            <ul className="space-y-1 ml-4">
              <li>• Teach Excel skills when students need them for their projects</li>
              <li>• Explain business concepts in response to authentic questions</li>
              <li>• Offer mini-lessons based on common student needs</li>
              <li>• Use teachable moments that arise from student work</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-2">3. Foster Collaborative Learning</h4>
            <ul className="space-y-1 ml-4">
              <li>• Create structures for students to learn from each other</li>
              <li>• Use peer review protocols to improve work quality</li>
              <li>• Encourage students to share discoveries and techniques</li>
              <li>• Build a community of practice around business problem-solving</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-2">4. Support Reflection and Metacognition</h4>
            <ul className="space-y-1 ml-4">
              <li>• Regular reflection prompts help students understand their learning</li>
              <li>• Portfolio development encourages students to see their growth</li>
              <li>• Self-assessment tools build student ownership of learning</li>
              <li>• Learning journals help students connect concepts across units</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Assessment in Project-Based Learning</h2>

        <Card className="mb-6 border-amber-200 bg-amber-50 dark:bg-amber-950/10">
          <CardHeader>
            <CardTitle className="text-lg text-amber-800 dark:text-amber-200">
              Assessment FOR Learning, Not Just OF Learning
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-amber-700 dark:text-amber-300">
              PBL assessment focuses on helping students improve their work and deepen their understanding, 
              not just measuring what they've memorized.
            </p>
          </CardContent>
        </Card>

        <h3 className="text-xl font-semibold mb-4">Multiple Forms of Assessment</h3>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Formative Assessment (Ongoing)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Project Check-ins:</strong> Regular conferences with individuals or teams</p>
              <p><strong>Peer Review:</strong> Structured feedback from classmates</p>
              <p><strong>Self-Assessment:</strong> Students evaluate their own progress</p>
              <p><strong>Exit Tickets:</strong> Quick understanding checks at lesson end</p>
              <p><strong>Learning Journals:</strong> Ongoing reflection on growth and challenges</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Summative Assessment (Evaluation)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Project Portfolios:</strong> Complete collection of student work</p>
              <p><strong>Presentations:</strong> Students share their solutions publicly</p>
              <p><strong>Excel Models:</strong> Authentic business tools students create</p>
              <p><strong>Reflection Essays:</strong> Students analyze their learning journey</p>
              <p><strong>Peer Evaluation:</strong> Students assess each other's contributions</p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-semibold mb-3">Rubric Design for Authentic Assessment</h3>
        <p className="mb-3">All rubrics in this course focus on:</p>
        <ul className="space-y-2 mb-6">
          <li><strong>Technical Accuracy:</strong> Do the calculations and formulas work correctly?</li>
          <li><strong>Application Quality:</strong> Are tools used appropriately for the business context?</li>
          <li><strong>Communication:</strong> Can students explain their reasoning clearly?</li>
          <li><strong>Growth & Reflection:</strong> Do students show evidence of learning and improvement?</li>
        </ul>
      </section>

      {/* Common Challenges */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Common PBL Implementation Challenges</h2>

        <div className="space-y-4">
          <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/10">
            <CardHeader>
              <CardTitle className="text-lg text-orange-800 dark:text-orange-200">
                Challenge: "Students Want Me to Just Tell Them the Answer"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700 dark:text-orange-300">
                <strong>Solution:</strong> Gradually build student comfort with productive struggle. 
                Start with more scaffolded activities and progressively reduce support. Celebrate 
                discoveries and problem-solving processes, not just correct answers.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/10">
            <CardHeader>
              <CardTitle className="text-lg text-orange-800 dark:text-orange-200">
                Challenge: "Some Students Aren't Participating in Group Work"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700 dark:text-orange-300">
                <strong>Solution:</strong> Use structured roles, individual accountability within team projects, 
                and peer evaluation systems. Make sure every student has meaningful contributions to make based on their strengths.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/10">
            <CardHeader>
              <CardTitle className="text-lg text-orange-800 dark:text-orange-200">
                Challenge: "I Feel Like I'm Not Teaching Enough Content"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700 dark:text-orange-300">
                <strong>Solution:</strong> Remember that deep learning through application is more valuable 
                than surface coverage. Use formative assessment to ensure students are mastering essential skills through their project work.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/10">
            <CardHeader>
              <CardTitle className="text-lg text-orange-800 dark:text-orange-200">
                Challenge: "Projects Take Longer Than Expected"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700 dark:text-orange-300">
                <strong>Solution:</strong> Start with clear parameters and deadlines. Use project management 
                tools and regular check-ins. Build in flexibility while maintaining standards for quality work.
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 bg-orange-50 dark:bg-orange-950/10">
            <CardHeader>
              <CardTitle className="text-lg text-orange-800 dark:text-orange-200">
                Challenge: "Grading Takes Forever"
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-700 dark:text-orange-300">
                <strong>Solution:</strong> Use peer review, self-assessment, and focused feedback on key learning objectives. 
                Not every assignment needs comprehensive grading—focus your energy on the most important learning evidence.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Indicators */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Signs Your PBL Implementation is Working</h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
            <CardHeader>
              <CardTitle className="text-lg text-green-800 dark:text-green-200">
                Student Engagement Indicators
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>• Students ask questions about business applications, not just "What's on the test?"</p>
              <p>• Students help each other solve problems instead of asking you for all answers</p>
              <p>• Students reference previous projects when tackling new challenges</p>
              <p>• Students take ownership of their learning and show pride in their work</p>
              <p>• Students make connections between math skills and real-world applications</p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50 dark:bg-green-950/10">
            <CardHeader>
              <CardTitle className="text-lg text-green-800 dark:text-green-200">
                Learning Outcome Indicators
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>• Students can explain when and why to use specific Excel functions</p>
              <p>• Students transfer skills to new, unfamiliar business scenarios</p>
              <p>• Students demonstrate professional communication about technical topics</p>
              <p>• Students show growth in both technical skills and business thinking</p>
              <p>• Students create work products they're genuinely proud to share</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Next Steps */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>

        <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950/10">
          <CardHeader>
            <CardTitle className="text-lg text-blue-800 dark:text-blue-200">
              Your PBL Journey
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="font-semibold text-blue-800 dark:text-blue-200">1.</span>
                <div>
                  <Link href="/teacher/course-overview/backward-design" className="text-blue-700 dark:text-blue-300 hover:underline">
                    <strong>Review the Backward Design Framework</strong>
                  </Link> to understand unit structure
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-blue-800 dark:text-blue-200">2.</span>
                <div>
                  <strong>Explore Unit 1 Materials</strong> to see PBL in action
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-blue-800 dark:text-blue-200">3.</span>
                <div>
                  <strong>Set Up Your Classroom Technology</strong> for successful implementation
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-blue-800 dark:text-blue-200">4.</span>
                <div>
                  <strong>Study the Excel Skill Progression</strong> to understand the technical curriculum
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold text-blue-800 dark:text-blue-200">5.</span>
                <div>
                  <strong>Access PBL Coaching Resources</strong> for ongoing support
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        <p className="mt-6 text-muted-foreground">
          Remember: PBL is a journey, not a destination. Start where you're comfortable and gradually expand 
          your facilitation skills. Your students will benefit from authentic learning experiences even as 
          you're developing your PBL expertise.
        </p>
      </section>
    </div>
  )
}