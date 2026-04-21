import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Mail, User, Briefcase, Brain, FolderKanban, ArrowUpRight, MessageSquare } from 'lucide-react'

const team = [
  {
    role: 'Chief Executive Officer', roleAr: 'الرئيس التنفيذي',
    email: 'a.atamrideep@gmail.com',
    icon: User,        color: '#00D4FF',
    desc: 'Strategic direction, enterprise partnerships & investor relations',
    tag: 'Leadership',
  },
  {
    role: 'Vendor Management', roleAr: 'إدارة الموردين',
    email: 'a.asimdeep@gmail.com',
    icon: Briefcase,   color: '#4361EE',
    desc: 'Speaker sourcing, data collection partnerships & supply chain',
    tag: 'Operations',
  },
  {
    role: 'AI Manager', roleAr: 'مدير الذكاء الاصطناعي',
    email: 'm.alhalwanideep@gmail.com',
    icon: Brain,       color: '#7C3AED',
    desc: 'Model quality, HITL pipelines, research & technical delivery',
    tag: 'Technology',
  },
  {
    role: 'Project Management', roleAr: 'إدارة المشاريع',
    email: 'a.alhalwanideep@gmail.com',
    icon: FolderKanban, color: '#00D4FF',
    desc: 'Client coordination, delivery timelines & project execution',
    tag: 'Delivery',
  },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section id="contact" ref={ref} className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(124,58,237,0.08)_0%,transparent_55%)]" />
      <div className="orb w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-brand-blue right-[-80px] top-[0%]" style={{ opacity: 0.07 }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <p className="text-xs uppercase tracking-widest text-brand-cyan font-mono mb-3">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4">
            Talk to the <span className="gradient-text">Right Person</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-xl mx-auto leading-relaxed">
            Skip the inbox maze. Every inquiry goes directly to the team member who can help you most.
          </p>
          <p className="text-xs sm:text-sm text-slate-600 mt-2" dir="rtl">
            تواصل مباشرةً مع الشخص المناسب في فريقنا
          </p>
        </motion.div>

        {/* Team cards — 1-col mobile → 2-col md */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5 mb-6 sm:mb-10 lg:mb-12">
          {team.map((member, i) => {
            const Icon = member.icon
            return (
              <motion.a
                key={i}
                href={`mailto:${member.email}`}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="card-dark p-4 sm:p-6 lg:p-7 flex items-start gap-3 sm:gap-5 group relative overflow-hidden cursor-pointer no-underline active:scale-[0.99] transition-transform"
              >
                {/* Top accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, ${member.color}, transparent)` }}
                />
                {/* Hover glow */}
                <div
                  className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-15 transition-all duration-500"
                  style={{ background: member.color }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: `${member.color}15`,
                    border: `1px solid ${member.color}30`,
                  }}
                >
                  <Icon size={22} style={{ color: member.color }} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                        <h3 className="font-bold text-white text-sm sm:text-base">{member.role}</h3>
                        <span
                          className="text-[9px] sm:text-[10px] font-mono px-1.5 py-0.5 rounded-full border shrink-0"
                          style={{ color: member.color, borderColor: `${member.color}40`, background: `${member.color}10` }}
                        >
                          {member.tag}
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-slate-600" dir="rtl">{member.roleAr}</p>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-slate-600 group-hover:text-white shrink-0 mt-0.5 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>

                  <p className="text-xs sm:text-sm text-slate-400 mb-2 sm:mb-3 leading-relaxed">{member.desc}</p>

                  {/* Email — truncate on tiny screens */}
                  <div className="flex items-center gap-1.5 min-w-0">
                    <Mail size={12} style={{ color: member.color }} className="shrink-0" />
                    <span
                      className="text-[11px] sm:text-sm font-mono transition-colors duration-200 group-hover:text-white truncate"
                      style={{ color: member.color }}
                    >
                      {member.email}
                    </span>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 card-dark px-5 sm:px-8 py-5 sm:py-6 rounded-2xl text-center sm:text-left"
        >
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-9 h-9 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20 flex items-center justify-center">
              <MessageSquare size={16} className="text-brand-cyan" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Response within 24 hours</p>
              <p className="text-xs text-slate-500" dir="rtl">نرد في غضون 24 ساعة</p>
            </div>
          </div>
          <div className="hidden sm:block w-px h-10 bg-brand-border" />
          <p className="text-xs sm:text-sm text-slate-500 max-w-xs sm:max-w-sm">
            All communications treated with strict confidentiality. NDAs available upon request.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
