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

export default function Unit01Page() {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded">Unit 1</span>
          <span>2-3 weeks</span>
          <span className="text-green-600 font-medium">Beginner</span>
        </div>
        <h1 className="text-4xl font-bold">Smart Ledger Launch</h1>
        <p className="text-xl text-muted-foreground">
          Build a comprehensive accounting ledger system in Excel with automated features, 
          professional formatting, and real-time calculations that will serve as the foundation 
          for all your business accounting needs.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Unit Overview</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">🎯 Learning Objectives</h3>
            <ul className="space-y-2 text-sm">
              <li>• Design and implement a professional double-entry bookkeeping system</li>
              <li>• Create automated formulas for account balances and trial balance calculations</li>
              <li>• Apply conditional formatting for visual data analysis</li>
              <li>• Understand the fundamental accounting equation: Assets = Liabilities + Equity</li>
              <li>• Master Excel functions: SUM, SUMIF, VLOOKUP, and conditional logic</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">🛠️ Tools & Skills</h3>
            <ul className="space-y-2 text-sm">
              <li>• Excel spreadsheet design and formatting</li>
              <li>• Formula creation and cell referencing</li>
              <li>• Data validation and error checking</li>
              <li>• Chart creation for financial visualization</li>
              <li>• Template development for reusability</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">📊 Final Deliverables</h3>
            <ul className="space-y-2 text-sm">
              <li>• Complete Smart Ledger Excel workbook</li>
              <li>• Trial balance with automated calculations</li>
              <li>• Chart of accounts with categorization</li>
              <li>• Monthly financial summary dashboard</li>
              <li>• User guide and documentation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">🔍 Driving Question</h2>
        <div className="border-l-4 border-primary bg-muted/50 p-6">
          <p className="font-semibold mb-2">
            "How can a small business owner track their financial transactions 
            efficiently and accurately using Excel to make informed business decisions?"
          </p>
          <p className="text-muted-foreground">
            Throughout this unit, you'll work with TechStart Solutions, a fictional 
            technology consulting company, to build their complete accounting system 
            from the ground up.
          </p>
        </div>
      </section>
    </div>
  )
}