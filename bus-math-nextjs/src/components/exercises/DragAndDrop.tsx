/**
 * DragAndDrop Component
 * 
 * DEVELOPER USAGE:
 * ================
 * Import and use this component in any React page or component:
 * 
 * ```tsx
 * import { DragAndDrop } from '@/components/exercises/DragAndDrop'
 * 
 * const vocabularyItems = [
 *   { id: '1', content: 'Assets', matchId: '2', hint: 'Things a business owns' },
 *   { id: '2', content: 'Resources owned by business', matchId: '1' },
 *   { id: '3', content: 'Liabilities', matchId: '4', hint: 'Debts owed by business' },
 *   { id: '4', content: 'Money owed to others', matchId: '3' },
 * ]
 * 
 * export default function MyPage() {
 *   return (
 *     <div>
 *       <DragAndDrop 
 *         items={vocabularyItems}
 *         title="Accounting Vocabulary"
 *         description="Match each term with its definition"
 *         leftColumnTitle="Accounting Terms"
 *         rightColumnTitle="Definitions"
 *         showHints={true}
 *         shuffleItems={true}
 *         onComplete={(score) => console.log('Completed with score:', score)}
 *       />
 *     </div>
 *   )
 * }
 * ```
 * 
 * PROPS:
 * - items: MatchingItem[] - Array of all items to be matched (required)
 * - title: string - Exercise title (required)
 * - description: string - Exercise description (required)
 * - leftColumnTitle?: string - Title for left column (default: "Items")
 * - rightColumnTitle?: string - Title for right column (default: "Matches")
 * - showHints?: boolean - Enable hint system (default: false)
 * - shuffleItems?: boolean - Randomize item order on load (default: true)
 * - onComplete?: (score: number) => void - Callback when exercise completed
 * 
 * STUDENT INTERACTION & LEARNING OBJECTIVES:
 * ==========================================
 * 
 * OBJECTIVE: Students learn through interactive matching exercises that can be
 * applied to any subject area - vocabulary terms and definitions, accounting 
 * entries and explanations, formulas and meanings, etc.
 * 
 * HOW STUDENTS INTERACT:
 * 1. **Two-Column Layout**: Students see items in the left column that need to
 *    be matched with corresponding items that appear as drop zones in the right column.
 * 
 * 2. **Drag & Drop Interface**: Students drag items from the left column to the
 *    appropriate drop zones in the right column:
 *    - Visual feedback shows drag state with rotation and shadows
 *    - Drop zones highlight when dragging over them
 *    - Items snap into place when dropped
 * 
 * 3. **Real-time Feedback**: As students make matches:
 *    - Correct matches show green highlighting with checkmark
 *    - Incorrect matches show red highlighting with X mark
 *    - Items can be moved between drop zones until correct
 * 
 * 4. **Hint System**: Optional hints can be enabled:
 *    - Toggle hints on/off to show additional context
 *    - Helps students understand the reasoning behind matches
 *    - Can be used for scaffolded learning progression
 * 
 * 5. **Progress Tracking**: Students receive:
 *    - Real-time scoring as percentage of correct matches
 *    - Attempt counter for self-monitoring
 *    - Completion celebration when all matches are correct
 * 
 * 6. **Built-in Instructions**: Expandable panel includes:
 *    - Clear objective statement
 *    - Step-by-step interaction guide
 *    - Success tips and strategies
 * 
 * KEY LEARNING OUTCOMES:
 * - Active engagement with content through kinesthetic interaction
 * - Immediate feedback reinforces correct associations
 * - Self-paced learning with retry opportunities
 * - Visual and spatial memory reinforcement
 * - Confidence building through gamified success metrics
 * 
 * FLEXIBILITY FOR DIFFERENT SUBJECTS:
 * - **Vocabulary**: Terms ↔ Definitions
 * - **Accounting**: Journal Entries ↔ Explanations  
 * - **Business**: Concepts ↔ Real-world Examples
 * - **Finance**: Ratios ↔ Formulas
 * - **Math**: Problems ↔ Solutions
 * - **Science**: Terms ↔ Descriptions
 * - **Any 1:1 matching relationship**
 */

'use client';

import { useState, useCallback, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { HelpCircle, ChevronDown, ChevronUp, RotateCcw, CheckCircle, XCircle, Target, Lightbulb } from 'lucide-react';

interface MatchingItem {
  id: string;
  content: string;
  matchId: string; // ID of the item this should match with
  category?: string; // Optional grouping
  hint?: string; // Optional hint text
  description?: string; // Optional detailed description
}

interface DroppedMatch {
  item: MatchingItem;
  isCorrect: boolean;
}

interface DropZone {
  id: string;
  targetItem: MatchingItem;
  droppedItem: DroppedMatch | null;
}

interface DragAndDropProps {
  items: MatchingItem[];
  title: string;
  description: string;
  leftColumnTitle?: string;
  rightColumnTitle?: string;
  showHints?: boolean;
  shuffleItems?: boolean;
  onComplete?: (score: number) => void;
}

export function DragAndDrop({
  items,
  title,
  description,
  leftColumnTitle = "Items",
  rightColumnTitle = "Matches",
  showHints = false,
  shuffleItems = true,
  onComplete
}: DragAndDropProps) {
  // Separate items into left column (draggable) and right column (drop zones)
  const [leftItems, setLeftItems] = useState<MatchingItem[]>([]);
  const [dropZones, setDropZones] = useState<DropZone[]>([]);
  const [unplacedItems, setUnplacedItems] = useState<MatchingItem[]>([]);
  
  const [attempts, setAttempts] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [score, setScore] = useState(0);
  const [hintsEnabled, setHintsEnabled] = useState(showHints);
  const [showInstructions, setShowInstructions] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Initialize the exercise
  useEffect(() => {
    const initializeExercise = () => {
      // Create pairs: for each item, find its match
      const processedItems = [...items];
      const leftSideItems: MatchingItem[] = [];
      const rightSideItems: MatchingItem[] = [];

      // Group items into pairs and decide which goes left vs right
      const usedIds = new Set<string>();
      
      for (const item of processedItems) {
        if (usedIds.has(item.id)) continue;
        
        const matchingItem = processedItems.find(i => i.id === item.matchId);
        if (matchingItem) {
          // First item goes to left column (draggable)
          leftSideItems.push(item);
          // Second item goes to right column (drop zone)
          rightSideItems.push(matchingItem);
          
          usedIds.add(item.id);
          usedIds.add(matchingItem.id);
        }
      }

      // Shuffle if requested using Fisher-Yates algorithm
      const shuffleArray = <T,>(array: T[]): T[] => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      };

      const finalLeftItems = shuffleItems 
        ? shuffleArray(leftSideItems)
        : leftSideItems;

      const finalRightItems = shuffleItems
        ? shuffleArray(rightSideItems)
        : rightSideItems;

      // Create drop zones
      const zones: DropZone[] = finalRightItems.map(item => ({
        id: `dropzone-${item.id}`,
        targetItem: item,
        droppedItem: null
      }));

      setLeftItems(finalLeftItems);
      setUnplacedItems([...finalLeftItems]);
      setDropZones(zones);
      setScore(0);
      setAttempts(0);
      setShowFeedback(false);
      setIsComplete(false);
    };

    initializeExercise();
  }, [items, shuffleItems]);

  const onDragEnd = useCallback((result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (source.droppableId === 'unplaced-items') {
      // Moving from unplaced items to a drop zone
      const draggedItem = unplacedItems.find(item => item.id === draggableId);
      if (!draggedItem) return;

      const targetZoneId = destination.droppableId;
      const targetZone = dropZones.find(zone => zone.id === targetZoneId);
      if (!targetZone) return;

      const isCorrect = draggedItem.matchId === targetZone.targetItem.id;

      // Remove from unplaced items
      setUnplacedItems(prev => prev.filter(item => item.id !== draggableId));

      // Update drop zones
      setDropZones(prev => prev.map(zone => {
        if (zone.id === targetZoneId) {
          // If there's already an item in this zone, move it back to unplaced
          if (zone.droppedItem) {
            setUnplacedItems(current => [...current, zone.droppedItem!.item]);
          }
          return {
            ...zone,
            droppedItem: { item: draggedItem, isCorrect }
          };
        }
        return zone;
      }));

    } else if (destination.droppableId === 'unplaced-items') {
      // Moving from a drop zone back to unplaced items
      const sourceZoneId = source.droppableId;
      const sourceZone = dropZones.find(zone => zone.id === sourceZoneId);
      
      if (sourceZone && sourceZone.droppedItem) {
        setUnplacedItems(prev => [...prev, sourceZone.droppedItem!.item]);
        setDropZones(prev => prev.map(zone => 
          zone.id === sourceZoneId ? { ...zone, droppedItem: null } : zone
        ));
      }

    } else {
      // Moving between drop zones
      const sourceZoneId = source.droppableId;
      const targetZoneId = destination.droppableId;
      
      const sourceZone = dropZones.find(zone => zone.id === sourceZoneId);
      const targetZone = dropZones.find(zone => zone.id === targetZoneId);
      
      if (!sourceZone || !targetZone || !sourceZone.droppedItem) return;

      const draggedItem = sourceZone.droppedItem.item;
      const isCorrect = draggedItem.matchId === targetZone.targetItem.id;

      setDropZones(prev => prev.map(zone => {
        if (zone.id === sourceZoneId) {
          return { ...zone, droppedItem: null };
        }
        if (zone.id === targetZoneId) {
          // If there's already an item in target zone, move it back to unplaced
          if (zone.droppedItem) {
            setUnplacedItems(current => [...current, zone.droppedItem!.item]);
          }
          return { ...zone, droppedItem: { item: draggedItem, isCorrect }};
        }
        return zone;
      }));
    }
  }, [unplacedItems, dropZones]);

  const checkAnswers = () => {
    setAttempts(prev => prev + 1);
    
    const totalPairs = dropZones.length;
    const correctMatches = dropZones.filter(zone => 
      zone.droppedItem && zone.droppedItem.isCorrect
    ).length;
    
    const newScore = totalPairs > 0 ? Math.round((correctMatches / totalPairs) * 100) : 0;
    setScore(newScore);
    
    const placedItems = dropZones.filter(zone => zone.droppedItem).length;
    
    if (newScore === 100 && placedItems === totalPairs) {
      setFeedbackMessage(`🎉 Perfect! You correctly matched all ${totalPairs} pairs! Excellent work!`);
      setIsComplete(true);
      onComplete?.(newScore);
    } else if (placedItems === totalPairs) {
      setFeedbackMessage(`You matched all items but got ${correctMatches} out of ${totalPairs} correct (${newScore}%). Look at the red highlighted items and try moving them to the right matches!`);
    } else {
      setFeedbackMessage(`Keep going! You've placed ${placedItems} out of ${totalPairs} items. ${correctMatches} are correctly matched so far!`);
    }
    
    setShowFeedback(true);
  };

  const resetExercise = () => {
    // Move all dropped items back to unplaced
    const allItems: MatchingItem[] = [...unplacedItems];
    dropZones.forEach(zone => {
      if (zone.droppedItem) {
        allItems.push(zone.droppedItem.item);
      }
    });

    // Shuffle again if requested using Fisher-Yates algorithm
    const shuffleArray = <T,>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    const shuffledItems = shuffleItems 
      ? shuffleArray(allItems)
      : allItems;

    setUnplacedItems(shuffledItems);
    setDropZones(prev => prev.map(zone => ({ ...zone, droppedItem: null })));
    setAttempts(0);
    setScore(0);
    setShowFeedback(false);
    setIsComplete(false);
  };

  const toggleHints = () => {
    setHintsEnabled(prev => !prev);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl flex items-center justify-center gap-2">
            <Target className="w-8 h-8 text-purple-600" />
            {title}
          </CardTitle>
          <CardDescription className="text-lg">
            {description}
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
        <Card className="border-purple-200 bg-purple-50">
          <CardHeader>
            <CardTitle className="text-xl text-purple-800 flex items-center gap-2">
              <HelpCircle className="w-5 h-5" />
              How to Play
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Objective */}
            <div>
              <h4 className="font-semibold text-purple-800 mb-2">🎯 Objective</h4>
              <p className="text-purple-700">
                Match each item from the left column with its correct pair in the right column. 
                Drag items to their matching drop zones to learn the relationships between concepts.
              </p>
            </div>

            {/* How to Play */}
            <div>
              <h4 className="font-semibold text-purple-800 mb-3">🎮 How to Play</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-lg border border-purple-200">
                  <h5 className="font-medium text-purple-800 mb-2">1. Drag & Drop</h5>
                  <p className="text-sm text-purple-700">
                    Drag each item from the "{leftColumnTitle}" column to its correct match 
                    in the "{rightColumnTitle}" column.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-purple-200">
                  <h5 className="font-medium text-purple-800 mb-2">2. Visual Feedback</h5>
                  <p className="text-sm text-purple-700">
                    Correct matches turn green with a checkmark. 
                    Incorrect matches turn red - you can move them to try again.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-purple-200">
                  <h5 className="font-medium text-purple-800 mb-2">3. Use Hints</h5>
                  <p className="text-sm text-purple-700">
                    Click "Show Hints" to see additional context that helps you 
                    understand the relationships between items.
                  </p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-purple-200">
                  <h5 className="font-medium text-purple-800 mb-2">4. Check Progress</h5>
                  <p className="text-sm text-purple-700">
                    Click "Check Answers" to see your score. 
                    Try to get 100% by matching all pairs correctly!
                  </p>
                </div>
              </div>
            </div>

            {/* Success Tips */}
            <div>
              <h4 className="font-semibold text-purple-800 mb-2">💡 Success Tips</h4>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• <strong>Read carefully:</strong> Pay attention to key words and details in each item</li>
                <li>• <strong>Use the hints:</strong> They provide valuable context and explanations</li>
                <li>• <strong>Think about relationships:</strong> What connects these concepts logically?</li>
                <li>• <strong>Don't rush:</strong> Take time to consider each match thoughtfully</li>
                <li>• <strong>Learn from mistakes:</strong> Red items show you what to review and try again</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Game Complete Message */}
      {isComplete && (
        <Card className="border-2 border-green-500 bg-green-50">
          <CardContent className="p-6 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-green-800">Excellent Work!</h3>
            </div>
            <p className="text-lg text-green-700">
              You successfully matched all {dropZones.length} pairs correctly! 
              You've mastered the relationships between these concepts.
            </p>
          </CardContent>
        </Card>
      )}

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column - Draggable Items */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📚 {leftColumnTitle}
              </CardTitle>
              <CardDescription>
                Drag these items to their correct matches →
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Droppable droppableId="unplaced-items">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={`min-h-[200px] p-4 border-2 border-dashed rounded-lg transition-colors ${
                      snapshot.isDraggingOver 
                        ? 'border-purple-400 bg-purple-50' 
                        : 'border-gray-300 bg-gray-50'
                    }`}
                  >
                    <div className="space-y-3">
                      {unplacedItems.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                          {(provided, snapshot) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={`bg-white border-2 border-purple-200 rounded-lg p-4 cursor-grab shadow-sm transition-all hover:shadow-md hover:-translate-y-1 ${
                                snapshot.isDragging ? 'rotate-2 shadow-lg border-purple-400' : ''
                              }`}
                            >
                              <div className="font-semibold text-gray-800 mb-1">{item.content}</div>
                              {item.description && (
                                <div className="text-sm text-gray-600 mb-2">{item.description}</div>
                              )}
                              {hintsEnabled && item.hint && (
                                <div className="text-xs text-purple-600 bg-purple-50 p-2 rounded border">
                                  💡 {item.hint}
                                </div>
                              )}
                              {item.category && (
                                <Badge variant="outline" className="text-xs mt-2">
                                  {item.category}
                                </Badge>
                              )}
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                    {unplacedItems.length === 0 && (
                      <div className="text-center text-gray-500 py-8">
                        🎉 All items have been placed!
                      </div>
                    )}
                  </div>
                )}
              </Droppable>
            </CardContent>
          </Card>

          {/* Right Column - Drop Zones */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎯 {rightColumnTitle}
              </CardTitle>
              <CardDescription>
                Drop items here to match them with their pairs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {dropZones.map((zone) => (
                  <div key={zone.id} className="space-y-2">
                    {/* Target Item Display */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <div className="font-semibold text-blue-800 mb-1">{zone.targetItem.content}</div>
                      {zone.targetItem.description && (
                        <div className="text-sm text-blue-600">{zone.targetItem.description}</div>
                      )}
                      {hintsEnabled && zone.targetItem.hint && (
                        <div className="text-xs text-blue-600 mt-2">
                          💡 {zone.targetItem.hint}
                        </div>
                      )}
                    </div>

                    {/* Drop Zone */}
                    <Droppable droppableId={zone.id}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          className={`min-h-[80px] p-3 border-2 border-dashed rounded-lg transition-colors ${
                            snapshot.isDraggingOver
                              ? 'border-blue-400 bg-blue-50'
                              : 'border-gray-300 bg-gray-50'
                          }`}
                        >
                          {zone.droppedItem ? (
                            <Draggable 
                              key={zone.droppedItem.item.id} 
                              draggableId={zone.droppedItem.item.id} 
                              index={0}
                            >
                              {(provided, snapshot) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className={`p-3 rounded cursor-grab transition-all ${
                                    snapshot.isDragging 
                                      ? 'shadow-lg rotate-2' 
                                      : ''
                                  } ${
                                    zone.droppedItem!.isCorrect 
                                      ? 'bg-green-500 text-white' 
                                      : 'bg-red-500 text-white'
                                  }`}
                                >
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <div className="font-semibold text-sm">{zone.droppedItem?.item.content}</div>
                                      {zone.droppedItem?.item.description && (
                                        <div className="text-xs opacity-90 mt-1">{zone.droppedItem.item.description}</div>
                                      )}
                                    </div>
                                    {zone.droppedItem?.isCorrect ? (
                                      <CheckCircle className="w-4 h-4" />
                                    ) : (
                                      <XCircle className="w-4 h-4" />
                                    )}
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ) : (
                            <div className="text-gray-400 text-sm py-4 text-center">
                              Drop matching item here
                            </div>
                          )}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </DragDropContext>

      {/* Controls */}
      <div className="flex justify-center gap-4">
        <Button
          onClick={checkAnswers}
          className="bg-purple-600 hover:bg-purple-700"
          size="lg"
        >
          <CheckCircle className="w-4 h-4 mr-2" />
          Check Answers
        </Button>
        <Button
          onClick={resetExercise}
          variant="outline"
          size="lg"
        >
          <RotateCcw className="w-4 h-4 mr-2" />
          Reset Exercise
        </Button>
        <Button
          onClick={toggleHints}
          variant="outline"
          size="lg"
          className={hintsEnabled ? 'bg-yellow-50 border-yellow-300' : ''}
        >
          <Lightbulb className="w-4 h-4 mr-2" />
          {hintsEnabled ? 'Hide' : 'Show'} Hints
        </Button>
      </div>

      {/* Feedback */}
      {showFeedback && (
        <div className={`p-4 rounded-lg text-center font-semibold ${
          score === 100 
            ? 'bg-green-100 border border-green-400 text-green-800'
            : 'bg-blue-100 border border-blue-400 text-blue-800'
        }`}>
          {feedbackMessage}
        </div>
      )}
    </div>
  );
}