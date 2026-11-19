import PeerCritiqueForm from "@/components/exercises/PeerCritiqueForm"

/** @returns Test the prototype and revise. */
export default function LessonContent() {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Test the prototype and revise</h3>
      <p>Which weekend plan can cover forecast demand and keep expected food waste at or below 3%?</p>
      <ol className="list-decimal space-y-2 pl-6">
        <li>Continue your Lesson 8 workbook.</li>
        <li>Complete Forecasting and Dashboard. Test Low, Base, and High. Record the waste and service result for each plan.</li>
        <li>Complete Recommendation. Cite evidence, give one limit, and trace a result to its source.</li>
        <li>Rehearse for 4–5 minutes. Record one revision from peer feedback.</li>
        <li>Submit the workbook with two charts, three scenario tests, and the revision note.</li>
      </ol>
      <p>The supplied data support a preparation plan and a demand coverage check. The project uses synthetic order and waste data. Profit and staffing calculations require additional data.</p>
      <p>Project rubric. Technical accuracy 50%, strategic rationale 20%, communication and clarity 15%, time management 10%, questions and answers 5%.</p><PeerCritiqueForm projectTitle="Data‑Driven Café Prototype" unitNumber={4} />
    </section>
  )
}
