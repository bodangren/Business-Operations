import { withBasePath } from "@/lib/paths"

/** @returns Start your group workbook. */
export default function LessonContent() {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Start your group workbook</h3>
      <p>Which weekend plan can cover forecast demand and keep expected food waste at or below 3%?</p><ol className="list-decimal space-y-2 pl-6">
        <li>Download the workbook for your assigned group. Keep and use this file for Lessons 8–10.</li>
        <li>Use Data → Analysis → Forecasting → Dashboard → Recommendation.</li>
        <li>On Recommendation, state the decision about expected food waste and demand coverage. Record a risk.</li>
        <li>Keep the raw data. Identify the duplicate and complete Analysis.</li>
        <li>Submit the workbook with your source check and completed Analysis.</li>
      </ol><ul className="list-disc space-y-1 pl-6">
        <li><a className="font-semibold underline" href={withBasePath("/resources/Unit04_Group1_Cafe_Start.xlsx")} download="Unit04_Group1_Cafe_Start.xlsx">Unit04_Group1_Cafe_Start.xlsx</a></li>
        <li><a className="font-semibold underline" href={withBasePath("/resources/Unit04_Group2_Cafe_Start.xlsx")} download="Unit04_Group2_Cafe_Start.xlsx">Unit04_Group2_Cafe_Start.xlsx</a></li>
        <li><a className="font-semibold underline" href={withBasePath("/resources/Unit04_Group3_Cafe_Start.xlsx")} download="Unit04_Group3_Cafe_Start.xlsx">Unit04_Group3_Cafe_Start.xlsx</a></li>
        <li><a className="font-semibold underline" href={withBasePath("/resources/Unit04_Group4_Cafe_Start.xlsx")} download="Unit04_Group4_Cafe_Start.xlsx">Unit04_Group4_Cafe_Start.xlsx</a></li>
        <li><a className="font-semibold underline" href={withBasePath("/resources/Unit04_Group5_Cafe_Start.xlsx")} download="Unit04_Group5_Cafe_Start.xlsx">Unit04_Group5_Cafe_Start.xlsx</a></li>
        <li><a className="font-semibold underline" href={withBasePath("/resources/Unit04_Group6_Cafe_Start.xlsx")} download="Unit04_Group6_Cafe_Start.xlsx">Unit04_Group6_Cafe_Start.xlsx</a></li>
      </ul><p>The supplied data support a preparation plan and a demand coverage check. The project uses synthetic order and waste data. Profit and staffing calculations require additional data.</p><p>Project rubric. Technical accuracy 50%, strategic rationale 20%, communication and clarity 15%, time management 10%, questions and answers 5%.</p>
    </section>
  )
}
