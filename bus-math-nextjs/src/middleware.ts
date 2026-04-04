import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

/**
 * Check if a request path should be blocked as a debug route.
 * Debug routes are only accessible in development/test environments.
 */
export function isDebugRouteBlocked(
  pathname: string,
  nodeEnv: string | undefined,
): boolean {
  if (nodeEnv === "production") {
    return pathname === "/debug" || pathname.startsWith("/debug/")
  }
  return false
}

export function middleware(request: NextRequest) {
  if (isDebugRouteBlocked(request.nextUrl.pathname, process.env.NODE_ENV)) {
    return new NextResponse(null, { status: 404 })
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/debug", "/debug/:path*"],
}
