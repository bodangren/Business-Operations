import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"

/** @returns Present your café plan. */
export default function LessonContent() {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Present your café plan</h3>
      <p>Which weekend plan can cover forecast demand and keep expected food waste at or below 3%?</p>
      <ol className="list-decimal space-y-2 pl-6">
        <li>Use the completed workbook from Lessons 8 and 9.</li>
        <li>Present for 4–5 minutes. Cite forecast orders, planned waste rate, and available units. Trace one chart value to its source.</li>
        <li>Explain one uncertainty. If no plan meets both checks, explain the trade-off.</li>
        <li>Submit the final workbook and presentation notes or slides. Review two other teams.</li>
      </ol>
      <p>The supplied data support a preparation plan and a demand coverage check. The project uses synthetic order and waste data. Profit and staffing calculations require additional data.</p>
      <p>Project rubric. Technical accuracy 50%, strategic rationale 20%, communication and clarity 15%, time management 10%, questions and answers 5%.</p><PeerCritiqueForm projectTitle="Data‑Driven Café Final Presentation" unitNumber={4} />
    </section>
  )
}
