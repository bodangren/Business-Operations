/** @returns Read and clean the source table. */
export default function LessonContent() {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold">Read and clean the source table</h3>
      <p>Each row represents one weekend. Compare every field before you mark a record as a duplicate. A repeated date by itself does not prove duplication.</p>
      <p>TRIM removes extra spaces. PROPER changes the capitalization. Use these functions on the Day column in the clean table. Keep the raw table for comparison.</p>
    </section>
  )
}
