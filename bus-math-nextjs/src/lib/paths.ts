export function withBasePath(path: string): string {
  const prefix = process.env.NODE_ENV === 'production' ? '/Business-Operations' : ''
  if (!path) return prefix
  return `${prefix}${path.startsWith('/') ? path : `/${path}`}`
}

