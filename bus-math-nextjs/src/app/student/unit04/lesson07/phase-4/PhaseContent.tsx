import { withBasePath } from "@/lib/paths"

/** @returns Rehearse the full workbook. */
export default function LessonContent() {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Rehearse the full workbook</h3>
      <p><a className="font-semibold underline" href={withBasePath("/resources/unit04-lesson07-student.xlsx")} download="Unit04_L07_Start.xlsx">Unit04_L07_Start.xlsx</a> · <a className="font-semibold underline" href={withBasePath("/resources/unit04-lesson07-tutorial.md")}>Workbook tutorial</a></p>
      <ol className="list-decimal space-y-2 pl-6">
        <li>Use the same shared data as the class. Keep the five tabs from the starter.</li>
        <li>Check the duplicate on Data. Complete Analysis, Forecasting, Dashboard, and Recommendation.</li>
        <li>Record waste and service results for Low, Base, and High. Cite a result and one limit. Trace the result through the linked cells to its source.</li>
      </ol>
    </section>
  )
}
