import { UnitSidebar } from "@/components/unit-sidebar"

// This would typically come from a database or CMS
// For now, we'll define the unit structure here
const getUnitData = (unitSlug: string) => {
  const unitMap: Record<string, { number: number, title: string, sections: Array<{id: string, title: string, href: string, progress?: number}> }> = {
    'unit01-smart-ledger': {
      number: 1,
      title: 'Smart Ledger Launch',
      sections: [
        { id: 'intro', title: 'Introduction', href: '/units/unit01-smart-ledger/intro' },
        { id: 'concepts', title: 'Core Concepts', href: '/units/unit01-smart-ledger/concepts' },
        { id: 'excel-model', title: 'Excel Model', href: '/units/unit01-smart-ledger/excel-model' },
        { id: 'examples', title: 'Examples', href: '/units/unit01-smart-ledger/examples' },
        { id: 'exercises', title: 'Exercises', href: '/units/unit01-smart-ledger/exercises' },
        { id: 'summary', title: 'Summary', href: '/units/unit01-smart-ledger/summary' },
      ]
    },
    'unit02-month-end-wizard': {
      number: 2,
      title: 'Month-End Wizard',
      sections: [
        { id: 'intro', title: 'Introduction', href: '/units/unit02-month-end-wizard/intro' },
        { id: 'concepts', title: 'Core Concepts', href: '/units/unit02-month-end-wizard/concepts' },
        { id: 'excel-model', title: 'Excel Model', href: '/units/unit02-month-end-wizard/excel-model' },
        { id: 'examples', title: 'Examples', href: '/units/unit02-month-end-wizard/examples' },
        { id: 'exercises', title: 'Exercises', href: '/units/unit02-month-end-wizard/exercises' },
        { id: 'summary', title: 'Summary', href: '/units/unit02-month-end-wizard/summary' },
      ]
    },
    'unit03-three-statement-storyboard': {
      number: 3,
      title: 'Three Statement Storyboard',
      sections: [
        { id: 'intro', title: 'Introduction', href: '/units/unit03-three-statement-storyboard/intro' },
        { id: 'concepts', title: 'Core Concepts', href: '/units/unit03-three-statement-storyboard/concepts' },
        { id: 'excel-model', title: 'Excel Model', href: '/units/unit03-three-statement-storyboard/excel-model' },
        { id: 'examples', title: 'Examples', href: '/units/unit03-three-statement-storyboard/examples' },
        { id: 'exercises', title: 'Exercises', href: '/units/unit03-three-statement-storyboard/exercises' },
        { id: 'summary', title: 'Summary', href: '/units/unit03-three-statement-storyboard/summary' },
      ]
    },
    'unit04-data-driven-cafe': {
      number: 4,
      title: 'Data-Driven Cafe',
      sections: [
        { id: 'intro', title: 'Introduction', href: '/units/unit04-data-driven-cafe/intro' },
        { id: 'concepts', title: 'Core Concepts', href: '/units/unit04-data-driven-cafe/concepts' },
        { id: 'excel-model', title: 'Excel Model', href: '/units/unit04-data-driven-cafe/excel-model' },
        { id: 'examples', title: 'Examples', href: '/units/unit04-data-driven-cafe/examples' },
        { id: 'exercises', title: 'Exercises', href: '/units/unit04-data-driven-cafe/exercises' },
        { id: 'summary', title: 'Summary', href: '/units/unit04-data-driven-cafe/summary' },
      ]
    },
    'unit05-payday-simulator': {
      number: 5,
      title: 'Payday Simulator',
      sections: [
        { id: 'intro', title: 'Introduction', href: '/units/unit05-payday-simulator/intro' },
        { id: 'concepts', title: 'Core Concepts', href: '/units/unit05-payday-simulator/concepts' },
        { id: 'excel-model', title: 'Excel Model', href: '/units/unit05-payday-simulator/excel-model' },
        { id: 'examples', title: 'Examples', href: '/units/unit05-payday-simulator/examples' },
        { id: 'exercises', title: 'Exercises', href: '/units/unit05-payday-simulator/exercises' },
        { id: 'summary', title: 'Summary', href: '/units/unit05-payday-simulator/summary' },
      ]
    },
    'unit06-pricelab-challenge': {
      number: 6,
      title: 'PriceLab Challenge',
      sections: [
        { id: 'intro', title: 'Introduction', href: '/units/unit06-pricelab-challenge/intro' },
        { id: 'concepts', title: 'Core Concepts', href: '/units/unit06-pricelab-challenge/concepts' },
        { id: 'excel-model', title: 'Excel Model', href: '/units/unit06-pricelab-challenge/excel-model' },
        { id: 'examples', title: 'Examples', href: '/units/unit06-pricelab-challenge/examples' },
        { id: 'exercises', title: 'Exercises', href: '/units/unit06-pricelab-challenge/exercises' },
        { id: 'summary', title: 'Summary', href: '/units/unit06-pricelab-challenge/summary' },
      ]
    },
    'unit07-asset-inventory-tracker': {
      number: 7,
      title: 'Asset Inventory Tracker',
      sections: [
        { id: 'intro', title: 'Introduction', href: '/units/unit07-asset-inventory-tracker/intro' },
        { id: 'concepts', title: 'Core Concepts', href: '/units/unit07-asset-inventory-tracker/concepts' },
        { id: 'excel-model', title: 'Excel Model', href: '/units/unit07-asset-inventory-tracker/excel-model' },
        { id: 'examples', title: 'Examples', href: '/units/unit07-asset-inventory-tracker/examples' },
        { id: 'exercises', title: 'Exercises', href: '/units/unit07-asset-inventory-tracker/exercises' },
        { id: 'summary', title: 'Summary', href: '/units/unit07-asset-inventory-tracker/summary' },
      ]
    },
    'unit08-integrated-model-sprint': {
      number: 8,
      title: 'Integrated Model Sprint',
      sections: [
        { id: 'intro', title: 'Introduction', href: '/units/unit08-integrated-model-sprint/intro' },
        { id: 'concepts', title: 'Core Concepts', href: '/units/unit08-integrated-model-sprint/concepts' },
        { id: 'excel-model', title: 'Excel Model', href: '/units/unit08-integrated-model-sprint/excel-model' },
        { id: 'examples', title: 'Examples', href: '/units/unit08-integrated-model-sprint/examples' },
        { id: 'exercises', title: 'Exercises', href: '/units/unit08-integrated-model-sprint/exercises' },
        { id: 'summary', title: 'Summary', href: '/units/unit08-integrated-model-sprint/summary' },
      ]
    }
  }
  
  return unitMap[unitSlug] || { number: 1, title: 'Unknown Unit', sections: [] }
}

export default async function UnitsLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ unit: string }>
}) {
  const { unit } = await params
  const unitData = getUnitData(unit)

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex gap-8">
        <UnitSidebar 
          unitNumber={unitData.number}
          unitTitle={unitData.title}
          sections={unitData.sections}
        />
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  )
}