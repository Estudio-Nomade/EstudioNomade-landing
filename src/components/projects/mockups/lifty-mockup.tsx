"use client"

import { cn } from "@/lib/utils"

interface LiftyMockupProps {
  className?: string
}

function PhoneMockup() {
  return (
    <div className="relative w-[140px] h-[280px] rounded-[16px] border border-white/[0.08] bg-[#0a0a10] overflow-hidden shadow-2xl shadow-violet-500/10">
      <div className="absolute top-0 inset-x-0 h-4 flex items-center justify-center">
        <div className="w-10 h-1 rounded-full bg-white/10" />
      </div>
      <div className="absolute top-4 inset-x-0 h-5 flex items-center justify-between px-3">
        <span className="text-[6px] text-white/30 font-medium">9:41</span>
        <div className="flex gap-0.5">
          <div className="w-2 h-2 rounded-sm border border-white/20" />
        </div>
      </div>
      <div className="absolute top-10 inset-x-0 bottom-0">
        <div className="relative h-full bg-[#0d0d18]">
          {/* Map area */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d18] via-[#0d0d20] to-[#0a0a15]">
            {/* Grid lines */}
            <div className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            {/* Route line */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 140 200">
              <path
                d="M30,160 Q50,140 60,100 Q70,60 80,80 Q90,100 100,50 Q110,20 120,40"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="1.5"
                strokeDasharray="4,3"
                opacity="0.7"
              />
              <path
                d="M30,160 Q50,140 60,100 Q70,60 80,80 Q90,100 100,50 Q110,20 120,40"
                fill="none"
                stroke="#a78bfa"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.3"
              />
            </svg>
            {/* Pickup marker */}
            <div className="absolute left-[26px] top-[152px]">
              <div className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-400 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-violet-400" />
              </div>
            </div>
            {/* Dropoff marker */}
            <div className="absolute left-[116px] top-[32px]">
              <div className="w-5 h-5 rounded-full bg-violet-500/20 border border-violet-400 flex items-center justify-center">
                <div className="w-[6px] h-[6px] rounded-sm bg-violet-400 rotate-45" />
              </div>
            </div>
            {/* Small dots on route */}
            <div className="absolute left-[58px] top-[96px] w-[3px] h-[3px] rounded-full bg-violet-400/60" />
            <div className="absolute left-[78px] top-[72px] w-[3px] h-[3px] rounded-full bg-violet-400/60" />
          </div>
          {/* Bottom sheet */}
          <div className="absolute bottom-0 inset-x-0 h-[80px] bg-[#0f0f1e]/95 backdrop-blur-sm border-t border-white/[0.06] rounded-t-xl">
            <div className="flex items-center gap-2 px-2.5 pt-2">
              <div className="w-5 h-5 rounded-full bg-violet-500/20 flex items-center justify-center shrink-0">
                <div className="w-1.5 h-1.5 rounded-sm bg-violet-400 rotate-45" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="h-1.5 w-12 rounded bg-white/10" />
                <div className="h-1 w-20 rounded bg-white/5 mt-1" />
              </div>
              <div className="text-right shrink-0">
                <div className="h-1.5 w-8 rounded bg-violet-400/40 ml-auto" />
                <div className="h-1 w-6 rounded bg-white/5 mt-1 ml-auto" />
              </div>
            </div>
            <div className="flex gap-1.5 px-2.5 mt-2">
              <div className="flex-1 h-6 rounded-md bg-violet-500/20 border border-violet-500/20 flex items-center justify-center">
                <div className="h-1 w-8 rounded bg-violet-400/50" />
              </div>
              <div className="flex-1 h-6 rounded-md bg-white/[0.03] border border-white/[0.05] flex items-center justify-center">
                <div className="h-1 w-8 rounded bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TabletMockup() {
  return (
    <div className="relative w-[200px] h-[270px] rounded-[18px] border border-white/[0.08] bg-[#0a0a10] overflow-hidden shadow-2xl shadow-violet-500/10">
      <div className="absolute top-0 inset-x-0 h-6 flex items-center justify-between px-3">
        <span className="text-[8px] text-white/30 font-medium">Dashboard</span>
        <div className="w-1.5 h-1.5 rounded-full bg-violet-400/60" />
      </div>
      <div className="absolute top-6 inset-x-0 bottom-0 bg-[#0c0c1a]">
        {/* Header */}
        <div className="px-3 pt-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-1.5 w-16 rounded bg-white/15" />
              <div className="h-2 w-10 rounded bg-violet-400/50 mt-1" />
            </div>
            <div className="w-7 h-7 rounded-full bg-violet-500/15 border border-violet-500/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-violet-400/40" />
            </div>
          </div>
        </div>
        {/* Earnings card */}
        <div className="mx-3 mt-2 p-2 rounded-lg bg-violet-500/[0.06] border border-violet-500/10">
          <div className="h-1 w-16 rounded bg-white/10" />
          <div className="h-2.5 w-12 rounded bg-violet-400/60 mt-1" />
          <div className="flex gap-3 mt-1.5">
            {[30, 60, 40, 80, 50, 70, 45].map((h, i) => (
              <div key={i} className="flex-1 flex items-end">
                <div
                  className="w-full rounded-[2px] bg-gradient-to-t from-violet-500/40 to-violet-400/20"
                  style={{ height: `${h * 0.18}px` }}
                />
              </div>
            ))}
          </div>
        </div>
        {/* Trip list */}
        <div className="px-3 mt-2.5">
          <div className="h-1 w-10 rounded bg-white/10 mb-2" />
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center gap-2 py-1.5 border-b border-white/[0.03] last:border-0"
            >
              <div className="w-5 h-5 rounded-full bg-white/[0.04] border border-white/[0.05] flex items-center justify-center shrink-0">
                <div className="w-1.5 h-1.5 rounded-sm bg-violet-400/60 rotate-45" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="h-1 w-14 rounded bg-white/15" />
                <div className="h-0.5 w-20 rounded bg-white/5 mt-0.5" />
              </div>
              <div className="h-1 w-8 rounded bg-violet-400/30" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DesktopMockup() {
  return (
    <div className="relative w-[280px] h-[190px] rounded-[12px] border border-white/[0.08] bg-[#0a0a10] overflow-hidden shadow-2xl shadow-violet-500/10">
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-[60px] bg-[#080812] border-r border-white/[0.05] flex flex-col items-center py-3 gap-4">
          <div className="w-5 h-5 rounded bg-violet-500/30" />
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className={cn(
                "w-4 h-4 rounded",
                i === 2
                  ? "bg-violet-500/20 border border-violet-500/30"
                  : "bg-white/[0.05]"
              )}
            />
          ))}
        </div>
        {/* Main */}
        <div className="flex-1 p-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="h-1.5 w-14 rounded bg-violet-400/40" />
              <div className="h-1 w-10 rounded bg-white/10 mt-0.5" />
            </div>
            <div className="flex gap-1">
              <div className="w-4 h-4 rounded bg-white/[0.04] border border-white/[0.06]" />
              <div className="w-4 h-4 rounded bg-white/[0.04] border border-white/[0.06]" />
            </div>
          </div>
          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-1.5 mt-2">
            {[
              { label: "Viajes", value: "847", color: "violet" },
              { label: "Activos", value: "32", color: "emerald" },
              { label: "Ingresos", value: "$12k", color: "amber" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-1.5 rounded-md bg-white/[0.02] border border-white/[0.04]"
              >
                <div className="h-0.5 w-8 rounded bg-white/5" />
                <div
                  className={cn(
                    "h-2 w-10 rounded mt-0.5",
                    stat.color === "violet"
                      ? "bg-violet-400/50"
                      : stat.color === "emerald"
                        ? "bg-emerald-400/40"
                        : "bg-amber-400/40"
                  )}
                />
              </div>
            ))}
          </div>
          {/* Table */}
          <div className="mt-2">
            <div className="grid grid-cols-3 gap-1.5 mb-1">
              {[8, 12, 10].map((w, i) => (
                <div key={i} className="h-0.5 rounded bg-white/5" style={{ width: `${w}px` }} />
              ))}
            </div>
            {[1, 2].map((i) => (
              <div
                key={i}
                className="grid grid-cols-3 gap-1.5 py-1 border-b border-white/[0.02]"
              >
                <div className="h-1 rounded bg-white/10" />
                <div className="h-1 rounded bg-white/5" />
                <div
                  className={cn(
                    "h-1 rounded w-8",
                    i === 1 ? "bg-emerald-400/30" : "bg-amber-400/30"
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LiftyMockup({ className }: LiftyMockupProps) {
  return (
    <div className={cn("relative flex items-center justify-center gap-2", className)}>
      <PhoneMockup />
      <TabletMockup />
      <DesktopMockup />
    </div>
  )
}
