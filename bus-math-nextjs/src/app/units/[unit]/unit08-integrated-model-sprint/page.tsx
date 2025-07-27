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
    <div className="space-y-8">
      <header className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded">Unit 8</span>
          <span>3-4 weeks</span>
          <span className="text-red-600 font-medium">Expert</span>
        </div>
        <h1 className="text-4xl font-bold">Integrated Model Sprint</h1>
        <p className="text-xl text-muted-foreground">
          Combine all skills learned throughout the course in a comprehensive business model 
          that integrates accounting, analytics, and strategic planning for complete business intelligence.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Unit Overview</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">🎯 Learning Objectives</h3>
            <ul className="space-y-2 text-sm">
              <li>• Integrate all course concepts into a unified model</li>
              <li>• Create sophisticated business intelligence dashboards</li>
              <li>• Develop strategic planning and forecasting tools</li>
              <li>• Build automated reporting and alert systems</li>
              <li>• Present comprehensive business recommendations</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">🛠️ Tools & Skills</h3>
            <ul className="space-y-2 text-sm">
              <li>• Advanced Excel integration techniques</li>
              <li>• Business intelligence design</li>
              <li>• Strategic analysis frameworks</li>
              <li>• Executive presentation skills</li>
              <li>• Project management and documentation</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">📊 Final Deliverables</h3>
            <ul className="space-y-2 text-sm">
              <li>• Comprehensive integrated business model</li>
              <li>• Executive dashboard and KPI system</li>
              <li>• Strategic planning framework</li>
              <li>• Automated reporting suite</li>
              <li>• Professional presentation and documentation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">🔍 Driving Question</h2>
        <div className="border-l-4 border-primary bg-muted/50 p-6">
          <p className="font-semibold mb-2">
            "How can all the financial management, data analysis, and strategic planning 
            tools work together to provide comprehensive business intelligence for decision-making?"
          </p>
          <p className="text-muted-foreground">
            In this capstone unit, you'll create a complete business intelligence system 
            that demonstrates mastery of all course concepts and prepares you for real-world application.
          </p>
        </div>
      </section>
    </div>
  )
}