'use client'

import { useMemo, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { AlertTriangle, Calendar, DollarSign, Users } from 'lucide-react'

const SHIFT_OPTIONS = [
  { value: 'none', label: 'No Shift', multiplier: 0, description: 'Hold off on hiring for now.' },
  { value: 'early', label: 'Early Shift', multiplier: 1, description: 'Cover breakfast and lunch hours.' },
  { value: 'late', label: 'Late Shift', multiplier: 1, description: 'Cover dinner rush and late cleanup.' },
  { value: 'both', label: 'Both Shifts', multiplier: 1.8, description: 'Full-day coverage across both shifts.' }
] as const

type ShiftChoice = (typeof SHIFT_OPTIONS)[number]['value']

interface StaffRole {
  id: string
  label: string
  description: string
  type: 'hourly' | 'salaried'
  hourlyRate?: number
  salary?: number
  revenueImpact: number
  satisfactionImpact: number
  penaltyIfMissing?: number
  unlockMonth?: number
  maxHeadcount: number
}

const STAFF_ROLES: StaffRole[] = [
  {
    id: 'waiters',
    label: 'Wait Staff',
    description: 'Takes orders, manages tables, keeps customers happy.',
    type: 'hourly',
    hourlyRate: 18,
    revenueImpact: 0.08,
    satisfactionImpact: 2,
    penaltyIfMissing: -6,
    maxHeadcount: 4
  },
  {
    id: 'bussers',
    label: 'Bussers',
    description: 'Reset tables quickly so more guests can be seated.',
    type: 'hourly',
    hourlyRate: 13,
    revenueImpact: 0.03,
    satisfactionImpact: 1,
    penaltyIfMissing: -3,
    maxHeadcount: 3
  },
  {
    id: 'dishwashers',
    label: 'Dishwashers',
    description: 'Keeps plates ready; avoids late-night clean up bottlenecks.',
    type: 'hourly',
    hourlyRate: 12,
    revenueImpact: 0.02,
    satisfactionImpact: 1,
    penaltyIfMissing: -5,
    maxHeadcount: 2
  },
  {
    id: 'cooks',
    label: 'Line Cooks',
    description: 'Preps food fast enough for both shifts.',
    type: 'hourly',
    hourlyRate: 22,
    revenueImpact: 0.1,
    satisfactionImpact: 1.5,
    penaltyIfMissing: -4,
    maxHeadcount: 3
  },
  {
    id: 'assistant',
    label: 'Assistant Manager',
    description: 'Handles scheduling, vendors, and VIP service once business scales.',
    type: 'salaried',
    salary: 3500,
    revenueImpact: 0.04,
    satisfactionImpact: 2,
    penaltyIfMissing: 0,
    unlockMonth: 6,
    maxHeadcount: 1
  }
]

interface MonthScenario {
  month: number
  title: string
  description: string
  demandMultiplier: number
  satisfactionShift: number
  focus: 'early' | 'late' | 'balanced'
  notes: string
}

const MONTH_SCENARIOS: MonthScenario[] = [
  {
    month: 1,
    title: 'Soft Opening',
    description: 'Neighborhood curiosity is high but seating is light. Keep expenses lean.',
    demandMultiplier: 0.9,
    satisfactionShift: 2,
    focus: 'early',
    notes: 'Breakfast crowd is the main driver.'
  },
  {
    month: 2,
    title: 'Word of Mouth',
    description: 'Local bloggers rave about brunch specials.',
    demandMultiplier: 1,
    satisfactionShift: 3,
    focus: 'early',
    notes: 'Tables flip fast from 7-11am.'
  },
  {
    month: 3,
    title: 'Weekend Rush',
    description: 'First big Saturday night rush tests your dinner coverage.',
    demandMultiplier: 1.05,
    satisfactionShift: -1,
    focus: 'late',
    notes: 'Late shift is packed.'
  },
  {
    month: 4,
    title: 'Tour Bus Drop-ins',
    description: 'City tours start including the restaurant as a lunch stop.',
    demandMultiplier: 1.1,
    satisfactionShift: 2,
    focus: 'balanced',
    notes: 'Need steady service all day.'
  },
  {
    month: 5,
    title: 'Corporate Catering Tests',
    description: 'Two startups want to trial dinner service for their teams.',
    demandMultiplier: 1.15,
    satisfactionShift: 1,
    focus: 'late',
    notes: 'Dinner execution matters most.'
  },
  {
    month: 6,
    title: 'Media Spotlight',
    description: 'Local TV features your chef; reservations spike.',
    demandMultiplier: 1.2,
    satisfactionShift: 3,
    focus: 'balanced',
    notes: 'Manager workload explodes.'
  },
  {
    month: 7,
    title: 'Summer Patio Season',
    description: 'Outdoor seating doubles capacity but adds complexity.',
    demandMultiplier: 1.25,
    satisfactionShift: 0,
    focus: 'late',
    notes: 'Dinner and late desserts draw crowds.'
  },
  {
    month: 8,
    title: 'Food Festival Week',
    description: 'Vendors request early breakfasts and late-night service.',
    demandMultiplier: 1.28,
    satisfactionShift: 1,
    focus: 'balanced',
    notes: 'Need depth across both shifts.'
  },
  {
    month: 9,
    title: 'Private Events',
    description: 'Birthday parties and alumni meetups fill evenings.',
    demandMultiplier: 1.22,
    satisfactionShift: -1,
    focus: 'late',
    notes: 'Customer patience is thin if tables turn slowly.'
  },
  {
    month: 10,
    title: 'Holiday Bookings',
    description: 'Office parties kick off; lunch catering expands.',
    demandMultiplier: 1.3,
    satisfactionShift: 2,
    focus: 'early',
    notes: 'Prep early to prevent bottlenecks.'
  },
  {
    month: 11,
    title: 'Investor Review Dinner',
    description: 'Potential investors dine on Friday night.',
    demandMultiplier: 1.35,
    satisfactionShift: -2,
    focus: 'late',
    notes: 'Assistant manager shines here.'
  },
  {
    month: 12,
    title: 'New Year Push',
    description: 'You aim to finish strong and plan expansion.',
    demandMultiplier: 1.4,
    satisfactionShift: 4,
    focus: 'balanced',
    notes: 'Consistency all day proves you can scale.'
  }
]

interface HistoryEntry {
  month: number
  revenue: number
  payroll: number
  foodCost: number
  netChange: number
  satisfaction: number
  summary: string
  foodCostRate: number
}

interface RoleChoice {
  shift: ShiftChoice
  hours: number
  headcount: number
}

const INITIAL_CHOICES = STAFF_ROLES.reduce<Record<string, RoleChoice>>((acc, role) => {
  acc[role.id] = {
    shift: role.id === 'waiters' || role.id === 'cooks' ? 'early' : 'none',
    hours: 32,
    headcount: role.type === 'salaried' ? 0 : role.id === 'waiters' ? 1 : 0
  }
  return acc
}, {})

const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max)
const currency = (value: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value)

export function RestaurantStaffingSimulator() {
  const [month, setMonth] = useState(1)
  const [cash, setCash] = useState(14000)
  const [satisfaction, setSatisfaction] = useState(60)
  const [choices, setChoices] = useState<Record<string, RoleChoice>>(INITIAL_CHOICES)
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [seasonComplete, setSeasonComplete] = useState(false)

  const currentScenario = useMemo(() => MONTH_SCENARIOS[month - 1], [month])

  const updateChoice = (roleId: string, updates: Partial<RoleChoice>) => {
    setChoices(prev => ({
      ...prev,
      [roleId]: {
        ...prev[roleId],
        ...updates
      }
    }))
  }

  const runMonth = () => {
    if (seasonComplete) return

    const scenario = currentScenario
    let payroll = 0
    let revenueBoost = 0
    let satisfactionShift = scenario.satisfactionShift
    let narrativeNotes: string[] = []

    let lineCookOvertime = false

    STAFF_ROLES.forEach(role => {
      const choice = choices[role.id]
      const option = SHIFT_OPTIONS.find(opt => opt.value === choice.shift)!
      const coverageMultiplier = option.multiplier
      const headcount = clamp(choice.headcount, 0, role.maxHeadcount)
      const hours = clamp(choice.hours, 20, 60)

      if (headcount > 0 && coverageMultiplier > 0) {
        let rolePayroll = 0
        if (role.type === 'hourly' && role.hourlyRate) {
          const regularHours = Math.min(hours, 40)
          const overtimeHours = Math.max(0, hours - 40)
          const weeklyPay = (regularHours * role.hourlyRate) + (overtimeHours * role.hourlyRate * 1.5)
          const monthlyPayPerPerson = weeklyPay * 4
          rolePayroll = monthlyPayPerPerson * headcount
          if (role.id === 'cooks' && overtimeHours > 0) {
            lineCookOvertime = true
          }
        } else if (role.type === 'salaried' && role.salary) {
          rolePayroll = role.salary * headcount * coverageMultiplier
        }

        payroll += rolePayroll

        let staffingStrength = coverageMultiplier * headcount
        let roleRevenueImpact = role.revenueImpact * staffingStrength
        if (role.id === 'assistant' && month < (role.unlockMonth ?? 0)) {
          roleRevenueImpact = -0.02 * staffingStrength
          narrativeNotes.push('Assistant manager felt like overhead this month.')
        }

        revenueBoost += roleRevenueImpact
        satisfactionShift += role.satisfactionImpact * staffingStrength
      } else if (role.penaltyIfMissing) {
        satisfactionShift += role.penaltyIfMissing
        narrativeNotes.push(`${role.label} understaffed; service slipped.`)
      }

      const focusShift = scenario.focus
      const coversFocus = choice.shift === 'both' || choice.shift === focusShift
      if (!coversFocus && focusShift !== 'balanced' && (role.id === 'waiters' || role.id === 'cooks')) {
        satisfactionShift -= 3
        revenueBoost -= 0.05
      }
    })

    const baseRevenue = 12000
    const eventFactor = scenario.demandMultiplier
    const satisfactionFactor = 0.6 + (satisfaction / 100) * 0.6
    const projectedRevenue = Math.round(baseRevenue * eventFactor * (1 + revenueBoost) * satisfactionFactor)
    const foodCostRate = lineCookOvertime ? 0.45 : 0.4
    const foodCost = Math.round(projectedRevenue * foodCostRate)
    const netChange = projectedRevenue - payroll - foodCost
    const newCash = cash + netChange
    const newSatisfaction = clamp(Math.round(satisfaction + satisfactionShift), 10, 100)

    const summaryParts = [
      `${scenario.title}: ${choiceSummary(choices)}`,
      revenueBoost >= 0 ? 'Coverage boosted revenue.' : 'Coverage limited revenue.'
    ]
    if (narrativeNotes.length) {
      summaryParts.push(narrativeNotes.join(' '))
    }

    setHistory(prev => ([
      ...prev,
      {
        month,
        revenue: projectedRevenue,
        payroll,
        foodCost,
        foodCostRate,
        netChange,
        satisfaction: newSatisfaction,
        summary: summaryParts.join(' ')
      }
    ]))

    setCash(newCash)
    setSatisfaction(newSatisfaction)

    if (month === 12) {
      setSeasonComplete(true)
    } else {
      setMonth(month + 1)
    }
  }

  const resetGame = () => {
    setMonth(1)
    setCash(14000)
    setSatisfaction(60)
    setChoices(INITIAL_CHOICES)
    setHistory([])
    setSeasonComplete(false)
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <Users className="h-6 w-6 text-emerald-600" />
          Restaurant Staffing Simulator
        </CardTitle>
        <CardDescription>
          Plan 12 months of staffing decisions. Cover shifts without overspending so cash and morale stay strong.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-100">
            <div className="flex items-center gap-2 text-emerald-900 font-semibold">
              <Calendar className="h-5 w-5" />
              Month {month} / 12
            </div>
            <p className="text-sm text-emerald-900 mt-1">{currentScenario.title}</p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
            <div className="flex items-center gap-2 text-slate-900 font-semibold">
              <DollarSign className="h-5 w-5" />
              Cash on Hand
            </div>
            <p className="text-2xl font-bold text-slate-900">{currency(cash)}</p>
          </div>
          <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
            <div className="flex items-center gap-2 text-blue-900 font-semibold">
              <AlertTriangle className="h-5 w-5" />
              Team Morale
            </div>
            <Progress value={satisfaction} className="h-3 mt-2" />
            <p className="text-sm text-blue-900 mt-1">{satisfaction}%</p>
          </div>
        </div>

        <div className="bg-slate-100 border border-slate-200 rounded-lg p-4">
          <h3 className="text-lg font-semibold text-slate-800">Scenario Brief</h3>
          <p className="text-slate-700 mt-2">{currentScenario.description}</p>
          <p className="text-sm text-slate-600 mt-1"><strong>Focus:</strong> {currentScenario.notes}</p>
        </div>

        <div className="space-y-4">
          {STAFF_ROLES.map(role => {
            const choice = choices[role.id]
            return (
              <div key={role.id} className="border rounded-lg p-4 bg-white shadow-sm space-y-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">{role.label}</h4>
                    <p className="text-sm text-slate-600">{role.description}</p>
                    {role.unlockMonth && (
                      <p className="text-xs text-amber-600 mt-1">
                        Most effective after month {role.unlockMonth}.
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700">Shift Coverage</label>
                    <select
                      value={choice.shift}
                      onChange={e => updateChoice(role.id, { shift: e.target.value as ShiftChoice })}
                      className="mt-1 w-full md:w-48 border rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring focus-visible:ring-emerald-200"
                    >
                      {SHIFT_OPTIONS.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700">Team Size</label>
                    <select
                      value={choice.headcount}
                      onChange={e => updateChoice(role.id, { headcount: Number(e.target.value) })}
                      className="mt-1 w-full border rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring focus-visible:ring-emerald-200"
                    >
                      {Array.from({ length: role.maxHeadcount + 1 }).map((_, idx) => (
                        <option key={idx} value={idx}>
                          {idx === 0 ? 'None' : idx}
                        </option>
                      ))}
                    </select>
                    <p className="text-xs text-slate-500 mt-1">
                      {role.type === 'hourly' ? 'Cost adjusts with hours and overtime.' : 'Salaried role charged monthly.'}
                    </p>
                  </div>

                  {role.type === 'hourly' && (
                    <div>
                      <label className="text-sm font-medium text-slate-700">Hours / Week (per person)</label>
                      <select
                        value={choice.hours}
                        onChange={e => updateChoice(role.id, { hours: Number(e.target.value) })}
                        className="mt-1 w-full border rounded-md px-3 py-2 focus-visible:outline-none focus-visible:ring focus-visible:ring-emerald-200"
                      >
                        {[20, 30, 40, 50, 60].map(hr => (
                          <option key={hr} value={hr}>{hr} hrs</option>
                        ))}
                      </select>
                      <p className="text-xs text-slate-500 mt-1">Overtime (1.5x) applies over 40 hours.</p>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button onClick={runMonth} disabled={seasonComplete}>
            {seasonComplete ? 'Season Complete' : 'Run This Month'}
          </Button>
          <Button variant="outline" onClick={resetGame}>
            Reset Simulation
          </Button>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-900">Monthly Ledger</h3>
          {history.length === 0 && (
            <p className="text-sm text-slate-600">Complete a month to start seeing results.</p>
          )}
          {history.map(entry => (
            <div key={entry.month} className="border rounded-lg p-4 space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <Badge variant="secondary">Month {entry.month}</Badge>
                <span className="text-sm text-slate-600">Morale: {entry.satisfaction}%</span>
                <span className={entry.netChange >= 0 ? 'text-sm text-emerald-600' : 'text-sm text-rose-600'}>
                  Net Change: {currency(entry.netChange)}
                </span>
              </div>
              <div className="bg-slate-50 rounded-lg p-3 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span>Revenue</span>
                  <span>{currency(entry.revenue)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Less: Food Cost ({Math.round(entry.foodCostRate * 100)}%)</span>
                  <span>{currency(entry.foodCost)}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Gross Profit</span>
                  <span>{currency(entry.revenue - entry.foodCost)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Less: Payroll</span>
                  <span>{currency(entry.payroll)}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Net Cash Change</span>
                  <span>{currency(entry.netChange)}</span>
                </div>
              </div>
              <p className="text-sm text-slate-700">{entry.summary}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function choiceSummary(choices: Record<string, RoleChoice>) {
  const filled = Object.entries(choices)
    .filter(([, value]) => value.headcount > 0 && value.shift !== 'none')
    .map(([role, value]) => `${roleLabel(role)} x${value.headcount} (${value.shift})`)
  if (!filled.length) return 'No hires yet.'
  return filled.join(', ')
}

function roleLabel(roleId: string) {
  const match = STAFF_ROLES.find(role => role.id === roleId)
  return match ? match.label : roleId
}
