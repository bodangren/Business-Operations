import { PhaseHeader } from "@/components/student/PhaseHeader"
import { PhaseFooter } from "@/components/student/PhaseFooter"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { lesson05Data, unit04Data, lesson05Phases } from "../lesson-data"

const currentPhase = lesson05Phases[3]

export default function Phase4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
      <PhaseHeader unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />

      <main className="container mx-auto px-4 py-8 space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-orange-100 text-orange-800 text-lg px-4 py-2">🚀 Phase 4: Independent Practice</Badge>
            <h1 className="text-3xl font-bold text-gray-900">Advanced Forecast Mastery Challenges</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Download the practice data, build scenario toggles, and prove your automation stays reliable as inputs grow.
            </p>
          </div>
        </section>

        <section className="max-w-4xl mx-auto space-y-8">
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-900">Download Dataset</CardTitle>
            </CardHeader>
            <CardContent className="text-blue-900 space-y-2">
              <p>
                Use this dataset with edge cases (outliers, missing keys, stale dates) to stress‑test your model:
              </p>
              <a className="underline font-semibold" href="/resources/unit04-forecasting-advanced-practice.csv" download>
                /resources/unit04-forecasting-advanced-practice.csv
              </a>
              <p className="text-sm">Place it on a sheet and convert to an Excel Table named <strong>Sales</strong>.</p>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-900">Challenges</CardTitle>
            </CardHeader>
            <CardContent className="text-green-900 space-y-3">
              <ol className="list-decimal list-inside space-y-1">
                <li>Create <strong>Sales</strong> Table with columns: <em>Date, Week, Units, Price, PromoFlag, HolidayFlag</em>.</li>
                <li>Add <strong>Scenario</strong> input and switch between <em>Baseline</em> and <em>PromoAdjusted</em>.</li>
                <li>Build <strong>Forecast</strong> table and use <code>FORECAST.LINEAR</code> with structured references.</li>
                <li>Exclude promo outliers for PromoAdjusted using <code>FILTER</code> or helper column.</li>
                <li>Install an <strong>Audit Panel</strong> with counts: missing IDs, negative Units, outliers, stale dates (&gt;30 days).</li>
                <li>Document assumptions next to inputs in 2–3 clear sentences.</li>
              </ol>
            </CardContent>
          </Card>

          <Card className="border-indigo-200 bg-indigo-50">
            <CardHeader>
              <CardTitle className="text-indigo-900">Helper Table Spec (Recommended)</CardTitle>
            </CardHeader>
            <CardContent className="text-indigo-900 text-sm space-y-2">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Sales</strong> (Excel Table): Date (date), Week (number), Units (number &ge; 0), Price (currency &gt; 0), PromoFlag (0/1), HolidayFlag (0/1), MenuID (text).</li>
                <li><strong>Validation flags</strong> (helper cols):
                  <div className="mt-1 grid gap-1">
                    <div>• Stale date: <code>=TODAY()-[@Date]&gt;30</code></div>
                    <div>• Negative units: <code>=[@Units]&lt;0</code></div>
                    <div>• Invalid price: <code>=[@Price]&lt;=0</code></div>
                    <div>• Missing MenuID: <code>=OR([@MenuID]=\"\",[@MenuID]=\"Unknown\")</code></div>
                  </div>
                </li>
                <li><strong>Scenario switch</strong>: <code>=SWITCH(Scenario, "Baseline", FORECAST.LINEAR([@Week], Sales[Units], Sales[Week]), "PromoAdjusted", FORECAST.LINEAR([@Week], FILTER(Sales[Units], Sales[PromoFlag]=0), FILTER(Sales[Week], Sales[PromoFlag]=0)), NA())</code></li>
                <li><strong>Segment filter (Drinks)</strong>: <code>=SUMPRODUCT((Sales[Type]=\"Drink\")*(Sales[Week]=[@Week])*Sales[Units])</code></li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-900">Self‑Assessment Checklist</CardTitle>
            </CardHeader>
            <CardContent className="text-purple-900">
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Formulas use Tables and structured references (no fixed ranges).</li>
                <li>Scenario toggle updates outputs instantly without edits.</li>
                <li>Audit Panel shows zero critical errors before presenting.</li>
                <li>IFERROR and XLOOKUP defaults prevent #N/A/#VALUE in outputs.</li>
                <li>Notes explain assumptions and limits in plain language.</li>
                <li>Charts (optional) communicate the forecast clearly.</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <PhaseFooter unit={unit04Data} lesson={lesson05Data} phase={currentPhase} phases={lesson05Phases} />
    </div>
  )
}
