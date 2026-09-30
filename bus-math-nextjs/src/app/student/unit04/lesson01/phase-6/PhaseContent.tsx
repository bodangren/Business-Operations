

export default function Phase6Content() {

  return (
    <div className="bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="space-y-6">

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-green-900 mb-4">Unit Scoreboard Recap</h2>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="text-center p-3 bg-white rounded">
                <div className="font-bold text-green-800">Weekend Profit</div>
                <div className="text-gray-600">Maximize</div>
              </div>
              <div className="text-center p-3 bg-white rounded">
                <div className="font-bold text-green-800">Waste %</div>
                <div className="text-gray-600">≤ 3%</div>
              </div>
              <div className="text-center p-3 bg-white rounded">
                <div className="font-bold text-green-800">Inventory Accuracy</div>
                <div className="text-gray-600">≥ 95%</div>
              </div>
              <div className="text-center p-3 bg-white rounded">
                <div className="font-bold text-green-800">Staffing Efficiency</div>
                <div className="text-gray-600">15-25%</div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-orange-900 mb-3">What's Coming Next</h2>
            <p className="text-gray-700">
              In <strong>Lesson 2</strong>, you'll learn descriptive statistics—the toolset for answering "what's normal?" You'll calculate averages, find medians, and measure spread. With these tools, you'll finally have numbers to back up the decisions you just practiced.
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-bold text-blue-900 mb-3">By the End of This Unit</h2>
            <p className="text-gray-700">
              You'll be able to look at two years of café sales data and confidently recommend: how many croissants to bake, how many baristas to schedule, and what price to charge. Your recommendation will be backed by data, not gut feelings.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}
