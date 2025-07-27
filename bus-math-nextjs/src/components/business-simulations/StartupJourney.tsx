/**
 * StartupJourney Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import { StartupJourney } from '@/components/business-simulations/StartupJourney'
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <StartupJourney />
 *     </div>
 *   )
 * }
 * ```
 * 
 * The component is fully self-contained with its own state management.
 * No props are required - it initializes with default values.
 * 
 * STUDENT INTERACTION & LEARNING OBJECTIVES:
 * ==========================================
 * 
 * OBJECTIVE: Students experience the startup journey from idea to growth,
 * learning about funding decisions, burn rates, user acquisition, and strategic choices.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **Monitor Startup Dashboard**: Students see current funding ($10,000 starting),
 *    monthly burn rate ($2,000), user count (100), revenue ($0), and current stage.
 * 
 * 2. **Make Strategic Decisions**: At each stage, students face critical choices:
 *    - FUNDING: Bootstrap vs Accelerator vs Angel investors
 *    - TEAM: Hire developers vs marketers vs business development
 *    - PRODUCT: Focus on features vs user feedback vs scaling
 *    - GROWTH: Marketing spend vs organic growth vs partnerships
 * 
 * 3. **Progress Through Stages**: 
 *    - IDEA: Initial concept and first funding decisions
 *    - PROTOTYPE: Build MVP and validate market fit
 *    - LAUNCH: Go to market and acquire first customers
 *    - GROWTH: Scale operations and user base
 *    - SUCCESS: Achieve profitability or exit opportunity
 * 
 * 4. **Manage Resources**: 
 *    - Track funding runway (months remaining at current burn)
 *    - Balance user growth with revenue generation
 *    - Make decisions that affect burn rate and growth
 * 
 * 5. **Experience Consequences**: Each decision impacts:
 *    - Monthly burn rate (operational costs)
 *    - User growth rate and retention
 *    - Revenue potential and monetization
 *    - Available funding and runway
 * 
 * 6. **Learn from Outcomes**: 
 *    - Successful decisions advance to next stage
 *    - Poor choices may require course correction
 *    - Random market events create additional challenges
 * 
 * KEY LEARNING OUTCOMES:
 * - Understanding startup funding lifecycle and sources
 * - Strategic decision-making under resource constraints
 * - Balancing growth, profitability, and sustainability
 * - Risk management and runway optimization
 * - Market dynamics and competitive positioning
 * - Performance metrics: CAC, LTV, burn rate, runway
 */

'use client'

import { useState, useCallback, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Separator } from '@/components/ui/separator'
import { 
  DollarSign, 
  Calendar, 
  TrendingUp,
  Users,
  Rocket,
  Lightbulb,
  Target,
  ChartLine,
  AlertTriangle,
  CheckCircle,
  XCircle,
  RefreshCw,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Building,
  Code,
  Megaphone,
  Crown,
  Zap
} from 'lucide-react'

type StartupStage = 'idea' | 'prototype' | 'launch' | 'growth' | 'success'
type DecisionType = 'funding' | 'team' | 'product' | 'marketing' | 'strategy'

interface Decision {
  id: string
  type: DecisionType
  title: string
  description: string
  options: {
    id: string
    title: string
    description: string
    effects: {
      funding?: number
      burn?: number
      users?: number
      revenue?: number
      growth?: number
      revenuePerUser?: number
    }
  }[]
}

interface GameState {
  stage: StartupStage
  funding: number
  monthlyBurn: number
  users: number
  revenue: number
  month: number
  maxMonths: number
  decisions: string[]
  availableDecisions: Decision[]
  currentDecision: Decision | null
  gameStatus: 'playing' | 'won' | 'lost'
  userGrowthRate: number
  revenuePerUser: number
}

const STAGE_INFO: Record<StartupStage, { name: string; icon: React.ReactNode; color: string; progress: number }> = {
  idea: { name: 'Idea', icon: <Lightbulb className="w-5 h-5" />, color: 'yellow', progress: 20 },
  prototype: { name: 'Prototype', icon: <Code className="w-5 h-5" />, color: 'blue', progress: 40 },
  launch: { name: 'Launch', icon: <Rocket className="w-5 h-5" />, color: 'purple', progress: 60 },
  growth: { name: 'Growth', icon: <ChartLine className="w-5 h-5" />, color: 'green', progress: 80 },
  success: { name: 'Success', icon: <Crown className="w-5 h-5" />, color: 'gold', progress: 100 }
}

const DECISION_POOL: Decision[] = [
  {
    id: 'initial-funding',
    type: 'funding',
    title: 'Initial Funding Strategy',
    description: 'You have a great app idea! How will you fund development?',
    options: [
      {
        id: 'bootstrap',
        title: 'Bootstrap with Personal Savings',
        description: 'Use $5,000 of your own money. Lower burn rate but limited resources.',
        effects: { funding: 5000, burn: -500 }
      },
      {
        id: 'accelerator',
        title: 'Apply to Startup Accelerator',
        description: 'Get $25,000 funding plus mentorship and network access.',
        effects: { funding: 25000, users: 100, growth: 0.2 }
      },
      {
        id: 'angel-investors',
        title: 'Pitch to Angel Investors',
        description: 'Raise $100,000 but higher pressure and burn rate.',
        effects: { funding: 100000, burn: 6000 }
      }
    ]
  },
  {
    id: 'team-building',
    type: 'team',
    title: 'First Hire Decision',
    description: 'Your startup is gaining traction. Who should you hire first?',
    options: [
      {
        id: 'developer',
        title: 'Senior Developer',
        description: 'Accelerate product development and add new features.',
        effects: { burn: 5000, growth: 0.3 }
      },
      {
        id: 'marketer',
        title: 'Marketing Manager',
        description: 'Focus on user acquisition and brand building.',
        effects: { burn: 3000, users: 500, growth: 0.5 }
      },
      {
        id: 'business-dev',
        title: 'Business Development',
        description: 'Build partnerships and explore revenue opportunities.',
        effects: { burn: 4000, revenue: 1000, revenuePerUser: 2 }
      }
    ]
  },
  {
    id: 'product-focus',
    type: 'product',
    title: 'Product Development Priority',
    description: 'Limited development resources. What should be your focus?',
    options: [
      {
        id: 'new-features',
        title: 'Build New Features',
        description: 'Add functionality to attract more users.',
        effects: { users: 300, burn: 2000 }
      },
      {
        id: 'user-feedback',
        title: 'Focus on User Feedback',
        description: 'Improve existing features based on user input.',
        effects: { growth: 0.4, revenuePerUser: 1 }
      },
      {
        id: 'scaling',
        title: 'Technical Scaling',
        description: 'Prepare infrastructure for rapid growth.',
        effects: { burn: 3000, growth: 0.6 }
      }
    ]
  },
  {
    id: 'marketing-strategy',
    type: 'marketing',
    title: 'Growth Strategy',
    description: 'How will you acquire your next 1000 users?',
    options: [
      {
        id: 'paid-ads',
        title: 'Paid Advertising',
        description: 'Invest in Facebook and Google ads for rapid acquisition.',
        effects: { users: 800, burn: 5000 }
      },
      {
        id: 'content-marketing',
        title: 'Content Marketing',
        description: 'Build organic growth through valuable content.',
        effects: { users: 300, growth: 0.3, burn: 1000 }
      },
      {
        id: 'partnerships',
        title: 'Strategic Partnerships',
        description: 'Partner with established companies for user access.',
        effects: { users: 600, revenue: 2000, burn: 2000 }
      }
    ]
  },
  {
    id: 'revenue-model',
    type: 'strategy',
    title: 'Monetization Strategy',
    description: 'Time to start generating revenue. What\'s your approach?',
    options: [
      {
        id: 'freemium',
        title: 'Freemium Model',
        description: 'Free basic version with premium features.',
        effects: { revenuePerUser: 3, growth: 0.2 }
      },
      {
        id: 'subscription',
        title: 'Monthly Subscription',
        description: 'Recurring revenue but may slow user growth.',
        effects: { revenuePerUser: 8, growth: -0.1 }
      },
      {
        id: 'enterprise',
        title: 'Enterprise Sales',
        description: 'Target businesses with high-value contracts.',
        effects: { revenuePerUser: 15, burn: 3000, users: -100 }
      }
    ]
  }
]

export function StartupJourney() {
  const [gameState, setGameState] = useState<GameState>({
    stage: 'idea',
    funding: 10000,
    monthlyBurn: 2000,
    users: 100,
    revenue: 0,
    month: 1,
    maxMonths: 24,
    decisions: [],
    availableDecisions: [DECISION_POOL[0]], // Start with initial funding decision
    currentDecision: DECISION_POOL[0],
    gameStatus: 'playing',
    userGrowthRate: 0.1,
    revenuePerUser: 0
  })

  const [notifications, setNotifications] = useState<Array<{
    id: string
    message: string
    type: 'success' | 'warning' | 'error' | 'info'
  }>>([])

  const [showInstructions, setShowInstructions] = useState(false)

  const addNotification = useCallback((message: string, type: 'success' | 'warning' | 'error' | 'info') => {
    const id = Date.now().toString()
    setNotifications(prev => [...prev, { id, message, type }])
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id))
    }, 5000)
  }, [])

  const getStageColor = (stage: StartupStage) => {
    const colors = {
      idea: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      prototype: 'bg-blue-100 text-blue-800 border-blue-300',
      launch: 'bg-purple-100 text-purple-800 border-purple-300',
      growth: 'bg-green-100 text-green-800 border-green-300',
      success: 'bg-amber-100 text-amber-800 border-amber-300'
    }
    return colors[stage]
  }

  const calculateRunway = useCallback(() => {
    return gameState.monthlyBurn > 0 ? Math.floor(gameState.funding / gameState.monthlyBurn) : 999
  }, [gameState.funding, gameState.monthlyBurn])

  const advanceStage = useCallback(() => {
    const stages: StartupStage[] = ['idea', 'prototype', 'launch', 'growth', 'success']
    const currentIndex = stages.indexOf(gameState.stage)
    if (currentIndex < stages.length - 1) {
      return stages[currentIndex + 1]
    }
    return gameState.stage
  }, [gameState.stage])

  const getNextDecision = useCallback((currentStage: StartupStage, completedDecisions: string[]) => {
    const stageDecisions = {
      idea: ['initial-funding'],
      prototype: ['team-building', 'product-focus'],
      launch: ['marketing-strategy'],
      growth: ['revenue-model'],
      success: []
    }

    const availableForStage = stageDecisions[currentStage] || []
    const uncompletedDecisions = availableForStage.filter(id => !completedDecisions.includes(id))
    
    if (uncompletedDecisions.length > 0) {
      return DECISION_POOL.find(d => d.id === uncompletedDecisions[0]) || null
    }
    
    return null
  }, [])

  const makeDecision = useCallback((decisionId: string, optionId: string) => {
    const decision = gameState.currentDecision
    if (!decision) return

    const option = decision.options.find(opt => opt.id === optionId)
    if (!option) return

    setGameState(prev => {
      const newFunding = Math.max(0, prev.funding + (option.effects.funding || 0))
      const newBurn = Math.max(1000, prev.monthlyBurn + (option.effects.burn || 0))
      const newUsers = Math.max(0, prev.users + (option.effects.users || 0))
      const newRevenue = Math.max(0, prev.revenue + (option.effects.revenue || 0))
      const newGrowthRate = Math.max(0, prev.userGrowthRate + (option.effects.growth || 0))
      const newRevenuePerUser = Math.max(0, prev.revenuePerUser + (option.effects.revenuePerUser || 0))

      const updatedDecisions = [...prev.decisions, decisionId]
      let newStage = prev.stage

      // Check if we should advance to next stage
      const stageThresholds = {
        idea: () => updatedDecisions.includes('initial-funding'),
        prototype: () => updatedDecisions.includes('team-building') || updatedDecisions.includes('product-focus'),
        launch: () => updatedDecisions.includes('marketing-strategy'),
        growth: () => updatedDecisions.includes('revenue-model'),
        success: () => false
      }

      if (stageThresholds[prev.stage]()) {
        newStage = advanceStage()
      }

      const nextDecision = getNextDecision(newStage, updatedDecisions)

      return {
        ...prev,
        funding: newFunding,
        monthlyBurn: newBurn,
        users: newUsers,
        revenue: newRevenue,
        userGrowthRate: newGrowthRate,
        revenuePerUser: newRevenuePerUser,
        stage: newStage,
        decisions: updatedDecisions,
        currentDecision: nextDecision
      }
    })

    addNotification(`Decision made: ${option.title}`, 'success')
    
    // Show effect notifications
    if (option.effects.funding) {
      addNotification(`Funding ${option.effects.funding > 0 ? 'increased' : 'decreased'} by $${Math.abs(option.effects.funding).toLocaleString()}`, 
        option.effects.funding > 0 ? 'success' : 'warning')
    }
    if (option.effects.users) {
      addNotification(`User base ${option.effects.users > 0 ? 'grew' : 'declined'} by ${Math.abs(option.effects.users)}`, 
        option.effects.users > 0 ? 'success' : 'warning')
    }
  }, [gameState.currentDecision, advanceStage, getNextDecision, addNotification])

  const advanceMonth = useCallback(() => {
    if (gameState.gameStatus !== 'playing') return

    setGameState(prev => {
      const newMonth = prev.month + 1
      
      // Apply monthly changes
      const userGrowth = Math.floor(prev.users * prev.userGrowthRate)
      const newUsers = prev.users + userGrowth
      const monthlyRevenue = Math.floor(newUsers * prev.revenuePerUser)
      const newRevenue = prev.revenue + monthlyRevenue
      const newFunding = Math.max(0, prev.funding - prev.monthlyBurn + monthlyRevenue)
      
      // Check game status
      let newGameStatus = prev.gameStatus
      if (newFunding <= 0) {
        newGameStatus = 'lost'
        addNotification('Out of funding! Your startup has failed.', 'error')
      } else if (prev.stage === 'success' || newRevenue >= 50000) {
        newGameStatus = 'won'
        addNotification('Congratulations! Your startup is successful!', 'success')
      } else if (newMonth >= prev.maxMonths) {
        if (newRevenue >= 20000) {
          newGameStatus = 'won'
          addNotification('Time\'s up! Your startup achieved sustainable revenue!', 'success')
        } else {
          newGameStatus = 'lost'
          addNotification('Time\'s up! Your startup didn\'t achieve sufficient traction.', 'error')
        }
      }

      // Monthly updates
      if (userGrowth > 0) {
        addNotification(`User base grew by ${userGrowth} users`, 'success')
      }
      if (monthlyRevenue > 0) {
        addNotification(`Generated $${monthlyRevenue.toLocaleString()} in revenue`, 'success')
      }
      addNotification(`Monthly burn: $${prev.monthlyBurn.toLocaleString()}`, 'info')

      return {
        ...prev,
        month: newMonth,
        users: newUsers,
        revenue: newRevenue,
        funding: newFunding,
        gameStatus: newGameStatus
      }
    })
  }, [gameState.gameStatus, addNotification])

  const resetGame = useCallback(() => {
    setGameState({
      stage: 'idea',
      funding: 10000,
      monthlyBurn: 2000,
      users: 100,
      revenue: 0,
      month: 1,
      maxMonths: 24,
      decisions: [],
      availableDecisions: [DECISION_POOL[0]],
      currentDecision: DECISION_POOL[0],
      gameStatus: 'playing',
      userGrowthRate: 0.1,
      revenuePerUser: 0
    })
    setNotifications([])
    addNotification('Game reset successfully', 'info')
  }, [addNotification])

  const runway = calculateRunway()
  const stageInfo = STAGE_INFO[gameState.stage]

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl flex items-center justify-center gap-2">
            <Rocket className="w-8 h-8 text-purple-600" />
            Startup Journey
          </CardTitle>
          <CardDescription className="text-lg">
            Build a tech startup from idea to success! Make strategic decisions about funding, hiring, and growth.
          </CardDescription>
          <div className="mt-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowInstructions(!showInstructions)}
              className="flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4" />
              How to Play
              {showInstructions ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Instructions Panel */}
      {showInstructions && (
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-xl text-purple-800 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              How to Play Startup Journey
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Objective */}
            <div>
              <h4 className="font-semibold text-purple-800 mb-2">🎯 Objective</h4>
              <p className="text-purple-700">
                Build a successful tech startup over 24 months. Make strategic decisions to grow your user base, 
                generate revenue, and manage your funding runway while progressing through startup stages.
              </p>
            </div>

            {/* Startup Stages */}
            <div>
              <h4 className="font-semibold text-purple-800 mb-3">🚀 Startup Stages</h4>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
                {Object.entries(STAGE_INFO).map(([stage, info]) => (
                  <div key={stage} className="p-3 bg-white rounded-lg border text-center">
                    <div className="flex items-center justify-center mb-2">
                      {info.icon}
                    </div>
                    <h5 className="font-medium text-sm">{info.name}</h5>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div>
              <h4 className="font-semibold text-purple-800 mb-3">📊 Key Metrics to Monitor</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-3 bg-white rounded-lg border text-center">
                  <div className="flex items-center justify-center mb-1">
                    <DollarSign className="w-4 h-4 text-green-600" />
                  </div>
                  <h5 className="font-medium text-sm">Funding</h5>
                  <p className="text-xs text-gray-600">Cash available</p>
                </div>
                <div className="p-3 bg-white rounded-lg border text-center">
                  <div className="flex items-center justify-center mb-1">
                    <TrendingUp className="w-4 h-4 text-red-600" />
                  </div>
                  <h5 className="font-medium text-sm">Burn Rate</h5>
                  <p className="text-xs text-gray-600">Monthly expenses</p>
                </div>
                <div className="p-3 bg-white rounded-lg border text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Users className="w-4 h-4 text-blue-600" />
                  </div>
                  <h5 className="font-medium text-sm">Users</h5>
                  <p className="text-xs text-gray-600">Active user base</p>
                </div>
                <div className="p-3 bg-white rounded-lg border text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Target className="w-4 h-4 text-purple-600" />
                  </div>
                  <h5 className="font-medium text-sm">Revenue</h5>
                  <p className="text-xs text-gray-600">Total generated</p>
                </div>
              </div>
            </div>

            {/* Decision Types */}
            <div>
              <h4 className="font-semibold text-purple-800 mb-3">🎯 Strategic Decision Areas</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h5 className="font-medium text-purple-700">Funding Decisions:</h5>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Bootstrap vs External investment</li>
                    <li>• Accelerator programs vs Angel investors</li>
                    <li>• Equity vs Debt financing</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h5 className="font-medium text-purple-700">Growth Strategies:</h5>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• Team building and hiring priorities</li>
                    <li>• Product development vs Marketing focus</li>
                    <li>• Revenue models and monetization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Success Conditions */}
            <div>
              <h4 className="font-semibold text-purple-800 mb-2">🏆 Success Conditions</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <h5 className="font-medium text-green-800 mb-1">Victory Conditions</h5>
                  <ul className="text-xs text-green-700 space-y-1">
                    <li>• Reach "Success" stage</li>
                    <li>• Generate $50,000+ in total revenue</li>
                    <li>• Achieve $20,000+ revenue by month 24</li>
                    <li>• Maintain positive cash flow</li>
                  </ul>
                </div>
                <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                  <h5 className="font-medium text-red-800 mb-1">Failure Conditions</h5>
                  <ul className="text-xs text-red-700 space-y-1">
                    <li>• Run out of funding (burn &gt; available cash)</li>
                    <li>• Fail to reach revenue targets by deadline</li>
                    <li>• Poor strategic decisions compound</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Game Status */}
      {gameState.gameStatus !== 'playing' && (
        <Card className={`border-2 ${gameState.gameStatus === 'won' ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              {gameState.gameStatus === 'won' ? (
                <CheckCircle className="w-8 h-8 text-green-600" />
              ) : (
                <XCircle className="w-8 h-8 text-red-600" />
              )}
              <h3 className={`text-2xl font-bold ${gameState.gameStatus === 'won' ? 'text-green-800' : 'text-red-800'}`}>
                {gameState.gameStatus === 'won' ? 'Startup Success!' : 'Startup Failed'}
              </h3>
            </div>
            <p className={`text-lg ${gameState.gameStatus === 'won' ? 'text-green-700' : 'text-red-700'}`}>
              {gameState.gameStatus === 'won' 
                ? `Congratulations! Your startup reached ${gameState.stage} stage with $${gameState.revenue.toLocaleString()} in revenue!`
                : `Your startup journey ended at ${gameState.stage} stage. Better luck next time!`
              }
            </p>
          </CardContent>
        </Card>
      )}

      {/* Startup Dashboard */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-sm text-green-700 font-medium">Funding</p>
            <p className={`text-2xl font-bold ${gameState.funding >= 0 ? 'text-green-800' : 'text-red-800'}`}>
              ${gameState.funding.toLocaleString()}
            </p>
            <p className="text-xs text-green-600">
              {runway} months runway
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-red-600" />
            </div>
            <p className="text-sm text-red-700 font-medium">Monthly Burn</p>
            <p className="text-2xl font-bold text-red-800">
              ${gameState.monthlyBurn.toLocaleString()}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-sm text-blue-700 font-medium">Users</p>
            <p className="text-2xl font-bold text-blue-800">
              {gameState.users.toLocaleString()}
            </p>
            <p className="text-xs text-blue-600">
              +{(gameState.userGrowthRate * 100).toFixed(0)}% monthly
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-sm text-purple-700 font-medium">Revenue</p>
            <p className="text-2xl font-bold text-purple-800">
              ${gameState.revenue.toLocaleString()}
            </p>
            <p className="text-xs text-purple-600">
              ${gameState.revenuePerUser.toFixed(2)} per user
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Current Stage */}
      <Card className="bg-gradient-to-r from-slate-50 to-slate-100">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-3">
              <div className="p-2 rounded-full bg-white shadow-sm">
                {stageInfo.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-800">
                Current Stage: {stageInfo.name}
              </h3>
              <Badge className={getStageColor(gameState.stage)}>
                Month {gameState.month}
              </Badge>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-slate-600">Progress</span>
                <span className="text-sm text-slate-600">{stageInfo.progress}%</span>
              </div>
              <Progress value={stageInfo.progress} className="h-3" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Decision */}
      {gameState.currentDecision && gameState.gameStatus === 'playing' && (
        <Card className="border-2 border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Strategic Decision
            </CardTitle>
            <CardDescription className="text-blue-700">
              {gameState.currentDecision.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h4 className="font-semibold text-blue-800 mb-4">{gameState.currentDecision.title}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {gameState.currentDecision.options.map((option) => (
                <Card key={option.id} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <h5 className="font-medium text-slate-800 mb-2">{option.title}</h5>
                    <p className="text-sm text-slate-600 mb-4">{option.description}</p>
                    
                    {/* Effects Preview */}
                    <div className="space-y-1 mb-4">
                      {option.effects.funding && (
                        <div className="flex items-center gap-2 text-xs">
                          <DollarSign className="w-3 h-3" />
                          <span className={option.effects.funding > 0 ? 'text-green-600' : 'text-red-600'}>
                            {option.effects.funding > 0 ? '+' : ''}${option.effects.funding.toLocaleString()} funding
                          </span>
                        </div>
                      )}
                      {option.effects.burn && (
                        <div className="flex items-center gap-2 text-xs">
                          <TrendingUp className="w-3 h-3" />
                          <span className={option.effects.burn > 0 ? 'text-red-600' : 'text-green-600'}>
                            {option.effects.burn > 0 ? '+' : ''}${option.effects.burn.toLocaleString()} monthly burn
                          </span>
                        </div>
                      )}
                      {option.effects.users && (
                        <div className="flex items-center gap-2 text-xs">
                          <Users className="w-3 h-3" />
                          <span className={option.effects.users > 0 ? 'text-blue-600' : 'text-red-600'}>
                            {option.effects.users > 0 ? '+' : ''}{option.effects.users} users
                          </span>
                        </div>
                      )}
                      {option.effects.growth && (
                        <div className="flex items-center gap-2 text-xs">
                          <ChartLine className="w-3 h-3" />
                          <span className="text-purple-600">
                            {option.effects.growth > 0 ? '+' : ''}{(option.effects.growth * 100).toFixed(0)}% growth rate
                          </span>
                        </div>
                      )}
                    </div>

                    <Button 
                      className="w-full" 
                      onClick={() => makeDecision(gameState.currentDecision!.id, option.id)}
                      variant="outline"
                    >
                      Choose This Option
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Game Controls */}
      <div className="flex justify-center gap-4">
        <Button 
          onClick={advanceMonth} 
          size="lg"
          className="bg-blue-600 hover:bg-blue-700"
          disabled={gameState.gameStatus !== 'playing'}
        >
          <Calendar className="w-4 h-4 mr-2" />
          Advance Month
        </Button>
        <Button 
          onClick={resetGame} 
          variant="outline" 
          size="lg"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Reset Game
        </Button>
      </div>

      {/* Notifications */}
      {notifications.length > 0 && (
        <div className="fixed bottom-4 right-4 space-y-2 z-50">
          {notifications.map((notification) => (
            <Card key={notification.id} className={`
              max-w-sm border-l-4 ${
                notification.type === 'success' ? 'border-l-green-500 bg-green-50' :
                notification.type === 'warning' ? 'border-l-yellow-500 bg-yellow-50' :
                notification.type === 'error' ? 'border-l-red-500 bg-red-50' :
                'border-l-blue-500 bg-blue-50'
              }
            `}>
              <CardContent className="p-3">
                <p className={`text-sm font-medium ${
                  notification.type === 'success' ? 'text-green-800' :
                  notification.type === 'warning' ? 'text-yellow-800' :
                  notification.type === 'error' ? 'text-red-800' :
                  'text-blue-800'
                }`}>
                  {notification.message}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}