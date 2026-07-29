"use client"

import { cn } from "@/lib/utils"

interface SaasMockupProps {
  className?: string
}

const sidebarItems = [
  { active: true },
  { active: false },
  { active: false },
  { active: false },
  { active: false },
]

const statCards = [
  { label: "Total Clientes", value: "12,847", trend: "+12%", color: "violet" },
  { label: "Puntos Activos", value: "2.4M", trend: "+8%", color: "emerald" },
  { label: "Beneficios", value: "1,203", trend: "+24%", color: "amber" },
  { label: "Retencion", value: "94.2%", trend: "+3%", color: "rose" },
]

const chartBars = [40, 65, 45, 80, 55, 90, 60, 75, 50, 85, 70, 95]

const tableRows = [
  { points: "45,200", status: "active" },
  { points: "32,100", status: "active" },
  { points: "28,900", status: "inactive" },
  { points: "12,400", status: "active" },
]

export default function SaasMockup({ className }: SaasMockupProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-[640px] h-[380px] rounded-[14px] border border-white/[0.08] bg-[#0a0a10] overflow-hidden shadow-2xl shadow-violet-500/10",
        className
      )}
    >
      <div className="flex h-full">
        {/* Sidebar */}
        <div className="w-[56px] shrink-0 bg-[#080812] border-r border-white/[0.05] flex flex-col items-center py-4 gap-5">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
            <div className="w-3 h-3 rounded-sm bg-white/80" />
          </div>
          {sidebarItems.map((item, i) => (
            <div
              key={i}
              className={cn(
                "flex flex-col items-center gap-1",
                item.active && "relative"
              )}
            >
              <div
                className={cn(
                  "w-5 h-5 rounded-md",
                  item.active
                    ? "bg-violet-500/15 border border-violet-500/25"
                    : "bg-white/[0.04]"
                )}
              />
              <div
                className={cn(
                  "h-0.5 rounded w-5",
                  item.active ? "bg-violet-400/60" : "bg-white/5"
                )}
              />
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top bar */}
          <div className="h-10 px-4 flex items-center justify-between border-b border-white/[0.04] shrink-0">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-20 rounded bg-violet-400/40" />
              <div className="h-1 w-12 rounded bg-white/10" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-violet-500/10 border border-violet-500/15" />
              <div className="w-5 h-5 rounded-full bg-white/[0.04]" />
              <div className="w-6 h-6 rounded-full bg-violet-500/15 border border-violet-500/20 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-violet-400/50" />
              </div>
            </div>
          </div>

          {/* Content area */}
          <div className="flex-1 flex">
            <div className="flex-1 p-4 overflow-hidden">
              {/* Title */}
              <div className="mb-3">
                <div className="h-2 w-24 rounded bg-violet-400/50" />
                <div className="h-1 w-32 rounded bg-white/5 mt-1" />
              </div>

              {/* Stat cards */}
              <div className="grid grid-cols-4 gap-2 mb-3">
                {statCards.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04]"
                  >
                    <div className="flex items-center gap-1">
                      <div
                        className={cn(
                          "w-1.5 h-1.5 rounded-full",
                          stat.color === "violet" && "bg-violet-400",
                          stat.color === "emerald" && "bg-emerald-400",
                          stat.color === "amber" && "bg-amber-400",
                          stat.color === "rose" && "bg-rose-400"
                        )}
                      />
                      <div className="h-0.5 w-12 rounded bg-white/10" />
                    </div>
                    <div
                      className={cn(
                        "h-2.5 w-14 rounded mt-1",
                        stat.color === "violet" && "bg-violet-400/60",
                        stat.color === "emerald" && "bg-emerald-400/50",
                        stat.color === "amber" && "bg-amber-400/50",
                        stat.color === "rose" && "bg-rose-400/50"
                      )}
                    />
                    <div className="h-1 w-8 rounded bg-white/5 mt-0.5" />
                  </div>
                ))}
              </div>

              {/* Chart + Table row */}
              <div className="flex gap-3">
                {/* Chart */}
                <div className="flex-1 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-1 w-16 rounded bg-white/10" />
                    <div className="flex gap-1">
                      <div className="h-1 w-8 rounded bg-violet-500/20" />
                      <div className="h-1 w-6 rounded bg-white/5" />
                    </div>
                  </div>
                  <div className="flex items-end gap-[3px] h-20">
                    {chartBars.map((h, i) => (
                      <div key={i} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full rounded-[2px] bg-gradient-to-t from-violet-500/40 via-violet-400/30 to-violet-400/15"
                          style={{ height: `${h * 0.22}px` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-1.5">
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((m) => (
                      <div key={m} className="h-0.5 w-2 rounded bg-white/5" />
                    ))}
                  </div>
                </div>

                {/* Table */}
                <div className="flex-1 p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <div className="h-1 w-14 rounded bg-white/10 mb-2" />
                  {tableRows.map((row, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 py-1 border-b border-white/[0.02] last:border-0"
                    >
                      <div className="w-4 h-4 rounded-full bg-violet-500/10 border border-violet-500/15 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-violet-400/30" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="h-1 w-14 rounded bg-white/12" />
                        <div className="h-0.5 w-8 rounded bg-white/4 mt-0.5" />
                      </div>
                      <div className="h-1 w-10 rounded bg-violet-400/30" />
                      <div
                        className={cn(
                          "h-1 w-8 rounded",
                          row.status === "active"
                            ? "bg-emerald-400/30"
                            : "bg-white/8"
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div className="w-[160px] shrink-0 border-l border-white/[0.04] p-3">
              <div className="h-1.5 w-16 rounded bg-violet-400/40 mb-3" />
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-2 rounded-lg bg-white/[0.02] border border-white/[0.04] mb-2"
                >
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-4 rounded bg-violet-500/10 border border-violet-500/15" />
                    <div className="flex-1">
                      <div className="h-1 w-12 rounded bg-white/12" />
                      <div className="h-0.5 w-16 rounded bg-white/4 mt-0.5" />
                    </div>
                  </div>
                  <div className="mt-1.5">
                    <div className="w-full h-1 rounded-full bg-white/[0.04]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-violet-500/40 to-violet-400/60"
                        style={{ width: `${100 - i * 20}%` }}
                      />
                    </div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <div className="h-1 w-6 rounded bg-violet-400/30" />
                    <div className="h-1 w-4 rounded bg-white/5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
