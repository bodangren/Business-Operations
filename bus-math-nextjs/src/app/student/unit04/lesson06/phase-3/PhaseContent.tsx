/** @returns Compare the plans before you build. */
export default function LessonContent() {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Compare the plans before you build</h3>
      <p>Base prepares 120 units and expects to waste 3. Waste is 3 ÷ 120 = 2.5%. There are 117 units available. The forecast of 116.43 orders rounds up to 117 for the service check.</p>
      <p>High prepares 132 units and expects to waste 5. Waste is 3.79%, above the 3% target. Its 127 available units are below the rounded estimate of 129.</p>
    </section>
  )
}
