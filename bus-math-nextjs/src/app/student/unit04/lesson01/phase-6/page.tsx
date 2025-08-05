
import { PhaseHeader } from "@/components/student/PhaseHeader";
import { PhaseFooter } from "@/components/student/PhaseFooter";
import { lesson01Data, unit04Data, lesson01Phases } from "../lesson-data";
import ReflectionJournal from "@/components/exercises/ReflectionJournal";

export default function Phase6Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 6)!

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6">
        <PhaseHeader
          lesson={lesson01Data}
          unit={unit04Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />

        <div className="max-w-4xl mx-auto space-y-8">
        <ReflectionJournal 
          unitTitle="Unit 4: The Data-Driven Café - Lesson 1 Reflection"
          prompts={[
            {
              id: 'courage-u4-l1',
              category: 'courage',
              prompt: 'What part of starting the café data analysis felt most intimidating or challenging? How did you take the first step?',
              placeholder: 'e.g., I was worried about the large dataset, but I started by just looking at one small part...'
            },
            {
              id: 'adaptability-u4-l1',
              category: 'adaptability',
              prompt: 'How might your initial ideas about the café\'s problems change as you look at the real data?',
              placeholder: 'e.g., I thought the problem was X, but now I think it might be Y because...'
            },
            {
              id: 'persistence-u4-l1',
              category: 'persistence',
              prompt: 'Data analysis can be a slow process. What will you do to stay motivated when you don\'t find an answer right away?',
              placeholder: 'e.g., I will try different ways of looking at the data, ask my team for ideas, or...'
            }
          ]} 
        />
        </div>

        <PhaseFooter
          lesson={lesson01Data}
          unit={unit04Data}
          phase={currentPhase}
          phases={lesson01Phases}
        />
      </div>
    </div>
  )
}
