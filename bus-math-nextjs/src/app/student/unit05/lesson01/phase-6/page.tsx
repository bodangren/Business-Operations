
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson01Data, unit05Data, lesson01Phases } from "../lesson-data";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";

export default function Phase6Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 6)!

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader
          lesson={lesson01Data}
          unit={unit05Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
        <ReflectionJournal 
          unitTitle="Unit 5: PayDay Simulator - Lesson 1 Reflection"
          prompts={[
            {
              id: 'courage-u5-l1',
              category: 'courage',
              prompt: 'What is the most daunting aspect of being responsible for someone else’s paycheck? What can you do to build confidence in this area?',
              placeholder: 'e.g., I’m worried about making a mistake. I can build confidence by creating a thorough checklist...'
            },
            {
              id: 'adaptability-u5-l1',
              category: 'adaptability',
              prompt: 'How would you adapt your cash flow plan if a major client paid their invoice two weeks late, right before payroll was due?',
              placeholder: 'e.g., I would need to access a line of credit, or communicate with my employee about...'
            },
            {
              id: 'persistence-u5-l1',
              category: 'persistence',
              prompt: 'Building a payroll system involves many small, detailed steps. What strategies can you use to stay focused and ensure accuracy throughout the process?',
              placeholder: 'e.g., I will break the process into smaller tasks, double-check my work after each step, and...'
            }
          ]}
        />
        </div>

        <PhaseFooter
          lesson={lesson01Data}
          unit={unit05Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}
