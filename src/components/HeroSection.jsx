import { motion } from 'framer-motion'
import { ArrowRight, Play, Globe, Mic } from 'lucide-react'
import AnimatedWaveBackground from './AnimatedWaveBackground'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
})

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
    >
      {/* ── Background layers ────────────────────────────── */}
      <div className="absolute inset-0 grid-bg" />
      <div className="orb w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[600px] lg:h-[600px] bg-brand-blue top-[-100px] left-[-100px] sm:top-[-200px] sm:left-[-200px]" />
      <div className="orb w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-brand-purple bottom-[-80px] right-[-80px] sm:bottom-[-150px] sm:right-[-150px]" style={{ animationDelay: '3s' }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(67,97,238,0.10)_0%,transparent_65%)]" />

      {/* ── Animated wave — full-screen background ───────── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0    inset-x-0 h-32 sm:h-44 bg-gradient-to-b  from-brand-darker to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-32 sm:h-44 bg-gradient-to-t  from-brand-darker to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 left-0   w-12 sm:w-24 bg-gradient-to-r  from-brand-darker to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0  w-12 sm:w-24 bg-gradient-to-l  from-brand-darker to-transparent z-10 pointer-events-none" />
        {/* Lower opacity on mobile to keep text readable */}
        <AnimatedWaveBackground className="w-full h-full opacity-25 sm:opacity-35 md:opacity-45" height="100%" />
      </div>

      {/* ── Content ──────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Badge */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center mb-6 sm:mb-8">
          <div className="flex items-center gap-2 px-3 py-1.5 sm:px-4 rounded-full border border-brand-blue/40 bg-brand-blue/10 text-xs sm:text-sm text-brand-cyan font-medium">
            <span className="glow-dot" />
            <span className="hidden sm:inline">Arabic AI Infrastructure · 22+ Countries · 32+ Dialects</span>
            <span className="sm:hidden">22+ Countries · 32+ Dialects</span>
          </div>
        </motion.div>

        {/* Main headline — mobile-first scale */}
        <motion.h1
          {...fadeUp(0.2)}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-[1.05] tracking-tight mb-4 sm:mb-6"
        >
          <span className="text-white">Building the</span>
          <br />
          <span className="gradient-text">Linguistic Infrastructure</span>
          <br />
          <span className="text-white">for Global AI</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p {...fadeUp(0.35)} className="text-base sm:text-lg md:text-xl text-slate-400 max-w-xl mx-auto mb-3 sm:mb-4">
          Clean data. Superior AI.
        </motion.p>

        {/* Description */}
        <motion.p {...fadeUp(0.4)} className="text-sm sm:text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0">
          We bridge the Arabic data gap — delivering high-quality voice datasets, NLP annotations,
          and medical-grade language assets across{' '}
          <span className="text-slate-300 font-medium">22 Arab countries</span> and{' '}
          <span className="text-slate-300 font-medium">32+ dialects</span>.
        </motion.p>

        {/* Arabic tagline */}
        <motion.p {...fadeUp(0.45)} className="text-xs sm:text-sm text-slate-600 mb-8 sm:mb-10 font-light" dir="rtl">
          البنية التحتية اللغوية للذكاء الاصطناعي العالمي · بيانات نظيفة، ذكاء اصطناعي متفوق
        </motion.p>

        {/* CTA Buttons — full width on mobile, auto on sm+ */}
        <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-14 sm:mb-20 px-2 sm:px-0">
          <a
            href="#contact"
            className="btn-primary justify-center text-base py-3.5 px-6 sm:py-4 sm:px-8 min-h-[52px] group"
          >
            Start a Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="btn-outline justify-center text-base py-3.5 px-6 sm:py-4 sm:px-8 min-h-[52px] group"
          >
            <Play size={16} className="text-brand-cyan" />
            Explore Services
          </a>
        </motion.div>

        {/* Trust badges — 2×2 on mobile, 4-wide on sm+ */}
        <motion.div {...fadeUp(0.7)} className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-6 px-2 sm:px-0">
          {[
            { icon: <Globe size={13} />,                                               text: '22+ Arab Countries'      },
            { icon: <Mic size={13} />,                                                 text: '4,000+ Hours Voice'      },
            { icon: <span className="font-mono font-bold text-brand-cyan">97.4%</span>, text: 'Accuracy Rate'          },
            { icon: <span className="font-mono font-bold text-brand-cyan">15M+</span>,  text: 'Words Dataset'          },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center sm:justify-start gap-1.5 text-slate-400 text-xs bg-white/[0.03] sm:bg-transparent rounded-lg sm:rounded-none p-2 sm:p-0 border border-white/5 sm:border-0"
            >
              <span className="text-brand-cyan">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 inset-x-0 h-20 sm:h-24 bg-gradient-to-t from-brand-darker to-transparent z-20 pointer-events-none" />
    </section>
  )
}
