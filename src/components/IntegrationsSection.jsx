import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Code2, Cpu, Workflow, MessageSquare, Settings2 } from 'lucide-react'

const platforms = [
  { icon: Phone,        name: 'Aircall',          category: 'Voice Platform',      color: '#00D4FF',
    desc: 'Real-time dialect-aware transcription for call center intelligence. Understands local slang and code-switching.' },
  { icon: Code2,        name: 'REST API',          category: 'Developer Integration', color: '#4361EE',
    desc: 'Clean, versioned API with SDKs for Python, Node.js and more. Plug our data engine directly into your ML pipeline.' },
  { icon: Cpu,          name: 'AI Pipelines',      category: 'MLOps',               color: '#7C3AED',
    desc: 'Pre-built connectors for HuggingFace, Azure ML, and AWS SageMaker. Push validated datasets into your workflow.' },
  { icon: MessageSquare, name: 'Conversational AI', category: 'Chatbot & IVR',       color: '#00D4FF',
    desc: 'Train dialect-aware chatbots and IVR systems. Our annotated dialogue datasets cover formal and informal registers.' },
  { icon: Workflow,     name: 'Custom Pipelines',  category: 'Enterprise',          color: '#4361EE',
    desc: 'White-glove integration for enterprise AI teams. We map your requirements to a custom annotation workflow.' },
  { icon: Settings2,    name: 'ASR / TTS Engines', category: 'Speech AI',           color: '#7C3AED',
    desc: 'Export formats compatible with Kaldi, ESPnet, Whisper fine-tuning, and Coqui TTS — production-ready.' },
]

const codeSnippet = `// Deep Words API — Arabic ASR Integration
const dw = new DeepWordsClient({ apiKey: process.env.DW_KEY })

const result = await dw.transcribe({
  audio:   audioBuffer,
  dialect: 'auto',   // auto-detect dialect
  diarize: true,     // speaker separation
  slang:   true,     // colloquial understanding
})

console.log(result.transcript)
// → "مرحبا، كيف أقدر أساعدك اليوم؟"
// dialect: 'gulf', confidence: 0.974`

export default function IntegrationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="integrations" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.04)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-brand-cyan font-mono mb-3">Plug & Play</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4">
            Seamless <span className="gradient-text">Integrations</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Our data engine connects directly with the platforms you already use — no friction, no reformatting.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 mt-2" dir="rtl">
            محركنا يتكامل مع المنصات التي تستخدمها بالفعل — بدون تعقيد
          </p>
        </motion.div>

        {/* Platform grid — 1-col mobile → 2-col sm → 3-col lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mb-8 sm:mb-12 lg:mb-16">
          {platforms.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="card-dark p-4 sm:p-5 lg:p-6 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, ${p.color}50, transparent)` }}
                />
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `${p.color}15`, border: `1px solid ${p.color}25` }}
                  >
                    <Icon size={16} style={{ color: p.color }} />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{p.name}</p>
                    <p className="text-[11px] sm:text-xs text-slate-500">{p.category}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{p.desc}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Code block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="card-dark overflow-hidden mb-4 sm:mb-6"
        >
          {/* Code header */}
          <div className="flex items-center justify-between px-4 sm:px-5 py-2.5 sm:py-3 border-b border-brand-border bg-white/[0.02]">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/60" />
            </div>
            {/* Hide filename on very small screens */}
            <span className="hidden xs:block text-[10px] sm:text-xs text-slate-500 font-mono truncate mx-2">
              deepwords-integration.js
            </span>
            <span className="text-[10px] sm:text-xs text-brand-cyan font-mono px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/20 shrink-0">
              <span className="hidden sm:inline">Dialect-Aware </span>ASR
            </span>
          </div>
          {/* Code body — smaller font on mobile, scrollable */}
          <div className="overflow-x-auto">
            <pre className="p-4 sm:p-6 text-[11px] sm:text-sm font-mono text-slate-300 leading-relaxed min-w-0">
              <code>
                {codeSnippet.split('\n').map((line, i) => {
                  const isComment = line.trim().startsWith('//')
                  const isKey = /^\s*(const|await|let|var|console)/.test(line)
                  return (
                    <div key={i}>
                      {isComment ? (
                        <span className="text-slate-600">{line}</span>
                      ) : isKey ? (
                        <span>
                          {line.split(/(const|await|true|false|'[^']*'|"[^"]*")/g).map((part, j) =>
                            /^(const|await)$/.test(part) ? (
                              <span key={j} className="text-brand-purple">{part}</span>
                            ) : /^(true|false)$/.test(part) ? (
                              <span key={j} className="text-brand-cyan">{part}</span>
                            ) : /^['"]/.test(part) ? (
                              <span key={j} className="text-green-400">{part}</span>
                            ) : <span key={j}>{part}</span>
                          )}
                        </span>
                      ) : <span>{line}</span>}
                      {'\n'}
                    </div>
                  )
                })}
              </code>
            </pre>
          </div>
        </motion.div>

        {/* Aircall spotlight — 1-col mobile → 3-col md */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          {[
            { label: 'Dialect Understanding',   desc: 'Gulf, Egyptian, Levantine & Maghrebi — all in one pass', color: '#00D4FF' },
            { label: 'Slang & Code-switching',  desc: 'Recognizes Arabic-English mixing common in modern speech', color: '#4361EE' },
            { label: 'Real-time Confidence',    desc: 'Per-word confidence scores for downstream decision logic', color: '#7C3AED' },
          ].map((item, i) => (
            <div key={i} className="card-dark p-4 sm:p-5 text-center">
              <div className="w-2 h-2 rounded-full mx-auto mb-2 sm:mb-3"
                style={{ background: item.color, boxShadow: `0 0 10px ${item.color}` }}
              />
              <p className="text-xs sm:text-sm font-semibold text-white mb-1">{item.label}</p>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-snug">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
