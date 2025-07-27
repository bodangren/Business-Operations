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

export default function Unit07Page() {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded">Unit 7</span>
          <span>2-3 weeks</span>
          <span className="text-orange-600 font-medium">Advanced</span>
        </div>
        <h1 className="text-4xl font-bold">Asset Inventory Tracker</h1>
        <p className="text-xl text-muted-foreground">
          Build comprehensive asset management systems that track depreciation, 
          maintenance schedules, and lifecycle costs for optimal resource planning.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Unit Overview</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">🎯 Learning Objectives</h3>
            <ul className="space-y-2 text-sm">
              <li>• Design comprehensive asset tracking systems</li>
              <li>• Calculate depreciation using multiple methods</li>
              <li>• Model total cost of ownership</li>
              <li>• Plan maintenance schedules and budgets</li>
              <li>• Optimize asset replacement timing</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">🛠️ Tools & Skills</h3>
            <ul className="space-y-2 text-sm">
              <li>• Database design and management</li>
              <li>• Depreciation calculation methods</li>
              <li>• Predictive maintenance modeling</li>
              <li>• Cost-benefit analysis techniques</li>
              <li>• Asset performance tracking</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">📊 Final Deliverables</h3>
            <ul className="space-y-2 text-sm">
              <li>• Complete asset inventory database</li>
              <li>• Depreciation calculation system</li>
              <li>• Maintenance scheduling tool</li>
              <li>• Asset replacement planning model</li>
              <li>• Total cost of ownership analyzer</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">🔍 Driving Question</h2>
        <div className="border-l-4 border-primary bg-muted/50 p-6">
          <p className="font-semibold mb-2">
            "How can a business effectively track and manage its physical assets 
            to minimize costs while maximizing productivity and value?"
          </p>
          <p className="text-muted-foreground">
            You'll develop a comprehensive asset management system for a manufacturing 
            company, tracking everything from equipment to vehicles to technology assets.
          </p>
        </div>
      </section>
    </div>
  )
}