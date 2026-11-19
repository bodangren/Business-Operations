import { withBasePath } from "@/lib/paths"

/** @returns Clean and summarize the records. */
export default function LessonContent() {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Clean and summarize the records</h3>
      <p><a className="font-semibold underline" href={withBasePath("/resources/unit04-lesson05-student.xlsx")} download="Unit04_L05_Start.xlsx">Unit04_L05_Start.xlsx</a> · <a className="font-semibold underline" href={withBasePath("/resources/unit04-lesson05-tutorial.md")}>Workbook tutorial</a></p>
      <ol className="list-decimal space-y-2 pl-6">
        <li>Compare the nine raw records with the eight rows in Analysis. Identify the exact duplicate. Keep the raw records.</li>
        <li>Check that weekends 1–8 are in source order. Clean the Day labels with TRIM and PROPER.</li>
        <li>Use COUNT on RawPOS[Weekend] and CleanPOS[Weekend]. The results are 9 and 8.</li>
        <li>Use AVERAGE, MEDIAN, and STDEV.S on the eight order counts. Divide total wasted units by total prepared units for the historical waste rate.</li>
      </ol>
    </section>
  )
}
