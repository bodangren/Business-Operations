export default function Unit06Page() {
  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span className="bg-primary text-primary-foreground px-2 py-1 rounded">Unit 6</span>
          <span>3-4 weeks</span>
          <span className="text-orange-600 font-medium">Advanced</span>
        </div>
        <h1 className="text-4xl font-bold">PriceLab Challenge</h1>
        <p className="text-xl text-muted-foreground">
          Experiment with pricing strategies and market analysis to optimize revenue 
          through dynamic pricing models and competitive analysis frameworks.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Unit Overview</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">🎯 Learning Objectives</h3>
            <ul className="space-y-2 text-sm">
              <li>• Analyze market dynamics and competitive positioning</li>
              <li>• Develop dynamic pricing strategies</li>
              <li>• Model price elasticity and demand curves</li>
              <li>• Optimize revenue through pricing experiments</li>
              <li>• Create pricing decision support tools</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">🛠️ Tools & Skills</h3>
            <ul className="space-y-2 text-sm">
              <li>• Market research and analysis techniques</li>
              <li>• Statistical modeling and regression analysis</li>
              <li>• Scenario planning and simulation</li>
              <li>• Competitive intelligence gathering</li>
              <li>• Revenue optimization modeling</li>
            </ul>
          </div>
          
          <div className="border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">📊 Final Deliverables</h3>
            <ul className="space-y-2 text-sm">
              <li>• Dynamic pricing strategy framework</li>
              <li>• Market analysis and competitive assessment</li>
              <li>• Price optimization simulator</li>
              <li>• Revenue forecasting model</li>
              <li>• Pricing recommendation engine</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">🔍 Driving Question</h2>
        <div className="border-l-4 border-primary bg-muted/50 p-6">
          <p className="font-semibold mb-2">
            "How can a business determine the optimal pricing strategy that maximizes 
            revenue while remaining competitive and attractive to customers?"
          </p>
          <p className="text-muted-foreground">
            You'll work with market data and customer behavior analytics to develop 
            sophisticated pricing models for different business scenarios.
          </p>
        </div>
      </section>
    </div>
  )
}