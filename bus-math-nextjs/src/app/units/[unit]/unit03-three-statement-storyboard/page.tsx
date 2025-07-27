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

export default function Unit03Page() {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded">Unit 3</span>
          <span>3-4 weeks</span>
          <span className="text-yellow-600 font-medium">Intermediate</span>
        </div>
        <h1 className="text-4xl font-bold">Three Statement Storyboard</h1>
        <p className="text-xl text-muted-foreground">
          Create integrated financial statements that tell a cohesive story about 
          business performance, connecting the income statement, balance sheet, and cash flow statement.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Unit Overview</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">🎯 Learning Objectives</h3>
            <ul className="space-y-2 text-sm">
              <li>• Understand the interconnections between financial statements</li>
              <li>• Create dynamic linked financial models</li>
              <li>• Master cash flow statement preparation</li>
              <li>• Analyze financial performance trends</li>
              <li>• Present financial narratives effectively</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">🛠️ Tools & Skills</h3>
            <ul className="space-y-2 text-sm">
              <li>• Advanced Excel modeling techniques</li>
              <li>• Financial statement analysis</li>
              <li>• Data visualization and charting</li>
              <li>• Scenario modeling and sensitivity analysis</li>
              <li>• Professional presentation design</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">📊 Final Deliverables</h3>
            <ul className="space-y-2 text-sm">
              <li>• Integrated three-statement financial model</li>
              <li>• Dynamic cash flow statement generator</li>
              <li>• Financial performance dashboard</li>
              <li>• Scenario analysis workbook</li>
              <li>• Executive summary presentation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">🔍 Driving Question</h2>
        <div className="border-l-4 border-primary bg-muted/50 p-6">
          <p className="font-semibold mb-2">
            "How do the three core financial statements work together to tell 
            the complete story of a business's financial health and performance?"
          </p>
          <p className="text-muted-foreground">
            Working with TechStart Solutions' full-year data, you'll create an 
            integrated financial model that shows how business decisions impact all three statements.
          </p>
        </div>
      </section>
    </div>
  )
}