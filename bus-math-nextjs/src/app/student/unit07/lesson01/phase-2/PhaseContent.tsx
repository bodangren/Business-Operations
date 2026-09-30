import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Boxes, DollarSign, ScanSearch } from "lucide-react"
import { simulationIntro } from "../inventory-simulation"
import InventoryPressureMap from "../InventoryPressureMap"


function formatCurrency(value: number) {
  return `$${value.toLocaleString()}`
}

export default function Phase2Content() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-sky-50">

      <div className="space-y-8">
        <section className="space-y-6">
          <div className="text-center space-y-4">
            <Badge className="bg-sky-100 text-sky-800 text-lg px-4 py-2">Phase 2: Introduction</Badge>
            <h2 className="text-3xl font-bold text-slate-900">Scan the Month Before It Starts</h2>
            <p className="text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
              You are stepping into Sarah&apos;s month before the accounting rules are explained.
              Read the setup first, then decide where the business pressure shows up.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <Boxes className="h-5 w-5" />
                  Starting shelf
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-slate-800">
                <p className="text-3xl font-bold">{simulationIntro.beginningUnits} kits</p>
                <p className="text-sm">
                  Sarah starts the month with kits already on the shelf from an earlier batch.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <DollarSign className="h-5 w-5" />
                  Starting cash
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-slate-800">
                <p className="text-3xl font-bold">{formatCurrency(simulationIntro.startingCash)}</p>
                <p className="text-sm">
                  Every new order uses cash before the kits are ever sold.
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-slate-900">
                  <ScanSearch className="h-5 w-5" />
                  Unit scoreboard
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-slate-800">
                <p className="text-lg font-bold">
                  Beginning Inventory + Purchases - COGS = Ending Inventory
                </p>
                <p className="text-sm">
                  This is not today&apos;s full lesson. It is the scoreboard Sarah will need to defend by the end of the unit.
                </p>
              </CardContent>
            </Card>
          </div>

          <InventoryPressureMap />
        </section>
      </div>

    </div>
  )
}
