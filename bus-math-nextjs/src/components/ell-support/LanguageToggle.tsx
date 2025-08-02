'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Languages } from 'lucide-react';

type Language = 'english' | 'chinese';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (english: string, chinese: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
  defaultLanguage?: Language;
}

export function LanguageProvider({ children, defaultLanguage = 'english' }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(defaultLanguage);

  // Load language preference from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('preferred-language');
    if (saved === 'english' || saved === 'chinese') {
      setCurrentLanguage(saved);
    }
  }, []);

  // Save language preference to localStorage
  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('preferred-language', language);
  };

  // Translation helper function
  const t = (english: string, chinese: string) => {
    return currentLanguage === 'english' ? english : chinese;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

interface LanguageToggleProps {
  variant?: 'default' | 'compact' | 'icon';
  showLabels?: boolean;
  className?: string;
}

export default function LanguageToggle({ 
  variant = 'default', 
  showLabels = true,
  className = '' 
}: LanguageToggleProps) {
  const { currentLanguage, setLanguage, t } = useLanguage();

  if (variant === 'icon') {
    return (
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setLanguage(currentLanguage === 'english' ? 'chinese' : 'english')}
        className={`${className}`}
        title={t('Switch to Chinese', '切换到英文')}
      >
        <Languages className="h-4 w-4" />
      </Button>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-1 ${className}`}>
        <Globe className="h-3 w-3 text-gray-500" />
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage(currentLanguage === 'english' ? 'chinese' : 'english')}
          className="h-7 px-2 text-xs"
        >
          {currentLanguage === 'english' ? '中文' : 'EN'}
        </Button>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {showLabels && (
        <div className="flex items-center gap-1">
          <Globe className="h-4 w-4 text-gray-500" />
          <span className="text-sm text-gray-600">
            {t('Language:', '语言：')}
          </span>
        </div>
      )}
      <div className="flex border rounded-md">
        <Button
          variant={currentLanguage === 'english' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('english')}
          className="rounded-r-none border-r"
        >
          English
        </Button>
        <Button
          variant={currentLanguage === 'chinese' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('chinese')}
          className="rounded-l-none"
        >
          中文
        </Button>
      </div>
    </div>
  );
}

// Utility component for bilingual text
interface BilingualTextProps {
  english: string;
  chinese: string;
  className?: string;
}

export function BilingualText({ english, chinese, className = '' }: BilingualTextProps) {
  const { t } = useLanguage();
  return <span className={className}>{t(english, chinese)}</span>;
}

// Utility component for bilingual headings
interface BilingualHeadingProps {
  english: string;
  chinese: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

export function BilingualHeading({ 
  english, 
  chinese, 
  level = 2, 
  className = '' 
}: BilingualHeadingProps) {
  const { t } = useLanguage();
  const Component = `h${level}` as keyof JSX.IntrinsicElements;
  
  return React.createElement(
    Component,
    { className },
    t(english, chinese)
  );
}

// Common translations for the application
export const commonTranslations = {
  // Navigation
  home: { english: 'Home', chinese: '首页' },
  units: { english: 'Units', chinese: '单元' },
  exercises: { english: 'Exercises', chinese: '练习' },
  vocabulary: { english: 'Vocabulary', chinese: '词汇' },
  
  // Actions
  search: { english: 'Search', chinese: '搜索' },
  filter: { english: 'Filter', chinese: '筛选' },
  reset: { english: 'Reset', chinese: '重置' },
  save: { english: 'Save', chinese: '保存' },
  submit: { english: 'Submit', chinese: '提交' },
  cancel: { english: 'Cancel', chinese: '取消' },
  
  // Status
  loading: { english: 'Loading...', chinese: '加载中...' },
  error: { english: 'Error', chinese: '错误' },
  success: { english: 'Success', chinese: '成功' },
  complete: { english: 'Complete', chinese: '完成' },
  incomplete: { english: 'Incomplete', chinese: '未完成' },
  
  // Levels
  basic: { english: 'Basic', chinese: '基础' },
  intermediate: { english: 'Intermediate', chinese: '中级' },
  advanced: { english: 'Advanced', chinese: '高级' },
  
  // Categories
  accounting: { english: 'Accounting', chinese: '会计' },
  excel: { english: 'Excel', chinese: 'Excel' },
  finance: { english: 'Finance', chinese: '财务' },
  statistics: { english: 'Statistics', chinese: '统计' },
  
  // Instructions
  clickToPlay: { english: 'Click to play pronunciation', chinese: '点击播放发音' },
  example: { english: 'Example', chinese: '例子' },
  definition: { english: 'Definition', chinese: '定义' },
  culturalNote: { english: 'Cultural Note', chinese: '文化注释' },
  
  // Time
  minutes: { english: 'minutes', chinese: '分钟' },
  hours: { english: 'hours', chinese: '小时' },
  days: { english: 'days', chinese: '天' },
  
  // Numbers and measurements
  percent: { english: '%', chinese: '%' },
  dollar: { english: '$', chinese: '$' },
  
  // Educational terms
  objective: { english: 'Learning Objective', chinese: '学习目标' },
  assessment: { english: 'Assessment', chinese: '评估' },
  activity: { english: 'Activity', chinese: '活动' },
  practice: { english: 'Practice', chinese: '练习' },
  review: { english: 'Review', chinese: '复习' }
};