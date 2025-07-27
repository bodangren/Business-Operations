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

export default function Unit05Page() {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded">Unit 5</span>
          <span>2-3 weeks</span>
          <span className="text-orange-600 font-medium">Advanced</span>
        </div>
        <h1 className="text-4xl font-bold">Payday Simulator</h1>
        <p className="text-xl text-muted-foreground">
          Model payroll systems and employee compensation structures, including 
          taxes, benefits, and compliance requirements for comprehensive workforce management.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Unit Overview</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">🎯 Learning Objectives</h3>
            <ul className="space-y-2 text-sm">
              <li>• Understand payroll tax calculations and deductions</li>
              <li>• Model different compensation structures</li>
              <li>• Create automated payroll processing systems</li>
              <li>• Analyze total compensation costs</li>
              <li>• Ensure compliance with labor regulations</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">🛠️ Tools & Skills</h3>
            <ul className="space-y-2 text-sm">
              <li>• Complex formula development</li>
              <li>• Tax calculation systems</li>
              <li>• Data validation and error handling</li>
              <li>• Automated report generation</li>
              <li>• Compliance tracking and documentation</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">📊 Final Deliverables</h3>
            <ul className="space-y-2 text-sm">
              <li>• Complete payroll processing system</li>
              <li>• Employee compensation analyzer</li>
              <li>• Tax withholding calculator</li>
              <li>• Benefits cost modeling tool</li>
              <li>• Compliance checklist and documentation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">🔍 Driving Question</h2>
        <div className="border-l-4 border-primary bg-muted/50 p-6">
          <p className="font-semibold mb-2">
            "How can a business design fair and competitive compensation packages 
            while managing costs and ensuring compliance with tax and labor laws?"
          </p>
          <p className="text-muted-foreground">
            Working with multiple employee scenarios, you'll build a comprehensive 
            payroll system that handles various compensation structures and benefits packages.
          </p>
        </div>
      </section>
    </div>
  )
}