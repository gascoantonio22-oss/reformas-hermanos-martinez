import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import { isAllowedDemoPath, normalizeDemoPath } from "@/lib/demo"

const kitchenPath = "/reformas-cocinas-madrid"

function isAllowedPath(pathname: string) {
  return isAllowedDemoPath(pathname)
}

export function proxy(request: NextRequest) {
  const pathname = normalizeDemoPath(request.nextUrl.pathname)

  if (isAllowedPath(pathname)) {
    return NextResponse.next()
  }

  const url = request.nextUrl.clone()
  url.pathname = kitchenPath
  url.searchParams.set("demo", "1")
  url.searchParams.set("blocked", pathname)

  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
}
