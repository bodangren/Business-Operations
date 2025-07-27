export default function Unit04Page() {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded">Unit 4</span>
          <span>2-3 weeks</span>
          <span className="text-yellow-600 font-medium">Intermediate</span>
        </div>
        <h1 className="text-4xl font-bold">Data-Driven Cafe</h1>
        <p className="text-xl text-muted-foreground">
          Analyze cafe operations using data visualization and statistical analysis 
          to optimize menu pricing, inventory management, and customer satisfaction.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Unit Overview</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">🎯 Learning Objectives</h3>
            <ul className="space-y-2 text-sm">
              <li>• Apply statistical analysis to business operations</li>
              <li>• Create effective data visualizations</li>
              <li>• Analyze customer behavior patterns</li>
              <li>• Optimize inventory and pricing strategies</li>
              <li>• Make data-driven business recommendations</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">🛠️ Tools & Skills</h3>
            <ul className="space-y-2 text-sm">
              <li>• Advanced Excel charting and visualization</li>
              <li>• Statistical functions and analysis</li>
              <li>• Trend analysis and forecasting</li>
              <li>• Data cleaning and preparation</li>
              <li>• Dashboard design and KPI tracking</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">📊 Final Deliverables</h3>
            <ul className="space-y-2 text-sm">
              <li>• Comprehensive sales analysis dashboard</li>
              <li>• Customer behavior analytics report</li>
              <li>• Inventory optimization model</li>
              <li>• Pricing strategy recommendations</li>
              <li>• Operational efficiency assessment</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">🔍 Driving Question</h2>
        <div className="border-l-4 border-primary bg-muted/50 p-6">
          <p className="font-semibold mb-2">
            "How can a cafe owner use data analysis to optimize operations, 
            improve customer satisfaction, and increase profitability?"
          </p>
          <p className="text-muted-foreground">
            You'll work with Bean There Cafe's transaction data to uncover insights 
            about customer preferences, seasonal trends, and operational efficiency.
          </p>
        </div>
      </section>
    </div>
  )
}