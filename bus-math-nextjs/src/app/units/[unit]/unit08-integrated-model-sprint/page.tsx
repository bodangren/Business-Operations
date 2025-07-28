import { UnitTemplate } from "@/components/unit/UnitTemplate"
import { unit08Data } from "@/data/unit08"

export async function generateStaticParams() {
  return [
    { unit: 'unit01-smart-ledger' },
    { unit: 'unit02-month-end-wizard' },
    { unit: 'unit03-three-statement-storyboard' },
    { unit: 'unit04-data-driven-cafe' },
    { unit: 'unit05-payday-simulator' },
    { unit: 'unit06-pricelab-challenge' },
    { unit: 'unit07-asset-inventory-tracker' },
    { unit: 'unit08-integrated-model-sprint' }
  ]
}

export default function Unit08Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <UnitTemplate unitData={unit08Data} />
    </div>
  )
}