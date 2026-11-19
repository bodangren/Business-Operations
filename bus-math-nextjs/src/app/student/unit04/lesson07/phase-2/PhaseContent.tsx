/** @returns Follow the five workbook sheets. */
export default function LessonContent() {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Follow the five workbook sheets</h3>
      <p>Data → Analysis → Forecasting → Dashboard → Recommendation</p>
      <ol className="list-decimal space-y-2 pl-6">
        <li>Data holds the synthetic source records.</li>
        <li>Analysis holds the clean records, statistics, and historical waste.</li>
        <li>Forecasting holds the estimate, plan assumptions, and checks.</li>
        <li>Dashboard holds the observed orders chart and the waste comparison.</li>
        <li>Recommendation holds the decision, evidence, limit, trace, and scenario test results.</li>
      </ol>
    </section>
  )
}
