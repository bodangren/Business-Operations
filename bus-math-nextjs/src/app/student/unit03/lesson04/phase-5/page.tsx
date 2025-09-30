import ComprehensionCheck from "@/components/exercises/ComprehensionCheck";
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ClipboardCheck, TrendingUp, Award, Briefcase } from "lucide-react";
import { lesson04Data, unit03Data, lesson04Phases } from "../lesson-data";
import { getUnit03Phase5ComprehensionCheckItems } from "@/data/question-banks/unit03-phase5";

const currentPhase = lesson04Phases[4]; // Assessment phase

const masteryAssessmentQuestions = getUnit03Phase5ComprehensionCheckItems({ lessonIds: ["lesson04"] });

export default function Unit03Lesson04Phase5() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
      <PhaseHeader 
        unit={unit03Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
      
      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
              📊 Phase 5: INDEX/MATCH & Named Ranges - Professional Mastery Assessment
            </Badge>
            
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">
                Demonstrating Wall Street-Level Excel Proficiency
              </h1>
              
              <div className="bg-gradient-to-r from-yellow-100 to-amber-100 p-6 rounded-lg border border-yellow-200 mb-8">
                <p className="text-lg leading-relaxed text-yellow-900">
                  Sarah's transformation from VLOOKUP disasters to INDEX/MATCH mastery represents more than just learning new 
                  Excel functions—it demonstrates the professional mindset that separates successful entrepreneurs from those who 
                  struggle to gain investor confidence. Today's assessment evaluates your ability to apply these same professional 
                  standards to create robust, maintainable financial models that can handle real-world business complexity.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="text-blue-800 text-lg flex items-center gap-2">
                      <ClipboardCheck className="h-5 w-5" />
                      Technical Mastery
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-700 text-sm">
                      Demonstrates advanced INDEX/MATCH syntax, named range implementation, error handling, 
                      and dynamic formula construction that meets professional standards.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-800 text-lg flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Business Application
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-green-700 text-sm">
                      Applies Excel techniques to solve real financial modeling challenges, understanding 
                      when and why to use advanced functions in business contexts.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="text-purple-800 text-lg flex items-center gap-2">
                      <Award className="h-5 w-5" />
                      Professional Standards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-700 text-sm">
                      Understands the quality standards that investors and financial professionals expect 
                      from business systems and financial models.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-8">
                <h3 className="font-semibold text-blue-900 mb-3 text-xl">Assessment Performance Standards</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">🥇 Exemplary (90-100%)</h4>
                    <p className="text-blue-700 text-sm">
                      Demonstrates mastery of advanced INDEX/MATCH techniques, understands professional naming conventions, 
                      and can explain business rationale for technical choices. Ready for Wall Street-level modeling.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">🥈 Proficient (75-89%)</h4>
                    <p className="text-blue-700 text-sm">
                      Shows solid understanding of INDEX/MATCH over VLOOKUP, can implement basic named ranges, 
                      and recognizes professional quality standards. Ready for most business applications.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-800 mb-2">📚 Developing (Below 75%)</h4>
                    <p className="text-blue-700 text-sm">
                      Needs additional practice with INDEX/MATCH syntax and professional modeling concepts. 
                      Review phase 2-3 materials and practice with simpler scenarios before advancing.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ComprehensionCheck
          title="INDEX/MATCH & Named Ranges: Professional Mastery Assessment"
          description="Demonstrate your understanding of advanced Excel techniques for investor-ready financial models."
          questions={masteryAssessmentQuestions}
          showExplanations={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800 flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                Career Connection: Excel in the Professional World
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-green-800 mb-4">
                The INDEX/MATCH and named range techniques you've mastered are used daily by:
              </p>
              <ul className="list-disc list-inside space-y-2 text-green-700 text-sm">
                <li><strong>Investment Banking Analysts:</strong> Building DCF models and pitch decks</li>
                <li><strong>Management Consultants:</strong> Creating client recommendation models</li>
                <li><strong>Corporate Finance Teams:</strong> Managing budgets and forecasts</li>
                <li><strong>Startup Founders:</strong> Presenting to VCs and managing investor relations</li>
                <li><strong>CPAs and Controllers:</strong> Automating financial reporting processes</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Next Steps: Building on Your Foundation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-orange-800 mb-4">
                With INDEX/MATCH mastery established, you're ready for lesson05 advanced automation:
              </p>
              <ul className="list-disc list-inside space-y-2 text-orange-700 text-sm">
                <li><strong>Conditional Formatting Rules:</strong> Visual error detection systems</li>
                <li><strong>Data Validation:</strong> Preventing input errors before they occur</li>
                <li><strong>Automated Cross-References:</strong> Linking statements dynamically</li>
                <li><strong>Dashboard Development:</strong> Executive summary visualizations</li>
                <li><strong>VBA Integration:</strong> Custom automation for complex scenarios</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-lg border border-yellow-200 max-w-4xl mx-auto">
          <h3 className="font-semibold text-yellow-900 mb-2 text-xl">Sarah's Investor Success Story</h3>
          <p className="text-yellow-800 leading-relaxed mb-4">
            Six months after mastering INDEX/MATCH, Sarah's second investor presentation was a complete turnaround. 
            When the investor asked for updated numbers, Sarah simply refreshed her data connection, and every financial 
            statement updated instantly. "Now this is what I call a professional model," he said, approving her 
            line of credit on the spot.
          </p>
          <p className="text-yellow-800 leading-relaxed">
            The investor was so impressed that he recommended Sarah to his network, leading to three new major clients. 
            "Your attention to technical detail gives me confidence in your business management," he told her. 
            That's the power of professional Excel skills—they signal competence far beyond spreadsheets.
          </p>
        </div>
      </main>

      <PhaseFooter 
        unit={unit03Data}
        lesson={lesson04Data}
        phase={currentPhase}
        phases={lesson04Phases}
      />
    </div>
  );
}