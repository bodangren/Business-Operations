/** @returns Read the forecast and plan formulas. */
export default function LessonContent() {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Read the forecast and plan formulas</h3>
      <p>FORECAST.LINEAR takes the next weekend number, the known order counts, and the matching weekend numbers. CleanPOS[Orders] refers to the full Orders column. A current-row reference such as CleanPOS[[#This Row],[Weekend]] gives one weekend number.</p>
      <p>The selected plan supplies a demand factor, prepared units, and expected wasted units. Check for exactly one matching name before using SUMIF. Resolve invalid selections or missing inputs before you report a result.</p>
    </section>
  )
}
