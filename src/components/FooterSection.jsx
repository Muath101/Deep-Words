import { Mail, Globe, ArrowUpRight } from 'lucide-react'

const links = {
  Services: [
    { label: 'Voice Intelligence', href: '#services'      },
    { label: 'NLP Solutions',      href: '#services'      },
    { label: 'Medical Data',       href: '#services'      },
    { label: 'Integrations',       href: '#integrations'  },
  ],
  Company: [
    { label: 'About',   href: '#about'   },
    { label: 'Why Us',  href: '#why-us'  },
    { label: 'Contact', href: '#contact' },
  ],
  Contact: [
    { label: 'CEO',                href: 'mailto:a.atamrideep@gmail.com'    },
    { label: 'Vendor Management',  href: 'mailto:a.asimdeep@gmail.com'      },
    { label: 'AI Manager',         href: 'mailto:m.alhalwanideep@gmail.com' },
    { label: 'Project Mgmt',       href: 'mailto:a.alhalwanideep@gmail.com' },
  ],
}

const LogoSVG = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 sm:w-9 sm:h-9">
    <circle cx="20" cy="20" r="18" stroke="url(#fng)" strokeWidth="1.5" fill="url(#fbg)" />
    <rect x="6"  y="16" width="2.5" height="8"  rx="1.25" fill="url(#fwg)" />
    <rect x="10" y="12" width="2.5" height="16" rx="1.25" fill="url(#fwg)" />
    <rect x="14" y="10" width="2.5" height="20" rx="1.25" fill="url(#fwg)" />
    <rect x="18" y="14" width="2.5" height="12" rx="1.25" fill="url(#fwg)" />
    <circle cx="27" cy="14" r="2"   fill="url(#fwg)" />
    <circle cx="33" cy="18" r="1.5" fill="url(#fwg)" opacity="0.7" />
    <circle cx="30" cy="24" r="1.5" fill="url(#fwg)" opacity="0.7" />
    <circle cx="25" cy="28" r="1.5" fill="url(#fwg)" opacity="0.5" />
    <line x1="27" y1="14" x2="33" y2="18" stroke="url(#fwg)" strokeWidth="0.8" opacity="0.5" />
    <line x1="33" y1="18" x2="30" y2="24" stroke="url(#fwg)" strokeWidth="0.8" opacity="0.5" />
    <line x1="30" y1="24" x2="25" y2="28" stroke="url(#fwg)" strokeWidth="0.8" opacity="0.5" />
    <defs>
      <linearGradient id="fng" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00D4FF" /><stop offset="1" stopColor="#7C3AED" />
      </linearGradient>
      <linearGradient id="fwg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00D4FF" /><stop offset="1" stopColor="#7C3AED" />
      </linearGradient>
      <radialGradient id="fbg" cx="50%" cy="50%" r="50%">
        <stop stopColor="#0D1A2E" /><stop offset="1" stopColor="#050A14" />
      </radialGradient>
    </defs>
  </svg>
)

export default function FooterSection() {
  return (
    <footer className="relative border-t border-brand-border bg-brand-darker">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-blue/40 to-transparent" />

      {/* ── CTA Banner ──────────────────────────────────── */}
      <div className="relative overflow-hidden border-b border-brand-border">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 via-brand-purple/10 to-brand-cyan/5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-24 py-8 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-1 leading-snug">
              Ready to build with{' '}
              <span className="gradient-text">Deep Words</span>?
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm" dir="rtl">
              هل أنت مستعد للبناء مع Deep Words؟
            </p>
          </div>
          <a
            href="#contact"
            className="btn-primary px-6 sm:px-8 py-3 shrink-0 group min-h-[48px]"
          >
            Start Today
            <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* ── Main footer grid ─────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-24 py-10 sm:py-14">
        {/*
          Mobile:  brand full-width, then 3 link columns in 3-col grid
          Desktop: 4-col grid with brand in col-1
        */}
        <div className="flex flex-col gap-8 sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-10">

          {/* Brand column — full width on mobile */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-4 w-fit">
              <LogoSVG />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-base">
                  <span className="gradient-text">Deep</span>
                  <span className="text-white"> Words</span>
                </span>
              </div>
            </a>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-3 max-w-xs">
              The linguistic infrastructure for Arabic AI — clean data, superior models.
            </p>
            <p className="text-xs text-slate-700" dir="rtl">
              البنية التحتية اللغوية للذكاء الاصطناعي العربي
            </p>
            <div className="flex items-center gap-2 mt-3 text-xs text-slate-600">
              <Globe size={11} />
              <span>22+ Countries · 32+ Dialects</span>
            </div>
          </div>

          {/* Link columns — 3-col grid on mobile too */}
          <div className="grid grid-cols-3 sm:col-span-2 lg:col-span-3 gap-6 sm:gap-8 lg:gap-10">
            {Object.entries(links).map(([section, items]) => (
              <div key={section}>
                <h4 className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3 sm:mb-4">
                  {section}
                </h4>
                <ul className="space-y-2 sm:space-y-2.5">
                  {items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-xs sm:text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1 group"
                      >
                        <span className="leading-snug">{item.label}</span>
                        {item.href.startsWith('mailto:') && (
                          <Mail size={9} className="opacity-0 group-hover:opacity-60 transition-opacity text-brand-cyan shrink-0" />
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ─────────────────────────────────── */}
        <div className="mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-brand-border flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-[10px] sm:text-xs text-slate-600 text-center">
          <p>© {new Date().getFullYear()} Deep Words. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span className="glow-dot" style={{ width: 4, height: 4 }} />
            <span>Powering Arabic AI — Globally</span>
          </div>
          <p dir="rtl">جميع الحقوق محفوظة · Deep Words</p>
        </div>
      </div>
    </footer>
  )
}
