import { cn } from "@/lib/utils"

type BrandMarkProps = {
  className?: string
  compact?: boolean
  inverse?: boolean
}

export function BrandMark({ className, compact = false, inverse = false }: BrandMarkProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-[1rem] border border-[rgba(124,88,56,0.28)] bg-[#2f261f] text-[#f5ede3] shadow-[0_18px_45px_-26px_rgba(47,38,31,0.65)]"
      >
        <span className="absolute inset-[7px] rounded-[0.7rem] border border-[rgba(237,221,201,0.12)]" />
        <span className="absolute inset-y-[9px] left-1/2 w-px -translate-x-1/2 bg-[rgba(198,146,90,0.55)]" />
        <span className="absolute inset-x-[9px] top-1/2 h-px -translate-y-1/2 bg-[rgba(198,146,90,0.55)]" />
        <span className="relative text-[0.68rem] font-semibold uppercase tracking-[0.28em]">HM</span>
      </span>

      {!compact ? (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              "font-display text-[1.12rem] tracking-[-0.03em]",
              inverse ? "text-[rgba(248,241,232,0.94)]" : "text-foreground",
            )}
          >
            Hermanos Martinez
          </span>
          <span
            className={cn(
              "mt-1 text-[0.66rem] uppercase tracking-[0.28em]",
              inverse ? "text-[rgba(248,241,232,0.58)]" : "text-muted-foreground",
            )}
          >
            Oficio familiar desde 1999
          </span>
        </span>
      ) : null}
    </div>
  )
}
