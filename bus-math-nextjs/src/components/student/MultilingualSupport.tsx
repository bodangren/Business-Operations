"use client"

import React from 'react'

interface MultilingualSupportProps {
  en: string
  zh: string
  language: 'en' | 'zh'
  className?: string
}

export function MultilingualSupport({ en, zh, language, className = '' }: MultilingualSupportProps) {
  return (
    <span className={className}>
      {language === 'en' ? en : zh}
    </span>
  )
}