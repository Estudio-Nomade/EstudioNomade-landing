"use client"

import { cn } from "@/lib/utils"

interface AnastasiaMockupProps {
  className?: string
}

function PhoneListing() {
  return (
    <div className="relative w-[120px] h-[250px] rounded-[14px] border border-white/[0.08] bg-[#0a0a10] overflow-hidden shadow-2xl shadow-violet-500/10">
      <div className="absolute top-0 inset-x-0 h-3.5 flex items-center justify-center">
        <div className="w-8 h-1 rounded-full bg-white/10" />
      </div>
      <div className="absolute top-3.5 inset-x-0 h-4 flex items-center justify-between px-2.5">
        <span className="text-[5px] text-white/30 font-medium">9:41</span>
        <div className="flex gap-0.5">
          <div className="w-1.5 h-1.5 rounded-sm border border-white/20" />
        </div>
      </div>
      <div className="absolute top-8 inset-x-0 bottom-0 bg-[#0c0c18]">
        {/* Header */}
        <div className="px-2.5 pt-2 flex items-center justify-between">
          <div className="h-1.5 w-12 rounded bg-violet-400/40" />
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white/[0.04] border border-white/[0.05]" />
            <div className="w-3 h-3 rounded-full bg-white/[0.04] border border-white/[0.05]" />
          </div>
        </div>
        {/* Search bar */}
        <div className="mx-2.5 mt-1.5 h-4 rounded-md bg-white/[0.03] border border-white/[0.04] flex items-center px-1.5 gap-1">
          <div className="w-1.5 h-1.5 rounded-full border border-white/15" />
          <div className="h-0.5 w-10 rounded bg-white/8" />
        </div>
        {/* Categories */}
        <div className="flex gap-1 px-2.5 mt-1.5">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={cn(
                "h-3 rounded-md px-1.5 flex items-center",
                i === 1 ? "bg-violet-500/15 border border-violet-500/20" : "bg-white/[0.02]"
              )}
            >
              <div className={cn("h-0.5 w-6 rounded", i === 1 ? "bg-violet-400/60" : "bg-white/8")} />
            </div>
          ))}
        </div>
        {/* Product cards */}
        <div className="px-2.5 mt-1.5 flex flex-col gap-1.5">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex gap-2 p-1.5 rounded-lg bg-white/[0.02] border border-white/[0.03]"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-violet-500/10 to-purple-600/10 border border-violet-500/10 shrink-0 flex items-center justify-center">
                <div className="w-4 h-5 rounded-sm bg-violet-400/15" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="h-1 w-14 rounded bg-white/12" />
                <div className="h-0.5 w-8 rounded bg-white/5 mt-0.5" />
                <div className="flex items-center gap-1 mt-1">
                  <div className="h-1 w-8 rounded bg-violet-400/30" />
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4].map((s) => (
                      <div
                        key={s}
                        className={cn(
                          "w-1 h-1 rounded-sm",
                          s <= 4 ? "bg-amber-400/40" : "bg-white/5"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TabletDetail() {
  return (
    <div className="relative w-[160px] h-[240px] rounded-[14px] border border-white/[0.08] bg-[#0a0a10] overflow-hidden shadow-2xl shadow-violet-500/10">
      <div className="absolute top-0 inset-x-0 h-5 flex items-center justify-between px-3">
        <span className="text-[7px] text-white/30 font-medium">Producto</span>
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-white/[0.04] border border-white/[0.05]" />
          <div className="w-2 h-2 rounded-full bg-white/[0.04] border border-white/[0.05]" />
        </div>
      </div>
      <div className="absolute top-5 inset-x-0 bottom-0 bg-[#0c0c18]">
        {/* Image placeholder */}
        <div className="h-32 mx-3 mt-2 rounded-xl bg-gradient-to-br from-violet-500/[0.08] via-purple-600/[0.06] to-fuchsia-600/[0.04] border border-white/[0.04] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 40%, rgba(139,92,246,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(124,58,237,0.2) 0%, transparent 50%)",
            }}
          />
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="w-8 h-10 rounded-md bg-violet-400/10 border border-violet-400/20" />
            <div className="h-1 w-12 rounded bg-white/8" />
          </div>
        </div>
        {/* Product info */}
        <div className="px-3 mt-2">
          <div className="h-1.5 w-20 rounded bg-violet-400/40" />
          <div className="h-1 w-28 rounded bg-white/8 mt-1" />
          <div className="flex items-center gap-1.5 mt-1">
            <div className="h-1.5 w-10 rounded bg-violet-400/30" />
            <div className="h-1 w-8 rounded bg-white/5" />
          </div>
        </div>
        {/* Size selector */}
        <div className="px-3 mt-2">
          <div className="h-0.5 w-6 rounded bg-white/8 mb-1" />
          <div className="flex gap-1">
            {["S", "M", "L", "XL"].map((size, i) => (
              <div
                key={size}
                className={cn(
                  "w-7 h-5 rounded-md flex items-center justify-center",
                  i === 1
                    ? "bg-violet-500/15 border border-violet-500/25"
                    : "bg-white/[0.02] border border-white/[0.04]"
                )}
              >
                <div
                  className={cn(
                    "h-0.5 w-2 rounded",
                    i === 1 ? "bg-violet-400/60" : "bg-white/8"
                  )}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Add to cart */}
        <div className="px-3 mt-2">
          <div className="h-6 w-full rounded-lg bg-violet-500/20 border border-violet-500/20 flex items-center justify-center">
            <div className="h-1 w-16 rounded bg-violet-400/50" />
          </div>
        </div>
      </div>
    </div>
  )
}

function DesktopCatalog() {
  return (
    <div className="relative w-[240px] h-[180px] rounded-[10px] border border-white/[0.08] bg-[#0a0a10] overflow-hidden shadow-2xl shadow-violet-500/10">
      <div className="flex h-full">
        {/* Filters sidebar */}
        <div className="w-[56px] shrink-0 bg-[#080812] border-r border-white/[0.04] p-2 flex flex-col gap-2">
          <div className="h-1 w-8 rounded bg-violet-400/40" />
          {[1, 2, 3].map((i) => (
            <div key={i} className="space-y-1">
              <div className="h-0.5 w-10 rounded bg-white/10" />
              <div className="flex flex-col gap-0.5 pl-1.5">
                {[1, 2].map((j) => (
                  <div key={j} className="flex items-center gap-1">
                    <div className={cn("w-1.5 h-1.5 rounded-sm", j === 1 ? "bg-violet-400/40" : "bg-white/[0.04] border border-white/[0.05]")} />
                    <div className="h-0.5 w-6 rounded bg-white/6" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Product grid */}
        <div className="flex-1 p-2.5">
          <div className="flex items-center justify-between mb-2">
            <div className="h-1.5 w-14 rounded bg-violet-400/40" />
            <div className="flex gap-1">
              <div className="w-3 h-3 rounded bg-white/[0.03] border border-white/[0.04]" />
              <div className="w-3 h-3 rounded bg-white/[0.03] border border-white/[0.04]" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="rounded-md bg-white/[0.02] border border-white/[0.03] overflow-hidden"
              >
                <div className="h-12 bg-gradient-to-br from-violet-500/[0.06] to-purple-600/[0.04] flex items-center justify-center border-b border-white/[0.02]">
                  <div className="w-4 h-5 rounded-sm bg-violet-400/10" />
                </div>
                <div className="p-1">
                  <div className="h-0.5 w-10 rounded bg-white/10" />
                  <div className="flex items-center justify-between mt-0.5">
                    <div className="h-0.5 w-6 rounded bg-violet-400/30" />
                    <div className="flex gap-0.5">
                      {[1, 2, 3].map((s) => (
                        <div key={s} className="w-1 h-1 rounded-sm bg-amber-400/30" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AnastasiaMockup({ className }: AnastasiaMockupProps) {
  return (
    <div className={cn("relative flex items-center justify-center gap-2", className)}>
      <DesktopCatalog />
      <TabletDetail />
      <PhoneListing />
    </div>
  )
}
