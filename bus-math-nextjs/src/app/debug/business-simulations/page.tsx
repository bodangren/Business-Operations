'use client'

import { BudgetBalancer } from '@/components/business-simulations/BudgetBalancer'
import { CashFlowChallenge } from '@/components/business-simulations/CashFlowChallenge'
import { InventoryManager } from '@/components/business-simulations/InventoryManager'
import { LemonadeStand } from '@/components/business-simulations/LemonadeStand'
import { StartupJourney } from '@/components/business-simulations/StartupJourney'
import { PitchPresentationBuilder } from '@/components/business-simulations/PitchPresentationBuilder'
import ErrorCheckingSystem from '@/components/business-simulations/ErrorCheckingSystem'

export default function BusinessSimulationsDebugPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Business Simulations Debug Page
          </h1>
          <p className="text-lg text-slate-600">
            Test and debug business simulation components
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                Budget Balancer
              </h2>
              <p className="text-slate-600">
                Manage monthly budgets and make smart financial decisions
              </p>
            </div>
            <BudgetBalancer />
          </section>

          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                Cash Flow Challenge
              </h2>
              <p className="text-slate-600">
                Manage business cash flow for 30 days. Balance incoming and outgoing payments to stay solvent!
              </p>
            </div>
            <CashFlowChallenge />
          </section>

          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                Inventory Manager
              </h2>
              <p className="text-slate-600">
                Manage retail inventory for 30 days. Balance stock levels, demand, and profitability!
              </p>
            </div>
            <InventoryManager />
          </section>

          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                Lemonade Stand Tycoon
              </h2>
              <p className="text-slate-600">
                Run your lemonade stand and learn about profit, pricing, and customer satisfaction!
              </p>
            </div>
            <LemonadeStand />
          </section>

          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                Startup Journey
              </h2>
              <p className="text-slate-600">
                Build a tech startup from idea to success! Make strategic decisions about funding, hiring, and growth.
              </p>
            </div>
            <StartupJourney />
          </section>

          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                Pitch Presentation Builder
              </h2>
              <p className="text-slate-600">
                Build a compelling 4-minute investor pitch for your startup business model with interactive content builder and practice mode.
              </p>
            </div>
            <PitchPresentationBuilder />
          </section>

          <section>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-slate-800 mb-2">
                Error Checking System
              </h2>
              <p className="text-slate-600">
                Build conditional formatting rules for business data validation and automated error detection.
              </p>
            </div>
            <ErrorCheckingSystem />
          </section>
        </div>
      </div>
    </div>
  )
}