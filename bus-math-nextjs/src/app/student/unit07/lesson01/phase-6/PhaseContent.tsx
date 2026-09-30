import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Phase6Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-rose-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-rose-100 text-rose-800 text-lg px-4 py-2">Phase 6: Closing</Badge>
            <h2 className="text-3xl font-bold text-slate-900">Close the Launch and Look Ahead</h2>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-rose-200 bg-white">
            <CardHeader>
              <CardTitle className="text-rose-900">What Students Should Leave With Today</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-800">
              <div className="rounded-lg border border-rose-300 bg-rose-50 px-4 py-5 text-center">
                <p className="text-2xl font-bold text-rose-950">
                  Ending Inventory = Beginning Inventory + Purchases - Cost of Goods Sold
                </p>
              </div>
              <ul className="list-disc list-inside space-y-2">
                <li>Sarah's month became complicated because buying, selling, and pricing happened at different moments.</li>
                <li>Ending inventory is still a real asset on the shelf, not just a guess at month-end.</li>
                <li>The unit will teach the rules Sarah needs so she can defend that number with confidence.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Preview of Lesson 2</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-blue-900">
              <p>
                Lesson 2 starts building the first accounting rule Sarah needs: how businesses track the flow of inventory
                costs when the same kind of product is bought at different prices during the month.
              </p>
              <p>
                FIFO, LIFO, specific identification, and weighted average all matter because Sarah cannot keep saying,
                "I know what is on the shelf, but I am not sure which costs belong there."
              </p>
            </CardContent>
          </Card>

        </section>
      </div>

    </div>
  )
}
