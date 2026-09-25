"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  z: number
  r: number
  baseAlpha: number
  twinkleSpeed: number
  twinklePhase: number
  kind: "dot" | "spark"
}

interface SparkBurst {
  x: number
  y: number
  life: number
  maxLife: number
  size: number
  rotation: number
}

/**
 * Fondo cósmico fijo (estilo concepto EN):
 * estrellas + destellos 4 puntas + red sutil de partículas.
 * Vive en toda la web, detrás del contenido.
 */
export function StarfieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let w = 0
    let h = 0
    let dpr = 1
    let raf = 0
    let t = 0
    const stars: Star[] = []
    const bursts: SparkBurst[] = []
    const mouse = { x: -9999, y: -9999, active: false }
    let reduced = false

    const prefersReduced = () =>
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      w = window.innerWidth
      h = window.innerHeight
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      seed()
    }

    const seed = () => {
      stars.length = 0
      const area = w * h
      const count = Math.min(160, Math.max(70, Math.floor(area / 14000)))
      for (let i = 0; i < count; i++) {
        const isSpark = Math.random() < 0.12
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          z: Math.random(),
          r: isSpark ? 1.2 + Math.random() * 1.6 : 0.4 + Math.random() * 1.4,
          baseAlpha: 0.15 + Math.random() * 0.55,
          twinkleSpeed: 0.4 + Math.random() * 1.6,
          twinklePhase: Math.random() * Math.PI * 2,
          kind: isSpark ? "spark" : "dot",
        })
      }
    }

    const drawSpark = (
      x: number,
      y: number,
      size: number,
      alpha: number,
      rotation: number,
      color: string
    ) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.globalAlpha = alpha
      ctx.fillStyle = color
      ctx.beginPath()
      // 4-point star (diamante cruzado)
      const s = size
      const core = size * 0.22
      ctx.moveTo(0, -s)
      ctx.quadraticCurveTo(core, -core, s, 0)
      ctx.quadraticCurveTo(core, core, 0, s)
      ctx.quadraticCurveTo(-core, core, -s, 0)
      ctx.quadraticCurveTo(-core, -core, 0, -s)
      ctx.closePath()
      ctx.fill()
      // glow
      ctx.globalAlpha = alpha * 0.35
      ctx.beginPath()
      ctx.arc(0, 0, size * 0.55, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    const maybeBurst = () => {
      if (reduced) return
      if (Math.random() > 0.012) return
      bursts.push({
        x: Math.random() * w,
        y: Math.random() * h,
        life: 0,
        maxLife: 50 + Math.random() * 40,
        size: 4 + Math.random() * 10,
        rotation: Math.random() * Math.PI,
      })
      if (bursts.length > 12) bursts.shift()
    }

    const animate = () => {
      t += 0.016
      ctx.clearRect(0, 0, w, h)

      // soft nebula wash (concepto: violeta en negro)
      const g1 = ctx.createRadialGradient(
        w * 0.2,
        h * 0.15,
        0,
        w * 0.2,
        h * 0.15,
        Math.max(w, h) * 0.55
      )
      g1.addColorStop(0, "rgba(109, 40, 217, 0.07)")
      g1.addColorStop(0.45, "rgba(76, 29, 149, 0.03)")
      g1.addColorStop(1, "rgba(0,0,0,0)")
      ctx.fillStyle = g1
      ctx.fillRect(0, 0, w, h)

      const g2 = ctx.createRadialGradient(
        w * 0.85,
        h * 0.75,
        0,
        w * 0.85,
        h * 0.75,
        Math.max(w, h) * 0.5
      )
      g2.addColorStop(0, "rgba(124, 58, 237, 0.05)")
      g2.addColorStop(1, "rgba(0,0,0,0)")
      ctx.fillStyle = g2
      ctx.fillRect(0, 0, w, h)

      // mouse glow
      if (mouse.active) {
        const mg = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          220
        )
        mg.addColorStop(0, "rgba(167, 139, 250, 0.07)")
        mg.addColorStop(0.5, "rgba(139, 92, 246, 0.025)")
        mg.addColorStop(1, "rgba(0,0,0,0)")
        ctx.fillStyle = mg
        ctx.fillRect(0, 0, w, h)
      }

      for (const s of stars) {
        const tw =
          0.55 +
          0.45 *
            Math.sin(t * s.twinkleSpeed + s.twinklePhase) *
            (reduced ? 0.3 : 1)
        let alpha = s.baseAlpha * tw

        if (mouse.active) {
          const dx = mouse.x - s.x
          const dy = mouse.y - s.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 180) {
            alpha = Math.min(1, alpha + (1 - dist / 180) * 0.45)
            // slight drift away
            if (!reduced) {
              s.x -= (dx / dist) * 0.08
              s.y -= (dy / dist) * 0.08
            }
          }
        }

        // slow drift
        if (!reduced) {
          s.x += Math.sin(t * 0.15 + s.twinklePhase) * 0.04 * (0.4 + s.z)
          s.y += Math.cos(t * 0.12 + s.twinklePhase) * 0.03 * (0.4 + s.z)
          if (s.x < -4) s.x = w + 4
          if (s.x > w + 4) s.x = -4
          if (s.y < -4) s.y = h + 4
          if (s.y > h + 4) s.y = -4
        }

        if (s.kind === "spark") {
          drawSpark(
            s.x,
            s.y,
            s.r * 3.2,
            alpha * 0.85,
            t * 0.15 + s.twinklePhase,
            "rgba(226, 214, 255, 0.95)"
          )
        } else {
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
          // cooler near edges, violet-white core
          const cool = s.z > 0.7
          ctx.fillStyle = cool
            ? `rgba(196, 181, 253, ${alpha})`
            : `rgba(237, 233, 254, ${alpha})`
          ctx.fill()
        }
      }

      // connection threads near mouse (constellation vibe)
      if (mouse.active && !reduced) {
        const near: Star[] = []
        for (const s of stars) {
          const dx = s.x - mouse.x
          const dy = s.y - mouse.y
          if (dx * dx + dy * dy < 160 * 160) near.push(s)
        }
        for (let i = 0; i < near.length; i++) {
          for (let j = i + 1; j < near.length; j++) {
            const a = near[i]
            const b = near[j]
            const dx = a.x - b.x
            const dy = a.y - b.y
            const d = Math.sqrt(dx * dx + dy * dy)
            if (d < 120) {
              ctx.beginPath()
              ctx.moveTo(a.x, a.y)
              ctx.lineTo(b.x, b.y)
              ctx.strokeStyle = `rgba(167, 139, 250, ${(1 - d / 120) * 0.18})`
              ctx.lineWidth = 0.6
              ctx.stroke()
            }
          }
        }
      }

      maybeBurst()
      for (let i = bursts.length - 1; i >= 0; i--) {
        const b = bursts[i]
        b.life += 1
        const p = b.life / b.maxLife
        if (p >= 1) {
          bursts.splice(i, 1)
          continue
        }
        const fade = p < 0.2 ? p / 0.2 : 1 - (p - 0.2) / 0.8
        drawSpark(
          b.x,
          b.y,
          b.size * (0.6 + p * 0.8),
          fade * 0.9,
          b.rotation + p * 0.6,
          "rgba(255, 255, 255, 1)"
        )
        drawSpark(
          b.x,
          b.y,
          b.size * 0.45,
          fade * 0.7,
          b.rotation + Math.PI / 4 + p * 0.4,
          "rgba(196, 181, 253, 1)"
        )
      }

      raf = requestAnimationFrame(animate)
    }

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }
    const onLeave = () => {
      mouse.active = false
    }

    reduced = prefersReduced()
    resize()
    animate()

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", onMove, { passive: true })
    window.addEventListener("mouseleave", onLeave)
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const onMq = () => {
      reduced = mq.matches
    }
    mq.addEventListener?.("change", onMq)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseleave", onLeave)
      mq.removeEventListener?.("change", onMq)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  )
}
