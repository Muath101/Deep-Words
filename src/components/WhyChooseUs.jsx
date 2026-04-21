import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Zap, ShieldCheck, Clock, Award, Database } from 'lucide-react'

const edges = [
  {
    icon: Award,     color: '#00D4FF',
    title: '97.4% Accuracy',         titleAr: 'دقة 97.4%',
    desc:  'Achieved through our proprietary Human-in-the-Loop pipeline — every output is reviewed by domain-expert annotators before delivery.',
    metric: '97.4%', metricLabel: 'Ground Truth',
  },
  {
    icon: Zap,       color: '#4361EE',
    title: 'Human-in-the-Loop',       titleAr: 'نموذج الإنسان في الحلقة',
    desc:  'AI speed combined with human precision. Our HITL model catches what automated systems miss — especially dialect nuance and colloquial speech.',
    metric: '3-Layer', metricLabel: 'QA Process',
  },
  {
    icon: Database,  color: '#7C3AED',
    title: '4,000+ Voice Hours',      titleAr: '+4000 ساعة صوتية',
    desc:  'Over four thousand hours of clean, labeled Arabic voice data — the largest commercially available Arabic voice corpus across all major dialects.',
    metric: '4,000+', metricLabel: 'Hours Delivered',
  },
  {
    icon: Users,     color: '#00D4FF',
    title: 'Native Speaker Network',  titleAr: 'شبكة المتحدثين الأصليين',
    desc:  'A vetted community of native Arabic speakers across every regional dialect, ensuring authentic pronunciation, vocabulary and intonation.',
    metric: '22+',   metricLabel: 'Countries',
  },
  {
    icon: ShieldCheck, color: '#4361EE',
    title: 'Enterprise Compliance',   titleAr: 'امتثال المؤسسات',
    desc:  'HIPAA & GDPR built-in from day one. Secure data handling protocols, signed NDAs, and encrypted pipelines for every engagement.',
    metric: '100%',  metricLabel: 'Compliant',
  },
  {
    icon: Clock,     color: '#7C3AED',
    title: 'Fast Turnaround',         titleAr: 'تسليم سريع',
    desc:  'Scalable infrastructure allows rapid delivery without sacrificing accuracy. From kick-off to delivery in days, not weeks.',
    metric: '15M+',  metricLabel: 'Words Dataset',
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="why-us" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(124,58,237,0.08)_0%,transparent_60%)]" />
      <div className="orb w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-brand-cyan left-[-150px] bottom-[10%]" style={{ opacity: 0.06 }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-brand-cyan font-mono mb-3">The Competitive Edge</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4">
            Why <span className="gradient-text">Deep Words</span>?
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Not just a data vendor — a quality-obsessed partner built for the demands of production-grade AI.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 mt-2" dir="rtl">
            لسنا مجرد مورّد بيانات — نحن شريك مهووس بالجودة لمتطلبات الذكاء الاصطناعي الإنتاجي
          </p>
        </motion.div>

        {/* Edge grid — 1-col mobile → 2-col md → 3-col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {edges.map((edge, i) => {
            const Icon = edge.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="card-dark p-5 sm:p-6 relative overflow-hidden group"
              >
                <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: edge.color }}
                />
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, ${edge.color}60, transparent)` }}
                />

                {/* Icon + metric row */}
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${edge.color}15`, border: `1px solid ${edge.color}25` }}
                  >
                    <Icon size={18} style={{ color: edge.color }} />
                  </div>
                  <div className="text-right">
                    <div className="text-xl sm:text-2xl font-black font-mono" style={{ color: edge.color }}>{edge.metric}</div>
                    <div className="text-[10px] sm:text-xs text-slate-600">{edge.metricLabel}</div>
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mb-0.5">{edge.title}</h3>
                <p className="text-[10px] sm:text-xs text-slate-500 mb-2" dir="rtl">{edge.titleAr}</p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{edge.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 sm:mt-10 lg:mt-12 card-dark p-6 sm:p-8 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/5 via-brand-purple/10 to-brand-blue/5" />
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-brand opacity-40" />
          <p className="text-xs sm:text-sm text-slate-500 uppercase tracking-widest font-mono mb-3" dir="rtl">
            الشركات التي تثق بنا
          </p>
          <p className="text-xl sm:text-2xl font-black text-white mb-2 leading-snug">
            Trusted by AI teams across{' '}
            <span className="gradient-text">enterprise, government & startups.</span>
          </p>
          <p className="text-slate-400 mb-5 sm:mb-6 text-xs sm:text-sm max-w-md mx-auto">
            From small research labs to Fortune-500 AI divisions — we scale with your needs.
          </p>
          <a href="#contact" className="btn-primary inline-flex px-6 sm:px-8 py-3 min-h-[48px]">
            Partner With Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
