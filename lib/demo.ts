const allowedExactPaths = new Set(["/", "/reformas-cocinas-madrid", "/blog"])

export function normalizeDemoPath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.replace(/\/+$/, "")
  }

  return pathname
}

export function isAllowedDemoPath(pathname: string) {
  const normalizedPath = normalizeDemoPath(pathname)

  if (allowedExactPaths.has(normalizedPath)) {
    return true
  }

  return normalizedPath.startsWith("/blog/")
}
