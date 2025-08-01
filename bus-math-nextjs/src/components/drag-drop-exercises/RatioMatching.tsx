/**
 * RatioMatching Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import RatioMatching from '@/components/drag-drop-exercises/RatioMatching'
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <RatioMatching />
 *     </div>
 *   )
 * }
 * ```
 * 
 * The component is fully self-contained with its own state management.
 * No props are required - it initializes with financial ratios and formulas.
 * 
 * STUDENT INTERACTION & LEARNING OBJECTIVES:
 * ==========================================
 * 
 * OBJECTIVE: Students learn to identify and match key financial ratios to their
 * corresponding formulas, building foundation for financial statement analysis.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **Drag & Drop Interface**: Students see 8 different financial ratios in a randomized bank
 *    and must drag each ratio to its correct formula in the matching zones.
 * 
 * 2. **Financial Ratio Categories**: The interface covers four key categories:
 *    - Liquidity Ratios: Current Ratio, Quick Ratio
 *    - Profitability Ratios: Return on Assets, Gross Profit Margin
 *    - Efficiency Ratios: Inventory Turnover, Accounts Receivable Turnover
 *    - Leverage Ratios: Debt-to-Equity, Times Interest Earned
 * 
 * 3. **Real-World Context**: Each ratio includes business meaning and investor perspective:
 *    - Current Ratio: "Can the company pay its short-term debts?"
 *    - Return on Assets: "How efficiently does the company use its assets to generate profit?"
 *    - Debt-to-Equity: "How much debt does the company have relative to owner investment?"
 * 
 * 4. **Hint System**: Students can toggle hints to see:
 *    - What each ratio measures in business terms
 *    - Industry benchmarks and typical good/bad ranges
 *    - Why investors care about each specific ratio
 * 
 * 5. **Immediate Feedback**: When students check their answers:
 *    - Correct matches turn green with ✓ checkmark
 *    - Incorrect matches turn red (students can reposition them)
 *    - Score tracking and attempt counter for progress monitoring
 * 
 * 6. **Progressive Learning**: Students can:
 *    - Practice multiple times with different randomized orders
 *    - Use hints to understand business context, then try without hints
 *    - Build confidence connecting formulas to real financial analysis
 * 
 * KEY LEARNING OUTCOMES:
 * - Identify 8 essential financial ratios used by investors and analysts
 * - Connect ratio formulas to their underlying financial statement accounts
 * - Understand what each ratio measures about business performance
 * - Recognize the four main categories of financial analysis ratios
 * - Build foundation for Unit 3's integrated financial statement analysis
 * 
 * RATIOS INCLUDED:
 * Liquidity: Current Ratio, Quick Ratio
 * Profitability: Return on Assets, Gross Profit Margin
 * Efficiency: Inventory Turnover, Accounts Receivable Turnover
 * Leverage: Debt-to-Equity Ratio, Times Interest Earned
 */

'use client';

import { useState, useCallback } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HelpCircle, ChevronDown, ChevronUp, RotateCcw, CheckCircle, TrendingUp } from 'lucide-react';

interface FinancialRatio {
  id: string;
  name: string;
  category: 'Liquidity' | 'Profitability' | 'Efficiency' | 'Leverage';
  formula: string;
  description: string;
  businessMeaning: string;
  goodRange: string;
  whyItMatters: string;
}

interface DroppedRatio {
  ratio: FinancialRatio;
  isCorrect: boolean;
}

interface FormulaZone {
  id: string;
  formula: string;
  category: string;
  expectedRatioId: string;
  emoji: string;
  ratio: DroppedRatio | null;
}

const FINANCIAL_RATIOS: FinancialRatio[] = [
  {
    id: 'current-ratio',
    name: 'Current Ratio',
    category: 'Liquidity',
    formula: 'Current Assets ÷ Current Liabilities',
    description: 'Measures ability to pay short-term debts',
    businessMeaning: 'Can the company pay bills due within one year?',
    goodRange: '1.5 - 3.0 (varies by industry)',
    whyItMatters: 'Investors want to see companies can meet short-term obligations without selling long-term assets'
  },
  {
    id: 'quick-ratio',
    name: 'Quick Ratio (Acid Test)',
    category: 'Liquidity',
    formula: '(Current Assets - Inventory) ÷ Current Liabilities',
    description: 'Measures ability to pay debts with liquid assets only',
    businessMeaning: 'Can the company pay immediate bills without selling inventory?',
    goodRange: '1.0 - 1.5 (conservative liquidity measure)',
    whyItMatters: 'More conservative than current ratio - excludes inventory which may be hard to convert to cash quickly'
  },
  {
    id: 'return-on-assets',
    name: 'Return on Assets (ROA)',
    category: 'Profitability',
    formula: 'Net Income ÷ Total Assets',
    description: 'Measures how efficiently assets generate profit',
    businessMeaning: 'How much profit does each dollar of assets generate?',
    goodRange: '5% - 20% (higher is better)',
    whyItMatters: 'Shows management effectiveness at using assets to create earnings for shareholders'
  },
  {
    id: 'gross-profit-margin',
    name: 'Gross Profit Margin',
    category: 'Profitability',
    formula: '(Revenue - Cost of Goods Sold) ÷ Revenue',
    description: 'Shows percentage of revenue retained after direct costs',
    businessMeaning: 'What percentage of each sale is profit before operating expenses?',
    goodRange: '20% - 80% (varies widely by industry)',
    whyItMatters: 'Indicates pricing power and production efficiency - higher margins suggest competitive advantages'
  },
  {
    id: 'inventory-turnover',
    name: 'Inventory Turnover',
    category: 'Efficiency',
    formula: 'Cost of Goods Sold ÷ Average Inventory',
    description: 'Measures how quickly inventory is sold and replaced',
    businessMeaning: 'How many times per year does the company sell all its inventory?',
    goodRange: '4 - 12 times per year (depends on industry)',
    whyItMatters: 'Higher turnover means less cash tied up in inventory and fresher products for customers'
  },
  {
    id: 'ar-turnover',
    name: 'Accounts Receivable Turnover',
    category: 'Efficiency',
    formula: 'Net Credit Sales ÷ Average Accounts Receivable',
    description: 'Measures how quickly company collects customer payments',
    businessMeaning: 'How many times per year does the company collect all outstanding customer debts?',
    goodRange: '6 - 12 times per year (monthly collections)',
    whyItMatters: 'Higher turnover means faster cash collection and lower risk of bad debts'
  },
  {
    id: 'debt-to-equity',
    name: 'Debt-to-Equity Ratio',
    category: 'Leverage',
    formula: 'Total Debt ÷ Total Equity',
    description: 'Compares debt financing to owner investment',
    businessMeaning: 'How much debt does the company have for each dollar of owner investment?',
    goodRange: '0.3 - 0.6 (lower is more conservative)',
    whyItMatters: 'Higher ratios mean more financial risk but potentially higher returns for shareholders'
  },
  {
    id: 'times-interest-earned',
    name: 'Times Interest Earned',
    category: 'Leverage',
    formula: 'Earnings Before Interest & Taxes ÷ Interest Expense',
    description: 'Measures ability to pay interest on debt',
    businessMeaning: 'How many times can the company cover its interest payments with current earnings?',
    goodRange: '2.5 - 10+ times (higher is safer)',
    whyItMatters: 'Shows whether the company can comfortably service its debt obligations'
  }
];

const FORMULA_ZONES: FormulaZone[] = [
  {
    id: 'current-ratio-zone',
    formula: 'Current Assets ÷ Current Liabilities',
    category: 'Liquidity',
    expectedRatioId: 'current-ratio',
    emoji: '💧',
    ratio: null
  },
  {
    id: 'quick-ratio-zone',
    formula: '(Current Assets - Inventory) ÷ Current Liabilities',
    category: 'Liquidity',
    expectedRatioId: 'quick-ratio',
    emoji: '⚡',
    ratio: null
  },
  {
    id: 'roa-zone',
    formula: 'Net Income ÷ Total Assets',
    category: 'Profitability',
    expectedRatioId: 'return-on-assets',
    emoji: '🎯',
    ratio: null
  },
  {
    id: 'gross-margin-zone',
    formula: '(Revenue - Cost of Goods Sold) ÷ Revenue',
    category: 'Profitability',
    expectedRatioId: 'gross-profit-margin',
    emoji: '📈',
    ratio: null
  },
  {
    id: 'inventory-turnover-zone',
    formula: 'Cost of Goods Sold ÷ Average Inventory',
    category: 'Efficiency',
    expectedRatioId: 'inventory-turnover',
    emoji: '🔄',
    ratio: null
  },
  {
    id: 'ar-turnover-zone',
    formula: 'Net Credit Sales ÷ Average Accounts Receivable',
    category: 'Efficiency',
    expectedRatioId: 'ar-turnover',
    emoji: '💰',
    ratio: null
  },
  {
    id: 'debt-equity-zone',
    formula: 'Total Debt ÷ Total Equity',
    category: 'Leverage',
    expectedRatioId: 'debt-to-equity',
    emoji: '⚖️',
    ratio: null
  },
  {
    id: 'interest-coverage-zone',
    formula: 'Earnings Before Interest & Taxes ÷ Interest Expense',
    category: 'Leverage',
    expectedRatioId: 'times-interest-earned',
    emoji: '🛡️',
    ratio: null
  }
];

export default function RatioMatching() {
  const [ratios, setRatios] = useState<FinancialRatio[]>(() => 
    [...FINANCIAL_RATIOS].sort(() => Math.random() - 0.5)
  );
  
  const [formulaZones, setFormulaZones] = useState<FormulaZone[]>(
    FORMULA_ZONES.map(zone => ({ ...zone }))
  );

  const [attempts, setAttempts] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [score, setScore] = useState(0);
  const [showHints, setShowHints] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

  const onDragEnd = useCallback((result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (source.droppableId === 'ratios-bank') {
      // Moving from bank to formula zone
      const ratio = ratios.find(r => r.id === draggableId);
      if (!ratio) return;

      const targetZone = formulaZones.find(zone => zone.id === destination.droppableId);
      if (!targetZone) return;

      const isCorrect = ratio.id === targetZone.expectedRatioId;

      setRatios(prev => prev.filter(r => r.id !== draggableId));
      setFormulaZones(prev => prev.map(zone => 
        zone.id === destination.droppableId
          ? { ...zone, ratio: { ratio, isCorrect } }
          : zone
      ));
    } else if (destination.droppableId === 'ratios-bank') {
      // Moving from formula zone back to bank
      const sourceZone = formulaZones.find(zone => zone.id === source.droppableId);
      if (!sourceZone || !sourceZone.ratio) return;

      setFormulaZones(prev => prev.map(zone => 
        zone.id === source.droppableId
          ? { ...zone, ratio: null }
          : zone
      ));
      setRatios(prev => [...prev, sourceZone.ratio!.ratio]);
    } else {
      // Moving between formula zones
      const sourceZone = formulaZones.find(zone => zone.id === source.droppableId);
      const targetZone = formulaZones.find(zone => zone.id === destination.droppableId);
      
      if (!sourceZone || !targetZone || !sourceZone.ratio) return;

      const isCorrect = sourceZone.ratio.ratio.id === targetZone.expectedRatioId;

      setFormulaZones(prev => prev.map(zone => {
        if (zone.id === source.droppableId) {
          return { ...zone, ratio: null };
        }
        if (zone.id === destination.droppableId) {
          return { ...zone, ratio: { ratio: sourceZone.ratio!.ratio, isCorrect } };
        }
        return zone;
      }));
    }
  }, [ratios, formulaZones]);

  const checkAnswers = () => {
    setAttempts(prev => prev + 1);
    
    const totalPlaced = formulaZones.filter(zone => zone.ratio !== null).length;
    const correctlyPlaced = formulaZones.filter(zone => zone.ratio?.isCorrect).length;
    
    const newScore = totalPlaced > 0 ? Math.round((correctlyPlaced / totalPlaced) * 100) : 0;
    setScore(newScore);
    
    if (newScore === 100 && totalPlaced === FINANCIAL_RATIOS.length) {
      setFeedbackMessage(`🎉 Perfect! You correctly matched all ${totalPlaced} financial ratios! You're ready to analyze financial statements like a pro!`);
    } else if (totalPlaced === FINANCIAL_RATIOS.length) {
      setFeedbackMessage(`You matched all ratios but got ${correctlyPlaced} out of ${totalPlaced} correct (${newScore}%). Look at the red highlighted ratios and try moving them to the right formulas!`);
    } else {
      setFeedbackMessage(`Keep going! You've placed ${totalPlaced} out of ${FINANCIAL_RATIOS.length} ratios. ${correctlyPlaced} are matched correctly so far!`);
    }
    
    setShowFeedback(true);
  };

  const resetExercise = () => {
    setRatios([...FINANCIAL_RATIOS].sort(() => Math.random() - 0.5));
    setFormulaZones(FORMULA_ZONES.map(zone => ({ ...zone, ratio: null })));
    setAttempts(0);
    setScore(0);
    setShowFeedback(false);
    setShowHints(false);
  };

  const toggleHints = () => {
    setShowHints(prev => !prev);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl flex items-center justify-center gap-2">
            <TrendingUp className="w-8 h-8 text-blue-600" />
            Financial Ratio Matching Challenge
          </CardTitle>
          <CardDescription className="text-lg">
            Master financial analysis by matching ratios to their formulas!
          </CardDescription>
          <div className="mt-4 flex items-center justify-center gap-4">
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
            <div className="flex gap-4 text-sm font-semibold">
              <Badge variant="outline" className="text-blue-600">
                Attempts: {attempts}
              </Badge>
              <Badge variant="outline" className="text-green-600">
                Score: {score}%
              </Badge>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Instructions Panel */}
      {showInstructions && (
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              How to Play Financial Ratio Matching
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Objective */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">🎯 Objective</h4>
              <p className="text-blue-700">
                Learn the essential financial ratios that investors and analysts use to evaluate business performance. 
                Match each ratio name to its correct formula to understand how financial statements tell a business story.
              </p>
            </div>

            {/* How to Play */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">🎮 How to Play</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-lg border border-blue-200">
                  <h5 className="font-medium text-blue-800 mb-2">1. Drag & Match</h5>
                  <p className="text-sm text-blue-700">
                    Drag each financial ratio from the bank to its matching formula box. 
                    You can move ratios between formula boxes if you change your mind.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-blue-200">
                  <h5 className="font-medium text-blue-800 mb-2">2. Use Business Context</h5>
                  <p className="text-sm text-blue-700">
                    Click "Show Hints" to see what each ratio measures and why investors care about it. 
                    This helps you think about the business purpose behind each formula.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-blue-200">
                  <h5 className="font-medium text-blue-800 mb-2">3. Check Your Work</h5>
                  <p className="text-sm text-blue-700">
                    Click "Check Answers" to see your results. 
                    Correct matches turn green, incorrect ones turn red with feedback.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-blue-200">
                  <h5 className="font-medium text-blue-800 mb-2">4. Master All Categories</h5>
                  <p className="text-sm text-blue-700">
                    Aim for 100% to master all four categories: Liquidity, Profitability, Efficiency, and Leverage ratios.
                  </p>
                </div>
              </div>
            </div>

            {/* Ratio Categories */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-3">📊 Financial Ratio Categories</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">💧</span>
                    <h5 className="font-medium text-blue-800">Liquidity Ratios</h5>
                  </div>
                  <p className="text-sm text-blue-700">Can the company pay its short-term debts?</p>
                  <p className="text-xs text-blue-600 mt-1">Current Ratio, Quick Ratio</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">📈</span>
                    <h5 className="font-medium text-green-800">Profitability Ratios</h5>
                  </div>
                  <p className="text-sm text-green-700">How profitable is the company?</p>
                  <p className="text-xs text-green-600 mt-1">Return on Assets, Gross Profit Margin</p>
                </div>
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">🔄</span>
                    <h5 className="font-medium text-purple-800">Efficiency Ratios</h5>
                  </div>
                  <p className="text-sm text-purple-700">How well does the company use its resources?</p>
                  <p className="text-xs text-purple-600 mt-1">Inventory Turnover, A/R Turnover</p>
                </div>
                <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">⚖️</span>
                    <h5 className="font-medium text-orange-800">Leverage Ratios</h5>
                  </div>
                  <p className="text-sm text-orange-700">How much debt does the company have?</p>
                  <p className="text-xs text-orange-600 mt-1">Debt-to-Equity, Times Interest Earned</p>
                </div>
              </div>
            </div>

            {/* Success Tips */}
            <div>
              <h4 className="font-semibold text-blue-800 mb-2">💡 Success Tips</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• <strong>Think about the question:</strong> Each ratio answers a specific business question</li>
                <li>• <strong>Look for keywords:</strong> "Current" ratios use current assets/liabilities</li>
                <li>• <strong>Understand the math:</strong> Higher ratios usually mean better performance (except debt ratios)</li>
                <li>• <strong>Connect to real business:</strong> Imagine you're an investor evaluating a company</li>
                <li>• <strong>Use hints strategically:</strong> Learn the business meaning, then practice without hints</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Main Game Area */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Interactive Ratio Matching Exercise</CardTitle>
          <CardDescription className="text-center">
            Drag financial ratios from the bank below to their correct formula boxes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DragDropContext onDragEnd={onDragEnd}>
            {/* Ratios Bank */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 text-center">
                📚 Financial Ratios to Match
              </h3>
              <Droppable droppableId="ratios-bank" direction="horizontal">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`min-h-[100px] p-4 border-2 border-dashed rounded-lg transition-colors ${
                      snapshot.isDraggingOver 
                        ? 'border-blue-400 bg-blue-50' 
                        : 'border-gray-300 bg-gray-50'
                    }`}
                  >
                    <div className="flex flex-wrap gap-2 justify-center">
                      {ratios.map((ratio, index) => (
                        <Draggable key={ratio.id} draggableId={ratio.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`bg-white border-2 border-blue-200 rounded-lg p-3 cursor-grab shadow-sm transition-all hover:shadow-md hover:-translate-y-1 max-w-[200px] ${
                                snapshot.isDragging ? 'rotate-3 shadow-lg' : ''
                              }`}
                              title={showHints ? `${ratio.businessMeaning} - ${ratio.whyItMatters}` : ratio.description}
                            >
                              <div className="font-semibold text-gray-800 text-sm text-center">{ratio.name}</div>
                              <div className="text-xs text-center mt-1">
                                <Badge variant="outline" className="text-xs">
                                  {ratio.category}
                                </Badge>
                              </div>
                              {showHints && (
                                <div className="text-xs text-gray-500 mt-2 text-center">
                                  {ratio.businessMeaning}
                                </div>
                              )}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                    {ratios.length === 0 && (
                      <div className="text-center text-gray-500 py-8">
                        🎉 All ratios have been matched!
                      </div>
                    )}
                  </div>
                )}
              </Droppable>
            </div>

            {/* Formula Zones Grid */}
            <div className="mb-6">
              <h3 className="text-xl font-bold text-center mb-4 text-gray-800">
                Financial Ratio Formulas
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {formulaZones.map((zone) => (
                  <FormulaDropZone 
                    key={zone.id}
                    zone={zone} 
                    showHints={showHints}
                  />
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-center gap-4 mb-6">
              <Button
                onClick={checkAnswers}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <CheckCircle className="w-4 h-4 mr-2" />
                Check Answers
              </Button>
              <Button
                onClick={resetExercise}
                variant="outline"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Reset
              </Button>
              <Button
                onClick={toggleHints}
                variant="outline"
                className={showHints ? 'bg-purple-50 border-purple-300' : ''}
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                {showHints ? 'Hide' : 'Show'} Hints
              </Button>
            </div>

            {/* Feedback */}
            {showFeedback && (
              <div className={`p-4 rounded-lg text-center font-semibold ${
                score === 100 
                  ? 'bg-green-100 border border-green-400 text-green-800'
                  : 'bg-yellow-100 border border-yellow-400 text-yellow-800'
              }`}>
                {feedbackMessage}
              </div>
            )}
          </DragDropContext>
        </CardContent>
      </Card>

      {/* Educational Summary */}
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-4">
          <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
            <span className="text-lg">🎯</span>
            Why Financial Ratios Matter:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-white rounded border border-green-200">
              <h5 className="font-semibold text-green-800 mb-1">For Investors</h5>
              <p className="text-green-700">Ratios help compare companies and make investment decisions</p>
            </div>
            <div className="p-3 bg-white rounded border border-green-200">
              <h5 className="font-semibold text-green-800 mb-1">For Managers</h5>
              <p className="text-green-700">Track performance and identify areas for improvement</p>
            </div>
            <div className="p-3 bg-white rounded border border-green-200">
              <h5 className="font-semibold text-green-800 mb-1">For Lenders</h5>
              <p className="text-green-700">Assess credit risk and ability to repay loans</p>
            </div>
            <div className="p-3 bg-white rounded border border-green-200">
              <h5 className="font-semibold text-green-800 mb-1">For You</h5>
              <p className="text-green-700">Foundation for analyzing any business or investment opportunity</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

interface FormulaDropZoneProps {
  zone: FormulaZone;
  showHints: boolean;
}

function FormulaDropZone({ zone, showHints }: FormulaDropZoneProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Liquidity': return 'border-blue-300 bg-blue-50';
      case 'Profitability': return 'border-green-300 bg-green-50';
      case 'Efficiency': return 'border-purple-300 bg-purple-50';
      case 'Leverage': return 'border-orange-300 bg-orange-50';
      default: return 'border-gray-300 bg-gray-50';
    }
  };

  return (
    <div className={`p-3 rounded-lg border-2 ${getCategoryColor(zone.category)}`}>
      <div className="text-center mb-2">
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="text-xl">{zone.emoji}</span>
          <Badge variant="outline" className="text-xs">
            {zone.category}
          </Badge>
        </div>
        <div className="font-mono text-sm font-semibold text-gray-800 mb-2">
          {zone.formula}
        </div>
      </div>
      
      <Droppable droppableId={zone.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`min-h-[80px] p-2 border-2 border-dashed rounded transition-colors ${
              snapshot.isDraggingOver
                ? 'border-blue-400 bg-blue-100'
                : 'border-gray-300 bg-white'
            }`}
          >
            {zone.ratio === null ? (
              <div className="text-gray-400 text-xs text-center py-4">
                Drop ratio name here
              </div>
            ) : (
              <Draggable key={zone.ratio.ratio.id} draggableId={zone.ratio.ratio.id} index={0}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className={`p-2 rounded cursor-grab transition-all text-center ${
                      snapshot.isDragging 
                        ? 'shadow-lg rotate-2' 
                        : ''
                    } ${
                      zone.ratio.isCorrect 
                        ? 'bg-green-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}
                    title={showHints ? `${zone.ratio.ratio.businessMeaning} - ${zone.ratio.ratio.whyItMatters}` : zone.ratio.ratio.description}
                  >
                    <div className="font-semibold text-sm">{zone.ratio.ratio.name}</div>
                    {zone.ratio.isCorrect && <div className="text-xs mt-1">✓ Correct!</div>}
                    {showHints && zone.ratio.isCorrect && (
                      <div className="text-xs opacity-90 mt-1">
                        {zone.ratio.ratio.goodRange}
                      </div>
                    )}
                  </div>
                )}
              </Draggable>
            )}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}