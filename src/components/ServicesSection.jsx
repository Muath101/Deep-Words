import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mic, Brain, HeartPulse, ChevronRight } from 'lucide-react'

const services = [
  {
    icon: Mic,
    color: '#00D4FF',
    gradient: 'from-cyan-500/15 to-transparent',
    title: 'Voice Intelligence',
    titleAr: 'ذكاء الصوت',
    tagline: 'Ground-truth audio at scale',
    taglineAr: 'بيانات صوتية عالية الدقة',
    description:
      'We collect, transcribe, and validate Arabic speech data using verified native speakers — producing datasets that power best-in-class ASR and TTS engines.',
    features: [
      { label: 'Custom Data Collection',   detail: 'Native speakers across all major dialects, recorded in controlled environments' },
      { label: 'Ground Truth Transcription', detail: 'Multi-pass human verification for maximum fidelity' },
      { label: 'TTS Voice Assets',          detail: 'Studio-quality recordings for text-to-speech model training' },
      { label: 'Dialect Classification',    detail: 'Automated + human tagging per region and sociolect' },
    ],
  },
  {
    icon: Brain,
    color: '#4361EE',
    gradient: 'from-blue-600/15 to-transparent',
    title: 'NLP Solutions',
    titleAr: 'حلول المعالجة اللغوية',
    tagline: 'Language data that AI can reason with',
    taglineAr: 'بيانات لغوية قابلة للاستدلال',
    description:
      'From entity recognition to sentiment analysis, we transform raw Arabic text into structured, ML-ready datasets that fuel accurate natural language understanding.',
    features: [
      { label: 'Data Annotation',               detail: 'Fine-grained tagging: POS, dependency, coreference, and semantic roles' },
      { label: 'Named Entity Recognition (NER)', detail: 'Entities annotated across news, social, legal and medical domains' },
      { label: 'Sentiment Analysis',             detail: 'Dialect-aware sentiment labeling with nuanced polarity scoring' },
      { label: 'Parallel Corpora',               detail: 'Arabic ↔ English / French aligned corpora for machine translation' },
    ],
  },
  {
    icon: HeartPulse,
    color: '#7C3AED',
    gradient: 'from-purple-600/15 to-transparent',
    title: 'Medical Data Excellence',
    titleAr: 'التميز في البيانات الطبية',
    tagline: 'Clinical-grade Arabic language data',
    taglineAr: 'بيانات طبية عربية بدقة سريرية',
    description:
      'Specialized pipelines for healthcare AI — handling sensitive patient data with absolute compliance. Our medical datasets meet the highest global standards.',
    features: [
      { label: 'HIPAA & GDPR Compliant', detail: 'End-to-end compliance frameworks built into every pipeline' },
      { label: 'Clinical Transcription',  detail: 'Doctor-patient dialogues, radiology reports, discharge summaries' },
      { label: 'Medical NER',             detail: 'Disease, drug, anatomy, and procedure entity tagging' },
      { label: 'De-identification',       detail: 'Automated + human PHI removal to ensure patient privacy' },
    ],
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="services" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(67,97,238,0.06)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-brand-cyan font-mono mb-3">What We Deliver</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Three specialized pillars — each engineered to solve a distinct Arabic AI data challenge.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 mt-2" dir="rtl">
            ثلاثة محاور متخصصة لحل تحديات بيانات الذكاء الاصطناعي العربي
          </p>
        </motion.div>

        {/* Service cards */}
        <div className="space-y-4 sm:space-y-6">
          {services.map((svc, i) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="card-dark overflow-hidden group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${svc.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: `linear-gradient(90deg, ${svc.color}, transparent)` }} />

                <div className="relative p-5 sm:p-7 lg:p-8">
                  {/* Always stacked on mobile, side-by-side on lg */}
                  <div className="flex flex-col lg:flex-row gap-5 sm:gap-7 lg:gap-8">

                    {/* Left: Title + description */}
                    <div className="lg:w-64 xl:w-72 shrink-0">
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0"
                          style={{ background: `${svc.color}18`, border: `1px solid ${svc.color}30` }}
                        >
                          <Icon size={20} style={{ color: svc.color }} />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-white">{svc.title}</h3>
                          <p className="text-xs text-slate-500" dir="rtl">{svc.titleAr}</p>
                        </div>
                      </div>
                      <p className="text-sm font-medium mb-2 sm:mb-3" style={{ color: svc.color }}>{svc.tagline}</p>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{svc.description}</p>
                    </div>

                    {/* Right: Feature list — 1-col mobile → 2-col sm */}
                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4">
                      {svc.features.map((feat, fi) => (
                        <div
                          key={fi}
                          className="flex items-start gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-xl bg-white/[0.025] border border-white/5 hover:border-white/10 transition-colors"
                        >
                          <ChevronRight size={13} className="mt-0.5 shrink-0" style={{ color: svc.color }} />
                          <div>
                            <p className="text-xs sm:text-sm font-semibold text-white mb-1">{feat.label}</p>
                            <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">{feat.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
