
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson01Data, unit06Data, lesson01Phases } from "../lesson-data";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";

export default function Phase6Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 6)!

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader
          lesson={lesson01Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
        <ReflectionJournal 
          unitTitle="Unit 6: PriceLab Challenge - Lesson 1 Reflection"
          prompts={[
            {
              id: 'courage-u6-l1',
              category: 'courage',
              prompt: 'What seems most challenging about working with messy, real-world data? How can you prepare to face that challenge?',
              placeholder: 'e.g., I’m worried I might delete the wrong data. I can prepare by always working on a copy of the original file...'
            },
            {
              id: 'adaptability-u6-l1',
              category: 'adaptability',
              prompt: 'Imagine you receive a new set of competitor data in a completely different format. How would you adapt your cleaning process?',
              placeholder: 'e.g., I would first analyze the new structure, then create a new checklist of cleaning steps tailored to that format...'
            },
            {
              id: 'persistence-u6-l1',
              category: 'persistence',
              prompt: 'Data cleaning can be a tedious process. What strategies can you use to stay focused and ensure you don’t miss any errors?',
              placeholder: 'e.g., I will work in short bursts, use a checklist for each step, and ask a teammate to review my work...'
            }
          ]}
        />
        </div>

        <PhaseFooter
          lesson={lesson01Data}
          unit={unit06Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}
