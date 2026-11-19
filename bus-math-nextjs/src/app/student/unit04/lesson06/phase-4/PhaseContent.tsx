import { withBasePath } from "@/lib/paths"

/** @returns Build and test the dashboard. */
export default function LessonContent() {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Build and test the dashboard</h3>
      <p><a className="font-semibold underline" href={withBasePath("/resources/unit04-lesson06-student.xlsx")} download="Unit04_L06_Start.xlsx">Unit04_L06_Start.xlsx</a> · <a className="font-semibold underline" href={withBasePath("/resources/unit04-lesson06-tutorial.md")}>Workbook tutorial</a></p>
      <ol className="list-decimal space-y-2 pl-6">
        <li>Keep the completed Analysis. Forecast weekend 9 with FORECAST.LINEAR(NextWeekend,CleanPOS[Orders],CleanPOS[Weekend]).</li>
        <li>Use COUNTIF to confirm exactly one scenario match. Use SUMIF to read the selected plan from Plans. Resolve invalid names or missing inputs before reporting a result.</li>
        <li>Multiply forecast orders by the demand factor. Divide expected waste by prepared units. Compare the result with 3%. Compare units available after waste with demand rounded up.</li>
        <li>Link the order values in Dashboard A5:B13 and the waste rates in D5:E8. Insert a line chart for orders and a column chart for waste rates.</li>
        <li>Switch Low, Base, and High. Check that the Plan value changes. The chart ranges are fixed for this exercise. If you add a weekend, extend the chart source and confirm the new point appears.</li>
      </ol>
    </section>
  )
}
