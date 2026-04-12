import Link from "next/link"

import { cn } from "@/lib/utils"

type BlogCardProps = {
  href: string
  eyebrow: string
  title: string
  subtitle: string
  className?: string
}

export function BlogCard({ href, eyebrow, title, subtitle, className }: BlogCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 text-left shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] sm:p-8",
        className,
      )}
    >
      <span className="mb-3 block text-[10px] font-bold uppercase tracking-wider text-[#d85b1d]">
        {eyebrow}
      </span>
      <h3 className="mb-3 text-[17px] font-bold leading-snug text-[#1a2b3c] transition-colors group-hover:text-[#d85b1d]">
        {title}
      </h3>
      <p className="mt-auto text-[15px] font-light leading-relaxed text-[#51677c]">
        {subtitle}
      </p>
    </Link>
  )
}
