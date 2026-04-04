"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { 
  Globe, 
  Type, 
  Eye, 
  BookOpen,
  Palette
} from 'lucide-react'

interface AccessibilityToolbarProps {
  language: 'en' | 'zh'
  onLanguageChange: (language: 'en' | 'zh') => void
  fontSize: 'small' | 'medium' | 'large'
  onFontSizeChange: (size: 'small' | 'medium' | 'large') => void
  highContrast: boolean
  onHighContrastChange: (enabled: boolean) => void
  readingLevel: 'basic' | 'intermediate' | 'advanced'
  onReadingLevelChange: (level: 'basic' | 'intermediate' | 'advanced') => void
  showVocabulary: boolean
  onShowVocabularyChange: (show: boolean) => void
}

export function AccessibilityToolbar({
  language,
  onLanguageChange,
  fontSize,
  onFontSizeChange,
  highContrast,
  onHighContrastChange,
  readingLevel,
  onReadingLevelChange,
  showVocabulary,
  onShowVocabularyChange
}: AccessibilityToolbarProps) {
  return (
    <Card className={`fixed top-4 right-4 z-10 p-3 shadow-lg ${highContrast ? 'bg-gray-900 border-gray-700' : 'bg-white'}`}>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <Globe className={`h-4 w-4 ${highContrast ? 'text-white' : 'text-gray-600'}`} />
          <Button
            variant={language === 'en' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onLanguageChange('en')}
            className="text-xs"
          >
            EN
          </Button>
          <Button
            variant={language === 'zh' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onLanguageChange('zh')}
            className="text-xs"
          >
            中文
          </Button>
        </div>

        <div className="flex items-center gap-1 border-l pl-2">
          <Type className={`h-4 w-4 ${highContrast ? 'text-white' : 'text-gray-600'}`} />
          <Button
            variant={fontSize === 'small' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFontSizeChange('small')}
            className="text-xs"
          >
            A
          </Button>
          <Button
            variant={fontSize === 'medium' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFontSizeChange('medium')}
            className="text-sm"
          >
            A
          </Button>
          <Button
            variant={fontSize === 'large' ? 'default' : 'outline'}
            size="sm"
            onClick={() => onFontSizeChange('large')}
            className="text-base"
          >
            A
          </Button>
        </div>

        <div className="flex items-center gap-1 border-l pl-2">
          <Eye className={`h-4 w-4 ${highContrast ? 'text-white' : 'text-gray-600'}`} />
          <Button
            variant={highContrast ? 'default' : 'outline'}
            size="sm"
            onClick={() => onHighContrastChange(!highContrast)}
            className="text-xs"
          >
            <Palette className="h-3 w-3" />
          </Button>
        </div>

        <div className="flex items-center gap-1 border-l pl-2">
          <BookOpen className={`h-4 w-4 ${highContrast ? 'text-white' : 'text-gray-600'}`} />
          <select
            value={readingLevel}
            onChange={(e) => onReadingLevelChange(e.target.value as 'basic' | 'intermediate' | 'advanced')}
            className={`text-xs border rounded px-2 py-1 ${
              highContrast 
                ? 'bg-gray-800 border-gray-600 text-white' 
                : 'bg-white border-gray-300 text-gray-900'
            }`}
          >
            <option value="basic">{language === 'en' ? 'Basic' : '基础'}</option>
            <option value="intermediate">{language === 'en' ? 'Intermediate' : '中级'}</option>
            <option value="advanced">{language === 'en' ? 'Advanced' : '高级'}</option>
          </select>
        </div>

        <div className="flex items-center gap-1 border-l pl-2">
          <Button
            variant={showVocabulary ? 'default' : 'outline'}
            size="sm"
            onClick={() => onShowVocabularyChange(!showVocabulary)}
            className="text-xs"
          >
            📚
          </Button>
        </div>
      </div>
    </Card>
  )
}