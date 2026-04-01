import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { lesson01Data, unit06Data, lesson01Phases } from "../lesson-data"
import ComprehensionCheck from "@/components/exercises/ComprehensionCheck"

export default function Phase5Page() {
  const currentPhase = lesson01Phases.find(p => p.sequence === 5)!

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-rose-50">
      <PhaseHeader
        lesson={lesson01Data}
        unit={unit06Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />

      <div className="max-w-4xl mx-auto space-y-8 pb-8">
        <ComprehensionCheck
          questions={[
            {
              id: "q1",
              question: "What happened to TechStart's profit margins even though revenue was higher than ever?",
              answers: [
                "Profit margins stayed the same",
                "Profit margins increased along with revenue",
                "Profit margins decreased by 22%",
                "Profit margins doubled"
              ],
              explanation: "Despite higher revenue, Sarah discovered that profit margins had actually decreased by 22% due to new expenses like payroll, benefits, and expanded software subscriptions. This is the Profit Paradox."
            },
            {
              id: "q2", 
              question: "What are the three pillars of the pricing scoreboard?",
              answers: [
                "Revenue, profit, and loss",
                "Cheap, expensive, and fair",
                "Profitable, competitive, and defensible",
                "Cost, markup, and margin"
              ],
              explanation: "The three pillars are: Profitable (covering costs AND leaving profit), Competitive (making sense compared to market), and Defensible (able to explain why that price)."
            },
            {
              id: "q3",
              question: "Why was Sarah's competitor able to charge 40% more for similar services?",
              answers: [
                "They had higher costs",
                "They were losing money on every sale",
                "They were pricing based on value, not just cost",
                "They had fewer customers"
              ],
              explanation: "The competitor was successful at a higher price because they were pricing based on the value they provided, not just covering their costs. This is called value-based pricing."
            },
            {
              id: "q4",
              question: "Why is the 'Profit Paradox' dangerous for growing businesses?",
              answers: [
                "It makes businesses charge too much",
                "It leads to working harder but making less money",
                "It causes customers to leave",
                "It makes businesses too competitive"
              ],
              explanation: "The Profit Paradox is when a business grows (more revenue) but actually makes less profit per dollar of sales because costs grow faster than revenue."
            }
          ]}
          title="Exit Ticket: Understanding Sarah's Pricing Problem"
          description="Answer these questions to show you understand the founder problem and the pricing scoreboard."
        />
      </div>

      <PhaseFooter
        lesson={lesson01Data}
        unit={unit06Data}
        phase={currentPhase}
        phases={lesson01Phases}
      />
    </div>
  )
}
