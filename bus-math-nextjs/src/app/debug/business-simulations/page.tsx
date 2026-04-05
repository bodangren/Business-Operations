'use client'

import { Badge } from '@/components/ui/badge'
import { BudgetBalancer } from '@/components/business-simulations/BudgetBalancer'
import { CashFlowChallenge } from '@/components/business-simulations/CashFlowChallenge'
import { InventoryManager } from '@/components/business-simulations/InventoryManager'
import { LemonadeStand } from '@/components/business-simulations/LemonadeStand'
import { StartupJourney } from '@/components/business-simulations/StartupJourney'
import { PitchPresentationBuilder } from '@/components/business-simulations/PitchPresentationBuilder'
import { PriceLabCommandCenter } from '@/components/business-simulations/PriceLabCommandCenter'
import ErrorCheckingSystem from '@/components/business-simulations/ErrorCheckingSystem'
import { RestaurantStaffingSimulator } from '@/components/business-simulations/RestaurantStaffingSimulator'

export default function BusinessSimulationsDebugPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container max-w-6xl mx-auto py-8 px-4">
        <div className="mb-8">
          <Badge variant="outline">Debug</Badge>
          <h1 className="text-3xl font-bold mt-2">Business Simulations</h1>
          <p className="text-muted-foreground mt-1">
            Test and debug business simulation components
          </p>
        </div>

        <div className="space-y-12">
          <section>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                Budget Balancer
              </h2>
              <p className="text-muted-foreground text-sm">
                Manage monthly budgets and make smart financial decisions
              </p>
            </div>
            <BudgetBalancer />
          </section>

          <section>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                Cash Flow Challenge
              </h2>
              <p className="text-muted-foreground text-sm">
                Manage business cash flow for 30 days. Balance incoming and outgoing payments to stay solvent!
              </p>
            </div>
            <CashFlowChallenge />
          </section>

          <section>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                Inventory Manager
              </h2>
              <p className="text-muted-foreground text-sm">
                Manage retail inventory for 30 days. Balance stock levels, demand, and profitability!
              </p>
            </div>
            <InventoryManager />
          </section>

          <section>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                Lemonade Stand Tycoon
              </h2>
              <p className="text-muted-foreground text-sm">
                Run your lemonade stand and learn about profit, pricing, and customer satisfaction!
              </p>
            </div>
            <LemonadeStand />
          </section>

          <section>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                Startup Journey
              </h2>
              <p className="text-muted-foreground text-sm">
                Build a tech startup from idea to success! Make strategic decisions about funding, hiring, and growth.
              </p>
            </div>
            <StartupJourney />
          </section>

          <section>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                Pitch Presentation Builder
              </h2>
              <p className="text-muted-foreground text-sm">
                Build a compelling 4-minute investor pitch for your startup business model with interactive content builder and practice mode.
              </p>
            </div>
            <PitchPresentationBuilder />
          </section>

          <section>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                Error Checking System
              </h2>
              <p className="text-muted-foreground text-sm">
                Build conditional formatting rules for business data validation and automated error detection.
              </p>
            </div>
            <ErrorCheckingSystem />
          </section>

          <section>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                Restaurant Staffing Simulator
              </h2>
              <p className="text-muted-foreground text-sm">
                Plan 12 months of hiring and shift coverage so payroll, cash, and guest experience stay balanced.
              </p>
            </div>
            <RestaurantStaffingSimulator />
          </section>

          <section>
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">
                PriceLab Command Center
              </h2>
              <p className="text-muted-foreground text-sm">
                Unit 6 preview simulation: market position, pricing, break-even, goal solving, and recommendation.
              </p>
            </div>
            <PriceLabCommandCenter />
          </section>
        </div>
      </div>
    </div>
  )
}
