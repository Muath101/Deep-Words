import { useRef, useEffect } from 'react'

/**
 * Futuristic animated audio waveform — canvas-based, 60fps.
 * Multiple wave layers with cyan→purple gradient glow.
 * Dynamic harmonics so it never looks like a static loop.
 */
export default function AnimatedWaveBackground({ className = '', height = 140 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId

    /* ── Resize handler ─────────────────────────────────────── */
    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width  = rect.width  * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    /* ── Wave definitions ───────────────────────────────────── */
    const waves = [
      // Back glow layers (wide, slow, large amplitude)
      { freq: 0.007, amp: 0.38, speed: 0.28, phase: 0.0,  width: 3.5, alpha: 0.18, color: '#7C3AED' },
      { freq: 0.009, amp: 0.32, speed: 0.35, phase: 2.4,  width: 3.0, alpha: 0.18, color: '#4361EE' },
      // Mid layers
      { freq: 0.013, amp: 0.26, speed: 0.55, phase: 1.1,  width: 2.0, alpha: 0.45, color: '#4361EE' },
      { freq: 0.016, amp: 0.20, speed: 0.70, phase: 3.7,  width: 1.5, alpha: 0.45, color: '#00D4FF' },
      // Fine detail layers (high freq, small amp)
      { freq: 0.024, amp: 0.10, speed: 1.10, phase: 0.6,  width: 1.0, alpha: 0.55, color: '#00D4FF' },
      { freq: 0.020, amp: 0.12, speed: 0.90, phase: 4.2,  width: 1.2, alpha: 0.50, color: '#7C3AED' },
      // Hero front line — bright, gradient
      { freq: 0.011, amp: 0.30, speed: 0.45, phase: 1.8,  width: 2.5, alpha: 1.00, color: 'GRADIENT' },
    ]

    /* ── Vertical bar spectrum ──────────────────────────────── */
    const BAR_COUNT  = 48
    const barPhases  = Array.from({ length: BAR_COUNT }, (_, i) => i * 0.42 + Math.random() * 2)
    const barSpeeds  = Array.from({ length: BAR_COUNT }, (_, i) => 0.6 + (i % 5) * 0.18 + Math.random() * 0.3)
    const barBase    = Array.from({ length: BAR_COUNT }, ()      => 0.06 + Math.random() * 0.08)

    /* ── Draw loop ──────────────────────────────────────────── */
    const draw = (timestamp) => {
      const t  = timestamp * 0.001
      const W  = canvas.getBoundingClientRect().width
      const H  = canvas.getBoundingClientRect().height
      const CY = H * 0.5

      ctx.clearRect(0, 0, W, H)

      /* Vertical bar spectrum (behind waves) */
      const barW   = (W / BAR_COUNT) * 0.55
      const barGap = W / BAR_COUNT

      for (let i = 0; i < BAR_COUNT; i++) {
        const x    = i * barGap + barGap * 0.5
        const env  = Math.sin(Math.PI * (i / BAR_COUNT)) // fade edges
        const raw  =
          Math.abs(Math.sin(t * barSpeeds[i] + barPhases[i])) * 0.5 +
          Math.abs(Math.sin(t * barSpeeds[i] * 1.7 + barPhases[i] * 0.5)) * 0.3 +
          barBase[i]
        const barH = Math.min(raw * env * H * 0.72, H * 0.85)

        const grad = ctx.createLinearGradient(x, CY - barH / 2, x, CY + barH / 2)
        grad.addColorStop(0,   'rgba(0,212,255,0)')
        grad.addColorStop(0.3, 'rgba(67,97,238,0.35)')
        grad.addColorStop(0.5, 'rgba(124,58,237,0.25)')
        grad.addColorStop(0.7, 'rgba(67,97,238,0.35)')
        grad.addColorStop(1,   'rgba(0,212,255,0)')

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.roundRect(x - barW / 2, CY - barH / 2, barW, barH, 2)
        ctx.fill()
      }

      /* Wave lines */
      waves.forEach(wave => {
        ctx.save()
        ctx.lineWidth  = wave.width
        ctx.lineCap    = 'round'
        ctx.lineJoin   = 'round'
        ctx.globalAlpha = wave.alpha

        /* Gradient stroke for hero line */
        if (wave.color === 'GRADIENT') {
          const sg = ctx.createLinearGradient(0, 0, W, 0)
          sg.addColorStop(0,    'rgba(0,212,255,0.2)')
          sg.addColorStop(0.15, '#00D4FF')
          sg.addColorStop(0.5,  '#4361EE')
          sg.addColorStop(0.85, '#7C3AED')
          sg.addColorStop(1,    'rgba(124,58,237,0.2)')
          ctx.strokeStyle = sg
          ctx.shadowColor = '#4361EE'
          ctx.shadowBlur  = 18
        } else {
          ctx.strokeStyle = wave.color
          ctx.shadowColor = wave.color
          ctx.shadowBlur  = wave.color === '#7C3AED' ? 22 : 14
        }

        const phaseOffset = t * wave.speed + wave.phase

        ctx.beginPath()
        const step = 3
        for (let x = 0; x <= W; x += step) {
          const nx  = x / W  // normalised 0-1
          const env = Math.pow(Math.sin(Math.PI * nx), 0.5) // smooth edges

          // Primary sinusoid + two harmonics for organic shape
          const y = CY + (
            Math.sin(nx * W * wave.freq + phaseOffset)             * wave.amp +
            Math.sin(nx * W * wave.freq * 2.3 + phaseOffset * 1.4) * wave.amp * 0.25 +
            Math.sin(nx * W * wave.freq * 0.7 + phaseOffset * 0.6) * wave.amp * 0.35
          ) * H * env

          x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
        }
        ctx.stroke()
        ctx.restore()
      })

      /* Centre dot cluster */
      ;[
        { x: 0.5,  r: 3,   c: '#00D4FF', blur: 12 },
        { x: 0.35, r: 1.5, c: '#4361EE', blur: 8  },
        { x: 0.65, r: 1.5, c: '#7C3AED', blur: 8  },
      ].forEach(dot => {
        ctx.save()
        ctx.shadowColor = dot.c
        ctx.shadowBlur  = dot.blur
        ctx.fillStyle   = dot.c
        ctx.globalAlpha =
          0.5 + 0.5 * Math.sin(t * 2.5 + dot.x * 6)
        ctx.beginPath()
        ctx.arc(W * dot.x, CY, dot.r, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      })

      animId = requestAnimationFrame(draw)
    }

    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full block ${className}`}
      style={typeof height === 'string' && height.includes('%')
        ? { height, display: 'block' }
        : { height: `${height}px` }
      }
    />
  )
}
