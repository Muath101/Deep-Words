import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 97.4, suffix: '%',  label: 'Transcription Accuracy', labelAr: 'دقة النسخ',                color: '#00D4FF' },
  { value: 4000, suffix: '+',  label: 'Hours of Voice Data',    labelAr: 'ساعة بيانات صوتية',        color: '#4361EE' },
  { value: 15,   suffix: 'M+', label: 'Words in Dataset',       labelAr: 'كلمة في قاعدة البيانات',   color: '#7C3AED' },
  { value: 32,   suffix: '+',  label: 'Arabic Dialects',        labelAr: 'لهجة عربية مغطاة',         color: '#00D4FF' },
  { value: 22,   suffix: '+',  label: 'Countries Served',       labelAr: 'دولة عربية',               color: '#4361EE' },
  { value: 100,  suffix: '%',  label: 'HIPAA & GDPR',           labelAr: 'التزام HIPAA وGDPR',       color: '#7C3AED' },
]

function CountUp({ target, suffix, color, active }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!active) return
    const isDecimal = target % 1 !== 0
    const steps = 60
    let step = 0
    const timer = setInterval(() => {
      step++
      const val = Math.min((target / steps) * step, target)
      setCurrent(isDecimal ? parseFloat(val.toFixed(1)) : Math.floor(val))
      if (step >= steps) clearInterval(timer)
    }, 1800 / steps)
    return () => clearInterval(timer)
  }, [active, target])

  return (
    <span className="font-black text-3xl sm:text-4xl lg:text-5xl" style={{ color }}>
      {current}
      <span className="text-xl sm:text-2xl lg:text-3xl ml-0.5">{suffix}</span>
    </span>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="stats" ref={ref} className="relative py-10 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10 lg:px-24">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <p className="text-xs uppercase tracking-widest text-slate-500 font-mono mb-2">By the numbers</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            The Scale Behind the <span className="gradient-text">Quality</span>
          </h2>
        </motion.div>

        {/* 2-col mobile → 3-col tablet → 6-col desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="card-dark p-4 sm:p-5 lg:p-6 text-center relative overflow-hidden"
            >
              <div
                className="absolute top-0 inset-x-0 h-0.5"
                style={{ background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)` }}
              />
              <CountUp target={stat.value} suffix={stat.suffix} color={stat.color} active={isInView} />
              <p className="text-xs text-slate-400 mt-1.5 sm:mt-2 leading-snug">{stat.label}</p>
              <p className="text-[10px] sm:text-xs text-slate-600 mt-0.5 leading-snug" dir="rtl">{stat.labelAr}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent" />
    </section>
  )
}
