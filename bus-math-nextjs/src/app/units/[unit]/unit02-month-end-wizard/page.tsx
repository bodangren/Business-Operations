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

export default function Unit02Page() {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded">Unit 2</span>
          <span>2-3 weeks</span>
          <span className="text-yellow-600 font-medium">Intermediate</span>
        </div>
        <h1 className="text-4xl font-bold">Month-End Wizard</h1>
        <p className="text-xl text-muted-foreground">
          Automate month-end closing procedures and reports using Excel to streamline 
          your financial reporting process and ensure accuracy in your monthly statements.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Unit Overview</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">🎯 Learning Objectives</h3>
            <ul className="space-y-2 text-sm">
              <li>• Master month-end closing procedures and workflows</li>
              <li>• Create automated reconciliation templates</li>
              <li>• Generate professional financial reports</li>
              <li>• Implement error-checking and validation systems</li>
              <li>• Design dashboard summaries for management reporting</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">🛠️ Tools & Skills</h3>
            <ul className="space-y-2 text-sm">
              <li>• Advanced Excel formulas and functions</li>
              <li>• Pivot tables and data analysis</li>
              <li>• Automated report generation</li>
              <li>• Template design and standardization</li>
              <li>• Quality control and audit procedures</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">📊 Final Deliverables</h3>
            <ul className="space-y-2 text-sm">
              <li>• Month-end closing checklist template</li>
              <li>• Automated reconciliation workbooks</li>
              <li>• Professional financial statement generator</li>
              <li>• Management dashboard with KPIs</li>
              <li>• Process documentation and procedures</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">🔍 Driving Question</h2>
        <div className="border-l-4 border-primary bg-muted/50 p-6">
          <p className="font-semibold mb-2">
            "How can a business ensure accurate and timely month-end financial reporting 
            while minimizing errors and reducing the time spent on manual processes?"
          </p>
          <p className="text-muted-foreground">
            You'll continue working with TechStart Solutions to implement their month-end 
            closing procedures, creating automated systems that save time and improve accuracy.
          </p>
        </div>
      </section>
    </div>
  )
}