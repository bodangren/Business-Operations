'use client';

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BilingualBusinessTerm, 
  businessTerms, 
  getTermsByUnit, 
  getTermsByCategory,
  getTermsByDifficulty,
  searchTerms 
} from '@/data/businessTerms';
import { Search, Volume2, BookOpen, Globe, Filter } from 'lucide-react';

interface BilingualVocabularyGlossaryProps {
  unit?: string;
  category?: string;
  difficulty?: 'basic' | 'intermediate' | 'advanced';
  showSearch?: boolean;
  showFilters?: boolean;
  defaultLanguage?: 'english' | 'chinese';
  className?: string;
}

export default function BilingualVocabularyGlossary({
  unit,
  category,
  difficulty,
  showSearch = true,
  showFilters = true,
  defaultLanguage = 'english',
  className = ''
}: BilingualVocabularyGlossaryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(category || 'all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>(difficulty || 'all');
  const [currentLanguage, setCurrentLanguage] = useState<'english' | 'chinese'>(defaultLanguage);
  const [showDefinitions, setShowDefinitions] = useState(true);
  const [showExamples, setShowExamples] = useState(false);
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    let terms = businessTerms;

    // Filter by unit if specified
    if (unit) {
      terms = getTermsByUnit(unit);
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      terms = terms.filter(term => term.category === selectedCategory);
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'all') {
      terms = terms.filter(term => term.difficulty === selectedDifficulty);
    }

    // Apply search
    if (searchQuery.trim()) {
      terms = searchTerms(searchQuery, currentLanguage);
    }

    return terms.sort((a, b) => {
      if (currentLanguage === 'chinese') {
        return a.chinese.localeCompare(b.chinese, 'zh-CN');
      }
      return a.english.localeCompare(b.english);
    });
  }, [unit, selectedCategory, selectedDifficulty, searchQuery, currentLanguage]);

  const categories = useMemo(() => {
    const cats = [...new Set(businessTerms.map(term => term.category))];
    return cats.sort();
  }, []);

  const difficulties = ['basic', 'intermediate', 'advanced'];
  
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'basic': return 'bg-green-100 text-green-800 border-green-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryColor = (cat: string) => {
    const colors = {
      accounting: 'bg-blue-100 text-blue-800 border-blue-200',
      excel: 'bg-green-100 text-green-800 border-green-200',
      'financial-reports': 'bg-purple-100 text-purple-800 border-purple-200',
      statistics: 'bg-orange-100 text-orange-800 border-orange-200',
      payroll: 'bg-pink-100 text-pink-800 border-pink-200',
      finance: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'cost-analysis': 'bg-red-100 text-red-800 border-red-200',
      assets: 'bg-teal-100 text-teal-800 border-teal-200',
      inventory: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      'financial-modeling': 'bg-violet-100 text-violet-800 border-violet-200'
    };
    return colors[cat as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const playPronunciation = (term: BilingualBusinessTerm) => {
    if ('speechSynthesis' in window) {
      setPlayingAudio(term.id);
      const utterance = new SpeechSynthesisUtterance(term.english);
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      utterance.onend = () => setPlayingAudio(null);
      utterance.onerror = () => setPlayingAudio(null);
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header Controls */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            <h2 className="text-2xl font-bold">
              {currentLanguage === 'english' ? 'Business Vocabulary' : '商业词汇'}
            </h2>
          </div>
          
          {/* Language Toggle */}
          <div className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            <Button
              variant={currentLanguage === 'english' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrentLanguage('english')}
            >
              English
            </Button>
            <Button
              variant={currentLanguage === 'chinese' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrentLanguage('chinese')}
            >
              中文
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder={
                currentLanguage === 'english' 
                  ? 'Search terms in English, Chinese, or pinyin...' 
                  : '搜索英文、中文或拼音术语...'
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        )}

        {/* Filters */}
        {showFilters && (
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">
                {currentLanguage === 'english' ? 'Filters:' : '筛选：'}
              </span>
            </div>
            
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-1 border rounded-md text-sm"
            >
              <option value="all">
                {currentLanguage === 'english' ? 'All Categories' : '所有类别'}
              </option>
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </option>
              ))}
            </select>

            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-1 border rounded-md text-sm"
            >
              <option value="all">
                {currentLanguage === 'english' ? 'All Levels' : '所有级别'}
              </option>
              {difficulties.map(diff => (
                <option key={diff} value={diff}>
                  {diff.charAt(0).toUpperCase() + diff.slice(1)}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* View Options */}
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={showDefinitions ? 'default' : 'outline'}
            size="sm"
            onClick={() => setShowDefinitions(!showDefinitions)}
          >
            {currentLanguage === 'english' ? 'Definitions' : '定义'}
          </Button>
          <Button
            variant={showExamples ? 'default' : 'outline'}
            size="sm"
            onClick={() => setShowExamples(!showExamples)}
          >
            {currentLanguage === 'english' ? 'Examples' : '例子'}
          </Button>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600">
        {currentLanguage === 'english' 
          ? `${filteredTerms.length} terms found`
          : `找到 ${filteredTerms.length} 个术语`
        }
      </div>

      {/* Terms Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredTerms.map((term) => (
          <Card key={term.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-1">
                    {currentLanguage === 'english' ? term.english : term.chinese}
                  </CardTitle>
                  {currentLanguage === 'english' && (
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">{term.chinese}</span>
                      <span className="ml-2 text-blue-600">({term.pinyin})</span>
                    </div>
                  )}
                  {currentLanguage === 'chinese' && (
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="font-medium">{term.english}</span>
                      <span className="ml-2 text-blue-600">({term.pinyin})</span>
                    </div>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => playPronunciation(term)}
                  disabled={playingAudio === term.id}
                  className="ml-2"
                >
                  <Volume2 className={`h-4 w-4 ${playingAudio === term.id ? 'animate-pulse' : ''}`} />
                </Button>
              </div>
              
              <div className="flex gap-2 flex-wrap">
                <Badge className={getDifficultyColor(term.difficulty)}>
                  {term.difficulty}
                </Badge>
                <Badge className={getCategoryColor(term.category)}>
                  {term.category.replace('-', ' ')}
                </Badge>
                {term.excelFunction && (
                  <Badge variant="outline" className="font-mono text-xs">
                    {term.excelFunction}
                  </Badge>
                )}
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              {showDefinitions && (
                <div className="mb-3">
                  <p className="text-sm text-gray-700">
                    {currentLanguage === 'english' ? term.definition.english : term.definition.chinese}
                  </p>
                </div>
              )}

              {showExamples && (
                <div className="mb-3">
                  <p className="text-xs text-gray-600 mb-1 font-medium">
                    {currentLanguage === 'english' ? 'Example:' : '例子：'}
                  </p>
                  <p className="text-sm text-gray-700 italic">
                    {currentLanguage === 'english' ? term.example.english : term.example.chinese}
                  </p>
                </div>
              )}

              {term.culturalContext && (
                <div className="mt-3 p-2 bg-blue-50 rounded-md">
                  <p className="text-xs text-blue-800">
                    <strong>
                      {currentLanguage === 'english' ? 'Cultural Note:' : '文化注释：'}
                    </strong>
                    {' '}
                    {currentLanguage === 'english' 
                      ? term.culturalContext.english 
                      : term.culturalContext.chinese
                    }
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredTerms.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">
            {currentLanguage === 'english' 
              ? 'No terms found. Try adjusting your search or filters.'
              : '未找到术语。请尝试调整搜索或筛选条件。'
            }
          </p>
        </div>
      )}
    </div>
  );
}