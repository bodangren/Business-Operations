'use client'

import { useEffect } from 'react'

export default function ResourceBasePathFixer() {
  useEffect(() => {
    const prefix = process.env.NODE_ENV === 'production' ? '/Business-Operations' : ''
    const anchors = document.querySelectorAll<HTMLAnchorElement>('a[href^="/resources/"]')
    anchors.forEach((a) => {
      const original = a.getAttribute('href') || ''
      a.setAttribute('href', `${prefix}${original}`)
    })
  }, [])
  return null
}

