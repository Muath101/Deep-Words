import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AlertTriangle, CheckCircle2, Globe2, Languages } from 'lucide-react'

const dialects = [
  { name: 'Gulf',      nameAr: 'خليجية', color: '#00D4FF', pct: 92 },
  { name: 'Levantine', nameAr: 'شامية',  color: '#4361EE', pct: 88 },
  { name: 'Egyptian',  nameAr: 'مصرية',  color: '#7C3AED', pct: 95 },
  { name: 'Maghrebi',  nameAr: 'مغربية', color: '#00D4FF', pct: 85 },
]

const problems = [
  'Generic AI models fail on regional Arabic dialects',
  'Mispronunciation, slang & code-switching go unrecognized',
  'Medical & legal AI needs specialized Arabic corpora',
  'Limited TTS & ASR resources for underrepresented dialects',
]

const solutions = [
  'Native-speaker-collected data, dialect-verified',
  'Human-in-the-Loop quality pipeline at 97.4% accuracy',
  'HIPAA/GDPR-grade medical & legal datasets',
  '32+ dialects across the full Arabic-speaking world',
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
  })

  return (
    <section id="about" ref={ref} className="section-padding relative overflow-hidden">
      <div className="orb w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-brand-purple right-[-80px] top-[20%]" style={{ opacity: 0.08 }} />

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div {...fadeIn(0)} className="text-center mb-10 sm:mb-14 lg:mb-16">
          <p className="text-xs uppercase tracking-widest text-brand-cyan font-mono mb-3">The Arabic AI Gap</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
            Arabic is the{' '}
            <span className="gradient-text">World's 5th</span>
            <br />
            Most Spoken Language.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Yet it remains critically underrepresented in AI training data.
            Deep Words exists to fix that — permanently.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 mt-2" dir="rtl">
            نسدّ الفجوة في بيانات الذكاء الاصطناعي العربي عبر 22 دولة وأكثر من 32 لهجة
          </p>
        </motion.div>

        {/* Problem vs Solution — stack on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-10 sm:mb-14 lg:mb-16">
          <motion.div {...fadeIn(0.1)} className="card-dark p-5 sm:p-7 lg:p-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0">
                <AlertTriangle size={18} className="text-red-400" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm sm:text-base">The Problem</h3>
                <p className="text-xs text-slate-500" dir="rtl">المشكلة</p>
              </div>
            </div>
            <ul className="space-y-2.5 sm:space-y-3">
              {problems.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-400">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...fadeIn(0.2)} className="card-dark p-5 sm:p-7 lg:p-8 relative overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-purple" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center shrink-0">
                <CheckCircle2 size={18} className="text-brand-cyan" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm sm:text-base">Deep Words Solution</h3>
                <p className="text-xs text-slate-500" dir="rtl">حلول Deep Words</p>
              </div>
            </div>
            <ul className="space-y-2.5 sm:space-y-3">
              {solutions.map((s, i) => (
                <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 size={14} className="mt-0.5 text-brand-cyan shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Dialect coverage */}
        <motion.div {...fadeIn(0.3)} className="card-dark p-5 sm:p-7 lg:p-8 mb-8 sm:mb-12 lg:mb-16">
          <div className="flex items-center gap-3 mb-6 sm:mb-8">
            <Languages size={20} className="text-brand-cyan shrink-0" />
            <div>
              <h3 className="font-bold text-white text-base sm:text-lg">Dialect Coverage</h3>
              <p className="text-xs text-slate-500" dir="rtl">تغطية اللهجات العربية</p>
            </div>
          </div>
          {/* 1-col mobile → 2-col sm → 4-col lg */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {dialects.map((d, i) => (
              <div key={i}>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-sm font-semibold text-white">{d.name}</span>
                  <span className="text-xs font-mono" style={{ color: d.color }}>{d.pct}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-brand-border overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${d.pct}%` } : {}}
                    transition={{ duration: 1, delay: 0.4 + i * 0.1, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${d.color}, ${d.color}88)` }}
                  />
                </div>
                <p className="text-xs text-slate-600 mt-1" dir="rtl">{d.nameAr}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Geography badge */}
        <motion.div {...fadeIn(0.4)} className="text-center">
          <div className="inline-flex items-center gap-3 sm:gap-4 card-dark px-5 sm:px-8 py-4 sm:py-5 rounded-2xl w-full sm:w-auto max-w-sm sm:max-w-none mx-auto">
            <Globe2 size={24} className="text-brand-cyan shrink-0 sm:w-7 sm:h-7" />
            <div className="text-left">
              <p className="text-xl sm:text-2xl font-black gradient-text">22+ Arab Nations</p>
              <p className="text-xs sm:text-sm text-slate-400">From Morocco to Oman — fully covered</p>
              <p className="text-[10px] sm:text-xs text-slate-600 mt-0.5" dir="rtl">من المغرب حتى عُمان — تغطية شاملة</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
