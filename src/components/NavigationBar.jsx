import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services',     labelAr: 'الخدمات',    href: '#services'      },
  { label: 'About',        labelAr: 'من نحن',     href: '#about'         },
  { label: 'Why Us',       labelAr: 'لماذا نحن',  href: '#why-us'        },
  { label: 'Integrations', labelAr: 'التكاملات',  href: '#integrations'  },
  { label: 'Contact',      labelAr: 'تواصل معنا', href: '#contact'       },
]

export default function NavigationBar() {
  const [scrolled,    setScrolled]   = useState(false)
  const [mobileOpen, setMobileOpen]  = useState(false)
  const [lang,       setLang]        = useState('en')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* close mobile menu on resize to desktop */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const toggleLang = () => {
    const next = lang === 'en' ? 'ar' : 'en'
    setLang(next)
    document.documentElement.setAttribute('dir',  next === 'ar' ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', next)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-brand-darker/95 backdrop-blur-xl border-b border-brand-border/60 py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* ── Logo ─────────────────────────────────────────── */}
        <a href="#" className="flex items-center gap-2.5 group min-w-0">
          <div className="relative w-9 h-9 shrink-0">
            <div className="absolute inset-0 rounded-full bg-gradient-brand opacity-20 group-hover:opacity-40 transition-opacity blur-sm" />
            <svg viewBox="0 0 40 40" fill="none" className="relative w-9 h-9">
              <circle cx="20" cy="20" r="18" stroke="url(#ng)" strokeWidth="1.5" fill="url(#bgfill)" />
              <rect x="6"  y="16" width="2.5" height="8"  rx="1.25" fill="url(#wg)" />
              <rect x="10" y="12" width="2.5" height="16" rx="1.25" fill="url(#wg)" />
              <rect x="14" y="10" width="2.5" height="20" rx="1.25" fill="url(#wg)" />
              <rect x="18" y="14" width="2.5" height="12" rx="1.25" fill="url(#wg)" />
              <circle cx="27" cy="14" r="2"   fill="url(#wg)" />
              <circle cx="33" cy="18" r="1.5" fill="url(#wg)" opacity="0.7" />
              <circle cx="30" cy="24" r="1.5" fill="url(#wg)" opacity="0.7" />
              <circle cx="25" cy="28" r="1.5" fill="url(#wg)" opacity="0.5" />
              <line x1="27" y1="14" x2="33" y2="18" stroke="url(#wg)" strokeWidth="0.8" opacity="0.5" />
              <line x1="33" y1="18" x2="30" y2="24" stroke="url(#wg)" strokeWidth="0.8" opacity="0.5" />
              <line x1="30" y1="24" x2="25" y2="28" stroke="url(#wg)" strokeWidth="0.8" opacity="0.5" />
              <line x1="27" y1="14" x2="30" y2="24" stroke="url(#wg)" strokeWidth="0.8" opacity="0.3" />
              <defs>
                <linearGradient id="ng" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00D4FF" /><stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
                <linearGradient id="wg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00D4FF" /><stop offset="1" stopColor="#7C3AED" />
                </linearGradient>
                <radialGradient id="bgfill" cx="50%" cy="50%" r="50%">
                  <stop stopColor="#0D1A2E" /><stop offset="1" stopColor="#050A14" />
                </radialGradient>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-base sm:text-lg tracking-tight">
              <span className="gradient-text">Deep</span>
              <span className="text-white"> Words</span>
            </span>
            
          </div>
        </a>

        {/* ── Desktop nav ───────────────────────────────────── */}
        <nav className="hidden md:flex items-center gap-0.5 lg:gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 lg:px-4 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200 whitespace-nowrap"
            >
              {lang === 'ar' ? link.labelAr : link.label}
            </a>
          ))}
        </nav>

        {/* ── Desktop CTA ───────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <button
            onClick={toggleLang}
            className="px-3 py-1.5 rounded-md text-xs font-mono text-slate-400 border border-brand-border hover:border-brand-blue hover:text-white transition-all min-h-[36px]"
          >
            {lang === 'en' ? 'عربي' : 'EN'}
          </button>
          <a href="#contact" className="btn-primary text-sm px-4 lg:px-5 py-2.5 min-h-[40px]">
            {lang === 'ar' ? 'ابدأ الآن' : 'Get Started'}
          </a>
        </div>

        {/* ── Mobile hamburger ─────────────────────────────── */}
        <button
          className="md:hidden p-2.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all active:scale-95 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <motion.div
            animate={{ rotate: mobileOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.div>
        </button>
      </div>

      {/* ── Mobile menu ───────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-brand-card/98 backdrop-blur-xl border-t border-brand-border overflow-hidden"
          >
            <div className="px-4 pt-3 pb-5 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3.5 rounded-xl text-base text-slate-300 hover:text-white hover:bg-white/5 active:bg-white/10 transition-all min-h-[52px] flex items-center"
                >
                  {lang === 'ar' ? link.labelAr : link.label}
                </motion.a>
              ))}

              <div className="flex gap-3 mt-3 pt-3 border-t border-brand-border/50">
                <button
                  onClick={toggleLang}
                  className="flex-1 py-3 rounded-xl text-sm text-slate-400 border border-brand-border hover:border-brand-blue active:scale-95 transition-all min-h-[48px]"
                >
                  {lang === 'en' ? 'عربي' : 'EN'}
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex-1 btn-primary justify-center text-sm py-3 min-h-[48px]"
                >
                  {lang === 'ar' ? 'ابدأ الآن' : 'Get Started'}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
