"use client"

import { useEffect, useRef } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { toast } from "sonner"

import { isAllowedDemoPath, normalizeDemoPath } from "@/lib/demo"

function isAllowedPath(pathname: string) {
  const normalizedPath = normalizeDemoPath(pathname)

  if (isAllowedDemoPath(normalizedPath)) {
    return true
  }

  if (normalizedPath.startsWith("/api/") || normalizedPath.startsWith("/_next/")) {
    return true
  }

  if (normalizedPath === "/robots.txt" || normalizedPath === "/sitemap.xml") {
    return true
  }

  if (/\.[^/]+$/.test(normalizedPath)) {
    return true
  }

  return false
}

export function DemoGuard() {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const lastBlockedNotice = useRef<string | null>(null)

  useEffect(() => {
    const blockedPath = searchParams.get("blocked")
    const isDemoRedirect = searchParams.get("demo") === "1"

    if (!isDemoRedirect || !blockedPath) {
      return
    }

    const signature = `${pathname}:${blockedPath}`
    if (lastBlockedNotice.current === signature) {
      return
    }

    lastBlockedNotice.current = signature
    toast.warning("Demo activa", {
      description: `La ruta ${blockedPath} está bloqueada. Solo la home, el blog y la página de cocinas están disponibles.`,
    })
    router.replace(pathname, { scroll: false })
  }, [pathname, router, searchParams])

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) {
        return
      }

      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return
      }

      const target = event.target
      if (!(target instanceof Element)) {
        return
      }

      const anchor = target.closest("a[href]")
      if (!anchor) {
        return
      }

      if (anchor.hasAttribute("download") || anchor.getAttribute("target") === "_blank") {
        return
      }

      const rawHref = anchor.getAttribute("href")
      if (!rawHref) {
        return
      }

      if (
        rawHref.startsWith("mailto:") ||
        rawHref.startsWith("tel:") ||
        rawHref.startsWith("sms:") ||
        rawHref.startsWith("javascript:")
      ) {
        return
      }

      let targetUrl: URL
      try {
        targetUrl = new URL(rawHref, window.location.href)
      } catch {
        return
      }

      if (targetUrl.origin !== window.location.origin) {
        return
      }

      if (isAllowedPath(targetUrl.pathname)) {
        return
      }

      event.preventDefault()
      event.stopPropagation()
      toast.warning("Demo activa", {
        description: `La ruta ${targetUrl.pathname} está bloqueada. Solo la home, el blog y la página de cocinas están disponibles.`,
      })
    }

    document.addEventListener("click", handleClick, true)
    return () => document.removeEventListener("click", handleClick, true)
  }, [])

  return null
}
