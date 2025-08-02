'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage, BilingualText } from './LanguageToggle';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Calculator, 
  PieChart, 
  BarChart3,
  ArrowRight,
  ArrowDown,
  ArrowUp,
  Building,
  CreditCard,
  Wallet,
  Target,
  Users,
  Clock,
  Lightbulb
} from 'lucide-react';

interface InfographicStep {
  id: string;
  english: string;
  chinese: string;
  icon?: React.ReactNode;
  color?: string;
  position?: { x: number; y: number };
}

interface InfographicConnection {
  from: string;
  to: string;
  label?: { english: string; chinese: string };
  type?: 'arrow' | 'line' | 'dashed';
}

interface VisualInfographicProps {
  title: { english: string; chinese: string };
  description: { english: string; chinese: string };
  type: 'flowchart' | 'cycle' | 'hierarchy' | 'comparison' | 'process';
  steps: InfographicStep[];
  connections?: InfographicConnection[];
  conceptId: string;
  unit?: string;
  difficulty?: 'basic' | 'intermediate' | 'advanced';
  className?: string;
}

const conceptData = {
  'accounting-equation': {
    title: { english: 'Accounting Equation', chinese: '会计等式' },
    description: { 
      english: 'The fundamental equation that keeps business finances balanced',
      chinese: '保持企业财务平衡的基本等式'
    },
    type: 'comparison' as const,
    steps: [
      {
        id: 'assets',
        english: 'ASSETS',
        chinese: '资产',
        icon: <Building className="h-8 w-8" />,
        color: 'bg-blue-500'
      },
      {
        id: 'equals',
        english: '=',
        chinese: '=',
        icon: <Target className="h-8 w-8" />,
        color: 'bg-gray-500'
      },
      {
        id: 'liabilities',
        english: 'LIABILITIES',
        chinese: '负债',
        icon: <CreditCard className="h-8 w-8" />,
        color: 'bg-red-500'
      },
      {
        id: 'plus',
        english: '+',
        chinese: '+',
        icon: null,
        color: 'bg-gray-500'
      },
      {
        id: 'equity',
        english: 'EQUITY',
        chinese: '股本',
        icon: <Wallet className="h-8 w-8" />,
        color: 'bg-green-500'
      }
    ]
  },
  'break-even-analysis': {
    title: { english: 'Break-Even Analysis', chinese: '盈亏平衡分析' },
    description: { 
      english: 'Finding the point where total revenue equals total costs',
      chinese: '找到总收入等于总成本的点'
    },
    type: 'process' as const,
    steps: [
      {
        id: 'fixed-costs',
        english: 'Fixed Costs',
        chinese: '固定成本',
        icon: <Building className="h-6 w-6" />,
        color: 'bg-orange-500'
      },
      {
        id: 'variable-costs',
        english: 'Variable Costs',
        chinese: '可变成本',
        icon: <TrendingUp className="h-6 w-6" />,
        color: 'bg-yellow-500'
      },
      {
        id: 'revenue',
        english: 'Revenue',
        chinese: '收入',
        icon: <DollarSign className="h-6 w-6" />,
        color: 'bg-green-500'
      },
      {
        id: 'break-even',
        english: 'Break-Even Point',
        chinese: '盈亏平衡点',
        icon: <Target className="h-6 w-6" />,
        color: 'bg-blue-500'
      }
    ],
    connections: [
      { from: 'fixed-costs', to: 'break-even', type: 'arrow' as const },
      { from: 'variable-costs', to: 'break-even', type: 'arrow' as const },
      { from: 'revenue', to: 'break-even', type: 'arrow' as const }
    ]
  },
  'cash-flow-cycle': {
    title: { english: 'Cash Flow Cycle', chinese: '现金流循环' },
    description: { 
      english: 'How money moves through a business over time',
      chinese: '资金如何随时间在企业中流动'
    },
    type: 'cycle' as const,
    steps: [
      {
        id: 'cash-in',
        english: 'Cash Comes In',
        chinese: '现金流入',
        icon: <ArrowDown className="h-6 w-6 text-green-600" />,
        color: 'bg-green-100'
      },
      {
        id: 'operations',
        english: 'Business Operations',
        chinese: '业务运营',
        icon: <Users className="h-6 w-6" />,
        color: 'bg-blue-100'
      },
      {
        id: 'cash-out',
        english: 'Cash Goes Out',
        chinese: '现金流出',
        icon: <ArrowUp className="h-6 w-6 text-red-600" />,
        color: 'bg-red-100'
      },
      {
        id: 'planning',
        english: 'Financial Planning',
        chinese: '财务规划',
        icon: <Calculator className="h-6 w-6" />,
        color: 'bg-purple-100'
      }
    ],
    connections: [
      { from: 'cash-in', to: 'operations', type: 'arrow' as const },
      { from: 'operations', to: 'cash-out', type: 'arrow' as const },
      { from: 'cash-out', to: 'planning', type: 'arrow' as const },
      { from: 'planning', to: 'cash-in', type: 'arrow' as const }
    ]
  }
};

export default function VisualInfographic({
  conceptId,
  unit,
  difficulty = 'intermediate',
  className = ''
}: { conceptId: keyof typeof conceptData; unit?: string; difficulty?: 'basic' | 'intermediate' | 'advanced'; className?: string }) {
  const { t } = useLanguage();
  const concept = conceptData[conceptId];

  if (!concept) {
    return (
      <Card className={className}>
        <CardContent className="p-6 text-center">
          <Lightbulb className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">
            <BilingualText english="Concept not found" chinese="找不到概念" />
          </p>
        </CardContent>
      </Card>
    );
  }

  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'basic': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderFlowchart = () => (
    <div className="space-y-6">
      {concept.steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className={`${step.color} text-white p-4 rounded-lg flex items-center gap-3 flex-1`}>
            {step.icon}
            <div>
              <p className="font-semibold">
                {t(step.english, step.chinese)}
              </p>
            </div>
          </div>
          {index < concept.steps.length - 1 && (
            <ArrowDown className="h-6 w-6 text-gray-400 mx-4" />
          )}
        </div>
      ))}
    </div>
  );

  const renderComparison = () => (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      {concept.steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <div className={`${step.color} text-white p-6 rounded-lg flex flex-col items-center min-w-[120px]`}>
            {step.icon}
            <p className="font-semibold text-center mt-2">
              {t(step.english, step.chinese)}
            </p>
          </div>
          {index < concept.steps.length - 1 && step.english !== '=' && step.english !== '+' && (
            <div className="text-2xl font-bold text-gray-600">
              {concept.steps[index + 1]?.english === '=' ? '=' : concept.steps[index + 1]?.english === '+' ? '+' : ''}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );

  const renderCycle = () => (
    <div className="relative">
      <div className="grid grid-cols-2 gap-8 max-w-md mx-auto">
        {concept.steps.map((step, index) => (
          <div key={step.id} className={`${step.color} p-4 rounded-lg flex flex-col items-center text-center relative`}>
            {step.icon}
            <p className="font-semibold mt-2 text-sm">
              {t(step.english, step.chinese)}
            </p>
            {/* Connection arrows */}
            {index === 0 && <ArrowRight className="absolute -right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />}
            {index === 1 && <ArrowDown className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 h-6 w-6 text-gray-400" />}
            {index === 2 && <ArrowRight className="absolute -left-4 top-1/2 transform -translate-y-1/2 rotate-180 h-6 w-6 text-gray-400" />}
            {index === 3 && <ArrowUp className="absolute bottom-full left-1/2 transform -translate-x-1/2 -mb-2 h-6 w-6 text-gray-400" />}
          </div>
        ))}
      </div>
    </div>
  );

  const renderProcess = () => (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-center gap-4">
        {concept.steps.slice(0, -1).map((step, index) => (
          <React.Fragment key={step.id}>
            <div className={`${step.color} text-white p-4 rounded-lg flex items-center gap-2`}>
              {step.icon}
              <span className="font-semibold text-sm">
                {t(step.english, step.chinese)}
              </span>
            </div>
            {index < concept.steps.length - 2 && (
              <ArrowRight className="h-6 w-6 text-gray-400 self-center" />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-center">
        <ArrowDown className="h-8 w-8 text-gray-400" />
      </div>
      <div className="flex justify-center">
        {concept.steps.slice(-1).map(step => (
          <div key={step.id} className={`${step.color} text-white p-6 rounded-lg flex items-center gap-3`}>
            {step.icon}
            <span className="font-semibold">
              {t(step.english, step.chinese)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderInfographic = () => {
    switch (concept.type) {
      case 'flowchart': return renderFlowchart();
      case 'comparison': return renderComparison();
      case 'cycle': return renderCycle();
      case 'process': return renderProcess();
      default: return renderFlowchart();
    }
  };

  return (
    <Card className={`${className}`}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl mb-2">
              {t(concept.title.english, concept.title.chinese)}
            </CardTitle>
            <p className="text-gray-600 text-sm">
              {t(concept.description.english, concept.description.chinese)}
            </p>
          </div>
          <div className="flex gap-2">
            <Badge className={getDifficultyColor(difficulty)}>
              <BilingualText english={difficulty} chinese={difficulty} />
            </Badge>
            {unit && (
              <Badge variant="outline">
                {unit.toUpperCase()}
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="py-6">
          {renderInfographic()}
        </div>
      </CardContent>
    </Card>
  );
}

// Export individual infographic concepts for easy use
export const AccountingEquationInfographic = (props: { unit?: string; difficulty?: 'basic' | 'intermediate' | 'advanced'; className?: string }) => (
  <VisualInfographic conceptId="accounting-equation" {...props} />
);

export const BreakEvenInfographic = (props: { unit?: string; difficulty?: 'basic' | 'intermediate' | 'advanced'; className?: string }) => (
  <VisualInfographic conceptId="break-even-analysis" {...props} />
);

export const CashFlowInfographic = (props: { unit?: string; difficulty?: 'basic' | 'intermediate' | 'advanced'; className?: string }) => (
  <VisualInfographic conceptId="cash-flow-cycle" {...props} />
);